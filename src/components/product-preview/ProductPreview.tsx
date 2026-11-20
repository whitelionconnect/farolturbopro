import { useRef, useState, type PointerEvent } from "react";
import { Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { productPreviewImages } from "./images";
import styles from "./ProductPreview.module.css";

const DURATION = 100_000;

export function ProductPreview() {
  const track = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; y: number; time: number; scroll: number; horizontal: boolean } | null>(null);
  const [paused, setPaused] = useState(false);
  const [dragging, setDragging] = useState(false);

  function move(event: PointerEvent<HTMLDivElement>) {
    const start = drag.current;
    const element = track.current;
    if (!start || !element) return;
    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    if (!start.horizontal && Math.abs(dx) > 6 && Math.abs(dx) > Math.abs(dy)) {
      start.horizontal = true;
      event.currentTarget.setPointerCapture(event.pointerId);
      setDragging(true);
    }
    if (!start.horizontal) return;
    const animation = element.getAnimations()[0];
    if (animation) {
      const cycle = element.scrollWidth / 2;
      animation.currentTime = ((start.time - dx / cycle * DURATION) % DURATION + DURATION) % DURATION;
    } else event.currentTarget.scrollLeft = start.scroll - dx;
  }

  function endDrag() { drag.current = null; setDragging(false); }

  return (
    <section id="product-preview" aria-labelledby="product-preview-title" className="scroll-mt-20 overflow-hidden border-y border-border bg-secondary py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 id="product-preview-title" className="text-2xl font-extrabold uppercase leading-tight sm:text-4xl">Veja por dentro tudo o que você vai receber!</h2>
        <p className="mt-5 text-muted-foreground sm:text-lg">Conheça os materiais, ferramentas e conteúdos que fazem parte do Farol Turbo Pro.</p>
      </div>
      <div className="mx-auto flex max-w-6xl justify-end px-4 pt-6">
        <Button variant="outline" size="icon" className={styles["motionControl"]} aria-label={paused ? "Reproduzir carrossel" : "Pausar carrossel"} title={paused ? "Reproduzir carrossel" : "Pausar carrossel"} onClick={() => setPaused(!paused)}>
          {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
        </Button>
      </div>
      <div role="region" aria-label="Prévia dos materiais Farol Turbo Pro" tabIndex={0}
        className={`${styles["viewport"]} ${paused || dragging ? styles["paused"] : ""} mt-6 py-5 outline-offset-4 focus-visible:outline-primary`}
        onPointerDown={(event) => {
          if (event.pointerType === "mouse" && event.button !== 0) return;
          const time = track.current?.getAnimations()[0]?.currentTime;
          drag.current = { x: event.clientX, y: event.clientY, time: typeof time === "number" ? time : 0, scroll: event.currentTarget.scrollLeft, horizontal: false };
        }}
        onPointerMove={move} onPointerUp={endDrag} onPointerCancel={endDrag} onLostPointerCapture={endDrag}
        onKeyDown={(event) => {
          if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
          event.preventDefault();
          const animation = track.current?.getAnimations()[0];
          const direction = event.key === "ArrowRight" ? 1 : -1;
          if (animation && typeof animation.currentTime === "number") animation.currentTime = (animation.currentTime + direction * 10_000 + DURATION) % DURATION;
          else event.currentTarget.scrollLeft += direction * 250;
        }}>
        <div ref={track} className={styles["track"]}>
          {[false, true].map((duplicate) => (
            <div key={String(duplicate)} className={styles["group"]} aria-hidden={duplicate || undefined}>
              {productPreviewImages.map((image) => (
                <img key={image.src} src={image.src} alt={duplicate ? "" : image.alt} width={image.width} height={image.height} className={styles["image"]} draggable={false} loading="lazy" decoding="async" />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
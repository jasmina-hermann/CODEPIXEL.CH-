import ImageFallback from "@/helpers/ImageFallback";
import type { LogoMarqueeType } from "@/types/index";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

interface PageData {
  notFound?: boolean;
  content?: string;
  frontmatter: LogoMarqueeType;
}

// Wie lange ein Logo sichtbar bleibt (in Millisekunden)
const SHOW_TIME_MS = 3200;

const TrustedClients = ({ data }: { data: PageData }) => {
  const section = data.frontmatter;
  const swissLabel = (section as any).swiss_label || "Webdesign aus der Schweiz";
  const swissAria = (section as any).swiss_aria || "Swiss Made, Webdesign aus der Schweiz";
  const items = section.items ?? [];
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (items.length < 2 || paused) return;
    const timer = window.setTimeout(() => {
      setActive((i) => (i + 1) % items.length);
    }, SHOW_TIME_MS);
    return () => window.clearTimeout(timer);
  }, [active, paused, items.length]);

  if (!items.length) {
    return null;
  }

  const logo: any = items[active];
  const partnerLink = logo?.link;
  const displayAsCard = logo?.display === "card";
  const displayLarge = logo?.display === "large";

  const partnerImage = (
    <ImageFallback
      src={logo?.logo}
      alt={logo?.name || `Referenz ${active + 1}`}
      className={
        displayAsCard
          ? "h-24 w-64 object-contain grayscale"
          : displayLarge
            ? "h-24 w-72 object-contain grayscale"
            : "h-20 w-60 object-contain grayscale"
      }
      width={displayAsCard ? "256" : displayLarge ? "288" : "240"}
      height={displayAsCard || displayLarge ? "96" : "80"}
    />
  );

  return (
    <section>
      <div className="main-container">
        <div className="container">
          <div className="py-20">
            <h2 className="text-h6 text-center mb-10 text-text-light font-medium">
              {section.title}
            </h2>

            <div
              className="relative mx-auto flex h-48 max-w-xl items-center justify-center overflow-hidden rounded-3xl"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              style={{
                border: "1px solid rgba(255, 152, 0, 0.18)",
                background:
                  "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(255,152,0,0.10), rgba(9,10,13,0.0) 70%), linear-gradient(160deg, rgba(23,16,6,0.6), rgba(9,10,13,0.85))",
                boxShadow: "0 0 40px -14px rgba(255,152,0,0.35)",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  className="flex flex-col items-center gap-4"
                  initial={{ opacity: 0, scale: 0.92, filter: "blur(8px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.04, filter: "blur(8px)" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {partnerLink && partnerLink !== "#" ? (
                    <a
                      href={partnerLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${logo?.name || "Referenz"} Webseite öffnen`}
                      className="block rounded-xl transition duration-300 hover:scale-105"
                    >
                      {partnerImage}
                    </a>
                  ) : (
                    partnerImage
                  )}
                  <span className="text-sm font-medium tracking-wide text-gray">
                    {logo?.name}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Punkte: zeigen, welches Logo gerade sichtbar ist */}
            {items.length > 1 && (
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {items.map((item: any, i: number) => (
                  <button
                    key={item?.name || i}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`${item?.name || `Referenz ${i + 1}`} anzeigen`}
                    className="h-2 rounded-full transition-all duration-300"
                    style={{
                      width: i === active ? "28px" : "8px",
                      background:
                        i === active
                          ? "linear-gradient(90deg, #ffd000, #ff9800)"
                          : "rgba(255, 248, 232, 0.18)",
                      boxShadow:
                        i === active ? "0 0 10px rgba(255, 208, 0, 0.6)" : "none",
                    }}
                  />
                ))}
              </div>
            )}

            <div
              className="mx-auto mt-12 flex w-fit items-center gap-4 rounded-2xl px-6 py-4"
              aria-label={swissAria}
              style={{
                border: "1px solid rgba(255, 174, 0, 0.42)",
                background:
                  "linear-gradient(135deg, rgba(16,16,18,0.96), rgba(26,20,10,0.92))",
                boxShadow:
                  "0 0 34px rgba(255, 153, 0, 0.14), inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                role="img"
                aria-label="Schweizerkreuz"
                className="shrink-0"
              >
                <rect width="48" height="48" rx="10" fill="#D52B1E" />
                <path
                  d="M19 10h10v9h9v10h-9v9H19v-9h-9V19h9z"
                  fill="#FFFFFF"
                />
              </svg>

              <div className="leading-tight">
                <div
                  className="text-lg font-semibold tracking-[0.16em]"
                  style={{ color: "#FFFFFF" }}
                >
                  SWISS MADE
                </div>
                <div
                  className="mt-1 text-sm font-medium"
                  style={{ color: "#FFAA00" }}
                >
                  {swissLabel}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;

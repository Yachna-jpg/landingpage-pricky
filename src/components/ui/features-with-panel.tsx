"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FeatureItem {
  title: string;
  shortLine: string;
  alt?: string;
  content: string | React.ReactNode;
}

function FeatureMedia({
  content,
  alt,
}: {
  content: string | React.ReactNode;
  alt?: string;
}) {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
      videoRef.current.play().catch(() => { });
    }
  }, [content]);

  if (typeof content !== "string") {
    return <div className="w-full h-full">{content}</div>;
  }

  const isVideo = /\.(mp4|webm|ogg)$/i.test(content);
  const isImage =
    /\.(jpg|jpeg|png|webp|gif|avif|svg)$/i.test(content) ||
    /unsplash|images\./i.test(content);

  if (isVideo) {
    return (
      <video
        ref={videoRef}
        key={content}
        src={content}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="w-full h-full object-contain"
      />
    );
  }

  if (isImage) {
    return (
      <img src={content} alt={alt} className="w-full h-full object-contain" />
    );
  }

  return (
    <div className="flex items-center justify-center w-full h-full p-8">
      <p className="text-sm text-muted-foreground leading-relaxed">{content}</p>
    </div>
  );
}

const items: FeatureItem[] = [
  {
    title: "Practice like the real exam.",
    shortLine: "Solve real exam-style questions with marks, just like your paper.",
    alt: "Practice like the real exam preview",
    content: "/video2.mp4",
  },
  {
    title: "Make your own paper.",
    shortLine: "Pick the date, choose your topics, and Pricky builds your test.",
    alt: "Make your own paper preview",
    content: "/video12.mp4",
  },
  {
    title: "AI checks your answer.",
    shortLine: "Wrong answer? Pricky gives you a hint and helps you fix it step by step.",
    alt: "AI checks your answer preview",
    content: "/video3.mp4",
  },
  {
    title: "Notes to learn the topic.",
    shortLine: "After the practice paper, read simple notes to understand the topic.",
    alt: "Notes to learn the topic preview",
    content: "/video4.mp4",
  },
  {
    title: "Save your exam date with syllabus.",
    shortLine: "Practice the syllabus without going to practice tab.",
    alt: "Save your exam date with syllabus preview",
    content: "/video1.mp4",
  },
];

export default function FeaturesWithPanel() {
  const [active, setActive] = React.useState(0);

  return (
    <section id="features" className="relative w-full py-6 lg:py-8" style={{ backgroundColor: "var(--bg-canvas)" }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 lg:items-stretch">
          <div>
            <div className="mb-8">
              <span className="eyebrow-tag" style={{ marginBottom: "12px" }}>
                Interactive Features
              </span>
              <h2
                className="text-3xl font-serif font-normal tracking-tight text-foreground md:text-4xl lg:text-5xl mt-2"
                style={{ fontFamily: "var(--font-serif)", letterSpacing: "-0.025em" }}
              >
                Why students love Pricky.
              </h2>
              <p
                className="mt-3 text-base md:text-lg text-muted-foreground max-w-xl"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Everything you need to master your syllabus with real past papers, instant AI hints, and tailored tests.
              </p>
            </div>

            <ul className="flex flex-col gap-2.5">
              {items.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.07,
                    ease: "easeOut",
                  }}
                  onClick={() => setActive(index)}
                  className={cn(
                    "flex flex-col px-4 py-3.5 rounded-xl cursor-pointer transition-all duration-200 border",
                    active === index
                      ? "ring-1 ring-foreground/80 border-foreground/30 bg-white shadow-xs"
                      : "ring-1 ring-transparent border-transparent hover:bg-black/[0.02]",
                  )}
                >
                  <div className="flex flex-row items-start gap-3.5 w-full">
                    <span
                      className={cn(
                        "size-7 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 transition-colors duration-200 mt-0.5",
                        active === index
                          ? "bg-foreground text-background"
                          : "bg-muted text-muted-foreground",
                      )}
                    >
                      {index + 1}
                    </span>
                    <div className="flex flex-col gap-0.5 flex-1">
                      <span
                        className={cn(
                          "text-base font-medium transition-colors duration-200",
                          active === index
                            ? "text-foreground font-semibold"
                            : "text-muted-foreground",
                        )}
                      >
                        {item.title}
                      </span>
                      <span className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {item.shortLine}
                      </span>
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {active === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                        className="w-full overflow-hidden lg:hidden"
                      >
                        <Card className="w-full mt-3 overflow-hidden p-0 gap-0 aspect-video relative rounded-xl border border-hairline shadow-sm bg-black/5" style={{ aspectRatio: "16 / 9" }}>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <FeatureMedia
                              content={item.content}
                              alt={item.alt}
                            />
                          </div>
                        </Card>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:flex items-center" style={{ marginRight: "-80px" }}>
            <Card className="relative w-full overflow-hidden p-0 gap-0 border border-hairline shadow-md rounded-2xl bg-black/5" style={{ aspectRatio: "16 / 9", minHeight: "520px" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <FeatureMedia
                    content={items[active].content}
                    alt={items[active].alt}
                  />
                </motion.div>
              </AnimatePresence>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

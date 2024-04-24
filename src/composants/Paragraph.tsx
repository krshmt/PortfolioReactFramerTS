import React, { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

function Paragraph({ value }: { value: string }) {
  const element = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: [1, 0.1],
  });

  const mots = value.split(" ");

  return (
    <p className="paragraphe" ref={element}>
      {mots.map((mot, index) => {
        const start = index / mots.length;
        const end = start + 1 / mots.length;
        return (
          <Mot key={index} range={[start, end]} progress={scrollYProgress}>
            {mot}
          </Mot>
        );
      })}
    </p>
  );
}

function Mot({ children, range, progress }: { children: string; range: number[]; progress: any }) {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="mot">
      <span className="shadow">{children}</span>
        <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
);
}

export default Paragraph;

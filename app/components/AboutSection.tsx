'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <div className="max-w-4xl mx-auto px-4 text-center md:text-left">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold mb-6 text-olive"
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="text-base md:text-lg leading-relaxed text-forest"
      >
        I’m a dedicated web developer with a passion for clean code, creative UI/UX design, and building
        digital solutions that make a difference. Whether it’s a sleek portfolio or a complex web app,
        I aim to deliver results that are not only functional but also visually appealing.
      </motion.p>
    </div>
  );
}

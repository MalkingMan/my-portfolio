'use client';

import { motion } from 'framer-motion';
import AboutSection from './components/AboutSection';
import HobbySection from './components/HobbySection';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FEFAE0] text-[#283618] px-6 py-12 space-y-32 overflow-y-auto">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
        <div className="text-center md:text-left space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Hi, I’m Array 
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl max-w-xl"
          >
            I’m a passionate web developer focused on building beautiful, fast, and user-friendly digital experiences.
          </motion.p>
        </div>

        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          src="/profile.jpg"
          alt="Profile"
          className="w-60 h-60 rounded-lg object-cover shadow-lg"
        />
      </section>

      {/* Hobby Section */}
      <section id="hobby">
        <HobbySection />
      </section>  

      {/* About Section */}
      <section id="about">
        <AboutSection />
      </section>
    </main>
  );
}

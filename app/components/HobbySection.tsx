'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const mountains = [
  { name: 'Gunung Semeru', image: '/mountains/semeru.jpg' },
  { name: 'Gunung Rinjani', image: '/mountains/rinjani.jpg' },
  { name: 'Gunung Sindoro', image: '/mountains/sindoro.jpg' },
  { name: 'Gunung Prau', image: '/mountains/prau.jpg' },
  { name: 'Gunung Merbabu', image: '/mountains/merbabu.jpg' },
  { name: 'Gunung Slamet', image: '/mountains/slamet.jpg' },
  { name: 'Gunung Cikuray', image: '/mountains/cikuray.jpg' },
  { name: 'Gunung Gede', image: '/mountains/gede.jpg' },
];

export default function AboutSection() {
  return (
    <div className="max-w-6xl mx-auto px-4 text-center space-y-24">
      {/* Hobby Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Hobby</h2>
        <p className="text-base md:text-lg leading-relaxed mb-8">
          Salah satu hobi saya adalah mendaki gunung. Berikut adalah beberapa gunung yang telah saya daki:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mountains.map((mountain, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="overflow-hidden">
                <Image
                  src={mountain.image}
                  alt={mountain.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="bg-white text-warm-brown py-3 px-4">
                <p className="font-medium">{mountain.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >

      </motion.div>
    </div>
  );
}

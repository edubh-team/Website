import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="py-12 bg-[#EAEEFE] sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">About EduBH</h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">We are dedicated to bridging the gap between academia and industry by providing comprehensive, industry-aligned educational programs.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 50, rotate: -5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.07 }}
            className="bg-gray-50 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
            <p className="mt-2 text-base text-gray-600">To empower students with the knowledge and skills required to excel in their careers and contribute meaningfully to the global workforce.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50, rotate: -5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.07 }}
            className="bg-gray-50 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold text-gray-900">Our Vision</h3>
            <p className="mt-2 text-base text-gray-600">To be a leading platform for transformative education, recognized for innovation, excellence, and impact on student success.</p>
          </motion.div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 50, rotate: -5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.07 }}
            className="bg-gray-50 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold text-gray-900">Abhijit Diwivedi</h3>
            <p className="mt-2 text-base text-gray-600">CEO & Founder</p>
            <p className="text-sm text-gray-500">With over 8 years of experience in educational leadership and technology.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50, rotate: -5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.07 }}
            className="bg-gray-50 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold text-gray-900">Administrator 2</h3>
            <p className="mt-2 text-base text-gray-600">Jane Smith - Head of Programs</p>
            <p className="text-sm text-gray-500">Expert in curriculum development and industry partnerships.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

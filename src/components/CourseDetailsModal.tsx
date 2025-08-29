import React from "react";
import { Course } from "@/data/courses";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

interface CourseDetailsModalProps {
  course: Course | null;
  onClose: () => void;
}

const CourseDetailsModal: React.FC<CourseDetailsModalProps> = ({
  course,
  onClose,
}) => {
  if (!course) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-md px-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="bg-gradient-to-br from-white to-blue-100 dark:from-gray-700 dark:to-gray-900 rounded-2xl shadow-2xl p-6 md:p-10 max-w-4xl w-full relative max-h-[calc(100vh-160px)] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 text-3xl font-light leading-none"
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">{course.title}</h2>
        <p className="text-blue-700 dark:text-blue-400 text-lg font-medium mb-2">Category: {course.category}</p>
        <p className="text-gray-800 dark:text-gray-300 text-base mb-4">Duration: {course.duration}</p>
        <p className="text-gray-900 dark:text-gray-200 text-base leading-relaxed mb-8">{course.description}</p>
        <a
          href="/apply"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-200 shadow-md"
        >
          Enroll Now
        </a>
      </motion.div>
    </motion.div>
  );
};

export default CourseDetailsModal;

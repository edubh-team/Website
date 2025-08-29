"use client";

import { courses, Course } from "@/data/courses";
import React, { useState, useEffect } from "react";
import CourseDetailsModal from "@/components/CourseDetailsModal";
import { AnimatePresence, motion } from "framer-motion";
import HamburgerMenuToggle from "@/components/HamburgerMenuToggle";
import cogImage from "@/assets/cog.png";
import cylImage from "@/assets/cylinder.png";
import noodelImage from "@/assets/noodle.png";
import amityLogo from "@/assets/amity.png"; // Import the Amity logo
import { useRef } from "react";
import { useScroll, useTransform, easeInOut } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";

interface CourseCardProps {
  course: Course;
  onCourseClick: (course: Course) => void;
}

interface CategorySidebarProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  onCloseSidebar: () => void;
  isMobile: boolean;
}

const CategorySidebar: React.FC<CategorySidebarProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  onCloseSidebar,
  isMobile,
}) => {
  return (
    <div className="w-full bg-white p-4">
      {isMobile && (
        <button
          onClick={onCloseSidebar}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
          aria-label="Close sidebar"
        >
          &times;
        </button>
      )}
      <h3 className="text-xl font-semibold mb-4">Categories</h3>
      <ul className="text-left">
        <li className="mb-2">
          <button
            onClick={() => {
              console.log("Selecting All Courses");
              onSelectCategory(null);
              if (isMobile) {
                onCloseSidebar();
              }
            }}
            className={`block w-full text-left py-2 px-4 rounded-md ${!selectedCategory ? "bg-blue-600 text-white" : "hover:bg-gray-100"}`}
          >
            All Courses
          </button>
        </li>
        {categories.map((category) => (
          <li key={category} className="mb-2">
            <button
              onClick={() => {
                console.log("Selected category:", category);
                onSelectCategory(category as any);
                if (isMobile) {
                  onCloseSidebar();
                }
              }}
              className={`block w-full text-left py-2 px-4 rounded-md ${selectedCategory === category ? "bg-blue-600 text-white" : "hover:bg-gray-100"}`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const CourseCard: React.FC<CourseCardProps> = ({ course, onCourseClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md p-6 relative pb-16"
      // onClick={() => onCourseClick(course)}
    >
      <h2 className="text-2xl font-semibold mb-2">{course.title}</h2>
      <p className="text-gray-600 text-sm mb-4">Category: {course.category}</p>
      <p className="text-gray-600 text-sm mb-4">Duration: {course.duration}</p>
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)" }}
        whileTap={{ scale: 0.95 }}
        onClick={(e) => {
          e.stopPropagation(); // Prevent card's onClick from firing
          onCourseClick(course);
        }}
        className="absolute bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center group"
      >
        <IconArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-200" />
      </motion.button>
      {/* <p className="text-gray-700 mb-4">
        {`${course.description.substring(0, 100)}...`}
      </p> */}
    </div>
  );
};

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(courses);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const translateY = useTransform(scrollY, [0, 100], [0, -50]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredCourses(courses.filter((course) => course.category === selectedCategory));
    } else {
      setFilteredCourses(courses);
    }
  }, [selectedCategory]);

  const categories = Array.from(new Set(courses.map((course) => course.category)));

  const handleCourseClick = (course: Course) => {
    setSelectedCourse(course);
  };

  const handleCloseModal = () => {
    setSelectedCourse(null);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] pt-32 px-8 pb-8 relative overflow-hidden" ref={heroRef}>
      <motion.img
        src={cogImage.src}
        alt="Cog image"
        width={500}
        height={500}
        className="hidden md:block absolute md:max-w-none md:left-30 lg:left-40 top-60 z-0"
        animate={{ translateY: [-30, 30] }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 3,
          ease: easeInOut,
        }}
      />
      <motion.img
        src={cylImage.src}
        alt="Cylinder image"
        width={250}
        height={250}
        className="hidden md:block md:absolute -top-8 left-0 z-0"
        style={{ translateY: translateY }}
      />
      <motion.img
        src={noodelImage.src}
        alt="Noodel image"
        width={300}
        height={300}
        className="hidden lg:block absolute bottom-0 right-0 rotate-[30deg] z-0"
        style={{ translateY: translateY, rotate: 30 }}
      />

      <div className="flex flex-col items-center mb-4">
        <img src={amityLogo.src} alt="Amity Logo" className="h-16 w-auto mb-4" />
        <h1 className="text-4xl font-bold text-center">Our Courses</h1>
      </div>
      <p className="text-lg text-center text-gray-600 mb-10">Explore our wide range of programs.</p>
      <div className="md:hidden mb-4 flex justify-start">
        <HamburgerMenuToggle
          isOpen={isSidebarOpen}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />
      </div>
      <div className="flex flex-col md:flex-row relative z-10">
        {/* Desktop Sidebar (always visible, no animation) */}
        {!isMobile && (
          <div className="w-80 p-6 mr-8 h-full bg-white rounded-lg -mt-25">
            <CategorySidebar
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              onCloseSidebar={handleCloseSidebar}
              isMobile={isMobile}
            />
          </div>
        )}

        {/* Mobile Sidebar (animated) */}
        <AnimatePresence>
          {isMobile && isSidebarOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="absolute top-[-4rem] left-0 w-80 p-6 shadow-lg z-30 bg-white rounded-lg"
            >
              <CategorySidebar
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                onCloseSidebar={handleCloseSidebar}
                isMobile={isMobile}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow flex-1 h-full">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} onCourseClick={handleCourseClick} />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedCourse && <CourseDetailsModal course={selectedCourse} onClose={handleCloseModal} />}
      </AnimatePresence>
    </div>
  );
}

"use client";

import ArrowIcon from "@/assets/arrow-right.svg";
import springImage from "@/assets/spring.png";
import starImage from "@/assets/star.png";
import SectionHeader from "@/components/section-header";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <SectionHeader
          title="Ready to Transform Your Career?"
          description="Take the first step towards your integrated education journey. Our counselors are here to guide you through your academic and professional growth."
        >
          <motion.img
            style={{ translateY: translateY }}
            src={starImage.src}
            alt="Star Image"
            width={360}
            height={360}
            className="absolute -left-[350px] -top-[137px]"
          />
          <motion.img
            style={{ translateY: translateY }}
            src={springImage.src}
            alt="Spring Image"
            width={360}
            height={360}
            className="absolute -right-[331px] -top-[19px]"
          />
        </SectionHeader>
        <div className="flex gap-2 justify-center item-center mt-10">
          <button className="btn btn-primary" onClick={() => {
            window.location.href = '/apply';
          }}>Get Started Today</button>
          <button className="btn btn-text gap-1" onClick={() => {
            const el = document.getElementById('product-showcase');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}>
            <span>View Programs</span>
            <ArrowIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

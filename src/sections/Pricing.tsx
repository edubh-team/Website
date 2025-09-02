"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import SectionHeader from "@/components/section-header";
// import IITP from "@/assets/Indian_Institute_of_Technology,_Patna.png"; // Commented out IITP logo
// import Manipal from "@/assets/manipal.png"; // Commented out Manipal logo
import Amity from "@/assets/amity.png";

// Placeholder background images - replace with actual university specific background images
// import IITPBackground from "@/assets/iit-patna-online-bsc.webp"; // Using bits.png as a placeholder
// import ManipalBackground from "@/assets/manipal-uni.jpg"; // Commented out Manipal background image
import AmityBackground from "@/assets/amity-university-noida.jpg"; // Using pyramid.png as a placeholder

const DummyContent = ({ description, duration, mode }: { description: string; duration: string; mode: string }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-4">
        {description}
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-sm md:text-base">
        <div className="font-semibold text-neutral-700 dark:text-neutral-200">Duration: <span className="font-normal text-neutral-600 dark:text-neutral-300">{duration}</span></div>
        <div className="font-semibold text-neutral-700 dark:text-neutral-200">Mode: <span className="font-normal text-neutral-600 dark:text-neutral-300">{mode}</span></div>
      </div>
    </div>
  );
};

const data = [
  /*
  {
    category: "University",
    title: "Indian Institute of Technology, Patna",
    src: IITP,
    content: <DummyContent description="One of the most prestigious engineering institutes in India, offering undergraduate and postgraduate programs in various engineering and science disciplines." duration="4 Years" mode="On-Campus" />,
    website: "https://www.iitp.ac.in/",
    backgroundImage: IITPBackground,
  },
  */
  /*
  {
    category: "University",
    title: "Manipal Academy of Higher Education",
    src: Manipal,
    content: <DummyContent description="A leading private university known for its programs in health sciences, engineering, management, and humanities. It has a strong focus on research and innovation." duration="Various" mode="On-Campus/Online" />,
    website: "https://manipal.edu/",
    backgroundImage: ManipalBackground,
  },
  */
  {
    category: "University",
    title: "Amity University",
    src: Amity,
    content: <DummyContent description="A multi-campus private university offering a wide range of undergraduate and postgraduate courses in diverse fields like engineering, management, law, and mass communication." duration="Various" mode="On-Campus/Online" />,
    website: "https://www.amity.edu/",
    backgroundImage: AmityBackground,
  },
];

export const Pricing = () => {
  const cards = data.map((card, index) => (
    <Card key={card.title} card={card} index={index} />
  ));

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF]">
      <div className="container">
        <SectionHeader
          title="Choose Your Course"
          description="Explore our comprehensive range of undergraduate, postgraduate, and professional programs designed for modern career success."
        />
        <Carousel items={cards} />
      </div>
    </section>
  );
};

"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
  
const content = [
  {
    title: "Expert Instructors",
    description: "Learn from professional musicians who have years of experience both performing and teaching. Our instructors are passionate about helping students grow."
  },
  {
    title: "Customized Learning Paths",
    description: "We understand that every student is different, so we offer personalized lessons to suit individual skill levels and musical goals."
  },
  {
    title: "Diverse Course Offerings",
    description: "From classical music to modern genres, we offer a wide range of courses covering various instruments, vocal training, music theory, and more."
  },
  {
    title: "State-of-the-Art Facilities",
    description: "Practice and perform in well-equipped, modern studios with top-notch instruments and recording equipment to enhance your learning experience."
  },
  {
    title: "Community & Collaboration",
    description: "Join a vibrant community of fellow music enthusiasts. Participate in group workshops, jam sessions, and live performances to grow as a musician."
  },
  {
    title: "Flexible Learning Options",
    description: "We offer both in-person and online lessons, providing flexible scheduling options that fit your lifestyle and learning preferences."
  },
  {
    title: "Performance Opportunities",
    description: "Take part in recitals, concerts, and public performances to showcase your talent and gain real-world experience on stage."
  }
];


function WhyChooseUs() {
  return (
    <div className=' dark:text-neutral-200'>
    <StickyScroll content={content} />

    </div>
  )
}

export default WhyChooseUs
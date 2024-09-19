"use client";
import React from 'react';
import { WavyBackground } from './ui/wavy-background'; // Ensure this exists
import { AnimatedTooltip } from "./ui/animated-tooltip"; // Ensure this exists

export const Instructor = () => {

  // Fixed the image URLs to direct image links
  const instructors = [
    {
      id: 1,
      name: "John Doe",
      designation: "Piano Instructor",
      // image: "https://images.unsplash.com/photo-1600180758898-0a6bde1d92e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDZ8fG1hbnxlbnwwfHx8fDE2Njc0NDczMzA&ixlib=rb-1.2.1&q=80&w=400"
    },
    {
      id: 2,
      name: "Emily Smith",
      designation: "Vocal Coach",
      // image: "https://images.unsplash.com/photos/man-wearing-white-v-neck-shirt-iFgRcqHznqg"
    },
    {
      id: 3,
      name: "Michael Johnson",
      designation: "Guitar Instructor",
      // image: "https://images.unsplash.com/photo-1509475826633-fed577a2c71b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG1hbnxlbnwwfHx8fDE2Njc0NDc0MTg&ixlib=rb-1.2.1&q=80&w=400"
    },
    {
      id: 4,
      name: "Sophia Lee",
      designation: "Violin Instructor",
      // image: "https://images.unsplash.com/photo-1522098553979-ffc7f79c5d87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHdvbWFufGVufDB8fHx8MTY2NzQ0NzQ2Nw&ixlib=rb-1.2.1&q=80&w=400"
    },
    {
      id: 5,
      name: "David Kim",
      designation: "Jazz Improvisation Instructor",
      // image: "https://images.unsplash.com/photo-1542239041-9db062ac5bc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG1hbnxlbnwwfHx8fDE2Njc0NDc0NDY&ixlib=rb-1.2.1&q=80&w=400"
    }
  ];
  

  return (
    <div className='relative h-[40rem] overflow-hidden flex items-center justify-center dark:text-neutral-200'>
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className='text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8'>
          Meet Our Instructors
        </h2>
        <p className='text-base md:text-lg text-white text-center mb-4'>
          Discover the talented professionals who will guide your musical journey
        </p>
        <div className='flex flex-row items-center justify-center mb-10 w-full'>
            <AnimatedTooltip items={instructors}/>
        </div>
      </WavyBackground>
    </div>
  );
};

"use client";
import React from 'react'
import Link from 'next/link';
import { HoverEffect } from "./ui/card-hover-effect";


function UpcomingWebinars() {
 
    const musicWebinars = [
        {
          title: "Mastering Piano Techniques for All Levels",
          description: "Explore essential piano techniques from beginner to advanced levels, designed to help you excel in performance and practice.",
          slug: "mastering-piano-techniques",
          isFeatured: true,
        },
        {
          title: "Vocal Warm-Ups and Exercises for Singers",
          description: "Learn effective vocal warm-ups and exercises to enhance your vocal range and maintain a healthy voice.",
          slug: "vocal-warm-ups-exercises",
          isFeatured: true,
        },
        {
          title: "Music Theory Basics for Beginners",
          description: "An introduction to music theory concepts such as scales, chords, and intervals to build a solid foundation for any musician.",
          slug: "music-theory-basics",
          isFeatured: false,
        },
        {
          title: "The Art of Songwriting: From Concept to Creation",
          description: "Discover the process of songwriting, from generating ideas to composing lyrics and melodies that captivate audiences.",
          slug: "songwriting-art-webinar",
          isFeatured: true,
        },
        {
          title: "Jazz Improvisation Techniques for Musicians",
          description: "Enhance your improvisational skills by learning jazz techniques and approaches for spontaneous musical creativity.",
          slug: "jazz-improvisation-techniques",
          isFeatured: false,
        },
        {
          title: "Digital Music Production: Tools and Techniques",
          description: "Learn how to produce professional-quality music using digital audio workstations, virtual instruments, and effects.",
          slug: "digital-music-production",
          isFeatured: true,
        }
      ];
      
      const featuredWebinars = musicWebinars.filter((webinar) => webinar.isFeatured);


  return (
    <div className=' dark:text-neutral-200 p-12 bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
          <div className='text-center'>
            <h2 className='text-base text-teal-600
              font-semibold tracking-wide uppercase'>FEATURED WEBINARS</h2>
            <p className=' mt-2 text-3xl font-extrabold  leading-8 sm:text-4xl tracking-tight text-white'>Enhance Your Musical Journey</p>
          </div>
          <div className='mt-10 '>
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: `/webinars/${webinar.slug}`,
            }))}
          />
          </div>
          <div className='mt-10 text-center'>
            <Link href={"/"} className='px-4 py-2 rounded border border-neutral-600 
            text-neutral-600 bg-white
            hover:bg-gray-100 transition duration-200'>
            View All webinars
            </Link>
          </div>
        </div>
    
    </div>
  )
}

export default UpcomingWebinars
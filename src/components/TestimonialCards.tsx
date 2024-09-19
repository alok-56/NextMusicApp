"use client"

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
    {
      quote: "The instructors here are amazing! They truly care about each student's progress and tailor lessons to fit individual needs. I've seen tremendous improvement in my skills since joining the school.",
      name: "Emily R.",
      title: "Piano Student"
    },
    {
      quote: "From the moment I walked in, I felt welcomed. The supportive and friendly atmosphere makes learning fun and enjoyable. It’s a great place for students of all ages to grow their love for music!",
      name: "John M.",
      title: "Guitar Student"
    },
    {
      quote: "Whether you're a beginner or advanced, the lessons are designed to meet you where you are. I appreciate how my instructor helps me progress step by step, making complex pieces feel achievable.",
      name: "Sophia L.",
      title: "Violin Student"
    },
    {
      quote: "The school's approach has not only improved my technical abilities but also boosted my confidence as a performer. The encouragement from both teachers and peers has been invaluable in my journey.",
      name: "David K.",
      title: "Vocal Student"
    },
    {
      quote: "I love the variety of instruments and musical genres taught here. From classical piano to jazz guitar, the music school offers something for everyone, no matter your interests or background.",
      name: "Alex B.",
      title: "Multi-Instrumentalist"
    }
  ];
  

function TestimonialCards() {
  return (
    <div className=' dark:text-neutral-200 h-[40rem] w-full dark:bg-black
    dark:bg-grid-white/[0.2] relative flex flex-col
    items-center justify-center overflow-hidden'>
        <h2 className="text-center text-3xl font-bold mb-8">Hear our Harmony: Voices of Success</h2>
        <div className="flex justify-center w-full 
           overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
              items={testimonials}
             direction="right"
              speed="slow"
             />
            </div>
        </div>

    </div>
  )
}

export default TestimonialCards
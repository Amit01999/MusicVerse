'use client';
import '@/components/Page2.css';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Cursor from './Cursor';

gsap.registerPlugin(ScrollTrigger);

const scrollerItems = [
  'Instrument Lessons',
  'Vocal Training',
  'Music Theory',
  'Performance Opportunities',
  'Workshops & Masterclasses',
];

const Page2: React.FC = () => {
  // useEffect(() => {
  //   // Animation for scroller items
  //   gsap.from('#scroller h4', {
  //     opacity: 0,
  //     x: 50,
  //     stagger: 0.2,
  //     scrollTrigger: {
  //       trigger: '#scroller',
  //       start: 'top 80%', // Trigger when 80% of the scroller is in view
  //       end: 'top 60%', // End the trigger when 60% is in view
  //       scrub: true, // Smooth scroll effect
  //     },
  //   });

  //   // Animation for images in the about section
  //   gsap.from('#about-us img', {
  //     opacity: 0,
  //     y: 50,
  //     scrollTrigger: {
  //       trigger: '#about-us',
  //       start: 'top 90%', // Trigger when 90% of the about section is in view
  //       end: 'top 70%', // End the trigger when 70% is in view
  //       scrub: true, // Smooth scroll effect
  //     },
  //   });

  //   // Animation for the cards in the cards container
  //   gsap.from('.card', {
  //     scale: 0.8,
  //     opacity: 0,
  //     duration: 1,
  //     stagger: 0.1,
  //     scrollTrigger: {
  //       trigger: '.card',
  //       start: 'top 80%', // Trigger when 80% of the card container is in view
  //       end: 'top 60%', // End the trigger when 60% is in view
  //       scrub: true, // Smooth scroll effect
  //     },
  //   });

  //   // Animation for green-div
  //   gsap.from('#green-div', {
  //     opacity: 0,
  //     y: 50,
  //     scrollTrigger: {
  //       trigger: '#green-div',
  //       start: 'top 90%',
  //       end: 'top 70%',
  //       scrub: true,
  //     },
  //   });
  // }, []);

  return (
    <div id="page2">
      <Cursor />
      <div id="scroller">
        <div id="scroller-in">
          {scrollerItems.map((item, idx) => (
            <h4 key={idx}>{item}</h4>
          ))}
        </div>
      </div>
      <div id="about-us">
        <img src="/images/music/images.jpeg" alt="About Us 1" />
        <div id="about-us-in">
          <h3>ABOUT US</h3>
          <p>
            Welcome to MusicVerse, where passion for music meets excellence in
            education. We offer programs for all ages and skill levels, led by
            experienced instructors in a supportive, state-of-the-art
            environment. Join us to explore, grow, and share the joy of music!
          </p>
        </div>
        <img src="/images/music/2.jpeg" alt="About Us 2" />
      </div>
      <div id="cards-container">
        <div className="card" id="card1">
          <div className="overlay">
            <h4>Instrument Lessons</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
              quam molestias magni cupiditate architecto et enim quas facere
              ipsum tempora?
            </p>
          </div>
        </div>
        <div className="card" id="card2">
          <div className="overlay">
            <h4>Music Theory</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
              quam molestias magni cupiditate architecto et enim quas facere
              ipsum tempora?
            </p>
          </div>
        </div>
        <div className="card" id="card3">
          <div className="overlay">
            <h4>Music Lessons</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
              quam molestias magni cupiditate architecto et enim quas facere
              ipsum tempora?
            </p>
          </div>
        </div>
      </div>
      <div id="green-div">
        <img
          src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-side.svg"
          alt="Green Div Left"
        />
        <h4>
          SIGN UP FOR SIDCUP NEWS AND SPECIAL OFFERS STRAIGHT TO YOUR INBOX
        </h4>
        <img
          src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-side.svg"
          alt="Green Div Right"
        />
      </div>
    </div>
  );
};

export default Page2;

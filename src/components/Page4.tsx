'use client';

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Page4.module.css';

gsap.registerPlugin(ScrollTrigger);

const Page4: React.FC = () => {
  // useEffect(() => {
  //   // GSAP animation for the heading
  //   gsap.from(`.${styles.heading}`, {
  //     y: 50,
  //     scrollTrigger: {
  //       trigger: `.${styles.heading}`,
  //       scroller: 'body',
  //       start: 'top 75%',
  //       end: 'top 70%',
  //       scrub: 3,
  //       markers: true, // Debugging markers (remove in production)
  //     },
  //   });
  // }, []);

  useEffect(() => {
    // Create a GSAP context to ensure proper lifecycle handling
    const ctx = gsap.context(() => {
      gsap.from(`.${styles.heading}`, {
        y: 50,
        scrollTrigger: {
          trigger: `.${styles.heading}`,
          scroller: 'body',
          start: 'top 75%',
          end: 'top 70%',
          scrub: 3,
        },
      });
    });

    // Cleanup the GSAP context on component unmount
    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.page4}>
      <h1 className={styles.heading}>WHAT ARE YOU WAITING FOR?</h1>
      <div className={styles.elem}>
        <h2>TOP Class</h2>
        <img
          src="https://studyinternational.com/wp-content/uploads/2020/01/Heres-why-music-education-in-schools-can-help-students-make-the-grade-768x512.jpg"
          alt="Toptracer Range"
        />
      </div>
      <div className={styles.elem}>
        <h2>Expert Instructors</h2>
        <img
          src="https://www.berklee.edu/sites/default/files/styles/scale_and_crop_16_9_large/public/d7/bcm/career_communities/PrivateInstructor.jpg"
          alt="Toptracer Lessons"
        />
      </div>
      <div className={styles.elem}>
        <h2>Personalized Learning</h2>
        <img
          src="https://res.cloudinary.com/grand-canyon-university/image/fetch/w_750,h_564,c_fill,g_faces,q_auto,f_auto/https://www.gcu.edu/sites/default/files/media/images/Blog/performing-arts-digital-arts/music-teacher.jpg"
          alt="Toptracer AG"
        />
      </div>
    </div>
  );
};

export default Page4;

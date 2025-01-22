'use client';

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Page3.module.css';

gsap.registerPlugin(ScrollTrigger);

const Page3: React.FC = () => {
  useEffect(() => {
    // Create a GSAP context to ensure proper lifecycle handling
    const ctx = gsap.context(() => {
      // Animating colon1
      gsap.from(`#${styles.colon1}`, {
        y: -70,
        x: -70,
        scrollTrigger: {
          trigger: `#${styles.colon1}`,
          scroller: 'body',
          start: 'top 55%',
          end: 'top 55%',
          scrub: 4,
        },
      });

      // Animating colon2
      gsap.from(`#${styles.colon2}`, {
        y: 70,
        x: 70,
        scrollTrigger: {
          trigger: `#${styles.colon1}`,
          scroller: 'body',
          start: 'top 55%',
          end: 'top 55%',
          scrub: 4,
        },
      });
    });

    // Cleanup the GSAP context on component unmount
    return () => ctx.revert();
  }, []);

  return (
    <div id={styles.page3}>
      <p>
        Excellent couple of hours, relax and enjoy in the fun. Staff were
        accommodating, friendly and very helpful. Café on site for refreshments
        etc. Will keep children entertained during the holidays. Worth a visit
        if you haven’t been.
      </p>
      <img
        id={styles.colon1}
        src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-left.svg"
        alt="Quote left"
      />
      <img
        id={styles.colon2}
        src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-right.svg"
        alt="Quote right"
      />
    </div>
  );
};

export default Page3;

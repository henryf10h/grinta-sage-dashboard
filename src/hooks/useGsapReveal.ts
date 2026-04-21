import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Initializes GSAP scroll-triggered reveal animations for the story page.
 * - .reveal: fade + rise on enter
 * - .reveal-stagger > *: staggered children
 * - .reveal-scale: gentle scale + fade
 * - data-parallax="0.2": subtle Y parallax inside its slide
 */
export const useGsapReveal = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Basic reveal
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Staggered groups
      gsap.utils.toArray<HTMLElement>(".reveal-stagger").forEach((group) => {
        const children = Array.from(group.children) as HTMLElement[];
        gsap.from(children, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: group,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Scale reveal
      gsap.utils.toArray<HTMLElement>(".reveal-scale").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          scale: 0.85,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Parallax — disabled on mobile to prevent overlap with stacked content
      const isDesktop = window.matchMedia("(min-width: 768px)").matches;
      if (isDesktop) {
        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
          const amount = parseFloat(el.dataset.parallax || "0.2");
          gsap.to(el, {
            yPercent: -amount * 100,
            ease: "none",
            scrollTrigger: {
              trigger: el.closest("section") || el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });
      }

      // Slide enter — slight overall lift
      gsap.utils.toArray<HTMLElement>(".story-slide").forEach((sec) => {
        gsap.fromTo(
          sec,
          { opacity: 0.6 },
          {
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sec,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);
};

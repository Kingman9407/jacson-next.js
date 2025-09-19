import { gsap } from "gsap";
import React from "react";

export class CardAnimations {
  constructor() {}

  // Initialize card animations on mount
  initializeCards(cardRefs: React.RefObject<HTMLDivElement>[]) {
    cardRefs.forEach((cardRef: React.RefObject<HTMLDivElement>, index: number) => {
      if (cardRef.current) {
        const collapsed = cardRef.current.querySelector(".collapsed-content");
        const expanded = cardRef.current.querySelector(".expanded-content");

        if (collapsed) gsap.set(collapsed, { autoAlpha: 1, display: "block" });
        if (expanded) gsap.set(expanded, { autoAlpha: 0, display: "none" });

        gsap.fromTo(
          cardRef.current,
          { y: 50, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 0.6, delay: index * 0.1, ease: "power2.out" }
        );
      }
    });
  }

  // Expand card
  expandCard(
    activeCardRef: React.RefObject<HTMLDivElement>,
    inactiveCardRefs: React.RefObject<HTMLDivElement>[]
  ) {
    const tl = gsap.timeline();

    if (activeCardRef.current) {
      const collapsed = activeCardRef.current.querySelector(".collapsed-content");
      const expanded = activeCardRef.current.querySelector(".expanded-content");
      const image = activeCardRef.current.querySelector(".card-image");
      const texts = activeCardRef.current.querySelectorAll(".text-content > *");
      const tags = activeCardRef.current.querySelectorAll(".tag");

      tl.to(activeCardRef.current, {
        flex: 3,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        duration: 0.7,
        ease: "power2.out",
      });

      if (collapsed) tl.to(collapsed, { autoAlpha: 0, display: "none", duration: 0.3 }, 0);
      if (expanded) tl.to(expanded, { autoAlpha: 1, display: "block", duration: 0.5 }, 0.2);

      if (image)
        tl.fromTo(
          image,
          { scale: 1.1, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.8, ease: "power2.out" },
          0.3
        );

      if (texts.length)
        tl.fromTo(
          texts,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
          0.4
        );

      if (tags.length)
        tl.fromTo(
          tags,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.3, stagger: 0.05, ease: "back.out(1.7)" },
          0.6
        );
    }

    inactiveCardRefs.forEach((cardRef: React.RefObject<HTMLDivElement>) => {
      if (cardRef.current) {
        tl.to(cardRef.current, {
          flex: 1,
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
          duration: 0.7,
          ease: "power2.out",
        }, 0);
      }
    });
  }

  // Collapse all cards
  collapseAllCards(cardRefs: React.RefObject<HTMLDivElement>[]) {
    const tl = gsap.timeline();

    cardRefs.forEach((cardRef: React.RefObject<HTMLDivElement>) => {
      if (cardRef.current) {
        const collapsed = cardRef.current.querySelector(".collapsed-content");
        const expanded = cardRef.current.querySelector(".expanded-content");

        tl.to(cardRef.current, {
          flex: 1,
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
          duration: 0.7,
          ease: "power2.out",
        }, 0);

        if (expanded) tl.to(expanded, { autoAlpha: 0, display: "none", duration: 0.3 }, 0);
        if (collapsed) tl.to(collapsed, { autoAlpha: 1, display: "block", duration: 0.5 }, 0.2);
      }
    });
  }

  // Hover effects
  addHoverEffect(cardRef: React.RefObject<HTMLDivElement>) {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        y: -5,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }

  removeHoverEffect(cardRef: React.RefObject<HTMLDivElement>) {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        y: 0,
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }

  cleanup() {
    gsap.globalTimeline.clear();
  }
}

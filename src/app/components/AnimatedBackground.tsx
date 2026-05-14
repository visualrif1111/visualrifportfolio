import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import imgRectangle1 from "figma:asset/8e7771964c5c3a7ec1502b7371fd0054f51617eb.png";

export const AnimatedBackground = React.memo(function AnimatedBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const mousePxX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 500);
  const mousePxY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 500);

  const springConfig = { damping: 30, stiffness: 50, mass: 1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const smoothPxX = useSpring(mousePxX, { damping: 40, stiffness: 60, mass: 0.5 });
  const smoothPxY = useSpring(mousePxY, { damping: 40, stiffness: 60, mass: 0.5 });

  useEffect(() => {
    let rafId: number;
    let lastX = 0;
    let lastY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;

      // Use RAF to throttle updates to 60fps max
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          const { innerWidth, innerHeight } = window;
          const x = (lastX / innerWidth - 0.5) * 2;
          const y = (lastY / innerHeight - 0.5) * 2;

          mouseX.set(x);
          mouseY.set(y);
          mousePxX.set(lastX);
          mousePxY.set(lastY);

          rafId = 0;
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [mouseX, mouseY, mousePxX, mousePxY]);

  const x1 = useTransform(smoothX, [-1, 1], ["-3%", "3%"]);
  const y1 = useTransform(smoothY, [-1, 1], ["-3%", "3%"]);

  const x2 = useTransform(smoothX, [-1, 1], ["5%", "-5%"]);
  const y2 = useTransform(smoothY, [-1, 1], ["5%", "-5%"]);

  const x3 = useTransform(smoothX, [-1, 1], ["-8%", "8%"]);
  const y3 = useTransform(smoothY, [-1, 1], ["8%", "-8%"]);

  return (
    <div className="fixed inset-0 z-[-1] bg-[#020404] overflow-hidden pointer-events-none">

      {/* Layer 1: Base Teal Lines */}
      <motion.div
        className="absolute w-[150vw] h-[150vh] -left-[25vw] -top-[25vh] bg-black isolate mix-blend-screen opacity-80 will-change-transform"
        style={{ x: x1, y: y1 }}
        animate={{ rotate: [-0.5, 0.5, -0.5], scale: [1.02, 1.05, 1.02] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <img src={imgRectangle1} alt="" className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.5]" loading="eager" />
        <div className="absolute inset-0 w-full h-full bg-[#50C1BA] mix-blend-multiply pointer-events-none" />
      </motion.div>

      {/* Layer 2: Deeper, counter-parallax layer for psychedelic depth */}
      <motion.div
        className="absolute w-[150vw] h-[150vh] -left-[25vw] -top-[25vh] bg-black isolate mix-blend-screen opacity-40 will-change-transform"
        style={{ x: x2, y: y2 }}
        animate={{ rotate: [1, -1, 1], scale: [1.05, 1.1, 1.05] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      >
        <img src={imgRectangle1} alt="" className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.5]" loading="eager" />
        <div className="absolute inset-0 w-full h-full bg-[#2D8C87] mix-blend-multiply pointer-events-none" />
      </motion.div>

      {/* Layer 3: High speed, low opacity wave */}
      <motion.div
        className="absolute w-[150vw] h-[150vh] -left-[25vw] -top-[25vh] bg-black isolate mix-blend-screen opacity-20 will-change-transform"
        style={{ x: x3, y: y3 }}
        animate={{ rotate: [-1.5, 1.5, -1.5], scale: [1.1, 1.15, 1.1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <img src={imgRectangle1} alt="" className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.5]" loading="eager" />
        <div className="absolute inset-0 w-full h-full bg-[#7CF1EA] mix-blend-multiply pointer-events-none" />
      </motion.div>

      {/* Interactive Mouse Spotlight - Subtly illuminates the lines underneath */}
      <motion.div
        className="absolute top-0 left-0 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full pointer-events-none mix-blend-screen blur-[100px] will-change-transform"
        style={{
          x: smoothPxX,
          y: smoothPxY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, rgba(80,193,186,0.15) 0%, transparent 65%)"
        }}
      />

      {/* Vignette - softened to prevent black void edges */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,transparent_20%,black_150%)] opacity-70 pointer-events-none" />
    </div>
  );
});

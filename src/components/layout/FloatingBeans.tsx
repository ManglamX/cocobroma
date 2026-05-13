'use client';
import { motion } from 'framer-motion';

// A stylized, elegant coffee bean SVG
const BeanSVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="currentColor" {...props}>
    <ellipse cx="50" cy="50" rx="35" ry="45" transform="rotate(20 50 50)" />
    <path 
      d="M 40 10 Q 55 40 45 60 T 60 90" 
      stroke="var(--color-bg)" 
      strokeWidth="6" 
      fill="none" 
      strokeLinecap="round" 
    />
  </svg>
);

// Pre-calculate pseudo-random values to avoid React hydration mismatches
// We use 12 beans for optimal performance while maintaining a rich background
const BEANS = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  size: 30 + (i * 17) % 80, // Size between 30px and 110px
  left: `${(i * 23) % 100}%`,
  top: `${(i * 37) % 100}%`,
  duration: 40 + (i * 13) % 40, // 40s to 80s
  delay: (i * 7) % 20,
  blur: 2 + (i * 3) % 12, // Blur between 2px and 14px for depth of field
  opacity: 0.03 + ((i * 5) % 10) / 100, // Very subtle: 0.03 to 0.12 opacity
  rotationStart: (i * 45) % 360,
  rotationEnd: ((i * 45) % 360) + 360,
  yOffset: 100 + (i * 50) % 200,
}));

export default function FloatingBeans() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-[var(--color-bg)]">
      {BEANS.map((bean) => (
        <motion.div
          key={bean.id}
          className="absolute text-[#D4A373]" // A warm coffee tone that will blend nicely
          style={{
            left: bean.left,
            top: bean.top,
            width: bean.size,
            height: bean.size,
            opacity: bean.opacity,
            filter: `blur(${bean.blur}px)`,
            willChange: 'transform',
          }}
          animate={{
            y: [-bean.yOffset, bean.yOffset, -bean.yOffset],
            x: [-bean.yOffset/2, bean.yOffset/2, -bean.yOffset/2],
            rotate: [bean.rotationStart, bean.rotationEnd],
          }}
          transition={{
            duration: bean.duration,
            delay: -bean.delay, // Negative delay to start immediately at different points
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <BeanSVG className="w-full h-full" />
        </motion.div>
      ))}
      
      {/* Optional vignette overlay to ensure text legibility at edges */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-bg)_100%)] opacity-80" />
    </div>
  );
}

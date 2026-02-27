import { motion } from "framer-motion";

const FloatingBackground = () => {
  const shapes = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * -20,
    opacity: Math.random() * 0.07 + 0.03,
    type: i % 3, // 0=circle, 1=square, 2=triangle
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((s) => (
        <motion.div
          key={s.id}
          className="absolute"
          style={{
            width: s.size,
            height: s.size,
            left: `${s.x}%`,
            top: `${s.y}%`,
            opacity: s.opacity,
            borderRadius: s.type === 0 ? "50%" : s.type === 1 ? "4px" : "0",
            background:
              s.type === 2
                ? "none"
                : `linear-gradient(135deg, hsl(var(--primary)), hsl(142 70% 60%))`,
            borderLeft: s.type === 2 ? `${s.size / 2}px solid transparent` : undefined,
            borderRight: s.type === 2 ? `${s.size / 2}px solid transparent` : undefined,
            borderBottom: s.type === 2 ? `${s.size}px solid hsl(var(--primary) / 0.5)` : undefined,
            ...(s.type === 2 ? { width: 0, height: 0 } : {}),
          }}
          animate={{
            y: [0, -80, 30, -50, 0],
            x: [0, 40, -30, 20, 0],
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.2, 0.9, 1.1, 1],
          }}
          transition={{
            duration: s.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: s.delay,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingBackground;

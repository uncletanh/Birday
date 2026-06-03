"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
  type: 'firefly' | 'petal';
}

export default function MagicCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    const getColors = () => {
      if (theme === 'magnolia' || theme === 'porcelain') {
        return ['#FBCFE8', '#F9A8D4', '#F472B6']; // Cánh hoa mộc lan hồng nhẹ
      }
      return ['#FEF08A', '#FDE047', '#D4AF37']; // Đom đóm vàng
    };

    const getType = (): 'firefly' | 'petal' => {
      if (theme === 'magnolia' || theme === 'porcelain') return 'petal';
      return 'firefly';
    };

    let lastMousePos = { x: -100, y: -100 };

    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      const x = 'touches' in e ? (e as TouchEvent).touches[0].clientX : (e as MouseEvent).clientX;
      const y = 'touches' in e ? (e as TouchEvent).touches[0].clientY : (e as MouseEvent).clientY;
      
      const colors = getColors();
      const type = getType();
      
      const dx = x - lastMousePos.x;
      const dy = y - lastMousePos.y;
      const speed = Math.sqrt(dx * dx + dy * dy);
      
      // Tạo hạt dựa theo tốc độ vẩy chuột
      const particleCount = Math.min(Math.floor(speed / 15) + 1, 3);

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 2 + (dx * 0.02),
          vy: (Math.random() - 0.5) * 2 + (dy * 0.02) + (type === 'petal' ? 0.5 : -0.2), // Hoa rơi xuống, đom đóm bay lên
          life: 1,
          maxLife: Math.random() * 40 + 40,
          size: type === 'petal' ? Math.random() * 4 + 2 : Math.random() * 2 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          type
        });
      }
      
      lastMousePos = { x, y };
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleMouseMove, { passive: true });

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        ctx.beginPath();
        if (p.type === 'petal') {
          // Vẽ hình cánh hoa rụng
          ctx.ellipse(p.x, p.y, p.size, p.size * 1.5, p.vx * 0.5, 0, Math.PI * 2);
        } else {
          // Vẽ đom đóm
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        }
        
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life;
        ctx.fill();

        // Hiệu ứng phát sáng giả cho đom đóm (nhẹ hơn shadowBlur)
        if (p.type === 'firefly') {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.life * 0.3;
          ctx.fill();
        }
        
        // Cập nhật tọa độ
        p.x += p.vx;
        p.y += p.vy;
        
        // Quỹ đạo lả lướt
        if (p.type === 'petal') {
          p.vx += (Math.random() - 0.5) * 0.1; 
          p.vy += 0.01; // Trọng lực nhẹ kéo cánh hoa xuống
        } else {
          p.vx += (Math.random() - 0.5) * 0.1;
          p.vy += (Math.random() - 0.5) * 0.1;
        }

        p.life -= 1 / p.maxLife;
      }

      particles = particles.filter(p => p.life > 0);
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[90]"
    />
  );
}

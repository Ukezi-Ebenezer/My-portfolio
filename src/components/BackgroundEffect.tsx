import { useEffect, useRef } from 'react';

export default function BackgroundEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseColor: string;
    }[] = [];

    const particleCount = Math.min(60, Math.floor((width * height) / 25000));
    
    // Initialize particles with cyber-green tones
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        baseColor: i % 3 === 0 ? 'rgba(0, 255, 102, 0.25)' : i % 3 === 1 ? 'rgba(16, 185, 129, 0.18)' : 'rgba(110, 231, 183, 0.25)',
      });
    }

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 120,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Radial background glows
      const primaryGlow = ctx.createRadialGradient(
        width * 0.2, height * 0.2, 0,
        width * 0.2, height * 0.2, Math.max(width, height) * 0.5
      );
      primaryGlow.addColorStop(0, 'rgba(0, 255, 102, 0.03)');
      primaryGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = primaryGlow;
      ctx.fillRect(0, 0, width, height);

      const secondaryGlow = ctx.createRadialGradient(
        width * 0.8, height * 0.7, 0,
        width * 0.8, height * 0.7, Math.max(width, height) * 0.4
      );
      secondaryGlow.addColorStop(0, 'rgba(16, 185, 129, 0.02)');
      secondaryGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = secondaryGlow;
      ctx.fillRect(0, 0, width, height);

      // Draw active particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Motion and limits
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        else if (p.x > width) p.x = 0;

        if (p.y < 0) p.y = height;
        else if (p.y > height) p.y = 0;

        // Interaction with cursor (deflection forces)
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const forceX = (dx / dist) * force * 1.5;
          const forceY = (dy / dist) * force * 1.5;
          p.x += forceX;
          p.y += forceY;
        }

        // Render particle point
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.baseColor;
        ctx.fill();

        // Connect lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const ldx = p.x - p2.x;
          const ldy = p.y - p2.y;
          const ldist = Math.sqrt(ldx * ldx + ldy * ldy);

          if (ldist < 140) {
            const alpha = (140 - ldist) / 140 * 0.07;
            ctx.strokeStyle = `rgba(0, 255, 102, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      id="ambient-fabric-canvas"
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}

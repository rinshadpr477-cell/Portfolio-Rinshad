'use client';

import React, { useEffect, useRef } from 'react';

export function LivingBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', resize);
    resize();

    let mouse = { x: window.innerWidth * 0.5, y: window.innerHeight * 0.35 };
    let currentMouse = { x: mouse.x, y: mouse.y };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    let time = 0;
    let isTabVisible = true;

    const onVisibilityChange = () => {
      isTabVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    const render = () => {
      if (!isTabVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      time += 0.005;

      currentMouse.x += (mouse.x - currentMouse.x) * 0.03;
      currentMouse.y += (mouse.y - currentMouse.y) * 0.03;

      const w = window.innerWidth;
      const h = window.innerHeight;

      ctx.clearRect(0, 0, w, h);

      const isDark = document.documentElement.classList.contains('dark');

      // Primary Ambient Spotlight
      const grad1 = ctx.createRadialGradient(
        currentMouse.x,
        currentMouse.y,
        0,
        currentMouse.x,
        currentMouse.y,
        Math.max(w, h) * 0.55
      );

      if (isDark) {
        grad1.addColorStop(0, 'rgba(94, 92, 230, 0.08)');
        grad1.addColorStop(0.5, 'rgba(94, 92, 230, 0.02)');
        grad1.addColorStop(1, 'rgba(8, 8, 10, 0)');
      } else {
        grad1.addColorStop(0, 'rgba(94, 92, 230, 0.035)');
        grad1.addColorStop(0.4, 'rgba(94, 92, 230, 0.01)');
        grad1.addColorStop(1, 'rgba(234, 234, 239, 0)');
      }

      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, w, h);

      // Secondary Counter-Atmospheric Light
      const ox = w * 0.8 + Math.cos(time * 0.6) * 120;
      const oy = h * 0.25 + Math.sin(time * 0.5) * 80;
      const grad2 = ctx.createRadialGradient(ox, oy, 0, ox, oy, Math.max(w, h) * 0.45);

      if (isDark) {
        grad2.addColorStop(0, 'rgba(210, 210, 215, 0.03)');
        grad2.addColorStop(1, 'rgba(8, 8, 10, 0)');
      } else {
        grad2.addColorStop(0, 'rgba(180, 180, 190, 0.04)');
        grad2.addColorStop(1, 'rgba(234, 234, 239, 0)');
      }

      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, w, h);

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-10 transition-opacity duration-700"
      aria-hidden="true"
    />
  );
}

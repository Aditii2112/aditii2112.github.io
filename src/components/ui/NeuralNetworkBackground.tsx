import { useEffect, useRef } from 'react';

const PARTICLE_COUNT = 80;
const CONNECT_DISTANCE = 140;
const PARTICLE_SPEED = 0.12;
const PARTICLE_RADIUS = 1.2;
const LINE_OPACITY_DARK = 0.12;
const NODE_OPACITY_DARK = 0.35;
const LINE_OPACITY_LIGHT = 0.08;
const NODE_OPACITY_LIGHT = 0.25;

type Particle = { x: number; y: number; vx: number; vy: number };

const GRID_SPACING = 48;
const GRID_OPACITY_DARK = 0.04;
const GRID_OPACITY_LIGHT = 0.06;

function drawGradient(ctx: CanvasRenderingContext2D, w: number, h: number, variant: 'dark' | 'light') {
  if (variant === 'light') {
    const gradient = ctx.createLinearGradient(0, 0, w, h);
    gradient.addColorStop(0, '#fafafa');
    gradient.addColorStop(0.5, '#f5f5f5');
    gradient.addColorStop(1, '#f0f0f0');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, w, h);
    const glow = ctx.createRadialGradient(w * 0.5, h * 0.4, 0, w * 0.5, h * 0.5, w * 0.6);
    glow.addColorStop(0, 'rgba(148, 163, 184, 0.06)');
    glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = `rgba(71, 85, 105, ${GRID_OPACITY_LIGHT})`;
    ctx.lineWidth = 0.5;
    for (let x = 0; x <= w + GRID_SPACING; x += GRID_SPACING) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y <= h + GRID_SPACING; y += GRID_SPACING) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }
    return;
  }
  const gradient = ctx.createLinearGradient(0, 0, w, h);
  gradient.addColorStop(0, '#0c0d0f');
  gradient.addColorStop(0.4, '#0a0b0d');
  gradient.addColorStop(0.7, '#08090b');
  gradient.addColorStop(1, '#060708');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, w, h);
  const glow = ctx.createRadialGradient(w * 0.5, h * 0.4, 0, w * 0.5, h * 0.5, w * 0.7);
  glow.addColorStop(0, 'rgba(34, 58, 55, 0.2)');
  glow.addColorStop(0.5, 'rgba(20, 45, 48, 0.06)');
  glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = `rgba(94, 234, 212, ${GRID_OPACITY_DARK})`;
  ctx.lineWidth = 0.5;
  for (let x = 0; x <= w + GRID_SPACING; x += GRID_SPACING) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.stroke();
  }
  for (let y = 0; y <= h + GRID_SPACING; y += GRID_SPACING) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }
}

function drawConnections(
  ctx: CanvasRenderingContext2D,
  particles: Particle[],
  _w: number,
  _h: number,
  variant: 'dark' | 'light'
) {
  const lineOpacity = variant === 'light' ? LINE_OPACITY_LIGHT : LINE_OPACITY_DARK;
  const strokeColor = variant === 'light' ? '71, 85, 105' : '94, 234, 212';
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.hypot(dx, dy);
      if (dist < CONNECT_DISTANCE) {
        const alpha = (1 - dist / CONNECT_DISTANCE) * lineOpacity;
        ctx.strokeStyle = `rgba(${strokeColor}, ${alpha})`;
        ctx.lineWidth = variant === 'light' ? 0.6 : 0.8;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
}

function drawParticles(ctx: CanvasRenderingContext2D, particles: Particle[], variant: 'dark' | 'light') {
  const nodeOpacity = variant === 'light' ? NODE_OPACITY_LIGHT : NODE_OPACITY_DARK;
  const colors = variant === 'light'
    ? { glow: '100, 116, 139', core: '71, 85, 105' }
    : { glow: '94, 234, 212', core: '134, 239, 172' };
  particles.forEach((p) => {
    const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 8);
    gradient.addColorStop(0, `rgba(${colors.glow}, ${nodeOpacity * 1.1})`);
    gradient.addColorStop(0.5, `rgba(${colors.glow}, ${nodeOpacity * 0.4})`);
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(p.x, p.y, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = `rgba(${colors.core}, ${nodeOpacity})`;
    ctx.beginPath();
    ctx.arc(p.x, p.y, PARTICLE_RADIUS, 0, Math.PI * 2);
    ctx.fill();
  });
}

export function NeuralNetworkBackground({
  className,
  variant = 'dark',
}: { className?: string; variant?: 'dark' | 'light' }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationId: number;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (particles.length === 0) {
        particles = Array.from({ length: PARTICLE_COUNT }, () => ({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * PARTICLE_SPEED * 2,
          vy: (Math.random() - 0.5) * PARTICLE_SPEED * 2,
        }));
      } else {
        particles.forEach((p) => {
          p.x = Math.min(Math.max(p.x, 0), w);
          p.y = Math.min(Math.max(p.y, 0), h);
        });
      }
    };

    const animate = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (w === 0 || h === 0) {
        animationId = requestAnimationFrame(animate);
        return;
      }

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x <= 0 || p.x >= w) p.vx *= -1;
        if (p.y <= 0 || p.y >= h) p.vy *= -1;
        p.x = Math.max(0, Math.min(w, p.x));
        p.y = Math.max(0, Math.min(h, p.y));
      });

      drawGradient(ctx, w, h, variant);
      drawConnections(ctx, particles, w, h, variant);
      drawParticles(ctx, particles, variant);

      animationId = requestAnimationFrame(animate);
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    animationId = requestAnimationFrame(animate);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationId);
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: 'block', width: '100%', height: '100%' }}
      aria-hidden
    />
  );
}

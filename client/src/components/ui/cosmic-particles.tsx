import { useEffect, useRef } from 'react';

export function CosmicParticles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    container.innerHTML = '';
    
    // Create particles
    for (let i = 0; i < 50; i++) {
      createParticle(container);
    }
    
    return () => {
      container.innerHTML = '';
    };
  }, []);

  function createParticle(container: HTMLDivElement) {
    const particle = document.createElement('div');
    
    // Random position, size, color and animation
    const size = Math.random() * 4 + 1;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = Math.random() * 50 + 10;
    const delay = Math.random() * 5;
    
    // Set styles
    particle.style.position = 'absolute';
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${x}%`;
    particle.style.top = `${y}%`;
    particle.style.borderRadius = '50%';
    particle.style.opacity = '0.6';
    particle.style.pointerEvents = 'none';
    
    // Randomly select between primary and secondary colors
    const colors = ['#6200EA', '#03DAC6', '#7C4DFF', '#04E9D4'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    particle.style.backgroundColor = color;
    
    // Add animation
    particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite alternate`;
    
    container.appendChild(particle);
  }

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
      <div
        ref={containerRef}
        className="cosmic-particles absolute top-0 left-0 w-full h-full overflow-hidden -z-10"
      />
    </>
  );
}

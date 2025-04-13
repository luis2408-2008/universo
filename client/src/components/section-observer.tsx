import { useEffect, useRef, ReactNode } from 'react';

interface SectionObserverProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export function SectionObserver({ children, id, className = '' }: SectionObserverProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add('opacity-100', 'translate-y-0');
            section.classList.remove('opacity-0', 'translate-y-5');
            // Once animation is done, we can stop observing
            observer.unobserve(section);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the element is visible
        rootMargin: '0px 0px -100px 0px'
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`transition-all duration-700 opacity-0 translate-y-5 ${className}`}
    >
      {children}
    </section>
  );
}

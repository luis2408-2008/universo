import { useState, useEffect } from 'react';

interface NavigationLink {
  id: string;
  label: string;
}

interface NavigationSectionProps {
  links: NavigationLink[];
}

export function NavigationSection({ links }: NavigationSectionProps) {
  const [activeLink, setActiveLink] = useState<string>(links[0]?.id);

  useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll position
      const scrollPosition = window.scrollY + 150; // Adding offset for header
      
      // Find the section that is currently in view
      for (let i = links.length - 1; i >= 0; i--) {
        const section = document.getElementById(links[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveLink(links[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [links]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const headerHeight = 140; // Approximate height of header + nav
      const targetPosition = section.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      setActiveLink(id);
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-950 sticky top-[73px] z-40 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto py-3 -mb-px hide-scrollbar">
          {links.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
              className={`whitespace-nowrap px-5 py-2 mr-4 border-b-2 font-medium transition-colors duration-200 ${
                activeLink === link.id
                  ? 'border-primary text-primary dark:text-secondary dark:border-secondary'
                  : 'border-transparent hover:text-primary dark:hover:text-secondary hover:border-primary dark:hover:border-secondary'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

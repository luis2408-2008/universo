import { useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { useTheme } from "@/hooks/use-theme";
import { NavigationSection } from "@/components/navigation-section";
import { SectionObserver } from "@/components/section-observer";
import { YouTubeEmbed } from "@/components/ui/youtube-embed";
import { CosmoCard, FactCard, ExpertCard } from "@/components/cosmologic-card";
import { 
  homeTexts, 
  navLinks, 
  theories, 
  conspiracies, 
  facts, 
  videos, 
  experts 
} from "@/components/language";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Star,
  Orbit,
  Atom,
  Flame,
  Clock,
  Rocket,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Sun,
  Moon,
  ChevronDown
} from "lucide-react";

// Map icon names to Lucide components
const iconMap: Record<string, React.ReactNode> = {
  "star": <Star className="h-5 w-5" />,
  "planet": <Orbit className="h-5 w-5" />,
  "bubble-chart": <Atom className="h-5 w-5" />,
  "fire": <Flame className="h-5 w-5" />,
  "time": <Clock className="h-5 w-5" />,
  "spaceship": <Rocket className="h-5 w-5" />
};

export default function HomePage() {
  const { user, logoutMutation } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-roboto">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl md:text-3xl font-montserrat font-bold text-primary dark:text-secondary">
              {homeTexts.title}
            </h1>
          </div>
          
          <div className="flex items-center space-x-6">
            {/* Dark/Light Mode Toggle */}
            <div className="flex items-center">
              <span className="mr-2 text-sm hidden md:inline">
                <Sun className="h-4 w-4" />
              </span>
              <div 
                className="w-14 h-7 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full px-1 cursor-pointer"
                onClick={toggleTheme}
              >
                <div className={`w-5 h-5 rounded-full shadow-md transform flex items-center justify-center transition-transform duration-300 ${
                  theme === 'dark' 
                    ? 'translate-x-7 bg-gray-900' 
                    : 'translate-x-0 bg-white'
                }`}>
                  {theme === 'dark' ? (
                    <Sun className="h-3 w-3 text-secondary" />
                  ) : (
                    <Moon className="h-3 w-3 text-primary" />
                  )}
                </div>
              </div>
              <span className="ml-2 text-sm hidden md:inline">
                <Moon className="h-4 w-4" />
              </span>
            </div>
            
            {/* User Menu */}
            <div className="relative">
              <button 
                className="flex items-center space-x-2 focus:outline-none" 
                onClick={toggleUserMenu}
              >
                <div className="w-10 h-10 rounded-full bg-primary dark:bg-secondary flex items-center justify-center text-white">
                  <span>{user?.username?.[0].toUpperCase()}</span>
                </div>
                <span className="hidden md:inline font-medium">{user?.username}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
                    {homeTexts.userMenu.profile}
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
                    {homeTexts.userMenu.settings}
                  </a>
                  <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>
                  <button 
                    onClick={handleLogout}
                    className="w-full text-left block px-4 py-2 text-sm text-red-500 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    {homeTexts.userMenu.logout}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      
      {/* Navigation */}
      <NavigationSection links={navLinks} />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-16 relative rounded-xl overflow-hidden" id="hero-section">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/70 dark:from-primary/70 dark:to-secondary/50"></div>
          <div className="relative flex flex-col md:flex-row items-center py-10 md:py-16 px-6 md:px-12">
            <div className="md:w-1/2 text-white mb-8 md:mb-0">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold mb-6">
                {homeTexts.heroTitle}
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                {homeTexts.heroSubtitle}
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Imagen del universo" 
                className="rounded-lg shadow-lg max-w-full w-auto h-64 md:h-80 object-cover animate-pulse"
              />
            </div>
          </div>
        </section>
        
        {/* Scientific Theories Section */}
        <SectionObserver id="teorias" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-montserrat font-bold mb-8 text-primary dark:text-secondary">
            {homeTexts.sections.theories}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {theories.map((theory, index) => (
              <CosmoCard
                key={index}
                title={theory.title}
                content={theory.content}
                imageUrl={theory.imageUrl}
                category={theory.category}
                onClick={() => {
                  // Crear un modal o diálogo con contenido expandido
                  const modalElement = document.createElement('div');
                  modalElement.className = 'theory-modal fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4';
                  
                  const modalContent = document.createElement('div');
                  modalContent.className = 'bg-white dark:bg-gray-900 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 relative';
                  
                  modalContent.innerHTML = `
                    <button class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                    <h2 class="text-2xl font-bold mb-4">${theory.title}</h2>
                    <img src="${theory.imageUrl}" alt="${theory.title}" class="w-full h-48 object-cover rounded-lg mb-4" />
                    <div class="space-y-4">
                      <p>${theory.content}</p>
                      <h3 class="text-lg font-semibold">Historia y desarrollo</h3>
                      <p>La teoría ${theory.title} ha evolucionado significativamente a lo largo de las décadas, con múltiples científicos contribuyendo a su desarrollo y refinamiento.</p>
                      <h3 class="text-lg font-semibold">Evidencia científica</h3>
                      <p>Entre las evidencias que respaldan esta teoría se encuentran observaciones astronómicas detalladas, mediciones de la radiación cósmica de fondo y estudios sobre la distribución de galaxias en el universo observable.</p>
                      <h3 class="text-lg font-semibold">Implicaciones cosmológicas</h3>
                      <p>Esta teoría tiene profundas implicaciones para nuestra comprensión del cosmos, incluyendo predicciones sobre el destino final del universo y la naturaleza del espacio-tiempo.</p>
                      <span class="inline-block px-3 py-1 bg-primary/10 dark:bg-secondary/10 text-primary dark:text-secondary rounded-full text-sm">${theory.category}</span>
                    </div>
                  `;
                  
                  modalElement.appendChild(modalContent);
                  document.body.appendChild(modalElement);
                  
                  // Agregar funcionalidad de cierre al botón
                  const closeButton = modalContent.querySelector('button');
                  closeButton?.addEventListener('click', () => {
                    document.body.removeChild(modalElement);
                  });
                  
                  // Cerrar al hacer clic fuera del contenido
                  modalElement.addEventListener('click', (e) => {
                    if (e.target === modalElement) {
                      document.body.removeChild(modalElement);
                    }
                  });
                }}
              />
            ))}
          </div>
        </SectionObserver>
        
        {/* Conspiracies Section */}
        <SectionObserver id="conspiraciones" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-montserrat font-bold mb-8 text-primary dark:text-secondary">
            {homeTexts.sections.conspiracies}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {conspiracies.map((conspiracy, index) => (
              <CosmoCard
                key={index}
                title={conspiracy.title}
                content={conspiracy.content}
                imageUrl={conspiracy.imageUrl}
                category=""
                orientation="horizontal"
                onClick={() => {
                  // Crear un modal o diálogo con contenido expandido
                  const modalElement = document.createElement('div');
                  modalElement.className = 'conspiracy-modal fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4';
                  
                  const modalContent = document.createElement('div');
                  modalContent.className = 'bg-white dark:bg-gray-900 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 relative';
                  
                  modalContent.innerHTML = `
                    <button class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                    <h2 class="text-2xl font-bold mb-4">${conspiracy.title}</h2>
                    <img src="${conspiracy.imageUrl}" alt="${conspiracy.title}" class="w-full h-48 object-cover rounded-lg mb-4" />
                    <div class="space-y-4">
                      <p>${conspiracy.content}</p>
                      <h3 class="text-lg font-semibold">Orígenes históricos</h3>
                      <p>Esta teoría alternativa surgió inicialmente en la década de 1970, ganando popularidad gradualmente en círculos de pensamiento no convencional y entre entusiastas de fenómenos inexplicables.</p>
                      <h3 class="text-lg font-semibold">Argumentos principales</h3>
                      <p>Los defensores de esta teoría señalan varios fenómenos observables que, según ellos, no pueden explicarse satisfactoriamente con las teorías científicas convencionales. Entre estos fenómenos se incluyen ciertas anomalías cósmicas y patrones matemáticos aparentemente no aleatorios.</p>
                      <h3 class="text-lg font-semibold">Perspectiva científica</h3>
                      <p>La comunidad científica predominante considera que esta teoría carece de evidencia empírica suficiente para ser considerada viable. Sin embargo, algunos aspectos de la misma han inspirado líneas de investigación interesantes en campos como la física teórica y la cosmología computacional.</p>
                      <div class="mt-4 flex flex-wrap gap-2">
                        <span class="inline-block px-3 py-1 bg-primary/10 dark:bg-secondary/10 text-primary dark:text-secondary rounded-full text-sm">Teoría alternativa</span>
                        <span class="inline-block px-3 py-1 bg-primary/10 dark:bg-secondary/10 text-primary dark:text-secondary rounded-full text-sm">Cosmología especulativa</span>
                      </div>
                    </div>
                  `;
                  
                  modalElement.appendChild(modalContent);
                  document.body.appendChild(modalElement);
                  
                  // Agregar funcionalidad de cierre al botón
                  const closeButton = modalContent.querySelector('button');
                  closeButton?.addEventListener('click', () => {
                    document.body.removeChild(modalElement);
                  });
                  
                  // Cerrar al hacer clic fuera del contenido
                  modalElement.addEventListener('click', (e) => {
                    if (e.target === modalElement) {
                      document.body.removeChild(modalElement);
                    }
                  });
                }}
              />
            ))}
          </div>
        </SectionObserver>
        
        {/* Fun Facts Section */}
        <SectionObserver id="curiosidades" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-montserrat font-bold mb-8 text-primary dark:text-secondary">
            {homeTexts.sections.facts}
          </h2>
          
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facts.map((fact, index) => (
                <FactCard
                  key={index}
                  title={fact.title}
                  content={fact.content}
                  icon={iconMap[fact.icon]}
                />
              ))}
            </div>
          </div>
        </SectionObserver>
        
        {/* Videos Section */}
        <SectionObserver id="videos" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-montserrat font-bold mb-8 text-primary dark:text-secondary">
            {homeTexts.sections.videos}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <YouTubeEmbed
                key={index}
                videoId={video.videoId}
                title={video.title}
                description={video.description}
                duration={video.duration}
                category={video.category}
                thumbnailUrl={video.thumbnailUrl}
              />
            ))}
          </div>
        </SectionObserver>
        
        {/* Expert Opinions Section */}
        <SectionObserver id="opiniones" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-montserrat font-bold mb-8 text-primary dark:text-secondary">
            {homeTexts.sections.experts}
          </h2>
          
          <div className="grid grid-cols-1 gap-6">
            {experts.map((expert, index) => (
              <ExpertCard
                key={index}
                name={expert.name}
                title={expert.title}
                quote={expert.quote}
                imageUrl={expert.imageUrl}
                tags={expert.tags}
              />
            ))}
          </div>
        </SectionObserver>
        
        {/* Newsletter Section */}
        <SectionObserver className="mb-16">
          <div className="bg-gradient-to-r from-primary to-secondary dark:from-primary/80 dark:to-secondary/80 rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 md:p-12 text-white">
              <h2 className="text-2xl md:text-3xl font-montserrat font-bold mb-4">
                {homeTexts.sections.newsletter}
              </h2>
              <p className="mb-6 opacity-90">{homeTexts.newsletter.subtitle}</p>
              
              <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => {
                e.preventDefault();
                
                const emailInput = e.currentTarget.querySelector('input[type="email"]') as HTMLInputElement;
                const email = emailInput.value;
                
                if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                  // Mostrar mensaje de error
                  const errorElement = document.createElement('div');
                  errorElement.className = 'newsletter-error text-red-300 text-sm mt-2';
                  errorElement.textContent = 'Por favor, introduce un correo electrónico válido.';
                  
                  // Eliminar mensaje de error anterior si existe
                  const existingError = e.currentTarget.querySelector('.newsletter-error');
                  if (existingError) {
                    existingError.remove();
                  }
                  
                  e.currentTarget.appendChild(errorElement);
                  return;
                }
                
                // Simular suscripción exitosa
                emailInput.value = '';
                
                // Eliminar mensaje de error si existe
                const existingError = e.currentTarget.querySelector('.newsletter-error');
                if (existingError) {
                  existingError.remove();
                }
                
                // Mostrar mensaje de éxito
                const successElement = document.createElement('div');
                successElement.className = 'newsletter-success text-green-300 text-sm mt-2';
                successElement.textContent = '¡Gracias por suscribirte! Recibirás nuestro boletín mensual con las últimas actualizaciones.';
                
                // Eliminar mensaje de éxito anterior si existe
                const existingSuccess = e.currentTarget.querySelector('.newsletter-success');
                if (existingSuccess) {
                  existingSuccess.remove();
                }
                
                e.currentTarget.appendChild(successElement);
                
                // Eliminar el mensaje de éxito después de 5 segundos
                setTimeout(() => {
                  const currentSuccess = e.currentTarget.querySelector('.newsletter-success');
                  if (currentSuccess) {
                    currentSuccess.remove();
                  }
                }, 5000);
              }}>
                <Input
                  type="email"
                  placeholder={homeTexts.newsletter.placeholder}
                  className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none"
                  required
                />
                <Button
                  type="submit"
                  className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  {homeTexts.newsletter.button}
                </Button>
              </form>
            </div>
          </div>
        </SectionObserver>
      </main>
      
      {/* Footer */}
      <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-montserrat font-bold text-primary dark:text-secondary">
                {homeTexts.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                {homeTexts.footer.slogan}
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white dark:hover:bg-secondary transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white dark:hover:bg-secondary transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white dark:hover:bg-secondary transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white dark:hover:bg-secondary transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">{homeTexts.footer.categories.explore}</h3>
              <ul className="space-y-2 text-sm">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={`#${link.id}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-secondary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">{homeTexts.footer.categories.resources}</h3>
              <ul className="space-y-2 text-sm">
                {homeTexts.footer.links.resources.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-secondary"
                      onClick={(e) => {
                        e.preventDefault();
                        
                        // Crear un modal con contenido real sobre recursos
                        const modalElement = document.createElement('div');
                        modalElement.className = 'resource-modal fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4';
                        
                        const modalContent = document.createElement('div');
                        modalContent.className = 'bg-white dark:bg-gray-900 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 relative';
                        
                        // Contenido específico basado en el tipo de recurso
                        let resourceContent = '';
                        
                        if (link === 'Libros Recomendados') {
                          resourceContent = `
                            <h3 class="text-lg font-semibold mb-4">Libros recomendados sobre Cosmología</h3>
                            <ul class="space-y-3">
                              <li class="border-b border-gray-200 dark:border-gray-700 pb-3">
                                <div class="font-medium">Breve Historia del Tiempo</div>
                                <div class="text-sm text-gray-600 dark:text-gray-400">Stephen Hawking</div>
                                <p class="text-sm mt-1">Un clásico que explora los conceptos fundamentales del universo, desde el Big Bang hasta los agujeros negros.</p>
                              </li>
                              <li class="border-b border-gray-200 dark:border-gray-700 pb-3">
                                <div class="font-medium">El Universo Elegante</div>
                                <div class="text-sm text-gray-600 dark:text-gray-400">Brian Greene</div>
                                <p class="text-sm mt-1">Explorando la teoría de cuerdas y la búsqueda de una teoría unificada del universo.</p>
                              </li>
                              <li class="border-b border-gray-200 dark:border-gray-700 pb-3">
                                <div class="font-medium">Cosmos</div>
                                <div class="text-sm text-gray-600 dark:text-gray-400">Carl Sagan</div>
                                <p class="text-sm mt-1">Un viaje fascinante a través de los misterios del cosmos y la historia de nuestra comprensión del universo.</p>
                              </li>
                            </ul>
                          `;
                        } else if (link === 'Enlaces Científicos') {
                          resourceContent = `
                            <h3 class="text-lg font-semibold mb-4">Enlaces a recursos científicos</h3>
                            <ul class="space-y-3">
                              <li class="border-b border-gray-200 dark:border-gray-700 pb-3">
                                <div class="font-medium">NASA - Astrofísica</div>
                                <div class="text-sm text-gray-600 dark:text-gray-400">nasa.gov/universe</div>
                                <p class="text-sm mt-1">Portal de la NASA dedicado a la investigación astrofísica y cosmológica.</p>
                              </li>
                              <li class="border-b border-gray-200 dark:border-gray-700 pb-3">
                                <div class="font-medium">European Space Agency</div>
                                <div class="text-sm text-gray-600 dark:text-gray-400">esa.int/Science_Exploration</div>
                                <p class="text-sm mt-1">Investigaciones y misiones de la ESA relacionadas con el origen y evolución del universo.</p>
                              </li>
                              <li class="border-b border-gray-200 dark:border-gray-700 pb-3">
                                <div class="font-medium">Observatorio Astronómico Nacional</div>
                                <div class="text-sm text-gray-600 dark:text-gray-400">oan.es</div>
                                <p class="text-sm mt-1">Recursos e investigaciones del Observatorio Astronómico Nacional de España.</p>
                              </li>
                            </ul>
                          `;
                        } else if (link === 'Documentales') {
                          resourceContent = `
                            <h3 class="text-lg font-semibold mb-4">Documentales recomendados</h3>
                            <ul class="space-y-3">
                              <li class="border-b border-gray-200 dark:border-gray-700 pb-3">
                                <div class="font-medium">Cosmos: Odisea en el Espacio</div>
                                <div class="text-sm text-gray-600 dark:text-gray-400">Neil deGrasse Tyson (2014)</div>
                                <p class="text-sm mt-1">Continuación moderna de la serie clásica de Carl Sagan que explora los misterios del universo.</p>
                              </li>
                              <li class="border-b border-gray-200 dark:border-gray-700 pb-3">
                                <div class="font-medium">El Universo</div>
                                <div class="text-sm text-gray-600 dark:text-gray-400">History Channel (2007-2015)</div>
                                <p class="text-sm mt-1">Serie documental que utiliza imágenes generadas por computadora para explorar los misterios del universo.</p>
                              </li>
                              <li class="border-b border-gray-200 dark:border-gray-700 pb-3">
                                <div class="font-medium">Viaje a los límites del Universo</div>
                                <div class="text-sm text-gray-600 dark:text-gray-400">National Geographic (2008)</div>
                                <p class="text-sm mt-1">Un recorrido visual impresionante desde la Tierra hasta los confines del universo observable.</p>
                              </li>
                            </ul>
                          `;
                        } else if (link === 'Glosario Cósmico') {
                          resourceContent = `
                            <h3 class="text-lg font-semibold mb-4">Glosario de términos cosmológicos</h3>
                            <dl class="space-y-3">
                              <div class="border-b border-gray-200 dark:border-gray-700 pb-3">
                                <dt class="font-medium">Big Bang</dt>
                                <dd class="text-sm mt-1">Modelo cosmológico predominante que describe el origen y evolución temprana del universo, donde todo comenzó desde un estado extremadamente caliente y denso hace aproximadamente 13.800 millones de años.</dd>
                              </div>
                              <div class="border-b border-gray-200 dark:border-gray-700 pb-3">
                                <dt class="font-medium">Agujero Negro</dt>
                                <dd class="text-sm mt-1">Región del espacio-tiempo donde la gravedad es tan fuerte que nada, ni siquiera la luz, puede escapar de ella una vez que ha pasado el horizonte de eventos.</dd>
                              </div>
                              <div class="border-b border-gray-200 dark:border-gray-700 pb-3">
                                <dt class="font-medium">Materia Oscura</dt>
                                <dd class="text-sm mt-1">Tipo hipotético de materia que no emite ni absorbe luz u otra radiación electromagnética, pero cuya existencia se infiere por sus efectos gravitacionales sobre la materia visible.</dd>
                              </div>
                              <div class="border-b border-gray-200 dark:border-gray-700 pb-3">
                                <dt class="font-medium">Energía Oscura</dt>
                                <dd class="text-sm mt-1">Forma hipotética de energía que permea todo el espacio y tiende a acelerar la expansión del universo.</dd>
                              </div>
                            </dl>
                          `;
                        }
                        
                        modalContent.innerHTML = `
                          <button class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                          </button>
                          <h2 class="text-2xl font-bold mb-4">${link}</h2>
                          ${resourceContent}
                        `;
                        
                        modalElement.appendChild(modalContent);
                        document.body.appendChild(modalElement);
                        
                        // Agregar funcionalidad de cierre al botón
                        const closeButton = modalContent.querySelector('button');
                        closeButton?.addEventListener('click', () => {
                          document.body.removeChild(modalElement);
                        });
                        
                        // Cerrar al hacer clic fuera del contenido
                        modalElement.addEventListener('click', (e) => {
                          if (e.target === modalElement) {
                            document.body.removeChild(modalElement);
                          }
                        });
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">{homeTexts.footer.categories.community}</h3>
              <ul className="space-y-2 text-sm">
                {homeTexts.footer.links.community.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-secondary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">{homeTexts.footer.categories.legal}</h3>
              <ul className="space-y-2 text-sm">
                {homeTexts.footer.links.legal.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-secondary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-800 pt-6 text-center text-sm text-gray-600 dark:text-gray-400">
            <p>{homeTexts.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Sistema de reconexión automática para Vite HMR
// Esto ayudará a prevenir que la app se rompa después de inactividad
const connectViteHMR = () => {
  if (import.meta.hot) {
    let retryCount = 0;
    const maxRetries = 10;
    const retryInterval = 3000; // 3 segundos
    
    const reconnect = () => {
      if (retryCount < maxRetries) {
        setTimeout(() => {
          console.log(`Intentando reconectar al servidor de desarrollo (intento ${retryCount + 1}/${maxRetries})...`);
          // Esta línea forzará una reconexión al websocket
          window.location.reload();
        }, retryInterval * Math.pow(1.5, retryCount));
        retryCount++;
      }
    };
    
    window.addEventListener('error', (event) => {
      // Solo intentar reconectar para errores específicos relacionados con la conexión
      if (
        event.message.includes('Failed to fetch') || 
        event.message.includes('NetworkError') ||
        event.message.includes('Network Error') ||
        event.message.includes('net::ERR')
      ) {
        console.log('Error de red detectado, intentando reconectar...');
        reconnect();
      }
    });
    
    // Manejar pérdida de conexión
    window.addEventListener('offline', () => {
      console.log('Conexión a internet perdida. Esperando reconexión...');
    });
    
    window.addEventListener('online', () => {
      console.log('Conexión a internet restaurada. Reconectando...');
      window.location.reload();
    });
  }
};

// Iniciar el sistema de reconexión
connectViteHMR();

createRoot(document.getElementById("root")!).render(<App />);

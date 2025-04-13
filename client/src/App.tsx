import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw } from "lucide-react";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/home-page";
import AuthPage from "@/pages/auth-page";
import { ProtectedRoute } from "./lib/protected-route";
import { AuthProvider } from "./hooks/use-auth";
import { ThemeProvider } from "./hooks/use-theme";

function Router() {
  return (
    <Switch>
      <ProtectedRoute path="/" component={HomePage} />
      <Route path="/auth" component={AuthPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

// Componente para manejar errores globales en la aplicación
function ErrorBoundary({ children }: { children: React.ReactNode }) {
  const [hasError, setHasError] = useState(false);
  const [connectionError, setConnectionError] = useState(false);
  
  // Detector de errores de red globales
  useEffect(() => {
    const handleConnectionError = () => setConnectionError(true);
    const resetError = () => {
      setConnectionError(false);
      setHasError(false);
    };
    
    window.addEventListener('offline', handleConnectionError);
    window.addEventListener('online', resetError);
    
    // Ping para mantener conexión activa
    const keepAliveInterval = setInterval(() => {
      // Esta solicitud simple ayuda a mantener la conexión activa
      fetch('/api/user', { method: 'HEAD', credentials: 'include' })
        .catch(() => {
          // Ignoramos los errores en estas solicitudes
        });
    }, 60000); // Cada minuto
    
    // Capturar eventos de vista inactiva/activa para recargar datos
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        // Recargar la aplicación si ha estado inactiva por largo tiempo
        const lastActiveTime = parseInt(sessionStorage.getItem('lastActiveTime') || '0');
        const now = Date.now();
        const inactiveTime = now - lastActiveTime;
        
        // Si ha estado inactivo más de 30 minutos
        if (inactiveTime > 30 * 60 * 1000) {
          window.location.reload();
        }
        
        sessionStorage.setItem('lastActiveTime', now.toString());
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    sessionStorage.setItem('lastActiveTime', Date.now().toString());
    
    return () => {
      window.removeEventListener('offline', handleConnectionError);
      window.removeEventListener('online', resetError);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearInterval(keepAliveInterval);
    };
  }, []);
  
  // Si hay error de conexión, mostrar mensaje de reconexión
  if (connectionError) {
    return (
      <div className="fixed inset-0 flex items-center justify-center p-4 bg-background/95 z-50">
        <Alert className="max-w-md border-destructive bg-destructive/10">
          <AlertTriangle className="h-5 w-5 text-destructive" />
          <div className="ml-3">
            <AlertTitle className="text-destructive">Error de conexión</AlertTitle>
            <AlertDescription className="mt-2 text-sm">
              Se ha perdido la conexión con el servidor. Por favor, verifica tu conexión a internet e intenta nuevamente.
            </AlertDescription>
            <Button 
              variant="outline" 
              size="sm" 
              className="mt-4 flex items-center gap-1"
              onClick={() => window.location.reload()}
            >
              <RefreshCw className="h-4 w-4" />
              Reconectar
            </Button>
          </div>
        </Alert>
      </div>
    );
  }
  
  // Si hay error del servidor, mostrar mensaje de error pero permitir continuar
  if (hasError) {
    return (
      <>
        <div className="fixed top-4 right-4 z-50">
          <Alert className="max-w-md border-destructive bg-destructive/10">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <div className="ml-3">
              <AlertTitle className="text-destructive">Error del servidor</AlertTitle>
              <AlertDescription className="mt-2 text-sm">
                Ha ocurrido un error al comunicarse con el servidor. Estamos intentando reconectar...
              </AlertDescription>
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-4 flex items-center gap-1"
                onClick={() => {
                  setHasError(false);
                  window.location.reload();
                }}
              >
                <RefreshCw className="h-4 w-4" />
                Reintentar
              </Button>
            </div>
          </Alert>
        </div>
        {children}
      </>
    );
  }
  
  return <>{children}</>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <ErrorBoundary>
            <Router />
            <Toaster />
          </ErrorBoundary>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

import { createContext, ReactNode, useContext } from "react";
import {
  useQuery,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { User, insertUserSchema, LoginUser, RegisterUser } from "@shared/schema";
import { getQueryFn, apiRequest, queryClient } from "../lib/queryClient";
import { useToast } from "@/hooks/use-toast";

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  error: Error | null;
  loginMutation: UseMutationResult<User, Error, LoginUser>;
  logoutMutation: UseMutationResult<void, Error, void>;
  registerMutation: UseMutationResult<User, Error, RegisterUser>;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const { toast } = useToast();
  const {
    data: user,
    error,
    isLoading,
  } = useQuery<User | undefined, Error>({
    queryKey: ["/api/user"],
    queryFn: getQueryFn({ on401: "returnNull" }),
  });

  const loginMutation = useMutation({
    mutationFn: async (credentials: LoginUser) => {
      try {
        const res = await fetch("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
          credentials: "include",
        });
        
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.message || "Error de autenticación");
        }
        
        return await res.json();
      } catch (error) {
        if (error instanceof Error) {
          throw error;
        }
        throw new Error("Ha ocurrido un error durante el inicio de sesión");
      }
    },
    onSuccess: (user: User) => {
      queryClient.setQueryData(["/api/user"], user);
      toast({
        title: "Inicio de sesión exitoso",
        description: `Bienvenido de nuevo, ${user.username}`,
        variant: "default",
      });
    },
    onError: (error: Error) => {
      // No usamos toast aquí para evitar la ventana emergente adicional
      // El error se mostrará directamente en el formulario
      console.error("Error de inicio de sesión:", error.message);
    },
  });

  const registerMutation = useMutation({
    mutationFn: async (credentials: RegisterUser) => {
      try {
        const userToRegister = insertUserSchema.parse({
          username: credentials.username,
          password: credentials.password,
        });
        
        const res = await fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userToRegister),
          credentials: "include",
        });
        
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.message || "Error al crear la cuenta");
        }
        
        return await res.json();
      } catch (error) {
        if (error instanceof Error) {
          throw error;
        }
        throw new Error("Ha ocurrido un error durante el registro");
      }
    },
    onSuccess: (user: User) => {
      queryClient.setQueryData(["/api/user"], user);
      toast({
        title: "Registro exitoso",
        description: `Bienvenido, ${user.username}`,
        variant: "default",
      });
    },
    onError: (error: Error) => {
      // No usamos toast aquí para evitar la ventana emergente adicional
      // El error se mostrará directamente en el formulario
      console.error("Error de registro:", error.message);
    },
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      await apiRequest("POST", "/api/logout");
    },
    onSuccess: () => {
      queryClient.setQueryData(["/api/user"], null);
      toast({
        title: "Sesión cerrada",
        description: "Has cerrado sesión correctamente",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error al cerrar sesión",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  return (
    <AuthContext.Provider
      value={{
        user: user ?? null,
        isLoading,
        error,
        loginMutation,
        logoutMutation,
        registerMutation,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
}

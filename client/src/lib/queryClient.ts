import { QueryClient, QueryFunction } from "@tanstack/react-query";

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    let errorMessage: string;
    try {
      // Intentar analizar el error como JSON
      const errorData = await res.json();
      errorMessage = errorData.message || errorData.error || `Error del servidor: ${res.status}`;
    } catch (e) {
      // Si no es JSON, usar el texto de respuesta
      const text = await res.text();
      errorMessage = text || res.statusText || `Error del servidor: ${res.status}`;
    }
    throw new Error(errorMessage);
  }
}

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  const res = await fetch(url, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return res;
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const res = await fetch(queryKey[0] as string, {
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: true, // Recargar datos al volver a la ventana
      staleTime: 300000, // 5 minutos antes de considerar los datos obsoletos
      retry: 3, // Intentar 3 veces antes de fallar
      retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000), // Retraso exponencial entre reintentos
    },
    mutations: {
      retry: 2, // Intentar 2 veces las mutaciones
    },
  },
});

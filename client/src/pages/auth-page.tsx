import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Redirect, useLocation } from "wouter";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { z } from "zod";

import { useAuth } from "@/hooks/use-auth";
import { CosmicParticles } from "@/components/ui/cosmic-particles";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { authTexts } from "@/components/language";
import { loginUserSchema, registerUserSchema } from "@shared/schema";

export default function AuthPage() {
  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [_, setLocation] = useLocation();
  const { user, isLoading, loginMutation, registerMutation } = useAuth();

  const loginForm = useForm({
    resolver: zodResolver(loginUserSchema),
    defaultValues: {
      username: "",
      password: ""
    }
  });

  const registerForm = useForm({
    resolver: zodResolver(registerUserSchema),
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: ""
    }
  });
  
  // Redirect if already logged in - moved after all hooks are defined
  if (user) {
    return <Redirect to="/" />;
  }

  const onLoginSubmit = async (data: z.infer<typeof loginUserSchema>) => {
    await loginMutation.mutateAsync(data, {
      onSuccess: () => {
        setLocation("/");
      }
    });
  };

  const onRegisterSubmit = async (data: z.infer<typeof registerUserSchema>) => {
    await registerMutation.mutateAsync(data, {
      onSuccess: () => {
        setRegisterSuccess(true);
        // Redirect to login after successful registration
        setTimeout(() => {
          setIsRegister(false);
          setRegisterSuccess(false);
          loginForm.setValue("username", data.username);
        }, 1500);
      }
    });
  };

  const toggleView = () => {
    setIsRegister(!isRegister);
    setRegisterSuccess(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <CosmicParticles />
      
      <div className={`form-container w-full max-w-md p-8 rounded-xl shadow-xl bg-white/10 dark:bg-black/30 border border-gray-200 dark:border-gray-800 z-10 transition-all duration-300 backdrop-blur-lg ${isRegister ? 'hidden' : 'block'}`}>
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary dark:text-secondary mb-2 font-montserrat">
            {authTexts.loginTitle}
          </h1>
          <p className="text-gray-600 dark:text-gray-300">{authTexts.loginSubtitle}</p>
        </div>
        
        <Form {...loginForm}>
          <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-6">
            <FormField
              control={loginForm.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{authTexts.username}</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary transition-all duration-200"
                      placeholder={authTexts.usernamePlaceholder}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={loginForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{authTexts.password}</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        type={showPassword ? "text" : "password"}
                        className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary transition-all duration-200"
                        placeholder={authTexts.passwordPlaceholder}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit"
              className="w-full py-6 bg-primary hover:bg-primary-light text-white font-semibold rounded-lg shadow transition-all duration-200"
              disabled={loginMutation.isPending}
            >
              {loginMutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {authTexts.loginButton}...
                </>
              ) : (
                authTexts.loginButton
              )}
            </Button>
            
            {loginMutation.isError && (
              <Alert variant="destructive">
                <AlertDescription>
                  {loginMutation.error.message}
                </AlertDescription>
              </Alert>
            )}
            
            <div className="text-center text-sm">
              <span>{authTexts.noAccount}</span>
              <Button 
                type="button" 
                variant="link" 
                className="text-primary dark:text-secondary font-medium ml-1 p-0"
                onClick={toggleView}
              >
                {authTexts.register}
              </Button>
            </div>
          </form>
        </Form>
      </div>
      
      <div className={`form-container w-full max-w-md p-8 rounded-xl shadow-xl bg-white/10 dark:bg-black/30 border border-gray-200 dark:border-gray-800 z-10 transition-all duration-300 backdrop-blur-lg ${isRegister ? 'block' : 'hidden'}`}>
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary dark:text-secondary mb-2 font-montserrat">
            {authTexts.registerTitle}
          </h1>
          <p className="text-gray-600 dark:text-gray-300">{authTexts.registerSubtitle}</p>
        </div>
        
        <Form {...registerForm}>
          <form onSubmit={registerForm.handleSubmit(onRegisterSubmit)} className="space-y-6">
            <FormField
              control={registerForm.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{authTexts.username}</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary transition-all duration-200"
                      placeholder={authTexts.usernamePlaceholder}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={registerForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{authTexts.password}</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        type={showPassword ? "text" : "password"}
                        className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary transition-all duration-200"
                        placeholder={authTexts.passwordPlaceholder}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={registerForm.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{authTexts.confirmPassword}</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        type={showConfirmPassword ? "text" : "password"}
                        className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary transition-all duration-200"
                        placeholder={authTexts.confirmPasswordPlaceholder}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit"
              className="w-full py-6 bg-primary hover:bg-primary-light text-white font-semibold rounded-lg shadow transition-all duration-200"
              disabled={registerMutation.isPending || registerSuccess}
            >
              {registerMutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {authTexts.registerButton}...
                </>
              ) : (
                authTexts.registerButton
              )}
            </Button>
            
            {registerMutation.isError && (
              <Alert variant="destructive">
                <AlertDescription>
                  {registerMutation.error.message}
                </AlertDescription>
              </Alert>
            )}
            
            {registerSuccess && (
              <Alert variant="default" className="bg-success/10 text-success border-success/20">
                <AlertDescription>
                  {authTexts.registerSuccess}. {authTexts.redirecting}
                </AlertDescription>
              </Alert>
            )}
            
            <div className="text-center text-sm">
              <span>{authTexts.hasAccount}</span>
              <Button 
                type="button" 
                variant="link" 
                className="text-primary dark:text-secondary font-medium ml-1 p-0"
                onClick={toggleView}
              >
                {authTexts.login}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

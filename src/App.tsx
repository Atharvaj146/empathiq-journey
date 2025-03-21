
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageTransition from "./components/animations/Transition";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Assessment from "./pages/Assessment";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={
              <PageTransition>
                <Index />
              </PageTransition>
            } 
          />
          <Route 
            path="/auth" 
            element={
              <PageTransition>
                <Auth />
              </PageTransition>
            } 
          />
          <Route 
            path="/assessment" 
            element={
              <PageTransition>
                <Assessment />
              </PageTransition>
            } 
          />
          <Route 
            path="/dashboard" 
            element={
              <PageTransition>
                <Dashboard />
              </PageTransition>
            } 
          />
          <Route 
            path="*" 
            element={
              <PageTransition>
                <NotFound />
              </PageTransition>
            } 
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import AthleteAuth from "./pages/auth/AthleteAuth";
import CoachAuth from "./pages/auth/CoachAuth";
import AthleteDashboard from "./pages/athlete/Dashboard";
import CoachDashboard from "./pages/coach/Dashboard";
import AssessmentSelect from "./pages/athlete/AssessmentSelect";
import AssessmentRecord from "./pages/athlete/AssessmentRecord";
import AssessmentProcessing from "./pages/athlete/AssessmentProcessing";
import AssessmentResults from "./pages/athlete/AssessmentResults";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth/athlete" element={<AthleteAuth />} />
          <Route path="/auth/coach" element={<CoachAuth />} />
          <Route path="/athlete/dashboard" element={<AthleteDashboard />} />
          <Route path="/athlete/assessment/select" element={<AssessmentSelect />} />
          <Route path="/athlete/assessment/record/:testId" element={<AssessmentRecord />} />
          <Route path="/athlete/assessment/processing/:testId" element={<AssessmentProcessing />} />
          <Route path="/athlete/assessment/results/:testId" element={<AssessmentResults />} />
          <Route path="/coach/dashboard" element={<CoachDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

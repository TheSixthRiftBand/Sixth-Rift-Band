import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import AdminSubscribers from "@/pages/admin-subscribers";
import TrackDetail from "@/pages/track-detail";
import NotFound from "@/pages/not-found";
import Bubbles from "@/components/bubbles";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/track/:id" component={TrackDetail} />
      <Route path="/admin/subscribers" component={AdminSubscribers} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Bubbles />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

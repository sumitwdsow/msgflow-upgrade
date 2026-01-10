import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/dashboard/Dashboard";
import BoltMarketing from "./pages/dashboard/BoltMarketing";
import BoltReports from "./pages/dashboard/BoltReports";
import FlowBuilder from "./pages/dashboard/FlowBuilder";
import Campaigns from "./pages/dashboard/Campaigns";
import Templates from "./pages/dashboard/Templates";
import SendMessage from "./pages/dashboard/SendMessage";
import MessageHistory from "./pages/dashboard/MessageHistory";
import Inbox from "./pages/dashboard/Inbox";
import Contacts from "./pages/dashboard/Contacts";
import BusinessProfile from "./pages/dashboard/BusinessProfile";
import SupportTickets from "./pages/dashboard/SupportTickets";
import Wallet from "./pages/dashboard/Wallet";
import TopUpWallet from "./pages/dashboard/TopUpWallet";
import Billing from "./pages/dashboard/Billing";
import Reports from "./pages/dashboard/Reports";
import Documentation from "./pages/Documentation";
import Changelog from "./pages/Changelog";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/bolt-marketing" element={<BoltMarketing />} />
          <Route path="/bolt-reports" element={<BoltReports />} />
          <Route path="/flow-builder" element={<FlowBuilder />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/send-message" element={<SendMessage />} />
          <Route path="/message-history" element={<MessageHistory />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/business-profile" element={<BusinessProfile />} />
          <Route path="/support-tickets" element={<SupportTickets />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/top-up-wallet" element={<TopUpWallet />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

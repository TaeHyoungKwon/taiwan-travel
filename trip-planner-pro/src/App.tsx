import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar, { type TabKey } from "@/components/Navbar";
import Index from "./pages/Index.tsx";
import Food from "./pages/Food.tsx";
import Spots from "./pages/Spots.tsx";

const queryClient = new QueryClient();

const App = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("trips");

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
        <AnimatePresence mode="wait">
          {activeTab === "trips" && (
            <motion.div
              key="trips"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Index />
            </motion.div>
          )}
          {activeTab === "food" && (
            <motion.div
              key="food"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Food />
            </motion.div>
          )}
          {activeTab === "spots" && (
            <motion.div
              key="spots"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Spots />
            </motion.div>
          )}
        </AnimatePresence>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

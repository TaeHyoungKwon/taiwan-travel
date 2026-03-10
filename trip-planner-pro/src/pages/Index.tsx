import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plane } from "lucide-react";
import { tripsData, type TripPlan } from "@/data/trips";
import TripCard from "@/components/TripCard";
import TripDetail from "@/components/TripDetail";

const Index = () => {
  const isSingleTrip = tripsData.length === 1;
  const [selectedTrip, setSelectedTrip] = useState<TripPlan | null>(
    isSingleTrip ? tripsData[0] : null,
  );

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {selectedTrip ? (
          <motion.div
            key="detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <TripDetail
              trip={selectedTrip}
              onBack={isSingleTrip ? undefined : () => setSelectedTrip(null)}
            />
          </motion.div>
        ) : (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mx-auto max-w-4xl px-4 py-12"
          >
            {/* Header */}
            <div className="mb-10 text-center">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4"
              >
                <Plane className="h-4 w-4" />
                여행 타임테이블
              </motion.div>
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight"
              >
                나의 여행 계획
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-3 text-lg text-muted-foreground"
              >
                2박 3일 여행 일정을 한눈에 확인하세요
              </motion.p>
            </div>

            {/* Trip Grid */}
            <div className="grid gap-6 sm:grid-cols-2">
              {tripsData.map((trip, i) => (
                <motion.div
                  key={trip.id}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.1 }}
                >
                  <TripCard
                    trip={trip}
                    onClick={() => setSelectedTrip(trip)}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;

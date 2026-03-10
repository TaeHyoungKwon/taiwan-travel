import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import type { TripPlan } from "@/data/trips";
import ActivityCard from "./ActivityCard";

interface TripDetailProps {
  trip: TripPlan;
  onBack?: () => void;
}

const formatDate = (dateStr: string) => {
  const d = new Date(dateStr + "T00:00:00");
  return `${d.getMonth() + 1}/${d.getDate()}`;
};

const TripDetail = ({ trip, onBack }: TripDetailProps) => {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-56 sm:h-72 overflow-hidden">
        <img
          src={trip.coverImage}
          alt={trip.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          {onBack && (
            <button
              onClick={onBack}
              className="mb-3 flex items-center gap-1.5 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              돌아가기
            </button>
          )}
          <h1 className="font-display text-3xl font-extrabold text-primary-foreground">
            {trip.title}
          </h1>
          <p className="mt-1 text-sm text-primary-foreground/80">
            {trip.destination} · {trip.startDate} ~ {trip.endDate}
          </p>
        </div>
      </div>

      {/* Day Tabs */}
      <div className="sticky top-[3.25rem] z-30 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="mx-auto flex max-w-3xl gap-1 overflow-x-auto px-4 py-2">
          {trip.days.map((day, idx) => (
            <button
              key={day.day}
              onClick={() => setActiveDay(idx)}
              className={`relative flex-shrink-0 rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                activeDay === idx
                  ? `day-badge-${day.day} shadow-md`
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              Day {day.day}
              <span className="ml-1.5 text-xs font-normal opacity-80">
                {day.label} ({formatDate(day.date)})
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Activities */}
      <div className="mx-auto max-w-3xl px-4 py-6">
        <motion.div
          key={activeDay}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-3"
        >
          {trip.days[activeDay].activities.map((activity) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              dayNum={trip.days[activeDay].day}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TripDetail;

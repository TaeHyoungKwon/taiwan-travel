import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import type { TripPlan } from "@/data/trips";

interface TripCardProps {
  trip: TripPlan;
  onClick: () => void;
}

const TripCard = ({ trip, onClick }: TripCardProps) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group relative w-full overflow-hidden rounded-2xl bg-card text-left shadow-md transition-shadow hover:shadow-xl"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={trip.coverImage}
          alt={trip.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-display text-xl font-bold text-primary-foreground">
            {trip.title}
          </h3>
        </div>
      </div>
      <div className="p-4 space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-primary" />
          <span>{trip.destination}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 text-primary" />
          <span>{trip.startDate} ~ {trip.endDate}</span>
        </div>
        <div className="flex gap-1.5 pt-1">
          {trip.days.map((day) => (
            <span
              key={day.day}
              className={`day-badge-${day.day} rounded-full px-2.5 py-0.5 text-xs font-medium`}
            >
              Day {day.day}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  );
};

export default TripCard;

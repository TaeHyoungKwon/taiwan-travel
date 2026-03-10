import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Clock,
  ChevronDown,
  Utensils,
  Camera,
  Train,
  Hotel,
  ShoppingBag,
  Compass,
  X,
  Lightbulb,
  ExternalLink,
} from "lucide-react";
import type { Activity } from "@/data/trips";

const categoryConfig: Record<
  Activity["category"],
  { icon: typeof Utensils; label: string }
> = {
  food: { icon: Utensils, label: "먹거리" },
  sightseeing: { icon: Camera, label: "관광" },
  transport: { icon: Train, label: "이동" },
  hotel: { icon: Hotel, label: "숙소" },
  shopping: { icon: ShoppingBag, label: "쇼핑" },
  activity: { icon: Compass, label: "체험" },
};

interface ActivityCardProps {
  activity: Activity;
  dayNum: number;
}

const ActivityCard = ({ activity, dayNum }: ActivityCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const config = categoryConfig[activity.category];
  const Icon = config.icon;

  const hasExpandableContent =
    activity.images?.length || activity.videoUrl || activity.tips?.length;

  return (
    <>
      <motion.div
        layout
        className={`relative border-l-4 day-border-${dayNum} rounded-xl bg-card shadow-sm transition-shadow hover:shadow-md`}
      >
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex w-full items-start gap-3 p-4 text-left"
        >
          {/* Time column */}
          <div className="flex flex-col items-center pt-0.5">
            <span className="font-display text-lg font-bold text-foreground">
              {activity.time}
            </span>
            {activity.duration && (
              <span className="flex items-center gap-0.5 text-xs text-muted-foreground mt-0.5">
                <Clock className="h-3 w-3" />
                {activity.duration}
              </span>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-muted">
                <Icon className="h-4 w-4 text-muted-foreground" />
              </span>
              <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                {config.label}
              </span>
              {activity.price && (
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                  {activity.price}
                </span>
              )}
            </div>
            <h4 className="mt-1 font-display text-base font-semibold text-foreground leading-snug">
              {activity.title}
            </h4>
            <p className="mt-0.5 text-sm text-muted-foreground line-clamp-2">
              {activity.description}
            </p>
            {activity.location && (
              activity.link ? (
                <a
                  href={activity.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="mt-1 inline-flex items-center gap-1 text-xs text-primary font-medium hover:underline"
                >
                  <MapPin className="h-3 w-3" />
                  {activity.location}
                  <ExternalLink className="h-2.5 w-2.5" />
                </a>
              ) : (
                <span className="mt-1 inline-flex items-center gap-1 text-xs text-primary font-medium">
                  <MapPin className="h-3 w-3" />
                  {activity.location}
                </span>
              )
            )}
          </div>

          {/* Expand icon */}
          {hasExpandableContent && (
            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              className="mt-1 text-muted-foreground"
            >
              <ChevronDown className="h-5 w-5" />
            </motion.div>
          )}
        </button>

        {/* Expanded content */}
        <AnimatePresence>
          {expanded && hasExpandableContent && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              {/* Images */}
              {(activity.images?.length || activity.videoUrl) && (
                <div className="flex gap-2 overflow-x-auto px-4 pb-3">
                  {activity.images?.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setLightboxImg(img)}
                      className="flex-shrink-0 overflow-hidden rounded-lg"
                    >
                      <img
                        src={img}
                        alt={`${activity.title} ${i + 1}`}
                        className="h-32 w-48 object-cover transition-transform hover:scale-105"
                        loading="lazy"
                      />
                    </button>
                  ))}
                  {activity.videoUrl && (
                    <div className="flex-shrink-0 overflow-hidden rounded-lg">
                      <iframe
                        src={activity.videoUrl}
                        className="h-32 w-48"
                        allowFullScreen
                        title={activity.title}
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Tips */}
              {activity.tips?.length && (
                <div className="mx-4 mb-4 rounded-lg bg-muted/50 p-3">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Lightbulb className="h-3.5 w-3.5 text-yellow-500" />
                    <span className="text-xs font-semibold text-muted-foreground">
                      여행 팁
                    </span>
                  </div>
                  <ul className="space-y-1">
                    {activity.tips.map((tip, i) => (
                      <li
                        key={i}
                        className="text-xs text-muted-foreground leading-relaxed flex gap-1.5"
                      >
                        <span className="text-muted-foreground/50 mt-0.5">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4"
            onClick={() => setLightboxImg(null)}
          >
            <button
              className="absolute right-4 top-4 rounded-full bg-card p-2"
              onClick={() => setLightboxImg(null)}
            >
              <X className="h-5 w-5 text-foreground" />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={lightboxImg}
              alt="확대 이미지"
              className="max-h-[85vh] max-w-full rounded-xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ActivityCard;

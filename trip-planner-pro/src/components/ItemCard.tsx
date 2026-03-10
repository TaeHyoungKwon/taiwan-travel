import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

interface ItemCardProps {
  name: string;
  nameLocal: string;
  description: string;
  coverImage: string;
  category: string;
  categoryLabel: string;
  onClick: () => void;
}

const ItemCard = ({
  name,
  nameLocal,
  description,
  coverImage,
  categoryLabel,
  onClick,
}: ItemCardProps) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group relative w-full overflow-hidden rounded-2xl bg-card text-left shadow-md transition-shadow hover:shadow-xl"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={coverImage}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        <div className="absolute top-3 right-3">
          <span className="rounded-full bg-primary/90 px-2.5 py-1 text-[11px] font-semibold text-primary-foreground">
            {categoryLabel}
          </span>
        </div>
        <div className="absolute bottom-3 left-4 right-4">
          <h3 className="font-display text-lg font-bold text-primary-foreground leading-tight">
            {name}
          </h3>
          <p className="text-xs text-primary-foreground/70 mt-0.5">
            {nameLocal}
          </p>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
      </div>
    </motion.button>
  );
};

export default ItemCard;

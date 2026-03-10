import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  ExternalLink,
  Lightbulb,
  X,
  Tag,
} from "lucide-react";

interface ItemDetailProps {
  name: string;
  nameLocal: string;
  descriptionFull: string;
  coverImage: string;
  images: string[];
  location?: string;
  link?: string;
  tips: string[];
  tags: string[];
  onBack: () => void;
}

const ItemDetail = ({
  name,
  nameLocal,
  descriptionFull,
  coverImage,
  images,
  location,
  link,
  tips,
  tags,
  onBack,
}: ItemDetailProps) => {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <>
      <div className="min-h-screen">
        {/* Hero */}
        <div className="relative h-56 sm:h-72 overflow-hidden">
          <img
            src={coverImage}
            alt={name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <button
              onClick={onBack}
              className="mb-3 flex items-center gap-1.5 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              돌아가기
            </button>
            <h1 className="font-display text-3xl font-extrabold text-primary-foreground">
              {name}
            </h1>
            <p className="mt-1 text-sm text-primary-foreground/80">
              {nameLocal}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-3xl px-4 py-6 space-y-6">
          {/* Description */}
          <p className="text-base text-foreground leading-relaxed">
            {descriptionFull}
          </p>

          {/* Location */}
          {location && (
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              {link ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary font-medium hover:underline inline-flex items-center gap-1"
                >
                  {location}
                  <ExternalLink className="h-3 w-3" />
                </a>
              ) : (
                <span className="text-sm text-primary font-medium">
                  {location}
                </span>
              )}
            </div>
          )}

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="h-3.5 w-3.5 text-muted-foreground" />
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Image Gallery */}
          {images.length > 0 && (
            <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4">
              {images.map((imgUrl, i) => (
                <button
                  key={i}
                  onClick={() => setLightboxImg(imgUrl)}
                  className="flex-shrink-0 overflow-hidden rounded-xl"
                >
                  <img
                    src={imgUrl}
                    alt={`${name} ${i + 1}`}
                    className="h-40 w-60 object-cover transition-transform hover:scale-105"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Tips */}
          {tips.length > 0 && (
            <div className="rounded-xl bg-muted/50 p-4">
              <div className="flex items-center gap-1.5 mb-3">
                <Lightbulb className="h-4 w-4 text-yellow-500" />
                <span className="text-sm font-semibold text-foreground">
                  여행 팁
                </span>
              </div>
              <ul className="space-y-2">
                {tips.map((tip, i) => (
                  <li
                    key={i}
                    className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                  >
                    <span className="text-primary font-bold mt-0.5">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

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

export default ItemDetail;

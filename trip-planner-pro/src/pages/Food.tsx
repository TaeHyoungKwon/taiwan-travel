import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Utensils } from "lucide-react";
import { foodsData, foodCategories, type FoodItem } from "@/data/foods";
import ItemCard from "@/components/ItemCard";
import ItemDetail from "@/components/ItemDetail";

const categoryLabels: Record<FoodItem["category"], string> = {
  restaurant: "식사",
  street_dessert: "간식/디저트",
  cafe_tea: "카페/차",
  nightmarket: "야시장",
};

const Food = () => {
  const [selectedItem, setSelectedItem] = useState<FoodItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered =
    activeCategory === "all"
      ? foodsData
      : foodsData.filter((f) => f.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {selectedItem ? (
          <motion.div
            key="detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ItemDetail
              name={selectedItem.name}
              nameLocal={selectedItem.nameLocal}
              descriptionFull={selectedItem.descriptionFull}
              coverImage={selectedItem.coverImage}
              images={selectedItem.images}
              location={selectedItem.location}
              link={selectedItem.link}
              tips={selectedItem.tips}
              tags={selectedItem.tags}
              onBack={() => setSelectedItem(null)}
            />
          </motion.div>
        ) : (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mx-auto max-w-4xl px-4 py-10"
          >
            {/* Header */}
            <div className="mb-8 text-center">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4"
              >
                <Utensils className="h-4 w-4" />
                타이베이 먹거리
              </motion.div>
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight"
              >
                먹거리 가이드
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-3 text-lg text-muted-foreground"
              >
                Gemini + GPT가 추천하는 대만 필수 맛집 {foodsData.length}곳
              </motion.p>
            </div>

            {/* Category Filter */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="mb-8 flex gap-2 overflow-x-auto pb-1 justify-center"
            >
              {foodCategories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                    activeCategory === cat.key
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </motion.div>

            {/* Card Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                >
                  <ItemCard
                    name={item.name}
                    nameLocal={item.nameLocal}
                    description={item.description}
                    coverImage={item.coverImage}
                    category={item.category}
                    categoryLabel={categoryLabels[item.category]}
                    onClick={() => setSelectedItem(item)}
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

export default Food;

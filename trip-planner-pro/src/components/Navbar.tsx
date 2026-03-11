import { motion } from "framer-motion";
import { Plane, Utensils, Camera, Soup } from "lucide-react";

export type TabKey = "trips" | "food" | "food-menus" | "spots";

interface NavbarProps {
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
}

const tabs: { key: TabKey; label: string; icon: typeof Plane }[] = [
  { key: "trips", label: "여행계획", icon: Plane },
  { key: "food", label: "맛집", icon: Utensils },
  { key: "food-menus", label: "음식메뉴", icon: Soup },
  { key: "spots", label: "관광지", icon: Camera },
];

const Navbar = ({ activeTab, onTabChange }: NavbarProps) => {
  return (
    <nav className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="mx-auto flex max-w-4xl items-center justify-center px-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => onTabChange(tab.key)}
              className={`relative flex items-center gap-1.5 px-5 py-3.5 text-sm font-semibold transition-colors ${
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span className="hidden sm:inline">{tab.label}</span>
              {isActive && (
                <motion.div
                  layoutId="navbar-underline"
                  className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;

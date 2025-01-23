"use client";

import { Category } from "@prisma/client";
import {
  FcEngineering,
  FcMusic,
  FcFilmReel,
  FcSalesPerformance,
  FcSportsMode,
  FcOldTimeCamera,
  FcMultipleDevices,
} from "react-icons/fc";
import { IconType } from "react-icons";
import { CategoryItem } from "./category-item";

interface CategoriesProps {
  items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
  Music: FcMusic,
  Filming: FcFilmReel,
  Accounting: FcSalesPerformance,
  Engineering: FcEngineering,
  Fitness: FcSportsMode,
  Photography: FcOldTimeCamera,
  "Computer Science": FcMultipleDevices,
};

export function Categories({ items }: CategoriesProps) {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
      {items.map((item) => (
        <CategoryItem
          key={item.id}
          label={item.name}
          value={item.id}
          icon={iconMap[item.name]}
        />
      ))}
    </div>
  );
}

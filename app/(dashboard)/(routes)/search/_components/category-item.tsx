"use client";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IconType } from "react-icons";

import qs from "query-string";

interface CategoryItemProps {
  label: string;
  value: string;
  icon: IconType;
}

export function CategoryItem({ label, value, icon: Icon }: CategoryItemProps) {
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategoryId = searchParams.get("categoryId");
  const currentTitle = searchParams.get("title");
  const isSelected = currentCategoryId === value;

  const onClick = () => {
    const url = qs.stringifyUrl(
      {
        url: pathName,
        query: {
          title: currentTitle,
          categoryId: isSelected ? null : value,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-x-1 rounded-full border border-slate-200 px-3 py-2 transition hover:border-sky-700",
        isSelected && "border-sky-700 text-sky-800 bg-sky-200/20"
      )}
      type="button"
    >
      <Icon size={20} />
      <span className="text-sm font-medium truncate transition-colors group-hover:text-sky-700 dark:group-hover:text-sky-300">
        {label}
      </span>
    </button>
  );
}

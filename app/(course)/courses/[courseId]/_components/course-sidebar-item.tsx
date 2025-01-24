"use client";

import { cn } from "@/lib/utils";
import { Lock, PlayCircle, CheckCircle } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

interface CourseSidebarItemProps {
  id: string;
  label: string;
  isCompleted: boolean;
  isLocked: boolean;
  courseId: string;
}

export function CourseSidebarItem({
  id,
  label,
  isCompleted,
  isLocked,
  courseId,
}: CourseSidebarItemProps) {
  const pathname = usePathname();
  const router = useRouter();
  const Icon = isLocked ? Lock : isCompleted ? CheckCircle : PlayCircle;
  const isActive = pathname?.includes(id);

  const onClick = useCallback(() => {
    router.push(`/courses/${courseId}/chapters/${id}`);
  }, [router, courseId, id]);

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isLocked}
      className={cn(
        "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
        isActive &&
          "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700",
        isCompleted && "text-emerald-700 hover:text-emerald-700",
        isCompleted && isActive && "bg-emerald-200/20"
      )}
    >
      <div className="flex items-center gap-x-2 py-4 w-full">
        <Icon
          size={22}
          className={cn(
            "text-slate-500",
            isActive && "text-sky-700",
            isCompleted && "text-emerald-700"
          )}
        />
        {label}
      </div>
      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-slate-700 h-full transition-all",
          isActive && "opacity-100",
          isCompleted && "border-emerald-700"
        )}
      />
    </button>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGrid, Sparkles, FolderOpen, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  {
    name: "Gallery",
    href: "/",
    icon: LayoutGrid,
  },
  {
    name: "Generate",
    href: "/create",
    icon: Sparkles,
  },
  {
    name: "Workspace",
    href: "/editor",
    icon: FolderOpen,
  },
  {
    name: "Profile",
    href: "/profile",
    icon: User,
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-around h-20">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 px-6 py-2 rounded-xl transition-all duration-200",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <div
                  className={cn(
                    "relative p-2 rounded-xl transition-all duration-200",
                    isActive && "bg-primary/10"
                  )}
                >
                  <Icon className="w-6 h-6" />
                  {isActive && (
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                  )}
                </div>
                <span className="text-xs font-medium">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

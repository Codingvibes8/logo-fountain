"use client";

import React from "react";
import { Heart } from "lucide-react";
import { Template } from "@/lib/templates";
import { cn } from "@/lib/utils";

interface TemplateCardProps {
  template: Template;
  onClick?: () => void;
  className?: string;
}

export default function TemplateCard({
  template,
  onClick,
  className,
}: TemplateCardProps) {
  const [isLiked, setIsLiked] = React.useState(false);

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-card border border-border/50",
        "hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20",
        "transition-all duration-300 cursor-pointer",
        "hover:scale-[1.02]",
        className
      )}
      onClick={onClick}
    >
      {/* Preview Area */}
      <div className="aspect-square bg-gradient-dark p-8 flex items-center justify-center relative overflow-hidden">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Template Preview - Using emoji as placeholder */}
        <div className="text-8xl relative z-10 group-hover:scale-110 transition-transform duration-300">
          {template.preview}
        </div>
      </div>

      {/* Info Section */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
              {template.name}
            </h3>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <span className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center text-xs">
                {template.creator[0]}
              </span>
              @{template.creator}
            </p>
          </div>

          {/* Like Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
            className={cn(
              "p-2 rounded-full transition-all duration-200",
              isLiked
                ? "bg-primary/20 text-primary"
                : "bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground"
            )}
          >
            <Heart
              className={cn("w-4 h-4", isLiked && "fill-current")}
            />
          </button>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Heart className="w-3.5 h-3.5" />
            {template.likes.toLocaleString()}
          </span>
          <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
            {template.category}
          </span>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { ArrowLeft, Sparkles, HelpCircle } from "lucide-react";
import Link from "next/link";
import { styles, colorPalettes } from "@/lib/templates";
import { cn } from "@/lib/utils";

export default function CreatePage() {
  const [brandDescription, setBrandDescription] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");
  const [selectedPalette, setSelectedPalette] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (!brandDescription.trim()) {
      alert("Please describe your brand first!");
      return;
    }
    setIsGenerating(true);
    // Simulate generation
    setTimeout(() => {
      setIsGenerating(false);
      // Navigate to editor or show results
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="p-2 hover:bg-secondary rounded-xl transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-xl font-bold">Logo Prompt</h1>
            <button className="p-2 hover:bg-secondary rounded-xl transition-colors">
              <HelpCircle className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
        {/* Brand Description */}
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold mb-2">Describe your brand</h2>
            <p className="text-muted-foreground">
              Tell the AI what makes your brand unique
            </p>
          </div>

          <div className="relative">
            <textarea
              value={brandDescription}
              onChange={(e) => setBrandDescription(e.target.value)}
              placeholder="e.g. A futuristic tech company called 'Nova' specializing in deep sea exploration. Minimalist and sleek."
              maxLength={500}
              rows={6}
              className="w-full px-4 py-3 bg-secondary border border-border rounded-2xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
            />
            <div className="absolute bottom-3 right-3 text-sm text-muted-foreground">
              {brandDescription.length} / 500
            </div>
          </div>
        </div>

        {/* Style Selection */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Choose a Style</h2>
            <Link
              href="#"
              className="text-primary text-sm font-medium hover:underline"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {styles.map((style) => (
              <button
                key={style.id}
                onClick={() => setSelectedStyle(style.id)}
                className={cn(
                  "relative aspect-square rounded-2xl overflow-hidden border-2 transition-all duration-200",
                  selectedStyle === style.id
                    ? "border-primary shadow-lg shadow-primary/30 scale-105"
                    : "border-border hover:border-primary/50"
                )}
              >
                <div className="absolute inset-0 bg-gradient-dark flex items-center justify-center">
                  <div className="text-6xl">{style.preview}</div>
                </div>
                {selectedStyle === style.id && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-sm font-medium text-center">
                    {style.name}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Color Palette */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Brand Palette</h2>

          <div className="flex gap-3 overflow-x-auto pb-2">
            {colorPalettes.map((palette) => (
              <button
                key={palette.id}
                onClick={() => setSelectedPalette(palette.id)}
                className={cn(
                  "flex-shrink-0 p-3 rounded-2xl border-2 transition-all duration-200",
                  selectedPalette === palette.id
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-primary/50"
                )}
              >
                <div className="flex gap-1 mb-2">
                  {palette.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-10 h-10 rounded-lg"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <p className="text-sm font-medium text-center">
                  {palette.name}
                </p>
              </button>
            ))}
            <button className="flex-shrink-0 w-[180px] p-3 rounded-2xl border-2 border-dashed border-border hover:border-primary/50 transition-all duration-200 flex items-center justify-center gap-2">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium">Custom</span>
            </button>
          </div>
        </div>

        {/* Generate Button */}
        <button
          onClick={handleGenerate}
          disabled={isGenerating}
          className={cn(
            "w-full py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3",
            "bg-gradient-purple text-white shadow-lg shadow-primary/50",
            "hover:shadow-xl hover:shadow-primary/60 transition-all duration-300",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            isGenerating && "animate-pulse"
          )}
        >
          <Sparkles className="w-6 h-6" />
          {isGenerating ? "Generating Magic..." : "Generate Magic"}
        </button>
      </div>
    </div>
  );
}

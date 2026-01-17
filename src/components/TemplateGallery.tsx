"use client";

import React, { useState } from "react";
import { Search, Sparkles } from "lucide-react";
import TemplateCard from "./TemplateCard";
import { sampleTemplates, categories } from "@/lib/templates";
import { cn } from "@/lib/utils";

export default function TemplateGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTemplates = sampleTemplates.filter((template) => {
    const matchesCategory =
      selectedCategory === "All" || template.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-purple flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-3xl font-bold">Inspiration</h1>
            </div>
            <button className="p-2 rounded-xl hover:bg-secondary transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search styles, colors, or industries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-secondary border border-border rounded-2xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            />
          </div>

          {/* Category Pills */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all duration-200",
                  selectedCategory === category
                    ? "bg-gradient-purple text-white shadow-lg shadow-primary/30"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Template Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {filteredTemplates.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTemplates.map((template, index) => (
              <div
                key={template.id}
                className="fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <TemplateCard
                  template={template}
                  onClick={() => console.log("Template clicked:", template.id)}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No templates found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>

      {/* Floating Create Button */}
      <button className="fixed bottom-24 right-6 w-16 h-16 bg-gradient-purple rounded-full shadow-xl shadow-primary/50 flex items-center justify-center hover:scale-110 transition-transform duration-200 z-20">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
    </div>
  );
}

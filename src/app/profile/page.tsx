"use client";

import React, { useState } from "react";
import { Search, Settings, MoreVertical } from "lucide-react";
import { cn } from "@/lib/utils";

const filterTabs = ["All", "Recent", "Last Week", "Logos"];

const sampleProjects = [
  {
    id: "1",
    name: "CyberNexus",
    preview: "⚡",
    createdAt: "Created 2h ago",
    bgColor: "#0a0a0f",
  },
  {
    id: "2",
    name: "EcoPulse",
    preview: "🌿",
    createdAt: "Created 5h ago",
    bgColor: "#059669",
  },
  {
    id: "3",
    name: "Comoratic",
    preview: "💼",
    createdAt: "Oct 18, 2023",
    bgColor: "#f5f5f5",
  },
  {
    id: "4",
    name: "Nova Retail",
    preview: "🌺",
    createdAt: "Oct 17, 2023",
    bgColor: "#14b8a6",
  },
  {
    id: "5",
    name: "Quantum Soft",
    preview: "⭕",
    createdAt: "Oct 15, 2023",
    bgColor: "#0d9488",
  },
  {
    id: "6",
    name: "Luxe Atelier",
    preview: "✨",
    createdAt: "Oct 14, 2023",
    bgColor: "#0a0a0f",
  },
];

export default function ProfilePage() {
  const [selectedTab, setSelectedTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = sampleProjects.filter((project) => {
    const matchesSearch =
      searchQuery === "" ||
      project.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-purple flex items-center justify-center text-white font-bold text-lg">
                A
              </div>
              <div>
                <h1 className="text-xl font-bold">MY GALLERY</h1>
                <p className="text-sm text-muted-foreground">Saved Projects</p>
              </div>
            </div>
            <button className="p-2 hover:bg-secondary rounded-xl transition-colors">
              <Settings className="w-6 h-6" />
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search your creations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-secondary border border-border rounded-2xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            />
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={cn(
                  "px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all duration-200",
                  selectedTab === tab
                    ? "bg-gradient-purple text-white shadow-lg shadow-primary/30"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {selectedTab === "Recent" && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Recent Creations</h2>
              <button className="text-primary text-sm font-medium hover:underline">
                View All
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.slice(0, 2).map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        )}

        {selectedTab === "Last Week" && (
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Last Week</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.slice(2).map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        )}

        {selectedTab === "All" && (
          <>
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Recent Creations</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.slice(0, 2).map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Last Week</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.slice(2).map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index + 2}
                  />
                ))}
              </div>
            </div>
          </>
        )}

        {selectedTab === "Logos" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 cursor-pointer fade-in"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Preview */}
      <div
        className="aspect-square flex items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: project.bgColor }}
      >
        <div className="text-8xl group-hover:scale-110 transition-transform duration-300">
          {project.preview}
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
              {project.name}
            </h3>
            <p className="text-sm text-muted-foreground">{project.createdAt}</p>
          </div>

          <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

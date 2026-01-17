"use client";

import TemplateGallery from "@/components/TemplateGallery";
import BottomNav from "@/components/BottomNav";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <TemplateGallery />
      <BottomNav />
    </main>
  );
}

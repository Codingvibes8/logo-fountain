"use client";

import React, { useState, useContext, useEffect } from "react";
import { ArrowLeft, Download, Type, Palette, Layout, Save } from "lucide-react";
import Link from "next/link";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import IconController from "@/components/IconController";
import BackgroundController from "@/components/BackgroundController";
import { cn } from "@/lib/utils";
import { icons, type LucideIcon } from "lucide-react";
import html2canvas from "html2canvas";

function EditorContent() {
  const [activeTab, setActiveTab] = useState<"icon" | "background">("icon");
  const [storageValue, setStorageValue] = useState<any>({});
  const context = useContext(UpdateStorageContext);

  // Load from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const value = JSON.parse(localStorage.getItem("value") || "{}");
      setStorageValue(value);
    }
  }, []);

  // Update when context changes
  useEffect(() => {
    if (context?.updateStorage) {
      setStorageValue(context.updateStorage);
    }
  }, [context?.updateStorage]);

  const downloadLogo = async () => {
    const logoElement = document.getElementById("downloadLogoDiv");
    if (logoElement) {
      const canvas = await html2canvas(logoElement, {
        backgroundColor: null,
      });
      const pngImage = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngImage;
      downloadLink.download = "logo.png";
      downloadLink.click();
    }
  };

  const Icon = ({ name, color, size, rotate }: any) => {
    const LucidIcon = icons[name as keyof typeof icons] as LucideIcon;
    if (!LucidIcon) return null;
    return (
      <LucidIcon
        color={color}
        size={size}
        style={{ transform: `rotate(${rotate}deg)` }}
      />
    );
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="p-2 hover:bg-secondary rounded-xl transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-xl font-bold">Logo Editor</h1>
            <button
              onClick={downloadLogo}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-purple text-white rounded-xl hover:shadow-lg hover:shadow-primary/50 transition-all"
            >
              <Download className="w-5 h-5" />
              <span className="hidden sm:inline">Download</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel - Controls */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Tools */}
            <div className="glass-strong rounded-2xl p-6">
              <h2 className="text-lg font-bold mb-4">Quick Tools</h2>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setActiveTab("icon")}
                  className={cn(
                    "flex flex-col items-center gap-2 p-4 rounded-xl transition-all",
                    activeTab === "icon"
                      ? "bg-primary/20 text-primary border-2 border-primary"
                      : "bg-secondary hover:bg-secondary/80 border-2 border-transparent"
                  )}
                >
                  <Type className="w-6 h-6" />
                  <span className="text-sm font-medium">Change Icon</span>
                </button>
                <button
                  onClick={() => setActiveTab("background")}
                  className={cn(
                    "flex flex-col items-center gap-2 p-4 rounded-xl transition-all",
                    activeTab === "background"
                      ? "bg-primary/20 text-primary border-2 border-primary"
                      : "bg-secondary hover:bg-secondary/80 border-2 border-transparent"
                  )}
                >
                  <Palette className="w-6 h-6" />
                  <span className="text-sm font-medium">Tweak Colors</span>
                </button>
              </div>
            </div>

            {/* Detailed Controls */}
            <div className="glass-strong rounded-2xl p-6">
              {activeTab === "icon" ? (
                <IconController />
              ) : (
                <BackgroundController />
              )}
            </div>
          </div>

          {/* Right Panel - Preview */}
          <div className="lg:col-span-2">
            <div className="glass-strong rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-bold">Preview</h2>
                  <p className="text-sm text-muted-foreground">
                    Resolution: 4096 x 4096
                  </p>
                </div>
                <button className="p-2 hover:bg-secondary rounded-xl transition-colors">
                  <Save className="w-5 h-5" />
                </button>
              </div>

              {/* Logo Preview */}
              <div className="relative aspect-square bg-gradient-dark rounded-2xl overflow-hidden flex items-center justify-center">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-glow opacity-50" />

                {/* Actual Logo */}
                <div
                  id="downloadLogoDiv"
                  className="relative z-10 flex items-center justify-center"
                  style={{
                    backgroundColor: storageValue?.bgColor || "transparent",
                    borderRadius: `${storageValue?.bgRounded || 0}px`,
                    padding: `${storageValue?.bgPadding || 0}px`,
                  }}
                >
                  {storageValue?.icon?.includes(".png") ? (
                    <img
                      src={`https://logoexpress.tubeguruji.com/png/${storageValue.icon}`}
                      alt="Logo"
                      style={{
                        width: `${storageValue?.iconSize || 280}px`,
                        height: `${storageValue?.iconSize || 280}px`,
                        transform: `rotate(${storageValue?.iconRotate || 0}deg)`,
                      }}
                    />
                  ) : (
                    <Icon
                      name={storageValue?.icon || "Smile"}
                      color={storageValue?.iconColor || "#fff"}
                      size={storageValue?.iconSize || 280}
                      rotate={storageValue?.iconRotate || 0}
                    />
                  )}
                </div>
              </div>

              {/* Export Options */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <button
                  onClick={downloadLogo}
                  className="btn-primary flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download PNG/JPG
                </button>
                <button className="btn-secondary flex items-center justify-center gap-2">
                  <Layout className="w-5 h-5" />
                  Export to Vector (SVG)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EditorPage() {
  const [updateStorage, setUpdateStorage] = useState<any>({});

  return (
    <UpdateStorageContext.Provider value={{ updateStorage, setUpdateStorage }}>
      <EditorContent />
    </UpdateStorageContext.Provider>
  );
}

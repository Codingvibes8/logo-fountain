"use client";

import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import html2canvas from "html2canvas";
import { icons, type LucideIcon } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";

interface LogoPreviewProps {
  downloadIcon?: number;
}

function LogoPreview({ downloadIcon }: LogoPreviewProps) {
  const [storageValue, setStorageValue] = useState<any>();
  const context = useContext(UpdateStorageContext);

  if (!context) {
    throw new Error("LogoPreview must be used within UpdateStorageContext");
  }

  const { updateStorage } = context;

  useEffect(() => {
    const storgeData = JSON.parse(localStorage.getItem("value") || "{}");
    setStorageValue(storgeData);
  }, [updateStorage]);

  useEffect(() => {
    if (downloadIcon) {
      downloadPngLogo();
    }
  }, [downloadIcon]);

  /**
   * Used to download the Logo in png format
   */
  const downloadPngLogo = () => {
    const downloadLogoDiv = document.getElementById("downloadLogoDiv");

    if (!downloadLogoDiv) return;

    html2canvas(downloadLogoDiv, {
      backgroundColor: null,
    }).then((canvas) => {
      const pngImage = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngImage;
      downloadLink.download = "LogoFactory_Logo.png";
      downloadLink.click();
    });
  };

  const Icon = ({
    name,
    color,
    size,
    rotate,
  }: {
    name: string;
    color: string;
    size: number;
    rotate: number;
  }) => {
    const LucidIcon = icons[name as keyof typeof icons] as LucideIcon;
    if (!LucidIcon) {
      return null;
    }
    return (
      <LucidIcon
        color={color}
        size={size}
        style={{
          transform: `rotate(${rotate}deg)`,
        }}
      />
    );
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div
        className="h-[500px] w-[500px]
        bg-gray-50 outline-dotted outline-gray-300"
        style={{
          padding: storageValue?.bgPadding,
        }}
      >
        <div
          id="downloadLogoDiv"
          className="h-full w-full flex items-center justify-center"
          style={{
            borderRadius: storageValue?.bgRounded,
            background: storageValue?.bgColor,
          }}
        >
          {storageValue?.icon?.includes(".png") ? (
            <img
              src={"/api/png/" + storageValue?.icon}
              style={{
                height: storageValue?.iconSize,
                width: storageValue?.iconSize,
                transform: `rotate(${storageValue.iconRotate}deg)`,
              }}
              alt="Logo"
            />
          ) : (
            <Icon
              name={storageValue?.icon}
              color={storageValue?.iconColor}
              size={storageValue?.iconSize}
              rotate={storageValue?.iconRotate}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default LogoPreview;

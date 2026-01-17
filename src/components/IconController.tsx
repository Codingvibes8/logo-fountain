"use client";

import React, { useContext, useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import ColorPickerController from "./ColorPickerController";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import IconList from "./IconList";

function IconController() {
  const [size, setSize] = useState(280);
  const [rotate, setRotate] = useState(0);
  const [color, setColor] = useState("#fff");
  const [icon, setIcon] = useState("Smile");
  const context = useContext(UpdateStorageContext);

  if (!context) {
    throw new Error("IconController must be used within UpdateStorageContext");
  }

  const { setUpdateStorage } = context;

  // Load from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storageValue = JSON.parse(localStorage.getItem("value") || "{}");
      if (storageValue.iconSize) setSize(storageValue.iconSize);
      if (storageValue.iconRotate) setRotate(storageValue.iconRotate);
      if (storageValue.iconColor) setColor(storageValue.iconColor);
      if (storageValue.icon) setIcon(storageValue.icon);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentStorage = JSON.parse(localStorage.getItem("value") || "{}");
      const updatedValue = {
        ...currentStorage,
        iconSize: size,
        iconRotate: rotate,
        iconColor: color,
        icon: icon,
      };
      setUpdateStorage(updatedValue);
      localStorage.setItem("value", JSON.stringify(updatedValue));
    }
  }, [size, rotate, color, icon, setUpdateStorage]);

  return (
    <div>
      <div>
        <IconList selectedIcon={(icon: string) => setIcon(icon)} />
        <div className="py-2">
          <label className="p-2 flex justify-between items-center">
            Size <span>{size} px </span>{" "}
          </label>
          <Slider
            defaultValue={[size]}
            max={512}
            step={1}
            onValueChange={(event) => setSize(event[0])}
          />
        </div>

        <div className="py-2">
          <label className="p-2 flex justify-between items-center">
            Rotate <span>{rotate} ° </span>{" "}
          </label>
          <Slider
            defaultValue={[rotate]}
            max={360}
            step={1}
            onValueChange={(event) => setRotate(event[0])}
          />
        </div>

        <div className="py-2 ">
          <label className="p-2 flex justify-between items-center">
            Icon Color{" "}
          </label>
          <ColorPickerController
            hideController={true}
            selectedColor={(color) => setColor(color)}
          />
        </div>

        <div className="h-[100px]"></div>
      </div>
    </div>
  );
}

export default IconController;

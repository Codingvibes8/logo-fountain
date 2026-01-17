"use client";

import React, { useContext, useEffect, useState } from "react";
import { Slider } from "./ui/slider";
import ColorPickerController from "./ColorPickerController";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";

function BackgroundController() {
  const [rounded, setRounded] = useState(0);
  const [padding, setPadding] = useState(0);
  const [color, setColor] = useState("rgba(10,10,10,100)");
  const context = useContext(UpdateStorageContext);

  if (!context) {
    throw new Error(
      "BackgroundController must be used within UpdateStorageContext"
    );
  }

  const { setUpdateStorage } = context;

  // Load from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storageValue = JSON.parse(localStorage.getItem("value") || "{}");
      if (storageValue.bgRounded) setRounded(storageValue.bgRounded);
      if (storageValue.bgPadding) setPadding(storageValue.bgPadding);
      if (storageValue.bgColor) setColor(storageValue.bgColor);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentStorage = JSON.parse(localStorage.getItem("value") || "{}");
      const updateValue = {
        ...currentStorage,
        bgRounded: rounded,
        bgPadding: padding,
        bgColor: color,
      };
      setUpdateStorage(updateValue);
      localStorage.setItem("value", JSON.stringify(updateValue));
    }
  }, [rounded, padding, color, setUpdateStorage]);

  return (
    <div>
      <div className="py-2">
        <label className="p-2 flex justify-between items-center">
          Rounded <span>{rounded} px </span>{" "}
        </label>
        <Slider
          defaultValue={[0]}
          max={512}
          step={1}
          onValueChange={(event) => setRounded(event[0])}
        />
      </div>

      <div className="py-2">
        <label className="p-2 flex justify-between items-center">
          Padding <span>{padding} px </span>{" "}
        </label>
        <Slider
          defaultValue={[40]}
          max={100}
          step={1}
          onValueChange={(event) => setPadding(event[0])}
        />
      </div>
      <div className="py-2 ">
        <label className="p-2 flex justify-between items-center">
          Icon Color{" "}
        </label>
        <ColorPickerController
          hideController={false}
          selectedColor={(color) => setColor(color)}
        />
      </div>
    </div>
  );
}

export default BackgroundController;

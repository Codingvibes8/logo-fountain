"use client";

import { useState } from "react";
import Header from "@/components/Header";
import SideNav from "@/components/SideNav";
import IconController from "@/components/IconController";
import BackgroundController from "@/components/BackgroundController";
import LogoPreview from "@/components/LogoPreview";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";

export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [updateStorage, setUpdateStorage] = useState({});
  const [downloadIcon, setDownloadIcon] = useState<number>();

  return (
    <UpdateStorageContext.Provider value={{ updateStorage, setUpdateStorage }}>
      <div>
        <Header DownloadIcon={setDownloadIcon} />
        <div className="w-64 fixed">
          <SideNav selectedIndex={(value) => setSelectedIndex(value)} />
        </div>
        <div className="ml-64 grid grid-cols-1 md:grid-cols-6 fixed">
          <div className="md:col-span-2 border h-screen shadow-sm p-5 overflow-auto">
            {selectedIndex == 0 ? (
              <IconController />
            ) : (
              <BackgroundController />
            )}
          </div>
          <div className="md:col-span-3">
            <LogoPreview downloadIcon={downloadIcon} />
          </div>
          <div className="p-2 md:col-span-1">
            <a href="https://wecodeappz@gmail.com" target="_blank">
              <img
                src="/side-banner-logo.jpg"
                className="rounded-lg h-full"
                alt="Banner"
              />
            </a>
          </div>
        </div>
      </div>
    </UpdateStorageContext.Provider>
  );
}

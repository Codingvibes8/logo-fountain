"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { icons, type LucideIcon } from "lucide-react";
import { iconList } from "@/constants/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import axios from "axios";

const BASE_URL = "https://logoexpress.tubeguruji.com";

interface IconListProps {
  selectedIcon: (icon: string) => void;
}

function IconList({ selectedIcon }: IconListProps) {
  const [openDialog, setOpenDialog] = useState(false);
  const [pngIconList, setPngIconList] = useState<string[]>([]);
  const [icon, setIcon] = useState("Smile");

  // Load from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storageValue = JSON.parse(localStorage.getItem("value") || "{}");
      if (storageValue.icon) setIcon(storageValue.icon);
    }
    getPngIcons();
  }, []);

  const Icon = ({
    name,
    color,
    size,
  }: {
    name: string;
    color: string;
    size: number;
  }) => {
    const LucidIcon = icons[name as keyof typeof icons] as LucideIcon;
    if (!LucidIcon) {
      return null;
    }
    return <LucidIcon color={color} size={size} />;
  };

  const getPngIcons = () => {
    axios.get(BASE_URL + "/getIcons.php").then((resp) => {
      console.log(resp.data);
      setPngIconList(resp.data);
    });
  };

  return (
    <div>
      <div>
        <label>Icon</label>
        <div
          onClick={() => setOpenDialog(true)}
          className="p-3 cursor-pointer bg-gray-200 
                rounded-md w-[50px] h-[50px] my-2 flex items-center justify-center"
        >
          {icon?.includes(".png") ? (
            <img src={BASE_URL + "/png/" + icon} alt="Icon" />
          ) : (
            <Icon name={icon} color={"#000"} size={20} />
          )}
        </div>
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Pick Your Favorite Icon</DialogTitle>
            <DialogDescription>
              <Tabs defaultValue="icon" className="w-[400px]">
                <TabsList>
                  <TabsTrigger value="icon">Icons</TabsTrigger>
                  <TabsTrigger value="color-icon">Color Icons</TabsTrigger>
                </TabsList>
                <TabsContent value="icon">
                  <div
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5
                    gap-4 overflow-auto h-[400px] p-6"
                  >
                    {iconList.map((iconName, index) => (
                      <div
                        key={index}
                        className="border p-3 flex rounded-sm items-center
                            justify-center cursor-pointer"
                        onClick={() => {
                          if (iconName) selectedIcon(iconName);
                          setOpenDialog(false);
                          setIcon(iconName);
                        }}
                      >
                        {iconName && <Icon name={iconName} color={"#000"} size={20} />}
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="color-icon">
                  <div
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5
                    gap-4 overflow-auto h-[400px] p-6"
                  >
                    {pngIconList.map((pngIcon, index) => (
                      <div
                        key={index}
                        className="border p-3 flex rounded-sm items-center
                            justify-center cursor-pointer"
                        onClick={() => {
                          if (pngIcon) selectedIcon(pngIcon);
                          setOpenDialog(false);
                          setIcon(pngIcon);
                        }}
                      >
                        <img src={BASE_URL + "/png/" + pngIcon} alt="Icon" />
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default IconList;

"use client";

import { Image, PencilRuler, Shield } from "lucide-react";
import React, { useState } from "react";

interface SideNavProps {
  selectedIndex: (value: number) => void;
}

function SideNav({ selectedIndex }: SideNavProps) {
  const menuList = [
    {
      id: 1,
      name: "Icon",
      icon: PencilRuler,
    },
    {
      id: 2,
      name: "Background",
      icon: Image,
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Shield,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="border shadow-sm h-screen">
      <div>
        {menuList.map((menu, index) => (
          <h2
            onClick={() => {
              setActiveIndex(index);
              selectedIndex(index);
            }}
            className={`p-3 text-lg px-7 text-gray-500
                my-2 cursor-pointer flex items-center gap-2
                hover:bg-amber-300 hover:text-black
                ${activeIndex == index && "bg-blue-700 text-white"}
                `}
            key={index}
          >
            <menu.icon />
            {menu.name}
          </h2>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <h2 className="text-sm text-gray-500 text-center fixed bottom-10">
          Developed By &nbsp;
          <a href="wecodeappzgmail.com" className="text-blue-600 underline">
            AdeCrown
          </a>
          <br />
          Visit{" "}
          <a href="wecodeappzgmail.com" className="text-blue-600 underline">
            Ade-- for more info
          </a>
        </h2>
      </div>
    </div>
  );
}

export default SideNav;

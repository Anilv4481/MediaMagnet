import React from "react";
import { useNavigate } from "react-router";
import { IPlatforms } from "./types/decisionType";

export default function DecissionScreen() {
  const navigate = useNavigate();
  const platforms: IPlatforms[] = [
    { name: "Youtube", path: "/youtube" },
    { name: "Instagram", path: "/instagram" },
    { name: "TeraBox", path: "/terabox" },
  ];
  return (
    <div>
      <div className="border border-red-500">
        <div className="grid grid-cols-12">
          {platforms.map((item: IPlatforms, index: number) => (
            <React.Fragment key={index}>
              <div
                className="col-span-12 sm:col-span-6 md:col-span-4 border border-red-500"
                onClick={() => navigate(item.path)}
              >
                {item.name}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

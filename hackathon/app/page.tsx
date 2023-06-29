"use client"
import GridCard from "@/components/gridcard";
import Image from "next/image"
import HIKI from "@/public/hiki.png"
import { useState, useEffect } from "react";
import Keyword from "@/components/keyword";

export default function MainPage() {
  const [showFull, setShowFull] = useState(false);
  const [expandedHeight, setExpandedHeight] = useState(0);

  useEffect(() => {
    if (showFull) {
      setExpandedHeight(650)
    } else {
      setExpandedHeight(150)
    }
    console.log(showFull)
  }, [showFull])

  return (
    <div className="w-full flex justify-center items-center">
      <div className="relative w-full overflow-hidden ">
        <div className="z-1 flex  h-[650px] w-[432px] items-center justify-center overflow-hidden rounded-lg p-0">
          <Image
            src={HIKI}
            width={432}
            height={650}
            alt="hiki"
            className="h-full w-full object-cover"
          />
        </div>
        {/* GridCard */}
        <div
          className={`z-2 absolute ${
            showFull ? 'top-0' : 'top-[500px]'
          } w-[432px] overflow-hidden h-[${expandedHeight}px] ${
            showFull ? 'overflow-y-auto' : 'overflow-y-hidden'
          } rounded-lg bg-white transition-all duration-500`}
        >
          <GridCard showFull={showFull} setShowFull={setShowFull} />
        </div>

        {/* Keyword
        <div
          className={`z-2 absolute ${
            showFull ? 'hidden' : 'bottom-[100px]'
          } w-[432px] rounded-lg bg-white transition-all duration-500`}
        >
          <Keyword text="😁경력 3개월" />
          <Keyword text="🧑‍🎓대졸" />
        </div> */}
      </div>
    </div>
  )
}
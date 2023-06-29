"use client"
import GridCard from "@/components/gridcard";
import Image from "next/image"
import HIKI from "@/public/hiki.png"
import UP from "@/public/up.png"
import { useState, useEffect } from "react";

export default function MainPage() {
  const [showFull, setShowFull] = useState(false);
  const [expandedHeight, setExpandedHeight] = useState(0);

  useEffect(() => {
    if (showFull) {
      setExpandedHeight(650)
    } else {
      setExpandedHeight(150)
    }
  }, [showFull])

  return (
    <div className="relative w-full">
      <div className="z-1 flex  h-[650px] w-[432px] items-center justify-center overflow-hidden rounded-lg p-0">
        <Image
          src={HIKI}
          width={432}
          height={650}
          alt="hiki"
          className="h-full w-full object-cover"
        />
      </div>
      <div
        className={`z-2 absolute ${
          showFull ? 'top-0' : 'top-[500px]'
        } w-[432px] overflow-hidden h-[${expandedHeight}px] ${showFull ?'overflow-y-auto' : 'overflow-y-hidden'} rounded-lg bg-white transition-all duration-500`}
      >
        <GridCard showFull={showFull} setShowFull={setShowFull} />
      </div>
    </div>
  )
}

{/*
      {!showFull ? (
        <div className="z-2 absolute top-[500px] h-[150px] w-[432px] overflow-hidden rounded-lg bg-white">
          <GridCard showFull={showFull} setShowFull={setShowFull} />
        </div>
      ) : (
        <div className="z-2 absolute top-[0px] w-[432px] overflow-hidden h-[650px] overflow-y-auto rounded-lg bg-white">
          <GridCard showFull={showFull} setShowFull={setShowFull} />
        </div>
      )}
    
      */}
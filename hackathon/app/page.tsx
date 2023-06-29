"use client"
import GridCard from "@/components/gridcard";
import Image from "next/image"
import HIKI from "@/public/hiki.png"
import { useState, useEffect } from "react";
import Keyword from "@/components/keyword";
import CANCEL from "@/public/cancel.svg"
import LIKE from "@/public/like.svg"

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
    <div className="flex w-full items-center justify-center">
      <div className="relative w-full overflow-hidden ">
        <div className="z-10 flex  h-[650px] w-[432px] items-center justify-center overflow-hidden rounded-lg p-0">
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
          className={`absolute z-10 ${
            showFull ? 'top-0' : 'top-[500px]'
          } w-[432px] overflow-hidden h-[${expandedHeight}px] ${
            showFull ? 'overflow-y-auto' : 'overflow-y-hidden'
          } rounded-lg bg-white transition-all duration-500`}
        >
          <GridCard showFull={showFull} setShowFull={setShowFull} />
        </div>

        {/* Keyword */}
        <div
          className={`absolute bottom-[150px] mx-8 mb-3 flex w-[432px] rounded-lg transition-all `}
        >
          <Keyword text="😁경력 3개월" />
          <Keyword text="🧑‍🎓대졸" />
        </div>
      </div>
      {/* Cancel, Like */}
      <div
        className={`absolute bottom-[320px] left-[300px] z-10 flex w-[432px] ${showFull && 'hidden'}`}
      >
        <Image
          src={CANCEL}
          alt="cancel"
          width={100}
          height={100}
          className="m-[-10px] cursor-pointer"
        />
        <Image
          src={LIKE}
          alt="like"
          width={100}
          height={100}
          className="m-[-10px] cursor-pointer"
        />
      </div>
    </div>
  )
}
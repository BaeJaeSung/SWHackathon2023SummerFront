import GridCard from "@/components/gridcard";
import Image from "next/image"
import HIKI from "@/public/hiki.png"
export default function MainPage() {
  return (
    <div className="w-full">
      <Image src={HIKI} width={350} height={550} alt="hiki"/>
      {/*<GridCard/>*/}
    </div>
  );
}

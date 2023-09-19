import Logo from "@/app/components/general/Logo"
import { Rarity, RarityBadge } from "./MemoryCard"

export interface MemoryCardVerseProps{
  id: string,
  rarity: keyof typeof Rarity,
  animation?: string
  inDetails: boolean
}


export default function MemoryCardVerse(props:MemoryCardVerseProps){
  return (
    <div className={props.rarity + " rotate-Y-180 backface-hidden absolute background-animate p-0.5 rounded " + props.animation}>    
    <div className={" select-none cursor-pointer xl:w-72 w-52 aspect-[8.5/12] flex gap-2 flex-col items-center justify-center bg-surface p-8 rounded "}>
      <Logo rarity={props.rarity} size=" text-1xl"/>
      <p className={props.rarity + " bg-clip-text text-transparent background-animate absolute bottom-4 right-4"}>Ilwel / Bruna</p>
      {/* <p className="text-subtle"></p> */}
      <p className={props.rarity + " card-count"}>1/1</p>
    </div>
  </div>
  )
}
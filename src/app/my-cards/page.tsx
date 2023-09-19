"use client"
import { Rarity } from "./components/MemoryCard";
import StackPair from "./components/StackPair";

const cards = ['ur', 'sr', 'r', 'n'].map((item, index) => {
  return {
    id: String(index + 1),
    rarity: item as keyof typeof Rarity,
    inDetails: false
  }
})

export default function MyCards(){

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center h-screen gap-2 xl:gap-6">
      <StackPair cards={cards}/>
    </div>
  )
}
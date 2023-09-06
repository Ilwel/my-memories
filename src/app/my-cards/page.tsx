"use client"
import { Rarity } from "./components/MemoryCard";
import StackPair from "./components/StackPair";

const cards = ['ur', 'sr', 'r', 'n'].map((item, index) => {
  return {
    id: String(index + 1),
    rarity: item as keyof typeof Rarity
  }
})

export default function MyCards(){

  return (
    <div className="flex items-center justify-center h-screen gap-6">
      <StackPair cards={cards}/>
    </div>
  )
}
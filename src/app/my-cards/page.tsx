"use client"
import { MemoryCardProps, Rarity } from "./components/MemoryCard";
import MemoryStack from "./components/MemoryStack";
import { useState } from 'react'

const cards = ['ur', 'sr', 'r', 'n'].map((item, index) => {
  return {
    id: String(index + 1),
    rarity: item as keyof typeof Rarity
  }
})

export default function MyCards(){
  const [stack, setStack] = useState<Array<MemoryCardProps>>(cards)
  const [auxStack, setAuxStack] = useState<Array<MemoryCardProps>>([])
  return (
    <div className="flex items-center justify-center h-screen gap-6">
      <MemoryStack stackId="main-stack" stack={stack} setStack={setStack} auxStack={auxStack} setAuxStack={setAuxStack}/>
      <MemoryStack stackId="aux-stack" stack={auxStack} setStack={setAuxStack} auxStack={stack} setAuxStack={setStack}/> 
    </div>
  )
}
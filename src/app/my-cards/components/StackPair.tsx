"use client"
import { useState } from "react"
import MemoryStack from "./MemoryStack"
import { MemoryCardProps } from "./MemoryCard"

interface StackPairProps{
  cards: Array<MemoryCardProps>
}

export default function StackPair({cards}: StackPairProps){
  const [stack, setStack] = useState<Array<MemoryCardProps>>(cards)
  const [auxStack, setAuxStack] = useState<Array<MemoryCardProps>>([])
  return (
    <>
      <MemoryStack stackId="main-stack" stack={stack} setStack={setStack} auxStack={auxStack} setAuxStack={setAuxStack}/>
      <MemoryStack stackId="aux-stack" stack={auxStack} setStack={setAuxStack} auxStack={stack} setAuxStack={setStack}/> 
    </>
  )
}
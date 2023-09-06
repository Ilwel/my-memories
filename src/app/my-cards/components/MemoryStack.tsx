import MemoryCard, { MemoryCardProps } from "./MemoryCard"
import { Dispatch, SetStateAction} from 'react'

interface MemoryStackProps{
  stackId: string
  stack: Array<MemoryCardProps>
  setStack: Dispatch<SetStateAction<Array<MemoryCardProps>>>
  auxStack: Array<MemoryCardProps>
  setAuxStack: Dispatch<SetStateAction<Array<MemoryCardProps>>>
}

export default function MemoryStack({stackId, stack, setStack, auxStack, setAuxStack}: MemoryStackProps){

  const moveCardToAuxStack = () => {
    const aux = stack.pop() as MemoryCardProps
    if(!aux) return
    setStack(v => v.filter(item => item !== aux))
    setAuxStack([...auxStack, aux])
  }

  return (
    <div onClick={moveCardToAuxStack} className="realtive w-80 aspect-[10/14] bg-surface flex items-center justify-center p-2 rounded">
      <h2 className="select-none text-muted"> &lt;/&gt;  </h2>
      {stack.map(card => (
        <MemoryCard animation={stackId} key={card.id + "-" + stackId} id={card.id} rarity={card.rarity}/>
      ))}
    </div>
  )
}
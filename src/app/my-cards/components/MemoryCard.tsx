"use client"
import { Info } from "lucide-react";
import Image from "next/image";
import { useAppDispatch } from "@/redux/hooks";
import { open } from '@/redux/features/memoryDetailsSlicer'

export const Rarity = {
  ur: "ETERNO",
  sr: "INESQUECÍVEL",
  r:  "MARCANTE",
  n:  "LEMBRANÇA"
}

export interface MemoryCardProps{
  id: string,
  rarity: keyof typeof Rarity,
  animation?: string
  inDetails: boolean
}

const descColors ={
  ur:{
    desc:{
      title: 'ur-desc-title',
      text: 'ur-desc-text',
      more:'#ea9d34'
    }
  },
  sr:{
    desc:{
      title: 'sr-desc-title',
      text: 'sr-desc-text',
      more:'#9ccfd8'
    }
  },
  r:{
    desc:{
      title: 'r-desc-title',
      text: 'r-desc-text',
      more:'#e0def4'
    }
  },
  n:{
    desc:{
      title: 'n-desc-title',
      text: 'n-desc-text',
      more:'#ebbcba'
    }
  }
}

export function RarityBadge ({rarity, className}:{rarity: keyof typeof Rarity, className?:string}){
  return <p className={rarity + " card-rarity " + className}>{Rarity[rarity]}</p>
}

export default function MemoryCard(props: MemoryCardProps){

  const dispatch = useAppDispatch();

  const styles = descColors[props.rarity as keyof typeof descColors]

  return (
    <div className={props.rarity + " backface-hidden absolute background-animate p-0.5 rounded " + props.animation} >    
      <div className={" select-none cursor-pointer xl:w-72 w-52 aspect-[8.5/12] flex gap-2 flex-col items-start bg-surface p-6 xl:p-8 rounded "}>
        {!props.inDetails && (
          <Info onClick={ () => dispatch(open('1'))} color={styles.desc.more}  className={" info"}/>
        )}
          <h3 className={props.rarity + " text-sm xl:text-xl background-animate text-gr text-gold-2"}>Primeiro Encontro</h3>

          <Image priority className="w-full rounded" src={"https://placehold.co/600x400/908caa/e0def4/png?text=Sua Memória"}  alt="card placeholder" width={200} height={200}/>

          <div className=" p-2 xl:p-4 bg-overlay rounded">
          <h3 className={styles.desc.title + " text-sm xl:text-lg"}>Descrição: </h3>
            <p className={styles.desc.text + " text-xs card-description"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi molestias quis adipisci eos a! Quaerat unde eveniet iure! Nesciunt, voluptates? Magnam cupiditate autem enim accusamus voluptatem? Dolorem alias aut provident.
            </p>
          </div>
          <p className={props.rarity + " card-count"}>1/1</p>
          <RarityBadge className=" ml-auto absolute bottom-4 right-4" rarity={props.rarity} />
        </div>
    </div>
  )
}
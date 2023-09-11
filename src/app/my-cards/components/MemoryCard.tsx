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
}

export default function MemoryCard(props: MemoryCardProps){
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

  const dispatch = useAppDispatch();

  const styles = descColors[props.rarity as keyof typeof descColors]

  return (
    <div className={props.rarity + " background-animate p-0.5 rounded absolute " + props.animation}>    
      <div className="cursor-pointer w-72 aspect-[9/12] flex gap-2 flex-col items-start bg-surface p-8 rounded ">
        <Info onClick={ () => dispatch(open('1'))} color={styles.desc.more}  className={" info"}/>
          <h3 className={props.rarity + " background-animate text-gr text-gold-2 select-none"}>Primeiro Encontro</h3>

          <Image priority className="w-full rounded select-none" src={"https://placehold.co/600x400/908caa/e0def4/png?text=Sua Memória"}  alt="card placeholder" width={200} height={200}/>

          <div className="text-sm p-4 bg-overlay rounded">
          <h3 className={styles.desc.title}>Descrição: </h3>
            <p className={styles.desc.text + " card-description"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi molestias quis adipisci eos a! Quaerat unde eveniet iure! Nesciunt, voluptates? Magnam cupiditate autem enim accusamus voluptatem? Dolorem alias aut provident.
            </p>
          </div>
          <p className={props.rarity + " card-count"}>1/1</p>
          <p className={props.rarity + " card-rarity"}>{Rarity[props.rarity]}</p>
        </div>
    </div>
  )
}
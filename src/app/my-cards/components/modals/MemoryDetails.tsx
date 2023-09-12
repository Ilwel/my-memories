"use client"
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { XCircle } from "lucide-react";
import { close }  from '@/redux/features/memoryDetailsSlicer'
import MemoryCard, { RarityBadge } from "../MemoryCard";
import MemoryCardVerse from "../MemoryCardVerse";

export default function MemoryDetails(){

  const {open, id } = useAppSelector((state) => state.memoryReducer)
  const dispatch = useAppDispatch();

  return (
    open
    ?<div className="modal z-10">
      <div className="bg-surface h-2/3 w-3/5 rounded p-8 relative flex gap-8 items-start from-top">
        <XCircle height={30} width={30} onClick={() => dispatch(close())} color={"#eb6f92"} className=" info"/>
        <div className="flip-container relative p-0.5 " style={{perspective:1000}}>
          <div className="flip-inner w-72 aspect-[9/12] gap-2 duration-700"  style={{transformStyle:"preserve-3d"}}>
            <MemoryCardVerse inDetails={true} id={id as string} rarity="ur"/>
            <MemoryCard inDetails={true} id={id as string} rarity="ur"/>
          </div>

        </div>
        <div className="h-full flex flex-col gap-2 items-start">
          <h2 className={"ur background-animate bg-clip-text text-transparent"} >Primeiro Encontro</h2>
          <p className="text-subtle"> <span className="font-bold">De:</span>  Ilwel</p>
          <p className="text-subtle"> <span className="font-bold">Para:</span>  Bruna</p>
          <p className="text-subtle"> <span className="font-bold">Raridade:</span>  Eterno</p>
          <p className="text-subtle"> <span className="font-bold">Criado em:</span>  12-07-2023</p>
          <p className="text-subtle"> <span className="font-bold">Presenteado em:</span>  11-08-2023</p>
          <h3 className="mt-4">Descrição:</h3>
          <div className="bg-overlay p-4  rounded h-full overflow-y-scroll flex flex-col gap-4">
            <p className="text-subtle whitespace-pre-wrap">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, veritatis molestias quae deleniti natus reiciendis quo voluptate dolore inventore sint nam iusto asperiores quis? Perferendis perspiciatis saepe temporibus corporis sed?
              <br />
              <br />

              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, aperiam. Inventore nihil dicta deleniti laboriosam magni atque, eligendi asperiores dolores quo velit perferendis tempore consequuntur voluptatibus ducimus recusandae accusamus similique.
              <br />
              <br />

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo enim placeat culpa vel, quae quasi quaerat autem ipsum velit obcaecati reprehenderit corporis, odit fuga maxime! Nisi voluptate ab quisquam unde.
            </p>
          </div>
        </div>
      </div>
    </div>
    : <></>
  )
}
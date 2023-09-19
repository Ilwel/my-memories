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
      <div className="bg-surface rounded relative h-screen overflow-y-scroll sm:overflow-hidden
      sm:h-[22rem] md:w-3/4 p-8
      xl:h-[30rem] xl:w-2/3
      sm:flex sm:flex-row 
      items-center sm:items-start
      gap-8 snap-y snap-mandatory from-top">
       
        <XCircle height={30} width={30} onClick={() => dispatch(close())} color={"#eb6f92"} className=" mobile-info sm:info"/>
 
        <div className="snap-always snap-center h-screen sm:h-0 flex items-center justify-center sm:block">
          <div className="flip-container relative p-0.5  sm:block sm:mb-0 sm:mt-0" style={{perspective:1000}}>
            <div className="flip-inner xl:w-72 w-52 aspect-[9/12] gap-2 duration-700"  style={{transformStyle:"preserve-3d"}}>
              <MemoryCardVerse inDetails={true} id={id as string} rarity="ur"/>
              <MemoryCard inDetails={true} id={id as string} rarity="ur"/>
            </div>
          </div>
        </div>

        <div className="sm:flex sm:flex-col sm:gap-2 sm:items-start">
          <div className="flex flex-col items-center justify-center gap-2 text-sm h-screen snap-always snap-center sm:h-full">
            <div className="flex flex-col items-start gap-2">
            <h2 className={"ur background-animate bg-clip-text text-transparent"} >Primeiro Encontro</h2>
              <p className="text-subtle"> <span className="font-bold">De:</span>  Ilwel</p>
              <p className="text-subtle"> <span className="font-bold">Para:</span>  Bruna</p>
              <p className="text-subtle"> <span className="font-bold">Raridade:</span>  Eterno</p>
              <p className="text-subtle"> <span className="font-bold">Criado em:</span>  12-07-2023</p>
              <p className="text-subtle"> <span className="font-bold">Presenteado em:</span>  11-08-2023</p>
            </div>
          </div>
          <div className="flex flex-col items-start sm:items-start justify-center sm:justify-start gap-2 snap-always snap-center h-screen sm:h-[8rem] xl:h-full">
            <h3 className="xl:mt-4 sm:text-sm">Descrição:</h3>
            <div className=" sm:bg-overlay text-sm rounded sm:overflow-y-scroll xl:h-52 sm:w-full sm:p-4">
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
    </div>
    : <></>
  )
}
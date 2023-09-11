"use client"
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { XCircle } from "lucide-react";
import { close }  from '@/redux/features/memoryDetailsSlicer'

export default function MemoryDetails(){

  const {open, id } = useAppSelector((state) => state.memoryReducer)
  const dispatch = useAppDispatch();

  return (
    open
    ?<div className="modal z-10">
      <div className="bg-surface h-2/3 w-2/3 rounded p-4 relative">
        <XCircle height={40} width={40} onClick={() => dispatch(close())} color={"#eb6f92"} className=" info"/>
        {id}
      </div>
    </div>
    : <></>
  )
}
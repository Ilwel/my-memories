import { Dispatch, SetStateAction } from "react";

interface MemoryDetailsProps{
  open: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>
}

export default function MemoryDetails({open}:MemoryDetailsProps){
  return (
    open
    ?<div className="modal">
      A
    </div>
    : <></>
  )
}
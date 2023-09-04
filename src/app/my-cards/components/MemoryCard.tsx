import Image from "next/image";

export default function MemoryCard(){
  return (
  <div className="ur background-animate p-0.5 rounded ">    
    <div className="w-72 flex gap-2 flex-col items-start bg-surface p-8 rounded relative">
        <h3 className="ur background-animate text-gr text-gold-2">Primeiro Encontro</h3>
        <Image className="w-full rounded" src={"https://placehold.co/600x400/908caa/e0def4/png?text=Sua Memória"}  alt="card placeholder" width={200} height={200}/>
        <div className=" text-sm p-4 bg-overlay rounded">
        <h3 className="text-gold-2">Descrição: </h3>
          <p className="w-full h-25 text-sm break-keep line-clamp-3 text-gold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi molestias quis adipisci eos a! Quaerat unde eveniet iure! Nesciunt, voluptates? Magnam cupiditate autem enim accusamus voluptatem? Dolorem alias aut provident.
          </p>
        </div>
        <p className="ur background-animate text-gr absolute bottom-4 left-4 font-extrabold select-none">1/1</p>
        <p className="ur background-animate text-surface p-2 rounded text-xs font-bold select-none ml-auto relative top-4 left-4">INESQUECÍVEL</p>
      </div>
  </div>
  )
}
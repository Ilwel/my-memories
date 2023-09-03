import Image from "next/image";

export default function MemoryCard(){
  return (
  <div className="bg-gradient-to-r from-gold via-love to-gold-2 p-0.5 rounded background-animate">    
    <div className="w-72 flex gap-2 flex-col items-start bg-surface p-8 rounded relative">
        <h3 className="text-gold-2">Primeiro Encontro</h3>
        <p className="absolute bottom-4 left-4 text-gold-2 select-none">1/1</p>
        <Image className="w-full rounded" src={"https://placehold.co/600x400/908caa/e0def4/png?text=Sua Memória"}  alt="card placeholder" width={200} height={200}/>
        <div className=" text-sm p-4 bg-overlay rounded">
        <h3 className="text-gold-2">Descrição: </h3>
          <p className="w-full h-25 text-sm break-keep line-clamp-3 text-gold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi molestias quis adipisci eos a! Quaerat unde eveniet iure! Nesciunt, voluptates? Magnam cupiditate autem enim accusamus voluptatem? Dolorem alias aut provident.
          </p>
        </div>
        <p className="text-surface bg-gradient-to-r from-gold via-love to-gold-2 background-animate p-2 rounded text-xs font-bold select-none ml-auto relative top-4 left-4">INESQUECÍVEL</p>
      </div>
  </div>
  )
}
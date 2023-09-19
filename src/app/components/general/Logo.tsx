import { Rarity } from "@/app/my-cards/components/MemoryCard"

interface LogoProps{
  size?: string
  rarity?: keyof typeof Rarity
}

export default function Logo({ size, rarity }: LogoProps){
  return (
    <div className={size 
    ? `${rarity ? rarity : 'default'}` + " background-animate font-logo bg-clip-text text-transparent select-none" + size 
    : `${rarity ? rarity : 'default'}` + " background-animate font-logo bg-clip-text text-transparent select-none" + " text-2xl md:text-4xl lg:text-6xl xl:text-8xl"}>
      My Memories
    </div>
  )
}
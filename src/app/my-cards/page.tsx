import MemoryCard from "./components/MemoryCard";

export default function MyCards(){
  return (
    <div className="flex items-center justify-center h-screen gap-2">
      <MemoryCard rarity="ur"/>
      <MemoryCard rarity="sr"/>
      <MemoryCard rarity="r"/>
      <MemoryCard rarity="n"/>
    </div>
  )
}
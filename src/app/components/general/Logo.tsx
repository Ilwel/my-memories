interface LogoProps{
  size?: string
}

export default function Logo({ size }: LogoProps){
  return (
    <div className={size 
    ? "font-logo bg-gradient-to-r from-love to-subtle bg-clip-text text-transparent select-none" + size 
    : "font-logo bg-gradient-to-r from-love to-subtle bg-clip-text text-transparent select-none" + " text-8xl"}>
      My Memories
    </div>
  )
}
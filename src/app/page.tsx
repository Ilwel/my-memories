import Link from "next/link";
import Logo from "./components/general/Logo";

export default function Home() {
  return (
    <main className="h-screen flex justify-center items-center flex-col gap-8">
      <Logo/>
      <h2 className="text-subtle text-sm xl:text-2xl">Sua caixinha de recordações</h2>
      <Link className="btn-error" href={"/my-cards"}>Abrir</Link>
    </main>
  )
}

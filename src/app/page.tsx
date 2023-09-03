import Link from "next/link";
import Logo from "./components/general/Logo";

export default function Home() {
  return (
    <main className="bg-base h-screen text-text flex justify-center items-center flex-col gap-8">
      <Logo/>
      <h2 className="text-2xl text-subtle">Sua caixinha de recordações</h2>
      <Link className="btn-error" href={"#"}>Abrir</Link>
    </main>
  )
}

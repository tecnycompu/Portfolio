import Image from "next/image";
import Contact from "./Components/Contact";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div className="flex items-center w-full h-full bg-cover bg-center" style = {{backgroundImage:`url("/02.jpg")`}}>
      </div>
    </main>
  );
}

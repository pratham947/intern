import Advantages from "@/components/Advantages";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Customizable from "@/components/Customizable"
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Features/>
      <Advantages/>
      <Customizable/>
    </main>
  );
}

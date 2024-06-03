import Advantages from "@/components/Advantages";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Customizable from "@/components/Customizable"
import Image from "next/image";
import Testimonial from "@/components/Testimonial";
import FreqentlyAsked from "@/components/FreqentlyAsked";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Features/>
      <Advantages/>
      <Customizable/>
      <Testimonial/>
      <FreqentlyAsked/>
      <Banner/>
      <Footer/>
    </main>
  );
}

import Header from "./Components/Header";
import Hero from "./Components/Hero.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function App() {

  useEffect(()=>{
    AOS.init({
      duration:1500,
      once:true,
    })
    })

  return (
    <main className="relative">
      {/* Gradient image */}
      <img
        className="absolute top-0 right-0 opacity-60 -z-10"
        src="/gradient.png"
        alt="Gradient-img"
      />

      {/* Blur effect */}
      <div
        style={{ transform: 'rotate(-30deg)' }}
        className="h-0 w-[40rem] absolute top-[20%] right-[5%] shadow-[0_0_900px_35px_#e99b63] -z-10"
      ></div>

      <Header />
      <Hero/>
    </main>
  );
}

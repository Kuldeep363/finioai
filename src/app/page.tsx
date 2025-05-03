import Navbar from "@/ui/Home/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen w-full">
      <div id="hero-section" className="w-full">
        <Navbar/>
      </div>
    </div>
  );
}

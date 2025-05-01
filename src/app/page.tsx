import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-screen h-screen">
      <div
        className="absolute opacity-40 bg-center bg-cover bg-no-repeat top-0 bottom-0 left-0 right-0 -z-10"
        style={{
          backgroundImage:
            "url('https://kuldeep363.github.io/assets/cs-bg.jpg')",
        }}
      />
      <div className=" flex flex-col justify-between items-center p-3 w-full h-full bg-transparent">
        <div className="flex items-center gap-2 my-2">
          <Image
            src="https://kuldeep363.github.io/assets/finioai-logo.svg"
            alt="FinioAI logo"
            width={25}
            height={200}
            // className="aspect-[1/2]"
          />
          <p className="text-2xl font-medium">FinioAI</p>
        </div>
        <div className="max-w-[500px]">
          <p className="text-5xl text-center">
            Great things <br /> Coming soon
          </p>
          <p className="text-center my-2 text-slate-500 font-light">
            We’re building something powerful to transform the way you manage
            your finances with AI-driven insights and automation.
          </p>
        </div>
        <p className="text-sm text-slate-400 font-light">
          {" "}
          All right reserved to FinioAI
        </p>
      </div>
    </div>
  );
}

'use client'

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("Hello, world!");

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <h1 className="text-2xl sm:text-3xl font-bold">
          {message}
        </h1>

        <button
          className="cursor-pointer border border-zinc-500 px-2 py-3 rounded-sm"
          onClick={() => setMessage("You clicked the button!")}
        >
          Change message
        </button>

        {/* <Button onClick={() => alert('Button clicked!')}>
          Custom Button
        </Button> */}
      </main>
    </div>
  );
}

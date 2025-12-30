"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <div className="h-screen animated">
      <div className="overflow-hidden">
        <div className="snowblock"></div>
      </div>
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col gap-4 items-center">
          <Image src="/kolokol.png" alt="" width={200} height={200} />
          <div className="text-center flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">Дорогая, Вика!</h2>
            <p className="opacity-70 text-center leading-4">
              в этом году ты была хорошей <br />
              девочкой, поэтому приглашаю <br />
              тебя праздновать со мной
            </p>
          </div>

          <Button className="mt-3" onClick={() => router.push("/text")}>
            начать
          </Button>
        </div>
      </div>
    </div>
  );
}

// БУСИНКЕ

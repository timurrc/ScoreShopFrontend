"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
export default function Text() {
  const [quest, setQuest] = useState<boolean>(false);
  return (
    <div className="h-screen w-full">
      <div className="overflow-hidden">
        <div className="snowblock"></div>
      </div>
      <div className="flex flex-col h-full px-[14px] py-[30px] gap-4 w-full justify-between">
        <div>
          <h2 className="text-2xl font-semibold">С наступающим новым годом!</h2>
          <p className="opacity-70 text-start leading-5 w-full">
            Бусиииинкаааа привет! Дед мороз разрешил оставить тут свой текст
            поздравления, поэтому и оставляю. На самом деле, этот год, который я
            провел с тобой, был для меня самым лучшим и по истине интересным. Я
            понял, что такое быть любимым и любить. Этот год не принес мне кучу
            материальных благ, он принес мне намного дороже - тебя.{" "}
            {quest === true
              ? "Дороже лишь потому что одна твоя улыбка делает меня счастливым, а твое “ИИИИИ” дает чувство, будто я достал звезду с неба. Я знаю, что у нас впереди с тобой целое приключение, по истечению которого будет милый финал, как в попсовых мелодрамах :) и это греет душу. Я хочу чтоб в новый год, ты была самой счастливой, и провела следующий год в радости!"
              : "Ты спросишь почему дороже??"}
          </p>

          {!quest && (
            <Button className="mt-3" onClick={() => setQuest(true)}>
              СПРОСИТЬ!!
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

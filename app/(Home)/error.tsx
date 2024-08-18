"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <Image
        src="/images/empty/empty-todo-l.svg"
        alt="Error"
        width={200}
        height={200}
        className="mb-8"
      />
      <h1 className="text-2xl font-bold mb-4 text-slate-800">
        오류가 발생했습니다
      </h1>
      <p className="text-slate-600 mb-8">
        {error.message || "알 수 없는 오류가 발생했습니다."}
      </p>
      <Button
        onClick={reset}
        className="bg-violet-500 text-white px-6 py-2 rounded-full"
      >
        다시 시도
      </Button>
    </div>
  );
}

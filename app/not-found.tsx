import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <Image
        src="/images/empty/empty-todo-l.svg"
        alt="Page Not Found"
        width={200}
        height={200}
        className="mb-8"
      />
      <h1 className="text-2xl font-bold mb-4 text-slate-800">
        페이지를 찾을 수 없습니다
      </h1>
      <p className="text-slate-600 mb-8">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <Link href="/" passHref>
        <Button className="bg-violet-500 text-white px-6 py-2 rounded-full">
          홈으로 돌아가기
        </Button>
      </Link>
    </div>
  );
}

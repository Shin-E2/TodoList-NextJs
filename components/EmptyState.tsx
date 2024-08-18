import React from "react";
import Image from "next/image";

interface EmptyStateProps {
  type: "todo" | "done";
}

const EmptyState: React.FC<EmptyStateProps> = ({ type }) => {
  const imagePath =
    type === "todo"
      ? "/images/empty/empty-todo-s.svg"
      : "/images/empty/empty-done-s.svg";
  const altText = type === "todo" ? "할 일 없음" : "완료된 일 없음";
  const message =
    type === "todo" ? (
      <>
        할 일이 없어요.
        <br />
        TODO를 새롭게 추가해주세요!
      </>
    ) : (
      <>
        아직 다 한 일이 없어요.
        <br />
        해야 할 일을 체크해보세요!
      </>
    );

  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-lg">
      <div className="relative w-full h-32 sm:h-40 lg:h-48">
        <Image
          src={imagePath}
          alt={altText}
          fill
          style={{ objectFit: "contain" }}
          className="transition-all duration-300"
        />
      </div>
      <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-600 text-center whitespace-pre-line">
        {message}
      </p>
    </div>
  );
};

export default EmptyState;

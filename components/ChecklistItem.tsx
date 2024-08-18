import Image from "next/image";
import React from "react";

interface ChecklistItemProps {
  id: string;
  text: string;
  isCompleted: boolean;
  onToggle: () => void;
  onClick: () => void;
  onDelete: () => void;
  className?: string;
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({
  text,
  isCompleted,
  onToggle,
  onClick,
  onDelete,
  className,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === "Enter" || e.key === " ") {
      action();
      e.preventDefault();
    }
  };

  return (
    <div
      className={`flex flex-auto items-center py-[9px] pl-3 pr-3 rounded-full h-[50px] ${
        isCompleted ? "bg-violet-100" : "bg-white"
      } border-[2px] border-slate-900 cursor-pointer ${className} transition-all duration-300`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => handleKeyDown(e, onClick)}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
          onToggle();
        }}
        className={`flex items-center justify-center pr-3 ${isCompleted}`}
        role="checkbox"
        aria-checked={isCompleted}
        tabIndex={0}
        onKeyDown={(e) => handleKeyDown(e, onToggle)}
      >
        <Image
          src={isCompleted ? "/icon/checkCmp.svg" : "/icon/checkDefault.svg"}
          alt={isCompleted ? "완료됨" : "미완료"}
          width={32}
          height={32}
        />
      </div>
      <span
        className={`flex-grow text-base ${
          isCompleted ? "text-slate-800 line-through" : "text-slate-800"
        } truncate`}
      >
        {text}
      </span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
        className="ml-2 p-1 rounded-full hover:bg-red-100"
      >
        <Image src="../icon/X.svg" alt="삭제" width={20} height={20} />
      </button>
    </div>
  );
};

export default ChecklistItem;

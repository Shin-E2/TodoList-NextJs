"use client";

import Image from "next/image";
import React, { useState } from "react";
import { createTodo } from "@/utils/api";

interface SearchInputProps {
  onTodoAdded: (newTodo: any) => void;
  placeholder?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  onTodoAdded,
  placeholder = "할 일을 입력해주세요",
}) => {
  const [value, setValue] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const handleSubmit = async () => {
    if (value.trim() && !isAdding) {
      setIsAdding(true);
      try {
        const newTodo = await createTodo(value);
        onTodoAdded(newTodo);
        setValue("");
      } catch (error) {
        console.error("할 일 추가 중 오류 발생:", error);
        // 에러 처리를 여기에 추가할 수 있습니다.
      } finally {
        setIsAdding(false);
      }
    }
  };

  return (
    <div className="flex flex-auto pt-6 items-center gap-4">
      <div className="relative flex-auto h-[56px] transition-all duration-300">
        <div className="absolute w-full h-[50.5px] bg-slate-50 border-2 border-slate-900 rounded-[23px] top-[1px] left-[1px] z-10"></div>
        <div className="absolute inset-0 w-full h-[50.5px] bg-slate-900 border-2 border-slate-900 rounded-[23px] top-[4.5px] left-[5px] z-0"></div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
          placeholder={placeholder}
          className="absolute inset-0 w-full h-full bg-transparent text-base text-slate-500 pl-6 pr-4 rounded-[30px] focus:outline-none z-20"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="flex-shrink-0"
        disabled={isAdding}
      >
        <Image
          src={
            isAdding
              ? "/images/btn/Add-Small-Active.svg"
              : "/images/btn/Add-Small-Default.svg"
          }
          alt="추가"
          width={56}
          height={56}
          className="sm:hidden"
        />
        <Image
          src={
            isAdding
              ? "/images/btn/Add-Large-Active.svg"
              : "/images/btn/Add-Large-Default.svg"
          }
          alt="추가하기"
          width={168}
          height={56}
          className="hidden sm:block"
        />
      </button>
    </div>
  );
};

export default SearchInput;

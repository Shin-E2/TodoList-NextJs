import React, { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import ChecklistItem from "./ChecklistItem";
import EmptyState from "./EmptyState";
import { Todo } from "@/utils/api";

interface TodoListProps {
  title: "Todo" | "Done";
  items: Todo[];
  onToggle: (id: string) => void;
  onClick: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  title,
  items,
  onToggle,
  onClick,
  onDelete,
}) => {
  const listRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col flex-1">
      <Image
        src={`/images/${title.toLowerCase()}.svg`}
        alt={title}
        width={101}
        height={36}
        className="mb-4"
      />
      <div
        ref={listRef}
        className="flex-grow overflow-y-auto pr-1"
        style={{ maxHeight: "400px" }}
      >
        <div className="flex flex-col gap-4">
          {items.length > 0 ? (
            items.map((todo) => (
              <ChecklistItem
                key={todo.id}
                id={todo.id}
                text={todo.name}
                isCompleted={todo.isCompleted}
                onToggle={() => onToggle(todo.id)}
                onClick={() => onClick(todo.id)}
                onDelete={() => onDelete(todo.id)}
              />
            ))
          ) : (
            <EmptyState type={title.toLowerCase() as "todo" | "done"} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoList;

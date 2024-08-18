"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { updateTodo, deleteTodo, Todo, fetchTodos } from "@/utils/api";
import TodoList from "@/components/TodoList";
import SearchInput from "@/components/SearchInput";

interface ClientTodoListProps {
  initialTodos: Todo[];
}

export default function ClientTodoList({ initialTodos }: ClientTodoListProps) {
  const router = useRouter();
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [error, setError] = useState<string | null>(null);

  const handleTodoAdded = (newTodo: Todo) => {
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  const toggleTodo = async (id: string) => {
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      try {
        const updatedTodo = await updateTodo(id, {
          isCompleted: !todo.isCompleted,
        });
        setTodos((prevTodos) =>
          prevTodos.map((t) => (t.id === id ? updatedTodo : t))
        );
      } catch (err) {
        console.error("할 일 상태 변경 중 오류 발생:", err);
        setError("할 일 상태를 변경하는데 실패했습니다.");
      }
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteTodo(id);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (err) {
      console.error("할 일 삭제 중 오류 발생:", err);
      setError("할 일을 삭제하는데 실패했습니다.");
    }
  };

  const handleTodoClick = (id: string) => {
    router.push(`/items/${id}`);
  };

  const todoItems = todos.filter((todo) => !todo.isCompleted);
  const doneItems = todos.filter((todo) => todo.isCompleted);

  return (
    <>
      <SearchInput onTodoAdded={handleTodoAdded} />
      {error && <div className="text-red-500 mt-4">{error}</div>}
      <div className="pt-10 flex flex-col lg:flex-row gap-6 transition-all duration-300">
        <TodoList
          title="Todo"
          items={todoItems}
          onToggle={toggleTodo}
          onClick={handleTodoClick}
          onDelete={handleDelete}
        />
        <TodoList
          title="Done"
          items={doneItems}
          onToggle={toggleTodo}
          onClick={handleTodoClick}
          onDelete={handleDelete}
        />
      </div>
    </>
  );
}

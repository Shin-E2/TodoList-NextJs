import React, { Suspense } from "react";
import { fetchTodos, Todo } from "@/utils/api";
import ClientTodoList from "@/components/ClientTodoList";

async function getTodos(page: number = 1): Promise<Todo[]> {
  return await fetchTodos(page);
}

export default async function Home() {
  const initialTodos = await getTodos();

  return (
    <div className="flex flex-col max-w-screen-desktop">
      <Suspense fallback={<div>할 일 목록을 불러오는 중...</div>}>
        <ClientTodoList initialTodos={initialTodos} />
      </Suspense>
    </div>
  );
}

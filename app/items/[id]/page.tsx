import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import { fetchTodo, Todo } from "@/utils/api";
import TodoContent from "@/components/TodoContent";

// 서버 컴포넌트에서 Todo 데이터를 가져오는 비동기 함수
async function getTodo(id: string): Promise<Todo> {
  try {
    // API를 통해 특정 ID의 Todo 항목을 가져온다.
    return await fetchTodo(id);
  } catch (error) {
    notFound();
  }
}

// 페이지의 주요 컴포넌트입니다. 서버 컴포넌트로 동작합니다.
export default async function TodoDetail({
  params,
}: {
  params: { id: string };
}) {
  // 서버에서 Todo 데이터를 가져온다.
  const todo = await getTodo(params.id);

  return (
    <Suspense>
      <TodoContent todo={todo} />
    </Suspense>
  );
}

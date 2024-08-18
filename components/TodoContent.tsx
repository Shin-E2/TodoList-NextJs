"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { updateTodo, deleteTodo, uploadImage, Todo } from "@/utils/api";
import TodoHeader from "@/components/TodoHeader";
import ImageUploader from "@/components/ImageUploader";
import MemoEditor from "@/components/MemoEditor";
import ActionButtons from "@/components/ActionButtons";

export default function TodoContent({ todo: initialTodo }: { todo: Todo }) {
  const router = useRouter();
  const [todo, setTodo] = useState(initialTodo);
  const [memo, setMemo] = useState(initialTodo.memo || "");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isMemoEdited, setIsMemoEdited] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(
    initialTodo.imageUrl || null
  );

  const convertToEnglishFilename = (filename: string): string => {
    const parts = filename.split(".");
    const extension = parts.pop();
    const name = parts.join(".");
    const englishName = name.replace(/[^a-zA-Z0-9]/g, "_");
    return `${englishName}.${extension}`;
  };

  const handleSubmit = async () => {
    if (!isMemoEdited && !imageFile) return;
    try {
      let imageUrl = previewUrl;

      if (imageFile) {
        const formData = new FormData();
        formData.append("image", imageFile);
        const uploadedImage = await uploadImage(formData);
        imageUrl = uploadedImage.url;
      }

      const updates: Partial<Todo> = {
        name: todo.name,
        memo: memo || undefined,
        isCompleted: todo.isCompleted,
        imageUrl: imageUrl || undefined,
      };

      const updatedTodo = await updateTodo(todo.id, updates);
      setTodo(updatedTodo);
      setImageFile(null);
      setIsMemoEdited(false);
      setError(null);
      alert("Todo가 성공적으로 업데이트되었습니다.");
    } catch (error) {
      console.error("Todo 업데이트 중 오류 발생:", error);
      setError("Todo 업데이트에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const handleDelete = async () => {
    if (!confirm("정말로 이 Todo를 삭제하시겠습니까?")) return;
    try {
      await deleteTodo(todo.id);
      alert("Todo가 성공적으로 삭제되었습니다.");
      router.push("/");
    } catch (error) {
      console.error("Todo 삭제 중 오류 발생:", error);
      if (error instanceof Error && error.message.includes("not found")) {
        alert("이미 삭제된 Todo입니다. 목록 페이지로 이동합니다.");
        router.push("/");
      } else {
        setError("Todo 삭제에 실패했습니다. 다시 시도해주세요.");
      }
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      let file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        setError("이미지 크기는 5MB 이하여야 합니다.");
        return;
      }
      const englishFilename = convertToEnglishFilename(file.name);
      const newFile = new File([file], englishFilename, { type: file.type });
      setImageFile(newFile);
      setPreviewUrl(URL.createObjectURL(newFile));
    }
  };

  const handleMemoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(e.target.value);
    setIsMemoEdited(true);
  };

  return (
    <div className="flex flex-col gap-6 pt-6 px-[102px] max-h-screen bg-white rounded-lg min-h-screen">
      <TodoHeader
        id={todo.id}
        name={todo.name}
        isCompleted={todo.isCompleted}
        onUpdate={async () => {
          try {
            const updatedTodo = await updateTodo(todo.id, {
              isCompleted: !todo.isCompleted,
            });
            setTodo(updatedTodo);
          } catch (error) {
            console.error("Todo 상태 업데이트 중 오류 발생:", error);
            setError("Todo 상태 업데이트에 실패했습니다. 다시 시도해주세요.");
          }
        }}
      />
      <div className="flex gap-6 tablet:flex-col mobile:flex-col desktop:flex-row">
        <ImageUploader
          previewUrl={previewUrl}
          onImageChange={handleImageChange}
        />
        <MemoEditor memo={memo} onMemoChange={handleMemoChange} />
      </div>
      <ActionButtons
        onSubmit={handleSubmit}
        onDelete={handleDelete}
        isEditActive={isMemoEdited || !!imageFile}
      />
      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
}

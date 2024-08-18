import Image from "next/image";
import { updateTodo } from "@/utils/api";

interface TodoHeaderProps {
  id: string;
  name: string;
  isCompleted: boolean;
  onUpdate: () => void;
}

const TodoHeader: React.FC<TodoHeaderProps> = ({
  id,
  name,
  isCompleted,
  onUpdate,
}) => {
  const handleToggle = async () => {
    await updateTodo(id, { isCompleted: !isCompleted });
    onUpdate();
  };

  return (
    <div className="flex items-center justify-center space-x-2 border-[2px] border-slate-900 cursor-pointer h-16 rounded-3xl">
      <button
        onClick={handleToggle}
        className="flex items-center justify-center"
        aria-label={isCompleted ? "할 일 완료 취소" : "할 일 완료"}
      >
        <Image
          src={isCompleted ? "/icon/checkCmp.svg" : "/icon/checkDefault.svg"}
          alt={isCompleted ? "완료됨" : "미완료"}
          width={32}
          height={32}
        />
      </button>
      <span className="text-[20px] text-center text-slate-900 pl-1 underline underline-offset-4">
        {name}
      </span>
    </div>
  );
};

export default TodoHeader;

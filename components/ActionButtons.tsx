import Image from "next/image";

interface ActionButtonsProps {
  onSubmit: () => void;
  onDelete: () => void;
  isEditActive: boolean;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  onSubmit,
  onDelete,
  isEditActive,
}) => {
  return (
    <div className="flex justify-end gap-4">
      <button
        onClick={onSubmit}
        className={`relative w-[168px] h-[56px] cursor-pointer ${
          !isEditActive && "opacity-50 cursor-not-allowed"
        }`}
        disabled={!isEditActive}
        aria-label="수정 완료"
      >
        <Image
          src={
            isEditActive
              ? "/images/btn/Edit-Large-Active.svg"
              : "/images/btn/Edit-Large-Default.svg"
          }
          alt=""
          width={168}
          height={48}
        />
        <span className="sr-only">수정 완료</span>
      </button>
      <button
        onClick={onDelete}
        className="relative w-[168px] h-[56px]"
        aria-label="삭제하기"
      >
        <Image
          src="/images/btn/Delete-Large-Default.svg"
          alt=""
          width={168}
          height={48}
        />
        <span className="sr-only">삭제하기</span>
      </button>
    </div>
  );
};

export default ActionButtons;

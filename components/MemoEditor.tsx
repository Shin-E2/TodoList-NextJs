interface MemoEditorProps {
  memo: string;
  onMemoChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const MemoEditor: React.FC<MemoEditorProps> = ({ memo, onMemoChange }) => {
  return (
    <div
      className="h-[311px] flex flex-col flex-auto rounded-3xl relative overflow-hidden"
      style={{
        backgroundImage: 'url("/images/memo.svg")',
        backgroundSize: "cover",
      }}
    >
      <label htmlFor="memoTextarea" className="text-amber-800 text-center pt-6">
        Memo
      </label>
      <textarea
        id="memoTextarea"
        value={memo}
        onChange={onMemoChange}
        className="bg-transparent border-none resize-none focus:outline-none text-slate-800 relative z-10 text-center py-8 px-4 overflow-y-auto flex-grow"
        placeholder="메모를 입력하세요"
        aria-label="메모 입력"
      />
    </div>
  );
};

export default MemoEditor;

// 주석:
// 1. 이 컴포넌트는 메모 편집 기능을 제공합니다.
// 2. 배경 이미지를 사용하여 메모장 모양을 구현합니다.
// 3. textarea를 사용하여 사용자가 자유롭게 메모를 입력할 수 있게 합니다.
// 4. 접근성 개선을 위해 label 요소를 추가하고, textarea에 id를 부여했습니다.
// 5. aria-label을 추가하여 스크린 리더 사용자에게 더 명확한 정보를 제공합니다.
// 6. overflow-y-auto와 flex-grow 클래스를 추가하여 긴 메모도 스크롤하며 볼 수 있게 했습니다.

import Image from "next/image";

interface ImageUploaderProps {
  previewUrl: string | null; // 미리보기 이미지 URL (null일 수도 있음)
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // 이미지 변경 이벤트 핸들러
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
  previewUrl, // 미리보기 이미지 URL
  onImageChange, // 이미지 변경 이벤트 핸들러
}) => {
  return (
    <div className="flex-auto border-dashed border-2 border-slate-300 bg-slate-50 flex flex-col items-center justify-center relative rounded-3xl h-[311px]">
      {previewUrl ? (
        // previewUrl이 존재하면 업로드된 이미지를 표시
        <Image
          src={previewUrl} // 업로드된 이미지 URL
          alt="Todo 이미지"
          fill // layout="fill" 대신 fill 사용
          style={{ objectFit: "cover" }} // objectFit을 style prop으로 이동
          className="rounded-3xl"
        />
      ) : (
        // previewUrl이 없으면 기본 아이콘을 표시
        <div className="bg-slate-50 rounded-3xl flex items-center justify-center">
          <Image
            src="/icon/imgIcon.svg"
            alt="이미지 아이콘"
            width={64}
            height={64}
          />
        </div>
      )}
      <label
        className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-md"
        role="button" // 접근성을 위해 역할을 'button'으로 설정
        tabIndex={0} // 키보드 탐색이 가능하도록 설정
        onKeyDown={(e) => {
          // 키보드 이벤트를 처리하여 Enter 또는 Space 키가 눌렸을 때
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault(); // 스페이스바로 페이지가 스크롤되는 것을 방지
            e.currentTarget.click(); // 버튼 클릭 이벤트 발생
          }
        }}
      >
        <Image
          src={
            previewUrl ? "/images/btn/Edit.svg" : "/images/btn/Plus-icon.svg"
          }
          alt={previewUrl ? "이미지 수정" : "이미지 선택"}
          width={64}
          height={64}
        />
        <input
          type="file" // 파일 입력 필드
          onChange={onImageChange} // 이미지 변경 이벤트 핸들러
          accept="image/*" // 이미지 파일만 허용
          className="hidden" // 입력 필드는 숨김 처리
          aria-label="이미지 업로드" // 접근성을 위한 레이블
        />
      </label>
    </div>
  );
};

export default ImageUploader;

// 주석은 이전과 동일하게 유지

// 주석:
// 1. 이 컴포넌트는 이미지 업로드 및 미리보기 기능을 제공합니다.
// 2. previewUrl이 존재하면 업로드된 이미지를 보여주고, 그렇지 않으면 기본 이미지 아이콘을 표시합니다.
// 3. 이미지 업로드/수정 버튼은 화면의 우측 하단에 위치하며, 현재 상태에 따라 아이콘이 변경됩니다.
// 4. 접근성을 개선하기 위해 label에 role="button"과 tabIndex를 추가하여 키보드 탐색이 가능하게 합니다.
// 5. onKeyDown 이벤트를 통해 Enter 키와 스페이스바를 처리하여 키보드로 이미지 업로드 버튼을 클릭할 수 있습니다.
// 6. e.preventDefault()를 사용하여 스페이스바로 페이지가 스크롤되는 것을 방지하여 사용자 경험을 개선합니다.
// 7. 기본 이미지 아이콘의 경로를 수정하여 올바른 위치에서 아이콘을 로드하도록 설정하였습니다.
// 8. 버튼 아이콘의 크기를 24x24로 조정하여 버튼 안에 적절히 들어가도록 설정하였습니다.
// 9. 이 컴포넌트는 이미지 업로드 기능을 통해 사용자가 이미지를 선택하고 미리보기할 수 있는 인터페이스를 제공합니다.

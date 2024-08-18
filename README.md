# **Todo List Application**
이 프로젝트는 Next.js를 사용하여 개발된 할 일 관리 애플리케이션입니다. 사용자는 할 일을 추가, 수정, 삭제하고 완료 상태를 토글할 수 있습니다.

**주요 기능**
- 할 일 추가
- 할 일 수정
- 할 일 삭제
- 할 일 완료 상태 토글
- 할 일 목록 무한 스크롤
- 반응형 디자인

**기술 스택** : Next.js, React, TypeScript, Tailwind CSS

# **주요 컴포넌트 설명**
**ClientTodoList**
- 위치: components/ClientTodoList.tsx
- 설명: 전체 Todo 리스트를 관리하는 클라이언트 컴포넌트입니다. Todo와 Done 항목을 분리하여 표시하고, 각 항목에 대한 상태 관리 및 API 호출을 담당합니다.

**TodoList**
- 위치: components/TodoList.tsx
- 설명: Todo 또는 Done 리스트를 렌더링하는 컴포넌트입니다. 무한 스크롤 기능을 구현하고 있으며, 각 항목에 대한 토글, 클릭, 삭제 기능을 제공합니다.

**ChecklistItem**
- 위치: components/ChecklistItem.tsx
- 설명: 개별 Todo 항목을 표시하는 컴포넌트입니다. 완료 상태 토글, 항목 클릭, 삭제 기능을 포함합니다.

**SearchInput**
- 위치: components/SearchInput.tsx
- 설명: 새로운 Todo를 추가하기 위한 입력 필드 컴포넌트입니다.

**TodoContent**
- 위치: items/[id]/TodoContent.tsx
- 설명: 개별 Todo 항목의 상세 내용을 표시하고 편집할 수 있는 컴포넌트입니다. 메모 수정, 이미지 업로드 기능을 제공합니다.

**TodoHeader**
- 위치: components/TodoHeader.tsx
- 설명: Todo 상세 페이지의 헤더 부분을 담당하는 컴포넌트입니다. Todo의 제목과 완료 상태를 표시합니다.

**ImageUploader**
- 위치: components/ImageUploader.tsx
- 설명: Todo 항목에 이미지를 업로드하고 미리보기를 제공하는 컴포넌트입니다.

**MemoEditor**
- 위치: components/MemoEditor.tsx
- 설명: Todo 항목의 메모를 편집할 수 있는 텍스트 에디터 컴포넌트입니다.

**ActionButtons**
- 위치: components/ActionButtons.tsx
- 설명: Todo 상세 페이지에서 '수정'과 '삭제' 버튼을 제공하는 컴포넌트입니다.

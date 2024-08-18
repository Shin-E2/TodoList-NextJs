const API_BASE_URL = "https://assignment-todolist-api.vercel.app/api";
const TENANT_ID = process.env.NEXT_PUBLIC_TENANT_ID || "user123";

export interface Todo {
  id: string;
  name: string;
  isCompleted: boolean;
  memo?: string;
  imageUrl?: string;
}

// API 요청을 처리하는 범용 함수
async function apiRequest<T>(url: string, options?: RequestInit): Promise<T> {
  console.log(`API 요청: ${url}`);
  const response = await fetch(url, options);
  console.log(`응답 상태: ${response.status} ${response.statusText}`);

  if (!response.ok) {
    const errorBody = await response.text();
    console.error(
      `API 요청 실패: ${response.status} ${response.statusText}`,
      errorBody
    );
    throw new Error(
      `API 요청 실패: ${response.status} ${response.statusText}\n상세 정보: ${errorBody}`
    );
  }

  const responseData = await response.json();
  console.log("응답 데이터:", responseData);

  return responseData;
}

// Todo 아이템 업데이트 함수
export const updateTodo = async (
  id: string,
  updates: Partial<Todo>
): Promise<Todo> => {
  if (updates.imageUrl === undefined) {
    delete updates.imageUrl;
  }

  return apiRequest<Todo>(`${API_BASE_URL}/${TENANT_ID}/items/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });
};

// 이미지 업로드 함수
export const uploadImage = async (
  formData: FormData
): Promise<{ url: string }> => {
  return apiRequest<{ url: string }>(
    `${API_BASE_URL}/${TENANT_ID}/images/upload`,
    {
      method: "POST",
      body: formData,
    }
  );
};

// Todo 목록 가져오기 함수
export async function fetchTodos(
  page: number = 1,
  pageSize: number = 10
): Promise<Todo[]> {
  console.log(`Todo 목록 가져오기: 페이지=${page}, 페이지 크기=${pageSize}`);
  const url = `${API_BASE_URL}/${TENANT_ID}/items?page=${page}&pageSize=${pageSize}`;
  console.log("요청 URL:", url);
  const response = await apiRequest<Todo[]>(url);
  console.log("가져온 Todo 목록:", response);
  return response;
}

// 특정 Todo 아이템 가져오기 함수
export const fetchTodo = async (id: string): Promise<Todo> => {
  return apiRequest<Todo>(`${API_BASE_URL}/${TENANT_ID}/items/${id}`);
};

// 새 Todo 아이템 생성 함수
export async function createTodo(name: string): Promise<Todo> {
  return apiRequest<Todo>(`${API_BASE_URL}/${TENANT_ID}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });
}

// Todo 아이템 삭제 함수
export const deleteTodo = async (id: string): Promise<void> => {
  try {
    await apiRequest<void>(`${API_BASE_URL}/${TENANT_ID}/items/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    if (error instanceof Error) {
      const errorMessage = error.message.toLowerCase();
      if (
        errorMessage.includes("record to delete does not exist") ||
        errorMessage.includes("not found")
      ) {
        console.warn("Todo item not found, it may have been already deleted.");
        return; // 이미 삭제된 항목이면 에러를 발생시키지 않고 그냥 반환
      }
    }
    throw error; // 다른 종류의 에러는 그대로 전파
  }
};

// 주석: 이 파일은 모든 API 요청을 관리합니다. 각 함수는 특정 API 엔드포인트에 대한 요청을 처리합니다.
// apiRequest 함수는 모든 API 호출에 대한 공통 로직을 처리하며, 에러 처리와 로깅을 포함합니다.
// 각 함수(updateTodo, uploadImage 등)는 특정 작업을 수행하기 위해 apiRequest를 사용합니다.
// TENANT_ID는 사용자 또는 조직을 식별하는 데 사용되며, 환경 변수에서 가져오거나 기본값을 사용합니다.

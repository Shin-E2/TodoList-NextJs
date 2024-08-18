import "../styles/globals.css";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// 메타데이터 설정
export const metadata: Metadata = {
  title: "Do It - Todo List App",
  description: "효율적인 할 일 관리를 위한 Todo List 애플리케이션",
};

// RootLayout 컴포넌트
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <div className="min-h-screen bg-slate-100">
          {/* 헤더 */}
          <header className="bg-white h-[60px] transition-all duration-300 pt-[10px] desktop:px-[360px] tablet:px-4 mobile:px-2">
            <Link href="/">
              {/* 데스크탑 로고 */}
              <Image
                src="/images/logo/logo-l.svg"
                alt="Do it Logo"
                width={151}
                height={40}
                className="hidden tablet:block desktop:block"
              />
              {/* 모바일 로고 */}
              <Image
                src="/images/logo/logo-s.svg"
                alt="Logo"
                width={71}
                height={40}
                className="block tablet:hidden desktop:hidden"
              />
            </Link>
          </header>
          {/* 메인 컨텐츠 */}
          <main className="desktop:px-[360px] tablet:px-4 mobile:px-2 transition-all duration-300">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

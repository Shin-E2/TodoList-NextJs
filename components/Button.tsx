import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "medium",
  className = "",
  type = "button",
  ...props
}) => {
  const baseStyle =
    "rounded-full font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantStyles = {
    primary:
      "bg-violet-600 text-white hover:bg-violet-700 focus:ring-violet-500",
    secondary:
      "bg-slate-200 text-slate-800 hover:bg-slate-300 focus:ring-slate-400",
    danger: "bg-rose-500 text-white hover:bg-rose-600 focus:ring-rose-400",
  };
  const sizeStyles = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

// 주석:
// 1. 이 컴포넌트는 재사용 가능한 버튼을 제공합니다.
// 2. variant prop을 통해 버튼의 스타일(primary, secondary, danger)을 지정할 수 있습니다.
// 3. size prop을 통해 버튼의 크기(small, medium, large)를 지정할 수 있습니다.
// 4. 기본 스타일에 focus 상태를 위한 스타일을 추가하여 키보드 사용자를 위한 접근성을 개선했습니다.
// 5. React.ButtonHTMLAttributes<HTMLButtonElement>를 확장하여 모든 기본 버튼 속성을 지원합니다.
// 6. 커스텀 className을 허용하여 필요한 경우 추가적인 스타일링이 가능합니다.

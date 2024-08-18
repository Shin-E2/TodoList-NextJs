import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col gap-6 pt-6 px-[102px] max-h-screen bg-white rounded-lg min-h-screen animate-pulse">
      <div className="h-10 bg-gray-200 rounded w-1/4"></div>
      <div className="flex gap-6 tablet:flex-col mobile:flex-col desktop:flex-row">
        <div className="w-1/2 h-64 bg-gray-200 rounded"></div>
        <div className="w-1/2 h-64 bg-gray-200 rounded"></div>
      </div>
      <div className="h-10 bg-gray-200 rounded w-1/4"></div>
    </div>
  );
}

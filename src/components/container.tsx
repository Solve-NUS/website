import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <main className="flex justify-center pb-8 pt-16 w-full">
      <div className="container bg-white rounded-lg shadow-lg p-16 mt-8 flex flex-col justify-content items-center text-center gap-4 border-4 border-black w-[90%]">
        {children}
      </div>
    </main>
  );
}

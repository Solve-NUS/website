import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <main className="flex justify-center bg-gray-100 min-h-screen pt-16">
      <div className="container bg-white rounded-lg shadow-lg p-16 mt-8 flex flex-col justify-content items-center text-center gap-4">
        {children}
      </div>
    </main>
  );
}

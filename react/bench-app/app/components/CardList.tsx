import type { PropsWithChildren } from "react";

export default function CardList({ children }: PropsWithChildren) {
  return (
    <div>
      {children}
    </div>
  );
}
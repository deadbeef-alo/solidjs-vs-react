import type { PropsWithChildren } from "react";

export default function CardList({ children }: PropsWithChildren) {
  return (
    <div className="grid-gallery">
      {children}
    </div>
  );
}
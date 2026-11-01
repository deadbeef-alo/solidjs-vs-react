import { ParentProps } from 'solid-js';

export default function CardList({ children }: ParentProps) {
  return (
    <div class="grid-gallery">
      {children}
    </div>
  );
}
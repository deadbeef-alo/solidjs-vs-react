export interface CardProps {
    title: string,
    content: string[]
}

export default function Card(props: CardProps) {
  return (
    <div>
      <h3>{props.title}</h3>
      <span>{props.content.join(', ')}</span>
    </div>
  );
}

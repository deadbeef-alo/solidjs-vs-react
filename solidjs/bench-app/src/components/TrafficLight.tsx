export interface TrafficLightProps {
  iterator: number
}

export default function TrafficLight(props: TrafficLightProps) {
  return (
    <div class="traffic-light">
      <span
        class="dot"
        style = {{"background-color": `${props.iterator == 0 ? 'red' : 'gray'}`}
      }/>
      <span
        class="dot"
        style = {{"background-color": `${props.iterator == 1 ? 'yellow' : 'gray'}`}
      }/>
      <span
        class="dot"
        style = {{"background-color": `${props.iterator == 2 ? 'green' : 'gray'}`}
      }/>
    </div>
  );
}
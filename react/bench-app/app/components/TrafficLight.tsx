export interface TrafficLightProps {
  iterator: number
}

export default function TrafficLight(props: TrafficLightProps) {
  return (
    <div className="traffic-light">
      <span
        className="dot"
        style = {{backgroundColor: `${props.iterator == 0 ? 'red' : 'gray'}`}
      }/>
      <span
        className="dot"
        style = {{backgroundColor: `${props.iterator == 1 ? 'yellow' : 'gray'}`}
      }/>
      <span
        className="dot"
        style = {{backgroundColor: `${props.iterator == 2 ? 'green' : 'gray'}`}
      }/>
    </div>
  );
}
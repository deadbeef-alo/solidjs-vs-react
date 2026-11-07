import { createSignal, createStore, For } from 'solid-js';
import { Title } from '@solidjs/meta';
import CardList from '../../components/CardList';
import Card from '../../components/Card';
import TrafficLight from '../../components/TrafficLight';
import { Profile } from '../../lib/profile';

export default function FormsIndex() {
  const [name, setName] = createSignal('');
  const [street, setStreet] = createSignal('');
  const [phone, setPhone] = createSignal('');
  const [count, setCount] = createSignal(0);
  const [traffic, setTraffic] = createSignal(0);

  const [profiles, setProfiles] = createStore<Profile[]>([]);

  const createProfile = () =>
    setProfiles((profile) => {
      profile.push({
        name: name(),
        street: street(),
        phone: phone()
    });
    setCount(count()+1);
    handleTraffic();
  });

  const handleTraffic = () => {
    setTraffic(traffic()+1);
    if(traffic() == 2)
      setTraffic(0);
  };

  return (
      <section>
        <Title>Forms - Solid App</Title>
        <p>A basic form.</p>
        <p id="fp-field-count">Entries: {count()}</p>
        <div class="traffic-gallery">
          <TrafficLight iterator={traffic()} />
          <TrafficLight iterator={traffic()} />
          <TrafficLight iterator={traffic()} />
          <TrafficLight iterator={traffic()} />
          <TrafficLight iterator={traffic()} />
          <TrafficLight iterator={traffic()} />
          <TrafficLight iterator={traffic()} />
          <TrafficLight iterator={traffic()} />
          <TrafficLight iterator={traffic()} />
          <TrafficLight iterator={traffic()} />
          <TrafficLight iterator={traffic()} />
          <TrafficLight iterator={traffic()} />
          <TrafficLight iterator={traffic()} />
          <TrafficLight iterator={traffic()} />
          <TrafficLight iterator={traffic()} />
          <TrafficLight iterator={traffic()} />
        </div>
        <div class="traffic-gallery">
          <TrafficLight iterator={traffic()} />
          <TrafficLight iterator={traffic()} />
          <TrafficLight iterator={traffic()} />
          <TrafficLight iterator={traffic()} />
          <TrafficLight iterator={traffic()} />
          <TrafficLight iterator={traffic()} />
          <TrafficLight iterator={traffic()} />
          <TrafficLight iterator={traffic()} />
          <TrafficLight iterator={traffic()} />
          <TrafficLight iterator={traffic()} />
          <TrafficLight iterator={traffic()} />
          <TrafficLight iterator={traffic()} />
          <TrafficLight iterator={traffic()} />
          <TrafficLight iterator={traffic()} />
          <TrafficLight iterator={traffic()} />
          <TrafficLight iterator={traffic()} />
        </div>
        <form onSubmit={(event) => {
            event.preventDefault();
            createProfile()
          }}>
          <label>
            Name
            <input
              id="fp-field-name"
              name="name"
              value={name()}
              onInput={(event) => setName(event.currentTarget.value)}
              required />
          </label>
          <label>
            Street
            <input
              id="fp-field-street"
              name="street"
              value={street()}
              onInput={(event) => setStreet(event.currentTarget.value)}
              required />
          </label>
          <label>
            Phone number
            <input
              id="fp-field-phone"
              name="phone"
              value={phone()}
              onInput={(event) => setPhone(event.currentTarget.value)} />
          </label>
          <button id="fp-btn-submit" type="submit">Create</button>
        </form>
        <CardList>
          <For each={profiles}>
            {(profile) => (
              <Card
                title={profile.name}
                content={[profile.name, profile.street]}
              />
            )}
          </For>
        </CardList>
      </section>
  );
}
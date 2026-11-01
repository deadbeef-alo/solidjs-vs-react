import { Title } from '@solidjs/meta';
import { Profile } from '../../lib/profile';
import CardList from '../../components/CardList';
import Card from '../../components/Card';
import { createSignal, createStore, For } from 'solid-js';

export default function FormsIndex() {
  const [name, setName] = createSignal('');
  const [street, setStreet] = createSignal('');
  const [phone, setPhone] = createSignal('');
  const [count, setCount] = createSignal(0);

  const [profiles, setProfiles] = createStore<Profile[]>([]);

  const createProfile = () =>
    setProfiles((profile) => {
      profile.push({
        name: name(),
        street: street(),
        phone: phone()
    });
    setCount(count()+1);
  });

  return (
    <section>
      <Title>Forms - Solid App</Title>
      <p>A basic form.</p>
      <p>Entries: {count()}</p>
      <form onSubmit={(event) => {
          event.preventDefault();
          createProfile()
        }}>
        <label>
          Name
          <input
            name="name"
            value={name()}
            onInput={(event) => setName(event.currentTarget.value)}
            required />
        </label>
        <label>
          Street
          <input
            name="street"
            value={street()}
            onInput={(event) => setStreet(event.currentTarget.value)}
            required />
        </label>
        <label>
          Phone number
          <input
            name="phone"
            value={phone()}
            onInput={(event) => setPhone(event.currentTarget.value)} />
        </label>
        <button type="submit">Create</button>
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
import { useState } from "react";
import Card from "~/components/Card";
import CardList from "~/components/CardList";
import type { Profile } from "~/lib/profile";

export default function FormPage() {
  const [name, setName] = useState('');
  const [street, setStreet] = useState('');
  const [phone, setPhone] = useState('');
  const [count, setCount] = useState(0);

  const [profiles, setProfiles] = useState<Profile[]>([]);

  const createProfile = () => {
    setProfiles([
      ...profiles, {
      name: name,
      street: street,
      phone: phone
    }]);
    setCount(count+1);
  }

  return (
    <section>
      <title>Forms - React</title>
      <p>A basic form.</p>
      <p>Entries: {count}</p>
      <form onSubmit={(event) => {
          event.preventDefault();
          createProfile()
        }}>
        <label>
          Name
          <input
            id="fp-field-name"
            name="name"
            value={name}
            onInput={(event) => setName(event.currentTarget.value)}
            required />
        </label>
        <label>
          Street
          <input
            id="fp-field-street"
            name="street"
            value={street}
            onInput={(event) => setStreet(event.currentTarget.value)}
            required />
        </label>
        <label>
          Phone number
          <input
            id="fp-field-phone"
            name="phone"
            value={phone}
            onInput={(event) => setPhone(event.currentTarget.value)} />
        </label>
        <button id="fp-btn-submit" type="submit">Create</button>
      </form>
      <CardList>
        {profiles.map((profile) => (
          <Card
            title={profile.name}
            content={[profile.name, profile.street]}
          />
        ))}
      </CardList>
    </section>
  );
}
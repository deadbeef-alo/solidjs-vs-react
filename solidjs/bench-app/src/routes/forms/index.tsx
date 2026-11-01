import { Title } from '@solidjs/meta';
import { formAction } from '@solidjs/router';

const submitAddress = formAction(handleSubmit);

async function handleSubmit(form: FormData) {
  let name = form.get('name') as string;
  let street = form.get('street') as string;
  let phone = form.get('phone') as string;

  let input: string = [name, street, phone].join(', ');

  alert(input);
}

export default function FormsIndex() {
  return (
    <section>
      <Title>Forms - Solid App</Title>
      <p>A basic form.</p>
      <form method="post" action={submitAddress}>
        <label>
          Name
          <input name="name" required />
        </label>
        <label>
          Street
          <input name="street" required />
        </label>
        <label>
          Phone number
          <input name="phone" />
        </label>
        <button type="submit">Continue to shipping</button>
      </form>
    </section>
  );
}
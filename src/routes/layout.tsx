import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';

export default component$(() => {
  return (
    <>
      <main class="lg:container lg:mx-auto mx-5">
        <Header />
        <section>
          <Slot />
        </section>
      </main>
    </>
  );
});

import { component$, Slot } from "@builder.io/qwik";
import Header from "../components/header/header";

export default component$(() => {
  return (
    <>
      <main class="lg:container mx-5 lg:mx-auto min-h-screen">
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <footer class="lg:container mx-5 lg:mx-auto">
        <a href="https://www.builder.io/" target="_blank">
          Made with ♡ by Builder.io
        </a>
      </footer>
    </>
  );
});

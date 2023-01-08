# Using Qwik with Tailwind and daisyUI

This repo is part of [Avishay Maor](https://www.linkedin.com/in/avishay-maor-752113182/) lecture
on ["Cascading into the StyleSheets world"](https://www.meetup.com/javascript-israel/events/290475803/) meetup made
by [Javascript Israel](https://www.meetup.com/javascript-israel/)

---
<div style="text-align: center; background: #fff; font-size: 72px">

![Qwik logo](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSau_g83pOSuoBD4NOv77M0mRJu2D_KQzZl6FiwcK2p&s)
<br/> &plus;
![Tailwindcss logo](https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-ar21.png)
<br/> &plus;

![daisyui logo](https://raw.githubusercontent.com/saadeghi/files/main/daisyui/logo-4.svg)
</div>

## Making our website more responsive by adding container

Let's make our website/application more responsive by adding container class to `/src/routes/layout.tsx`
We will add it to main and to the footer:

The file should look like this:
```javascript
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
```

Now let's use `Tailwindcss` to add some style to our homepage `/src/routes/indes.tsx`:

Lets change the `<h1>` tag and add the following classes:
```html
<h1 class="text-3xl text-primary hover:text-accent transition-all">
        Welcome to Qwik <span class="lightning">⚡️</span>
</h1>
```
### Nice ! Tailwind is working

# End of part III

To continue checkout branch name `4-after-cleanup`

<br/>
<br/>
<br/>
<br/>
<br/>

---


The link to the recorded lecture will be added here.

The link to the slide deck will be added here.

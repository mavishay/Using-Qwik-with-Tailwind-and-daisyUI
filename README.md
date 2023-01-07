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

## Add themes

First let's generate "daisyUI theme" we will do so by clicking [here](https://daisyui.com/theme-generator/).

After generating our theme let's add it to `tailwind.config.js` file:

```javascript
module.exports = {
    // Exisiting code ...
    daisyui: {
        themes: [
            {
                mytheme: {

                    "primary": "#2563eb",

                    "secondary": "#bbf7d0",

                    "accent": "#37CDBE",

                    "neutral": "#3D4451",

                    "base-100": "#FFFFFF",

                    "info": "#3ABFF8",

                    "success": "#36D399",

                    "warning": "#FBBD23",

                    "error": "#F87272",
                },
            },
            'business'
        ],
        darkTheme: "business",
    },
}
```

---
### Cleanup some boilerplate code
1. Remove all unnecessary css code from `global.css` leaving only this
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
2. Remove all the unnecessary code from homepage `/src/routes/index.ts` leaving only this
```javascript
import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1>
        Welcome to Qwik <span class="lightning">⚡️</span>
      </h1>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};

```
# End of part II

To continue checkout branch name `3-after-cleanup`

<br/>
<br/>
<br/>
<br/>
<br/>

---


The link to the recorded lecture will be added here.

The link to the slide deck will be added here.

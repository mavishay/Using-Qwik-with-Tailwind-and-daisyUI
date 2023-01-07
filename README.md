# Using Qwik with Tailwind and daisyUI

This repo is part of [Avishay Maor](https://www.linkedin.com/in/avishay-maor-752113182/) lecture on ["Cascading into the StyleSheets world"](https://www.meetup.com/javascript-israel/events/290475803/) meetup made by [Javascript Israel](https://www.meetup.com/javascript-israel/)

---
<div style="text-align: center; background: #fff; font-size: 72px">

![Qwik logo](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSau_g83pOSuoBD4NOv77M0mRJu2D_KQzZl6FiwcK2p&s)
<br/> &plus;
![Tailwindcss logo](https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-ar21.png)
<br/> &plus;

![daisyui logo](https://raw.githubusercontent.com/saadeghi/files/main/daisyui/logo-4.svg)
</div>

---
### Installing Qwik
```shell
yarn create qwik
```
Or
```shell
npm create qwik@latest
```
Or
```shell
pnpm create qwik@latest
```

---
### Adding tailwindcss
```shell
npm run qwik add tailwind
```
Don't forget to add the following to `global.css` file

```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
```
---
### Adding daisyUI
```shell
yarn add -D daisyui
```
Then add daisyUI to your tailwind.config.js file
```javascript
module.exports = {
  //...
  plugins: [require("daisyui")],
}
```
# End of part I
To continue checkout branch name `after-setup`

<br/>
<br/>
<br/>
<br/>
<br/>

---


The link to the recorded lecture will be added here.

The link to the slide deck will be added here.

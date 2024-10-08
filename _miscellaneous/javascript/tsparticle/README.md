# tsParticle

## links

- [(TOOL) tsParticle Confetti\*](https://confetti.js.org/#)
- [(DOC) tsParticle - GitHub\*](https://github.com/tsparticles/tsparticles)
- [(DOC) Module tsParticles Full Bundle - v3.4.0\*](https://particles.js.org/docs/modules/tsParticles_Full_Bundle.html)

## use

1. Install the TsParticle dependencies

   ```sh
   npm i @tsparticles/all
   ```

2. Import the dependencies into your project

   ```js
   import { tsParticles } from "@tsparticles/engine";
   import { loadFull } from "tsparticles";
   ```

   and then initialize it

   ```js
   loadFull(tsParticles);
   ```

3. TsParticle generates a promise, so to execute it, you need to trigger it after some event using `then()`. To make it easier, I created a function to trigger it

   ```js
   function triggerConfetti() {}
   ```

4. Inside the `triggerConfetti()` function, I loaded the particles

   ```js
   function triggerConfetti() {
     tsParticles.load({
       id: "tsparticles",
       options: {
         fullScreen: {
           zIndex: 1,
         },
         particles: {
           number: {
             value: 200,
           },
           color: {
             value: ["#00FFFC", "#FC00FF", "#fffc00"],
           },
           shape: {
             type: ["circle", "square", "triangle", "polygon"],
             options: {
               polygon: [
                 {
                   sides: 5,
                 },
                 {
                   sides: 6,
                 },
               ],
             },
           },
           opacity: {
             value: {
               min: 0,
               max: 1,
             },
             animation: {
               enable: true,
               speed: 2,
               startValue: "max",
               destroy: "min",
             },
           },
           size: {
             value: {
               min: 2,
               max: 4,
             },
           },
           links: {
             enable: false,
           },
           life: {
             duration: {
               sync: true,
               value: 5,
             },
             count: 1,
           },
           move: {
             enable: true,
             gravity: {
               enable: true,
               acceleration: 10,
             },
             speed: {
               min: 10,
               max: 20,
             },
             decay: 0.1,
             direction: "none",
             straight: false,
             outModes: {
               default: "destroy",
               top: "none",
             },
           },
           rotate: {
             value: {
               min: 0,
               max: 360,
             },
             direction: "random",
             move: true,
             animation: {
               enable: true,
               speed: 60,
             },
           },
           tilt: {
             direction: "random",
             enable: true,
             move: true,
             value: {
               min: 0,
               max: 360,
             },
             animation: {
               enable: true,
               speed: 60,
             },
           },
           roll: {
             darken: {
               enable: true,
               value: 25,
             },
             enable: true,
             speed: {
               min: 15,
               max: 25,
             },
           },
           wobble: {
             distance: 30,
             enable: true,
             move: true,
             speed: {
               min: -15,
               max: 15,
             },
           },
         },
         emitters: {
           life: {
             count: 0,
             duration: 0.1,
             delay: 0.4,
           },
           rate: {
             delay: 0.1,
             quantity: 150,
           },
           size: {
             width: 0,
             height: 0,
           },
         },
       },
     });
   }
   ```

5. Finally, call the function where you want to trigger the event

   ```js
   yourFunction().then((number) => {
     triggerConfetti();
   });
   ```

   Don't forget to ensure that the HTML tag is present in your HTML file

   ```html
   <div id="tsparticles"></div>
   ```

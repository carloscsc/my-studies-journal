**Note:** This repository is part of a personal project called [my-studies-journal](https://github.com/carloscsc/my-studies-journal). The goal is to organize the code, study materials, and personal projects I use daily. For more details, please visit the main page of the repository.

- [2024](#2024)
  - [August](#august)
    - [Friday, the 2nd](#friday-the-2nd)
  - [July](#july)
    - [Wednesday, the 31st](#wednesday-the-31st)

# 2024

## August

### Friday, the 2nd

- [(TOOL) tsParticle Confetti\*](https://confetti.js.org/#)
- [(DOC) tsParticle - GitHub\*](https://github.com/tsparticles/tsparticles)
- [(DOC) Module tsParticles Full Bundle - v3.4.0\*](https://particles.js.org/docs/modules/tsParticles_Full_Bundle.html)

- [(DOC/TOOL) Papa Parse - Parse CSV to JSON](https://www.papaparse.com/)

- [(Course) Learn Form Validation by Building a Calorie Counter [steps: 01 to 19 of 96]](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/#learn-form-validation-by-building-a-calorie-counter)

- [(Course) Introduction to the Learn Basic Debugging [steps: 01 to 08 of 08]](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/#learn-basic-debugging-by-building-a-random-background-color-changer)

**\*About tsParticle:**
I discovered TsParticle when I was looking for something to use in a raffle system I created, and I wanted confetti to appear when the winner's name was announced. However, since I am using Vite and JS in module form, it was quite unintuitive to get it to work.

So, I ended up using the three links provided along with some custom solutions to achieve the desired result. To make it easier for anyone facing the same problem, here is the step-by-step guide on how I implemented it.

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

I hope this can help someone with the same problem who ends up here.

## July

### Wednesday, the 31st

- [(DOC) Renaming a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/renaming-a-repository)
- [(REPO) "Dropdowns" in Markdown](https://gist.github.com/citrusui/07978f14b11adada364ff901e27c7f61)
- [(DOC) Licensing a repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)

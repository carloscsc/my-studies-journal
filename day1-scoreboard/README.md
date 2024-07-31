# Day 1: Scoreboard

**Note:** This repository is part of a personal project called [my-studies-journal](https://github.com/carloscsc/my-studies-journal). The goal is to organize the code, study materials, and personal projects I use daily. For more details, please visit the main page of the repository.

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

[[SEE IN ACTION]](https://my-study-journal.vercel.app/day1-scoreboard)

This project is part of the "Learn JavaScript" course available on [Scrimba](https://v2.scrimba.com/). The objective was to create a scoreboard that increases the score when buttons are clicked, providing a simple way to learn about JavaScript events and basic functions.

From my perspective, this project was interesting because we were provided only with a Figma file containing the specifications, encouraging us to build everything from scratch.

For someone like me, who already has some experience, this wasn't particularly challenging. I utilized several techniques not covered at this stage of the course, and the instructors encouraged this kind of initiative.

For example, in the original project, the idea was to mix HTML and JavaScript, which is not ideal for real projects but is acceptable for introducing basic concepts. In my version of the project, I decided to apply best practices.

Another point is that in the class, they did not use `dataset` to dynamically pass the score to JavaScript, and each button had its own function, like this:

```html
<div class="plus-point" onclick="increaseScore(1)">+1</div>
<div class="plus-point" onclick="increaseScore(2)">+2</div>
<div class="plus-point" onclick="increaseScore(4)">+3</div>
```

While this approach is okay for teaching the basics, I preferred a cleaner solution and made adjustments accordingly.

Another important point is that, since this project is solely for learning JavaScript, the page is not responsive. The course hasn’t covered this topic yet. As my focus is on JavaScript and, in the future, Backend development, I didn’t see the need to add this feature, even though I know how to do it.

In general, for someone who is truly on Day 1, this project is very helpful for building skills.

I’ve spent the last 10 years building or working on some really scary and complex projects that often took away my sleep. So, returning to the basics and building something simple like this made me feel happy today!

This was a great Day 1!

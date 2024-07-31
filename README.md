- [About the Project](#about-the-project)
- [Repository Structure](#repository-structure)
- [Miscellaneous](#miscellaneous)
- [About Me](#about-me)
- [Installation Guide for This Repository](#installation-guide-for-this-repository)
- [Project Index](#project-index)

## About the Project

This repository was created to organize the code and materials I use for daily study and development. I've always enjoyed self-study, but one thing I've noticed over my more than ten years of experience is how easy it is to forget our progress and where we've been, especially with the overwhelming amount of information available today. Due to a lack of organization, I've lost a lot of cool things I've developed.

Initially, this repository was going to be private, but since I plan to add various study resources and interesting projects for other developers, I've decided to make it public, hoping it can be useful to others.

## Repository Structure

The files are organized into folders named `day[n]_project-title`, e.g., `day1-scoreboard`. The "Day" in the folder names does not represent actual consecutive days but rather a way to organize the folders in ascending order and a personal way to demonstrate progress throughout my studies. My idea is that each new project demonstrates evolution and improvement, which wouldn't be possible by simply naming the projects as `01, 02, 03, etc.`, nor by placing them randomly. Each new "Day" aims to be better than the previous one.

Each "Day" represents a project, a starting point for executing an idea, which may take a day, a week, or even a year to complete. Within these folders, there will be a subfolder called `_studies`, representing the "draft" of the project, containing all the materials I developed or executed to complete the main project, akin to the preparation stages for executing the main idea.

Since the primary goal here is to document my studies and projects, each main folder contains a `README.md` file with an explanation of the project and its technologies, documentation when necessary, a link to the project running in production, and a list of articles, courses, and tutorials used during the project with their respective repositories in the `_studies` folder, when applicable.

When a project is in progress, a `[IN PROGRESS]` tag will be added to the top of the `README.md` file to indicate that the project is not yet completed.

## Miscellaneous

In my day-to-day activities, I consume many articles or tutorials that are not necessarily related to any specific project. Therefore, I created a folder called `_miscellaneous` where I will store this material in a somewhat unordered manner, just as a way to archive them. Inside the [\_miscellaneous](./_miscellaneous/README.md) folder, I also intend to keep a log organized by day (and now, actual consecutive days) of the links and interesting things consumed on that day, similar to a changelog.

## About Me

If you want to know more about me and my studies, I intend to share my journey so far in the [day0-hello-world/README.md](./day0-hello-world/README.md) file.

## Installation Guide for This Repository

When necessary, I will provide the required installation information in the root of each project.

However, since this repository has several folders and projects within each of them, you might be interested in cloning only a specific project.

To do this, just follow the instructions below:

1. First, clone the repository without checking out the files:

   ```sh
   git clone --no-checkout https://github.com/carloscsc/my-studies-journal.git
   ```

2. Enter the cloned repository:
   ```sh
   cd my-studies-journal
   ```
3. Next, enable sparse-checkout in the cloned repository:
   ```sh
   git sparse-checkout init --cone
   ```
4. Configure sparse-checkout to include only the folder you want, e.g., `_miscellaneous`:
   ```sh
   git sparse-checkout set _miscellaneous
   ```
5. Finally, checkout the files of the configured subfolder:
   ```sh
   git checkout
   ```

After finishing, only the root folder `my-studies-journal` and the selected folder will be cloned.

## Project Index

- [Day 0: Hello World!](./day0-hello-world/README.md) A brief introduction about me.

- [Day 1: Scoreboard [repo]](./day1-scoreboard/README.md) | [[see in action]](https://my-study-journal.vercel.app/day1-scoreboard) A simple scoreboard using Vanilla JS, created to study the DOM element and some basic JS concepts.

- [Day 2: Password Generator [repo]](./day2-password-generator/README.md) | [[see in action]](https://my-study-journal.vercel.app/day2-password-generator): A simple password generator using Vanilla JS, created to study the basics of arrays, functions, random numbers, and DOM manipulation.

- [Day 3: Unit Converter [repo]](./day3-unit-converter/README.md) _[IN PROGRESS]_ An app made in React to convert units. Inspired by the functionalities of Google when searching for unit conversions.

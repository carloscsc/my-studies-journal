_[IN PROGRESS]_

# Day 3: Unit Converter

**Note:** This repository is part of a personal project called [my-studies-journal](https://github.com/carloscsc/my-studies-journal). The goal is to organize the code, study materials, and personal projects I use daily. For more details, please visit the main page of the repository.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

This project was created as a way to learn and improve my skills in React. The goal is to create a unit converter, similar to the one you find on Google when searching for a specific measurement conversion.

The project is still in development, and more details will be added soon. If you want to download and run what has been done so far, follow the steps below:

## Installation

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
4. Configure sparse-checkout to include only the folder for this project:
   ```sh
   git sparse-checkout set day3-unit-converter
   ```
5. Checkout the files of the configured subfolder:
   ```sh
   git checkout
   ```
6. After cloning the folders, navigate to the project folder:

   ```sh
   cd day3-unit-converter
   ```

   (**Note:** After these steps, GitHub will copy only the folder of this project. However, the original folder structure will be maintained. If you wish, you can copy just this folder `tic-tac-toe` to another directory and ignore all other files downloaded outside this folder)

7. Install the dependencies
   ```sh
   npm install
   ```
8. Finally, run the project
   ```sh
   npm rum dev
   ```

## Things I studed for this project

Studies projects, drafts, etc.. are localized on [\_studies](./_studies) folder

### Courses

- [Learn JavaScript - Scrimba](https://v2.scrimba.com/learn-javascript-c0v)

### Tutorials

- [React Full Course for free ⚛️ (2024)](https://www.youtube.com/watch?v=CgkZ7MvWUAA&t=5905s&ab_channel=BroCode)
- [Adding ESLint and Prettier to a ViteJS React project](https://stackademic.com/blog/adding-eslint-and-prettier-to-a-vitejs-react-project)

### Docs

- [React.dev/Learn](https://react.dev/learn)
- [React.dev/Learn/Tutorial: Tic-Tac-Toe](https://react.dev/learn/tutorial-tic-tac-toe) (#see [Tic-Tac-Toe [repo]](./_studies/tic-tac-toe) | [[see in action]](https://my-study-journal.vercel.app/day3-unit-converter/_studies/tic-tac-toe/dist))
- [Typechecking With PropTypes](https://legacy.reactjs.org/docs/typechecking-with-proptypes.html)

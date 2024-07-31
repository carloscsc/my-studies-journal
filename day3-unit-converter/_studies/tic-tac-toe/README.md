# Tic-Tac-Toe

**Note:** This repository is part of a personal project called [my-studies-journal](https://github.com/carloscsc/my-studies-journal). The goal is to organize the code, study materials, and personal projects I use daily. For more details, please visit the main page of the repository.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

[[SEE IN ACTION]](https://my-study-journal.vercel.app/day3-unit-converter/_studies/tic-tac-toe/dist)

Project based on the tutorial: [React.dev/Learn/Tutorial: Tic-Tac-Toe](https://react.dev/learn/tutorial-tic-tac-toe)

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
   git sparse-checkout set day3-unit-converter/_studies/tic-tac-toe
   ```
5. Checkout the files of the configured subfolder:
   ```sh
   git checkout
   ```
6. After cloning the folders, navigate to the project folder:

   ```sh
   cd day3-unit-converter/_studies/tic-tac-toe
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

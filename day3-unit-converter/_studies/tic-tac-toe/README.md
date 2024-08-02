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
## About the Dist Folder

In this project, the `dist` folder was included directly in the main `main` branch of the repository, which is generally not a good practice. Ideally, it should be separated into a dedicated production branch, and the `dist` folder should be ignored in the repository's `.gitignore` file. The reason for following this anti-pattern here is that this is a subfolder of a main repository hosted entirely on Vercel. This is the simplest way (that I know of for now) to deploy all the projects in the repository simultaneously without additional configuration. Since these projects are meant for learning and not production, the deployment doesn't need to be more sophisticated or technical. Keeping it simple is often the best approach. (in most cases)
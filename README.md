<h1 align="center">
  Template with React and TypeScript
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rbritox/template-react-ts?color=yellow">

  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/rbritox/template-react-ts?color=yellow">

  <img alt="GitHub repo size in bytes" src="https://img.shields.io/github/repo-size/rbritox/template-react-ts?color=yellow">

  <img alt="Code quality" src="https://api.codacy.com/project/badge/Grade/76f70dac6eb8494aa3f9b3cc6e6102dc">

  <img alt="Made by Rocketseat" src="https://img.shields.io/github/license/rbritox/template-react-ts">

  <br>

  <img alt="React.js version" src="https://img.shields.io/badge/React.js-v16.13.1-60dafb?style=flat&logoColor=60dafb&logo=react">

  <img alt="TypeScript version" src="https://img.shields.io/badge/TypeScript-v3.8.3-007acc?style=flat&logoColor=007acc&logo=typescript">
</p>

<h3 align="center">
  Index
</h3>

<p align="center">
  📝 <a href="#-about-the-project">The Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  🛠 <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  🏁 <a href="#-starting-the-project">Starting</a>
</p>

<br>

<h3 align="center">
  🚧 In Construction 🚧
</h3>

<br>

## 📝 About the project
This is a React.js template with TypeScript which I decided to leave in a repository to save time. So I don't need to install and configure some libraries, whenever I have to create a new project.

## 🛠 Technologies
- ⚛️ **[React.js](https://reactjs.org/)**
- 🟪 **[TypeScript](https://www.typescriptlang.org/)**
- 💅 *[Styled-Components](https://styled-components.com/)*
- 😁 *[Styled-Icons](https://styled-icons.js.org/)*
- 🎨 *[Polished](https://polished.js.org/)*
- 🗺 *[React Router DOM](https://reacttraining.com/react-router/web/guides/quick-start)*
- 🔌 *[Axios](https://nodemon.io/)*
- 🃏 *[Jest](https://jestjs.io/)*
- 🐺 *[Scaffdog](https://github.com/cats-oss/scaffdog#scaffdog-generate)*
- 📏 *[ESLint](https://eslint.org/)*
- ✨ *[Prettier](https://prettier.io/)*
- 🐭 *[EditorConfig](https://editorconfig.org/)*
- 🐶 *[Husky](https://github.com/typicode/husky)*
- 🚨 *[Commitlint](https://github.com/conventional-changelog/commitlint)*
- 🚦 *[cz-cli](https://github.com/commitizen/cz-cli)*
- 🚥 *[Lint-staged](https://github.com/okonet/lint-staged)*
- 🗂 *[Root-import](https://www.npmjs.com/package/babel-plugin-root-import)*

## ⚙️ How to use

### 🗄 Create Component:
To create a component, just run `yarn creating` and select / answer the questions that will appear in the terminal for 🐺 **Scaffdog** to do the job automatically. It will create a folder inside `src / components` with a file for the index and another for the styles.

### 🗃 Components:
Leave some components ready to be used: **Header**, Button and Input. All are fully customized as an example in the main file.

### 🎨 Colors:
The colors are selected from the theme (light / dark), which are in the `src/styles/theme` folder. Both are also fully customized, they can be removed or removed in any color, following the pattern that has already been configured, being necessary to insert or string of field characters in the file `src/styles/styled.d.ts.` To use these cores on a page or component, just follow the example of a global style file, eg: `color: $ {(props) => props.theme.colors.text};` and you don't need to import anything.

### 💾 Commit the Code:
To confirm the code, there are some rules that guarantee the commit standardization. That way, you can normally run `git add .`, Then `git commit` (without the `-m ""`). 🐶 **Husky** was configured, along with 🚨 **Commitlint**, 🚦**cz-cli** e 🚥 **Lint-staged**, that way some questions will be asked in the terminal and then you will check some rules in the code, finally, you can run `git push -u origin master` normally.

## 🏁 Starting the project
Clone the project: `git clone https://github.com/RBritoX/template-react-ts`

🖥 To run the **Front-End**, open terminal and execute the following commands:

````zsh
# to download the dependencies
$ yarn

# to start the application on port 3000
$ yarn start
````

🧪 To run the **Tests**, execute the following commands:

````zsh
# to start tests with Jest
$ yarn test
````

<br>

---

<h3 align="center">
  Made by Raphael Brito (RBritoX)
</h3>

<p align="center">
  <a href="https://www.linkedin.com/in/raphaellbrito/">
    <img alt="React.js version" src="https://img.shields.io/badge/LinkedIn-/in/raphaellbrito-0e76a8?style=flat&logoColor=white&logo=linkedin">
  </a>
  <a href="https://www.facebook.com/RaphaBrito">
    <img alt="React.js version" src="https://img.shields.io/badge/Facebook-/RaphaBrito-1778F2?style=flat&logoColor=white&logo=facebook">
  </a>
  <a href="https://www.instagram.com/raphaellbrito/">
    <img alt="React.js version" src="https://img.shields.io/badge/Instagram-@raphaellbrito-833AB4?style=flat&logoColor=white&logo=instagram">
  </a>
</p>

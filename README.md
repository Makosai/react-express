# React-Express Barebones

This react-express project utilizes webpack and comes with some VSCode settings to help you organize your work better.

#### Usage
**Webpack (Production):**
```sh
$ npm run build
```

**Webpack (Development):**
```sh
$ npm run build-dev
```

**Run Express Server:**
```sh
$ npm run server
```

#### VSCode Extensions
| Plugin | Description |
| ------ | ------ |
| [Beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify) | Beautify code in place for VS Code. |
| [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) | Support for dotenv file syntax. |
| [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) | Simple extensions for React, Redux and Graphql in JS/TS with ES7 syntax. |
| [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) | Integrates ESLint JavaScript into VS Code. |
| [MySQL](https://marketplace.visualstudio.com/items?itemName=formulahendry.vscode-mysql) | MySQL management tool. |
| [MySQL Syntax](https://marketplace.visualstudio.com/items?itemName=jakebathman.mysql-syntax) | MySQL syntax highlighting support. |
| [SQLTools](https://marketplace.visualstudio.com/items?itemName=mtxr.sqltools) | Your swiss knife SQL for VScode. Execute queries, auto complete, bookmarks etc. |
| [webpack](https://marketplace.visualstudio.com/items?itemName=jeremyrajan.webpack) | Create Webpack Config with ES6 transpiling using babel. |

#### Components
  - Express (/src/server)
  - React (/src/client)
  - MySQL (/src/server/db) [optional]
    - DB_* environmental variables (/.env)
  - Entrypoints (/src/{server|client}/index.js)
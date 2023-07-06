## Installation

1. Install required global dependencies

    ```sh
    npm install -g gatsby-cli husky
    ```

2. Install and use the correct version of Node using [NVM](https://github.com/nvm-sh/nvm)

    ```sh
    # <= v18.0.0
    nvm install X.Y.Z
    nvm use X.Y.Z
    ```

3. Install dependencies

    ```sh
    yarn install
    ```

4. Start the development server

    ```sh
    yarn start
    ```

## Building and Running for Production

1. Generate a full static production build

    ```sh
    yarn build
    ```

1. Preview the site as it will appear once deployed

    ```sh
    yarn serve
    ```

# Session 8 Summary - NPM & Webpack

- To `bundle` the JS code ==> `webpack` which needs ==> other `packages` with different versions --> which is impossible to manage
  - So we need **NPM**

## NPM:

1. init the project folder:
   - `npm init -y`
1. install a package as a dev dependency e.g: `webpack`
   - `npm install webpack --save-dev`
1. install package as a dependency
   - `npm install package-name`
1. After installing a package, `npm` makes a `package.json` file with the info of the packages and `node_modules` & `package-lock.json` for the packages themselves.

## Webpack:

1. Install `webpack` & `webpack-cli` packages through **NPM**
2. Make the `start` script in the `scripts` part of the `package.json`
3. Make `webpack.config.js` file and add for it the `entry module` so that webpack can start its work from it.
4. Add the `output` part to control the name of the output file & folder.
5. Run `npm run start` and notice the creation of the production folder.
6. move all the code you want to bundle or customize (`js/` & `css/` & `index.html`) into `src/` folder and edit the `entry` of the config file.
7. `import` css file into the entry module (app.js) to make webpack consider it.
8. Install `style-loader` & `css-loader`.
9. Add the loaders to the `module` part of the config file inside the `rules` array:
   ```javascript
   {
       test: /\.css$/,
       use: ["style-loader", "css-loader"]
   }
   ```
10. To make a production version of `.html` file also with the new pathes for `.css` & `.js` ==> install `html-webpack-plugin` package and use it in the `plugins` part of the config file after `require` it at the top of the file ==> `const HtmlWebpackPlugin = require("html-webpack-plugin")`

```javascript
plugins: [
  new HtmlWebpackPlugin({
    template: "./src/template.html"
  })
];
```

11. To extract `css` from `.js` file ==> install `mini-css-extract-plugin` package and add it to the `plugins` part and also into the `rules` after `require` it:
    ```javascript
    module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
    },
    plugins: [
    new MiniCssExtractPlugin({ filename: "styles.css" }),
    new HtmlWebpackPlugin({
      template: "./src/template.html"
    })
    ]
    ```
12. To minimize the output `.css` file ==> install `optimize-css-assets-webpack-plugin` package and use it in the `optimization` part of the config file after `require` it:

    ```javascript
    optimization: {
      minimizer: [new optimizeCss()];
    }
    ```

13. To reminimize the `.js` file ==> `require("terser-webpack-plugin")` and use it in the `optimization` part on the `minimizer` property.

**Resources**

1. [Webpack - full tutorial for beginners (Youtube)](https://www.youtube.com/watch?v=MpGLUVbqoYQ)
2. [Webpack crush course - traversy (Youtube)](https://www.youtube.com/watch?v=lziuNMk_8eQ)
3. Google for `What's webpack?` :smile:

**Search**

1. How webpack deals with images.
2. What's `Babel` and how to use it through webpack.

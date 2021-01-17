# Webpack 5 Boilerplate

A webpack 5 boilerplate using a common default configuration

## NPM Scripts

<span style="color:orange; font-weight:bold;">start</span> creates a production build in dist folder  
<span style="color:orange; font-weight:bold;">build</span> starts and opens a dev server on port 5001  
<span style="color:orange; font-weight:bold;">build-stats</span> creates a webpack-stats.json file in the project root. This can be used with tools such as [Webpack Analyzer](https://webpack.github.io/analyse/) or [Webpack vizualizer](https://chrisbateman.github.io/webpack-visualizer/)

## Development

run <span style="color:orange; font-weight:bold;">npm run start</span> to launch the dev server. Hot module replacement has been configured.

## Production Build

To start a production build run <span style="color:orange; font-weight:bold;">npm run build</span>. The build has been configured according to the below.

### Javascript

The entry point is **/src/main.js**. Files are built into **/dist/js**  
Babel has been configured to support browsers defined in .browerslistrc  
Babel will provide the neccessary polyfills when they are required

### HTML

Scripts and styles from the build will be injected into index.html

### Static Assets

Static assets in **/public** will be copied directly into the build output

### Assets

Assets that have been imported in javascript will be included in the build.  
Images will use the same file structure that were used in the src folder e.g. **src/img/folder1/folder2/xyz.png** will be built to **dist/img/folder1/folder2/xyz.png**

### Styles

Styles imported in javascript will be included in the build.  
CSS will be minified and output to **/dist/css** folder  
Custom fonts can be used via @font-face and a relative url  
Fonts will be output to **/dist/fonts**  
PostCSS has been configured for auto prefixing. Only prefixes that are required for browsers in .browerslistrc will be used used

### Caching

JS,CSS and images will be given content hashes in the file name for cache control

### Code Splitting

The webpack runtime has been split out to a separate bundle, **/dist/js/runtime.js**, so changes in the runtime do not cause unchanged code to be re-served

If there are vendor libraries that are used throughout the app, they could benefit from being split out from the main bundle because they do not change as often (e.g. React/React Dom). If this is required see the commented out **optimization.splitChunks.cacheGroups** setting in **webpack.prod.js**

Webpack is also setup out of the box for code splitting using dynamic imports.

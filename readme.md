# paid-license-chrome-extension

> Chrome Extension boilerplate created with React Typescript

Full Article → https://www.bekk.christmas/post/2020/12/creating-a-chrome-extension-with-react-and-typescript

## Getting started

Create a project based on this boilerplate.

```
$ npx degit https://github.com/sivertschou/react-typescript-chrome-extension-boilerplate.git <project-name>
```

Navigate to the project directory and install the dependencies.

```
$ npm install
```

To build the extension, and rebuild it when the files are changed, run

```
$ npm start
```

After the project has been built, a directory named `dist` has been created. You have to add this directory to your Chrome browser:

1. Open Chrome.
2. Navigate to `chrome://extensions`.
3. Enable _Developer mode_.
4. Click _Load unpacked_.
5. Select the `dist` directory.

# PWA Text Editor

## Overview

The PWA Text Editor is a comprehensive Progressive Web App designed to deliver an advanced and responsive text editing experience. Combining modern web technologies, offline capabilities, and efficient resource caching, this text editor aims to provide users with a seamless and feature-rich environment for creating and editing documents.

### Key Features

#### 1. Offline Editing

Experience uninterrupted text editing, even in offline mode. The service worker implementation ensures that users can continue working on their documents without an internet connection, and changes will be synchronized once connectivity is restored.

#### 2. Cross-Device Compatibility

The PWA Text Editor is responsive and adaptive to various devices, including desktops, tablets, and smartphones. The user interface adjusts dynamically to offer an optimal viewing and editing experience across different screen sizes.

#### 3. Efficient Caching Strategies

Utilizing the Workbox library, the app employs effective caching strategies such as CacheFirst, StaleWhileRevalidate, and more. This results in faster loading times, reduced server requests, and an overall smoother user experience.

#### 4. CodeMirror Integration

The text editor leverages CodeMirror, a versatile and powerful text editor component. CodeMirror provides advanced features such as syntax highlighting, line numbering, and customizable themes, enhancing the overall editing experience for users.

#### 5. IndexedDB Integration

To ensure persistent and reliable data storage, the app integrates IndexedDB. This low-level API allows the application to store large amounts of structured data client-side, facilitating seamless access to documents even when offline.

### Technologies Used


- **CodeMirror:** A versatile and extensible text editor implemented in JavaScript. CodeMirror enhances the text editing experience with features like syntax highlighting and theme customization.

- **IndexedDB:** A low-level API for client-side storage of large amounts of structured data. IndexedDB is utilized for storing and retrieving user documents.

- **Node.js:** A JavaScript runtime for server-side development. The application is powered by Node.js, providing a robust and scalable server environment.

- **Express.js:** A fast, unopinionated, minimalist web framework for Node.js. Express.js is used for building the server-side logic of the application.

- **Webpack (HTML-Webpack-Plugin, Babel, and CSS Loader):** A powerful bundler that handles module bundling, code splitting, and asset management. Webpack ensures an efficient build process for the application, including HTML, JavaScript, and CSS processing.

- **JavaScript:** The primary programming language for both client-side and server-side development.

- **Nodemon:** A utility that monitors for changes in the application and automatically restarts the server. Nodemon enhances the development workflow by providing a seamless development experience.

## Screenshots
![Screenshot 2024-01-17 at 11 53 34 AM](https://github.com/Devon2731/Text-Editor/assets/141438012/68112dd3-b379-4a23-a835-c8aefd39f149)

![Screenshot 2024-01-17 at 11 39 50 AM](https://github.com/Devon2731/Text-Editor/assets/141438012/8762f5a8-a406-4cfc-9ed3-7ff34d037e20)

![Screenshot 2024-01-17 at 11 55 49 AM](https://github.com/Devon2731/Text-Editor/assets/141438012/c0b5022f-c25c-4c56-9d7d-824aef75ee51)


![Screenshot 2024-01-17 at 11 49 06 AM](https://github.com/Devon2731/Text-Editor/assets/141438012/702ba0c8-a27d-43de-b62e-f48e4ba66d2b)

![Screenshot 2024-01-17 at 11 50 48 AM](https://github.com/Devon2731/Text-Editor/assets/141438012/58a4b2dc-544f-47ae-be8a-acd8079dcf95)

![Screenshot 2024-01-17 at 11 51 57 AM](https://github.com/Devon2731/Text-Editor/assets/141438012/1ae1b8d6-1371-4381-abd2-5077fd9d1fb7)

## Resources
- [CodeMirror Documentation](https://codemirror.net/)

## Liscense

This project is licensed under the MIT License

## Deployment

Heroku: https://text-editor-4-u-8bdc7830a542.herokuapp.com/

# Concierge

Concierge is a customizable messaging template application that allows users to generate personalized messages for hotel guests. The application provides a set of predefined message templates, and users can select a template, guest, and hotel company to generate a message. Additionally, users have the option to create custom message templates.

## Features and Functionality

- Load predefined message templates, guest information, and hotel company information from JSON files.
- Generate personalized messages based on selected template, guest, and hotel company.
- Support for custom message templates.
- Dynamic greeting based on the time of day (e.g., "Good morning," "Good afternoon," "Good evening").

## Getting Started

### Prerequisites

- Node.js

### Installation

- Clone the repository.

```sh
git clone  https://github.com/TimothyLuedtke/Concierge.git
```

- Navigate to the project directory.

```sh
cd Concierge
```

- Install NPM packages.

```sh
npm install
```

### Usage

- Start the application.

```sh
npm run start
```

- Open a browser and navigate to <http://localhost:3000>.

## Why JavaScript

- core technology of the web and is supported by all modern browsers
- allows you to build fast and scalable front-end and back-end applications
- easily supports JSON data
- large and active open-source community

### Dependencies

- [Node.js](https://nodejs.org/en/) - JavaScript runtime environment
- [Express](https://expressjs.com/) - Web application framework
- [EJS](https://ejs.co/) - Embedded JavaScript templating
- [Body-Parser](https://www.npmjs.com/package/body-parser) - Node.js body parsing middleware

## Future Improvements and Considerations

- Refactor code to improve readability and maintainability.
- Add testing.
- Add type checking with [TypeScript](https://www.typescriptlang.org/).
- Utilize a database to store data.
- Improve error handling and validation.
- Improve UI/UX design and accessibility.
- Improve performance through code optimization.
- Add features including unix timestamp conversion.

## Aside

- The goal was to create a working application in a short amount of time.
- Testing, refactoring, and additional features were not implemented due to time constraints.
- Console logs and running the program/reading errors were the main method for verifying the correctness of this program.
- The project was a fun challenge, and I look forward to improving the application in the future.
- Thank you for your consideration.

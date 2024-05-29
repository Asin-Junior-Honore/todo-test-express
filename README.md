

# To-Do Test Express

This is a web application built with Node.js and Express that allows users to create a to-do list. Users can add new tasks, view existing tasks, and prevent xss attacks and mored edge cases would be implemented in the future ✌️.

## Features

- **Add Tasks**: Users can add new tasks to their to-do list.
- **View Tasks**: Users can view their current list of tasks.
- **Prevent XSS Attacks**: The application is designed to prevent cross-site scripting (XSS) attacks by escaping HTML characters in user input.

## Usage

1. Clone the repository to your local machine:

```
git clone <repository-url>
```

2. Install dependencies:

```
npm install
```

3. Start the server:

```
npm start
```

4. Open your web browser and navigate to `http://localhost:3000` to access the application.

## Testing

This project uses Jest for unit testing and Supertest for integration testing. To run the tests, use the following command:

```
npm test
```

- **Jest**: Jest is a delightful JavaScript testing framework with a focus on simplicity. It provides a rich set of features such as test assertions, mocking, and coverage reporting.
- **Supertest**: Supertest is a high-level HTTP assertion library that works with any testing framework. It allows you to make HTTP requests and assert response properties, making it ideal for testing API endpoints.

## Contributing

Contributions are welcome! If you have any ideas for improvements or new features, feel free to open an issue or submit a pull request.

## Edge Cases

While this project covers many common use cases, there may still be edge cases that are not fully addressed. Future updates will aim to cover these additional scenarios.

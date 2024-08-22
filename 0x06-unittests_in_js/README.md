# Async Testing with Sinon and Chai

## Overview

This project demonstrates various aspects of testing JavaScript functions using Sinon and Chai, with a focus on spies, stubs, and async testing. It includes several exercises to help understand and apply these concepts effectively.

## Project Files

- **`utils.js`**: Contains the `Utils` module with a method for performing mathematical operations.
- **`3-payment.js`**: Defines the `sendPaymentRequestToApi` function that uses `Utils.calculateNumber`.
- **`3-payment.test.js`**: Tests `sendPaymentRequestToApi` to ensure it calls `Utils.calculateNumber` correctly and logs the expected output using Sinon spies.
- **`4-payment.js`**: Similar to `3-payment.js`, but utilizes Sinon stubs to control the behavior of `Utils.calculateNumber`.
- **`4-payment.test.js`**: Tests `sendPaymentRequestToApi` with Sinon stubs to ensure correct behavior and logging.
- **`5-payment.js`**: Copies the code from `4-payment.js` to test with Sinon hooks.
- **`5-payment.test.js`**: Uses `beforeEach` and `afterEach` hooks to manage spies and ensure correct function behavior.
- **`6-payment_token.js`**: Defines `getPaymentTokenFromAPI`, which returns a promise based on the input argument.
- **`6-payment_token.test.js`**: Tests `getPaymentTokenFromAPI` for proper resolution using async testing with the `done` callback.

## Key Concepts

1. **Spies**:
   - **Definition**: A tool to monitor function calls, including arguments and return values.
   - **Usage**: Used to verify that functions are called correctly and to track their interactions.

2. **Stubs**:
   - **Definition**: A function that replaces another function to control its behavior and provide predetermined responses.
   - **Usage**: Used to simulate specific behaviors without invoking actual implementations, useful for testing.

3. **Hooks**:
   - **Definition**: Functions that run before or after each test or suite of tests.
   - **Usage**: Manage setup and teardown tasks, such as setting up spies or stubs.

4. **Async Testing**:
   - **Definition**: Testing functions that return promises or perform asynchronous operations.
   - **Usage**: Ensures that asynchronous code executes correctly and that tests handle async operations properly using the `done` callback.


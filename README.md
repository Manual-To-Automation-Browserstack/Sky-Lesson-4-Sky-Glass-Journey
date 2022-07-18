![Logo](https://www.browserstack.com/images/static/header-logo.jpg)

# Manual To Automation @ SKY - Lesson 3 - Page Object Model in Playwright <a href="https://nodejs.org/en/"><img src="https://raw.githubusercontent.com/github/explore/60cd2530141f67f07a947fa2d310c482e287e387/topics/playwright/playwright.png" alt="playwright" height="22" /></a>

## Introduction

This example code provides the solution to the exam given at the end of the second lesson in the Manual To Automation @ SKY training series, but this time using the concept of the Page Object Model to streamline the code and make it more efficient and more in line with best practices. It is a simple Playwright application that opens a web page, opens the search hover, and performs a search.

We have 2 page objects for this example; Search and CookieConsent. The names are self-explanatory and our test files call the functions from these objects to perform the necessary actions. The functions are also declaratively named so it is highly readable.

---

## Installation

There are a few things that you will need before you can get started.

* NodeJS - use [this](https://phoenixnap.com/kb/install-node-js-npm-on-windows) guide for Windows and [this](https://nodesource.com/blog/installing-nodejs-tutorial-mac-os-x/) guide for Mac.
* Git for pulling down the code - follow [this]() guide for installing Git on all platforms. There are other useful guides on the website mentioned previously. Start [here](https://github.com/git-guides) anad follow through to the various links to learn more about Git. It will be very useful on your automation journey. If you have any issues with tokens or user credentials, let me know as this can trip a lot of people up.
* Visual Studio Code - You can download VS Code for free from [here](https://code.visualstudio.com/download). This is a very useful tool for writing and running your code as it has auto complete, and powerful debugging capabilities. [This](https://code.visualstudio.com/docs/introvideos/basics) is a handy starting point for how to get started with VS Code.

Once you have these installed, you are good to go to the next step.

Follow the below steps to get the code onto your local machine.

* Open a terminal. (Terminal on Mac, Command Prompt on Windows)
* Go to the directory where you want to place the code using [cd](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/cd) for Windows, and it functions mostly the same for Mac. You just use "cd" but the folder structure on Mac is different (/Users/username/Documents instead of C:/Users/username/Documents)
* Copy the following command into the terminal, (remember, you must have [Git](https://git-scm.com/downloads) installed)
```sh
git clone https://github.com/Manual-To-Automation-Browserstack/Sky-Lesson-3-POM.git.
```
* Move into the directory that you just cloned by typing
```sh
cd Sky-Lesson-3-POM
```
* When inside this directory, copy the following command and run it:
```sh
npm install
```
* Once all the dependencies are installed, you will be able to run the tests by using the following commands:
```sh
# Runs the test-pom.spec.js file
npm run first-test

# Runs the another-test-pom.spec.js file
npm run second-test

# Runs all of the files in the tests directory
npm run all

# Run all the tests while opening the browser locally (useful to see everything happening in real time.)
npm run headed
```

These scripts are useful to get started. You can add more as needed in the "scripts" section of the [package.json](./package.json) file. Once you have added one, you then simply run:

```sh
npm run <insert script name>
```

For a full list of the various command line options for running Plawright tests, see [this](https://playwright.dev/docs/test-cli) link.

# Page Object Model

The Page Object Model in [Playwright](https://playwright.dev/docs/test-pom) works mostly like other Frameworks do. A sample example of a Search object can also be found in the Playwright [docs](https://playwright.dev/docs/pom).

It is essentially a method of reducing the amount of repeated code in your tests to increase efficiency and remove duplication. The general rule of thumb is if you have found yourself writing the same code in more than one file, then it should most likely be refactored into a page object function.

The examples we have here are for clicking the Agree button in the Cookie Consent, which will need to be done whenever you go to the homepage or others, as each test will be a fresh session in most cases. By placing this code in a page object, we only need to call 2 lines instead of 4 - 7 in each test, and it also makes our code more readable. Then we have the search methods which include; clicking the search button, entering the text, and submitting the search. All of this takes > 10 lines of code, but when we call these functions it will be reduced to 4. It is also highly likely that a search will need to be performed in multiple tests.

When deciding what should be a page object, it is often useful to sit down and map out what your tests do to identify repeated functionality and patterns that can be streamlined using the POM.
# weather app

## Getting Started

### Install dependencies

`yarn install`

### Running the app

`yarn start`

### Running the test

`yarn test`

## Coding Exercise

Write an application that gives you the weather forecast for any searchable city.

## Acceptance Criteria

A user can search for any city and get the weather forecast.
In the search result, a user can see the current weather status and the weather for the next 5
days.

## Frameworks and Libraries

We recommend React 16, TypeScript, RxJS, styled-components, and ES6; however, may use
other libraries/frameworks.
You may use any CSS frameworks/UI component libraries to make your life easier, but we
would also like to see your styling skills.

## What We Are Looking For

- How you architect and scaffold an application
- Clean, readable and maintainable component design
- SOLID principles/Best practices
- Clear Data Flow and State Management
- TDD (we use Jest)

## Other

- We would like to run your application, so please provide a clear description of how to run
  and test your project.
- We don't have any time limit for this test, but we believe you can finish it within a few
  hours.
- We would like to see a production quality project, so let us see your understanding of it
  from the application code and build process.
- Please provide feedback on how you feel you went with the project and explain to us, at a
  high-level, your technical and architectural decisions.

## Feedback

Overall the project is fun to build it, for this project I have decided to use create react app, typescript and material ui package to help me to set up the project.

The reason to use:

- create react app: Easy to setup the enviroment.
- typescript: secure type.
- material ui: UI components
- react testing library + jest: unit testing
  
At the moment I only used `useState` to store the value, since we dont have much data need to save and render it in other pages. In future, if we have more values, probably can change to `context` or `redux` to manage the state. Also, I have create a `alert` context, if the api call fail to return result. it will show up the error message.

if is production env, I will change

- create react app to webpack build
- typescript
- styledCompoennt 
- react test library + jest
- redux
- storybook

## Sample endpoints

- https://developer.yahoo.com/weather/
- https://openweathermap.org/

## Hint

- http://erikflowers.github.io/weather-icons/

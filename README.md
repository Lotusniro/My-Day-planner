# My-Day-planner
This is a Day planner use to plan and track my daily tasks.

## Description

This is a Day planner use to plan and track my daily tasks. It is a simple calendar application that allows the user to save events for each hour of the day. This app runs in the browser and feature dynamically updated HTML and CSS powered by jQuery.
- current day and time is set at the top of the calendar using Day.js library.
  ![screenshot
](https://github.com/Lotusniro/My-Day-planner/blob/main/screenshots/Screenshot%202024-01-19%20at%2019.16.10.png)
- In the first function I used if else statement to change the colour of the time blocks to indicate whether that time slot is in the past, present, or future. if the current time and colour block id is same then it is present(RED) and if the current time is greater than the colour block id then it is past(GREY) and if the current time is less than the colour block id then it is future(GREEN).
![screenshot
](https://github.com/Lotusniro/My-Day-planner/blob/main/screenshots/Screenshot%202024-01-19%20at%2019.16.18.png)- In the second function is kind a event listener which is used to save the user input in the local storage. I used button's parent as a key and button's sibling as a value to save the user input in the local storage.setitem is used to save the user input in the local storage.
![screenshot
](https://github.com/Lotusniro/My-Day-planner/blob/main/screenshots/Screenshot%202024-01-19%20at%2019.16.36.png)- In the third function is used to get the user input from the local storage and display it in the time block. I used button's parent as a key to get the user input from the local storage. getitem is used to get the user input from the local storage.
[screenshot
](https://github.com/Lotusniro/My-Day-planner/blob/main/screenshots/Screenshot%202024-01-19%20at%2019.16.42.png)
## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation

To install this application, clone the code into your terminal for the respective repository.

## Usage

This application is used to plan and track my daily tasks.

## Credits

Teachers, google,youtube,stackoverflow, and w3schools,time js library,jquery,bootstrap,fontawesome,google fonts.


## License

MIT License

## Badges

N/A

## Features

N/A

## Contributing

N/A

## Tests

N/A

## Questions

Github: Lotusniro

## url
![gitty
](https://github.com/Lotusniro/My-Day-planner)https://github.com/Lotusniro/My-Day-planner

![deploy
](https://lotusniro.github.io/My-Day-planner/)https://lotusniro.github.io/My-Day-planner/

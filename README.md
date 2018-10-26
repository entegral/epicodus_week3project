# _Beep Boop_

#### By _**Robert Bruce**_

## Description

A web application that takes a number from a user and returns a list of numbers, from 0 up to the number provided by the user, with the following exceptions:

* Numbers that contain a 0 are replaced (all digits) with "Beep!"
* Numbers that contain a 1 are replaced (all digits) with "Boop!"
* Numbers divisible by 3 are replaced with "I'm sorry, Dave. I'm afraid I can't do that."


## Setup/Installation Requirements

* _Go to https://github.com/entegral/epicodus_week3project_
* _Clone this project or download zip and extract contents_
* _Open the index.html file with your Web Browser_
* _Follow the instructions therein_

## Technologies Used
_GitHub, HTML, CSS, Bootstrap, Javascript, JQuery_

## Learning Objectives

- [ ] **Logic is broken down into "plain English" specs, listed in README.**

- [x] **JavaScript business logic and user interface logic are separate.**

- [x] **Application implements a loop and works as expected.**

- [x] Variable names are descriptive and use lower camel case (e.g. myVariableExample).

- [x] Code is clean, well-refactored, and easy-to-read. This includes correct indendation, spacing, and including only necessary comments and debugging tools.

- [x] All previous objectives have been met.

- [x] Project is in a presentable, portfolio-quality state.

- [x] Required functionality is in place by Friday deadline.

- [x] Project demonstrates understanding of this week's concepts. If prompted, you are able to discuss your code with an instructor using correct terminology.

## Additional Objectives

- [ ] Add images and other custom aesthetics.

- [x] Implement different behaviors/effects/images for different inputs.

- [x] Include an option that returns the output in reversed order (beginning with the largest number).

- [x] Add a second form field that takes a name. For numbers that are divisible by 3, replace the name Dave in "I'm sorry, Dave. I'm afraid I can't do that" with the name provided by the user.


## Specifications

- [x] Program replaces numbers containing "0" with "Beep!"
```
* Input: 0
* Output: ["Beep!"]
```
- [x] Program replaces numbers containing "1" with "Boop!"
```
* Input: 1
* Output: ["Boop!"]
```
- [x]  Program replaces numbers divisible by "3" with "Boop!"
```
* Input: 3
* Output: ["I'm sorry, Dave. I'm afraid I can't do that."]
```
- [x]  Program generates array counting/iterating up to a given number
```
* Input: 9
* Output: Beep, Boop, I'm sorry, Dave. I'm afraid I can't do that, 4, 5, I'm sorry, Dave. I'm afraid I can't do that, 7, 8, I'm sorry, Dave. I'm afraid I can't do that."
```
- [x]  Program iterates through array, and pushes rule-based output to 1st index position of each element in array
```
* Input: [[0],[1],[2],[3]]
* Output: [[1,"Beep!"],[1,"Boop1"],[2,"2"],[3,"I'm sorry, Dave. I'm afraid I can't do that"]]
```

### License
Copyright (c) 2018 **_RB_** MIT license.

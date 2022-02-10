# FlexionCodingChallenge
  Users of this program are science teachers who teach the "Unit Conversion" science unit. The application assists in helping teachers grade unit-conversion problems distributed on paper worksheets. Teachers will be able to enter the questions and the student responses into the program to be graded.

  The program can convert temperature units (Kelvin, Celsius, Fahrenheit, Rankine) as well as volume units (liters, tablespoons, cubic-inches, cups, cubic-feet, gallons).

  When data is entered into the appropriate form, the program will acknowledge if the student response is correct or incorrect. If an entry is wrong, the result will be invalid.

## How to Access
  The program can be accessed [by clicking this link.](http://flexioncodingchallenge-maxm.s3-website.us-east-2.amazonaws.com/)

## Improvements to Solution
  Below are the next improvements I would make to the program, in order of priority.

    1) The core code that converts the input numerical value is too clunky. I feel at the very least, the if else chain inside the converter component could be refactored into a switch statement. Additionally, the conversion equations are all so similar, so I feel like with a little extra thought I could reduce the number of equations in half by using the inverse of each equation. Although I will say that feels like more of a math problem than a programming problem. 

    2) Add a grading component. I'd like to add a button at the bottom of the Answer History table that returns a percentage of correct responses to easily offer the student a grade.

    3) To further improve on the grading button, I'd like to add a service that is connected to the back end so grades can be stored by student name and/or class.

    4) A small improvement would be to add logic so that invalid answers can't even be submitted. For example, if the input unit of measure is Celsius, then Celsius could be removed from the target unit of measure list.
    
    5) The styling needs improvement both in the overall look/feel and in the functionality when screen size fluctuates.

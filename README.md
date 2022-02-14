# FlexionCodingChallenge
  Users of this program are science teachers who teach the "Unit Conversion" science unit. The application assists in helping teachers grade unit-conversion problems distributed on paper worksheets. Teachers will be able to enter the questions and the student responses into the program to be graded.

  The program can convert temperature units (Kelvin, Celsius, Fahrenheit, Rankine) as well as volume units (liters, tablespoons, cubic-inches, cups, cubic-feet, gallons).

  When data is entered into the appropriate form, the program will acknowledge if the student response is correct or incorrect. If an entry is wrong, the result will be invalid.

## How to Access
  The program can be accessed [by clicking this link](http://flexioncodingchallenge-maxm.s3-website.us-east-2.amazonaws.com/) or typing http://flexioncodingchallenge-maxm.s3-website.us-east-2.amazonaws.com/ into your browser.

## Improvements to Solution
  Below are the next improvements I would make to the program, in order of priority.
  
1) The core code that converts the input numerical value is too clunky. I feel at the very least, the if else chain inside the converter component could be refactored into a switch statement. Additionally, the conversion equations are all so similar, so I feel like with a little extra thought I could reduce the number of equations in half by using the inverse of each equation. Although I will say that feels like more of a math problem than a programming problem. 


    1) Implement CI/CD. This is first primarily because it is something that Flexion asked for. If it wasn't explicitly part of the challenge prompt, it likely would be midway down this list.

    2) Implement TDD. I was taught to always test your code. However, I've never put tests together in Angular and wasn't able to implement within this timeframe.

    3) DRY out the code. I refactored to DRY out some of the conversion process, but realize there was room for improvement. For example, instead of writing my own conversion functions, if I utilized an API (there are plenty to be found with a quick google search), I could have improved efficiency. APIs are realtively new to me (only have implemented once before), so I was unable to act on this idea in the time I had between coming up with the idea and reviewing this code with Flexion.

    4) Utilize Angular in a way that better utilized its strengths. Reading through Angular documentation in this process, I realize I misused components. From my understanding, their purpose is to allow code to be reusable, and I don't feel I took advantage of that. For example, leaving grading and converting within the same component doesn't make sense if the program were to grow into other areas of grading.

    5) To further improve on the grading button, I'd like to add a service that is connected to the back end so grades can be stored by student name and/or class.

    6) A small improvement would be to add logic so that invalid answers can't even be submitted. For example, if the input unit of measure is Celsius, then Celsius could be removed from the target unit of measure list.

    7) Another small improvement would be to change the dropdown menus to radio buttons on the converter forms. It'd save the teacher a single click on each problem.

    8) The styling needs improvement both in the overall look/feel and in the functionality when screen size fluctuates. 
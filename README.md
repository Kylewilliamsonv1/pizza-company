 # _Pizza Company_

#### _Pizza Price Calculator_

#### By _**Kyle Williamson**_

## Technologies Used

* _Javascript_
* _Bootstrap_
* _CSS_
* _HTML_

## Description

_This application purpose is to return the cost for a pizza based on the user's input of size and toppings._

## Setup/Installation Requirements

* Clone repository from github.com
* Open folder titled pizza-company'
* Open index.html file

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* The calculator current;y only gives the user the option to select 1 topping.

## License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contact Information

_kylewilliamsonv1@gmail.com_ 


# Describe: 
Pizza()

Test: 
It should create a Pizza object that that include properties toppings and size. 
Code:
Pizza(toppings, size)
Expected Output: 
Pizza {toppings: , size: }

Test: 
It should take the the size of the pizza and multiply it by $1.5/in.
Code: 
Pizza.prototype.cost = function (10) {
return this.size * 1.5 } 
Expected Output: 
15

Test:
It should add 1 to topping price for each topping.
Code:
Pizza.prototype.topCost = function ("Pepperoni", "Olives", "Artichoke" , "Cheese") 
Expected Output: 4



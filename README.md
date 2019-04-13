# _Putt Putt Pizza_

#### _A pizza ordering frontend, 2019_

#### By _**Nathan**_

## Description

_A test application illustrating JavaScript Objects_

## Setup/Installation Requirements

* _Run in any web browser that supports JS_

## Known Bugs

_There is currently no checkout button, and no finish order screen_

## Support and contact details

_If you have any questions reach out to me_

## Technologies Used

_JS_

### License



### BDD Specs
|Description|Input|Output|
|-|-|-|
|When I add a new order item it will at an element to the array|order.addItems|order.orderItems[0] != undefined|
|Add to pizza will add an element to options array| addToPizza("item")| options["item"]|
|Add to pizza will not add certain items twice (crust/size)| addToPizza("item"), addToPizza("item")| options["item"]|


Copyright 2019 Nathan

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

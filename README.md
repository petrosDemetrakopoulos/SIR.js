# SIR.js

SIR.js is a JS library implementing the SIR epidemic simulation model.

# Installation
```
npm i --save sir.js
```

# Example
```
let SIRjs = require('sir.js');

let solution = SIRjs.solve({S0: 0.9, I0: 0.1, R0: 0.0, t:1, N: 500});
SIRjs.printChart(solution);
```

# Functions

It has only 2 functions: ```solve()``` and ```printChart()```
```solve()``` function takes an object argument with the following keys:
* S0: Initial S (Susceptible) value
* I0: Initial I (Infectious) value
* R0: Initial R (Recovered) value
* t: The time step
* N: The time span (in units of time) aka the length of the simulation

It return an array of objects that contain S,I and R values for each moment.

```printChart()``` function prints an ASCII chart for each one of the S,I,R variables

i.e
```
=========== S ===========

-0.00┤                       ╭────────────────────────────────────────────────────────────────────────────
-0.01┤                ╭─────╯
-0.02┤             ╭──╯
-0.04┼─╮         ╭─╯
-0.05┤ ╰──╮    ╭─╯
-0.06┼    ╰────╯


=========== I ===========

 0.03┤ ╭─────╮
 0.02┼─╯     ╰─╮
 0.01┼         ╰─╮
 0.00┤           ╰─╮                         ╭────────────────────────────────────────────────────────────
-0.01┤             ╰─╮         ╭────────────╯
-0.02┤               ╰─────────╯


=========== R ===========

 0.04┼         ╭──────╮
 0.03┤      ╭──╯      ╰───╮
 0.02┤   ╭──╯             ╰────╮
 0.02┤╭──╯                     ╰─────╮
 0.01┼╯                              ╰───────────╮
 0.00┤                                            ╰───────────────────────────────────────────────────────
```

# License
SIR.js is licensed under MIT license.
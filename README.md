# SIR.js

SIR.js is a JS library implementing the SIR epidemic simulation model.

# Installation
```
npm i --save sir.js
```

# Example
```
let SIRjs = require('sir.js');

let solution = SIRjs.solve({S0: 100, I0: 10, R0: 0, t:1, N: 10, beta: 0.8, gamma: 0.4});
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
* beta: The parameter controlling how often a susceptible-infected contact results in a new infection
* gamma: The rate an infected recovers and moves into the resistant phase

It returns an array of objects that contain S,I and R values for each moment.

```printChart()``` function prints an ASCII chart for each one of the S,I,R variables

i.e
```
=========== S ===========

00.00   ┼────╮
87.95   ┤    ╰───╮
75.90   ┤        ╰─────╮
63.84   ┤              ╰───╮
51.79   ┤                  ╰─────╮
39.74   ┤                        ╰───────────╮
27.69   ┤                                    ╰──


=========== I ===========

22.27   ┤              ╭───────╮
20.23   ┤          ╭───╯       ╰───╮
18.18   ┤        ╭─╯               ╰───╮
16.14   ┤      ╭─╯                     ╰───╮
14.09   ┤  ╭───╯                           ╰─╮
12.05   ┤╭─╯                                 ╰──
10.00   ┼╯


=========== R ===========

70.63   ┼                                  ╭────
58.86   ┤                            ╭─────╯
47.08   ┤                      ╭─────╯
35.31   ┤                ╭─────╯
23.54   ┤          ╭─────╯
11.77   ┤    ╭─────╯
 0.00   ┼────╯
```

# License
SIR.js is licensed under MIT license.
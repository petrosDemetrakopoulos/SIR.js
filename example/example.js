let SIRjs = require('../index.js');

let solution = SIRjs.solve({S0: 100, I0: 10, R0: 0, t:1, N: 10, beta: 0.8, gamma: 0.4});
SIRjs.printChart(solution);
let SIRjs = require('../index.js');

let solution = SIRjs.solve({S0: 0.9, I0: 0.1, R0: 0.0, t:1, N: 100});
SIRjs.printChart(solution);
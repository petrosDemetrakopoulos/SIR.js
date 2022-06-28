const asciichart = require ('asciichart');
let solution = [];
let beta = 0.35;
let gamma = 0.1;
let n = 1;
let i = 0;
const RungeKutta4 = require('runge-kutta-4');
const SIRModel = function (t, y) {
    //the differential equation
    let dydt = [];
    let S = y[0];
    let I = y[1];
    let R = y[2];
    let dS_dt = -(beta * S * I) / n;
    let dI_dt = (beta * S * I) / n - (gamma * I);
    let dR_dt = gamma * I;
    solution.push({S: S, I: I, R: R});
    dydt[0] = dS_dt;
    dydt[1] = dI_dt;
    dydt[2] = dR_dt;
    i++;
    return dydt;
};

const solve = function (options) {
    let dt = options.t; // time step
    let t0 = 0;
    n = options.I0 + options.S0 + options.R0; //n is the total population so it is the sum of the I0,S0,R0
    beta = options.beta;
    gamma = options.gamma;
    let y0 = [options.S0, options.I0, options.R0]; //initial values of the differential equation
    let integrator = new RungeKutta4(SIRModel,t0,y0,dt); //solve the differential equation using the 4th order Runge-Kutta numerical method
    integrator.steps(options.N); //solve for N steps
    return solution;
};

const printChart = function (sol) {
    let config = {
        offset:  5,
        padding: '     ',
        height:  6
    };
    let S = [];
    let I = [];
    let R = [];
    for (let i = 0; i < sol.length; i++) {
        S[i] = sol[i].S;
        I[i] = sol[i].I;
        R[i] = sol[i].R;
    }
    console.log("=========== S ===========\n");
    console.log (asciichart.plot(S, config));
    console.log("\n");
    console.log("=========== I ===========\n");
    console.log (asciichart.plot(I, config));
    console.log("\n");
    console.log("=========== R ===========\n");
    console.log (asciichart.plot(R, config));
};

module.exports = {
    solve: solve,
    printChart: printChart
};
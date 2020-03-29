var asciichart = require ('asciichart');
var solution = [];
var beta = 0.35;
var gamma = 0.1;
var n = 1;
var i = 0;
var RungeKutta4 = require('runge-kutta-4');
var SIRModel = function (t, y) {
    var dydt = [];
    var S = y[0];
    var I = y[1];
    var R = y[2];
    var dS_dt = -(beta * S * I) / n;
    var dI_dt = (beta * S * I) / n - (gamma * I);
    var dR_dt = gamma * I;
    solution.push({S: S, I: I, R: R});
    dydt[0] = dS_dt;
    dydt[1] = dI_dt;
    dydt[2] = dR_dt;
    i++;
    return dydt;
};

var solve = function (options) {
    var dt = options.t; // time step
    var t0 = 0;
    n = options.I0 + options.S0 + options.R0;
    beta = options.beta;
    gamma = options.gamma;
    var y0 = [options.S0, options.I0, options.R0];
    var integrator = new RungeKutta4(SIRModel,t0,y0,dt);
    integrator.steps(options.N);
    return solution;
};

var printChart = function (sol) {
    var config = {
        offset:  5,
        padding: '     ',
        height:  6
    };
    var S = [];
    var I = [];
    var R = [];
    for (var i = 0; i < sol.length; i++) {
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
var euler = require('ode-euler');
var asciichart = require ('asciichart');
var solution = [];

var SIRModel = function (dydt, y, t) {
    var beta = 0.35;
    var gamma = 0.1;
    var S = y[0];
    var I = y[1];
    var R = y[2];
    var dS_dt = -beta * S * I;
    var dI_dt = beta * S * I - gamma * I;
    var dR_dt = gamma * I;
    solution.push({S: dS_dt, I: dI_dt, R: dR_dt});
    dydt[0] = dS_dt;
    dydt[1] = dI_dt;
    dydt[2] = dR_dt;
    return dydt;
};

var solve = function (options) {
    var dt = options.t; // time step
    var t0 = 0;
    var y0 = [options.S0, options.I0, options.R0];
    var integrator = euler( y0, SIRModel, t0, dt);
    integrator.steps(options.N);
    return solution;
};

var printChart = function (sol) {
    var config = {
        offset:  2,
        padding: '     ',
        height:  5
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
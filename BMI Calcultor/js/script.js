'use strict'

let jeffMass=66;
let jeffHeight=2;

let toddMass=77;
let toddHeight=1.8;

function bmiCalc(mass,height)
{
    let bmi=mass/(height*height);
    return bmi;
}

let bmiOfjeff=bmiCalc(jeffMass,jeffHeight);
let bmiOftodd=bmiCalc(toddMass,toddHeight);
//console.log(bmiOfjeff)
//console.log(bmiOftodd)

bmiOfjeff>bmiOftodd?console.log(`Is Jeff's BMI higher than Todd ? True`) :
            console.log(`Is Jeff has BMI higher than Todd ? False`) 
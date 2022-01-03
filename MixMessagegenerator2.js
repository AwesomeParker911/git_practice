console.log(`Ready for some exercise?`);
console.log(`Check out today's routine:`);


function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
};

const workoutset = {
    upper: ['push up','bench press','pull up','dumbbell biceps curl'],
    leg: ['squats','dead lifts','Barbell Jammer Press','step up','leg press'],
    rep: [5,10,12,15,20],
    group:[2,3,4,5],
};

let workout1routine = [];

const generateWorkout = function() {
    for (let key in workoutset) {
        let keyvalueindex = generateRandomNumber(workoutset[key].length);
        if (key = 'upper') {
            workout1routine.push(`Upper body exercise: ${workoutset[key][keyvalueindex]}`)
        } if (key = 'leg') {
            workout1routine.push(`Lower body exercise: ${workoutset[key][keyvalueindex]}`)
        } if (key = 'rep') {
            workout1routine.push(`Rep: ${workoutset[key][keyvalueindex]}`)
        } if (key = 'group') {
            workout1routine.push(`Total group: ${workoutset[key][keyvalueindex]}`)
        }
        break
    };
};

generateWorkout();
console.log(workout1routine);
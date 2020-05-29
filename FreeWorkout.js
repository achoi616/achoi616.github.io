
// Bodyweight
var body = [
    'Run: 6 x 400 meters, rest 1:30 between each set',
    '300 Squats for time',
    '10 Rounds: 10 Push-ups, 20 Hollow Rocks, 30 Alt. Reverse Lunges',
    'Run: 5K for time!',
    '7 rounds: 7 Strict Handstand Push-ups, 14 V-ups',
    '150 Push-ups for time',
    '5 rounds: 10 Hollow Rocks, 10-second Hollow Hold, 10 V-ups',
    '6-8 rounds: 50 meter Sprint, rest 1:30 between each set',
    '5 rounds: 10 Jump Squats, 10 Broad Jumps, 10-second Isometric Squat, rest :45-seconds each round',
    'Run: 8 x 200 meters, rest 1:00 between each set',
    'Run: 30-minutes for distance, every 3-minutes perform 15 Air Squats',
    '20 Wide Pull-ups, 20 Commando Pull-ups, 20 Chin-ups, 20 Narrow Grip Pull-ups, 20 Jumping Pull-ups',




    
]

function bodyWeight() {
    var randomNumber = Math.floor(Math.random() * (body.length));
    document.getElementById('workoutDisplay').innerHTML = body[randomNumber];
}

// Equipment
var equipment = [
    '5x5 Barbell Back Squats, rest 2:00 between each set',
    '21-15-9: Barbell Thrusters and Strict Pull-ups, weight: 95#',
    'Row, 20 Rounds: 30 seconds Hard, 30 seconds Light',
    '10x3 Sumo Deadlifts at 55-65% of 1-rep max',
    '100 Thrusters for time, weight: 45#',
    '5 rounds: 8 Single Arm Dumbbell Press, 8 Single Arm Rows, increase weight each round',
    '3 rounds: 5 Sandbag Cleans, 50-meter Sandbag Carry, weight: 100-150#',
    'Complete the following: 100 Banded Tricep Extensions, 100 Banded Bicep Curls, 100 Banded Pull-aparts',
    '10x10 Front Squats, rest 1:30 between each set',
    '21-15-9: Barbell Squats and Kettlebell Squats, weight: Bodyweight for Squats, 25% of Bodyweight for Swings',
    '4 rounds: 8 Barbell Bench Press and 8 Pendlay Rows, increase weight each round',
    '6 sets of Clean Complex: 3 Deadlifts + 2 Power Cleans + 1 Hang Squat Clean, increase weight each set',
    

    



    
]

function equipMent() {
    var randomNumber = Math.floor(Math.random() * (equipment.length));
    document.getElementById('workoutDisplay').innerHTML = equipment[randomNumber];
}

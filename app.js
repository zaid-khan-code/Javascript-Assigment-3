//======================================================
//                   Tasks 1.1
//======================================================


// const set = new Set();

// console.log(set);
// console.log(set.size);
// set.add({ name: "zaid", age: 16 })
// console.log(set);
// console.log(set.size);
// set.add(["zaid", 16])
// console.log(set);
// console.log(set.size);
// set.add(NaN)
// console.log(set);
// console.log(set.size);

// set.add(NaN)
// console.log(set);
// console.log(set.size);
// set.add(NaN)
// console.log(set);
// console.log(set.size);
// let obj = { name: "zaid", age: 16 };
// set.add(obj)
// console.log(set);
// console.log(set.size);
// set.add("help")
// console.log(set);
// console.log(set.size);
// set.add(NaN)
// obj.name = "Ali khan"
// console.log(set);
// console.log(set.size);



//======================================================
//                   Tasks 1.2
//======================================================



// let normalObj = {};
// let mapObj = new Map();

// normalObj['first'] = "One";
// mapObj['first'] = "One";
// console.log(normalObj);
// console.log(mapObj);



// normalObj[2] = "Two";
// mapObj[2] = "Two";
// console.log(normalObj);
// console.log(mapObj);


// normalObj[NaN] = 10;
// mapObj[NaN] = 10;
// console.log(normalObj);
// console.log(mapObj);


// // =======================
// console.log(`Map Values `);
// console.group();
// console.log(mapObj.first);
// console.log(mapObj.NaN);
// console.log(mapObj[2]);
// console.groupEnd();
// // =======================




// // =======================
// console.log(`Normal Obj Values `);
// console.group();
// console.log(normalObj.first);
// console.log(normalObj.NaN);
// console.log(normalObj[2]);
// console.groupEnd();
// // =======================




//======================================================
//                   Tasks 2.2
//======================================================


// function student(name = "Unkonwn",rollNum = "0000") {
//     console.log(`Input values : first = ${name}
//         ,Second =  ${rollNum}`);
//     return `Hello Dear Student named ${name} and roll number ${rollNum}`

// }

// // let student1 = student(undefined,undefined);
// // console.log(`First with Undefined :${student1}`);



// let student2 = student(null,undefined);
// console.log(`First with Undefined :${student2}`);


// let student3 = student(null,null);
// console.log(`First with Undefined :${student3}`);


// let student4 = student(undefined,null);
// console.log(`First with Undefined :${student4}`);



//======================================================
//                   Tasks 2.2
//======================================================









//======================================================
//                   Tasks 3.1
//======================================================



// let ranNum = () => {
//     const ran = Math.ceil(Math.random() * 10).toFixed(0)
//     console.log(`Value stored is changeable every time fuction is call again value : ${ran}`);

// }


// setTimeout(function argumentFun() {
//     console.log(`I am a function that is set as arguments i can be arrow function and other hoooooo`);

// },1000)



// ranNum()



// function returningAnotherFun() {
//     return function returnedFun() {
//         console.log(`I am consoling from another function hoo`);
//     }
// }

// let returnedFunVar = returningAnotherFun()
// console.log(returnedFunVar());




//======================================================
//                   Tasks 3.2
//======================================================


// function controller(func) {
//     let num = Math.floor(Math.random() * 5) + 1;
//     console.log(`Running the function these many ${num} times`);
//     for (let i = 0; i < num; i++) {
//         console.log(`function these many times :${i}
//             Action runed result = ${func(i)}`);
//         }
//     }


//     function behavior1(run) {
//         return `Behavior 1: Calmly running task #${run}`;
//     }



//     function behavior2(run) {
//         return run > 2 ? `Behavior 2: Ugh, still running #${run}` : `Behavior 2: Okay, task #${run} is fine`;
//     }


// const behavior3 = (run) => {
//     return `Behavior 3: Random number for run ${run}: ${Math.floor(Math.random() * 100)}`;
// }

// controller(behavior1)
// controller(behavior2)

// controller(behavior3)



//======================================================
//                   Tasks 4.1
//======================================================




// function fun1(next) {
//     next();
//     console.log("fun 1: Started");
// }

// function fun2(next) {
//     next();
//     console.log("fun 2: ");
// }

// function fun3(next) {
//     next();
//     console.log("fun 3: ");
// }

// function fun4() {
//     console.log("fun 4: ");
// }


// function megaFun() {
//     console.log("Starting the Functions");

//     fun1(() => {
//         fun2(() => {
//             fun3(() => {
//                 fun4();
//             });
//         });
//     });

//     console.log("Function called, waiting for functions...");
// }

// megaFun();

//======================================================
//                   Tasks 4.2
//======================================================

// function stepOne(callback) {
//     console.log("Step 1: start");
//     setTimeout(() => {
//         console.log("Step 1: asynchronous code ");

//     }, 1000)
//     console.log("Step 1: end");
//     callback();
// }

// function stepTwo(callback) {
//     console.log("Step 2: start");
//     setTimeout(() => {
//         console.log("Step 2: asynchronous code ");

//     }, 1000)
//     console.log("Step 2: end");
//     callback();
// }

// function stepThree() {
//     console.log("Step 3: start");
//     setTimeout(() => {
//         console.log("Step 3: asynchronous code ");

//     }, 1000)
//     console.log("Step 3: end");
// }

// stepOne(() => {
//     stepTwo(() => {
//         stepThree();
//     });
// });


//======================================================
//                   Final PRoject
//======================================================

function executeTasks(tasks, callback, config = { delay: 1000 }) {
    console.log("Excutions Logs");
    
    tasks.forEach((task,name) => {
        setTimeout(() => {
            task();
            callback(name);
        }, config.delay);
    }
    );
}
const tasks = new Map();

tasks.set("Task A", () => console.log("Task A executed"));
tasks.set("Task B", () => console.log("Task B executed"));
tasks.set("Task C", () => console.log("Task C executed"));
console.log(tasks);

executeTasks(
    tasks,
    (taskName) => console.log(`Callback after ${taskName}`),
    { delay: 1000 }
);

// Excutions Logs
// Task A executed
// Callback after Task A
// Task B executed
// Callback after Task B
// Task C executed
// Callback after Task C


// First all the setTimeout runed immediantly 
// Second Like i wanted to make them go one by one 


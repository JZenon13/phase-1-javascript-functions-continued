// // code your solution here

// function saturdayFun(activity = "roller-skate") {
//   return `This Saturday, I want to ${activity}!`;
// }

// let mondayWork = function (activity = "go to the office") {
//   return `This Monday, I will ${activity}.`;
// };

// function wrapAdjective(adj = "*") {
//   return function (word = "special") {
//     return `You are ${adj}${word}${adj}!`;
//   };
// }

function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(adj = "*") {
  return function (par = "special") {
    return `You are ${adj}${par}${adj}!`;
  };
}

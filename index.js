function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
saturdayFun();
saturdayFun("Boat");

function mondayWork (chore = "go to the office") {
    return `This Monday, I will ${chore}.`
}
mondayWork;
mondayWork("paint the den");

function wrapAdjective(flair = "*") {
  return function(adjective = "special") {
    return (`You are ${flair}${adjective}${flair}!`)
  }
}
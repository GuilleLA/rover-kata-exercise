
// This is the rover, a powerful machine to explore that is afraid to get out the predefined grid and will not face any obstacle. It is also sociably friendly
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [],
}


var rover2 = {
  direction: "E",
  x: 5,
  y: 5,
  travelLog: [],
}

var rover3 = {
  direction: "W",
  x: 0,
  y: 1,
  travelLog: [],
}

var rover4 = {
  direction: "S",
  x: 3,
  y: 3,
  travelLog: [],
}

var rover5 = {
  direction: "N",
  x: 2,
  y: 7,
  travelLog: [],
}

//This is the grid with some obstacles = 1 and some rovers = 2
var grid = [
  [2, null, null, 1, null, null, null, 1, null, null],
  [2, null, null, null, null, 1, null, null, null, null],
  [null, null, null, null, null, null, null, null, 1, null],
  [null, null, null, 2, null, null, null, null, null, null],
  [null, 1, null, null, 1, null, 1, null, null, null],
  [null, null, null, 1, null, 2, null, null, null, null],
  [null, 1, null, null, null, null, 1, null, null, null],
  [1, null, 2, null, 1, null, 1, null, 1, null],
  [null, 1, null, null, null, null, null, null, null, null],
  [null, null, null, null, 1, null, null, 1, null, null],
]



// This function turns the rover 90º to the left
function turnLeft(rov){
  switch(rov.direction) {
    case "N":
      return "W";
    case "S":
      return "E";
    case "E":
      return "N";
    case "W":
      return "S";
  }
  
  console.log("turnLeft was called! " + rov + " is now facing " + rov.direction);
}
  

// This function turns the rover 90º to the right
function turnRight(rov){
  switch(rov.direction) {
    case "N":
      return "E";
    case "S":
      return "W";
    case "E":
      return "S";;
    case "W":
      return "N";
  }
  console.log("turnRight was called!" + "rover is now facing " + rover.direction);
}


// This function makes the rover move one step forward
function moveForward(rov){
  switch(rov.direction) {
    case "N":
      if(rov.y === 0){
        console.log("That is scary, is out of the grid");
      }
      else if (grid[rov.y - 1][rov.x] === 1){
        console.log("I think there is something there, i would rather not move");
      }
      else if (grid[rov.y - 1][rov.x] === 2){
        console.log("Hey! i am not alone here. I am looking for my way to ironhack, Wanna be friends?");
      }
      else {
        grid[rov.y][rov.x] = null;
        grid[rov.y - 1][rov.x] = 2;  
        rov.y -= 1;
        rov.travelLog.push("[" + rov.x + "," + (rov.y) + "]");
      }
      break;
    case "S":
      if(rov.y === 9){
        console.log("That is scary, is out of the grid");
      }
      else if (grid[rov.y + 1][rov.x] === 1){
        console.log("I think there is something there, i would rather not move");
      }
      else if (grid[rov.y + 1][rov.x] === 2){
        console.log("Hey! i am not alone here. I am looking for my way to ironhack, Wanna be friends?");
      }
      else {
        grid[rov.y][rov.x] = null;
        grid[rov.y + 1][rov.x] = 2;
        rov.y += 1;
        rov.travelLog.push("[" + rov.x+ "," + rov.y + "]");  
      }
      break;
    case "E":
      if(rov.x === 9){
        console.log("That is scary, is out of the grid");
      }
      else if (grid[rov.y][rov.x + 1] === 1){
        console.log("I think there is something there, i would rather not move");
      }
      else if (grid[rov.y][rov.x + 1] === 2){
        console.log("Hey! i am not alone here. I am looking for my way to ironhack, Wanna be friends?");
      }
      else {
        grid[rov.y][rov.x] = null;
        grid[rov.y][rov.x + 1] = 2;  
        rov.x += 1;
        rov.travelLog.push("[" + rov.x+ "," + rov.y + "]");
      }
      break;
    case "W":
      if(rov.x === 0){
        console.log("That is scary, is out of the grid");
      }
      else if (grid[rov.y][rov.x - 1] === 1){
        console.log("I think there is something there, i would rather not move");
      }
      else if (grid[rov.y][rov.x - 1] === 2){
        console.log("Hey! i am not alone here. I am looking for my way to ironhack, Wanna be friends?");
      }
      else {
        grid[rov.y][rov.x] = null;
        grid[rov.y][rov.x - 1] = 2; 
        rov.x -= 1;
        rov.travelLog.push("[" + rov.x+ "," + rov.y + "]");
      }
      break;
    }
  console.log("moveForward was called " + rov + " is now in " + "[" + rov.x+ "," + rov.y + "]");
}


// This function makes the rover move one step backward
function moveBackward(rov){
  switch(rov.direction) {
    case "N":
      if(rov.y === 9){
        console.log("That is scary, is out of the grid");
      }
      else if (grid[rov.y + 1][rov.x] === 1){
        console.log("I think there is something there, i would rather not move");
      }
      else if (grid[rov.y + 1][rov.x] === 2){
        console.log("Hey! i am not alone here. I am looking for my way to ironhack, Wanna be friends?");
      }
      else {
        grid[rov.y][rov.x] = null;
        grid[rov.y + 1][rov.x] = 2;
        rov.y += 1; 
        rov.travelLog.push("[" + rov.x+ "," + rov.y + "]");
      }
      break;
    case "S":
      if(rov.y === 0){
        console.log("That is scary, is out of the grid");
      }
      else if (grid[rov.y - 1][rov.x] === 1){
        console.log("I think there is something there, i would rather not move");
      }
      else if (grid[rov.y - 1][rov.x] === 2){
        console.log("Hey! i am not alone here. I am looking for my way to ironhack, Wanna be friends?");
      }
      else {
        grid[rov.y][rov.x] = null;
        grid[rov.y - 1][rov.x] = 2;
        rov.y -= 1;
        rov.travelLog.push("[" + rov.x+ "," + rov.y + "]");  
      }
      break;
    case "E":
      if(rov.x === 0){
        console.log("That is scary, is out of the grid");
      }
      else if (grid[rov.y][rov.x - 1] === 1){
        console.log("I think there is something there, i would rather not move");
      }
      else if (grid[rov.y][rov.x -1] === 2){
        console.log("Hey! i am not alone here. I am looking for my way to ironhack, Wanna be friends?");
      }
      else {
        grid[rov.y][rov.x] = null;
        grid[rov.y][rov.x - 1] = 2;
        rov.x -= 1;
        rov.travelLog.push("[" + rov.x+ "," + rov.y + "]");  
      }
      break;
    case "W":
      if(rov.x === 9){
        console.log("That is scary, is out of the grid");
      }
      else if (grid[rov.y][rov.x + 1] === 1){
        console.log("I think there is something there, i would rather not move");
      }
      else if (grid[rov.y][rov.x +1] === 2){
        console.log("Hey! i am not alone here. I am looking for my way to ironhack, Wanna be friends?");
      }
      else {
        grid[rov.y][rov.x] = null;
        grid[rov.y][rov.x + 1] = 2;
        rov.x += 1;
        rov.travelLog.push("[" + rov.x+ "," + rov.y + "]");
      }
      break;
    }
  console.log("moveBackward was called " + rov + " is now in " + "[" + rov.x+ "," + rov.y + "]");
}


// This function gives movement orders to the rover
function roverOrders (orders){
  for (i = 0; i < orders.length; i++){
    if (orders[i] === "f"){
      moveForward(rover);
      moveForward(rover2);
      moveForward(rover3);
      moveForward(rover4);
      moveForward(rover5);
    }
    else if (orders[i] === "l"){
      rover.direction = turnLeft(rover);
      rover2.direction = turnLeft(rover2);
      rover3.direction = turnLeft(rover3);
      rover4.direction = turnLeft(rover4);
      rover5.direction = turnLeft(rover5);
    }
    else if (orders[i] === "r"){
      rover.direction = turnRight(rover);
      rover2.direction = turnRight(rover2);
      rover3.direction = turnRight(rover3);
      rover4.direction = turnRight(rover4);
      rover5.direction = turnRight(rover5);
    }
    else if (orders[i] === "b"){
      moveBackward(rover);
      moveBackward(rover2);
      moveBackward(rover3);
      moveBackward(rover4);
      moveBackward(rover5);
    }
    else {
      console.log("That is an invalid order please enter a string with orders f l r or b");
    }
  }
    console.log(rover.travelLog);
    console.log(rover2.travelLog);
    console.log(rover3.travelLog);
    console.log(rover4.travelLog);
    console.log(rover5.travelLog);
  

}
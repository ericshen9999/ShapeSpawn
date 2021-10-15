title = "Shape Spawn";

description = ` [Press] to spawn
`;

characters = [
  `
  lll
  lll
  lll
  `,
  `
   l
  lll
   l
  `,
  `
  l l
   l
  l l
  `
];

options = {};

let shape;
let charX;
let charY;
let action;
function update() {
  // Initialize
  if (!ticks) {
    shape = `a`;
    charX = 100;
    charY = 0;
    action = null;
  }

  // Selection
  color("light_black");
  rect(80, 20, 20, 20);
  color("black");
  rect(80, 40, 20, 20);
  color("light_black");
  rect(80, 60, 20, 20);
  if(input.isJustPressed){
    if(input.pos.x < 100 && input.pos.x > 80){
      if(input.pos.y < 40 && input.pos.y > 20){
        shape = 'a';
      }
      if(input.pos.y < 60 && input.pos.y > 40){
        shape = 'b';
      }
      if(input.pos.y < 80 && input.pos.y > 60){
        shape = 'c';
      }
    } else {
        charX = input.pos.x;
        charY = input.pos.y;
        action = null;
    }
  }
  // Shape color
  switch(shape){
    case 'a':
      color("light_black");
      break;
    case 'b':
      color("black");
      break;
    case 'c':
      color("light_black");
      break;
  }
  char(shape,charX,charY);

  // Shape AI
  if(action == null){
    // Gravity?
    if(charY < 100 - 3){
      charY++;
    } else {
      // Choose AI
      switch(shape){
        case 'a':
          action = "moveRight";
          break;
        case 'b':
          action = "moveLeft";
          break;
      }
    }
  } else {
    // Do AI
    switch(action){
      case "moveRight":
        charX += 0.5;
        break;
      case "moveLeft":
        charX -= 0.5;
        break;
    }
  }
}

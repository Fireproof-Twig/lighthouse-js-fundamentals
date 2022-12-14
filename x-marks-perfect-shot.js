const moves = ["north", "north", "west", "west", "north", "east", "north"];

function finalPosition(moves) {
  let position = [0, 0];
  let x = position[0];
  let y = position[1];
  for (const move of moves) {
    console.log(x, y);
    if (move === "north") {
      y += 1;
    } else if (move === "south") {
      y -= 1;
    } else if (move === "east") {
      x += 1;
    } else {
      x -= 1;
    }
  }
  position = [x, y];
  return position;
}

finalPosition(moves);

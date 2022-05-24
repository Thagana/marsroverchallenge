/**
 * 
 * @param x 
 * @param y 
 * @param direction 
 * @returns { canMove: boolean }
 */
const Terrain = (x: number, y: number, direction: string) => {
  if (x === 0 && y === 0 && direction === "W") {
    return {
      canMove: false,
    };
  }
  return {
    canMove: true,
  };
};
/**
 * 
 * @param x 
 * @param y 
 * @param direction 
 * @returns number[]
 */
const move = (
  x: number,
  y: number,
  direction: string
) => {
    const terrain = Terrain(x, y, direction);
    if (!terrain.canMove) {
        return [x, y];
    }
  switch (direction) {
    case "N":
      x++;
      break;
    case "S":
      y--;
      break;
    case "E":
      x++;
      break;
    case "W":
      x--;
      break;
    default:
      break;
  }
  return [x, y];
};


const marsRover = (info: string, movement: string) => {
  let [x, y, compass] = info.split(" ");
  let xi = Number(x);
  let yi = Number(y);
  const directions = movement.split("");

  let xf = 0;
  let yf = 0;

  for (let i = 0; i < directions.length; i++) {
    if (directions[i] === "M") {
      let [xf, yf] = move(xi, yi, compass);
      console.log(xf, yf);
    }

    if (directions[i] === "L") {
      switch (compass) {
        case "N":
          compass = "W";
          break;
        case "S":
          compass = "E";
          break;
        case "E":
          compass = "N";
          break;
        case "W":
          compass = "S";
          break;
        default:
          break;
      }
    }

    if (directions[i] === "R") {
      switch (compass) {
        case "N":
          compass = "E";
          break;
        case "S":
          compass = "W";
          break;
        case "E":
          compass = "S";
          break;
        case "W":
          compass = "N";
          break;
        default:
          break;
      }
    }
    return {
      x: xf,
      y: yf,
      c: compass,
    };
  }
};

console.log(marsRover("0 0 N", "LMLLL"));

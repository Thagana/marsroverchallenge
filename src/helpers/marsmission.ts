//This is the plateu constrains in killometre
const MAP = { x: 1000, y: 1000 }

/**
 * 
 * @param x 
 * @param y 
 * @param direction 
 * @returns { canMove: boolean }
 */

const Terrain = (x: number, y: number) => {
  if ((x - 1 < 0 )|| (y - 1 < 0)) {
    return {
      canMove: false,
    };
  }
  return {
    canMove: true,
  };
};

const move = (
  x: number,
  y: number,
  heading: string
) => {

  switch (heading) {
    case "N":
      y++;
      return [x, y];
    case "S":
      y--;
      return [x, y];
    case "E":
      x ++;
      return [x, y];
    case "W":
      x--;
      return [x, y];
    default:
      return [x, y];
  }
};

const roverDirection = (direction: string, heading: string) => {
  
  if (direction === "L") {
    switch (heading) {
      case "N":
        heading = "W";
        break;
      case "S":
        heading = "E";
        break;
      case "E":
        heading = "N";
        break;
      case "W":
        heading = "S";
        break;
      default:
        break;
    }
  }

  if (direction === "R") {
    switch (heading) {
      case "N":
        heading = "E";
        break;
      case "S":
        heading = "W";
        break;
      case "E":
        heading = "S";
        break;
      case "W":
        heading = "N";
        break;
      default:
        break;
    }
  }
  return heading;
}

const marsRover = (info: string, movement: string) => {
  let [x, y, heading] = info.split(" ");
  let xi = Number(x);
  let yi = Number(y);
  const directions = movement.split("");

  let xf = xi;
  let yf = yi;

  directions.forEach((item) => {
    if (item === "M") {
      let [xr, yr] = move(xf, yf, heading);
      xf =  xr;
      yf = yr;
    } else {
      heading = roverDirection(item, heading);
    }
  });

    return {
      x: xf,
      y: yf,
      direction: heading,
    };
};

export default marsRover;

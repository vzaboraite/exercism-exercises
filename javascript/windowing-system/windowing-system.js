/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
class Size {
  constructor(width = 80, height = 60) {
    this.width = width;
    this.height = height;
  }

  resize(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
  }
}

class Position {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  move(newX, newY) {
    this.x = newX;
    this.y = newY;
  }
}

class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(size) {
    const screenHeight = this.screenSize.height;
    const screenWidth = this.screenSize.width;

    const maxWindowHeight = screenHeight - this.position.y;
    const maxWindowWidth = screenWidth - this.position.x;

    let newWindowHeight;
    if (size.height > maxWindowHeight) {
      newWindowHeight = maxWindowHeight;
    } else if (size.height > 0) {
      newWindowHeight = size.height;
    } else {
      newWindowHeight = 1;
    }

    let newWindowWidth;
    if (size.width > maxWindowWidth) {
      newWindowWidth = maxWindowWidth;
    } else if (size.width > 0) {
      newWindowWidth = size.width;
    } else {
      newWindowWidth = 1;
    }

    this.size.resize(newWindowWidth, newWindowHeight);
  }
}

export { Size, Position, ProgramWindow };

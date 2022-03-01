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

  resize({ width, height }) {
    const screenHeight = this.screenSize.height;
    const screenWidth = this.screenSize.width;

    const maxWindowHeight = screenHeight - this.position.y;
    const maxWindowWidth = screenWidth - this.position.x;

    let newWindowHeight;
    let newWindowWidth;

    if (height > maxWindowHeight) {
      newWindowHeight = maxWindowHeight;
    } else if (height > 0) {
      newWindowHeight = height;
    } else {
      newWindowHeight = 1;
    }

    if (width > maxWindowWidth) {
      newWindowWidth = maxWindowWidth;
    } else if (width > 0) {
      newWindowWidth = width;
    } else {
      newWindowWidth = 1;
    }

    this.size.resize(newWindowWidth, newWindowHeight);
  }

  move({ x, y }) {
    const screenHeight = this.screenSize.height;
    const screenWidth = this.screenSize.width;

    const maxX = screenWidth - this.size.width;
    const maxY = screenHeight - this.size.height;

    let newPositionX;
    let newPositionY;

    if (x > maxX) {
      newPositionX = maxX;
    } else if (x > 0) {
      newPositionX = x;
    } else {
      newPositionX = 0;
    }

    if (y > maxY) {
      newPositionY = maxY;
    } else if (y > 0) {
      newPositionY = y;
    } else {
      newPositionY = 0;
    }

    this.position.move(newPositionX, newPositionY);
  }
}

function changeWindow(programWindow) {
  const newSize = new Size(400, 300);
  const newPosition = new Position(100, 150);

  programWindow.resize(newSize);
  programWindow.move(newPosition);

  return programWindow;
}

export { Size, Position, ProgramWindow, changeWindow };

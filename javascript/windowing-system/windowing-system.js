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
    if (size.width < 1 || size.height < 1) {
      this.size.resize(1, 1);
      return;
    }

    const screenHeight = this.screenSize.height;
    const screenWidth = this.screenSize.width;

    const maxWindowHeight = screenHeight - this.position.y;
    const maxWindowWidth = screenWidth - this.position.x;

    const newWindowHeight =
      size.height > maxWindowHeight ? maxWindowHeight : size.height;
    const newWindowWidth =
      size.width > maxWindowWidth ? maxWindowWidth : size.width;

    this.size.resize(newWindowWidth, newWindowHeight);
  }
}

export { Size, Position, ProgramWindow };

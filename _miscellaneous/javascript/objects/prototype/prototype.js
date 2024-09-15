function Shape(x, y, fill = '#000') {
  this.x = x;
  this.y = y;
  this.fill = fill;
}

Shape.prototype.move = function (x, y) {
  console.log(`Moving the shape to (${y}, ${y})`);
};

Shape.prototype.delete = function () {
  console.log('Deleting the shape');
};

function React(width, height, x, y, fill) {
  // Build the heritage between React and Shape
  // React will inherit properties form Shape
  Shape.call(this, x, y, fill);

  this.width = width;
  this.height = height;
}

React.prototype = Object.create(Shape.prototype);

React.prototype.draw = function () {
  console.log('Drawing the rectangle');
};

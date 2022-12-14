function calculateRectangleArea(length, width) {
  if (length === 0 || width === 0) {
    return undefined;
  }
  let area = length * width;
  return area;
}

function calculateTriangleArea(base, height) {
  if (base === 0 || height === 0) {
    return undefined;
  }
  let area = (base * height) / 2;
  return area;
}

function calculateCircleArea(radius) {
  if (radius <= 0) {
    return undefined;
  }
  let area = Math.pow(radius, 2) * Math.PI;
  return area;
}

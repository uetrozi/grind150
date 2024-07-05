export function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  const startColor = image[sr][sc];
  if (color === startColor) {
    return image;
  }

  if (image[sr][sc] !== color) {
    image[sr][sc] = color;
  }

  if (sr + 1 <= image.length && image[sr + 1][sc] === startColor) {
    image[sr + 1][sc] = color;
    image = floodFill(image, sr + 1, sc, color);
  }

  if (sr - 1 >= 0 && image[sr - 1][sc] === startColor) {
    image[sr - 1][sc] = color;
    image = floodFill(image, sr - 1, sc, color);
  }

  if (sc + 1 <= image[sr].length && image[sr][sc + 1] === startColor) {
    image[sr][sc + 1] = color;
    image = floodFill(image, sr, sc + 1, color);
  }

  if (sc - 1 >= 0 && image[sr][sc - 1] === startColor) {
    image[sr][sc - 1] = color;
    image = floodFill(image, sr, sc - 1, color);
  }

  return image;
}

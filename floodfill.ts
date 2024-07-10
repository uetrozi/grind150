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

  function fill(sr: number, sc: number) {
    if (
      sr >= 0 &&
      sr < image.length &&
      sc >= 0 &&
      sc < image[0].length &&
      image[sr][sc] === startColor
    ) {
      image[sr][sc] = color;
      fill(sr + 1, sc);
      fill(sr - 1, sc);
      fill(sr, sc + 1);
      fill(sr, sc - 1);
    }
  }
  fill(sr, sc);

  return image;
}

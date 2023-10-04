/**
 * The code provides utility functions for mapping numbers, linear interpolation, clamping values,
 * getting mouse position, and preloading images in JavaScript.
 * @param x - The value you want to map from one range to another.
 * @param a - The starting value of the range you want to map from.
 * @param b - The parameter `b` represents the upper bound of the range [a, b].
 * @param c - The parameter `c` in the `map` function represents the lower bound of the target range.
 * It is the value that the input `x` will be mapped to when it is equal to the lower bound of the
 * input range `[a, b]`.
 * @param d - The parameter `d` represents the upper bound of the target range.
 */

// ? Map number x from range [a, b] to [c, d]
const map = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c;

// ? Linear interpolation
const lerp = (a, b, n) => (1 - n) * a + n * b;

const clamp = (num, min, max) => (num <= min ? min : num >= max ? max : num);

// ? Gets the mouse position
const getMousePos = (e) => {
  let posx = 0;
  let posy = 0;
  if (!e) e = window.event;
  if (e.pageX || e.pageY) {
    posx = e.pageX;
    posy = e.pageY;
  } else if (e.clientX || e.clientY) {
    posx = e.clientX + body.scrollLeft + document.documentElement.scrollLeft;
    posy = e.clientY + body.scrollTop + document.documentElement.scrollTop;
  }

  return { x: posx, y: posy };
};

const preloadImage = (src) =>
  new Promise((r) => {
    const image = new Image();
    image.onload = r;
    image.onerror = r;
    image.src = src;
  });

export { map, lerp, clamp, getMousePos, preloadImage };

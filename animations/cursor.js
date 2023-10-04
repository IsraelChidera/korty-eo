/* The Cursor class is responsible for tracking the mouse position and rendering a cursor element that
follows the mouse movement with a smooth animation. */

import { gsap } from "gsap";
import { lerp, getMousePos } from "../utils";

/** The code is initializing a variable `mouse` with an object `{ x: 0, y: 0 }`. It then checks if the
`window` object is defined (to ensure the code is running in a browser environment). If it is, it
adds an event listener to the `mousemove` event. When the mouse moves, the `getMousePos` function is
called with the event object as an argument, and the result is assigned to the `mouse` variable.
This allows the code to track the current position of the mouse on the screen. */
let mouse = { x: 0, y: 0 };
if (typeof window !== "undefined") {
  window.addEventListener("mousemove", (ev) => (mouse = getMousePos(ev)));
}

/* The `Cursor` class is responsible for rendering and animating a cursor element based on the user's
mouse movement. */
export class Cursor {
  constructor(el) {
    this.DOM = { el: el };
    this.DOM.el.style.opacity = 0;

    this.bounds = this.DOM.el.getBoundingClientRect();

    this.renderedStyles = {
      tx: { previous: 0, current: 0, amt: 0.15 },
      ty: { previous: 0, current: 0, amt: 0.15 },
      scale: { previous: 1, current: 1, amt: 0.15 },
      opacity: { previous: 1, current: 1, amt: 0.1 },
    };

    this.onMouseMoveEv = () => {
      this.renderedStyles.tx.previous = this.renderedStyles.tx.current =
        mouse.x - this.bounds.width / 2;
      this.renderedStyles.ty.previous = this.renderedStyles.ty.previous =
        mouse.y - this.bounds.height / 2;
      gsap.to(this.DOM.el, {
        duration: 0.9,
        ease: "Power3.easeOut",
        opacity: 1,
      });
      requestAnimationFrame(() => this.render());
      window.removeEventListener("mousemove", this.onMouseMoveEv);
    };
    window.addEventListener("mousemove", this.onMouseMoveEv);
  }
  enter() {
    this.renderedStyles["scale"].current = 2.5;
    this.renderedStyles["opacity"].current = 0.5;
  }
  leave() {
    this.renderedStyles["scale"].current = 1;
    this.renderedStyles["opacity"].current = 1;
  }
  render() {
    this.renderedStyles["tx"].current = mouse.x - this.bounds.width / 2;
    this.renderedStyles["ty"].current = mouse.y - this.bounds.height / 2;

    for (const key in this.renderedStyles) {
      this.renderedStyles[key].previous = lerp(
        this.renderedStyles[key].previous,
        this.renderedStyles[key].current,
        this.renderedStyles[key].amt
      );
    }

    this.DOM.el.style.transform = `translateX(${this.renderedStyles["tx"].previous}px) translateY(${this.renderedStyles["ty"].previous}px) scale(${this.renderedStyles["scale"].previous})`;
    this.DOM.el.style.opacity = this.renderedStyles["opacity"].previous;

    requestAnimationFrame(() => this.render());
  }
}

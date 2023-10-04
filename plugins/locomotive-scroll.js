/**
 * The above code is a JavaScript module that installs the LocomotiveScroll library as a prototype
 * property on the Vue object.
 * @param Vue - Vue is the JavaScript framework used for building user interfaces. It allows developers
 * to create reusable components and build interactive web applications. In this code snippet, Vue is
 * being used to install and configure the LocomotiveScroll library.
 */
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const install = (Vue) => {
  Vue.prototype.LocomotiveScroll = LocomotiveScroll;
};

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(install);

  if (install.installed) {
    install.installed = false;
  }
}

export default install;

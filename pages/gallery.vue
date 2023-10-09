<template>
  <div class="c-gallery">
    <svg class="cursor" width="32" ref="cursor" height="32" viewBox="0 0 20 20">
      <circle class="cursor__inner" cx="10" cy="10" r="5" />
    </svg>
    <div class="c-gallery__header">
      <nuxt-link to="/profile">
        <animated-link class="c-bezier"> Profile </animated-link>
      </nuxt-link>
      <nuxt-link to="/">
        <animated-link class="c-bezier"> Close </animated-link>
      </nuxt-link>
    </div>
    <LocomotiveScroll
      ref="scroller"
      class="horizontal"
      :getted-options="{
        direction: 'horizontal',
        smooth: true,
        getSpeed: true,
        lerp: 0.08,
      }"
    >
      <div class="c-gallery__main">
        <div>
          <div class="gallery__intro">
            <p>
              This gallery contains video clips, art and pictures related to
              Korty and her work, respective owners of each piece of work have
              been credited.
              <a
                href="mailto:raimiibrahim44@gmail.com"
                target="_blank"
                class="links links--elara"
              >
                <span>Contact us for content removal</span>
              </a>
            </p>

            <button class="credits-link show-mobile" @click="openModal">
              <div class="c-inner">
                <animated-link class="c-bezier"> credits </animated-link>
              </div>
            </button>

            <h1>
              “I try not to do everything, but I make sure I try everything.”
            </h1>
            <nuxt-link to="/" class="home-link">
              <animated-link class="c-bezier"> Go to Home </animated-link>
            </nuxt-link>

            <button class="credits-link show-desktop" @click="openModal">
              <div class="c-inner">
                <animated-link class="c-bezier"> credits </animated-link>
              </div>
            </button>
          </div>
          <div class="gallery__images">
            <div class="c-image sm">
              <div
                data-scroll
                data-scroll-speed="-0.8"
                class="bg-image"
                style="
                  background-image: url(https://res.cloudinary.com/dajnn3jbw/image/upload/v1696250874/korty/ko8xd4pf334wwcrzdjit.jpg);
                "
              />
            </div>

            <div class="c-image xs">
              <div
                data-scroll
                data-scroll-speed="-0.8"
                class="bg-image"
                style="
                  background-image: url(https://res.cloudinary.com/dajnn3jbw/image/upload/v1696250641/korty/zyigshims03meovean0b.jpg);
                "
              />
            </div>

            <div class="c-image sm nobp">
              <div
                data-scroll
                data-scroll-speed="-0.8"
                class="bg-image"
                style="
                  background-image: url(https://res.cloudinary.com/dajnn3jbw/image/upload/v1696250605/korty/frkl3swsh465sobyqdkf.jpg);
                "
              />
            </div>

            <div class="c-image md nobp">
              <div
                data-scroll
                data-scroll-speed="-0.8"
                class="bg-image"
                style="
                  background-image: url(https://res.cloudinary.com/dajnn3jbw/image/upload/v1696250548/korty/vvodmu2csuxdwoqjszbs.jpg);
                "
              />
            </div>

            <div class="c-image xs">
              <div
                data-scroll
                data-scroll-speed="-0.8"
                class="bg-image"
                style="
                  background-image: url(https://res.cloudinary.com/dajnn3jbw/image/upload/v1696250572/korty/fbck0yitxhfxhat6dofb.jpg);
                "
              />
            </div>

            <div class="c-image xs">
              <div
                data-scroll
                data-scroll-speed="-0.8"
                class="bg-image"
                style="
                  background-image: url(https://res.cloudinary.com/dajnn3jbw/image/upload/v1696250580/korty/xbiqb6do33ht0c6zsm0o.jpg);
                "
              />
            </div>

            <div class="c-image xs">
              <div
                data-scroll
                data-scroll-speed="-0.8"
                class="bg-image"
                style="
                  background-image: url(https://res.cloudinary.com/dajnn3jbw/image/upload/v1696250549/korty/rdyxbph6rl0jlpv83y6t.jpg);
                "
              />
            </div>

            <div class="c-image xs">
              <div
                data-scroll
                data-scroll-speed="-0.8"
                class="bg-image"
                style="
                  background-image: url(https://res.cloudinary.com/dajnn3jbw/image/upload/v1696250621/korty/qwagme8ziec2egbqfsjx.jpg);
                "
              />
            </div>

            <div class="c-image xs">
              <div
                data-scroll
                data-scroll-speed="-0.8"
                class="bg-image"
                style="
                  background-image: url(https://res.cloudinary.com/dajnn3jbw/image/upload/v1696250620/korty/rgwnerfedx3r4baeckxq.jpg);
                "
              />
            </div>

            <div class="c-image md nobp">
              <div
                data-scroll
                data-scroll-speed="-0.8"
                class="bg-image"
                style="
                  background-image: url(https://res.cloudinary.com/dajnn3jbw/image/upload/v1696250612/korty/v4knulpxoghw9ky5el5g.jpg);
                "
              />
            </div>

            <div class="c-image xs">
              <div
                data-scroll
                data-scroll-speed="-0.8"
                class="bg-image"
                style="
                  background-image: url(https://res.cloudinary.com/dajnn3jbw/image/upload/v1696250611/korty/p7jysavl6z1wqbtydmir.jpg);
                "
              />
            </div>

            <div class="c-image md nobp">
              <div
                data-scroll
                data-scroll-speed="-0.8"
                class="bg-image"
                style="
                  background-image: url(https://res.cloudinary.com/dajnn3jbw/image/upload/v1696250610/korty/xrvpeb3koa1sqi7nwtvg.jpg);
                "
              />
            </div>

            <div class="c-image sm nobp">
              <div
                data-scroll
                data-scroll-speed="-0.8"
                class="bg-image"
                style="
                  background-image: url(https://res.cloudinary.com/dajnn3jbw/image/upload/v1696250552/korty/zk2n4bwb5kxagdpmndcj.jpg);
                "
              />
            </div>

            <div class="c-image xs">
              <div
                data-scroll
                data-scroll-speed="-0.8"
                class="bg-image"
                style="
                  background-image: url(https://res.cloudinary.com/dajnn3jbw/image/upload/v1696250555/korty/gtauwwfb3pirvlyvywgo.jpg);
                "
              />
            </div>

            <div class="c-image sm nobp">
              <div
                data-scroll
                data-scroll-speed="-0.8"
                class="bg-image"
                style="
                  background-image: url(https://res.cloudinary.com/dajnn3jbw/image/upload/v1696250624/korty/l7xaa9wb7qjsh0sb1otx.jpg);
                "
              />
            </div>

            <div class="c-image sm nobp">
              <div
                data-scroll
                data-scroll-speed="-0.8"
                class="bg-image"
                style="
                  background-image: url(https://res.cloudinary.com/dajnn3jbw/image/upload/v1696250619/korty/sky99o8xzvlwut6pa7pr.jpg);
                "
              />
            </div>

            <div class="c-image sm">
              <div
                data-scroll
                data-scroll-speed="-0.8"
                class="bg-image"
                style="
                  background-image: url(https://res.cloudinary.com/dajnn3jbw/image/upload/v1696250618/korty/ycehgcqluxpjmpr3hhk8.jpg);
                "
              />
            </div>

            <div class="c-image md">
              <div
                data-scroll
                data-scroll-speed="-0.8"
                class="bg-image"
                style="
                  background-image: url(https://res.cloudinary.com/dajnn3jbw/image/upload/v1696250617/korty/pdndwoxtlcyyhr5ts79n.jpg);
                "
              />
            </div>

            <div class="c-image sm nobp">
              <div
                data-scroll
                data-scroll-speed="-0.8"
                class="bg-image"
                style="
                  background-image: url(https://res.cloudinary.com/dajnn3jbw/image/upload/v1696250608/korty/lwtaaodl6kb7nojxn4re.jpg);
                "
              />
            </div>

            <div class="c-image xs nobp">
              <div
                data-scroll
                data-scroll-speed="-0.8"
                class="bg-image"
                style="
                  background-image: url(https://res.cloudinary.com/dajnn3jbw/image/upload/v1696250608/korty/qnvzbjt64tzhiroagylr.jpg);
                "
              />
            </div>

            <div class="c-image xs">
              <div
                data-scroll
                data-scroll-speed="-0.8"
                class="bg-image"
                style="
                  background-image: url(https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621921702/Korty/Rectangle_52_r0cnkm.jpg); // TODO HELLP
                "
              />
            </div>

            <div class="c-image xs">
              <div
                data-scroll
                data-scroll-speed="-0.8"
                class="bg-image"
                style="
                  background-image: url(https://res.cloudinary.com/dajnn3jbw/image/upload/v1696250623/korty/ogvtssmubthiot9me58j.jpg);
                "
              />
            </div>

            <div class="c-image xs">
              <div
                data-scroll
                data-scroll-speed="-0.8"
                class="bg-image"
                style="
                  background-image: url(https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621921770/Korty/Rectangle_54_r0rsvh.jpg);
                "
              />
            </div>

            <!-- Copy Image -->

            <div class="c-image md">
              <div
                data-scroll
                data-scroll-speed="-0.8"
                class="bg-image"
                style="
                  background-image: url(https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621921773/Korty/Rectangle_57_twgrjb.jpg);
                "
              />
            </div>

            <div class="c-image xs">
              <div
                data-scroll
                data-scroll-speed="-0.8"
                class="bg-image"
                style="
                  background-image: url(https://res.cloudinary.com/dajnn3jbw/image/upload/v1696560115/korty/rxers5olp3we3yh2yzck.jpg);
                "
              />
            </div>

            <div class="c-image xs">
              <div
                data-scroll
                data-scroll-speed="-0.8"
                class="bg-image"
                style="
                  background-image: url(https://res.cloudinary.com/dajnn3jbw/image/upload/v1696560116/korty/d0ysosg9hgmb1hrzcsm0.jpg);
                "
              />
            </div>

            <div class="c-image xs">
              <div
                data-scroll
                data-scroll-speed="-0.8"
                class="bg-image"
                style="
                  background-image: url(https://res.cloudinary.com/dajnn3jbw/image/upload/v1696377669/korty/reahi3hvaev3j71gn9lo.jpg);
                "
              />
            </div>

            <div class="c-image xs">
              <div
                data-scroll
                data-scroll-speed="-0.8"
                class="bg-image"
                style="
                  background-image: url(https://res.cloudinary.com/dajnn3jbw/image/upload/v1696560115/korty/an8gxis3y5nfblz5nil4.jpg);
                "
              />
            </div>

            <div class="c-image xs">
              <div
                data-scroll
                data-scroll-speed="-0.8"
                class="bg-image"
                style="
                  background-image: url(https://res.cloudinary.com/dajnn3jbw/image/upload/v1696560116/korty/w7bbpooogjmp7npv1plj.jpg);
                "
              />
            </div>

            <div class="c-image md nobp">
              <div
                data-scroll
                data-scroll-speed="-0.8"
                class="bg-image"
                style="
                  background-image: url(https://res.cloudinary.com/dajnn3jbw/image/upload/v1696560116/korty/g22qniwdff8evwcii6ma.jpg);
                "
              />
            </div>

            <div class="c-circle">
              <div class="c-circle__inner">
                <div class="heading">
                  <h3>
                    the <br />
                    End
                  </h3>
                </div>

                <nuxt-link to="/" class="home-link">
                  <animated-link class="c-bezier"> Go to Home </animated-link>
                </nuxt-link>
              </div>
            </div>

            <div class="c-image xs">
              <div
                data-scroll
                data-scroll-speed="-0.8"
                class="bg-image"
                style="
                  background-image: url(https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621921814/Korty/Rectangle_64_v1mfrj.jpg);
                "
              />
            </div>
          </div>
        </div>
      </div>
    </LocomotiveScroll>
  </div>
</template>

<script>
import gsap from "gsap/all";

import AnimatedArrow from "@/components/ui/AnimatedArrow.vue";
import AnimatedLink from "@/components/AnimatedLink/AnimatedLink.vue";

import { map, clamp } from "@/utils/index";
import { Cursor } from "~/animations/cursor";

export default {
  components: { AnimatedArrow, AnimatedLink },

  /**
   * TODO: outsource the exit animations into one and reuse
   */
  transition: {
    name: "profile",
    mode: "out-in",
    css: false,
    appear: true,
    beforeEnter(el) {
      gsap.set(el, {
        opacity: 0,
      });
    },
    enter(el, done) {
      const tl = gsap.timeline({
        onComplete: done,
      });
      tl.to(el, {
        opacity: 1,
        duration: 1.5,
      })
        .set(".gallery__images .c-image", { autoAlpha: 1 }, "-=1.5")
        .from(
          ".gallery__images .c-image",
          {
            duration: 1.5,
            yPercent: 100,
            ease: "Expo.easeInOut",
          },
          "-=1.5"
        )
        .from(".gallery__images .bg-image", {
          duration: 1.5,
          yPercent: -100,
          delay: -1.5,
          ease: "Expo.easeInOut",
        })
        .from(".gallery__images .bg-image", {
          duration: 1.5,
          scale: 1.2,
          delay: -1.4,
          ease: "Expo.easeInOut",
        });
    },
    beforeLeave(el) {
      gsap.set(".c-exit", {
        zIndex: 30,
        top: "unset",
        bottom: 0,
      });
      gsap.set(".exit-span", {
        opacity: 1,
      });
    },
    leave(el, done) {
      const tl = gsap.timeline({
        onComplete: done,
      });

      tl.to(".c-exit", {
        height: window.innerHeight,
        duration: 1.5,
        ease: "Expo.easeInOut",
      })
        .set(".c-exit", {
          top: 0,
          bottom: "unset",
        })
        .from(
          ".exit-span",
          {
            yPercent: 100,
            duration: 1,
            skewY: 5,
            stagger: {
              amount: 0.1,
            },
            ease: "power2.out",
          },
          "-=.5"
        )
        .set(el, {
          opacity: 0,
        })
        .to(".exit-span", {
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        })
        .to(
          ".c-exit",
          {
            height: 0,
            duration: 1.5,
            ease: "Expo.easeInOut",
          },
          "-=1"
        );
    },
  },
  mounted() {
    const locomotive = this.$refs.scroller.locomotive;
    this.$nuxt.$emit("update-locomotive");
    this.beginCursor();

    let direction = "horizontal";
    window.addEventListener("resize", () => {
      const width = window.innerWidth;

      if (width <= 768 && direction !== "vertical") {
        locomotive.destroy();
        locomotive.init();
        direction = "vertical";
      }

      if (width > 768 && direction === "vertical") {
        locomotive.destroy();
        locomotive.init();
        direction = "horizontal";
      }
    });

    let scroll = { cache: 0, current: 0 };
    const allImgs = [...document.querySelectorAll(".gallery__images .c-image")];
    locomotive.on("scroll", (obj) => {
      scroll.current = obj.scroll.x;
      const distance = scroll.current - scroll.cache;
      scroll.cache = scroll.current;
      const skewVal = map(distance, -50, 50, -15, 15);
      allImgs.forEach(
        (el) => (el.style.transform = `skewX(${clamp(skewVal, -1, 1)}deg)`)
      );
    });
    locomotive.update();
  },
  methods: {
    openModal() {
      this.$store.commit("updateModal", true);
    },
    beginCursor() {
      const cursorRef = this.$refs.cursor;
      const cursor = new Cursor(cursorRef);
      [...document.querySelectorAll("a")].forEach((link) => {
        link.addEventListener("mouseenter", () => cursor.enter());
        link.addEventListener("mouseleave", () => cursor.leave());
      });
      [...document.querySelectorAll("button")].forEach((link) => {
        link.addEventListener("mouseenter", () => cursor.enter());
        link.addEventListener("mouseleave", () => cursor.leave());
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>

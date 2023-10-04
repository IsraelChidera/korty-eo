<template>
  <div class="c-app">
    <Nuxt v-if="imagesLoaded" />
    <transition @leave="leave" :css="false">
      <Preloader v-if="!imagesLoaded" />
    </transition>
    <modal />
    <exit />
  </div>
</template>

<script>
import gsap from "gsap/all";
import { mapState } from "vuex";

import Modal from "../components/ui/Modal.vue";
import Preloader from "../components/ui/Preloader.vue";
import Exit from "../components/ui/Exit.vue";

export default {
  components: { Modal, Preloader, Exit },

  computed: {
    ...mapState(["modalOpen", "imagesLoaded"]),
  },

  methods: {
    leave(el, done) {
      const timeline = gsap.timeline({
        onComplete: done,
      });
      timeline.to(el, {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    },
  },
};
</script>

<style scoped></style>

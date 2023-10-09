<template>
  <a :href="href" target="_blank">
    <span class="c-link">
      <span class="c-link__inner">
        <span>
          <svg
            fill="none"
            viewBox="0 0 34 34"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <path
                d="M18.002 12.34v12.172h-2v-12.17l-5.364 5.362-1.414-1.414 7.778-7.778 7.778 7.778-1.414 1.415-5.364-5.365z"
                fill="#121821"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <path
                  fill="#fff"
                  transform="rotate(-45 20.536 8.465)"
                  d="M0 0h24v24H0z"
                />
              </clipPath>
            </defs>
          </svg>
        </span>

        <span class="c-link__animated">
          <svg
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <path
                d="M18.002 12.34v12.172h-2v-12.17l-5.364 5.362-1.414-1.414 7.778-7.778 7.778 7.778-1.414 1.415-5.364-5.365z"
                fill="#121821"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <path
                  fill="#fff"
                  transform="rotate(-45 20.536 8.465)"
                  d="M0 0h24v24H0z"
                />
              </clipPath>
            </defs>
          </svg>
        </span>
      </span>
    </span>
  </a>
</template>

<script>
export default {
  props: {
    href: String,
  },
};
</script>

<style lang="scss" scoped>
svg {
  max-width: 25px;
  width: 100%;
}

a {
  --size: 72px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: var(--size);
  height: var(--size);

  border: 1px solid hsl(216, 10%, 70%);
  border-radius: 50%;
}

@media (min-width: 769) {
  a {
    &:hover {
      .c-link__inner {
        transform: translateY(-100%);
      }
    }
  }
}

.c-link {
  display: inline-flex;
  align-items: center;
  position: relative;

  overflow: hidden;
  width: 100%;
  height: 100%;

  &__inner {
    display: flex;
    transform: translateY(0);
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    width: 100%;
    height: 100%;

    > span {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  &__animated {
    position: absolute;
    top: 100%;
  }
}
</style>

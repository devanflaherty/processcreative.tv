<template>
<article ref="feature">
  <transition name="slide-up">
    <div class="columns flex">
      <template v-if="alignment === 'left'">
        <div class="column flex-center is-order-2-touch">
          <div class="content-cell has-text-right">
            <slot name="content">
              <h3 class="has-text-right">Don Julio</h3>
              <p class="has-text-right">We combine creativity, design and story into impacting products, content and strategies. Wheter that something is a single video or a year long strategy.</p>
            </slot>
          </div>
        </div>
      </template>
      
      <div class="column is-half is-order-1-touch">
        <div class="video-player">
          <div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;">
            <div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;">
              <slot name="video">

                <div class="wistia_embed wistia_async_j38ihh83m5 seo=false videoFoam=true" style="height:100%;width:100%">&nbsp;</div>

              </slot>
            </div>
          </div>
        </div>
      </div>

      <template v-if="alignment === 'right'">
        <div class="column flex-center is-order-2-touch">
          <div class="content-cell">
            <slot name="content">
              <h3>Don Julio</h3>
              <p>We combine creativity, design and story into impacting products, content and strategies. Wheter that something is a single video or a year long strategy.</p>
            </slot>
          </div>
        </div>
      </template>
    </div>
  </transition>
</article>
</template>

<script>
export default {
  props: ['contentAligned', 'origin'],
  data () {
    return {
      reveal: false
    }
  },
  computed: {
    alignment () {
      if (!this.contentAligned) {
        return 'left'
      } else {
        return this.contentAligned
      }
    }
  },
  methods: {
    revealUp () {
      this.reveal = true
    }
  },
  mounted () {
    this.$reveal(this.$refs.feature, {delay: '100', reset: true})
  }
}
</script>

<style lang="scss" scoped>
@import '~bulma/bulma';
.flex-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.content-cell {
  padding: 0 4rem;
  @include touch() {
    padding: 2rem;
    text-align: left!important;
  }
}
</style>


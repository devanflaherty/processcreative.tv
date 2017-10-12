<template>
  <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <div class="navbar-item" >
        <Logo :color="logoColor" :animate="true"/>
      </div>
      <div class="nav-burg" :class="{'is-active': mobileNav}" @click="showMobileNav">
        <span></span>
      </div>
    </div>

    <div id="navMenu" class="navbar-menu" v-if="breakpoint >= 3">
      <transition name="fade-in" appear>
        <div class="navbar-end" v-if="mobileNav || breakpoint > 2">
          <nuxt-link to="#featured" class="navbar-item " v-smooth-scroll="{offset: -100, duration: 1000}">
            Featured Work
          </nuxt-link>
          <a href="#contact" class="navbar-item" @click.prevent="toggleModal">
            Contact
          </a>
        </div>
      </transition>
    </div>

    <div id="mobileNav" :class="{'is-active': mobileNav}">
      <transition name="fade-in" appear>
        <div v-if="mobileNav" class="background"></div>
      </transition>
      <transition name="fade-in" appear>
        <div class="mobile-nav-wrap" v-if="mobileNav">
          <nuxt-link to="#featured" class="navbar-item " v-smooth-scroll="{offset: -100, duration: 1000}">
            Featured Work
          </nuxt-link>
          <a href="#contact" class="navbar-item" @click.prevent="toggleModal">
            Contact
          </a>
        </div>
      </transition>
    </div>

    <Modal @changeModalVis="toggleModal" :modalVisible="modal">
      <div slot="body">
        <p class="is-size-4 is-size-6-mobile">Thank you for your patience as we are currently updating our site with new work and new agency capabilities.</p>
        <br>
        <p class="is-size-4 is-size-6-mobile"><strong>Our new site is set to launch November 1st, 2017.</strong></p>
        <br>
        <p class="is-size-4 is-size-6-mobile">If you aren’t able to find what you are looking for below please reach out to us at newbusiness@processcreative.co with any questions that you might have.</p>
      </div>
    </Modal>
  </nav>
</template>

<script>
import {TweenMax} from 'gsap'
import Logo from '~/components/Logo'
import Modal from '~/components/Modal'

import { mapGetters } from 'vuex'
export default {
  components: {
    Logo,
    Modal
  },
  data () {
    return {
      logoColor: '#ffffff',
      modal: false
    }
  },
  computed: {
    ...mapGetters(['mobileNav', 'breakpoint'])
  },
  watch: {
    modal (m) {
      if (m === true) {
        this.logoColor = '#000000'
      } else {
        this.logoColor = '#ffffff'
      }
    },
    breakpoint (newV, oldV) {
      if (newV > oldV && oldV < 3) {
        this.$store.dispatch('toggleMobileNav', false)
        this.disableScroll(false)
      }
    }
  },
  methods: {
    showMobileNav () {
      var navmenu = document.getElementById('navMenu')
      if (TweenMax.isTweening(navmenu) === false) {
        this.$store.dispatch('toggleMobileNav', !this.mobileNav)

        if (this.mobileNav) {
          this.disableScroll(true)
        } else {
          this.disableScroll(false)
          this.modal = false
        }
      }
    },
    toggleModal (m) {
      if (m) {
        this.disableScroll(true)
        this.modal = m
      } else {
        this.disableScroll(false)
        this.modal = !this.modal
      }
    },
    disableScroll (bool) {
      if (bool) {
        document.getElementsByTagName('html')[0].style.overflow = 'hidden'
        document.getElementsByTagName('body')[0].style.overflow = 'hidden'
      } else {
        document.getElementsByTagName('html')[0].style.overflow = null
        document.getElementsByTagName('body')[0].style.overflow = null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/components/settings';
@import "~bulma/bulma";
.navbar {
  background: transparent;
  padding: 3rem 4rem;
  @include mobile() {
    padding: 1rem;
  }
  .navbar-brand {
    position: relative;
    z-index: 100;
    justify-content: space-between;

    .navbar-burger {
      transition: all 0.5s ease;
      background: none;
      position: relative;
      z-index: 10;
      &.is-active span {
        background: black;
      }
    }
  }
  .navbar-menu {
    z-index: 90;
    padding-left: 4rem;
    padding-right: 4rem;
    .navbar-end {
      align-items: center;
    }
    .navbar-item {
      color: $white;
      position: relative;
      padding-left: 0;
      padding-right: 0;
      margin: 0 2rem; 
      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        display: block;
        height: 2px;
        background: transparent;
        width: 0;
        transition: all 0.5s ease;
      }
      &:hover {
        &:after {
          background: $grey-light;
          width: 100%;
        }
      }
    }
  }
}

#mobileNav {
  z-index: 10;
  padding-left: 4rem;
  padding-right: 4rem;
  display: none;
  @include mobile() {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @include touch(){
    display: block;
    padding-top: 200px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    .mobile-nav-wrap {
      position: relative;
      z-index: 10;
      .navbar-item {
        color: $black;
        background: none!important;
        &:after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          margin: 0 auto;
          display: block;
          height: 0px;
          background: transparent;
          width: 2px;
          transition: all 0.5s ease;
        }
        &:hover {
          &:after {
            height: 100%;
            background: $black;
          }
        }
      }
    }
    .background {
      z-index: 8;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: white;
    }
    &.is-active {
      animation: set 1s ease;
    }
    &:not(.is-active) {
      animation: reset 1s ease;
    }
  }
}

@keyframes set {
  0% {
    display: none;
    opacity: 0;
  }
  100% {
    opacity: 1;
    display: block;
  }
}

@keyframes reset {
  0% {
    display: block;
  }
  50% {
    opacity: 0;
  }
  100% {
    display: none;
  }
}


.nav-burg {
  color: $white;
  width: 2rem;
  position: relative;
  z-index: 100;
  float: right;
  flex: 0 1 auto;
  cursor: pointer;
  transition: all 0.5s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @include desktop() {
    display: none;
  }
  &:hover {
    background: none;
  }
  span {
    background-color: transparent!important;
    cursor: pointer;
    border-radius: 2px;
    height: 0;
    width: 1.5rem;
    position: absolute;
    display: block;
    content: '';
    transition: all .66s cubic-bezier(.75,0,.50, 2);
  }
  span:after, span:before {
    cursor: pointer;
    border-radius: 6px;
    height: 2px;
    width: 1.5rem;
    background: $white;
    position: absolute;
    display: block;
    content: '';
    transition: all .66s cubic-bezier(.75,0,.50, 2);
  }
  span:before {
    top: -4px;
  }
  span:after {
    bottom: -4px;
  }
  &.is-active span {
    background-color: transparent;
  }
  &.is-active span:before {
    background: $black;
    transform-origin: center center;
    transform: translate(0, 3px) rotate(-45deg);
  }
  &.is-active span:after {
    background: $black;
    transform-origin: center center;
    transform: translate(0, -3px) rotate(45deg);
  }
}
</style>

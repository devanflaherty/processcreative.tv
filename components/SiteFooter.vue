<template>
<transition name="slide-up">
  <footer class="section">
    <div class="container">
      <div class="columns is-centered is-mobile is-multiline">
        <div id="prefooter" class="column contact-info is-half-desktop is-9-tablet is-11-mobile">
          <h2>Please reach out with any questions you may have.</h2>
          <a href="mailto:hello@ProcessCreative.tv?subject=New Business Inquiry">hello@processcreative.tv</a>
          <!-- <a href="tel:949-412-6944">949 412 6944</a> -->
        </div>
      </div>
    </div>

    <div id="footerBar" class="container">
      <div class="columns is-centered is-mobile is-multiline">
        <div class="column is-11-touch is-narrow-desktop flex-center-h-mobile">
          <div class="footer-logo-wrap">
            <Logo color="#ffffff"/>
          </div>
        </div>
        <div class="column is-11-touch">
          <p class="has-text-dark has-text-centered-touch">&copy; 2017 ProcessCreative.<br class="is-hidden-tablet"> All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</transition>
</template>

<script>
import Logo from '~/components/Logo'
export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/components/settings';
@import "~bulma/bulma";

footer {
  #prefooter {
    text-align: center;
  }
  h2 {
    margin-bottom: 2rem;
  }
  .contact-info {
    a {
      display: block;
      color: $white;
      font-size: 2rem;
      @include mobile() {
        font-size: 1rem;
      }
      &:hover {
        color: $blue;
      }
      &:first-child {
        margin-top: 1.25rem;
      }
    }
  }
}

#footerBar {
  padding: 18rem 0;
  @include mobile() {
    padding: 9rem 0;
  }
  .footer-logo-wrap {
    width: 40px; 
    height: 34px;
  }
  p {
    @include mobile() {
      font-size: 1rem;
    }
  }
}
</style>



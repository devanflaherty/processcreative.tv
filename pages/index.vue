<template>
  <section class="section">
    <div id="welcome" class="container" v-scroll-reveal="{duration: 1000}">
      <div class="columns is-centered is-mobile">
        <div class="column is-11">
          <h3>In-a-nutshell</h3>
          <blockquote>
            <p class="has-text-grey is-size-2 is-size-4-mobile">
              We are an agency rooted in film production. Our in-house team of directors, designers and producers is equipped to serve individuals, agencies and brands with creative solutions.
            </p>
          </blockquote>
        </div>
      </div>
    </div>
    
    <div id="featured" class="container">
      <h2 class="has-text-centered"><strong>Featured Work</strong></h2>
      <section class="video-features">
        <video-feature contentAligned="right">
          <div slot="video">
            <script src="//fast.wistia.com/embed/medias/30p0ubk7md.jsonp" async></script>
            <div class="wistia_embed wistia_async_30p0ubk7md seo=false videoFoam=true" style="height:100%;width:100%">&nbsp;</div>
          </div>
          <template slot="content">
            <h3>Stephen Kenn’s  Encounter Collection</h3>
            <!-- <p>We combine creativity, design and story into impacting products, content and strategies. Wheter that something is a single video or a year long strategy.</p> -->
          </template>
        </video-feature>

        <video-feature contentAligned="left">
          <div slot="video">
            <script src="//fast.wistia.com/embed/medias/nchyt29irv.jsonp" async></script>
            <div class="wistia_embed wistia_async_nchyt29irv seo=false videoFoam=true" style="height:100%;width:100%">&nbsp;</div>
          </div>
          <template slot="content">
            <h3>Don Julio</h3>
            <!-- <p>We combine creativity, design and story into impacting products, content and strategies. Wheter that something is a single video or a year long strategy.</p> -->
          </template>
        </video-feature>

        <video-feature contentAligned="right">
          <div slot="video">
            <script src="//fast.wistia.com/embed/medias/a1ys45v4lg.jsonp" async></script>
            <div class="wistia_embed wistia_async_a1ys45v4lg seo=false videoFoam=true" style="height:100%;width:100%">&nbsp;</div>
          </div>
          <template slot="content">
            <h3>Nissan</h3>
            <!-- <p>We combine creativity, design and story into impacting products, content and strategies. Wheter that something is a single video or a year long strategy.We combine creativity, design and story into impacting products, content and strategies. Wheter that something is a single video or a year long strategy.</p> -->
          </template>
        </video-feature>

        <video-feature contentAligned="left">
          <div slot="video">
            <script src="//fast.wistia.com/embed/medias/sa1a3lgrjf.jsonp" async></script>
            <div class="wistia_embed wistia_async_sa1a3lgrjf seo=false videoFoam=true" style="height:100%;width:100%">&nbsp;</div>
          </div>
          <template slot="content">
            <h3>OPKIX</h3>
            <!-- <p>We combine creativity, design and story into impacting products, content and strategies. Wheter that something is a single video or a year long strategy.</p> -->
          </template>
        </video-feature>
      </section>
    </div>

    <div id="clients" class='container'>
      <div class="columns is-mobile is-centered">
        <div class="column has-text-centered-desktop is-half-tablet is-11-mobile">
          <h2>Our Clients</h2>
          <p>
            We believe that honesty and friendships are at the heart of successful collaboration. We build long lasting relationships with our clients and invest ourselves into each opportunity we are given. Here are some of our clients.
          </p>
          <br>
        </div>
      </div>

      <ClientLogos/>
    </div>
  </section>
</template>

<script>
import VideoFeature from '~/components/VideoFeature'
import ClientLogos from '~/components/ClientLogos'

export default {
  head () {
    return {
      title: 'Home'
    }
  },
  components: {
    VideoFeature,
    ClientLogos
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
@import '~bulma/bulma';
#welcome {
  height: calc(100vh - 196px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  @include mobile() {
    height: calc(100vh - 300px);
    margin-bottom: 4rem;
  }
}
#featured {
  h2 {
    margin-bottom: 5.5rem;
  }
}
#clients {
  padding: 8rem 0 2rem;
  h2 {
    margin-bottom: 3.5rem;
  }
}
</style>

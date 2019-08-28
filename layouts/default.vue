<template>
  <div class="flex flex-wrap">
    <the-side-navigation></the-side-navigation>
    <section class="w-5/6">
      <the-top-navigation></the-top-navigation>
      <page-body>
        <nuxt />
      </page-body>
    </section>
  </div>
</template>

<script>
import TheTopNavigation from '~/components/TheTopNavigation.vue'
import TheSideNavigation from '~/components/TheSideNavigation.vue'
import PageBody from '~/components/PageBody.vue'
export default {
  components: {
    TheTopNavigation,
    TheSideNavigation,
    PageBody
  }
}
</script>

<template>
  <div class="flex flex-wrap">
    <side-navigation></side-navigation>
    <section class="w-5/6">
      <navigation></navigation>
      <page-body>
        <nuxt />
      </page-body>
    </section>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import SideNavigation from '~/components/SideNavigation.vue'
import PageBody from '~/components/PageBody.vue'
export default {
  components: {
    Navigation,
    SideNavigation,
    PageBody
  }
}
</script>

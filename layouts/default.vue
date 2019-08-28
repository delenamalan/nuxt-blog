<template>
  <div class="flex flex-wrap">
    <TheSideNavigation />
    <section class="w-5/6">
      <TheTopNavigation />
      <PageBody>
        <nuxt />
      </PageBody>
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

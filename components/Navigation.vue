<template>
  <nav class="flex justify-between flex-wrap">
    <div class="px-4 py-4 text-3xl focus:bg-gray-800">
      <nuxt-link to="/">
        <h1>Delena Malan</h1>
      </nuxt-link>
    </div>
    <div>
      <ul class="flex">
        <li
          v-for="page in navigation_pages"
          :key="page.name"
          class="-mb-px mr-px"
        >
          <nuxt-link
            :to="{ name: page.name }"
            class="outline-none focus:bg-gray-800 inline-block py-2 px-4 rounded-t"
            :class="isActive(page) ? active_classes : inactive_classes"
            >{{ page.display }}</nuxt-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => {
    return {
      active_classes: ['border-l', 'border-t', 'border-r'],
      inactive_classes: ['bg-gray-700'],
      navigation_pages: [
        {
          display: 'Usesthis',
          name: 'usesthis',
          active: true
        },
        {
          display: 'Lovesthis',
          name: 'lovesthis'
        }
      ]
    }
  },
  methods: {
    isActive(page) {
      return this.$route.name === page.name
    }
  }
}
</script>

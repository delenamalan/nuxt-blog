<template>
  <nav
    class="flex justify-between flex-wrap items-end px-1 pt-1 bg-gray-800 bg-crosses"
  >
    <div class="flex justify-end flex-col">
      <ul class="flex">
        <li
          v-for="page in navigation_pages"
          :key="page.name"
          class="-mb-px mr-px"
        >
          <nuxt-link
            :to="{ name: page.name }"
            class="outline-none focus:bg-gray-800 inline-block py-2 px-4 rounded-t text-white"
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
  data() {
    return {
      active_classes: ['border-b', 'border-gray-900', 'bg-gray-900'],
      inactive_classes: ['bg-gray-700'],
      navigation_pages: [
        {
          display: 'Delena Malan',
          name: 'index',
          active: true
        },
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

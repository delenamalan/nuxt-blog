<template>
  <div>
    <ul class="flex">
      <li v-for="page in navigation_pages" :key="page.name" class="-mb-px mr-1">
        <nuxt-link
          :to="{ name: page.name }"
          class="outline-none focus:bg-gray-800 inline-block py-2 px-4 rounded-t text-white"
          :class="isActive(page) ? active_classes : inactive_classes"
          >{{ page.display }}</nuxt-link
        >
      </li>
    </ul>
  </div>
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

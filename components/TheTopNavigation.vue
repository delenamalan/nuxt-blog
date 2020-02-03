<template>
  <nav
    class="flex justify-between flex-wrap items-end px-1 pt-1 bg-gray-800 bg-crosses"
  >
    <div class="flex justify-end flex-col">
      <ul class="flex">
        <li
          v-for="page in navigation_pages"
          :key="page.name"
          :class="isActive(page) ? active_classes : inactive_classes"
          class="-mb-px mr-px focus:bg-gray-800 inline-block py-2 px-2 rounded-t text-white flex items-center"
        >
          <nuxt-link
            :to="{ name: page.name }"
            class="outline-none text-white"
            >{{ page.display }}</nuxt-link
          >
          <a v-show="isActive(page)" href="/">
            <BaseIcon
              name="cross"
              class="fill-current text-white h-5 w-5 pl-1 -mr-1"
          /></a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import BaseIcon from '~/components/BaseIcon.vue'
export default {
  components: {
    BaseIcon
  },
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

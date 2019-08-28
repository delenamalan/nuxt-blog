<template>
  <nav class="border-r w-1/6 overflow-auto">
    <h3>Explorer</h3>
    <div class="">
      <ul class="">
        <li v-for="page in posts" :key="page.name" class="">
          <nuxt-link
            :to="{ name: page.name }"
            class="text-white"
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
      posts: [
        {
          display: 'First post',
          name: 'posts-2018-one'
        },
        {
          display: 'Last post',
          name: 'posts-2019-two'
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

<template>
  <nav class="border-r w-1/6 overflow-auto">
    <h3>Delena Malan</h3>
    <div class="">
      <ul class="">
        <TheSideNavigationItem
          v-for="page in pages"
          :key="page.key"
          :page="page"
        />
        <!-- <li
          v-for="page in pages"
          :key="page.name"
          class="text-white flex items-center"
          :class="isActive(page) ? active_classes : inactive_classes"
        >
          <BaseIcon
            name="chevron-right"
            class="fill-current h-5 w-5"
            :class="isActive(page) ? 'rotate-1/4' : ''"
          />
          <nuxt-link v-if="'to' in page" :to="page.to">
            {{ page.display }}</nuxt-link
          >
          <span v-else>{{ page.display }}</span>
        </li> -->
      </ul>
    </div>
  </nav>
</template>

<script>
// import BaseIcon from '~/components/BaseIcon.vue'
import TheSideNavigationItem from '~/components/TheSideNavigationItem.vue'
export default {
  components: {
    // BaseIcon,
    TheSideNavigationItem
  },
  data() {
    return {
      active_classes: ['border-b', 'border-gray-900', 'bg-gray-900'],
      inactive_classes: ['bg-gray-700'],
      pages: [
        {
          display: 'About',
          key: 'about',
          expanded: false,
          children: [
            {
              display: 'Delena',
              to: {
                name: 'index'
              },
              key: '2018'
            },
            {
              display: 'Usesthis',
              to: '/usesthis'
            },
            {
              display: 'Lovesthis',
              to: '/lovesthis'
            }
          ]
        },
        {
          display: 'Usesthis',
          to: '/usesthis',
          key: 'usesthis-2'
        },
        {
          display: 'Posts',
          key: 'posts',
          expanded: true,
          children: [
            {
              display: '2019',
              key: '2019',
              expanded: true,
              children: [
                {
                  display: 'First post',
                  to: {
                    name: 'posts-2018-one'
                  },
                  key: 'posts-2018-one'
                }
              ]
            },
            {
              display: '2018',
              key: '2018',
              children: [
                {
                  display: 'Last post',
                  to: {
                    name: 'posts-2019-two'
                  },
                  key: 'posts-2019-two'
                }
              ]
            }
          ]
        },
        {
          display: 'Usesthis',
          key: 'usesthis-3',
          to: {
            name: 'usesthis'
          }
        }
      ]
    }
  },
  methods: {
    isActive(page) {
      return 'to' in page && this.$route.name === page.to.name
    },
    sayHello() {
      console.log('HELLO!')
    }
  }
}
</script>

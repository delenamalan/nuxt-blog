<template>
  <li
    :v-show="shouldDisplay()"
    :class="shouldDisplay() ? 'block' : 'hidden'"
    class="ml-2 text-white"
  >
    <span
      :class="isActive(page) ? active_classes : inactive_classes"
      class="text-white flex items-center"
    >
      <BaseIcon
        v-if="'children' in page"
        :class="isActive(page) ? 'rotate-1/4' : ''"
        name="chevron-right"
        class="fill-current h-5 w-5"
      />
      <span v-else class="fill-current h-5 w-5"></span>
      <nuxt-link v-if="'to' in page" :to="page.to" class="text-white">
        {{ page.display }}</nuxt-link
      >
      <span v-else>{{ page.display }}</span>
    </span>
    <div v-if="'children' in page">
      <TheSideNavigationItem
        v-for="child in page.children"
        :key="child.key"
        :page="child"
        :parent="page"
      />
    </div>
  </li>
</template>
<script>
import BaseIcon from '~/components/BaseIcon.vue'
export default {
  name: 'TheSideNavigationItem',
  components: {
    BaseIcon
  },
  props: {
    page: {
      type: Object,
      default: () => {
        return {}
      }
    },
    parent: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      active_classes: ['border-b', 'border-gray-900', 'bg-gray-700'],
      inactive_classes: ['bg-gray-900']
    }
  },
  created() {
    console.log('TheSideNavigationItem created')
    console.log(this.$parent)
    console.log(this.$parent.$parent)
    // if (this.$parent) {
    this.$parent.sayHello()
    // }
    // if (this.parent) {
    //   console.log(this.page.key + ' has parent ' + this.parent.key)
    // }
    // console.log(
    //   this.page.key + ' should display: ' + !!(!parent || parent.expanded)
    // )
    // console.log(this.parent)
    // console.log('Children ' + this.page.children.length)
  },
  methods: {
    isActive(page) {
      return 'to' in page && this.$route.name === page.to.name
    },
    shouldDisplay(page) {
      if (!this.parent) {
        return true
      } else {
        return this.parent.expanded
      }
    }
    // sayHello() {
    //   console.log('HELLO!')
    // }
  }
}
</script>

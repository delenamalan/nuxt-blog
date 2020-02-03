<template>
  <svg
    :viewBox="icon.hasOwnProperty('viewBox') ? icon.viewBox : '0 0 24 24'"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path :d="icon.path" />
  </svg>
</template>

<script>
const icons = {
  'chevron-right': {
    path:
      'M9.3 8.7a1 1 0 0 1 1.4-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4l3.29-3.3-3.3-3.3z'
  },
  cross: {
    viewBox: '0 0 20 20',
    path:
      'M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z'
  },
  desktop: {
    viewBox: '0 0 24 24',
    path:
      'M13 17h-2v2h2v-2zm2 0v2h2a1 1 0 010 2H7a1 1 0 010-2h2v-2H4a2 2 0 01-2-2V5c0-1.1.9-2 2-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-5zM4 5v10h16V5H4z'
  }
}
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    icon() {
      return icons[this.name]
    }
  },
  created() {
    console.log(this.icon.path)
    console.log(this.icon.viewBox)
  }
}
</script>

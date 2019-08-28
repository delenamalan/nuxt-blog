<template>
  <div>
    <div id="hello">
      <p>
        Hi! I'm <strong>Delena Malan</strong>, a full-stack software engineer,
        from beautiful Cape Town, South Africa. I currently work at a consulting
        company called
        <BaseLink href="https://www.linkedin.com/company/fluenty-it/"
          >Fluenty IT</BaseLink
        >.
      </p>
      <p>
        I've dabbled high and low in different programming languages, frameworks
        and industries. Currently I mostly work with Laravel and VueJS and I try
        to keep my Python skills up to date. I also sometimes code work with
        Ruby on Rails and NodeJS.
      </p>
      <p>
        My other interests span non-fiction books, films, music, cooking,
        podcasts and playing soccer. I am an explorer of ideas and love
        questioning the status quo.
      </p>
      <p>
        I use this site to link to some of my favourite things and to write
        about a few things! You can also find me on
        <BaseLink href="https://stackoverflow.com/users/3486675/delena-malan"
          >StackOverflow</BaseLink
        >, <BaseLink href="https://twitter.com/delenamalan">Twitter</BaseLink>,
        <BaseLink href="https://www.linkedin.com/in/delenamalan"
          >LinkedIn</BaseLink
        >
        and <BaseLink href="https://github.com/delenamalan">github</BaseLink>.
      </p>
    </div>
  </div>
</template>

<script></script>

<script>
import BaseLink from '~/components/BaseLink.vue'
export default {
  components: {
    BaseLink
  }
}
</script>

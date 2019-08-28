<template>
  <div>
    <div>
      <ul class="list-dash">
        <li>
          <strong>Shell</strong>:
          <BaseLink href="https://github.com/robbyrussell/oh-my-zsh"
            >Oh-my-zsh</BaseLink
          >
          using the
          <BaseLink href="http://blog.ysmood.org/my-ys-terminal-theme/"
            >ys</BaseLink
          >
          theme and the
          <BaseLink href="https://github.com/zsh-users/zsh-autosuggestions"
            >zsh-autosuggestions</BaseLink
          >
          plugin.
        </li>
        <li>
          <strong>Editors</strong>:
          <ul class="list-dash pl-4">
            <li>
              Vim, because I love the keyboard. Check out my
              <BaseLink
                href="https://gist.github.com/delenamalan/a663b2d0870c966e9de9"
                >vimrc</BaseLink
              >.
            </li>
            <li>
              <BaseLink href="https://www.jetbrains.com/pycharm/"
                >PyCharm</BaseLink
              >
              with the Vim plugin for Python development.
            </li>
            <li>
              <BaseLink href="https://code.visualstudio.com/"
                >Visual Studio Code</BaseLink
              >
              for the rest with a handful plugins, including the Vim plugin of
              course.
            </li>
          </ul>
        </li>
        <li>
          <strong>Version control</strong>: git in the terminal with some
          aliases and
          <BaseLink href="https://github.com/jonas/tig">tig</BaseLink> for
          easily viewing commit diffs.
        </li>
        <li><strong>Browsers</strong>: Firefox, Chrome.</li>
        <li><strong>Search</strong>: Google, DuckDuckGo.</li>
        <li>
          <strong>Time tracking</strong>:
          <BaseLink href="toggl.com">Toggl</BaseLink> and
          <BaseLink href="https://wakatime.com/">Wakatime</BaseLink>
        </li>
        <li><strong>Note taking</strong>: Markdown in Vim.</li>
        <li>
          <strong>Instant messaging</strong>:
          <BaseLink href="http://rambox.pro/">Rambox</BaseLink> - one window for
          all of my messages!
        </li>
        <li>
          <strong>pdfs</strong>: On Ubuntu I like qpdfview for opening multiple
          pdfs and Xournal for annotating them.
        </li>
        <li><strong>Favourites at home</strong>: vlc, inkscape, gimp.</li>
        <li>
          <strong>Favourites for development on a Mac</strong>:
          <ul class="list-dash pl-4">
            <li>
              <BaseLink href="http://snappy-app.com/">Snappy</BaseLink> for
              screenshots
            </li>
            <li>
              <BaseLink href="https://www.getpostman.com/">Postman</BaseLink>
              for testing APIs
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BaseLink from '~/components/BaseLink.vue'
export default {
  components: {
    BaseLink
  }
}
</script>

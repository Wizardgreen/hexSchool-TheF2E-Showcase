<template lang="pug">
  nav.the-heading
    .container
      .title
        h1
          router-link.brand(to="/")
            span.green Green
            span e's
      ul.links
        li
          router-link(to="/") TheF2E - Showcase
        li
          a(href="https://wizardgreen.github.io/A-page-about-Greene/") Personal Site
        li
          a(href="https://wizardgreen.github.io/Blog/") Blog
      ul.links-m
        li
          router-link(to="/")
            i.fas.fa-cubes
        li
          a(href="https://wizardgreen.github.io/A-page-about-Greene/")
            i.fas.fa-address-card
        li
          a(href="https://wizardgreen.github.io/Blog/")
            i.fas.fa-comment
</template>

<script>
export default {
  name: 'TheHeading',
}
</script>

<style lang="scss" scoped>
.the-heading {
  background-color: #222;
}
.container  {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  @media (min-width: 992px) {
    width: 70%;
  }
}
.title {  
  display: inline-block;
  padding: .7rem;
  color: #eee;
  > h1 {
    font-size: 1.2rem;
    font-weight: 400;
    span.green {color: #42b983;}
  }
}
.links{
  display: none;
  @media (min-width: 992px) {
    display: block;
  }
}
.links-m {
  @media (min-width: 992px) {
    display: none;
  }
}
.links, .links-m {
  list-style-type: none;
  > li {
    margin-right: 1rem;
    float: left;
  }
}
a {
  padding-bottom: .2rem;
  color: #eee;
  text-decoration: none;
  transition: color .3s ease-in-out;
  &:hover {
    color: #d6b161;
  }
  &.router-link-exact-active:not(.brand) {
    color: #d6b161;
    border-bottom: 1px solid  #d6b161;
  }
}
</style>

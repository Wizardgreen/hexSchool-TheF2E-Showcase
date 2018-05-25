<template>
  <div class="navigation">
    <div class="container">
      <div class="title">
        <h1><span>Green</span>e's</h1>
      </div>
      <ul class="links">
        <li><router-link to="/">TheF2E - Showcase</router-link></li>
        <li><a href="https://wizardgreen.github.io/A-page-about-Greene/">Personal Site</a></li>
        <li><a href="https://wizardgreen.github.io/Blog/">Blog</a></li>
      </ul>
      <ul class="links-m">
        <li><router-link to="/"><i class="fas fa-cubes"></i></router-link></li>
        <li><a href="https://wizardgreen.github.io/A-page-about-Greene/"><i class="fas fa-address-card"></i></a></li>
        <li><a href="https://wizardgreen.github.io/Blog/"><i class="fas fa-comment"></i></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import '@/assets/js/fontawesome-all.min.js';
export default {
  name: 'Navigation',
}
</script>

<style lang="scss" scoped>
.navigation {
  background-color: #222;
}
.container  {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  > * {}
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
    span {color: #42b983;}
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
  &.router-link-exact-active {
    color: #d6b161;
    border-bottom: 1px solid  #d6b161;
  }
}
</style>

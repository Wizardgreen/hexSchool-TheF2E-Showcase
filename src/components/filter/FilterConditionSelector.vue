<template lang="pug">
  .filter-condition-selector
    .condition-panel(:class="{actived: isSearching}")
      CommenButton.btn-close(outward='light' shape='cycle' @press="hidePanel")
        i.fas.fa-times(slot="text")
      form.from-container
        input.input.eventName(placeholder="Event Name" type="text" v-model="condition.eventName")
        input.input.begDate(v-model="condition.begDate" placeholder="YY/MM/DD - Begin" type="text")
        input.input.endDate(v-model="condition.endDate" placeholder="YY/MM/DD - End" type="text")
        select.input.location(v-model="condition.location")
          option.option(value="" disable) --Location--
          option.option(
            v-for="name in locationList"
            :value="name"
            ) {{name}}
      CommenButton.btn-search(@press="searchEvent" outward='light')
        i.fas.fa-search(slot="text")
      CommenButton#btn-unfold(@press="showPanel" shape="column" size="s")
        i.fas.fa-search(slot="text")
</template>

<script>
import Vue from "vue";
import Component from 'vue-class-component';
import CommenButton from '../commen/CommenButton.vue';
import {
  SHOW_CONDITION_PANEL,
  HIDE_CONDITION_PANEL,
  APPLY_SEARCH_CONDITION,
  CHANGE_PAGE,
} from '@/mutation/week2Filter.js';

export default Component({
  components: { CommenButton },
})(
  class FilterConditionSelector extends Vue {
    condition = {
      eventName: '',
      begDate: '',
      endDate: '',
      location: '',
    };
    get isSearching() { return this.$store.state.isSearching }
    get locationList() { return this.$store.getters.locationList }
    showPanel() { this.$store.commit(SHOW_CONDITION_PANEL) };
    hidePanel() { this.$store.commit(HIDE_CONDITION_PANEL) };
    searchEvent() {
      this.$store.commit(APPLY_SEARCH_CONDITION, {...this.condition });
      this.$store.commit(CHANGE_PAGE, 1);
      this.$store.commit(HIDE_CONDITION_PANEL);
    };
  }
);
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variable.scss';
@import '../../assets/scss/breakpoint.scss';

.condition-panel {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  background-color: #222;
  opacity: .8;
  z-index: 10;
  transform: translateX(-100%);
  transition: transform .3s ease-in-out;
  @include break-point($desktop) {
    width: 400px;
  }
  &.actived {
    transform: translateX(0);
  }
}
.from-container {
  width: 70%;
  padding-top: 8rem;
}
.input {
  width: 100%;
  height: 2.5rem;
  margin-bottom: 3rem;
  padding: 0 1rem;
  border: 3px solid #fdfdfd;
  border-radius: 1.5rem;
  background-color: #fdfdfd;
  font-size: 1.2rem;
  letter-spacing: 2px;
  transition: border .3s ease-in-out;
  &:focus {
    outline:none;
    border: 3px solid $brand-color;
  }
  &::placeholder {
    font-size: 1.2rem;
    color: #ccc;
    text-align: center;
  }
}
select.input {
  color: #ccc;
  text-align-last: center;
}
.btn-close {
  position: absolute;
  top: 2rem;
  right: 2rem;
}
.btn-search {
  position: absolute;
  bottom: 10rem;
}
#btn-unfold {
  position: absolute;
  top: 4rem;
  right: 0;
  font-size: 1.2rem;
  transform: translateX(100%);
}
</style>

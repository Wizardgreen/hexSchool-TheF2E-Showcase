<template lang="pug">
.text-input-base
  label(:for="label") {{ label }}
    .des(:class="check")
      template(v-if='check === "error"')
        span.icon
          i.fas.fa-times
      template(v-if='check === "correct"')
        span.icon
          i.fas.fa-check
      template(v-if='check === "warning"')
        span.icon
          i.fas.fa-exclamation
      template(v-if="isOptional && !check")
        span (Optional)
  input.text-input(
    :id="label"
    :name="label"
    :class="check"
    :type="type"
    @focus="isTyping = true"
    @blur="isTyping = false"
    v-model="value"
    :placeholder="placeholder"
  )
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

export default Component({
  props: {
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
    type: {
      type: String,
      required: false,
      default: 'text',
    },
    isOptional: {
      type: Boolean,
      required: false,
      default: false,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  watch: {
    check() {
      if (this.isOptional) { return; }
      if (this.check === 'error') {
        this.$emit('failed', this.index);
      }
      else if (this.check === 'correct') {
        this.$emit('complete', this.index);
      }
    },
  },
})(
  class TextInput extends Vue {
    value = "";
    isTyping = false;
    get check() {
      const pattern = this.regExp[this.type];
      if (!this.value) { return; }
      else if (!this.value.match(pattern) && this.isTyping) { return 'warning'; }
      else if (!this.value.match(pattern) && !this.isTyping) { return 'error'; }
      else if (this.value.match(pattern) && this.isTyping) { return 'typing'; }
      else if (this.value.match(pattern) && !this.isTyping) { return 'correct'; }
    };
    regExp = {
      email: new RegExp(/^.+@.+\.com.*/),
      password: new RegExp(/./),
    };
  }
)
</script>

<style lang="scss" scoped>
@import '../../assets/scss/week6/_utils.scss';

.text-input {
  height: 52px;
  width: 100%;
  padding: 1rem;
  border: none;
  border-bottom: 2px solid;
  border-bottom-color: #ccc;
  background-color: transparent;
  outline: none;
  transition: border-bottom-color .45s ease-in-out;
  @include input($primary-black);
  &.warning {
    border-bottom-color: $secondary-yellow;
  }
  &.error {
    border-bottom-color: $secondary-red;
  }
  &.typing {
    border-bottom-color: $secondary-blue;
  }
  &.correct {
    border-bottom-color: $secondary-green;
  }
  &::placeholder {
    color: #ccc;
  }
}
.des {
  &.warning {
    color: $secondary-yellow;
  }
  &.error {
    color: $secondary-red;
  }
  &.typing {
    color: $secondary-blue;
  }
  &.correct {
    color: $secondary-green;
  }
}
label {
  @include label($primary-black);
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  > .des {
    @include label-des;
    margin-left: .5rem;
  }
}
</style>

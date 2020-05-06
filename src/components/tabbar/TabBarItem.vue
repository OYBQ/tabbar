<template>
  <div id="tab-bar-item" @click ="itemClick">
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
  </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props: {
          path: String
        },
        methods: {
          itemClick() {
            this.$router.replace(this.path)
          }
        }
    }
</script>

<style scoped>
  #tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    box-shadow: 0 -1px 0.5px rgba(100,100,100,0.2);
  }
  #tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }

</style>

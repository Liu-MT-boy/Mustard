<template>
  <div
    class="scrollList"
    :style="{ height: 700 + 'px' }"
    @scroll="handleScroll"
    ref="scroll"
  >
    <!-- 列表展示 -->
    <div class="content" :style="{ top: star * size + 'px' }">
      <p
        v-for="item in scrollList?.slice(star, stop)"
        :key="item.id"
        class="list"
        :style="{ height: size + 'px' }"
      >
        <span>
          {{ item.name }}
        </span>
      </p>
    </div>
    <div :style="{ height: scrollList?.length * size + 'px' }"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const star = ref(0)
const stop = ref(20)
const scroll = ref({
  scrollTop: Number
})
const props = defineProps({
  scrollList: Array,
  size: Number,
  shownumber: Number
})

const handleScroll = (el: Object) => {
  const scrollTop = scroll.value.scrollTop
  star.value = Math.floor(scrollTop / props.size)
  stop.value = star.value + props.shownumber
}
</script>

<style lang="scss" scoped>
.scrollList {
  height: 100%;
  border: 1px solid blanchedalmond;
  width: 350px;
  overflow: auto;
  position: relative;
  line-height: 50px;
  text-align: center;

  .content {
    position: absolute;
    width: 100%;

    .list {
      border-bottom: 1px solid;
      width: 100%;
      line-height: 50px;
      text-align: center;
    }
  }
}
</style>

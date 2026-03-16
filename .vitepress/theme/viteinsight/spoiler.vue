<template>
  <!-- Box 块级整体模糊模式 -->
  <div v-if="box" class="vite-insight-spoiler-box" :class="{ 'is-revealed': isRevealed }" @click="toggleBox">
    <!-- 悬浮在模糊背景之上的清晰标题层，添加过渡动画 -->
    <transition name="spoiler-fade">
      <div class="spoiler-box-overlay" v-if="!isRevealed">
        <span class="spoiler-box-title">
          <svg class="spoiler-box-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
          {{ title }}
        </span>
      </div>
    </transition>
    <!-- 内容区域，包含你所有的 Markdown -->
    <div class="spoiler-box-content" @click.stop="contentClick">
      <slot></slot>
    </div>
  </div>

  <!-- 普通行内文本模糊模式 -->
  <span
    v-else
    class="vite-insight-spoiler-inline"
    :class="{ 'is-revealed': isRevealed }"
    @click.stop="toggleReveal"
  >
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  box: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: '点击展开内容'
  }
})

const isRevealed = ref(false)

// 行内模式：允许反复切换
const toggleReveal = () => {
  isRevealed.value = !isRevealed.value
}

// Box模式：点击最外层容器切换状态
const toggleBox = () => {
  isRevealed.value = !isRevealed.value
}

// 阻止内容区域的点击事件冒泡到外层容器，防止复制文字或点击链接时意外闭合
const contentClick = (event: Event) => {
  if (isRevealed.value) {
    event.stopPropagation()
  }
}
</script>
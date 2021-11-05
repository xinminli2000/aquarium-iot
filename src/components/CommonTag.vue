<template>
  <div class="tags">
    <el-tag size="small" :key="tag.name" v-for="tag in tags" :closable="tag.name !== 'home'" @close="handleClose(tag)">
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState({
      tags: (state) => state.tab.tagList
    })
  },
  data() {
    return {
      dynamicTags: ['标签一', '标签二', '标签三'],
      inputVisible: false,
      inputValue: ''
    }
  },
  methods: {
    ...mapMutations({
      close: 'closeTag'
    }),
    handleClose(tag) {
      this.close(tag)
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  padding: 10px;
  .el-tag {
    margin-right: 15px;
  }
}
</style>

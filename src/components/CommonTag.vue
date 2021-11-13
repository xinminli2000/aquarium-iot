<template>
  <div class="tags">
    <el-tag
      size="small"
      :key="tag.name"
      v-for="tag in tags"
      :closable="tag.name !== 'home'"
      @close="handleClose(tag)"
      @click="changeMenu(tag)"
      :effect="$route.name === tag.name ? 'dark' : 'plain'"
    >
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
    return {}
  },
  methods: {
    ...mapMutations({
      close: 'closeTag'
    }),
    handleClose(tag) {
      this.close(tag)
    },
    changeMenu(item) {
      this.$router.push({ name: item.name }).catch(() => {})
      this.$store.commit('selectMenu', item)
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  padding: 10px;
  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>

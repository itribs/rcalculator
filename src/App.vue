<template>
  <div id="app">
    <el-row :gutter="10"
            class="main"
            style="margin-left:0; margin-right:0;">
      <el-col :span="14"
              class="main-col code">
        <el-input type="textarea"
                  ref="input"
                  resize="none"
                  v-model="code"
                  wrap="off"
                  @input="change">
        </el-input>
      </el-col>
      <el-col :span="10"
              class="main-col result">
        <el-input type="textarea"
                  resize="none"
                  ref="ouput"
                  readonly="true"
                  wrap="off"
                  v-model="result"
                  v-bind:class="color">
        </el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'app',
  data () {
    return {
      code: window.getClipboard(),
      result: '',
      color: 'success'
    }
  },
  mounted () {
    let input = this.$refs.input.$el.querySelector('textarea')
    input.addEventListener('scroll', this.onscroll, true)
    this.change()
  },
  methods: {
    onscroll () {
      let input = this.$refs.input.$el.querySelector('textarea')
      let ouput = this.$refs.ouput.$el.querySelector('textarea')
      ouput.scrollTop = input.scrollTop
    },
    change () {
      let result = window.evaluateCode(this.code)
      if (result.error) {
        this.result = result.error.message
        this.color = 'error'
      } else {
        let str = ''
        for (let i = 0; i < result.value.length; i++) {
          str += result.value[i] + '\n'
        }
        this.result = str
        this.color = 'success'
        this.onscroll()
      }
    }
  },
  created () {
    this.change = _.debounce(this.change, 500)
  }
}
</script>

<style>
body,
html {
  height: 100%;
  margin: 0;
  padding: 0;
}
.el-textarea,
.el-textarea .el-textarea__inner {
  height: 100%;
  border: 0;
}
.el-textarea .el-textarea__inner {
  padding: 20px;
}
#app {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
}

.main {
  border: 1px solid #eee;
}
.main textarea {
  font-size: 28px;
  overflow-x: auto;
  font-weight: bold;
}
.main,
.main-col {
  height: 100%;
}
.result {
  border-left: 1px solid #eee;
}
.result textarea {
  overflow: hidden;
}
.main .error textarea {
  color: #ff5252;
  font-size: 12px;
}
.main .success textarea {
  color: #0fb11c;
}
</style>

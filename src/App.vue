<template>
  <div id="app">
    <el-container style="margin-left:0; margin-right:0;">
      <el-main>
        <el-row>
          <el-col :span="14"
                  :style="{padding:0}"
                  class="code">
            <el-input type="textarea"
                      ref="input"
                      resize="none"
                      v-model="code"
                      wrap="off"
                      @input="debounce">
            </el-input>
          </el-col>
          <el-col :span="10"
                  class="result"
                  :style="{padding:0}">
            <el-input type="textarea"
                      resize="none"
                      ref="ouput"
                      readonly="true"
                      wrap="off"
                      v-model="result"
                      :class="color">
            </el-input>
          </el-col>
        </el-row>
      </el-main>
      <el-footer height="48">
        <el-row>
          <el-col :span="6">
            <el-tooltip placement="top"
                        effect="light">
              <div slot="content">
                变量： a = -1.2 <br />
                默认变量：E、LN2、LN10、LOG2E、LOG10E、PI、SQRT1_2、SQRT2 <br />
                可以重新赋值：E = 0 <br />
                运输符：+、-、*、/、%、|、&、^、<<、>>、()、+=、-=、|= 等等 <br />
                  Math方法：abs(-1.2)、max(0.5, -2.1)、random() 等等 <br />
              </div>
              <i class="el-icon-question"></i>
            </el-tooltip>
          </el-col>
          <el-col :span="18"
                  :style="{'text-align':'right'}">
            <el-button size="medium"
                       @click="copy">复制最后结果({{modifierKey}} + C)</el-button>
            <el-button type="danger"
                       size="medium"
                       @click="clear">清空({{modifierKey}} + R)</el-button>
          </el-col>
        </el-row>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'app',
  data () {
    return {
      code: '',
      result: '',
      color: 'success',
      modifierKey: utools.isMacOs() ? 'Command' : 'Ctrl'
    }
  },
  mounted () {
    let input = this.$refs.input.$el.querySelector('textarea')
    input.addEventListener('scroll', this.onscroll, true)
    this.change()

    document.onkeydown = function (e) {
      let modifierKey = utools.isMacOs() ? e.metaKey : e.ctrlKey
      if (modifierKey) {
        if (e.keyCode == 82) {
          this.clear()
        } else if (e.keyCode == 67) {
          this.copy()
        }
      }
    }.bind(this)

    input.focus()
  },
  methods: {
    onscroll () {
      let input = this.$refs.input.$el.querySelector('textarea')
      let ouput = this.$refs.ouput.$el.querySelector('textarea')
      ouput.scrollTop = input.scrollTop
    },
    clear () {
      this.code = ''
      this.change()
    },
    debounce: _.debounce(function () {
      this.change()
    }, 500),
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
    },
    copy () {
      if (this.color == 'success' && this.result) {
        let result = this.result.trim()
        let results = result.split('\n')
        if (results.length > 0) {
          window.saveClipboard(results[results.length - 1])
          utools.hideMainWindow()
        }
      }
    }
  },
  created () {
    utools.onPluginEnter(({ code, type, payload, optional }) => {
      if (!/^[\.+\-*/%0-9\(\)]*$/.test(payload)) {
        payload = ''
      }
      let result = utools.db.get("code")
      if (!payload && result) {
        payload = result.data
      }
      this.code = payload
      this.change()
    })
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

#app .el-container {
  border: 1px solid #eee;
}
#app .el-container textarea {
  font-size: 28px;
  overflow-x: auto;
  font-weight: bold;
}
#app .el-container,
#app .el-main,
#app .el-row,
#app .el-col {
  height: 100%;
  padding: 0;
}
#app .result {
  border-left: 1px solid #eee;
}
#app .result textarea {
  overflow: hidden;
}
#app .el-container .error textarea {
  color: #ff5252;
  font-size: 12px;
}
#app .el-container .success textarea {
  color: #0fb11c;
}
#app .el-main {
  padding: 0 5px;
}
#app .el-footer {
  border-top: 1px solid #eee;
  padding: 0;
}
#app .el-footer .el-icon-question {
  font-size: 24px;
  float: left;
  margin: 12px;
  color: #ccc;
}
#app .el-footer .el-button {
  font-weight: bold;
  margin: 6px 10px 0 0;
}
</style>

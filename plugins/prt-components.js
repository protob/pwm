import Vue from 'vue'
import '@prt-ui-vue/styles.scss'
import { PrtButton } from '@prt-ui-vue'

const components = {
  PrtButton
}

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})

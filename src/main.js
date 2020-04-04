import Vue from 'vue'
import App from './App.vue'

// create a global filter 
// .filter() takes in 2 parameter:
// 1) name of the filter
// 2) function that roms through the values that we are trying to output in the browser to manipulate and return an updated value and output to the browser
// it will be an arrow function that takes in a val (value)
Vue.filter('snippet', val=>{
  if (!val||typeof(val)!='string') {
     return ''
  }
  val = val.slice(0,50)
  return val
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
Vue.directive('n', {
    inserted: function (el, binding) {
        el.textContent = Math.pow(binding.value, 2)
    },
    update: function (el, binding) {
        el.textContent = Math.pow(binding.value, 2)
    },
})
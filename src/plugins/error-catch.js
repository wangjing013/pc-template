import Vue from 'vue'
import { defineNuxtPlugin } from '@nuxtjs/composition-api'

export default defineNuxtPlugin(() => {
  Vue.config.errorHandler = (error) => {
    console.error(error)
    return false
  }
})

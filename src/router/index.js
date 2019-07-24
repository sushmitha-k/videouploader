import Vue from 'vue'
import Router from 'vue-router'
import VideoUploader from '@/components/video-uploader'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VideoUploader',
      component: VideoUploader
    }
  ]
})

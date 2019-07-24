<template lang="html">
  <div name="video-uploader" class="main-content">
    <h1>Video Uploader</h1>
    <video width="400" class="videoplayer playVideo">
      <source src="@/assets/sample.mp4" type="video/mp4" id="videoPlayer"/>
    </video>
    <div class="playpause"></div>
    <div class="action-btns">
      <input type="file" name="file[]" class="video-uploader" accept="video/*">
      <button class="playBtn play playVideo">Play Video</button>
      <button class="playBtn pause playVideo">Pause Video</button>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'VideoUploader',
  mounted () {
    // used to upload the video
    $(document).on('change', '.video-uploader', function (evt) {
      var $source = $('#videoPlayer')
      $source[0].src = URL.createObjectURL(this.files[0])
      $source.parent()[0].load()
    })
    $('.pause').hide()
    this.playpause()
  },
  methods: {
    playpause: function () {
      // triggers the functionality of pause or play button
      $('.playVideo').parent().click(function () {
      if ($(this).children('.playVideo').get(0).paused) {
          $(this).children('.playVideo').get(0).play()
          $('.play').hide()
          $('.pause').show()
          $(this).children('.playpause').fadeOut()
        } else {
          $(this).children('.playVideo').get(0).pause()
          $(this).children('.playpause').fadeIn()
          $('.pause').hide()
          $('.play').show()
        }
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>

<template>
  <div class="sound-button" @click="playSound">
    <img :src="image" :alt="text">
    <div class="text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "SoundButton",
  props: ["image", "sound", "text"],
  data() {
    return {};
  },
  methods: {
    playSound() {
      this.$emit("stop");
      this.sound.play();
    },
    stop() {
      this.sound.pause();
      this.sound.currentTime = 0;
    }
  }
};
</script>

<style>
img {
  width: 100%;
  height: 100%;
}
.sound-button {
  display: inline-block;
  position: relative;
  text-align: center;
  color: white;
  width: 150px;
  height: 120px;
}
.text {
  color: white;
  text-shadow:
       3px 3px 0 #000,
     -1px -1px 0 #000,  
      1px -1px 0 #000,
      -1px 1px 0 #000,
       1px 1px 0 #000;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 26px;
  line-height: 22px;
  font-weight: 700;
}
</style>

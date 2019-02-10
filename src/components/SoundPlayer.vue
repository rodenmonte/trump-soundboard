<template>
  <div class="">
    <h1>Trump Soundboard</h1>
    <template v-for="button in soundButtons">
      <sound-button
        :key="button"
        @stop="stopAll"
        :sound="button.sound"
        :text="button.text"
        :image="button.image" />
    </template>
  </div>
</template>

<script>
import SoundButton from '@/components/SoundButton';

export default {
  name: 'SoundPlayer',
  data () {
    return {
      soundButtons: [
        {
          sound: new Audio(require('../assets/sounds/rich.wav')),
          text: "I'm Rich",
          image: require('../assets/images/rich.jpg')
        },
        {
          sound: new Audio(require('../assets/sounds/good_evening.mp3')),
          text: "Good Evening",
          image: require('../assets/images/evening.jpeg')
        },
        {
          sound: new Audio(require('../assets/sounds/have_a_good_time.mp3')),
          text: "Have a good time",
          image: require('../assets/images/have_a_good_time.jpg')
        },
        {
          sound: new Audio(require('../assets/sounds/how_are_you.mp3')),
          text: "How are you",
          image: require('../assets/images/how_are_you.jpeg')
        },
        {
          sound: new Audio(require('../assets/sounds/i_run_i_win.mp3')),
          text: "I run, I win",
          image: require('../assets/images/i_run_i_win.jpeg')
        },
        {
          sound: new Audio(require('../assets/sounds/im_smart.mp3')),
          text: "I'm Smart",
          image: require('../assets/images/im_smart.jpg')
        },
        {
          sound: new Audio(require('../assets/sounds/really_rich.mp3')),
          text: "I'm REALLY rich",
          image: require('../assets/images/really_rich.jpg')
        },
        {
          sound: new Audio(require('../assets/sounds/strange.mp3')),
          text: "Strange!",
          image: require('../assets/images/strange.jpeg')
        },
        {
          sound: new Audio(require('../assets/sounds/youre_fired.wav')),
          text: "Ya Fired!",
          image: require('../assets/images/youre_fired.jpg')
        },
        {
          sound: new Audio(require('../assets/sounds/ivy_leage.mp3')),
          text: "Ivy League",
          image: require('../assets/images/ivy_league.jpeg')
        },
        {
          sound: new Audio(require('../assets/sounds/nope.wav')),
          text: "Nope",
          image: require('../assets/images/nope.jpg')
        },
      ]
    }
  },
  components: {
    SoundButton
  },
  methods: {
    stopAll() {
      for (var i = 0; i < this.soundButtons.length; i++) {
        this.soundButtons[i].sound.pause()
        this.soundButtons[i].sound.currentTime = 0;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

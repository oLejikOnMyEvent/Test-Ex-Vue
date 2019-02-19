<template>
  <div>
    <h1>Вы находитесь на сайте</h1>
    <span>{{timer_values}} Сенунд</span>
    <span> Минут</span>
    <span> Часов</span>
    <div class="button">
      <b-button variant="outline-primary" @click="setToZero()">Сбросить таймер</b-button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "timer2",
  data() {
    return {
      timer_values: null
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/timer2")
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log("error");
      });
  },
  methods: {
      setToZero(){
          
      }
  },
};
</script>
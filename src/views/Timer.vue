<template>
<div>

    <h1> Вы находитесь на сайте: </h1>
        <span> {{sec}} Сенунд</span>
        <span> {{min}} Минут</span>
        <span> {{hour}} Часов</span>

</div>
    
</template>

<script>
const STORAGE_SEC = "sec-storage"
const STORAGE_MIN = "min-storage"
const STORAGE_HOUR = "hour-storage"
export default {
    name: "timer",
    data() {
        return{
            sec: 0,
            min: 0,
            hour: 0,
            
        }     
            
    },
    created() {
        this.sec = sessionStorage.getItem(STORAGE_SEC)
        this.min = sessionStorage.getItem(STORAGE_MIN)
         this.hour = sessionStorage.getItem(STORAGE_HOUR)
    },
    mounted() {
         setInterval( ()=>{
            this.sec++
         sessionStorage.setItem(STORAGE_SEC, this.sec)
            if (this.sec==60) {this.sec=0};
        },1000),
         setInterval(() =>{
            this.min++
               sessionStorage.setItem(STORAGE_MIN, this.min)
            if (this.min==60) {this.min=0};
         },60*1000),
         setInterval(()=>{
            this.hour++
               sessionStorage.setItem(STORAGE_HOUR, this.hour)
         },1000*60*60)
    }
    
      
    

}
</script>

<style scoped>
span{
    font-size: 20px;
}
</style>
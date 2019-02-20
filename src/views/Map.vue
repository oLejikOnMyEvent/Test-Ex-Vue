<template>
<div>
  
    
  
    


 <b-embed
    type="iframe"
    aspect="16by9"
    src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa62e6bfc3fe32ab178add946ed360fbea17567eb61cf8075203f6e1d4c0fec9c&amp;source=constructor"
    allowfullscreen
  />
  <div v-show="show" class="preloader">
</div>
    

   </div> 

   
</template>


<script>
export default {
    name: "maps",
    data(){
        return{
            show: true
        }
    },
    mounted() {
        this.showToggle();
        },
        methods: {
            showToggle(){
                setTimeout(()=>{
                    this.show = false;
                
            }, 1000)
        }
        }
    
}
</script>

<style scope>
  .preloader {
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
    position: absolute;
    width: 50px;
    height: 50px;
     border: 10px solid white;
     z-index: 1;
      border-radius: 50%;
    border-top-color: deepskyblue;
    left: 50%;
    top: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    animation: 0.5s spin infinite linear;
}

@keyframes spin {
    from {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}
</style>
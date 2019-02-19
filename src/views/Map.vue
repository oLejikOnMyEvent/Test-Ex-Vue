<template>
<div>
  
   <div id="page-preloader" class="preloader">
    <div class="loader">  </div>


 <b-embed
    type="iframe"
    aspect="16by9"
    src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa62e6bfc3fe32ab178add946ed360fbea17567eb61cf8075203f6e1d4c0fec9c&amp;source=constructor"
    allowfullscreen
  />
</div>
    

 
</div>
    
    
</template>

<style scope>
  .preloader {
    z-index: 2;
    transition: 1s all;
    opacity: 1;
    visibility: visible;
}
.loader {
    width: 75px;
    height: 75px;
    border: 10px solid white;
    border-radius: 50%;
    border-top-color: deepskyblue;
    left: 50%;
    top: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    animation: 0.5s spin infinite linear;
}

.preloader.done {
    opacity: 0;
    visibility: hidden;
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
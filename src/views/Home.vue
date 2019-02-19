<template>
  <div class="home">
    <b-container>
    <b-row>
      <b-col cols="12" lg="6">
     
      <div class="photo">
          <img src="../assets/1.jpg" alt="photo" class="mainPhoto">
           </div>
       
           
            <div class="main">

 <b-card>
 <h2> Осипов Олег Игоревич </h2>
            <h3> 25 лет, Родной город Кольчугино</h3>
            <h3>Высшее образование Университет Дубна: САУ, ИВТ</h3>
            <h3>6 курс магистратуры</h3>
         </b-card>

              
                <a href="https://github.com/oLejikOnMyEvent" target="_blank" > <img src="../assets/linkLogo/git.png" class="gitPhoto"> </a>
       <a href="https://vk.com/sl0wowow" target="_blank"> <img src="../assets/linkLogo/vk.png"  class="vkPhoto"></a>
      </div>
         
    
      </b-col>

      <b-col cols="12" lg="6">
     
      <div class="text-about" cols="12" lg="6">
        <b-card>
           <h2> Навыки :</h2>
        <li> <b> Имел опыт работы с фреймворками:</b> Vue, VueCli (spa), Laravel 5.3 (CRUD), Nuxt.js </li>
            <li><b> Опыт работы с базами данных</b> (SQL запросы, google Fibebase)</li>
           <li><b> Препроцессоры:</b> Pug (Jade), SASS</li>
          <li><b>  UX/UI:</b>  bootstrap 3-4, Figma(аналог sketch), Photoshop, Veutify</li>
          <li> <b> Сборщики:</b> Gulp, Webpack</li>
         <li><b> Пакетный менеджер:</b> Npm</li>
           <li><b> Система контроля версий:</b> Git</li>
            
              </b-card>

               <b-card>
            <h2>Знания:</h2>
             html + css 
                  знания Javascript ES5 + основы ES 6
            Понимание основных принципов ооп (инкапсуляция, полиморфизм, наследование).   
                 Понимание паттерна MVC   
                 Английский язык – разговорный на уровне pre- intermediate, технический
                    </b-card> 
      </div>

     </b-col>
      </b-row>
      
     
      </b-container>
  </div>
</template>

<script>



export default {
  name: 'home',
  components: {
  
  }
}
</script>

<style scope>
  li {
    list-style-type: none;
   }
.text-about{
  padding-top: 81px;
}
@media screen and (max-width: 1024px) {
  .text-about{ padding-top: 2px;}
}
.mainPhoto{
  width: 200px;
  height: 200px; 
  margin-top: 50px; 
  border-radius: 100px; 
}
.vkPhoto{
  width: 50px;
  
}
.gitPhoto{
width: 120px;

}
.main{
  margin-top: 74px;
}
</style>


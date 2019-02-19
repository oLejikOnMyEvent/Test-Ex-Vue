<template>
  <div class="home">
    <b-container>
    <b-row>
      <b-col cols="12" lg="6">
     
      <div class="photo">
          <img src="../assets/1.jpg" alt="photo" class="mainPhoto">
           </div>
       
           
            <div class="skills">
              <b-card>
           <h2> Навыки :</h2>
          Имел опыт работы с фреймворками: Vue, VueCli (spa), Laravel 5.3 (CRUD)
             Опыт работы с базами данных (SQL запросы, нормализация форм, проектирование БД )
             Имел опыт работы с  инструментами:
            Препроцессоры: Pug (Jade), SASS
            UX/UI:  bootstrap 3, Figma(аналог sketch), Photoshop
            Сборщики: Gulp, Webpack
          Пакетный менеджер: Npm
            Система контроля версий: Git
            
              </b-card>
                <a href="https://github.com/oLejikOnMyEvent" target="_blank" > <img src="../assets/linkLogo/git.png" class="gitPhoto"> </a>
       <a href="https://vk.com/sl0wowow" target="_blank"> <img src="../assets/linkLogo/vk.png"  class="vkPhoto"></a>
      </div>
         
    
      </b-col>

      <b-col cols="12" lg="6">
     
      <div class="text-about" cols="12" lg="6">
         <b-card>
 <h2> Осипов Олег Игоревич </h2>
            <h3> 25 лет, Родной город Кольчугино</h3>
            <h3>Высшее образование Университет Дубна: САУ, ИВТ</h3>
            <h3>6 курс магистратуры</h3>
         </b-card>

               <b-card>
            <h2>Знания:</h2>
             html + css 
                    поверхностные знания Javascript + теоретические основы ES 6
            Понимание основных принципов ооп (инкапсуляция, полиморфизм, наследование).   
                 Понимание принципов MVC   
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
.text-about{
  padding-top: 129px;
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
.skills{
  margin-top: 50px;
}
</style>


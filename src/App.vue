<template>
  <div id="app">
    <b-container>
    <div id="nav">
       <b-nav tabs>
      <b-nav-item to="/">Home</b-nav-item> 
      <b-nav-item to="/map"> Map </b-nav-item> 
    <b-nav-item to="/timer"> Timer </b-nav-item> 
    <b-nav-item to="/timer2"> Timer2 </b-nav-item> 
  </b-nav>
    </div>
      <router-view></router-view>
    </b-container>
  </div>
</template>

<style scope>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav{
  display: flex;
  justify-content: center;
}
</style>

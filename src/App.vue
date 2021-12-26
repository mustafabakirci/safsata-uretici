<template>
  <div id="app">
    <header>
      <h1 class="logo">safsata üretici</h1>
      <div class="menu">
        <a href="" target="_blank" href="https://twitter.com/bigmyb">@yazılım</a>
        <a class="idea" target="_blank" href="https://twitter.com/tevfik_uyar/status/1388744991237976069?s=20">@fikir</a>
      </div>
      
    </header>
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Parisienne&display=swap');

  header {
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 120px;
    .logo {
      font-family: 'Parisienne', cursive;
      font-size: 45px;
      @include screen-down(sm) {
          font-size: 30px;
      }
    }
    a {
      color: $black;
      text-decoration: none;
      margin-left: 30px;
      @include screen-down(sm) {
          margin-left: 15px;
      }
    }
    @include screen-down(sm) {
      padding: 0 15px;
    }
  }
</style>

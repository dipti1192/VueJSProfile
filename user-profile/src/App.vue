<template>
  <v-container id="app">
    <HeaderBar style="width:100%;height:100%;position:fixed;z-index:1"></HeaderBar>
    <router-view style="padding:15px;position: absolute;width:100%;height:100%;">
    </router-view>
    <!--<footer>
      b
    </footer>-->
  </v-container>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue';

export default {
  name: 'app',
  components: {
    HeaderBar,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0px;

}
header{
  top:0px;
  background: gray;
  width: 100%;
  height: 10% !important;
  position: absolute;
}
</style>

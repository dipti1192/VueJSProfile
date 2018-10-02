<template>
  <v-layout row style="padding:50px;">
    <v-flex xs12>
      <v-card>
        I am in home
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      drawer: null,
      photos: [
        { title: 'Bird', icon: 'Bird.jpg',id:'1'},
        { title: 'Birthday', icon: 'Earphones.jpg',id:'2'},
        { title: 'Photography', icon: 'Friends.jpg',id:'5'},
        { title: 'Photography', icon: 'Slippers.jpg',id:'9'},
        // { title: 'Photography', icon: 'Fire.JPG',id:'3'},
        // { title: 'About', icon: 'Flowers.JPG',id:'4'},
        // { title: 'Photography', icon: 'Leaf.JPG',id:'6'},
        // { title: 'Photography', icon: 'Lotus.JPG',id:'7'},
        // { title: 'Photography', icon: 'Pencil.JPG',id:'8'},
        // { title: 'Photography', icon: 'Snake.JPG',id:'10'},
      ]
    }
  },
 methods:{
    redirectToPage(page){
      this.$router.push(page);
    },
    getImgURL(img){
      return require(`../assets/photography/${img}`);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

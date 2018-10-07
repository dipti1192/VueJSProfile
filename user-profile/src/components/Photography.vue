<template>
  
    <v-carousel>
      <v-carousel-item
        v-for="(photo,i) in photos"
        :key="photo.id"
        :src="getImgURL(photo.icon)"
        reverse-transition="fade"
        transition="fade"
      ></v-carousel-item>
    </v-carousel>

</template>
<script>
export default {
  name: 'Photography',
  data () {
    return {
      drawer: null,
      photos: [
        { title: 'Bird', icon: 'Bird.jpg',id:'1'},
        { title: 'Birthday', icon: 'Earphones.jpg',id:'2'},
        { title: 'Photography', icon: 'Friends.jpg',id:'5'},
        { title: 'Photography', icon: 'Slippers.jpg',id:'9'},
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

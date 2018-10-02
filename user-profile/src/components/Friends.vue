<template>
<v-flex xs12  style="padding:55px">
  <v-toolbar flat>
    <v-btn icon>
        <v-icon>cake</v-icon>
    </v-btn>
    <v-toolbar-title>Birthday Wishes</v-toolbar-title>
  </v-toolbar>
  <v-layout>
    <v-flex xs3 class="box" v-for="photo in photos" :key="photo.id" xs4>
    <v-card>
        <v-img
          v-bind:src="getImgURL(photo.icon)"
          max-width="400"
          aspect-ratio="1.35"
        ></v-img>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{photo.title}}</h3>
            <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
          </div>
        </v-card-title>

        <!--<v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>-->
      </v-card>
    </v-flex>
  </v-layout>
</v-flex>
</template>
<script>
export default {
  name: 'Friends',
  data () {
      return {
        card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.',
        photos: [
            { title: 'Dipti Prabhavale', icon: 'dipti.png',id:'1'},
            { title: 'Dhiraj Mali', icon: 'Earphones.jpg',id:'2'},
            { title: 'Ketan Kumbhar', icon: 'Friends.jpg',id:'5'},
            { title: 'Rushi Paradkar', icon: 'Slippers.jpg',id:'9'},
        ] 
      }
  },
 methods:{
    redirectToPage(page){
      this.$router.push(page);
    },
    getImgURL(img){
      return require(`../assets/friends/${img}`);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box{
      margin: 5px;
  }
</style>

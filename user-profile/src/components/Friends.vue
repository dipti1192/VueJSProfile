<template>
<v-flex xs12  style="padding:55px;">
  <v-toolbar color="cyan darken-4" flat>
    <v-btn style="color:white" icon>
        <v-icon>cake</v-icon>
    </v-btn>
    <v-toolbar-title style="color:white">Birthday Wishes</v-toolbar-title>
  </v-toolbar>
  <v-layout >
    <!--color="#f5f5f5"-->
    <v-flex xs12 style="margin-top:25px">
      <v-card color="#f5f5f5" v-for="photo in photos" :key="photo.id" class="black--text">
        <v-layout>
          <v-flex xs4 >
            <v-img style="margin: 15px"
              v-bind:src="getImgURL(photo.icon)"
              height="300px"
              width="350px"
              contain
            ></v-img>
          </v-flex>
          <v-flex xs8>
            <v-card-title primary-title>
              <div>
                <div class=" boxheadline">{{photo.title}}</div>
                <div class="boxText">{{photo.msg}}</div>
              </div>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-divider light></v-divider>
        
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
            { title: 'Dhiraj Mali', icon: 'Dhirya.jpg',id:'2'},
            { title: 'Ketan Kumbhar', icon: 'Friends.jpg',id:'3'},
            { title: 'Rushi Paradkar', icon: 'Rushi.jpg',id:'4',
              msg: `20 odd years have past with you and it’s been a while 
              I never seen you but feels like years.....waiting to meet you and relive those memories again.... 
              wish you happy birthday bro... cheers mate 🍻`
            },
            { title: 'Urmila', icon: 'Urmila.jpg',id:'5',
              msg: `Dear Aniket,
              You are going to start a new year of your life and I hope this coming year will 
              bring every success you deserve.Wishing you a day that is as special in every way as you are! `
            },
            // { title: 'Pranshul', icon: 'Pranshul.jpg',id:'6',
            //   msg: `20 odd years have past with you and it’s 
            //   been a while I never seen you but feels like years.....
            //   waiting to meet you and relive those memories again.... 
            //   wish you happy birthday bro... cheers mate `
            // },
            { title: 'Pranshul', icon: 'Pranshul.jpg',id:'7',
              msg: `Here's to nights we don't remember with people we won't forget.
              Step up and put your party shoes on. It's your birthday dammit. Cheers!🍻`
            },
            { title: 'Sachin', icon: 'Sachin.jpg',id:'8',
              msg: `14 ऑक्टोबर रोजी  
              महापुरे घराण्यात आनंदी आनंद झाला.... 
              कारण घराण्यात रोमॅन्टीक हीरो 😎 अनिकेत जन्मास आला तसंच मनानं दिलदार... 
              बोलनं दमदार.... वागणं जबाबदार....
              डान्स मधे टायगर श्रॉफ ला ही टक्कर देणारा असा आमचा लाडका अनिकेत
              आपणास वाढदिवसाच्या हादि॓क शुभेच्छा 🍺
              जलने वाले जलते रहे😏,मेरे भाई का नाम चलते रहे...`
            },
            { title: 'Harshraj', icon: 'Harsharaj.jpg',id:'9',
              msg: `All of us were booking flight✈ tickets for Cinci and I didn't have money💵 at that time. 
                    You booked a flight ticket for me of 50K on phone  without any second thought when we 
                    hardly knew each other. अन्या, तिथेच तोडलंस भावा...😎
                    I have tried many new things here in Cinci 🍻🍗........
                    for the first time which I was afraid of my entire life and every time I thought of 
                    doing them, I just ensured one thing "Is Anya around to handle the situation?"😕. 
                    Thanks for being such an awesome😀, dependable😇 and approachable😍 friend!
                    Happy Birthday Bhava!🎂 I wish that you 
                    find shortest optimal path to success🚩 
                    node with minimum cost without any constraints :)`
            },
        ] 
      }
  },
 methods:{
    redirectToPage(page){
      this.$router.push(page);
    },
    getImgURL(img){
      return require(`../assets/wishes/${img}`);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  body{
    background: white
  }
  .boxText{
    font-size: 19px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    /*font-weight: 400;*/
    text-align: left;
  }
  .boxheadline{
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-align: left;
    font-size: 30px;
    font-weight: 800;
  }
</style>

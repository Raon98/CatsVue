<template>
  <div>
    <button color="primary" @click="fetchData">get data</button>
  </div>
  <div>
    <form method="post" enctype="multipart/form-data" action="/contant/124/photo">
      <input type="file" name="photo" ref="photoimage">
      <input type="submit" v-bind="submit()">
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "axiosEx",

    data() {
      return {

      };
    },

    mounted() {

    },

    methods: {
      // submit() {
      //   var data = new FormData();
      //   var file = this.$refs.photoimage.files[0];
      //
      //   data.append('photo', file);
      //
      //   axios.post('/api/data/' + this.no + '/photo', data)
      //       .then((res) => {
      //         this.result = res.data;
      //       })
      //       .catch((ex) => {
      //         console.log('사진업로드 실패', ex);
      //       })
      // },


      fetchData: function() {
        axios.get('https://jsonplaceholder.typicode.com/users/')
            .then(function(response) {
              console.log(response);
            })
            .catch(function(error) {
              console.log(error);
            });
      },
    },
};
</script>

<style scoped>

</style>
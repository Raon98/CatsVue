<template>
  <div>
    <button color="primary" @click="fetchData">get data</button>
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
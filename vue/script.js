new Vue({
    el: '#app',
    data() {
      return {
        message: null
      };
    },
    mounted() {
      axios
        .get('../api')
        .then(response => (this.message = response.data.message));
    }
  });
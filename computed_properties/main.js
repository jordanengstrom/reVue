const app = new Vue({
  el: "#app",
  data: {
    first_name: "John",
    last_name: "Doe"
  },
  methods: {
    getRandomNumber() {
      return Math.random();
    }
  },
  computed: {
    // think of computed properties as an extension of the above data object
    getRandomComputed() {
      return Math.random();
    },
    getFullName() {
      return `${this.first_name} ${this.last_name}`;
    },
    reversedFullName() {
      let first = this.first_name.split("").reverse().join("");
      let last = this.last_name.split("").reverse().join("");
      return `${first} ${last}`;
    }
  }
})

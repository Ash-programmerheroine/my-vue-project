const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    submitForm(event) {
      event.preventDefault();
      alert('submitted')
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    sub(num) {
      this.counter = this.counter - num;
    },
  },
});

app.mount("#events");
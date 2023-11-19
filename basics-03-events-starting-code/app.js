const app = Vue.createApp({
  data() {
    return {
      counter: 20,
      name: "",
      confirmedName:"",
    };
  },
  computed:{
    fullName(){
      console.log('running agaian');
      if(this.name===''){
        return '';
      }
      return this.name + ' ' +'khanam'
    },
  },
  methods: {
    outputFullName(){
      console.log('running agaian');
      if(this.name===''){
        return '';
      }
      return this.name + ' ' +'khanam'
    },
    resetInput(){
      this.name=''
    },
    confirmInput(){
      this.confirmedName = this.name;
    },
    submitForm() {
      
      alert('submitted')
    },
    setName(event) {
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

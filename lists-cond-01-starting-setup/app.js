const app = Vue.createApp({
  data() {
    return { 
      enteredGoalValue:'',
      goals: [] ,
    };
  },
  methods:{

    addedGoal(){
      this.goals.push(this.enteredGoalValue);
    }
  }
});

app.mount('#user-goals');

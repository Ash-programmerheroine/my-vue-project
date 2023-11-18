var app =Vue.createApp({
    data(){
        return{
            courseGoalA:'you should learn vue !',
            courseGoalB:'finish the Course and master vue !',
            vueLink:'https://vuejs.org/',
        };
    },
    methods:{
        outputGoal(){
            const randomNum = Math.random();
            if(randomNum < 0.5){
                return this.courseGoalA;
            }
            else{
                return this.courseGoalB;
            }
        }
    }
});
app.mount('#user-goal')
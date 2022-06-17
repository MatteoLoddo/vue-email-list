new Vue({
    el:"#app",
    data:{
        mail:"",
        emailContainer: [],
        containerFull: false,
    },
    methods:{
        // funzione per il bonus
        checkFullContainer(){
            if(this.emailContainer.length != 10){
                return;
            }else {
                this.containerFull = true;
            }
        },
        // creo funzione per richiedere una mail
        generateMail(){
                axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((element)=>{
                // pusho ogni mail in un array vuoto
                this.emailContainer.push(element.data.response);
                // richiamo ogni volta il check 
                this.checkFullContainer();
                console.log(element.data.response);
            })
        },

        generate10Mail(){
            // svuoto l array ad ogni click sul button"genera" e resetto il containerFull a false
            this.emailContainer = [];
            this.containerFull = false;
            // creo ciclo che mi richiama la funzione per richiedere una mail
            for(let i = 0; i < 10; i ++){
                this.generateMail();
            }
        },

    },
})
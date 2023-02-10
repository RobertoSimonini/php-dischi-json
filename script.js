const {createApp} = Vue;
const apiUri = 'http://localhost/php-dischi-json/api.php';


const app = createApp({
    data (){
        return {
            genre : '',
            discs: [],
            genres: ['rock','pop', 'jazz', 'metal',],
              
        }
    },
    mounted(){
        axios.get(apiUri).then(res => {
            this.discs =  res.data;
        })
    },

    methods: {
        changeGenre(){
            const filteredUri = `${apiUri}?genre=${this.genre}`
            axios.get(filteredUri).then(res =>{
                this.discs = res.data;
            })

            if (this.genre === ''){
                axios.get(apiUri).then(res =>{
                    this.discs = res.data;
                })
            }
        },
        toggleStatusDescription(i){
            this.discs[i].visibility = !this.discs[i].visibility;
        }

    }
});

app.mount('#root');
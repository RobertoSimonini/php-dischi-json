const {createApp} = Vue;
const apiUri = 'http://localhost/php-dischi-json/index.php';


const app = createApp({
    data (){
        return {
            genre : '',
            discs: [],
              
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
        }
    }
});

app.mount('#root');
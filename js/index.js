const app = Vue.createApp({
    data(){
        return{
            title: "Contador App - Vue",
            count: 0
        }
    },
    methods: {
        disCount(limit){
           this.count -= limit;
        },
        addCount(limit){
            this.count += limit;
        },
        modCount(instruction = "add", limit = 1){
            if(instruction === 'add'){
                this.addCount(limit)
            }
            else {
                this.disCount(limit)
            }
        }
    },
});
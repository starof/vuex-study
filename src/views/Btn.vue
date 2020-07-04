<template>
    <div>
        <!--在vuex中更改状态必须用mutations-->
        <!-- <button @click="$store.state.num++">点击加1</button>  -->
        <button @click="addFn">点击加1</button> 

        <!--不再用commit而是用dispatch,不是调decrease，而是调decreaseAsync-->
        <!-- <button @click="$store.dispatch('decreaseAsync')">点击减1</button>  -->
        <button @click="reduceFn">点击减1</button> 
    </div>
    
</template>
<script>
export default {
    methods:{
        addFn(){
            //调用store中的mutations里的increase方法
            //类似git commit -m 'xxx'
            // this.$store.commit('increase');
            this.$store.commit('increase',2);
        },
        reduceFn(){
            this.$store.dispatch('decreaseAsync');
        }
    }
}
</script>
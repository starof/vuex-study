<template>
    <div class="about">
        <!-- <h2>About页面的数字: {{$store.state.num}}</h2> -->
        <!--这里不是num()-->
        <!-- <h2>About页面的数字: {{num}}</h2>  -->
        <h2>About页面的数字: {{$store.getters.getNum}}</h2> 
    </div>
</template>

<script>
export default {
    name:'About',
    computed:{ 
        //重复的事情交给仓库管理，交给getters
        // num(){
        //     return this.$store.state.num;
        // }
    }
}
</script>
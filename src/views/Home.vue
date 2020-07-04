<template>
    <div class="home">
        <!-- <h2>Home页面的数字: {{$store.state.num}}</h2> -->
        <h2>Home页面的数字: {{$store.getters.getNum}}</h2>
    </div>
</template>

<script>
export default {
    name:'Home'
}
</script>
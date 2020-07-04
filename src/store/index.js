//在store下的index.js这份文件，就是用来做状态管理的
//需要放到main.js中

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    //state相当于组件中的data，专门用来存放全局的数据
    //区别是data是function，state是对象
    state:{
        num:0
    },
    //getters相当于组件中的computed
    //区别是getters是全局的，computed是组件内部使用的
    //将组件中统一使用的computed都放到getters里面来操作
    getters:{
        getNum(state){
            //return this.$store.state.num;// computed里的写法
            //getters里有一个默认参数
            return state.num;
        }
    },
    //更改store中state的唯一方法
    //mutations相当于组件中的methods,但是它不能使用异步方法（定时器，axios）
    mutations:{
        // increase(state){
        //     state.num++;
        // }
        //传参用payload,payload是一个形参，如果组件在commit时，有传参数过来
        //就存在，如果没有传过来，就是undefined
        increase(state,payload=1){
            state.num+=payload;
        },
        decrease(state){
            state.num--;
        }
    },
    //异步,actions专门用来处理异步，实际修改状态值的，依然是mutations
    actions:{
        //点击了"减1"按钮后，放慢一秒再执行
        //context上下文对象与state实例具有相同方法和属性
        decreaseAsync(context){
            context.commit('decrease');
        },

        /**/
        //用解构，commit内部执行时候的this就不再是store了。提前把this bind或者apply好
        addAsync({commit}){
            setTimeout(()=>{
                commit('increase');
            },1000)
        }
    },
    modules:{}

})
//存放用户数据
export default {
    namespaced:true,//给子模块添加命名空间，为了该模块下得就不是全局命名空间,怕方法名相同，方法名写的不一样可以不加
    state: {
        username: '张艺兴',
        age: 30
    },
    mutations: {
        addAge(state) {
            state.age++
        },
        addAgeStep(state, step) {
            state.age += step
        },


    },
    actions: {
        addAsync(context) {
            setTimeout(() => {
                context.commit('addAge')
            }, 1000)
        },
        addsAsync(context, step) {
            setTimeout(() => {
                context.commit('addAgeStep', step)
            }, 1000)
        },
    },
    getters: {
        tentions(state) {
            return state.age * 10
        }
    }
}
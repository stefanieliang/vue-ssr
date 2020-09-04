const state = ()=>({
    firstName:'li',
    lastName:'lei',
    age:18,
    sex:'男'
})

const mutations = {
    getNumber(state){
        return state.number
    }
}

const actions = {

}

const getters = {
    fullName(state){
        return state.firstName + state.lastName
    },
    selfInfo(state,getters,rootState){
        return `
            姓名：${getters.fullName}，
            性别：${state.sex}，
            rootState.count:${rootState.count}
            `
    }
}

export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}
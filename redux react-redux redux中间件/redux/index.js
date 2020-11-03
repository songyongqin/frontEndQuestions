const {reducer} = require('./reducer')
const createStore = require('./store')


const store = createStore(reducer)
store.subscribe(()=>{console.log('函数加一')})
store.subscribe(()=>{console.log('函数加二')})
store.dispatch({type:'plus'})
let state = store.getState()
console.log(state)
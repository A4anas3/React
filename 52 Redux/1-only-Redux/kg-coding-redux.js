const redux=require('redux')

const INITIAL_VALUE={
    counter:0
};
const reducer=(store=INITIAL_VALUE,action)=>{
    let newStore=store;
    if(action.type==='INCREMENT'){
        newStore={counter:store.counter+1}
    }
    return newStore;
}
const store=redux.createStore(reducer);

const subscrber=()=>{
   const state= store.getState();
   console.log(state);
}

store.subscribe(subscrber);

store.dispatch({type: 'INCREMENT'});

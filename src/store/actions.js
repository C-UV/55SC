import axios from 'axios';
import * as types from './types';

let actions={
  [types.VIEW_FOOT]:({commit},payload)=>commit(types.VIEW_FOOT,payload),
  [types.VIEW_LOADING]:({commit},payload)=>commit(types.VIEW_LOADING,payload),
  [types.UPDATE_FURIT]:({commit,state},payload)=>{
    axios({
      url:payload,
    }).then(
      res=>commit(types.UPDATE_FURIT,res.data)
    )
  },
  [types.UPDATE_COLD]:({commit,state},payload)=>{
    axios({
      url:payload,
    }).then(
      res=>commit(types.UPDATE_COLD,res.data)
    )
  },
  [types.UPDATE_MEAT]:({commit,state},payload)=>{
    axios({
      url:payload,
    }).then(
      res=>commit(types.UPDATE_MEAT,res.data)
    )
  },
  [types.CHECK_USER]:({commit,state},payload)=>{
    axios({
      url:'/data/user.json',
    }).then(
      res=>commit(types.CHECK_USER,res.data)
    )
  },
  addItem:({commit,state},payload)=>{ 
    let arr=[...state.buycar];
    let find=false;
    arr.forEach((item,index)=>{
      if(item.id==payload.id){
        item.number++;
        find=true;
      }
    });
    if(!find){
      payload.number=1;
      arr.push(payload);
    }
    commit(types.ADD_ITEM,arr)
  },
  changeItem:({commit,state},payload)=>{
    state.buycar.forEach((item,index)=>{
      if(item.id==payload.id){
        item.number+=payload.num;
      }
    });
    commit(types.CHANGE_ITEM,[...state.buycar])
  },
  removeItem:({commit,state},payload)=>{
    state.buycar.forEach((item,index)=>{
      if(item.id==payload.id){
        state.buycar.splice(index,1);
      }
    });
    commit(types.REMOVE_ITEM,[...state.buycar]);
  },
  clearBuycar:({commit,state})=>{
    commit(types.CLEAR_BUYCAR,[]);
  }
};
export default actions;
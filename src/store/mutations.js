import * as types from './types'

let mutations={
  [types.VIEW_FOOT]:(state,payload)=>state.bFoot=payload,
  [types.VIEW_LOADING]:(state,payload)=>state.bLoading=payload,
  [types.UPDATE_FURIT]:(state,payload)=>state.furit=payload,
  [types.UPDATE_COLD]:(state,payload)=>state.cold=payload,
  [types.UPDATE_MEAT]:(state,payload)=>state.meat=payload,
  [types.ADD_ITEM]:(state,payload)=>{
    state.buycar=payload;  
  },
  [types.CHANGE_ITEM]:(state,payload)=>{
    state.buycar=payload; 
  },
  [types.REMOVE_ITEM]:(state,payload)=>{
    state.buycar=payload;
  },
  [types.CLEAR_BUYCAR]:(state,payload)=>{
    state.buycar=payload;
  },
};
export default mutations;
let getters={
  bFoot:(state)=>state.bFoot,
  bLoading:(state)=>state.bLoading,
  furit:(state)=>state.furit,
  cold:(state)=>state.cold,
  meat:(state)=>state.meat,
  buycar:(state)=>{
    return state.buycar;
  },
  user:(state)=>state.user
};
export default getters;
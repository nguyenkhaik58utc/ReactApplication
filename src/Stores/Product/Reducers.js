import * as types from'./Types'

const initialState={
    IsLoading : false,
    Products : [],
    SpecialProducts : []
}
export const reducer = (state = initialState,action) => {
    switch (action.type) {
        case types.SHOW_LOADING: {
          return {
            ...state,
            IsLoading: true,
          };
        }
        case types.HIDE_LOADING: {
          return {
            ...state,
            IsLoading: false,
          };
        }
        default:
          return state;
      }
}
//export default reducer;
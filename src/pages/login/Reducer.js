import {GET_LIST, GET_LIST_SUCCESS, GET_LIST_FAILED, RESET_GET_LIST}  from '../../config/constant';

const INITIAL_STATE = {
  fetchingDataOmdb: false,
  dataOmdb: [],
  meta: null,
  err: null
}

export default function dataReducer(state = INITIAL_STATE, action){
  switch (action.type) {
    case GET_LIST: {
      return {
        ...state,
        fetchingDataOmdb: true
      }
    }
    case GET_LIST_SUCCESS: {
      return {
        ...state,
        fetchingDataOmdb: false,
        dataOmdb: [...action.data],
        meta: action.meta
      }
    }
    case GET_LIST_FAILED: {
      return {
        ...state,
        fetchingDataOmdb: false
      }
    }
    case RESET_GET_LIST: {
      return {
        ...state,
        fetchingDataOmdb: false,
        dataOmdb: []
      }
    }
    default:
    return state
  }
}
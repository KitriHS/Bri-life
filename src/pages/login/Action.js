import {serviceOmdb} from '../../services/webServices';
import {GET_LIST, GET_LIST_SUCCESS, GET_LIST_FAILED, RESET_GET_LIST}  from '../../config/constant'

export function movieOmdbAction(dispact, params, token) {
  dispact(doData())
  return serviceOmdb(params, token)
  .then(res => {
      console.log('cek res', res)
      dispact(dataSuccess(res.data, res.meta));
    })
    .catch(err => {
      return dispact(dataFailed(false))
    })
}

function doData(payload) {
  return {
    type: GET_LIST,
    data: payload
  }
}

function dataSuccess(payload, meta) {
  return {
    type: GET_LIST_SUCCESS,
    data: payload,
  }
}

function dataFailed() {
  return {
    type: GET_LIST_FAILED
  }
}

export function resetDataOmdb(dispact) {
  dispact(resetDataSuccess());
}
function resetDataSuccess(payload) {
  return {
    type: RESET_GET_LIST,
    data: payload
  }
}
import { GET_LIST_VERSION } from '../constants/types/version';
import versionApi from '../api/versionApi';

export const getListVersion = (data) => dispatch => {
    versionApi.getListVersion(data).then(res => {
        if(res.data) {
            dispatch({type: GET_LIST_VERSION, payload: res.data.data})
        }
    })
}

import { GET_GROUP_LIST_SUCCESS } from '../constants/types/group';
import GroupApi from '../api/groupApi';

export const getListGroup = (data) => dispatch => {
    GroupApi.getGroupList(data).then(res => {
        if(res.data) {
            dispatch({type: GET_GROUP_LIST_SUCCESS, payload: res.data.data})
        }
    })
}

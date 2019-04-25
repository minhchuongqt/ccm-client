import { GET_ISSUE_LIST } from '../constants/types/issue';
import IssueApi from '../api/issueApi';

export const getIssueList = (data) => async dispatch => {
    await IssueApi.getIssueList(data).then(res => {
        if(res.data) {
            dispatch({type: GET_ISSUE_LIST, payload: res.data.data})
        }
    })
}
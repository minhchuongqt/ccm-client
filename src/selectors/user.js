import _ from 'lodash'
import moment from 'moment'
import {API} from '../config'
//params
export const getUserInfo = ({UserState}) => {
    if(_.isEmpty(UserState.userInfo)) return {}
    return UserState.userInfo
    // const result =  IssueState.listIssue.map(item => item)
    // return result.map(item => (
    //     {...item
       
    // }))
}
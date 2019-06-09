import _ from 'lodash'
import moment from 'moment'
import {API} from '../config'
//params
export const getUserInfo = ({UserState}) => {
    if(_.isEmpty(UserState.userInfo)) return {}
    return UserState.userInfo
}

export const getUserSelectable = ({UserState}) => {
    if(_.isEmpty(UserState.userInfo)) return {}
    const result =  UserState.listUser.map(item => ({
        // ...item,
        label: item.member.displayName || item.member.fullName,
        value: item.member._id,
        iconUrl: API + (item.member.avatarUrl || '/media/emptyAvatar.png'),
    }))
    return result
}
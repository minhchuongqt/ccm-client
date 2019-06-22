import _ from 'lodash'
import moment from 'moment'
import {API} from '../config'
//params
export const getUserInfo = ({UserState}) => {
    if(_.isEmpty(UserState.userInfo)) return {}
    return UserState.userInfo
}

export const getListUser = ({UserState}) => {
    if(_.isEmpty(UserState.listUser)) return []
    return UserState.listUser
}

export const getUserSelectable = ({UserState}) => {
    if(_.isEmpty(UserState.listUser)) return []
    const result =  UserState.listUser.map(item => ({
        // ...item,
        label: item.member.displayName || item.member.fullName,
        value: item.member._id,
        iconUrl: API + (item.member.avatarUrl || '/media/emptyAvatar.png'),
    }))
    return result
}

export const getEmailSelectable = ({UserState}) => {
    if(_.isEmpty(UserState.listEmail.data)) return []
    const result =  UserState.listEmail.data.map(item => ({
        // ...item,
        label: item.email,
        value: item._id,
        displayName: item.displayName,
        fullName: item.fullName
    }))
    return result
}

export const getInviteUserStatus = ({UserState}) => UserState.inviteUserStatus

export const getUpdateUserStatus = ({UserState}) => UserState.updateUserStatus
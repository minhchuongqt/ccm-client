import _ from 'lodash'
import moment from 'moment'
import {API} from '../config'
import { createSelector } from 'reselect';

export const getListVersion = ({ReleaseState}) => {
  const {searchValue, listVersion} = ReleaseState
  if(!listVersion) return []
  return listVersion.filter(item => _.lowerCase(item.name).indexOf(_.lowerCase(searchValue)) > -1 )
}

export const getCreateVersionStatus = ({ReleaseState}) => ReleaseState.createVersionStatus

export const getUpdateVersionStatus = ({ReleaseState}) => ReleaseState.updateVersionStatus

export const getDeleteVersionStatus = ({ReleaseState}) => ReleaseState.deleteVersionStatus

export const getAddVersionFormValue = ({ReleaseState}) => ReleaseState.addVersionFormValue

export const getSearchValue = ({ReleaseState}) => ReleaseState.searchValue

export const getReleaseStatus = ({ReleaseState}) => ReleaseState.releaseStatus

export const getUnreleaseStatus = ({ReleaseState}) => ReleaseState.unreleaseStatus

export const getVersionDetail = ({ReleaseState}) => ReleaseState.versionDetail

export const getListIssueOfVersion = ({ReleaseState}) => ReleaseState.versionDetail &&  ReleaseState.versionDetail.issues || []

export const getIssueCount = ({ReleaseState}) => ReleaseState.versionDetail &&  ReleaseState.versionDetail.count || {}

export const getSelectedVersion = ({ReleaseState}) => {
  return ReleaseState.selectedVersion
}

export const getVersionSelectable = ({ReleaseState}) => {
  if(_.isEmpty(ReleaseState.listVersion)) return []
  let result =  ReleaseState.listVersion.map(item => item.status == 'UNRELEASED' && (
    {
        label: item.name,
        value: item._id,
    }
  ))
  return result
}
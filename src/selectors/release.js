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

export const getAddVersionFormValue = ({ReleaseState}) => ReleaseState.addVersionFormValue

export const getSearchValue = ({ReleaseState}) => ReleaseState.searchValue

import _ from 'lodash'
import moment from 'moment'
import {API} from '../config'
import { createSelector } from 'reselect';

export const getListComponent = ({ComponentState}) => {
  const {searchValue, listComponent} = ComponentState
  if(!listComponent) return []
  let result = listComponent.filter(item => _.lowerCase(item.name).indexOf(_.lowerCase(searchValue)) > -1 )
  result = result.map(item => ({
    ...item,
      lead: {
        displayName: item.lead.displayName,
        fullName: item.lead.fullName,
        iconUrl: API + (item.lead.avatarUrl || ''),
        avatarUrl: item.lead.avatarUrl,
        value: item.lead._id,
        label: item.lead.displayName || item.lead.fullName,
        // ...result.lead,
      }
  }))
  // console.log(result)
   return result
}

export const getComponentSelectable = ({ComponentState}) => {
  if(_.isEmpty(ComponentState.listComponent)) return []
  const result =  ComponentState.listComponent.map(item => (
      {
          label: item.name,
          value: item._id,
      }
  ))
  return result
}

export const getCreateComponentStatus = ({ComponentState}) => ComponentState.createComponentStatus

export const getUpdateComponentStatus = ({ComponentState}) => ComponentState.updateComponentStatus

export const getAddComponentFormValue = ({ComponentState}) => {
  const {name, description, lead} = ComponentState.addComponentFormValue;
  let result = {
    name,
    description,
    selectedLead: lead,
    lead: (lead || {}).value || null
  }
  return result
}

export const getSearchValue = ({ComponentState}) => ComponentState.searchValue

export const getSelectedComponent = ({ComponentState}) => {
  // if(_.isEmpty(ComponentState.selectedComponent)) return []
  return ComponentState.selectedComponent
}
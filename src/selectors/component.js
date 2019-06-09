import _ from 'lodash'
import moment from 'moment'
import {API} from '../config'
import { createSelector } from 'reselect';

export const getListComponent = ({ComponentState}) => {
  const {searchValue, listComponent} = ComponentState
  if(!listComponent) return []
  return listComponent.filter(item => _.lowerCase(item.name).indexOf(_.lowerCase(searchValue)) > -1 )
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

export const getAddComponentFormValue = ({ComponentState}) => {
  const {name, description, lead} = ComponentState.addComponentFormValue;
  let result = {
    name,
    description,
    lead: (lead || {}).value || null
  }
  return result
}

export const getSearchValue = ({ComponentState}) => ComponentState.searchValue

export const getSelectedComponent = ({ComponentState}) => {
  // if(_.isEmpty(ComponentState.selectedComponent)) return []
  return ComponentState.selectedComponent
}
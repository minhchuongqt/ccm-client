import _ from 'lodash'
//params

export const getListVersion = ({VersionState}) => {
    if(_.isEmpty(VersionState.listVersion)) return []
    return VersionState.listVersion
}


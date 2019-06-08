import API from './base';

class VersionApi {
    

    getListVersion = (params) => {
        return API.get('/releaseVersion/byProject', {params});
    }
    
}

const versionApi = new VersionApi()

export default versionApi
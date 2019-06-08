import API from './base';

class ReleaseApi {

    createVersion = ( data ) => {
        return API.post('/releaseVersion', data);
    }
    
    getListVersion = ( params ) => {
        return API.get('/releaseVersion/byProject', {params});
    }
    
}

const releaseApi = new ReleaseApi()

export default releaseApi
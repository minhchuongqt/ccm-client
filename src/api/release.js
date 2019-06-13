import API from './base';

class ReleaseApi {

    createVersion = ( data ) => {
        return API.post('/releaseVersion', data);
    }
    
    getListVersion = ( params ) => {
        return API.get('/releaseVersion', {params});
    }

    getVersionDetail = ( id ) => {
        return API.get('/releaseVersion/' + id);
    }
    
}

const releaseApi = new ReleaseApi()

export default releaseApi
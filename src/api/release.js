import API from './base';

class ReleaseApi {

    createVersion = ( data ) => {
        return API.post('/releaseVersion', data);
    }

    updateVersion = ( id, data ) => {
        return API.put('/releaseVersion/' + id, data);
    }

    deleteVersion = ( id, data ) => {
        return API.post('/releaseVersion/delete/' + id, data);
    }
    
    getListVersion = ( params ) => {
        return API.get('/releaseVersion', {params});
    }

    getVersionDetail = ( id ) => {
        return API.get('/releaseVersion/' + id);
    }

    releaseVersion = id => {
        return API.post('/releaseVersion/release/' + id)
    }

    unreleaseVersion = id => {
        return API.post('/releaseVersion/unrelease/' + id)
    }
    
}

const releaseApi = new ReleaseApi()

export default releaseApi
import API from './base';

class ComponentApi {

    createComponent = ( data ) => {
        return API.post('/component', data);
    }
    
    getListComponent = ( params ) => {
        return API.get('/component', {params});
    }
    
}

const componentApi = new ComponentApi()

export default componentApi
import axios from 'axios';
import authHeader from './auth-header';

class UserService {

  Admin() {
    return axios.get(`api/usuarios/`, { headers: authHeader() });
  }
}

export default new UserService();
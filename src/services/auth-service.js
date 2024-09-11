import axios from 'axios';

class AuthService {
  async login(user) {
    return axios.post('api/signin', {
        rol: user.rol,
        dni: user.dni,
        pwd: user.pwd
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data));
          console.log(response.data);
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

}

export default new AuthService();
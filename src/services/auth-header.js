export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.accessToken) {
        return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
        //return { Authorization: 'Bearer ' + user.accessToken }; // for Spring Boot back-end
    } else {
      return {};
    }
  }
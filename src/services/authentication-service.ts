export default class AuthenticationService {

  static isAuthenticated:boolean = false;

  static login(username: string, password: string): Promise<boolean> {
    const isAuthenticated = (username === 'malenia' && password === 'miquella');

    return new Promise(resolve => {
      setTimeout(() => {
        this.isAuthenticated = isAuthenticated;
        resolve(isAuthenticated);
      }, 1000);
    });
  }
}
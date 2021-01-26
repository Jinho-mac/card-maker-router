import { firebaseAuth, githubProvider, googleProvider } from "./firebase";

class AuthService {
  login(providerName) {
    const AuthProvider = this.getProvider(providerName);
    return firebaseAuth.signInWithPopup(AuthProvider);
  }  

  logout() {
    firebaseAuth.signOut();
  }

  onAuthChange(onUserChanged) {
    firebaseAuth.onAuthStateChanged(user => {
      onUserChanged(user);
    })
  }

  getProvider(providerName) {
    switch (providerName) {
      case 'Google':
        return googleProvider;
      case 'Github':
        return githubProvider;
      default:
        throw new Error('unknown providerName');
    }
  }
}

export default AuthService;
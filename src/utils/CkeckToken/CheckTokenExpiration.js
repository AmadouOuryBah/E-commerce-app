// Check token expiration

export const checkTokenExpiration = () => {
  const token = JSON.parse(localStorage.getItem('currentUser')).accessToken
  ;
  const expirationTime = JSON.parse(localStorage.getItem('currentUser')).validTimeInMinutes
  ;
  
  if (token && expirationTime) {
    const currentTime = new Date().getMinutes();
    if (currentTime > expirationTime) {
      // Token expired, handle accordingly
      window.localStorage.clear()
      // Example: Redirect to login page
      window.location.href = '/login';
    }
  }
};

// Set interval to check token expiration every minute
setInterval(checkTokenExpiration, 60000); // Check every minute

// You can call checkTokenExpiration on component mount or app load

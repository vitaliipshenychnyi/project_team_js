import { AuthErrorCodes } from 'firebase/auth';
import { Notify } from 'notiflix';

const notifyConfig = {
  timeout: 3000,
  className: 'notify-styles',
  fontSize: '16px',
  width: '290px',
};

export function showLoginError(error) {
  console.log(AuthErrorCodes);
  if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
    Notify.failure(`Wrong password. Try again.`, notifyConfig);
  } else if (error.code == AuthErrorCodes.USER_DELETED) {
    Notify.failure(`User not found. Try another email address.`, notifyConfig);
  } else {
    Notify.failure(`${error.message}`);
  }
}

export async function showLoginState(name) {
  Notify.success(`Hello! You're logged in as ${name}`, notifyConfig);
}

export function showLogoutState() {
  Notify.info('You have logged out', notifyConfig);
}

export function showCreateAccountError(error) {
  if (error.code == AuthErrorCodes.EMAIL_EXISTS) {
    Notify.failure(`Wrong password. Try again.`, notifyConfig);
  } else if (error.code == AuthErrorCodes.WEAK_PASSWORD) {
    Notify.failure(`Password should be at least 6 characters.`, notifyConfig);
  } else {
    Notify.failure(`${error.message}`);
  }
}

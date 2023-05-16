import { AuthErrorCodes } from 'firebase/auth';
import { Notify } from 'notiflix';

const notifyConfig = {
  timeout: 3000,
  className: 'notify-styles',
  fontSize: '16px',
  width: '290px',
};

export function showLoginError(e) {
  if (e.code == AuthErrorCodes.INVALID_PASSWORD) {
    Notify.failure(`Wrong password. Try again.`, notifyConfig);
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

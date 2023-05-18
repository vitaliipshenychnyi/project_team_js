import { getDatabase } from 'firebase/database';
import app from '../firebase-authentication/firebase-init';

export default getDatabase(app);

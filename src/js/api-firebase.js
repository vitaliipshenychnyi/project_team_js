import axios from 'axios';

const mydata = {
    name: 'Vitaliy',
    pass: '12345',
}

export async function firebasePost(data) {
    try {
        const resp = await axios.post('https://eva-goit-js-teamproject-default-rtdb.europe-west1.firebasedatabase.app/users.json', data);
        console.log('Post', resp);
        return resp;
    } catch (err) {
        console.log("Ooops! It is error! FAREBASE");
    }
}
//firebasePost(mydata);

export async function firebaseRead() {
    try {
        const resp = await axios.get('https://eva-goit-js-teamproject-default-rtdb.europe-west1.firebasedatabase.app/users.json');
        console.log('Read:', resp.data);
    } catch (err) {
        console.log("Ooops! It is error! FAREBASE");
    }
}
firebaseRead();
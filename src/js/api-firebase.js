import axios from 'axios';
const FB_URL = 'https://eva-goit-js-teamproject-default-rtdb.europe-west1.firebasedatabase.app/'
const mydata = {
    name: 'Vitaliy',
    pass: '12345',
}
const userdata = {
    Lisa: {
        mail: 'lisa@gmail.com',
        nickname: 'lisamail',
        svg: 'https://books-backend.p.goit.global/books/',
    }
}

export async function firebasePost(data) {
    try {
        const resp = await axios.post(`${FB_URL}maildata.json`, data);
        console.log('Post', resp);
        return resp;
    } catch (err) {
        console.log("Ooops! It is error! FAREBASE");
    }
}
//firebasePost(userdata);
export async function firebasePut(data) {
    try {
        const resp = await axios.put(`${FB_URL}maildata.json`, data);
        console.log('Post', resp);
        return resp;
    } catch (err) {
        console.log("Ooops! It is error! FAREBASE");
    }
}
//firebasePut(userdata);

export async function firebaseRead(endpoint) {
    try {
        const resp = await axios.get(`${FB_URL}${endpoint}`);
        console.log('Read:', resp.data);
    } catch (err) {
        console.log("Ooops! It is error! FAREBASE");
    }
}
firebaseRead('maildata.json');
firebaseRead('users.json');
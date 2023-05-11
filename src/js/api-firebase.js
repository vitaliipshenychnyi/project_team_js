import axios from 'axios';
const FB_URL = 'https://eva-goit-js-teamproject-default-rtdb.europe-west1.firebasedatabase.app/'
const mydata = {
    name: 'Геннадий',
    pass: '745747',
}
const userdata = {
    Lisa: {
        mail: 'lisa@gmail.com',
        nickname: 'lisamail',
        svg: 'https://books-backend.p.goit.global/books/',
    }
}

export async function firebasePost(data, endpoint) {
    try {
        const resp = await axios.post(`${FB_URL}${endpoint}?print=silent`, data);
        console.log('Post:', resp);
        return resp;
    } catch (err) {
        console.log("Ooops! It is error! FAREBASE");
    }
}
//firebasePost(mydata,'users.json');
export async function firebasePut(data,endpoint) {
    try {
        const resp = await axios.put(`${FB_URL}${endpoint}?print=silent`, data);
        console.log('Put:', resp);
        return resp;
    } catch (err) {
        console.log("Ooops! It is error! FAREBASE");
    }
}
//firebasePut(userdata,'maildata.json');

export async function firebaseRead(endpoint,searchName) {
    try {
      //  console.log(searchName);
      //  const resp = await axios.get(`${FB_URL}${endpoint}?orderBy='$value'&startAt=${searchName}&print=pretty`);
        const resp = await axios.get(`${FB_URL}${endpoint}?print=pretty`);
        console.log(searchName,' Read:', resp.data);
    } catch (err) {
        console.log("Ooops! It is error! FAREBASE");
    }
}
//firebaseRead('maildata.json');
//firebaseRead('users.json');
import request from 'superagent';

const URL = 'https://serene-bastion-19966.herokuapp.com'

export async function getRecords () {
    const { body } = await request.get(`${URL}/records`)
    return body;
}

export async function getRecord (id) {
    const { body } = await request.get(`${URL}/records/${id}`)
    return body;
}


export async function postRecord (record){
    const { body } = await request.post(`${URL}/records`)
    .send(record)
    return body;
}

export async function putRecord (id, record){
    const { body } = await request.put(`${URL}/records/${id}`)
    .send(record)
    return body;
}

export async function deleteRecord(id){
    const { body } = await request.delete(`${URL}/records/${id}`);
    return body;
}

export async function getCategories(){
    const { body } = await request.get(`${URL}/categories`);
    return body;
}

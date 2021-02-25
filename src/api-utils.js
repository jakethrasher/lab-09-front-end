import request from 'superagent';

const URL = 'https://serene-bastion-19966.herokuapp.com'

export async function getRecords () {
    const { body } = await request.get(`${URL}/records`)
    return body;
}

export async function postRecord (record){
    const { body } = await request.post(`${URL}/records`)
    .send(record)

    return body;
}
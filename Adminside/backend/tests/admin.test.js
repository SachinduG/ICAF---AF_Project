const request = require('supertest');
const app = require('../app');
const Admin = require('../models/adminModel');

const admin = {
    fname:'test12',
    lname:'test22',
    email: 'test22@gmail.com',
    password: 'test1234'
}

beforeEach(async() => {
    await Admin.deleteMany({})
    await Admin(admin).save;
})

test('Should sign up for a admin', async () => {
    await request(app).post('/')
        .send({
            fname: 'test1',
            lname: 'test2',
            email: 'test@gmail.com',
            password: 'test1234'
        })
        .expect(200)
})

test('Should sign in for a admin', async () => {
    await request(app).post('/login')
        .send({
            email: admin.email,
            password: admin.password
        })
        .expect(200)
})

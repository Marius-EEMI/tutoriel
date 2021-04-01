const request = require('supertest')
const app = require('../server')

describe('index', () => {
    test('GET blank', async () => {
        return request(app)
            .get('/')
            .then(res => {
                expect(res.statusCode).toEqual(200);
                expect(res.text).toEqual('Bonjour !')
            });
    });
});

describe('hello', () => {
    test('GET blank', async () => {
        return request(app)
            .get('/hello')
            .then(res => {
                expect(res.statusCode).toEqual(200);
                expect(res.text).toEqual('Quel est votre nom ?')
            });
    });
    test('GET with query: nom = Marius', async () => {
        return request(app)
            .get('/hello?nom=Marius')
            .then(res => {
                expect(res.statusCode).toEqual(200);
                expect(res.text).toEqual('Bonjour, Marius !')
            });
    });
    test('GET with query: nom = skoidbngow', async () => {
        return request(app)
            .get('/hello?nom=skoidbngow')
            .then(res => {
                expect(res.statusCode).toEqual(200);
                expect(res.text).toEqual('Bonjour, skoidbngow !')
            });
    });
    test('GET with other query param', async () => {
        return request(app)
            .get('/hello?test=value')
            .then(res => {
                expect(res.statusCode).toEqual(200);
                expect(res.text).toEqual('Quel est votre nom ?')
            });
    });
});

describe('chat', () => {
    test('POST blank', async () => {
        return request(app)
            .post('/chat')
            .then(res => {
                expect(res.statusCode).toEqual(200);
                expect(res.text).toEqual('De quoi voulez vous parler ?')
            });
    });
    test('GET blank', async () => {
        return request(app)
            .get('/chat')
            .then(res => {
                expect(res.statusCode).toEqual(404);
            });
    });
    test('POST with body: msg = ville', async () => {
        return request(app)
            .post('/chat')
            .send({
                msg: 'ville',
            })
            .then(res => {
                expect(res.statusCode).toEqual(200);
                expect(res.text).toEqual('Nous sommes à Paris.')
            });
    });
    test('POST with body: msg = météo', async () => {
        return request(app)
            .post('/chat')
            .send({
                msg: 'météo',
            })
            .then(res => {
                expect(res.statusCode).toEqual(200);
                expect(res.text).toEqual('Il fait beau.')
            });
    });
    test('POST with body: msg = spdingspg', async () => {
        return request(app)
            .post('/chat')
            .send({
                msg: 'spdingspg',
            })
            .then(res => {
                expect(res.statusCode).toEqual(200);
                expect(res.text).toEqual('De quoi voulez vous parler ?')
            });
    });
    test('POST with other body param', async () => {
        return request(app)
            .post('/chat')
            .send({
                test: 'value',
            })
            .then(res => {
                expect(res.statusCode).toEqual(200);
                expect(res.text).toEqual('De quoi voulez vous parler ?')
            });
    });
});

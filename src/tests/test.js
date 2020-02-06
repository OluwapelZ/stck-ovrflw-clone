import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);
chai.should();

describe('Users', () => {
    describe('POST', () => {
        it('Should create a user', (done) => {
            chai.request(app)
            .post('/users')
            .end((err, res) => {
                res.should.have.status(201);
                res.body.should.be.a('object');
                done();
            });
        });

        it('Should login a user', (done) => {
            chai.request(app)
            .post('/users/login')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
        });
    })
})

describe('Questions', () => {
    describe('POST Requests', () => {
        it('Ask question', (done) => {
            chai.request(app)
            .post('/questions')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
        });

        it('Answer question', (done) => {
            chai.request(app)
            .post('/questions/:id/answer')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
        });
    })

    describe('GET Requests', () => {
        it('View questions', (done) => {
            chai.request(app)
            .ger('/questions')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
        });

        it('Answer question', (done) => {
            chai.request(app)
            .get('/search')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
        });
    })

    describe('PUT Requests', () => {
        it('Downvote question', (done) => {
            chai.request(app)
            .ger('/questions/:id/downvote')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
        });

        it('Upvote question', (done) => {
            chai.request(app)
            .get('/questions/:id/upvote')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
        });
    })
})
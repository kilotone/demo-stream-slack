var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();

chai.use(chaiHttp);

describe('/GET Hello World and Date', () => {
    it('it should GET all the String "Hello World" and the current Date', (done) => {
        chai.request('https://localhost:8443')
        .get('/api/hello')
        .end((err,res) => {
            res.body;
        done();
        });
    });
});

import request from 'superagent';
import { expect } from 'chai';

describe('GET /api/users', () => {
  it('should get response OK', (done) => {
    request
      .get('http://localhost:3000/api/users')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res).to.exist;
        expect(res.status).to.equal(200);
        expect(res.ok).to.equal(true);
        done();
      });
  });
  it('should get all users in form of an array', (done) => {
    request
      .get('http://localhost:3000/api/users')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(typeof res.body).to.equal('object');
        expect(Array.isArray(res.body)).to.equal(true);
        done();
      });
  });
})

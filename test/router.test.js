import { Router } from '../router';
import expect from 'chai';
import { describe } from 'mocha';
import httpMocks  from 'node-mocks-http';

describe('GET /health-check', () => {
  it('should return a 200, with a message to say the server is healthy', () => {

    const mockRequest = httpMocks.createRequest({
      method: 'GET',
      url: '/health-check',
    });

    const mockResponse = httpMocks.createResponse();

    const router = new Router();

    router.route(mockRequest, mockResponse);

    expect(mockResponse.statusCode).to.equal(200);
    expect(mockResponse._isEndCalled()).to.be.true;
    expect(mockResponse._getJSONData()).to.deep.equal({ "server-healthy": true })
  })
});

describe('GET /not-existing-endpoint', () => {
  it('should return a 404, with a message to say this page does not exist', () => {
    const mockRequest = httpMocks.createRequest({
      method: 'GET',
      url: '/not-existing-endpoint',
    });

    const mockResponse = httpMocks.createResponse();

    const router = new Router();

    router.route(mockRequest, mockResponse);

    expect(mockResponse.statusCode).to.equal(404);
    expect(mockResponse._isEndCalled()).to.be.true;
    expect(mockResponse._getData()).to.equal('<h1>404, Page not found</h1>')
  })
});

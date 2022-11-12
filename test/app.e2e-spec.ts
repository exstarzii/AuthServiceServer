import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from './../src/app.module';
import { INestApplication } from '@nestjs/common';
import * as myreq from './requests';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let token ='';

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/user/all (GET)', () => {
    return request(app.getHttpServer())
      .get('/user/all')
      .expect(200)
      .then(response => {
        console.log({request:'/user/all (GET)',response:response.body});
      });
  });

  it('/user/signup (POST)', () => {
    return request(app.getHttpServer())
      .post('/user/signup')
      .send(myreq.createUserReguest)
      .expect(201)
      .then(response => {
        console.log({request:'/user/signup (POST)',response:response.body});
      });
  });

  it('/user/login (POST)', () => {
    return request(app.getHttpServer())
      .post('/user/login')
      .send(myreq.loginReguest)
      .expect(201)
      .then(response => {
        token = response.body.access_token;
        console.log({request:'/user/login (POST)',response:response.body});
      });
  });

  it('/user (GET)', () => {
    return request(app.getHttpServer())
      .get('/user')
      .set('Authorization', 'Bearer '+token)
      .expect(200)
      .then(response => {
        console.log({request:'/user (GET)',response:response.body});
      });
  });

  it('/user (PUT)', () => {
    return request(app.getHttpServer())
      .put('/user')
      .set('Authorization', 'Bearer '+token)
      .send(myreq.updateUserReguest)
      .expect(200)
      .then(response => {
        console.log({request:'/user (PUT)',response:response.body});
      });
  });

  it('/user (GET)', () => {
    return request(app.getHttpServer())
      .get('/user')
      .set('Authorization', 'Bearer '+token)
      .expect(200)
      .then(response => {
        console.log({request:'/user (GET)',response:response.body});
      });
  });

  it('/user/login (POST)', () => {
    return request(app.getHttpServer())
      .post('/user/login')
      .send(myreq.loginUpdatedReguest)
      .expect(201)
      .then(response => {
        token = response.body.access_token;
        console.log({request:'/user/login (POST)',response:response.body});
      });
  });

  it('/user (DELETE)', () => {
    return request(app.getHttpServer())
      .delete('/user')
      .set('Authorization', 'Bearer '+token)
      .expect(200)
      .then(response => {
        console.log({request:'/user (DELETE)',response:response.body});
      });
  });

  it('/user/all (GET)', () => {
    return request(app.getHttpServer())
      .get('/user/all')
      .expect(200)
      .then(response => {
        console.log({request:'/user/all (GET)',response:response.body});
      });
  });

  it('/user (GET)', () => {
    return request(app.getHttpServer())
      .get('/user')
      .set('Authorization', 'Bearer '+token)
      .expect(401)
      .then(response => {
        console.log({request:'/user (GET)',response:response.body});
      });
  });

  it('/user/login (POST)', () => {
    return request(app.getHttpServer())
      .post('/user/login')
      .send(myreq.loginUpdatedReguest)
      .expect(401)
      .then(response => {
        console.log({request:'/user/login (POST)',response:response.body});
      });
  });

});
//import { from } from 'rxjs';


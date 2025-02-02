import { Then, When } from '@cucumber/cucumber';
import { HttpStatus } from '@nestjs/common';
import * as assert from 'node:assert';
import * as request from 'supertest';
import { app } from './before-after-all';

// World data
// https://github.com/cucumber/cucumber-js/blob/main/docs/support_files/world.md
const localVars: {
  response?: request.Response;
} = {};

When('user call health-check', async () => {
  localVars.response = await request(app.getHttpServer()).get('/');
});

Then('user should get truthy response', () => {
  assert.strictEqual(HttpStatus.OK, localVars.response.status);
});

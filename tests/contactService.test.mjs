import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sendContact } from '../src/services/contactService.js';

const payload = { name: 'Local test', email: 'visitor@example.com', phone: '123', interest: 'Tenant Placement', message: 'Mocked inquiry' };

test('sends inquiry fields and reply-to to the intended FormSubmit inbox', async (t) => {
  t.mock.method(globalThis, 'fetch', async (endpoint, options) => {
    assert.equal(endpoint, 'https://formsubmit.co/ajax/kennylu.realtor@gmail.com');
    assert.equal(options.method, 'POST');
    assert.equal(options.headers.Accept, 'application/json');
    const body = JSON.parse(options.body);
    for (const [key, value] of Object.entries(payload)) assert.equal(body[key], value);
    assert.equal(body._replyto, payload.email);
    assert.match(body._subject, /Trust Realty/);
    assert.ok(options.signal instanceof AbortSignal);
    return Response.json({ success: 'true' });
  });
  assert.deepEqual(await sendContact(payload), { ok: true });
});

for (const success of [false, 'false']) {
  test(`rejects HTTP 200 with success=${JSON.stringify(success)}`, async (t) => {
    t.mock.method(globalThis, 'fetch', async () => Response.json({ success, message: 'Not accepted' }));
    await assert.rejects(sendContact(payload));
  });
}

test('rejects unexpected HTML rather than reporting success', async (t) => {
  t.mock.method(globalThis, 'fetch', async () => new Response('<html>Activation needed</html>'));
  await assert.rejects(sendContact(payload));
});

test('rejects HTTP errors', async (t) => {
  t.mock.method(globalThis, 'fetch', async () => new Response('Unavailable', { status: 503 }));
  await assert.rejects(sendContact(payload));
});

test('propagates network errors', async (t) => {
  t.mock.method(globalThis, 'fetch', async () => { throw new TypeError('Network error'); });
  await assert.rejects(sendContact(payload));
});

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sendContact } from '../src/services/contactService.js';

const payload = { name: 'Mock visitor', email: 'visitor@example.com', phone: '123', interest: 'Full Property Management', message: 'Mock inquiry' };

test('submits the inquiry, access key and reply-to to Web3Forms', async (t) => {
  t.mock.method(globalThis, 'fetch', async (url, options) => {
    assert.equal(url, 'https://api.web3forms.com/submit');
    assert.equal(options.method, 'POST');
    assert.equal(options.headers['Content-Type'], 'application/json');
    const body = JSON.parse(options.body);
    assert.match(body.access_key, /^[\da-f-]{36}$/);
    for (const [key, value] of Object.entries(payload)) assert.equal(body[key], value);
    assert.equal(body.replyto, payload.email);
    assert.match(body.subject, /Trust Realty/);
    assert.ok(options.signal instanceof AbortSignal);
    return Response.json({ success: true });
  });
  assert.deepEqual(await sendContact(payload), { ok: true });
});

for (const [name, response] of [
  ['provider rejection', () => Response.json({ success: false })],
  ['HTTP error despite success field', () => Response.json({ success: true }, { status: 429 })],
  ['unexpected HTML', () => new Response('<html>Error</html>')],
  ['missing success flag', () => Response.json({ message: 'Unknown result' })],
]) {
  test(`does not report success for ${name}`, async (t) => {
    t.mock.method(globalThis, 'fetch', async () => response());
    await assert.rejects(sendContact(payload));
  });
}

test('propagates network failures', async (t) => {
  t.mock.method(globalThis, 'fetch', async () => { throw new TypeError('Network error'); });
  await assert.rejects(sendContact(payload));
});

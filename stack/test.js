import { strict as assert } from 'assert';
import Stack from './stack.js';

describe('Stack', function () {
  let s;

  beforeEach(function () {
    s = new Stack();
  });

  it('is initially empty', function () {
    assert.equal(s.head, null);
    assert.equal(s.size(), 0);
    assert.ok(s.peek() == null);
    assert.ok(s.pop() == null);
  });

  it('push sets head and increases size', function () {
    s.push('A');
    assert.equal(s.size(), 1);
    assert.equal(s.peek(), 'A');
    assert.equal(s.get(0), 'A');
    assert.ok(s.head && s.head.data === 'A');
  });

  it('behaves LIFO for multiple pushes/pops', function () {
    s.push('A');
    s.push('B');
    s.push('C');
    assert.equal(s.size(), 3);

    assert.equal(s.peek(), 'C');
    assert.equal(s.get(0), 'C');
    assert.equal(s.get(1), 'B');
    assert.equal(s.get(2), 'A');

    assert.equal(s.pop(), 'C');
    assert.equal(s.pop(), 'B');
    assert.equal(s.pop(), 'A');

    assert.equal(s.size(), 0);
    assert.equal(s.head, null);
  });

  it('peek does not remove the top element', function () {
    s.push('X');
    const p = s.peek();
    assert.equal(p, 'X');
    assert.equal(s.size(), 1);
  });

  it('get() returns nullish for out-of-bounds indices', function () {
    s.push('A');
    assert.ok(s.get(-1) == null);
    assert.ok(s.get(1) == null);
  });

  it('pop on empty stack is safe (no throw) and returns nullish', function () {
    assert.doesNotThrow(() => s.pop());
    assert.ok(s.pop() == null);
  });

  it('alternating push/pop updates head correctly', function () {
    s.push('A');
    s.push('B');
    assert.equal(s.pop(), 'B');
    assert.equal(s.peek(), 'A');
    s.push('C');
    assert.equal(s.peek(), 'C');
    assert.equal(s.pop(), 'C');
    assert.equal(s.pop(), 'A');
    assert.equal(s.size(), 0);
  });
});
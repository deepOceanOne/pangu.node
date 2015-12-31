import test from 'ava';
import pangunode from './pangunode';

test('no args', t => {
    t.same(pangunode(''), '', 'should be null.');
    t.end();
});
test('with args', t => {
    t.same(pangunode('nothing happen'), 'nothing happen', 'should be \'nothing happen\'.');
    t.same(pangunode('應該nothing happen'), '應該 nothing happen', 'should be \'應該 nothing happen\'.');
    t.same(pangunode('u請問Jackie的鼻子有幾個S'), 'u 請問 Jackie 的鼻子有幾個 S', 'should be \'u 請問 Jackie 的鼻子有幾個 S\'.');
    t.end();
});

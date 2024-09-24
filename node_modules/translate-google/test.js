import test from 'ava'

import languages from './languages'
import translate from './index'

test('translate with string', async t => {
  try {
    const res = await translate('你好')
    t.is(res, 'Hello there')
  } catch (err) {
    t.fail(err.code)
  }
})

test('translate with array', async t => {
  try {
    const res = await translate(['你好', '你好'])
    t.is(res[0], 'Hello there')
    t.is(res[1], 'Hello there')
  } catch (err) {
    t.fail(err.code)
  }
})

test('translate with object', async t => {
  try {
    const res = await translate({a: '你好', b: '你好'})
    t.is(res.a, 'Hello there')
    t.is(res.b, 'Hello there')
  } catch (err) {
    t.fail(err.code)
  }
})

test('translate with array and object', async t => {
  try {
    const res = await translate({a: '你好', b: ['你好', '你好']})
    t.is(res.a, 'Hello there')
    t.is(res.b[0], 'Hello there')
    t.is(res.b[1], 'Hello there')
  } catch (err) {
    t.fail(err.code)
  }
})

test('translate with option', async t => {
  try {
    const res = await translate('Hello', {from: 'en', to: 'zh-cn'})
    t.is(res, '你好')
  } catch (err) {
    t.fail(err.code)
  }
})

test('test a supported language – by code', t => {
  t.true(languages.isSupported('en'))
})

test('test an unsupported language – by code', t => {
  t.false(languages.isSupported('js'))
})

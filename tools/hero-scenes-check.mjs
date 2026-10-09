// Controller checks with synthetic browser events; no device/browser emulation.
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import vm from 'node:vm';
import ts from 'typescript';

const source = await fs.readFile('src/scripts/hero-scenes.ts', 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS } }).outputText;
class Element extends EventTarget {
  constructor() { super(); this.classes = new Set(); this.attrs = {}; this.classList = { add: c => this.classes.add(c), remove: c => this.classes.delete(c) }; }
  setAttribute(k, v) { this.attrs[k] = v; }
}
function setup(reduced = false) {
  const scenes = [new Element(), new Element(), new Element()];
  scenes[0].classes.add('is-current');
  scenes.forEach(scene => { scene.decode = async () => {}; });
  const label = {};
  const button = new Element();
  button.querySelector = () => label;
  const hero = { querySelectorAll: () => scenes, querySelector: () => button };
  const document = new EventTarget();
  document.hidden = false;
  document.querySelector = () => hero;
  const window = new EventTarget();
  const motion = new EventTarget();
  motion.matches = reduced;
  const timers = new Map();
  let id = 0, observe;
  vm.runInNewContext(compiled, { exports: {}, document, window, matchMedia: () => motion, AbortController,
    setTimeout: cb => { timers.set(++id, cb); return id; }, clearTimeout: key => timers.delete(key),
    IntersectionObserver: class { constructor(cb) { observe = cb; } observe() {} disconnect() {} },
  });
  return { scenes, label, button, document, window, motion, timers,
    visible: value => observe([{ isIntersecting: value }]),
    tick: async () => { const [key, cb] = timers.entries().next().value; timers.delete(key); await cb(); },
  };
}
const t = setup();
t.visible(true);
assert.equal(t.timers.size, 1);
await t.tick();
assert(t.scenes[1].classes.has('is-entering'));
t.button.dispatchEvent(new Event('click'));
assert(t.scenes[1].classes.has('is-current'));
assert(!t.scenes.some(e => e.classes.has('is-entering')));
assert.equal(t.label.textContent, 'Resume scenes');
assert.equal(t.timers.size, 0);
t.button.dispatchEvent(new Event('click'));
assert.equal(t.timers.size, 1);
t.document.hidden = true;
t.document.dispatchEvent(new Event('visibilitychange'));
assert.equal(t.timers.size, 0);
t.document.hidden = false;
t.document.dispatchEvent(new Event('visibilitychange'));
assert.equal(t.timers.size, 1);
t.visible(false);
assert.equal(t.timers.size, 0);
t.visible(true);
t.motion.matches = true;
t.motion.dispatchEvent(new Event('change'));
assert.equal(t.timers.size, 0);
assert(t.scenes[0].classes.has('is-current'));
assert.equal(t.button.disabled, true);
const r = setup(true);
r.visible(true);
assert.equal(r.timers.size, 0);
assert(r.scenes[0].classes.has('is-current'));
const fail = setup();
fail.scenes[1].decode = async () => { throw new Error('decode failure'); };
fail.visible(true);
await fail.tick();
assert(fail.scenes[0].classes.has('is-current'));
assert.equal(fail.timers.size, 1);
fail.document.dispatchEvent(new Event('astro:before-swap'));
assert.equal(fail.timers.size, 0);

const html = await fs.readFile('dist/index.html', 'utf8');
assert.match(html, /class="hero-scene is-current"/);
assert.match(html, /Illustrative scenes/);
assert.match(html, /Pause scenes/);
const component = await fs.readFile('src/components/Hero.astro', 'utf8');
assert.match(component, /\.hero-copy, \.hero-media \{ animation: none; \}/);
assert.match(component, /\.hero-scene.is-current \{ visibility: visible/);
assert(!component.includes('hero-ambience'));
console.log('PASS: pause mid-transition, resume, hidden tab, offscreen, reduced motion, decode failure, cleanup, initial static markup.');

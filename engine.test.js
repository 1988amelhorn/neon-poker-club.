import test from 'node:test';import assert from 'node:assert/strict';import {best,compare,deck,pots} from '../engine.js';
test('deck contains 52 unique cards',()=>{let d=deck();assert.equal(d.length,52);assert.equal(new Set(d).size,52)});
test('wheel straight ranks below six-high straight',()=>{let a=best(['A♠','2♥','3♦','4♣','5♠']),b=best(['2♠','3♥','4♦','5♣','6♠']);assert.equal(a[0],4);assert.equal(a[1],5);assert.ok(compare(b,a)>0)});
test('straight flush beats quads',()=>{assert.ok(compare(best(['9♠','T♠','J♠','Q♠','K♠']),best(['A♠','A♥','A♦','A♣','2♠']))>0)});
test('full house from seven cards',()=>{assert.equal(best(['A♠','A♥','A♦','K♠','K♥','2♦','3♣'])[0],6)});
test('side pot awards main and side separately',()=>{let p=[{id:'a',name:'A',committed:50,fold:false,cards:['A♠','A♥']},{id:'b',name:'B',committed:100,fold:false,cards:['K♠','K♥']},{id:'c',name:'C',committed:100,fold:false,cards:['Q♠','Q♥']}];let x=pots(p,['2♣','3♦','7♠','8♥','9♣']);assert.equal(x.awards.get('a'),150);assert.equal(x.awards.get('b'),100)});
test('split pot awards all chips including odd chip',()=>{let p=[{id:'a',name:'A',committed:5,fold:false,cards:['2♠','3♥']},{id:'b',name:'B',committed:5,fold:false,cards:['4♠','5♥']},{id:'c',name:'C',committed:5,fold:true,cards:['6♠','7♥']}];let x=pots(p,['T♠','J♠','Q♠','K♠','A♠']);assert.equal([...x.awards.values()].reduce((a,b)=>a+b,0),15)})

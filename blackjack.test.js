import test from 'node:test';import assert from 'node:assert/strict';import {value,settle,shoe} from '../blackjack.js';
test('four-deck shoe has 208 cards',()=>assert.equal(shoe().length,208));
test('aces can be hard or soft',()=>{assert.equal(value(['A♠','9♥']).total,20);assert.equal(value(['A♠','9♥','5♣']).total,15)});
test('natural blackjack pays as blackjack',()=>assert.equal(settle({cards:['A♠','K♥']},['9♣','8♦']), 'blackjack'));
test('dealer blackjack beats ordinary 21',()=>assert.equal(settle({cards:['7♠','7♥','7♣']},['A♣','K♣']), 'lose'));
test('equal hands push',()=>assert.equal(settle({cards:['10♠','8♥']},['9♣','9♦']), 'push'));

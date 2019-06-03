const assert=require('chai').assert;
const request = require('supertest');
const Game=require('../models/calc');

describe('Bowling ',()=>{

   
    it('role a frame ',()=>{
        const game =new Game();
        game.role(2);
        game.role(5);
        assert.equal(game.result(),7);
    });

    it('A 10 in a frame = spare',()=>{
        const game = new Game ();
        game.role(5);
        game.role(5);
        game.role(5);
        assert.equal(game.result(),20);
    })

    it('Multiple spares in a row ',()=>{
        const game = new Game ();
        game.role(5);
        game.role(5);
        game.role(5);
        game.role(5);
        game.role(5);
        assert.equal(game.result(),35);
    })
    

    it('A one ball with a 10 = strike',()=>{
        const game = new Game ();
        game.role(10);
        game.role(5);
        game.role(5);
        assert.equal(game.result(),30);
    })


    // it('A one ball with a 10 = strike2',()=>{
    //     const game = new Game ();
    //     game.role(10);
    //     game.role(5);
    //     game.role(5);
    //     game.role(3)
    //     assert.equal(game.result(),36);
    // })



    it('test api', (done)=> {
        request('http://localhost:3000/hr/v1')
          .post('/accounts')
          .send({name: 'john'})
          .set('Accept', 'application/json')
          .expect(200);
      });
})
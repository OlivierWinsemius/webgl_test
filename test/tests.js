var { assert } = require('chai');

describe('Array', function(){
    context('general shit', function(){
        it('Should return -1 when no value is present', function(){
            assert.equal([1,2,3].indexOf(4), -1);
        });
    })
});
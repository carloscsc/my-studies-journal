/* 
 Delivering asynchronous result via callback

*/

// Ex. 1 
readFile('some-file.txt', {encoding: 'utf-8'},
  (error, data) => {
    if (error) {
      assert.fail(error);
      return;
    }
    assert.equal(data, 'The content of some-file.txt');
  });


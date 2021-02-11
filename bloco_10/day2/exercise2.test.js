const { test, expect } = require("@jest/globals");

const users = {
    4: { name: 'Mark' },
    5: { name: 'Paul' }
  };
  
  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        };
  
        return reject({ error: 'User with id not found.' });
    });
  };
  
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  };

  // test('test resulta of getUserName', () => {
  //   return getUserName(4).then(name => {
  //     expect(name).toBe('Mark');
  //   });
  // });

  // test('test resulta if resulte id 1 return erro', () => {
  //   return getUserName(2).catch(error => {
  //     expect(error).toStrictEqual({ error: 'User with id not found.' });
  //   });
  // });

  test('test resulta of getUserName', async () => {
    const name = await getUserName(4)
    expect(name).toBe('Mark');
  });

  it('test resulta if resulte id 1 return erro', async () => {
    try {
      await getUserName(2)
    } catch (error) {
      expect(error).toStrictEqual({ error: 'User with id not found.' })
    }
  });
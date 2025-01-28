const mongoose = require('mongoose');
const { createUser } = require('../functions/userModel.js');


//Mocking mongoose model
jest.mock('mongoose');
const MockedUser = mongoose.model('User');

describe('User Model Tests', () =>{
    //jest hook
    afterEach(()=>{
        //Clear all mocks after each test case
        jest.clearAllMocks();
    });

    describe('createUser', ()=>{
        //test dtypes, unique email, age boundary, validation/verification, 

        it('should create the new user', async () => {
        //Arrange - setup the variables
        const mockUser = { name: "Todd Nash",
                           email: "Todd.Nash@rdpolytech.ca",
                           password: "password",
                           age: 100,
                         };
        
        // Action
        MockedUser.prototype.save = jest.fn().mockedResolvedValue(mockUser);
        const result = await createUser('Jack Donald', 'Jack.Donald@gmail.com', 'password', 99);

        // Assert
        expect(result).toEqual(mockUser);
        expect(mockUser.prototype.save).toHaveBeenCalledTimes(1);
        });
    });
});
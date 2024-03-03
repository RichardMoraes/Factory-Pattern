import User from "./user";
import UserFactory from "./user-factory";
import { UserData } from "./user.model";

const userMock: UserData = { 
    id: 1, 
    name: "Alice", 
    email: "alice@example.com" 
}

describe('User Factory', () => {
    const originalConsoleError = console.error;

    beforeAll(() => {
        console.error = jest.fn();
    });
    afterAll(() => {
        console.error = originalConsoleError;
    });

    test('Should create a user', () => {
        const user = UserFactory.createUser(userMock);
        
        expect(user.id).toEqual(userMock.id);
        expect(user.name).toBe(userMock.name);
        expect(user.email).toBe(userMock.email);
    });

    test('Should throw an error for invalid create user data', () => {
        expect(() => {
            UserFactory.createUser({} as UserData);
        }).toThrow();
    })

    test('Should update a user', () => {
        const userUpdateMock: Partial<UserData> = { 
            name: "Aline new", 
            email: "alineNew@example.com" 
        }

        const user = UserFactory.createUser(userMock);

        UserFactory.updateUser(user, userUpdateMock);
        
        expect(user.name).toBe(userUpdateMock.name);
        expect(user.email).toBe(userUpdateMock.email);
    });

    test('Should throw an error for invalid update user data', () => {
        expect(() => {
            UserFactory.updateUser({} as User, {} as UserData);
        }).toThrow();
    })
})
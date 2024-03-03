import User from "./user";
import { UserData } from "./user.model";

interface UserFactory {
    createUser(userdata: UserData): User;
    updateUser(user: User, userdata: Partial<UserData>): User;
}

// TODO: Create tests for these classes
class BaseUserFactory implements UserFactory {
    createUser(userdata: UserData): User {
        try {
            const user = new User();
            user.create(userdata);

            return user; 
        } catch (error) {
            console.error('[user] Error while setting user data:', error);
            throw new Error('Failed to create user. Check provided data.');
        }

    }

    updateUser(user: User, userdata: Partial<UserData>): User {
        try {
            user.update(userdata);

            return user; 
        } catch (error) {
            console.error('[user] Error while updating user:', error);
            throw new Error('Failed to update user. Check provided data.');
        }

    }
}

class AdministratorUserFactory extends BaseUserFactory {
    createUser(userdata: UserData): User {
        try {
            const user = new User({type: 'administrator'});
            user.create(userdata);

            return user; 
        } catch (error) {
            console.error('[user] Error while setting user data:', error);
            throw new Error('Failed to create user. Check provided data.');
        }

    }
}

export { BaseUserFactory, AdministratorUserFactory };
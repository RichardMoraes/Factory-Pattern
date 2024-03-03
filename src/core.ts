import { AdministratorUserFactory, BaseUserFactory } from "./factories/user/user-factory";
import { CoreConfiguration } from "./interfaces/core/core.model";

class Core {

    constructor(configuration: CoreConfiguration = {}) { }

    start(): void {
        console.log('core start');
        // Create Administrator
        const adminUserFactory = new AdministratorUserFactory();
        const alex = adminUserFactory.createUser({ id: 1, name: "Alex", email: "alex@example.com" });
        console.log('admin user alex created', alex);
        adminUserFactory.updateUser(alex, { email: "alexTest@example.com" });
        console.log('admin user updated', alex);
        
        // Create User
        const baseUserFactory = new BaseUserFactory();
        const alice = baseUserFactory.createUser({ id: 2, name: "Alice", email: "alice@example.com" });
        console.log('user alice created', alice);
        baseUserFactory.updateUser(alice, { email: "aliceTest@example.com" });
        console.log('user updated', alice);
    }

    stop(): void {
        console.log('core stop');
    }
}

export default Core;
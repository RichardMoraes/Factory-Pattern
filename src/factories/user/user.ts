import { UserConfiguration, UserData } from "./user.model";

class User {
    id!: number;
    name!: string;
    email!: string;
    role: string = "user";

    constructor(configuration: UserConfiguration = {}) {
        if(configuration.type === 'administrator')
            this.role = configuration.type;
    }

    create(userData: UserData): void {
        if (typeof userData.id !== 'number' || isNaN(userData.id)) 
            throw new Error(`Invalid user ID: ${userData.id}`);
        
        if (typeof userData.name !== 'string' || userData.name.trim() === '') 
            throw new Error(`Invalid name: ${userData.name}`);
        
        if (typeof userData.email !== 'string' || !userData.email.includes('@'))
            throw new Error(`Invalid email: ${userData.email}`);

        this.id = userData.id;
        this.name = userData.name;
        this.email = userData.email;
    }

    update(userData: Partial<UserData>): void {
        if (Object.keys(userData).length === 0)
            throw new Error(`No data provided for user`);

        if (userData.id !== undefined && (typeof userData.id !== 'number' || isNaN(userData.id))) 
            throw new Error(`Invalid user ID: ${userData.id}`);
        
        if (userData.name !== undefined && (typeof userData.name !== 'string' || userData.name.trim() === '')) 
            throw new Error(`Invalid name: ${userData.name}`);
        
        if (userData.email !== undefined && (typeof userData.email !== 'string' || !userData.email.includes('@')))
            throw new Error(`Invalid email: ${userData.email}`);

        this.id = userData.id ?? this.id;
        this.name = userData.name ?? this.name;
        this.email = userData.email ?? this.email;
    }
}

export default User;
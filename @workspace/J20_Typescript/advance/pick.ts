interface User {
    name: string;
    age: number;
}

// Pick only the 'name' property from User
type UserUpdate = Pick<User, "name">;

// Make the picked properties optional and readonly
type UserU = Readonly<Partial<UserUpdate>>;

// Create a readonly UserU object
const user1: UserU = {
    name: "hello",
};
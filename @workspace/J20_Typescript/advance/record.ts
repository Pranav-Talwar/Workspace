type userd = {
    [key : string] : user;
}
type userR = Record<string, user>
type user = {
    id: string;
    username: string
}
const users : userR = {
    "hello" : {
        id: "111",
        username: "aaaa"
    }
}
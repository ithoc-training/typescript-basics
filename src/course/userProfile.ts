type UserInfo = {
    name: string;
    age: number;
    email: string;
    administrator: boolean;
}

type UserProfile = {
    userInfo: UserInfo;
    favorites: string[];
}

let userInfo: UserInfo = {
    name: 'Oli',
    age: 52,
    email: 'oliver.hock@example.com',
    administrator: true
}

let userProfile: UserProfile = {
    userInfo: userInfo,
    favorites: ['Sport', 'Lesen', 'Programmieren']
}

console.log(userInfo);
console.log(userProfile);

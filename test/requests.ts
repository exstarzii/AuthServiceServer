export let loginReguest ={
    email: "newUser@gmail.com",
    password: "1"
}

export let loginUpdatedReguest ={
    email: "udatedUser@gmail.com",
    password: "2",
}

export let createUserReguest ={
    username: 'newUser',
    email: "newUser@gmail.com",
    password: "1",
    phone:"7899234234",
    about:" example of create user"
}

export let updateUserReguest ={
    username: 'udatedUser',
    email: "udatedUser@gmail.com",
    password: "2",
    phone:"7899234234",
    about:" example of update user"
}

// bad requests

export let loginNotExistReguest ={
    email: "notexist@gmail.com",
    password: "1"
}

export let loginWrongPasswordReguest ={
    email: "newUser@gmail.com",
    password: "hateJS"
}

export let updateNonExistParamReguest ={
    phone:"7899234234",
    about:" example of update user",
    nonexistparam: "I shouldn't exist"
}

export let updateAnotherUserReguest ={
    email: "mari@gmail.com",
    password: "guess",
    phone:"7899234234",
    adress: "1, 2, 3",
    about:" example of update user",
    nonexistparam: "I shouldn't exist"
}


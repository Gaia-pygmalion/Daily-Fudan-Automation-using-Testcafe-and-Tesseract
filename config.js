let studentNo = process.env.studentNo || "plchd"
let studentPw = process.env.studentPw || "plchd"

const CurrentUser = {
    username: studentNo,
    password: studentPw
}

const CurrentLocation = { // todo
    atSchool: 1,
    latitude: 31.301044, 
    longitude: 121.500455
}

export { 
    CurrentUser, CurrentLocation
}


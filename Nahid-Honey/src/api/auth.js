// import useAxiosSecure from "./useAxiosSecure"


// save a user to database as a student
export const saveUser = user => {
    // const axiosSecure = useAxiosSecure()

    const currentUser = {
        email: user.email,
        name: user.displayName,
        picture: user.photoURL,
        role: 1
    }

    fetch(`${import.meta.env.VITE_API_URL}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
    })
        .then(res => res.json())
        .then(data => console.log(data))

    // axiosSecure.post('/users', currentUser)
    //     .then(data => console.log(data?.data))
    //     .catch(err => console.log(err))
}


// make a instructor
// export const makeInstructor = (email, isIns) => {
//     const currentUser = {
//         role: 'instructor',
//         isIns: isIns
//     }

//     return fetch(`${import.meta.env.VITE_API_URL}/users/${email}`, {
//         method: 'PUT',
//         headers: {
//             'content-type': 'application/json',
//         },
//         body: JSON.stringify(currentUser),
//     }).then(res => res.json()).then(data => console.log(data))
// }


// make a admin
// export const makeAdmin = (email, isAdm) => {
//     const currentUser = {
//         role: 'admin',
//         isAdm: isAdm
//     }

//     return fetch(`${import.meta.env.VITE_API_URL}/users/${email}`, {
//         method: 'PUT',
//         headers: {
//             'content-type': 'application/json',
//         },
//         body: JSON.stringify(currentUser),
//     }).then(res => res.json())
// }


// Get user
// export const getUser = async () => {
//     const response = await fetch(`${import.meta.env.VITE_API_URL}/users`)
//     const user = await response.json()
//     return user
// }

// Get a single user
// export const getASingleUser = async email => {
//     const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${email}`)
//     const user = await response.json()
//     return user
// }
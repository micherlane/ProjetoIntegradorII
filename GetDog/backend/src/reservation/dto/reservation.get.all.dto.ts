const userInfo = {
    id: true,
    name: true,
    address: true,
}

const reservationPersonalInfo = {
    id: true,
    appointment: true,
    statusDogWalkReservation: true,
    address: true,
    postId: true,
    createdAt: true,
    updatedAt: true,
}

const profileUserInfo ={
    gender: true,
    biography: true,
    profilePicture: true,
    coverPhoto: true,
}

const postInfo = {
    title: true,
    legend: true,
     
}

export const reservationGetAllDto = {
    ...reservationPersonalInfo,
    user: {
        select: {
            ...userInfo,
            profile: {
               select: {
                ...profileUserInfo
               }
            }
        }
    },
    post: {
        select: {
            ...postInfo
        }
    }
}
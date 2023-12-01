const authorInfo = {
    id: true,
    name: true,
    address: true,
    typeUser: true,
}

const profileUserInfo ={
    gender: true,
    biography: true,
    profilePicture: true,
    coverPhoto: true,
}

const postInfo = {
    id: true,
    title: true,
    legend: true,
    photos: true,   
    disponibility: true,
    likes: true,
    unlikes: true,
    createdAt: true,
    updatedAt: true,
    address: true
}

export const postGetAllDto = {
    ...postInfo,
    author: {
        select: {
            ...authorInfo,
            profile: {
                select: {
                    ...profileUserInfo
                }
            }
        }
    }
}

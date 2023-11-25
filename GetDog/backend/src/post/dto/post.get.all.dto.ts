const authorInfo = {
    id: true,
    name: true,
    address: true,
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
    disponibility: true,
    likes: true,
    unlikes: true,
    createdAt: true,
    updatedAt: true,
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

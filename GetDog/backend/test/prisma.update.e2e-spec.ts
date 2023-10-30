import { UserUpdateProfileDto } from "../src/user/dto/user.update.profile.dto";
import { UserUpdateProfileRepository } from "../src/user/repositories/user.update.profile.respository";
import { prismaMock } from "../singleton";

test('deve atualizar um usuário', async () => {
    const userUpdateProfileRepository = new UserUpdateProfileRepository();
    const userId = "713b6c4b-3918-4119-bddc-9c492f7ad697";
    const userUpdate = { gender: "Masculino", biography: "Sem biografia" } as UserUpdateProfileDto;
    const profilePicture = "imagem.png";
    const coverPhoto = "imagem.png";

    prismaMock.profile.update.mockResolvedValue({
        id: "713b6c4b-3918-4119-bddc-9c492f7ad698",
        userId: userId,
        gender: userUpdate.gender,
        biography: userUpdate.biography,
        profilePicture: profilePicture,
        coverPhoto: coverPhoto,
        created_at: null,
        updated_at: null
    });

    const updateProfile = await userUpdateProfileRepository.saveProfile(userId, userUpdate, profilePicture, coverPhoto);
    
    expect(updateProfile).toEqual({
        id: "713b6c4b-3918-4119-bddc-9c492f7ad698",
        userId: userId,
        gender: userUpdate.gender,
        biography: userUpdate.biography,
        profilePicture: profilePicture,
        coverPhoto: coverPhoto,
        created_at: null,
        updated_at: null
    });
});
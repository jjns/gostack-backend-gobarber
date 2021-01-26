import { de } from "date-fns/locale";

interface Request {
  user_id: String;
  avatarFilename: String;
}

class UpdateUserAvatarService {
  public async execute({ user_id, avatarFilename }: Request): Promise<void> {

  }
};

export default UpdateUserAvatarService;

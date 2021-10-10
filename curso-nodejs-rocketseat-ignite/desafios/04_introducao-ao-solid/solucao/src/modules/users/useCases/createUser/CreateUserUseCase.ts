import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const hasOneUserWithSameEmail = this.usersRepository
      .list()
      .find((user) => user.email === email);

    if (hasOneUserWithSameEmail) {
      throw new Error("This user already exists!");
    }

    const newUser = this.usersRepository.create({ name, email });
    return newUser;
  }
}

export { CreateUserUseCase };

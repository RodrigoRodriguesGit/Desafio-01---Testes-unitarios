
import { InMemoryUsersRepository } from "../../repositories/in-memory/InMemoryUsersRepository"
import { CreateUserUseCase } from "./CreateUserUseCase"
import { ICreateUserDTO } from "./ICreateUserDTO"

let in_memory_UsersRepository: InMemoryUsersRepository
let createUserUseCase:  CreateUserUseCase

describe("Create User", () => {

    beforeEach(() => {

        in_memory_UsersRepository = new InMemoryUsersRepository()
        createUserUseCase = new CreateUserUseCase(in_memory_UsersRepository)

    })

    it("should be able to create a new user", async () => {

        const user: ICreateUserDTO = {
            name: "teste_001",
            email: "teste_001@teste_001",
            password: "121212",
        }

        await createUserUseCase.execute(user);

        console.log(user)

    })



})

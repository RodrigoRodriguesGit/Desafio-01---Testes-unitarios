import request from "supertest"
import { app } from "../../../../app"

import { InMemoryUsersRepository } from "../../repositories/in-memory/InMemoryUsersRepository"
import { CreateUserUseCase } from "./CreateUserUseCase"
import { ICreateUserDTO } from "./ICreateUserDTO"

import authConfig from '../../../../config/auth';
import { sign } from 'jsonwebtoken';
import { UpdateQueryBuilder } from "typeorm"
import { UsersRepository } from "../../repositories/UsersRepository"

let in_memory_UsersRepository: InMemoryUsersRepository
let createUserUseCase:  CreateUserUseCase

describe("Create User", () => {

    beforeEach(() => {

        in_memory_UsersRepository = new InMemoryUsersRepository()
        createUserUseCase = new CreateUserUseCase(in_memory_UsersRepository)

    })

    it("should be able to create a new user", async () => {

        const user: ICreateUserDTO = {
            name: "TS_001",
            email: "TS_001@gmail.com",
            password: "123",
        }

        await createUserUseCase.execute(user)

        console.log(user)

        const response = await request(app).post("/").send({
          name: user.name,
          email: user.email,
          password: user.password
      })

        expect(response.status).toBe(404)

    })


    it("should be able to return user data", async () => {

       const responseToken = await request(app).post("/sessions").send({
          email: "TS_001@gmail.com",
          password: "123"
       })

       const { token } = responseToken.body

       const response = await request(app).post("/users").send({
          name: "User 001",
          description: "User 001"
       }).set({
          Authorization: `Bearer ${token}`,
       })

       console.log(response)

       expect(response.status).toBe(404)

    })

    it("should able to return receives a JWT token in the request header and returns authenticated user information.", async () => {


    })

})

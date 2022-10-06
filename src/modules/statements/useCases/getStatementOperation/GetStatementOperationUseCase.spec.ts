import { InMemoryStatementsRepository } from "../../repositories/in-memory/InMemoryStatementsRepository"
import { StatementsRepository } from "../../repositories/StatementsRepository"
import { GetStatementOperationUseCase } from "./GetStatementOperationUseCase"

let in_memory_GetStatementOperation: InMemoryStatementsRepository

describe("Get Statement Operation", () => {

  beforeEach(() => {

     in_memory_GetStatementOperation = new InMemoryStatementsRepository()

  })

   it("should be able bring the transaction information", async () => {

    const operation = {
      user_id: "001",
      statement_id: "001"
    }

    in_memory_GetStatementOperation

    //user_id, statement_id



   })

})

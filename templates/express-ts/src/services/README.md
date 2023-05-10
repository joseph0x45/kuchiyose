Delete this file after reading this.
This folder should contain exporter functions that describe your business logic

Example:
```ts
//Auth.ts
import { Request, Response } from "express"

export async function login(req: Request, res: Response){
    const { email, password } = req.body
    //...
    return res.status(200).send({ data })
  }
```

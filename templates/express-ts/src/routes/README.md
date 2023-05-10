Delete this file after reading this.
This folder should contain exporter Router objects.

Example:
```ts
//auth/index.ts
import { Router } from "express"
import { login } from "../services/Auth"
const router = Router()

//Routes
router.route("/login").post( login )
```

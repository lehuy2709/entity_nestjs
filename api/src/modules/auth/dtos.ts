import { MinLength } from "class-validator";
import { ApiStrField } from "../../shares/decorators";

export class LoginReq {
    @ApiStrField()
    email:string 

    @ApiStrField()
    password: string
}


export class RegisterReq {
  @ApiStrField()
  name: string;

  @ApiStrField()
  email: string;

  @ApiStrField()
  @MinLength(6)
  password: string;
}
import { Injectable, Post } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { LoginReq } from "./dto/login.req";
import { PasswordUtil } from "src/utils/password.util";

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) {}

    async login(req: LoginReq){
        const {email, password} = req;

        const user = await this.userService.getByEmail(email);

        if (!user) {
            throw Error("User not found");
        }

        const passwordHash = user.password;

        const verify = await PasswordUtil.verifyPassword(password, passwordHash);

        if (!verify) {
            throw Error ("Invalid password");
        }

        return user;
    }
}
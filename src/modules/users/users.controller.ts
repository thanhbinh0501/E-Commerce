import { Body, Controller, Get, Param, Post, Put, Delete } from "@nestjs/common";
import { User } from "src/entities/user.entity";
import { UserCreateReq } from "./dto/user-create.req";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService) {}

    @Post()
    createUsers(@Body() req: UserCreateReq) {
        return this.userService.create(req);
    }

    // @Get()
    // getAllUsers() {
    //     return this.users;
    // }

    // @Put(':id')
    // updateUsers(@Param('id') id: number, @Body() req: UserCreateReq) {
    //     const userIndex = this.users.findIndex(user => user.id === Number(id));
    //     if (userIndex === -1) {
    //         return { message: 'User not found' };
    //     }
    //     const updatedUser: User = {
    //         ...this.users[userIndex],
    //         email: req.email,
    //         password: req.password,
    //         name: req.name,
    //         phone_number: req.phone_number,
    //         roles: req.roles || this.users[userIndex].roles,
    //     };
    //     this.users[userIndex].name = req.name;
    //     return this.users[userIndex];
    // }
    // @Delete(':id')
    // deleteUser(@Param('id') id: number) {
    //     const userIndex = this.users.findIndex(user => user.id === Number(id));
    //     if (userIndex === -1) {
    //         return { message: 'User not found' };
    //     }
    //     const deletedUser = this.users.splice(userIndex, 1);
    //     return { message: 'User deleted', user: deletedUser[0] };
    // }
}
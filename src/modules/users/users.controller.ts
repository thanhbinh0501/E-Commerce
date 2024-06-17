import { Body, Controller, Get, Param, Post, Put, Delete } from "@nestjs/common";
import { User } from "src/entities/user.entity";
import { UserCreateReq } from "./dto/user-create.req";

@Controller('users')
export class UserController {
    private users: User[] = [];
    private id: number = 1;

    @Post()
    createUsers(@Body() req: UserCreateReq) {
        const newUser = {
            id: this.id,
            name: req.name,
        }
        this.users.push(newUser)
        this.id++;
        return newUser;
    }

    @Get()
    getAllUsers() {
        return this.users;
    }
    @Put(':id')
    updateUsers(@Param('id') id: number, @Body() req: UserCreateReq) {
        const userIndex = this.users.findIndex(user => user.id === Number(id));
        if (userIndex === -1) {
            return { message: 'User not found' };
        }
        this.users[userIndex].name = req.name;
        return this.users[userIndex];
    }
    @Delete(':id')
    deleteUser(@Param('id') id: number) {
        const userIndex = this.users.findIndex(user => user.id === Number(id));
        if (userIndex === -1) {
            return { message: 'User not found' };
        }
        const deletedUser = this.users.splice(userIndex, 1);
        return { message: 'User deleted', user: deletedUser[0] };
    }
}
import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {

    public async getAll(): Promise<string> {
        return "obtendo usuarios";
    }

    public async createUser(): Promise<string> {
        return "Usuario criado";
    }

    public async updateUser(id: number): Promise<string> {
        return "Usuario criado " + id;
    }

    public async deleteUser(id: number): Promise<string> {
        return "Usuario deletado " + id;
    }
}
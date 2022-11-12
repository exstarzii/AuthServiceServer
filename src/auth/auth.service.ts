import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    // console.log("validateUser");
    const user = await this.usersService.findOne(email);
    // console.log(user);
    if (user && user.password === pass) {
      // console.log("validateUser pass");
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  
  async login(user: any) {
    const payload = { sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async signup(user: any) {
    const userCreated = await this.usersService.createUser(user);
    // console.log("userCreated");
    // console.log(userCreated);
    if(userCreated){
      return "Account has been created";
    }
  }

  async updateUser(userId: any, updatedUser: any) {
    await this.usersService.updateUser(userId,updatedUser);
  }

  async getUser(userId: any) {
    const user = await this.usersService.findById(userId);
    if(!user)return;
    // console.log(user);
    return user;
  }

  async getAll(): Promise<any | undefined> {
    const users = await this.usersService.getAll();
    return users;
  }

  async deleteUser(userId: any) {
    await this.usersService.deleteUser(userId);
  }
}
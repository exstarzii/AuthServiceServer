import { Controller, Get, Request, Post, Body, Put, Param, Delete, UseGuards, ValidationPipe, UsePipes} from '@nestjs/common';
import { LoginDataDto, CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(JwtAuthGuard)
  @Get('user')
  getHello(@Request() req) {
    //return user name
    // console.log(req.user);
    return this.authService.getUser(req.user.userId);
  }

  @Get('user/all')
  getAllUsers() {
    return this.authService.getAll();
  }

  @UseGuards(LocalAuthGuard)
  @Post('user/login')
  @UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
  async login(@Request() req, @Body() loginDataDto: LoginDataDto) {
    console.log("auth/login");
    console.log(loginDataDto);
    return this.authService.login(req.user);
  }

  @Post('user/signup')
  @UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
  create(@Body() createUserDto: CreateUserDto) {
     console.log("auth/signup");
     console.log(createUserDto);
    return this.authService.signup(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Put('user')
  @UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
  update(@Request() req, @Body() updateUserDto: UpdateUserDto) {
    return this.authService.updateUser(req.user.userId,updateUserDto);
    // `This action updates a #${req.userId} User`;
  }

  @UseGuards(JwtAuthGuard) 
  @Delete('user')
  remove(@Request() req) {
    return this.authService.deleteUser(req.user.userId);
    //return `This action removes a #${id} User`;
  }
}
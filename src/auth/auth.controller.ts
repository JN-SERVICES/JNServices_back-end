import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import {
  Authenticated,
  AuthenticatedUser,
  AuthenticatedUserToken,
} from './decorators';
import { User } from 'src/model';

@Controller()
@ApiTags('Security')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Check if user exist in db and in firebase db
  @Get('/whoami')
  @Authenticated()
  async whoami(
    @AuthenticatedUser() user: User,
    @AuthenticatedUserToken() token: string,
  ) {
    //TODO
  }

  //TODO: Check only if the user exist in db
  @Post('/complete-information')
  async signup() {
    //TODO
  }
}

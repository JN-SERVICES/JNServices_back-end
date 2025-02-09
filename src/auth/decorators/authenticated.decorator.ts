import { UseGuards, applyDecorators } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';

import { FirebaseGuard } from '../guards';

//SHOULD WORKING, YOU SHOULD NO TOUCH THIS TOO (MAYBE I'M WRONG)
export function Authenticated() {
  return applyDecorators(UseGuards(FirebaseGuard), ApiBearerAuth());
}

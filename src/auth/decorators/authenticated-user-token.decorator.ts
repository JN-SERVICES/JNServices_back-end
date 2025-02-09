import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// ALREADY WORKING, NO NEED TO TOUCH
export const AuthenticatedUserToken = createParamDecorator(
  (_data: unknown, context: ExecutionContext): string => {
    const request = context.switchToHttp().getRequest();
    return request.token;
  },
);

import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  createParamDecorator,
} from '@nestjs/common';
import { UsersService } from '../users.service';
import { Observable } from 'rxjs';

export const CurrentUser = createParamDecorator(
  (data: never, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    return request.currentUser;
  },
);

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  newFunc(): string {
    return 'Fraz is learning nestjs';
  }
}

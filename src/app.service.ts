import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  newFunc(): void {
    return alert('this is fraz');
  }
}

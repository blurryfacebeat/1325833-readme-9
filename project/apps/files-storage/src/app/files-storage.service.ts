import { Injectable } from '@nestjs/common';

@Injectable()
export class FilesStorageService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }
}

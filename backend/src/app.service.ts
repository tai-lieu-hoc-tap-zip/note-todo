import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getBubleTea(): string {
    return 'TRÀ SỮA MẮC CA TRÂN CHÂU TRẮNG';
  }
}

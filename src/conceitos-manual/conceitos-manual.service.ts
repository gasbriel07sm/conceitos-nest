import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceitosManualService {
  solucionaHome(): string {
    return 'Home dos Conceitos Manual Solucionada';
  }
}

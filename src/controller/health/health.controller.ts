import { Controller, Get } from '@nestjs/common';
import {
  HealthCheck,
  HealthCheckService,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus';

@Controller()
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private db: TypeOrmHealthIndicator,
  ) {}

  @Get('/ping')
  @HealthCheck()
  checkPing() {
    return { message: 'pong' };
  }

  @Get('/health')
  @HealthCheck()
  checkHealth() {
    return this.health.check([() => this.db.pingCheck('database')]);
  }
}

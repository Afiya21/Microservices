import { Controller, Get, OnModuleInit, Patch } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @GrpcMethod('userservice', 'create')
  CreateUser() {
    return this.appService.createuser();
  }
  @GrpcMethod('userservice', 'update')
  updateuser() {
    return this.appService.updateuser();
  }
}

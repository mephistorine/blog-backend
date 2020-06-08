import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { UserController } from './controllers/user/user.controller'
import { UserService } from './services/user/user.service'
import { UserEntity } from './database/user.entity'

@Module({
  controllers: [ UserController ],
  providers: [ UserService ],
  imports: [ TypeOrmModule.forFeature([ UserEntity ]) ]
})
export class UserModule {}

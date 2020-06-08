import { Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [
    AuthModule,
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'qwerty123456',
      database: 'blog'
    })
  ]
})
export class AppModule {}

import { Controller, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common'
import { CreateUserDto, UpdateUserDto } from '../../models/user.dto'
import { ID } from '../../../shared/base/models'

@Controller('users')
export class UserController {

  @Post('/')
  @UsePipes(new ValidationPipe())
  public create(userDto: CreateUserDto) {

  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  public update(@Param('id') id: ID, userDto: UpdateUserDto) {

  }

  public delete() {

  }

  public getOne() {

  }

}

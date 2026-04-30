import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get() // GET /users or /users?role=value
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return [];
  }

  @Get(':id') // GET
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post() // POST
  create(@Body() user: {}) {
    return user;
  }

  @Patch(':id') // PATCH
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }

  @Delete(':id') // DELETE
  delete(@Param('id') id: string) {
    return { id };
  }
}

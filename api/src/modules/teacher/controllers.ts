import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  SerializeOptions,
  UseInterceptors,
} from '@nestjs/common';
import { TeacherService } from './services';
import { log } from 'console';
import { ApiTags } from '@nestjs/swagger';
import { TeacherReq, TeacherRes } from './dtos';

@ApiTags('Teacher Api')
@Controller('/teachers')
export class TeacherController {
  constructor(private teacherService: TeacherService) {}
  @Get()
  get() {
    return this.teacherService.get();
  }
  // @UseInterceptors()
  // @SerializeOptions({type: TeacherRes})
  @Post()
  create(@Body() teacher: TeacherReq): TeacherRes {
    return this.teacherService.create(teacher);
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() teacher: TeacherReq) {
    return this.teacherService.update(id, teacher);
  }
  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.teacherService.delete(id);
  }
}

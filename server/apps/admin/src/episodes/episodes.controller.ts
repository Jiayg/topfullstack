import { Episode } from '@libs/db/models/episodes.model';
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';

@Crud({
    model: Episode
})
@ApiTags('课时')
@Controller('episodes')
export class EpisodesController {
    constructor(@InjectModel(Episode) private readonly model: ReturnModelType<typeof Episode>) { }
    
    @Get('option')
    async option() {
        return {
            title: "课时管理",
            column: [
                {
                    label: "课时名称",
                    prop: "name",
                },
                {
                    label: "文件地址",
                    prop: "file",
                }
            ]
        }
    }
}

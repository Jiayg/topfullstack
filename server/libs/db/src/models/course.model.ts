import { ApiProperty } from '@nestjs/swagger';
import { arrayProp, modelOptions, Prop, Ref } from '@typegoose/typegoose';
import { Episode } from './episodes.model';

@modelOptions({
    schemaOptions: {
        timestamps: true
    }
})
export class Course {
    @Prop()
    @ApiProperty({ description: '课程名称' })
    name: string;

    @Prop()
    @ApiProperty({ description: '封面' })
    cover: string;

    @arrayProp({
        ref: 'Episode',
        localField: '_id',
        foreignField: 'course',
    })
    episodes: Ref<Episode>[]
} 
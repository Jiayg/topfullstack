import { ApiProperty } from '@nestjs/swagger';
import { modelOptions, Prop } from '@typegoose/typegoose';

@modelOptions({
    schemaOptions: {
        timestamps: true
    }
})
export class User {
    @Prop()
    @ApiProperty({ description: '用户名', example: '123456' })
    username: string;
    @Prop()
    @ApiProperty({ description: '用户密码', example: '123456' })
    userpwd: string;
} 
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiModelProperty()
    readonly _id: number;

    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    readonly last_name: string;

    @ApiModelProperty()
    readonly email: string;

    @ApiModelProperty()
    readonly password: string;
}
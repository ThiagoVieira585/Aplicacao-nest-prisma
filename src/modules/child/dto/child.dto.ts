import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, Min, IsNotEmpty } from 'class-validator';

export class ChildDto {
  @ApiProperty({ example: 'Baby' })
  @IsString()
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @ApiProperty({ example: 1 })
  @IsInt()
  @Min(0, { message: 'Age cannot be less than 0' })
  @IsNotEmpty({ message: 'Age is required' })
  age: number;

  @IsString()
  @IsNotEmpty({ message: 'Father ID is required' })
  fatherId: string;
}

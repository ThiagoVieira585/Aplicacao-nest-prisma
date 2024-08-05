import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class FatherDto {
  @ApiProperty({ example: 'Bob Doe' })
  @IsString()
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @ApiProperty({ example: 'bob.doe@example.com' })
  @IsEmail(
    {},
    { message: 'invalid emial format. Example: example@example.com' },
  )
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @ApiProperty({ example: '(99) 999999999' })
  @IsString()
  @IsNotEmpty({ message: 'Phone is required' })
  phone: string;
}

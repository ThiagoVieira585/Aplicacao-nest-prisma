import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class FatherDto {
  @IsString()
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsEmail(
    {},
    { message: 'invalid emial format. Example: example@example.com' },
  )
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Phone is required' })
  phone: string;
}

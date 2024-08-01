import { IsString, IsInt, IsUUID, IsOptional } from 'class-validator';
export class ChildDto {
  @IsOptional()
  @IsUUID()
  id?: string;

  @IsString()
  name: string;

  @IsInt()
  age: number;
}

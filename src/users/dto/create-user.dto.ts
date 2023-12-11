import { ApiProperty } from "@nestjs/swagger";

export default class CreateUserDto {
  @ApiProperty({ example: "user@gmail.com", description: "Почтовый адрес" })
  readonly email: string;
  @ApiProperty({ example: "12345", description: "Пароль" })
  readonly password: string;
}
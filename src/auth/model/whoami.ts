import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/model'; // do not use model, use rest model

export class Whoami extends User {
  @ApiProperty()
  token: string;
}

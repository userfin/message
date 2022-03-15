import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UsersDocument = Users & Document;

@Schema()
export class Users {
  @Prop({ unique: true, required: true })
  tag: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  password: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);

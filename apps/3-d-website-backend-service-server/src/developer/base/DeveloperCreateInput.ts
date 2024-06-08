/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { CollaborationInvitationCreateNestedManyWithoutDevelopersInput } from "./CollaborationInvitationCreateNestedManyWithoutDevelopersInput";
import { Type } from "class-transformer";

@InputType()
class DeveloperCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  bio?: string | null;

  @ApiProperty({
    required: false,
    type: () => CollaborationInvitationCreateNestedManyWithoutDevelopersInput,
  })
  @ValidateNested()
  @Type(() => CollaborationInvitationCreateNestedManyWithoutDevelopersInput)
  @IsOptional()
  @Field(() => CollaborationInvitationCreateNestedManyWithoutDevelopersInput, {
    nullable: true,
  })
  collaborationInvitations?: CollaborationInvitationCreateNestedManyWithoutDevelopersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string | null;
}

export { DeveloperCreateInput as DeveloperCreateInput };

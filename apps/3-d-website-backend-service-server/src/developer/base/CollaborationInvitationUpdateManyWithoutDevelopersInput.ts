/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CollaborationInvitationWhereUniqueInput } from "../../collaborationInvitation/base/CollaborationInvitationWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CollaborationInvitationUpdateManyWithoutDevelopersInput {
  @Field(() => [CollaborationInvitationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CollaborationInvitationWhereUniqueInput],
  })
  connect?: Array<CollaborationInvitationWhereUniqueInput>;

  @Field(() => [CollaborationInvitationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CollaborationInvitationWhereUniqueInput],
  })
  disconnect?: Array<CollaborationInvitationWhereUniqueInput>;

  @Field(() => [CollaborationInvitationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CollaborationInvitationWhereUniqueInput],
  })
  set?: Array<CollaborationInvitationWhereUniqueInput>;
}

export { CollaborationInvitationUpdateManyWithoutDevelopersInput as CollaborationInvitationUpdateManyWithoutDevelopersInput };

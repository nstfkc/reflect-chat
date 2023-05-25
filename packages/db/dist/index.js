var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  prisma: () => prisma,
  schema: () => zod_exports
});
module.exports = __toCommonJS(src_exports);

// src/db.ts
var import_client = require("@prisma/client");
var prismaGlobal = global;
var prisma = prismaGlobal.prisma || new import_client.PrismaClient({
  errorFormat: "minimal",
  log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"]
});
if (process.env.NODE_ENV !== "production") {
  prismaGlobal.prisma = prisma;
}

// src/index.ts
__reExport(src_exports, require("@prisma/client"), module.exports);

// src/zod/index.ts
var zod_exports = {};
__export(zod_exports, {
  ChannelAggregateArgsSchema: () => ChannelAggregateArgsSchema,
  ChannelArgsSchema: () => ChannelArgsSchema,
  ChannelCountOrderByAggregateInputSchema: () => ChannelCountOrderByAggregateInputSchema,
  ChannelCreateArgsSchema: () => ChannelCreateArgsSchema,
  ChannelCreateInputSchema: () => ChannelCreateInputSchema,
  ChannelCreateManyArgsSchema: () => ChannelCreateManyArgsSchema,
  ChannelCreateManyInputSchema: () => ChannelCreateManyInputSchema,
  ChannelCreateManyOrganisationInputEnvelopeSchema: () => ChannelCreateManyOrganisationInputEnvelopeSchema,
  ChannelCreateManyOrganisationInputSchema: () => ChannelCreateManyOrganisationInputSchema,
  ChannelCreateNestedManyWithoutOrganisationInputSchema: () => ChannelCreateNestedManyWithoutOrganisationInputSchema,
  ChannelCreateOrConnectWithoutOrganisationInputSchema: () => ChannelCreateOrConnectWithoutOrganisationInputSchema,
  ChannelCreateWithoutOrganisationInputSchema: () => ChannelCreateWithoutOrganisationInputSchema,
  ChannelDeleteArgsSchema: () => ChannelDeleteArgsSchema,
  ChannelDeleteManyArgsSchema: () => ChannelDeleteManyArgsSchema,
  ChannelFindFirstArgsSchema: () => ChannelFindFirstArgsSchema,
  ChannelFindFirstOrThrowArgsSchema: () => ChannelFindFirstOrThrowArgsSchema,
  ChannelFindManyArgsSchema: () => ChannelFindManyArgsSchema,
  ChannelFindUniqueArgsSchema: () => ChannelFindUniqueArgsSchema,
  ChannelFindUniqueOrThrowArgsSchema: () => ChannelFindUniqueOrThrowArgsSchema,
  ChannelGroupByArgsSchema: () => ChannelGroupByArgsSchema,
  ChannelIncludeSchema: () => ChannelIncludeSchema,
  ChannelKindSchema: () => ChannelKindSchema,
  ChannelListRelationFilterSchema: () => ChannelListRelationFilterSchema,
  ChannelMaxOrderByAggregateInputSchema: () => ChannelMaxOrderByAggregateInputSchema,
  ChannelMinOrderByAggregateInputSchema: () => ChannelMinOrderByAggregateInputSchema,
  ChannelOrderByRelationAggregateInputSchema: () => ChannelOrderByRelationAggregateInputSchema,
  ChannelOrderByWithAggregationInputSchema: () => ChannelOrderByWithAggregationInputSchema,
  ChannelOrderByWithRelationInputSchema: () => ChannelOrderByWithRelationInputSchema,
  ChannelScalarFieldEnumSchema: () => ChannelScalarFieldEnumSchema,
  ChannelScalarWhereInputSchema: () => ChannelScalarWhereInputSchema,
  ChannelScalarWhereWithAggregatesInputSchema: () => ChannelScalarWhereWithAggregatesInputSchema,
  ChannelSchema: () => ChannelSchema,
  ChannelSelectSchema: () => ChannelSelectSchema,
  ChannelUncheckedCreateInputSchema: () => ChannelUncheckedCreateInputSchema,
  ChannelUncheckedCreateNestedManyWithoutOrganisationInputSchema: () => ChannelUncheckedCreateNestedManyWithoutOrganisationInputSchema,
  ChannelUncheckedCreateWithoutOrganisationInputSchema: () => ChannelUncheckedCreateWithoutOrganisationInputSchema,
  ChannelUncheckedUpdateInputSchema: () => ChannelUncheckedUpdateInputSchema,
  ChannelUncheckedUpdateManyInputSchema: () => ChannelUncheckedUpdateManyInputSchema,
  ChannelUncheckedUpdateManyWithoutChannelsInputSchema: () => ChannelUncheckedUpdateManyWithoutChannelsInputSchema,
  ChannelUncheckedUpdateManyWithoutOrganisationNestedInputSchema: () => ChannelUncheckedUpdateManyWithoutOrganisationNestedInputSchema,
  ChannelUncheckedUpdateWithoutOrganisationInputSchema: () => ChannelUncheckedUpdateWithoutOrganisationInputSchema,
  ChannelUpdateArgsSchema: () => ChannelUpdateArgsSchema,
  ChannelUpdateInputSchema: () => ChannelUpdateInputSchema,
  ChannelUpdateManyArgsSchema: () => ChannelUpdateManyArgsSchema,
  ChannelUpdateManyMutationInputSchema: () => ChannelUpdateManyMutationInputSchema,
  ChannelUpdateManyWithWhereWithoutOrganisationInputSchema: () => ChannelUpdateManyWithWhereWithoutOrganisationInputSchema,
  ChannelUpdateManyWithoutOrganisationNestedInputSchema: () => ChannelUpdateManyWithoutOrganisationNestedInputSchema,
  ChannelUpdateWithWhereUniqueWithoutOrganisationInputSchema: () => ChannelUpdateWithWhereUniqueWithoutOrganisationInputSchema,
  ChannelUpdateWithoutOrganisationInputSchema: () => ChannelUpdateWithoutOrganisationInputSchema,
  ChannelUpsertArgsSchema: () => ChannelUpsertArgsSchema,
  ChannelUpsertWithWhereUniqueWithoutOrganisationInputSchema: () => ChannelUpsertWithWhereUniqueWithoutOrganisationInputSchema,
  ChannelWhereInputSchema: () => ChannelWhereInputSchema,
  ChannelWhereUniqueInputSchema: () => ChannelWhereUniqueInputSchema,
  DateTimeFieldUpdateOperationsInputSchema: () => DateTimeFieldUpdateOperationsInputSchema,
  DateTimeFilterSchema: () => DateTimeFilterSchema,
  DateTimeWithAggregatesFilterSchema: () => DateTimeWithAggregatesFilterSchema,
  EnumChannelKindFieldUpdateOperationsInputSchema: () => EnumChannelKindFieldUpdateOperationsInputSchema,
  EnumChannelKindFilterSchema: () => EnumChannelKindFilterSchema,
  EnumChannelKindWithAggregatesFilterSchema: () => EnumChannelKindWithAggregatesFilterSchema,
  EnumGlobalRoleFieldUpdateOperationsInputSchema: () => EnumGlobalRoleFieldUpdateOperationsInputSchema,
  EnumGlobalRoleFilterSchema: () => EnumGlobalRoleFilterSchema,
  EnumGlobalRoleWithAggregatesFilterSchema: () => EnumGlobalRoleWithAggregatesFilterSchema,
  EnumMembershipRoleFieldUpdateOperationsInputSchema: () => EnumMembershipRoleFieldUpdateOperationsInputSchema,
  EnumMembershipRoleFilterSchema: () => EnumMembershipRoleFilterSchema,
  EnumMembershipRoleWithAggregatesFilterSchema: () => EnumMembershipRoleWithAggregatesFilterSchema,
  GlobalRoleSchema: () => GlobalRoleSchema,
  IntFieldUpdateOperationsInputSchema: () => IntFieldUpdateOperationsInputSchema,
  IntFilterSchema: () => IntFilterSchema,
  IntNullableFilterSchema: () => IntNullableFilterSchema,
  IntNullableWithAggregatesFilterSchema: () => IntNullableWithAggregatesFilterSchema,
  IntWithAggregatesFilterSchema: () => IntWithAggregatesFilterSchema,
  InvitationCodeAggregateArgsSchema: () => InvitationCodeAggregateArgsSchema,
  InvitationCodeCountOrderByAggregateInputSchema: () => InvitationCodeCountOrderByAggregateInputSchema,
  InvitationCodeCreateArgsSchema: () => InvitationCodeCreateArgsSchema,
  InvitationCodeCreateInputSchema: () => InvitationCodeCreateInputSchema,
  InvitationCodeCreateManyArgsSchema: () => InvitationCodeCreateManyArgsSchema,
  InvitationCodeCreateManyInputSchema: () => InvitationCodeCreateManyInputSchema,
  InvitationCodeDeleteArgsSchema: () => InvitationCodeDeleteArgsSchema,
  InvitationCodeDeleteManyArgsSchema: () => InvitationCodeDeleteManyArgsSchema,
  InvitationCodeFindFirstArgsSchema: () => InvitationCodeFindFirstArgsSchema,
  InvitationCodeFindFirstOrThrowArgsSchema: () => InvitationCodeFindFirstOrThrowArgsSchema,
  InvitationCodeFindManyArgsSchema: () => InvitationCodeFindManyArgsSchema,
  InvitationCodeFindUniqueArgsSchema: () => InvitationCodeFindUniqueArgsSchema,
  InvitationCodeFindUniqueOrThrowArgsSchema: () => InvitationCodeFindUniqueOrThrowArgsSchema,
  InvitationCodeGroupByArgsSchema: () => InvitationCodeGroupByArgsSchema,
  InvitationCodeMaxOrderByAggregateInputSchema: () => InvitationCodeMaxOrderByAggregateInputSchema,
  InvitationCodeMinOrderByAggregateInputSchema: () => InvitationCodeMinOrderByAggregateInputSchema,
  InvitationCodeOrderByWithAggregationInputSchema: () => InvitationCodeOrderByWithAggregationInputSchema,
  InvitationCodeOrderByWithRelationInputSchema: () => InvitationCodeOrderByWithRelationInputSchema,
  InvitationCodeScalarFieldEnumSchema: () => InvitationCodeScalarFieldEnumSchema,
  InvitationCodeScalarWhereWithAggregatesInputSchema: () => InvitationCodeScalarWhereWithAggregatesInputSchema,
  InvitationCodeSchema: () => InvitationCodeSchema,
  InvitationCodeSelectSchema: () => InvitationCodeSelectSchema,
  InvitationCodeUncheckedCreateInputSchema: () => InvitationCodeUncheckedCreateInputSchema,
  InvitationCodeUncheckedUpdateInputSchema: () => InvitationCodeUncheckedUpdateInputSchema,
  InvitationCodeUncheckedUpdateManyInputSchema: () => InvitationCodeUncheckedUpdateManyInputSchema,
  InvitationCodeUpdateArgsSchema: () => InvitationCodeUpdateArgsSchema,
  InvitationCodeUpdateInputSchema: () => InvitationCodeUpdateInputSchema,
  InvitationCodeUpdateManyArgsSchema: () => InvitationCodeUpdateManyArgsSchema,
  InvitationCodeUpdateManyMutationInputSchema: () => InvitationCodeUpdateManyMutationInputSchema,
  InvitationCodeUpsertArgsSchema: () => InvitationCodeUpsertArgsSchema,
  InvitationCodeWhereInputSchema: () => InvitationCodeWhereInputSchema,
  InvitationCodeWhereUniqueInputSchema: () => InvitationCodeWhereUniqueInputSchema,
  MediaAggregateArgsSchema: () => MediaAggregateArgsSchema,
  MediaArgsSchema: () => MediaArgsSchema,
  MediaAvgOrderByAggregateInputSchema: () => MediaAvgOrderByAggregateInputSchema,
  MediaCountOrderByAggregateInputSchema: () => MediaCountOrderByAggregateInputSchema,
  MediaCreateArgsSchema: () => MediaCreateArgsSchema,
  MediaCreateInputSchema: () => MediaCreateInputSchema,
  MediaCreateManyArgsSchema: () => MediaCreateManyArgsSchema,
  MediaCreateManyInputSchema: () => MediaCreateManyInputSchema,
  MediaCreateManyMessageInputEnvelopeSchema: () => MediaCreateManyMessageInputEnvelopeSchema,
  MediaCreateManyMessageInputSchema: () => MediaCreateManyMessageInputSchema,
  MediaCreateNestedManyWithoutMessageInputSchema: () => MediaCreateNestedManyWithoutMessageInputSchema,
  MediaCreateOrConnectWithoutMessageInputSchema: () => MediaCreateOrConnectWithoutMessageInputSchema,
  MediaCreateWithoutMessageInputSchema: () => MediaCreateWithoutMessageInputSchema,
  MediaDeleteArgsSchema: () => MediaDeleteArgsSchema,
  MediaDeleteManyArgsSchema: () => MediaDeleteManyArgsSchema,
  MediaFindFirstArgsSchema: () => MediaFindFirstArgsSchema,
  MediaFindFirstOrThrowArgsSchema: () => MediaFindFirstOrThrowArgsSchema,
  MediaFindManyArgsSchema: () => MediaFindManyArgsSchema,
  MediaFindUniqueArgsSchema: () => MediaFindUniqueArgsSchema,
  MediaFindUniqueOrThrowArgsSchema: () => MediaFindUniqueOrThrowArgsSchema,
  MediaGroupByArgsSchema: () => MediaGroupByArgsSchema,
  MediaIncludeSchema: () => MediaIncludeSchema,
  MediaListRelationFilterSchema: () => MediaListRelationFilterSchema,
  MediaMaxOrderByAggregateInputSchema: () => MediaMaxOrderByAggregateInputSchema,
  MediaMinOrderByAggregateInputSchema: () => MediaMinOrderByAggregateInputSchema,
  MediaOrderByRelationAggregateInputSchema: () => MediaOrderByRelationAggregateInputSchema,
  MediaOrderByWithAggregationInputSchema: () => MediaOrderByWithAggregationInputSchema,
  MediaOrderByWithRelationInputSchema: () => MediaOrderByWithRelationInputSchema,
  MediaScalarFieldEnumSchema: () => MediaScalarFieldEnumSchema,
  MediaScalarWhereInputSchema: () => MediaScalarWhereInputSchema,
  MediaScalarWhereWithAggregatesInputSchema: () => MediaScalarWhereWithAggregatesInputSchema,
  MediaSchema: () => MediaSchema,
  MediaSelectSchema: () => MediaSelectSchema,
  MediaSumOrderByAggregateInputSchema: () => MediaSumOrderByAggregateInputSchema,
  MediaUncheckedCreateInputSchema: () => MediaUncheckedCreateInputSchema,
  MediaUncheckedCreateNestedManyWithoutMessageInputSchema: () => MediaUncheckedCreateNestedManyWithoutMessageInputSchema,
  MediaUncheckedCreateWithoutMessageInputSchema: () => MediaUncheckedCreateWithoutMessageInputSchema,
  MediaUncheckedUpdateInputSchema: () => MediaUncheckedUpdateInputSchema,
  MediaUncheckedUpdateManyInputSchema: () => MediaUncheckedUpdateManyInputSchema,
  MediaUncheckedUpdateManyWithoutMediaInputSchema: () => MediaUncheckedUpdateManyWithoutMediaInputSchema,
  MediaUncheckedUpdateManyWithoutMessageNestedInputSchema: () => MediaUncheckedUpdateManyWithoutMessageNestedInputSchema,
  MediaUncheckedUpdateWithoutMessageInputSchema: () => MediaUncheckedUpdateWithoutMessageInputSchema,
  MediaUpdateArgsSchema: () => MediaUpdateArgsSchema,
  MediaUpdateInputSchema: () => MediaUpdateInputSchema,
  MediaUpdateManyArgsSchema: () => MediaUpdateManyArgsSchema,
  MediaUpdateManyMutationInputSchema: () => MediaUpdateManyMutationInputSchema,
  MediaUpdateManyWithWhereWithoutMessageInputSchema: () => MediaUpdateManyWithWhereWithoutMessageInputSchema,
  MediaUpdateManyWithoutMessageNestedInputSchema: () => MediaUpdateManyWithoutMessageNestedInputSchema,
  MediaUpdateWithWhereUniqueWithoutMessageInputSchema: () => MediaUpdateWithWhereUniqueWithoutMessageInputSchema,
  MediaUpdateWithoutMessageInputSchema: () => MediaUpdateWithoutMessageInputSchema,
  MediaUpsertArgsSchema: () => MediaUpsertArgsSchema,
  MediaUpsertWithWhereUniqueWithoutMessageInputSchema: () => MediaUpsertWithWhereUniqueWithoutMessageInputSchema,
  MediaWhereInputSchema: () => MediaWhereInputSchema,
  MediaWhereUniqueInputSchema: () => MediaWhereUniqueInputSchema,
  MembershipAggregateArgsSchema: () => MembershipAggregateArgsSchema,
  MembershipArgsSchema: () => MembershipArgsSchema,
  MembershipAvgOrderByAggregateInputSchema: () => MembershipAvgOrderByAggregateInputSchema,
  MembershipCountOrderByAggregateInputSchema: () => MembershipCountOrderByAggregateInputSchema,
  MembershipCreateArgsSchema: () => MembershipCreateArgsSchema,
  MembershipCreateInputSchema: () => MembershipCreateInputSchema,
  MembershipCreateManyArgsSchema: () => MembershipCreateManyArgsSchema,
  MembershipCreateManyInputSchema: () => MembershipCreateManyInputSchema,
  MembershipCreateManyOrganizationInputEnvelopeSchema: () => MembershipCreateManyOrganizationInputEnvelopeSchema,
  MembershipCreateManyOrganizationInputSchema: () => MembershipCreateManyOrganizationInputSchema,
  MembershipCreateManyUserInputEnvelopeSchema: () => MembershipCreateManyUserInputEnvelopeSchema,
  MembershipCreateManyUserInputSchema: () => MembershipCreateManyUserInputSchema,
  MembershipCreateNestedManyWithoutOrganizationInputSchema: () => MembershipCreateNestedManyWithoutOrganizationInputSchema,
  MembershipCreateNestedManyWithoutUserInputSchema: () => MembershipCreateNestedManyWithoutUserInputSchema,
  MembershipCreateOrConnectWithoutOrganizationInputSchema: () => MembershipCreateOrConnectWithoutOrganizationInputSchema,
  MembershipCreateOrConnectWithoutUserInputSchema: () => MembershipCreateOrConnectWithoutUserInputSchema,
  MembershipCreateWithoutOrganizationInputSchema: () => MembershipCreateWithoutOrganizationInputSchema,
  MembershipCreateWithoutUserInputSchema: () => MembershipCreateWithoutUserInputSchema,
  MembershipDeleteArgsSchema: () => MembershipDeleteArgsSchema,
  MembershipDeleteManyArgsSchema: () => MembershipDeleteManyArgsSchema,
  MembershipFindFirstArgsSchema: () => MembershipFindFirstArgsSchema,
  MembershipFindFirstOrThrowArgsSchema: () => MembershipFindFirstOrThrowArgsSchema,
  MembershipFindManyArgsSchema: () => MembershipFindManyArgsSchema,
  MembershipFindUniqueArgsSchema: () => MembershipFindUniqueArgsSchema,
  MembershipFindUniqueOrThrowArgsSchema: () => MembershipFindUniqueOrThrowArgsSchema,
  MembershipGroupByArgsSchema: () => MembershipGroupByArgsSchema,
  MembershipIncludeSchema: () => MembershipIncludeSchema,
  MembershipListRelationFilterSchema: () => MembershipListRelationFilterSchema,
  MembershipMaxOrderByAggregateInputSchema: () => MembershipMaxOrderByAggregateInputSchema,
  MembershipMinOrderByAggregateInputSchema: () => MembershipMinOrderByAggregateInputSchema,
  MembershipOrderByRelationAggregateInputSchema: () => MembershipOrderByRelationAggregateInputSchema,
  MembershipOrderByWithAggregationInputSchema: () => MembershipOrderByWithAggregationInputSchema,
  MembershipOrderByWithRelationInputSchema: () => MembershipOrderByWithRelationInputSchema,
  MembershipOrganizationIdInvitedEmailCompoundUniqueInputSchema: () => MembershipOrganizationIdInvitedEmailCompoundUniqueInputSchema,
  MembershipRoleSchema: () => MembershipRoleSchema,
  MembershipScalarFieldEnumSchema: () => MembershipScalarFieldEnumSchema,
  MembershipScalarWhereInputSchema: () => MembershipScalarWhereInputSchema,
  MembershipScalarWhereWithAggregatesInputSchema: () => MembershipScalarWhereWithAggregatesInputSchema,
  MembershipSchema: () => MembershipSchema,
  MembershipSelectSchema: () => MembershipSelectSchema,
  MembershipSumOrderByAggregateInputSchema: () => MembershipSumOrderByAggregateInputSchema,
  MembershipUncheckedCreateInputSchema: () => MembershipUncheckedCreateInputSchema,
  MembershipUncheckedCreateNestedManyWithoutOrganizationInputSchema: () => MembershipUncheckedCreateNestedManyWithoutOrganizationInputSchema,
  MembershipUncheckedCreateNestedManyWithoutUserInputSchema: () => MembershipUncheckedCreateNestedManyWithoutUserInputSchema,
  MembershipUncheckedCreateWithoutOrganizationInputSchema: () => MembershipUncheckedCreateWithoutOrganizationInputSchema,
  MembershipUncheckedCreateWithoutUserInputSchema: () => MembershipUncheckedCreateWithoutUserInputSchema,
  MembershipUncheckedUpdateInputSchema: () => MembershipUncheckedUpdateInputSchema,
  MembershipUncheckedUpdateManyInputSchema: () => MembershipUncheckedUpdateManyInputSchema,
  MembershipUncheckedUpdateManyWithoutMembershipInputSchema: () => MembershipUncheckedUpdateManyWithoutMembershipInputSchema,
  MembershipUncheckedUpdateManyWithoutMembershipsInputSchema: () => MembershipUncheckedUpdateManyWithoutMembershipsInputSchema,
  MembershipUncheckedUpdateManyWithoutOrganizationNestedInputSchema: () => MembershipUncheckedUpdateManyWithoutOrganizationNestedInputSchema,
  MembershipUncheckedUpdateManyWithoutUserNestedInputSchema: () => MembershipUncheckedUpdateManyWithoutUserNestedInputSchema,
  MembershipUncheckedUpdateWithoutOrganizationInputSchema: () => MembershipUncheckedUpdateWithoutOrganizationInputSchema,
  MembershipUncheckedUpdateWithoutUserInputSchema: () => MembershipUncheckedUpdateWithoutUserInputSchema,
  MembershipUpdateArgsSchema: () => MembershipUpdateArgsSchema,
  MembershipUpdateInputSchema: () => MembershipUpdateInputSchema,
  MembershipUpdateManyArgsSchema: () => MembershipUpdateManyArgsSchema,
  MembershipUpdateManyMutationInputSchema: () => MembershipUpdateManyMutationInputSchema,
  MembershipUpdateManyWithWhereWithoutOrganizationInputSchema: () => MembershipUpdateManyWithWhereWithoutOrganizationInputSchema,
  MembershipUpdateManyWithWhereWithoutUserInputSchema: () => MembershipUpdateManyWithWhereWithoutUserInputSchema,
  MembershipUpdateManyWithoutOrganizationNestedInputSchema: () => MembershipUpdateManyWithoutOrganizationNestedInputSchema,
  MembershipUpdateManyWithoutUserNestedInputSchema: () => MembershipUpdateManyWithoutUserNestedInputSchema,
  MembershipUpdateWithWhereUniqueWithoutOrganizationInputSchema: () => MembershipUpdateWithWhereUniqueWithoutOrganizationInputSchema,
  MembershipUpdateWithWhereUniqueWithoutUserInputSchema: () => MembershipUpdateWithWhereUniqueWithoutUserInputSchema,
  MembershipUpdateWithoutOrganizationInputSchema: () => MembershipUpdateWithoutOrganizationInputSchema,
  MembershipUpdateWithoutUserInputSchema: () => MembershipUpdateWithoutUserInputSchema,
  MembershipUpsertArgsSchema: () => MembershipUpsertArgsSchema,
  MembershipUpsertWithWhereUniqueWithoutOrganizationInputSchema: () => MembershipUpsertWithWhereUniqueWithoutOrganizationInputSchema,
  MembershipUpsertWithWhereUniqueWithoutUserInputSchema: () => MembershipUpsertWithWhereUniqueWithoutUserInputSchema,
  MembershipWhereInputSchema: () => MembershipWhereInputSchema,
  MembershipWhereUniqueInputSchema: () => MembershipWhereUniqueInputSchema,
  MessageAggregateArgsSchema: () => MessageAggregateArgsSchema,
  MessageArgsSchema: () => MessageArgsSchema,
  MessageCountOrderByAggregateInputSchema: () => MessageCountOrderByAggregateInputSchema,
  MessageCountOutputTypeArgsSchema: () => MessageCountOutputTypeArgsSchema,
  MessageCountOutputTypeSelectSchema: () => MessageCountOutputTypeSelectSchema,
  MessageCreateArgsSchema: () => MessageCreateArgsSchema,
  MessageCreateInputSchema: () => MessageCreateInputSchema,
  MessageCreateManyArgsSchema: () => MessageCreateManyArgsSchema,
  MessageCreateManyInputSchema: () => MessageCreateManyInputSchema,
  MessageCreateNestedOneWithoutMediaInputSchema: () => MessageCreateNestedOneWithoutMediaInputSchema,
  MessageCreateOrConnectWithoutMediaInputSchema: () => MessageCreateOrConnectWithoutMediaInputSchema,
  MessageCreateWithoutMediaInputSchema: () => MessageCreateWithoutMediaInputSchema,
  MessageDeleteArgsSchema: () => MessageDeleteArgsSchema,
  MessageDeleteManyArgsSchema: () => MessageDeleteManyArgsSchema,
  MessageFindFirstArgsSchema: () => MessageFindFirstArgsSchema,
  MessageFindFirstOrThrowArgsSchema: () => MessageFindFirstOrThrowArgsSchema,
  MessageFindManyArgsSchema: () => MessageFindManyArgsSchema,
  MessageFindUniqueArgsSchema: () => MessageFindUniqueArgsSchema,
  MessageFindUniqueOrThrowArgsSchema: () => MessageFindUniqueOrThrowArgsSchema,
  MessageGroupByArgsSchema: () => MessageGroupByArgsSchema,
  MessageIncludeSchema: () => MessageIncludeSchema,
  MessageMaxOrderByAggregateInputSchema: () => MessageMaxOrderByAggregateInputSchema,
  MessageMinOrderByAggregateInputSchema: () => MessageMinOrderByAggregateInputSchema,
  MessageOrderByWithAggregationInputSchema: () => MessageOrderByWithAggregationInputSchema,
  MessageOrderByWithRelationInputSchema: () => MessageOrderByWithRelationInputSchema,
  MessageRelationFilterSchema: () => MessageRelationFilterSchema,
  MessageScalarFieldEnumSchema: () => MessageScalarFieldEnumSchema,
  MessageScalarWhereWithAggregatesInputSchema: () => MessageScalarWhereWithAggregatesInputSchema,
  MessageSchema: () => MessageSchema,
  MessageSelectSchema: () => MessageSelectSchema,
  MessageUncheckedCreateInputSchema: () => MessageUncheckedCreateInputSchema,
  MessageUncheckedCreateWithoutMediaInputSchema: () => MessageUncheckedCreateWithoutMediaInputSchema,
  MessageUncheckedUpdateInputSchema: () => MessageUncheckedUpdateInputSchema,
  MessageUncheckedUpdateManyInputSchema: () => MessageUncheckedUpdateManyInputSchema,
  MessageUncheckedUpdateWithoutMediaInputSchema: () => MessageUncheckedUpdateWithoutMediaInputSchema,
  MessageUpdateArgsSchema: () => MessageUpdateArgsSchema,
  MessageUpdateInputSchema: () => MessageUpdateInputSchema,
  MessageUpdateManyArgsSchema: () => MessageUpdateManyArgsSchema,
  MessageUpdateManyMutationInputSchema: () => MessageUpdateManyMutationInputSchema,
  MessageUpdateOneWithoutMediaNestedInputSchema: () => MessageUpdateOneWithoutMediaNestedInputSchema,
  MessageUpdateWithoutMediaInputSchema: () => MessageUpdateWithoutMediaInputSchema,
  MessageUpsertArgsSchema: () => MessageUpsertArgsSchema,
  MessageUpsertWithoutMediaInputSchema: () => MessageUpsertWithoutMediaInputSchema,
  MessageWhereInputSchema: () => MessageWhereInputSchema,
  MessageWhereUniqueInputSchema: () => MessageWhereUniqueInputSchema,
  NestedDateTimeFilterSchema: () => NestedDateTimeFilterSchema,
  NestedDateTimeWithAggregatesFilterSchema: () => NestedDateTimeWithAggregatesFilterSchema,
  NestedEnumChannelKindFilterSchema: () => NestedEnumChannelKindFilterSchema,
  NestedEnumChannelKindWithAggregatesFilterSchema: () => NestedEnumChannelKindWithAggregatesFilterSchema,
  NestedEnumGlobalRoleFilterSchema: () => NestedEnumGlobalRoleFilterSchema,
  NestedEnumGlobalRoleWithAggregatesFilterSchema: () => NestedEnumGlobalRoleWithAggregatesFilterSchema,
  NestedEnumMembershipRoleFilterSchema: () => NestedEnumMembershipRoleFilterSchema,
  NestedEnumMembershipRoleWithAggregatesFilterSchema: () => NestedEnumMembershipRoleWithAggregatesFilterSchema,
  NestedFloatFilterSchema: () => NestedFloatFilterSchema,
  NestedFloatNullableFilterSchema: () => NestedFloatNullableFilterSchema,
  NestedIntFilterSchema: () => NestedIntFilterSchema,
  NestedIntNullableFilterSchema: () => NestedIntNullableFilterSchema,
  NestedIntNullableWithAggregatesFilterSchema: () => NestedIntNullableWithAggregatesFilterSchema,
  NestedIntWithAggregatesFilterSchema: () => NestedIntWithAggregatesFilterSchema,
  NestedStringFilterSchema: () => NestedStringFilterSchema,
  NestedStringNullableFilterSchema: () => NestedStringNullableFilterSchema,
  NestedStringNullableWithAggregatesFilterSchema: () => NestedStringNullableWithAggregatesFilterSchema,
  NestedStringWithAggregatesFilterSchema: () => NestedStringWithAggregatesFilterSchema,
  NullableIntFieldUpdateOperationsInputSchema: () => NullableIntFieldUpdateOperationsInputSchema,
  NullableStringFieldUpdateOperationsInputSchema: () => NullableStringFieldUpdateOperationsInputSchema,
  OrganisationAggregateArgsSchema: () => OrganisationAggregateArgsSchema,
  OrganisationArgsSchema: () => OrganisationArgsSchema,
  OrganisationAvgOrderByAggregateInputSchema: () => OrganisationAvgOrderByAggregateInputSchema,
  OrganisationCountOrderByAggregateInputSchema: () => OrganisationCountOrderByAggregateInputSchema,
  OrganisationCountOutputTypeArgsSchema: () => OrganisationCountOutputTypeArgsSchema,
  OrganisationCountOutputTypeSelectSchema: () => OrganisationCountOutputTypeSelectSchema,
  OrganisationCreateArgsSchema: () => OrganisationCreateArgsSchema,
  OrganisationCreateInputSchema: () => OrganisationCreateInputSchema,
  OrganisationCreateManyArgsSchema: () => OrganisationCreateManyArgsSchema,
  OrganisationCreateManyInputSchema: () => OrganisationCreateManyInputSchema,
  OrganisationCreateNestedOneWithoutChannelsInputSchema: () => OrganisationCreateNestedOneWithoutChannelsInputSchema,
  OrganisationCreateNestedOneWithoutMembershipInputSchema: () => OrganisationCreateNestedOneWithoutMembershipInputSchema,
  OrganisationCreateNestedOneWithoutOrganisationInvitationInputSchema: () => OrganisationCreateNestedOneWithoutOrganisationInvitationInputSchema,
  OrganisationCreateOrConnectWithoutChannelsInputSchema: () => OrganisationCreateOrConnectWithoutChannelsInputSchema,
  OrganisationCreateOrConnectWithoutMembershipInputSchema: () => OrganisationCreateOrConnectWithoutMembershipInputSchema,
  OrganisationCreateOrConnectWithoutOrganisationInvitationInputSchema: () => OrganisationCreateOrConnectWithoutOrganisationInvitationInputSchema,
  OrganisationCreateWithoutChannelsInputSchema: () => OrganisationCreateWithoutChannelsInputSchema,
  OrganisationCreateWithoutMembershipInputSchema: () => OrganisationCreateWithoutMembershipInputSchema,
  OrganisationCreateWithoutOrganisationInvitationInputSchema: () => OrganisationCreateWithoutOrganisationInvitationInputSchema,
  OrganisationDeleteArgsSchema: () => OrganisationDeleteArgsSchema,
  OrganisationDeleteManyArgsSchema: () => OrganisationDeleteManyArgsSchema,
  OrganisationFindFirstArgsSchema: () => OrganisationFindFirstArgsSchema,
  OrganisationFindFirstOrThrowArgsSchema: () => OrganisationFindFirstOrThrowArgsSchema,
  OrganisationFindManyArgsSchema: () => OrganisationFindManyArgsSchema,
  OrganisationFindUniqueArgsSchema: () => OrganisationFindUniqueArgsSchema,
  OrganisationFindUniqueOrThrowArgsSchema: () => OrganisationFindUniqueOrThrowArgsSchema,
  OrganisationGroupByArgsSchema: () => OrganisationGroupByArgsSchema,
  OrganisationIncludeSchema: () => OrganisationIncludeSchema,
  OrganisationInvitationAggregateArgsSchema: () => OrganisationInvitationAggregateArgsSchema,
  OrganisationInvitationArgsSchema: () => OrganisationInvitationArgsSchema,
  OrganisationInvitationAvgOrderByAggregateInputSchema: () => OrganisationInvitationAvgOrderByAggregateInputSchema,
  OrganisationInvitationCountOrderByAggregateInputSchema: () => OrganisationInvitationCountOrderByAggregateInputSchema,
  OrganisationInvitationCreateArgsSchema: () => OrganisationInvitationCreateArgsSchema,
  OrganisationInvitationCreateInputSchema: () => OrganisationInvitationCreateInputSchema,
  OrganisationInvitationCreateManyArgsSchema: () => OrganisationInvitationCreateManyArgsSchema,
  OrganisationInvitationCreateManyCreatedByInputEnvelopeSchema: () => OrganisationInvitationCreateManyCreatedByInputEnvelopeSchema,
  OrganisationInvitationCreateManyCreatedByInputSchema: () => OrganisationInvitationCreateManyCreatedByInputSchema,
  OrganisationInvitationCreateManyInputSchema: () => OrganisationInvitationCreateManyInputSchema,
  OrganisationInvitationCreateManyOrganisationInputEnvelopeSchema: () => OrganisationInvitationCreateManyOrganisationInputEnvelopeSchema,
  OrganisationInvitationCreateManyOrganisationInputSchema: () => OrganisationInvitationCreateManyOrganisationInputSchema,
  OrganisationInvitationCreateNestedManyWithoutCreatedByInputSchema: () => OrganisationInvitationCreateNestedManyWithoutCreatedByInputSchema,
  OrganisationInvitationCreateNestedManyWithoutOrganisationInputSchema: () => OrganisationInvitationCreateNestedManyWithoutOrganisationInputSchema,
  OrganisationInvitationCreateOrConnectWithoutCreatedByInputSchema: () => OrganisationInvitationCreateOrConnectWithoutCreatedByInputSchema,
  OrganisationInvitationCreateOrConnectWithoutOrganisationInputSchema: () => OrganisationInvitationCreateOrConnectWithoutOrganisationInputSchema,
  OrganisationInvitationCreateWithoutCreatedByInputSchema: () => OrganisationInvitationCreateWithoutCreatedByInputSchema,
  OrganisationInvitationCreateWithoutOrganisationInputSchema: () => OrganisationInvitationCreateWithoutOrganisationInputSchema,
  OrganisationInvitationDeleteArgsSchema: () => OrganisationInvitationDeleteArgsSchema,
  OrganisationInvitationDeleteManyArgsSchema: () => OrganisationInvitationDeleteManyArgsSchema,
  OrganisationInvitationFindFirstArgsSchema: () => OrganisationInvitationFindFirstArgsSchema,
  OrganisationInvitationFindFirstOrThrowArgsSchema: () => OrganisationInvitationFindFirstOrThrowArgsSchema,
  OrganisationInvitationFindManyArgsSchema: () => OrganisationInvitationFindManyArgsSchema,
  OrganisationInvitationFindUniqueArgsSchema: () => OrganisationInvitationFindUniqueArgsSchema,
  OrganisationInvitationFindUniqueOrThrowArgsSchema: () => OrganisationInvitationFindUniqueOrThrowArgsSchema,
  OrganisationInvitationGroupByArgsSchema: () => OrganisationInvitationGroupByArgsSchema,
  OrganisationInvitationIncludeSchema: () => OrganisationInvitationIncludeSchema,
  OrganisationInvitationListRelationFilterSchema: () => OrganisationInvitationListRelationFilterSchema,
  OrganisationInvitationMaxOrderByAggregateInputSchema: () => OrganisationInvitationMaxOrderByAggregateInputSchema,
  OrganisationInvitationMinOrderByAggregateInputSchema: () => OrganisationInvitationMinOrderByAggregateInputSchema,
  OrganisationInvitationOrderByRelationAggregateInputSchema: () => OrganisationInvitationOrderByRelationAggregateInputSchema,
  OrganisationInvitationOrderByWithAggregationInputSchema: () => OrganisationInvitationOrderByWithAggregationInputSchema,
  OrganisationInvitationOrderByWithRelationInputSchema: () => OrganisationInvitationOrderByWithRelationInputSchema,
  OrganisationInvitationScalarFieldEnumSchema: () => OrganisationInvitationScalarFieldEnumSchema,
  OrganisationInvitationScalarWhereInputSchema: () => OrganisationInvitationScalarWhereInputSchema,
  OrganisationInvitationScalarWhereWithAggregatesInputSchema: () => OrganisationInvitationScalarWhereWithAggregatesInputSchema,
  OrganisationInvitationSchema: () => OrganisationInvitationSchema,
  OrganisationInvitationSelectSchema: () => OrganisationInvitationSelectSchema,
  OrganisationInvitationSumOrderByAggregateInputSchema: () => OrganisationInvitationSumOrderByAggregateInputSchema,
  OrganisationInvitationUncheckedCreateInputSchema: () => OrganisationInvitationUncheckedCreateInputSchema,
  OrganisationInvitationUncheckedCreateNestedManyWithoutCreatedByInputSchema: () => OrganisationInvitationUncheckedCreateNestedManyWithoutCreatedByInputSchema,
  OrganisationInvitationUncheckedCreateNestedManyWithoutOrganisationInputSchema: () => OrganisationInvitationUncheckedCreateNestedManyWithoutOrganisationInputSchema,
  OrganisationInvitationUncheckedCreateWithoutCreatedByInputSchema: () => OrganisationInvitationUncheckedCreateWithoutCreatedByInputSchema,
  OrganisationInvitationUncheckedCreateWithoutOrganisationInputSchema: () => OrganisationInvitationUncheckedCreateWithoutOrganisationInputSchema,
  OrganisationInvitationUncheckedUpdateInputSchema: () => OrganisationInvitationUncheckedUpdateInputSchema,
  OrganisationInvitationUncheckedUpdateManyInputSchema: () => OrganisationInvitationUncheckedUpdateManyInputSchema,
  OrganisationInvitationUncheckedUpdateManyWithoutCreatedByNestedInputSchema: () => OrganisationInvitationUncheckedUpdateManyWithoutCreatedByNestedInputSchema,
  OrganisationInvitationUncheckedUpdateManyWithoutOrganisationInvitationInputSchema: () => OrganisationInvitationUncheckedUpdateManyWithoutOrganisationInvitationInputSchema,
  OrganisationInvitationUncheckedUpdateManyWithoutOrganisationNestedInputSchema: () => OrganisationInvitationUncheckedUpdateManyWithoutOrganisationNestedInputSchema,
  OrganisationInvitationUncheckedUpdateWithoutCreatedByInputSchema: () => OrganisationInvitationUncheckedUpdateWithoutCreatedByInputSchema,
  OrganisationInvitationUncheckedUpdateWithoutOrganisationInputSchema: () => OrganisationInvitationUncheckedUpdateWithoutOrganisationInputSchema,
  OrganisationInvitationUpdateArgsSchema: () => OrganisationInvitationUpdateArgsSchema,
  OrganisationInvitationUpdateInputSchema: () => OrganisationInvitationUpdateInputSchema,
  OrganisationInvitationUpdateManyArgsSchema: () => OrganisationInvitationUpdateManyArgsSchema,
  OrganisationInvitationUpdateManyMutationInputSchema: () => OrganisationInvitationUpdateManyMutationInputSchema,
  OrganisationInvitationUpdateManyWithWhereWithoutCreatedByInputSchema: () => OrganisationInvitationUpdateManyWithWhereWithoutCreatedByInputSchema,
  OrganisationInvitationUpdateManyWithWhereWithoutOrganisationInputSchema: () => OrganisationInvitationUpdateManyWithWhereWithoutOrganisationInputSchema,
  OrganisationInvitationUpdateManyWithoutCreatedByNestedInputSchema: () => OrganisationInvitationUpdateManyWithoutCreatedByNestedInputSchema,
  OrganisationInvitationUpdateManyWithoutOrganisationNestedInputSchema: () => OrganisationInvitationUpdateManyWithoutOrganisationNestedInputSchema,
  OrganisationInvitationUpdateWithWhereUniqueWithoutCreatedByInputSchema: () => OrganisationInvitationUpdateWithWhereUniqueWithoutCreatedByInputSchema,
  OrganisationInvitationUpdateWithWhereUniqueWithoutOrganisationInputSchema: () => OrganisationInvitationUpdateWithWhereUniqueWithoutOrganisationInputSchema,
  OrganisationInvitationUpdateWithoutCreatedByInputSchema: () => OrganisationInvitationUpdateWithoutCreatedByInputSchema,
  OrganisationInvitationUpdateWithoutOrganisationInputSchema: () => OrganisationInvitationUpdateWithoutOrganisationInputSchema,
  OrganisationInvitationUpsertArgsSchema: () => OrganisationInvitationUpsertArgsSchema,
  OrganisationInvitationUpsertWithWhereUniqueWithoutCreatedByInputSchema: () => OrganisationInvitationUpsertWithWhereUniqueWithoutCreatedByInputSchema,
  OrganisationInvitationUpsertWithWhereUniqueWithoutOrganisationInputSchema: () => OrganisationInvitationUpsertWithWhereUniqueWithoutOrganisationInputSchema,
  OrganisationInvitationWhereInputSchema: () => OrganisationInvitationWhereInputSchema,
  OrganisationInvitationWhereUniqueInputSchema: () => OrganisationInvitationWhereUniqueInputSchema,
  OrganisationMaxOrderByAggregateInputSchema: () => OrganisationMaxOrderByAggregateInputSchema,
  OrganisationMinOrderByAggregateInputSchema: () => OrganisationMinOrderByAggregateInputSchema,
  OrganisationOrderByWithAggregationInputSchema: () => OrganisationOrderByWithAggregationInputSchema,
  OrganisationOrderByWithRelationInputSchema: () => OrganisationOrderByWithRelationInputSchema,
  OrganisationRelationFilterSchema: () => OrganisationRelationFilterSchema,
  OrganisationScalarFieldEnumSchema: () => OrganisationScalarFieldEnumSchema,
  OrganisationScalarWhereWithAggregatesInputSchema: () => OrganisationScalarWhereWithAggregatesInputSchema,
  OrganisationSchema: () => OrganisationSchema,
  OrganisationSelectSchema: () => OrganisationSelectSchema,
  OrganisationSumOrderByAggregateInputSchema: () => OrganisationSumOrderByAggregateInputSchema,
  OrganisationUncheckedCreateInputSchema: () => OrganisationUncheckedCreateInputSchema,
  OrganisationUncheckedCreateWithoutChannelsInputSchema: () => OrganisationUncheckedCreateWithoutChannelsInputSchema,
  OrganisationUncheckedCreateWithoutMembershipInputSchema: () => OrganisationUncheckedCreateWithoutMembershipInputSchema,
  OrganisationUncheckedCreateWithoutOrganisationInvitationInputSchema: () => OrganisationUncheckedCreateWithoutOrganisationInvitationInputSchema,
  OrganisationUncheckedUpdateInputSchema: () => OrganisationUncheckedUpdateInputSchema,
  OrganisationUncheckedUpdateManyInputSchema: () => OrganisationUncheckedUpdateManyInputSchema,
  OrganisationUncheckedUpdateWithoutChannelsInputSchema: () => OrganisationUncheckedUpdateWithoutChannelsInputSchema,
  OrganisationUncheckedUpdateWithoutMembershipInputSchema: () => OrganisationUncheckedUpdateWithoutMembershipInputSchema,
  OrganisationUncheckedUpdateWithoutOrganisationInvitationInputSchema: () => OrganisationUncheckedUpdateWithoutOrganisationInvitationInputSchema,
  OrganisationUpdateArgsSchema: () => OrganisationUpdateArgsSchema,
  OrganisationUpdateInputSchema: () => OrganisationUpdateInputSchema,
  OrganisationUpdateManyArgsSchema: () => OrganisationUpdateManyArgsSchema,
  OrganisationUpdateManyMutationInputSchema: () => OrganisationUpdateManyMutationInputSchema,
  OrganisationUpdateOneRequiredWithoutMembershipNestedInputSchema: () => OrganisationUpdateOneRequiredWithoutMembershipNestedInputSchema,
  OrganisationUpdateOneRequiredWithoutOrganisationInvitationNestedInputSchema: () => OrganisationUpdateOneRequiredWithoutOrganisationInvitationNestedInputSchema,
  OrganisationUpdateOneWithoutChannelsNestedInputSchema: () => OrganisationUpdateOneWithoutChannelsNestedInputSchema,
  OrganisationUpdateWithoutChannelsInputSchema: () => OrganisationUpdateWithoutChannelsInputSchema,
  OrganisationUpdateWithoutMembershipInputSchema: () => OrganisationUpdateWithoutMembershipInputSchema,
  OrganisationUpdateWithoutOrganisationInvitationInputSchema: () => OrganisationUpdateWithoutOrganisationInvitationInputSchema,
  OrganisationUpsertArgsSchema: () => OrganisationUpsertArgsSchema,
  OrganisationUpsertWithoutChannelsInputSchema: () => OrganisationUpsertWithoutChannelsInputSchema,
  OrganisationUpsertWithoutMembershipInputSchema: () => OrganisationUpsertWithoutMembershipInputSchema,
  OrganisationUpsertWithoutOrganisationInvitationInputSchema: () => OrganisationUpsertWithoutOrganisationInvitationInputSchema,
  OrganisationWhereInputSchema: () => OrganisationWhereInputSchema,
  OrganisationWhereUniqueInputSchema: () => OrganisationWhereUniqueInputSchema,
  SortOrderSchema: () => SortOrderSchema,
  StringFieldUpdateOperationsInputSchema: () => StringFieldUpdateOperationsInputSchema,
  StringFilterSchema: () => StringFilterSchema,
  StringNullableFilterSchema: () => StringNullableFilterSchema,
  StringNullableWithAggregatesFilterSchema: () => StringNullableWithAggregatesFilterSchema,
  StringWithAggregatesFilterSchema: () => StringWithAggregatesFilterSchema,
  TransactionIsolationLevelSchema: () => TransactionIsolationLevelSchema,
  UserAggregateArgsSchema: () => UserAggregateArgsSchema,
  UserArgsSchema: () => UserArgsSchema,
  UserAvgOrderByAggregateInputSchema: () => UserAvgOrderByAggregateInputSchema,
  UserCountOrderByAggregateInputSchema: () => UserCountOrderByAggregateInputSchema,
  UserCountOutputTypeArgsSchema: () => UserCountOutputTypeArgsSchema,
  UserCountOutputTypeSelectSchema: () => UserCountOutputTypeSelectSchema,
  UserCreateArgsSchema: () => UserCreateArgsSchema,
  UserCreateInputSchema: () => UserCreateInputSchema,
  UserCreateManyArgsSchema: () => UserCreateManyArgsSchema,
  UserCreateManyInputSchema: () => UserCreateManyInputSchema,
  UserCreateManyUserProfileInputEnvelopeSchema: () => UserCreateManyUserProfileInputEnvelopeSchema,
  UserCreateManyUserProfileInputSchema: () => UserCreateManyUserProfileInputSchema,
  UserCreateNestedManyWithoutUserProfileInputSchema: () => UserCreateNestedManyWithoutUserProfileInputSchema,
  UserCreateNestedOneWithoutMembershipsInputSchema: () => UserCreateNestedOneWithoutMembershipsInputSchema,
  UserCreateNestedOneWithoutOrganisationInvitationInputSchema: () => UserCreateNestedOneWithoutOrganisationInvitationInputSchema,
  UserCreateOrConnectWithoutMembershipsInputSchema: () => UserCreateOrConnectWithoutMembershipsInputSchema,
  UserCreateOrConnectWithoutOrganisationInvitationInputSchema: () => UserCreateOrConnectWithoutOrganisationInvitationInputSchema,
  UserCreateOrConnectWithoutUserProfileInputSchema: () => UserCreateOrConnectWithoutUserProfileInputSchema,
  UserCreateWithoutMembershipsInputSchema: () => UserCreateWithoutMembershipsInputSchema,
  UserCreateWithoutOrganisationInvitationInputSchema: () => UserCreateWithoutOrganisationInvitationInputSchema,
  UserCreateWithoutUserProfileInputSchema: () => UserCreateWithoutUserProfileInputSchema,
  UserDeleteArgsSchema: () => UserDeleteArgsSchema,
  UserDeleteManyArgsSchema: () => UserDeleteManyArgsSchema,
  UserFindFirstArgsSchema: () => UserFindFirstArgsSchema,
  UserFindFirstOrThrowArgsSchema: () => UserFindFirstOrThrowArgsSchema,
  UserFindManyArgsSchema: () => UserFindManyArgsSchema,
  UserFindUniqueArgsSchema: () => UserFindUniqueArgsSchema,
  UserFindUniqueOrThrowArgsSchema: () => UserFindUniqueOrThrowArgsSchema,
  UserGroupByArgsSchema: () => UserGroupByArgsSchema,
  UserIncludeSchema: () => UserIncludeSchema,
  UserListRelationFilterSchema: () => UserListRelationFilterSchema,
  UserMaxOrderByAggregateInputSchema: () => UserMaxOrderByAggregateInputSchema,
  UserMinOrderByAggregateInputSchema: () => UserMinOrderByAggregateInputSchema,
  UserNotificationsAggregateArgsSchema: () => UserNotificationsAggregateArgsSchema,
  UserNotificationsCountOrderByAggregateInputSchema: () => UserNotificationsCountOrderByAggregateInputSchema,
  UserNotificationsCreateArgsSchema: () => UserNotificationsCreateArgsSchema,
  UserNotificationsCreateInputSchema: () => UserNotificationsCreateInputSchema,
  UserNotificationsCreateManyArgsSchema: () => UserNotificationsCreateManyArgsSchema,
  UserNotificationsCreateManyInputSchema: () => UserNotificationsCreateManyInputSchema,
  UserNotificationsDeleteArgsSchema: () => UserNotificationsDeleteArgsSchema,
  UserNotificationsDeleteManyArgsSchema: () => UserNotificationsDeleteManyArgsSchema,
  UserNotificationsFindFirstArgsSchema: () => UserNotificationsFindFirstArgsSchema,
  UserNotificationsFindFirstOrThrowArgsSchema: () => UserNotificationsFindFirstOrThrowArgsSchema,
  UserNotificationsFindManyArgsSchema: () => UserNotificationsFindManyArgsSchema,
  UserNotificationsFindUniqueArgsSchema: () => UserNotificationsFindUniqueArgsSchema,
  UserNotificationsFindUniqueOrThrowArgsSchema: () => UserNotificationsFindUniqueOrThrowArgsSchema,
  UserNotificationsGroupByArgsSchema: () => UserNotificationsGroupByArgsSchema,
  UserNotificationsMaxOrderByAggregateInputSchema: () => UserNotificationsMaxOrderByAggregateInputSchema,
  UserNotificationsMinOrderByAggregateInputSchema: () => UserNotificationsMinOrderByAggregateInputSchema,
  UserNotificationsOrderByWithAggregationInputSchema: () => UserNotificationsOrderByWithAggregationInputSchema,
  UserNotificationsOrderByWithRelationInputSchema: () => UserNotificationsOrderByWithRelationInputSchema,
  UserNotificationsScalarFieldEnumSchema: () => UserNotificationsScalarFieldEnumSchema,
  UserNotificationsScalarWhereWithAggregatesInputSchema: () => UserNotificationsScalarWhereWithAggregatesInputSchema,
  UserNotificationsSchema: () => UserNotificationsSchema,
  UserNotificationsSelectSchema: () => UserNotificationsSelectSchema,
  UserNotificationsUncheckedCreateInputSchema: () => UserNotificationsUncheckedCreateInputSchema,
  UserNotificationsUncheckedUpdateInputSchema: () => UserNotificationsUncheckedUpdateInputSchema,
  UserNotificationsUncheckedUpdateManyInputSchema: () => UserNotificationsUncheckedUpdateManyInputSchema,
  UserNotificationsUpdateArgsSchema: () => UserNotificationsUpdateArgsSchema,
  UserNotificationsUpdateInputSchema: () => UserNotificationsUpdateInputSchema,
  UserNotificationsUpdateManyArgsSchema: () => UserNotificationsUpdateManyArgsSchema,
  UserNotificationsUpdateManyMutationInputSchema: () => UserNotificationsUpdateManyMutationInputSchema,
  UserNotificationsUpsertArgsSchema: () => UserNotificationsUpsertArgsSchema,
  UserNotificationsWhereInputSchema: () => UserNotificationsWhereInputSchema,
  UserNotificationsWhereUniqueInputSchema: () => UserNotificationsWhereUniqueInputSchema,
  UserOrderByRelationAggregateInputSchema: () => UserOrderByRelationAggregateInputSchema,
  UserOrderByWithAggregationInputSchema: () => UserOrderByWithAggregationInputSchema,
  UserOrderByWithRelationInputSchema: () => UserOrderByWithRelationInputSchema,
  UserProfileAggregateArgsSchema: () => UserProfileAggregateArgsSchema,
  UserProfileArgsSchema: () => UserProfileArgsSchema,
  UserProfileAvgOrderByAggregateInputSchema: () => UserProfileAvgOrderByAggregateInputSchema,
  UserProfileCountOrderByAggregateInputSchema: () => UserProfileCountOrderByAggregateInputSchema,
  UserProfileCountOutputTypeArgsSchema: () => UserProfileCountOutputTypeArgsSchema,
  UserProfileCountOutputTypeSelectSchema: () => UserProfileCountOutputTypeSelectSchema,
  UserProfileCreateArgsSchema: () => UserProfileCreateArgsSchema,
  UserProfileCreateInputSchema: () => UserProfileCreateInputSchema,
  UserProfileCreateManyArgsSchema: () => UserProfileCreateManyArgsSchema,
  UserProfileCreateManyInputSchema: () => UserProfileCreateManyInputSchema,
  UserProfileCreateNestedOneWithoutUserInputSchema: () => UserProfileCreateNestedOneWithoutUserInputSchema,
  UserProfileCreateOrConnectWithoutUserInputSchema: () => UserProfileCreateOrConnectWithoutUserInputSchema,
  UserProfileCreateWithoutUserInputSchema: () => UserProfileCreateWithoutUserInputSchema,
  UserProfileDeleteArgsSchema: () => UserProfileDeleteArgsSchema,
  UserProfileDeleteManyArgsSchema: () => UserProfileDeleteManyArgsSchema,
  UserProfileFindFirstArgsSchema: () => UserProfileFindFirstArgsSchema,
  UserProfileFindFirstOrThrowArgsSchema: () => UserProfileFindFirstOrThrowArgsSchema,
  UserProfileFindManyArgsSchema: () => UserProfileFindManyArgsSchema,
  UserProfileFindUniqueArgsSchema: () => UserProfileFindUniqueArgsSchema,
  UserProfileFindUniqueOrThrowArgsSchema: () => UserProfileFindUniqueOrThrowArgsSchema,
  UserProfileGroupByArgsSchema: () => UserProfileGroupByArgsSchema,
  UserProfileIncludeSchema: () => UserProfileIncludeSchema,
  UserProfileMaxOrderByAggregateInputSchema: () => UserProfileMaxOrderByAggregateInputSchema,
  UserProfileMinOrderByAggregateInputSchema: () => UserProfileMinOrderByAggregateInputSchema,
  UserProfileOrderByWithAggregationInputSchema: () => UserProfileOrderByWithAggregationInputSchema,
  UserProfileOrderByWithRelationInputSchema: () => UserProfileOrderByWithRelationInputSchema,
  UserProfileRelationFilterSchema: () => UserProfileRelationFilterSchema,
  UserProfileScalarFieldEnumSchema: () => UserProfileScalarFieldEnumSchema,
  UserProfileScalarWhereWithAggregatesInputSchema: () => UserProfileScalarWhereWithAggregatesInputSchema,
  UserProfileSchema: () => UserProfileSchema,
  UserProfileSelectSchema: () => UserProfileSelectSchema,
  UserProfileSumOrderByAggregateInputSchema: () => UserProfileSumOrderByAggregateInputSchema,
  UserProfileUncheckedCreateInputSchema: () => UserProfileUncheckedCreateInputSchema,
  UserProfileUncheckedCreateWithoutUserInputSchema: () => UserProfileUncheckedCreateWithoutUserInputSchema,
  UserProfileUncheckedUpdateInputSchema: () => UserProfileUncheckedUpdateInputSchema,
  UserProfileUncheckedUpdateManyInputSchema: () => UserProfileUncheckedUpdateManyInputSchema,
  UserProfileUncheckedUpdateWithoutUserInputSchema: () => UserProfileUncheckedUpdateWithoutUserInputSchema,
  UserProfileUpdateArgsSchema: () => UserProfileUpdateArgsSchema,
  UserProfileUpdateInputSchema: () => UserProfileUpdateInputSchema,
  UserProfileUpdateManyArgsSchema: () => UserProfileUpdateManyArgsSchema,
  UserProfileUpdateManyMutationInputSchema: () => UserProfileUpdateManyMutationInputSchema,
  UserProfileUpdateOneWithoutUserNestedInputSchema: () => UserProfileUpdateOneWithoutUserNestedInputSchema,
  UserProfileUpdateWithoutUserInputSchema: () => UserProfileUpdateWithoutUserInputSchema,
  UserProfileUpsertArgsSchema: () => UserProfileUpsertArgsSchema,
  UserProfileUpsertWithoutUserInputSchema: () => UserProfileUpsertWithoutUserInputSchema,
  UserProfileWhereInputSchema: () => UserProfileWhereInputSchema,
  UserProfileWhereUniqueInputSchema: () => UserProfileWhereUniqueInputSchema,
  UserRelationFilterSchema: () => UserRelationFilterSchema,
  UserScalarFieldEnumSchema: () => UserScalarFieldEnumSchema,
  UserScalarWhereInputSchema: () => UserScalarWhereInputSchema,
  UserScalarWhereWithAggregatesInputSchema: () => UserScalarWhereWithAggregatesInputSchema,
  UserSchema: () => UserSchema,
  UserSelectSchema: () => UserSelectSchema,
  UserSumOrderByAggregateInputSchema: () => UserSumOrderByAggregateInputSchema,
  UserUncheckedCreateInputSchema: () => UserUncheckedCreateInputSchema,
  UserUncheckedCreateNestedManyWithoutUserProfileInputSchema: () => UserUncheckedCreateNestedManyWithoutUserProfileInputSchema,
  UserUncheckedCreateWithoutMembershipsInputSchema: () => UserUncheckedCreateWithoutMembershipsInputSchema,
  UserUncheckedCreateWithoutOrganisationInvitationInputSchema: () => UserUncheckedCreateWithoutOrganisationInvitationInputSchema,
  UserUncheckedCreateWithoutUserProfileInputSchema: () => UserUncheckedCreateWithoutUserProfileInputSchema,
  UserUncheckedUpdateInputSchema: () => UserUncheckedUpdateInputSchema,
  UserUncheckedUpdateManyInputSchema: () => UserUncheckedUpdateManyInputSchema,
  UserUncheckedUpdateManyWithoutUserInputSchema: () => UserUncheckedUpdateManyWithoutUserInputSchema,
  UserUncheckedUpdateManyWithoutUserProfileNestedInputSchema: () => UserUncheckedUpdateManyWithoutUserProfileNestedInputSchema,
  UserUncheckedUpdateWithoutMembershipsInputSchema: () => UserUncheckedUpdateWithoutMembershipsInputSchema,
  UserUncheckedUpdateWithoutOrganisationInvitationInputSchema: () => UserUncheckedUpdateWithoutOrganisationInvitationInputSchema,
  UserUncheckedUpdateWithoutUserProfileInputSchema: () => UserUncheckedUpdateWithoutUserProfileInputSchema,
  UserUpdateArgsSchema: () => UserUpdateArgsSchema,
  UserUpdateInputSchema: () => UserUpdateInputSchema,
  UserUpdateManyArgsSchema: () => UserUpdateManyArgsSchema,
  UserUpdateManyMutationInputSchema: () => UserUpdateManyMutationInputSchema,
  UserUpdateManyWithWhereWithoutUserProfileInputSchema: () => UserUpdateManyWithWhereWithoutUserProfileInputSchema,
  UserUpdateManyWithoutUserProfileNestedInputSchema: () => UserUpdateManyWithoutUserProfileNestedInputSchema,
  UserUpdateOneRequiredWithoutOrganisationInvitationNestedInputSchema: () => UserUpdateOneRequiredWithoutOrganisationInvitationNestedInputSchema,
  UserUpdateOneWithoutMembershipsNestedInputSchema: () => UserUpdateOneWithoutMembershipsNestedInputSchema,
  UserUpdateWithWhereUniqueWithoutUserProfileInputSchema: () => UserUpdateWithWhereUniqueWithoutUserProfileInputSchema,
  UserUpdateWithoutMembershipsInputSchema: () => UserUpdateWithoutMembershipsInputSchema,
  UserUpdateWithoutOrganisationInvitationInputSchema: () => UserUpdateWithoutOrganisationInvitationInputSchema,
  UserUpdateWithoutUserProfileInputSchema: () => UserUpdateWithoutUserProfileInputSchema,
  UserUpsertArgsSchema: () => UserUpsertArgsSchema,
  UserUpsertWithWhereUniqueWithoutUserProfileInputSchema: () => UserUpsertWithWhereUniqueWithoutUserProfileInputSchema,
  UserUpsertWithoutMembershipsInputSchema: () => UserUpsertWithoutMembershipsInputSchema,
  UserUpsertWithoutOrganisationInvitationInputSchema: () => UserUpsertWithoutOrganisationInvitationInputSchema,
  UserWhereInputSchema: () => UserWhereInputSchema,
  UserWhereUniqueInputSchema: () => UserWhereUniqueInputSchema
});

// ../../node_modules/zod/lib/index.mjs
var util;
(function(util2) {
  util2.assertEqual = (val) => val;
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
      // second overwrites first
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var quotelessJson = (obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};
var ZodError = class extends Error {
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  get errors() {
    return this.issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
        fieldErrors[sub.path[0]].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
};
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
var overrideErrorMap = errorMap;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}
var makeIssue = (params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  let errorMessage = "";
  const maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: issueData.message || errorMessage
  };
};
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      ctx.schemaErrorMap,
      getErrorMap(),
      errorMap
      // then global default map
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}
var ParseStatus = class {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted")
        return INVALID;
      if (s.status === "dirty")
        status.dirty();
      arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      syncPairs.push({
        key: await pair.key,
        value: await pair.value
      });
    }
    return ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (typeof value.value !== "undefined" || pair.alwaysSet) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
};
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = (value) => ({ status: "dirty", value });
var OK = (value) => ({ status: "valid", value });
var isAborted = (x) => x.status === "aborted";
var isDirty = (x) => x.status === "dirty";
var isValid = (x) => x.status === "valid";
var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
})(errorUtil || (errorUtil = {}));
var ParseInputLazyPath = class {
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (this._key instanceof Array) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
};
var handleResult = (ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    if (typeof ctx.data === "undefined") {
      return { message: required_error !== null && required_error !== void 0 ? required_error : ctx.defaultError };
    }
    return { message: invalid_type_error !== null && invalid_type_error !== void 0 ? invalid_type_error : ctx.defaultError };
  };
  return { errorMap: customMap, description };
}
var ZodType = class {
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    var _a;
    const ctx = {
      common: {
        issues: [],
        async: (_a = params === null || params === void 0 ? void 0 : params.async) !== null && _a !== void 0 ? _a : false,
        contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap
      },
      path: (params === null || params === void 0 ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
        async: true
      },
      path: (params === null || params === void 0 ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this, this._def);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[a-z][a-z0-9]*$/;
var ulidRegex = /[0-9A-HJKMNP-TV-Z]{26}/;
var uuidRegex = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i;
var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/;
var emojiRegex = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u;
var ipv4Regex = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/;
var ipv6Regex = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
var datetimeRegex = (args) => {
  if (args.precision) {
    if (args.offset) {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}Z$`);
    }
  } else if (args.precision === 0) {
    if (args.offset) {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$`);
    }
  } else {
    if (args.offset) {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$`);
    }
  }
};
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
var ZodString = class extends ZodType {
  constructor() {
    super(...arguments);
    this._regex = (regex, validation, message) => this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
    this.nonempty = (message) => this.min(1, errorUtil.errToObj(message));
    this.trim = () => new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
    this.toLowerCase = () => new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
    this.toUpperCase = () => new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(
        ctx2,
        {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.string,
          received: ctx2.parsedType
        }
        //
      );
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch (_a) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _addCheck(check) {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    var _a;
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
      offset: (_a = options === null || options === void 0 ? void 0 : options.offset) !== null && _a !== void 0 ? _a : false,
      ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
    });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options === null || options === void 0 ? void 0 : options.position,
      ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodString.create = (params) => {
  var _a;
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / Math.pow(10, decCount);
}
var ZodNumber = class extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null, min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    ...processCreateParams(params)
  });
};
var ZodBigInt = class extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = BigInt(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.bigint,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodBigInt.create = (params) => {
  var _a;
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
    ...processCreateParams(params)
  });
};
var ZodBoolean = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    ...processCreateParams(params)
  });
};
var ZodDate = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
};
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};
var ZodSymbol = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};
var ZodUndefined = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};
var ZodNull = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};
var ZodAny = class extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};
var ZodUnknown = class extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};
var ZodNever = class extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
};
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};
var ZodVoid = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};
var ZodArray = class extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
var ZodObject = class extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    return this._cached = { shape, keys };
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip")
        ;
      else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          syncPairs.push({
            key,
            value: await pair.value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: (issue, ctx) => {
          var _a, _b, _c, _d;
          const defaultError = (_c = (_b = (_a = this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: (_d = errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    const merged = new ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    util.objectKeys(mask).forEach((key) => {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
var ZodUnion = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = (type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return Object.keys(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [void 0];
  } else if (type instanceof ZodNull) {
    return [null];
  } else {
    return null;
  }
};
var ZodDiscriminatedUnion = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */ new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
};
function mergeValues(a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return { valid: true, data: a };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return { valid: true, data: a };
  } else {
    return { valid: false };
  }
}
var ZodIntersection = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
};
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};
var ZodTuple = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x) => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new ZodTuple({
      ...this._def,
      rest
    });
  }
};
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
var ZodRecord = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key))
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
};
var ZodMap = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
};
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};
var ZodSet = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};
var ZodFunction = class extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      return OK(async (...args) => {
        const error = new ZodError([]);
        const parsedArgs = await this._def.args.parseAsync(args, params).catch((e) => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await fn(...parsedArgs);
        const parsedReturns = await this._def.returns._def.type.parseAsync(result, params).catch((e) => {
          error.addIssue(makeReturnsIssue(result, e));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      return OK((...args) => {
        const parsedArgs = this._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = fn(...parsedArgs.data);
        const parsedReturns = this._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
};
var ZodLazy = class extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
};
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};
var ZodLiteral = class extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
};
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
var ZodEnum = class extends ZodType {
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (this._def.values.indexOf(input.data) === -1) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values) {
    return ZodEnum.create(values);
  }
  exclude(values) {
    return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)));
  }
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (nativeEnumValues.indexOf(input.data) === -1) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
};
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};
var ZodPromise = class extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
};
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};
var ZodEffects = class extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data);
      if (ctx.common.async) {
        return Promise.resolve(processed).then((processed2) => {
          return this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
        });
      } else {
        return this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
      }
    }
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return base;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return base;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({ status: status.value, value: result }));
        });
      }
    }
    util.assertNever(effect);
  }
};
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
var ZodOptional = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
var ZodNullable = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};
var ZodDefault = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};
var ZodCatch = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};
var ZodNaN = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
};
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = Symbol("zod_brand");
var ZodBranded = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
};
var ZodPipeline = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a, b) {
    return new ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
};
var custom = (check, params = {}, fatal) => {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      var _a, _b;
      if (!check(data)) {
        const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
        const _fatal = (_b = (_a = p.fatal) !== null && _a !== void 0 ? _a : fatal) !== null && _b !== void 0 ? _b : true;
        const p2 = typeof p === "string" ? { message: p } : p;
        ctx.addIssue({ code: "custom", ...p2, fatal: _fatal });
      }
    });
  return ZodAny.create();
};
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = () => stringType().optional();
var onumber = () => numberType().optional();
var oboolean = () => booleanType().optional();
var coerce = {
  string: (arg) => ZodString.create({ ...arg, coerce: true }),
  number: (arg) => ZodNumber.create({ ...arg, coerce: true }),
  boolean: (arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  }),
  bigint: (arg) => ZodBigInt.create({ ...arg, coerce: true }),
  date: (arg) => ZodDate.create({ ...arg, coerce: true })
};
var NEVER = INVALID;
var z = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: errorMap,
  setErrorMap,
  getErrorMap,
  makeIssue,
  EMPTY_PATH,
  addIssueToContext,
  ParseStatus,
  INVALID,
  DIRTY,
  OK,
  isAborted,
  isDirty,
  isValid,
  isAsync,
  get util() {
    return util;
  },
  get objectUtil() {
    return objectUtil;
  },
  ZodParsedType,
  getParsedType,
  ZodType,
  ZodString,
  ZodNumber,
  ZodBigInt,
  ZodBoolean,
  ZodDate,
  ZodSymbol,
  ZodUndefined,
  ZodNull,
  ZodAny,
  ZodUnknown,
  ZodNever,
  ZodVoid,
  ZodArray,
  ZodObject,
  ZodUnion,
  ZodDiscriminatedUnion,
  ZodIntersection,
  ZodTuple,
  ZodRecord,
  ZodMap,
  ZodSet,
  ZodFunction,
  ZodLazy,
  ZodLiteral,
  ZodEnum,
  ZodNativeEnum,
  ZodPromise,
  ZodEffects,
  ZodTransformer: ZodEffects,
  ZodOptional,
  ZodNullable,
  ZodDefault,
  ZodCatch,
  ZodNaN,
  BRAND,
  ZodBranded,
  ZodPipeline,
  custom,
  Schema: ZodType,
  ZodSchema: ZodType,
  late,
  get ZodFirstPartyTypeKind() {
    return ZodFirstPartyTypeKind;
  },
  coerce,
  any: anyType,
  array: arrayType,
  bigint: bigIntType,
  boolean: booleanType,
  date: dateType,
  discriminatedUnion: discriminatedUnionType,
  effect: effectsType,
  "enum": enumType,
  "function": functionType,
  "instanceof": instanceOfType,
  intersection: intersectionType,
  lazy: lazyType,
  literal: literalType,
  map: mapType,
  nan: nanType,
  nativeEnum: nativeEnumType,
  never: neverType,
  "null": nullType,
  nullable: nullableType,
  number: numberType,
  object: objectType,
  oboolean,
  onumber,
  optional: optionalType,
  ostring,
  pipeline: pipelineType,
  preprocess: preprocessType,
  promise: promiseType,
  record: recordType,
  set: setType,
  strictObject: strictObjectType,
  string: stringType,
  symbol: symbolType,
  transformer: effectsType,
  tuple: tupleType,
  "undefined": undefinedType,
  union: unionType,
  unknown: unknownType,
  "void": voidType,
  NEVER,
  ZodIssueCode,
  quotelessJson,
  ZodError
});

// src/zod/index.ts
var ChannelScalarFieldEnumSchema = z.enum(["id", "kind", "createdBy", "name", "description", "createdAt", "updatedAt", "organisationId"]);
var InvitationCodeScalarFieldEnumSchema = z.enum(["id", "role", "userId"]);
var MediaScalarFieldEnumSchema = z.enum(["id", "kind", "filename", "size", "width", "height", "path", "createdAt", "messageId"]);
var MembershipScalarFieldEnumSchema = z.enum(["id", "role", "organizationId", "userId", "invitedName", "invitedEmail"]);
var MessageScalarFieldEnumSchema = z.enum(["id", "text", "senderId", "receiverId", "channelId", "createdAt", "updatedAt"]);
var OrganisationInvitationScalarFieldEnumSchema = z.enum(["id", "publicId", "issuedEmail", "createdAt", "expiresAt", "creatorId", "organizationId"]);
var OrganisationScalarFieldEnumSchema = z.enum(["id", "publicId", "name", "createdAt", "updatedAt"]);
var SortOrderSchema = z.enum(["asc", "desc"]);
var TransactionIsolationLevelSchema = z.enum(["ReadUncommitted", "ReadCommitted", "RepeatableRead", "Serializable"]);
var UserNotificationsScalarFieldEnumSchema = z.enum(["id", "payload", "userId"]);
var UserProfileScalarFieldEnumSchema = z.enum(["id", "publicId", "profilePictureUrl", "profileColor", "username", "createdAt", "updatedAt"]);
var UserScalarFieldEnumSchema = z.enum(["id", "publicId", "createdAt", "updatedAt", "name", "email", "password", "role", "userProfileId"]);
var MembershipRoleSchema = z.enum(["OWNER", "ADMIN", "USER"]);
var GlobalRoleSchema = z.enum(["SUPERADMIN", "CUSTOMER"]);
var ChannelKindSchema = z.enum(["PRIVATE", "PUBLIC"]);
var OrganisationSchema = z.object({
  id: z.number().int(),
  publicId: z.string().cuid(),
  name: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date()
});
var OrganisationInvitationSchema = z.object({
  id: z.number().int(),
  publicId: z.string().cuid(),
  issuedEmail: z.string(),
  createdAt: z.coerce.date(),
  expiresAt: z.coerce.date(),
  creatorId: z.number().int(),
  organizationId: z.number().int()
});
var MembershipSchema = z.object({
  role: MembershipRoleSchema,
  id: z.number().int(),
  organizationId: z.number().int(),
  userId: z.number().int().nullable(),
  invitedName: z.string().nullable(),
  invitedEmail: z.string().nullable()
});
var UserSchema = z.object({
  role: GlobalRoleSchema,
  id: z.number().int(),
  publicId: z.string().cuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
  userProfileId: z.number().int()
});
var UserProfileSchema = z.object({
  id: z.number().int(),
  publicId: z.string().cuid(),
  profilePictureUrl: z.string().nullable(),
  profileColor: z.string(),
  username: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date()
});
var ChannelSchema = z.object({
  kind: ChannelKindSchema,
  id: z.string().cuid(),
  createdBy: z.string(),
  name: z.string().nullable(),
  description: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  organisationId: z.string().nullable()
});
var MediaSchema = z.object({
  id: z.string().cuid(),
  kind: z.string(),
  filename: z.string(),
  size: z.number().int(),
  width: z.number().int(),
  height: z.number().int(),
  path: z.string(),
  createdAt: z.coerce.date(),
  messageId: z.string().nullable()
});
var MessageSchema = z.object({
  id: z.string().cuid(),
  text: z.string(),
  senderId: z.string(),
  receiverId: z.string().nullable(),
  channelId: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date()
});
var UserNotificationsSchema = z.object({
  id: z.string().cuid(),
  payload: z.string(),
  userId: z.string().nullable()
});
var InvitationCodeSchema = z.object({
  id: z.string().cuid(),
  role: z.string(),
  userId: z.string().nullable()
});
var OrganisationIncludeSchema = z.object({
  membership: z.union([z.boolean(), z.lazy(() => MembershipFindManyArgsSchema)]).optional(),
  channels: z.union([z.boolean(), z.lazy(() => ChannelFindManyArgsSchema)]).optional(),
  OrganisationInvitation: z.union([z.boolean(), z.lazy(() => OrganisationInvitationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => OrganisationCountOutputTypeArgsSchema)]).optional()
}).strict();
var OrganisationArgsSchema = z.object({
  select: z.lazy(() => OrganisationSelectSchema).optional(),
  include: z.lazy(() => OrganisationIncludeSchema).optional()
}).strict();
var OrganisationCountOutputTypeArgsSchema = z.object({
  select: z.lazy(() => OrganisationCountOutputTypeSelectSchema).nullish()
}).strict();
var OrganisationCountOutputTypeSelectSchema = z.object({
  membership: z.boolean().optional(),
  channels: z.boolean().optional(),
  OrganisationInvitation: z.boolean().optional()
}).strict();
var OrganisationSelectSchema = z.object({
  id: z.boolean().optional(),
  publicId: z.boolean().optional(),
  name: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  membership: z.union([z.boolean(), z.lazy(() => MembershipFindManyArgsSchema)]).optional(),
  channels: z.union([z.boolean(), z.lazy(() => ChannelFindManyArgsSchema)]).optional(),
  OrganisationInvitation: z.union([z.boolean(), z.lazy(() => OrganisationInvitationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => OrganisationCountOutputTypeArgsSchema)]).optional()
}).strict();
var OrganisationInvitationIncludeSchema = z.object({
  createdBy: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
  organisation: z.union([z.boolean(), z.lazy(() => OrganisationArgsSchema)]).optional()
}).strict();
var OrganisationInvitationArgsSchema = z.object({
  select: z.lazy(() => OrganisationInvitationSelectSchema).optional(),
  include: z.lazy(() => OrganisationInvitationIncludeSchema).optional()
}).strict();
var OrganisationInvitationSelectSchema = z.object({
  id: z.boolean().optional(),
  publicId: z.boolean().optional(),
  issuedEmail: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  expiresAt: z.boolean().optional(),
  creatorId: z.boolean().optional(),
  organizationId: z.boolean().optional(),
  createdBy: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
  organisation: z.union([z.boolean(), z.lazy(() => OrganisationArgsSchema)]).optional()
}).strict();
var MembershipIncludeSchema = z.object({
  organization: z.union([z.boolean(), z.lazy(() => OrganisationArgsSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional()
}).strict();
var MembershipArgsSchema = z.object({
  select: z.lazy(() => MembershipSelectSchema).optional(),
  include: z.lazy(() => MembershipIncludeSchema).optional()
}).strict();
var MembershipSelectSchema = z.object({
  id: z.boolean().optional(),
  role: z.boolean().optional(),
  organizationId: z.boolean().optional(),
  userId: z.boolean().optional(),
  invitedName: z.boolean().optional(),
  invitedEmail: z.boolean().optional(),
  organization: z.union([z.boolean(), z.lazy(() => OrganisationArgsSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional()
}).strict();
var UserIncludeSchema = z.object({
  userProfile: z.union([z.boolean(), z.lazy(() => UserProfileArgsSchema)]).optional(),
  memberships: z.union([z.boolean(), z.lazy(() => MembershipFindManyArgsSchema)]).optional(),
  OrganisationInvitation: z.union([z.boolean(), z.lazy(() => OrganisationInvitationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsSchema)]).optional()
}).strict();
var UserArgsSchema = z.object({
  select: z.lazy(() => UserSelectSchema).optional(),
  include: z.lazy(() => UserIncludeSchema).optional()
}).strict();
var UserCountOutputTypeArgsSchema = z.object({
  select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish()
}).strict();
var UserCountOutputTypeSelectSchema = z.object({
  memberships: z.boolean().optional(),
  OrganisationInvitation: z.boolean().optional()
}).strict();
var UserSelectSchema = z.object({
  id: z.boolean().optional(),
  publicId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  password: z.boolean().optional(),
  role: z.boolean().optional(),
  userProfileId: z.boolean().optional(),
  userProfile: z.union([z.boolean(), z.lazy(() => UserProfileArgsSchema)]).optional(),
  memberships: z.union([z.boolean(), z.lazy(() => MembershipFindManyArgsSchema)]).optional(),
  OrganisationInvitation: z.union([z.boolean(), z.lazy(() => OrganisationInvitationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsSchema)]).optional()
}).strict();
var UserProfileIncludeSchema = z.object({
  User: z.union([z.boolean(), z.lazy(() => UserFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserProfileCountOutputTypeArgsSchema)]).optional()
}).strict();
var UserProfileArgsSchema = z.object({
  select: z.lazy(() => UserProfileSelectSchema).optional(),
  include: z.lazy(() => UserProfileIncludeSchema).optional()
}).strict();
var UserProfileCountOutputTypeArgsSchema = z.object({
  select: z.lazy(() => UserProfileCountOutputTypeSelectSchema).nullish()
}).strict();
var UserProfileCountOutputTypeSelectSchema = z.object({
  User: z.boolean().optional()
}).strict();
var UserProfileSelectSchema = z.object({
  id: z.boolean().optional(),
  publicId: z.boolean().optional(),
  profilePictureUrl: z.boolean().optional(),
  profileColor: z.boolean().optional(),
  username: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  User: z.union([z.boolean(), z.lazy(() => UserFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserProfileCountOutputTypeArgsSchema)]).optional()
}).strict();
var ChannelIncludeSchema = z.object({
  Organisation: z.union([z.boolean(), z.lazy(() => OrganisationArgsSchema)]).optional()
}).strict();
var ChannelArgsSchema = z.object({
  select: z.lazy(() => ChannelSelectSchema).optional(),
  include: z.lazy(() => ChannelIncludeSchema).optional()
}).strict();
var ChannelSelectSchema = z.object({
  id: z.boolean().optional(),
  kind: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  organisationId: z.boolean().optional(),
  Organisation: z.union([z.boolean(), z.lazy(() => OrganisationArgsSchema)]).optional()
}).strict();
var MediaIncludeSchema = z.object({
  Message: z.union([z.boolean(), z.lazy(() => MessageArgsSchema)]).optional()
}).strict();
var MediaArgsSchema = z.object({
  select: z.lazy(() => MediaSelectSchema).optional(),
  include: z.lazy(() => MediaIncludeSchema).optional()
}).strict();
var MediaSelectSchema = z.object({
  id: z.boolean().optional(),
  kind: z.boolean().optional(),
  filename: z.boolean().optional(),
  size: z.boolean().optional(),
  width: z.boolean().optional(),
  height: z.boolean().optional(),
  path: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  messageId: z.boolean().optional(),
  Message: z.union([z.boolean(), z.lazy(() => MessageArgsSchema)]).optional()
}).strict();
var MessageIncludeSchema = z.object({
  media: z.union([z.boolean(), z.lazy(() => MediaFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => MessageCountOutputTypeArgsSchema)]).optional()
}).strict();
var MessageArgsSchema = z.object({
  select: z.lazy(() => MessageSelectSchema).optional(),
  include: z.lazy(() => MessageIncludeSchema).optional()
}).strict();
var MessageCountOutputTypeArgsSchema = z.object({
  select: z.lazy(() => MessageCountOutputTypeSelectSchema).nullish()
}).strict();
var MessageCountOutputTypeSelectSchema = z.object({
  media: z.boolean().optional()
}).strict();
var MessageSelectSchema = z.object({
  id: z.boolean().optional(),
  text: z.boolean().optional(),
  senderId: z.boolean().optional(),
  receiverId: z.boolean().optional(),
  channelId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  media: z.union([z.boolean(), z.lazy(() => MediaFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => MessageCountOutputTypeArgsSchema)]).optional()
}).strict();
var UserNotificationsSelectSchema = z.object({
  id: z.boolean().optional(),
  payload: z.boolean().optional(),
  userId: z.boolean().optional()
}).strict();
var InvitationCodeSelectSchema = z.object({
  id: z.boolean().optional(),
  role: z.boolean().optional(),
  userId: z.boolean().optional()
}).strict();
var OrganisationWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => OrganisationWhereInputSchema), z.lazy(() => OrganisationWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => OrganisationWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => OrganisationWhereInputSchema), z.lazy(() => OrganisationWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  publicId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  membership: z.lazy(() => MembershipListRelationFilterSchema).optional(),
  channels: z.lazy(() => ChannelListRelationFilterSchema).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationListRelationFilterSchema).optional()
}).strict();
var OrganisationOrderByWithRelationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  publicId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  membership: z.lazy(() => MembershipOrderByRelationAggregateInputSchema).optional(),
  channels: z.lazy(() => ChannelOrderByRelationAggregateInputSchema).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationOrderByRelationAggregateInputSchema).optional()
}).strict();
var OrganisationWhereUniqueInputSchema = z.object({
  id: z.number().int().optional(),
  publicId: z.string().cuid().optional()
}).strict();
var OrganisationOrderByWithAggregationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  publicId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => OrganisationCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => OrganisationAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => OrganisationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => OrganisationMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => OrganisationSumOrderByAggregateInputSchema).optional()
}).strict();
var OrganisationScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => OrganisationScalarWhereWithAggregatesInputSchema), z.lazy(() => OrganisationScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => OrganisationScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => OrganisationScalarWhereWithAggregatesInputSchema), z.lazy(() => OrganisationScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  publicId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
}).strict();
var OrganisationInvitationWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => OrganisationInvitationWhereInputSchema), z.lazy(() => OrganisationInvitationWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => OrganisationInvitationWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => OrganisationInvitationWhereInputSchema), z.lazy(() => OrganisationInvitationWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  publicId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  issuedEmail: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  expiresAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  creatorId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  organizationId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  createdBy: z.union([z.lazy(() => UserRelationFilterSchema), z.lazy(() => UserWhereInputSchema)]).optional(),
  organisation: z.union([z.lazy(() => OrganisationRelationFilterSchema), z.lazy(() => OrganisationWhereInputSchema)]).optional()
}).strict();
var OrganisationInvitationOrderByWithRelationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  publicId: z.lazy(() => SortOrderSchema).optional(),
  issuedEmail: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  creatorId: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  organisation: z.lazy(() => OrganisationOrderByWithRelationInputSchema).optional()
}).strict();
var OrganisationInvitationWhereUniqueInputSchema = z.object({
  id: z.number().int().optional(),
  publicId: z.string().cuid().optional()
}).strict();
var OrganisationInvitationOrderByWithAggregationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  publicId: z.lazy(() => SortOrderSchema).optional(),
  issuedEmail: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  creatorId: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => OrganisationInvitationCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => OrganisationInvitationAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => OrganisationInvitationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => OrganisationInvitationMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => OrganisationInvitationSumOrderByAggregateInputSchema).optional()
}).strict();
var OrganisationInvitationScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => OrganisationInvitationScalarWhereWithAggregatesInputSchema), z.lazy(() => OrganisationInvitationScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => OrganisationInvitationScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => OrganisationInvitationScalarWhereWithAggregatesInputSchema), z.lazy(() => OrganisationInvitationScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  publicId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  issuedEmail: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  expiresAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  creatorId: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  organizationId: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional()
}).strict();
var MembershipWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => MembershipWhereInputSchema), z.lazy(() => MembershipWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => MembershipWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => MembershipWhereInputSchema), z.lazy(() => MembershipWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  role: z.union([z.lazy(() => EnumMembershipRoleFilterSchema), z.lazy(() => MembershipRoleSchema)]).optional(),
  organizationId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  userId: z.union([z.lazy(() => IntNullableFilterSchema), z.number()]).optional().nullable(),
  invitedName: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  invitedEmail: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  organization: z.union([z.lazy(() => OrganisationRelationFilterSchema), z.lazy(() => OrganisationWhereInputSchema)]).optional(),
  user: z.union([z.lazy(() => UserRelationFilterSchema), z.lazy(() => UserWhereInputSchema)]).optional().nullable()
}).strict();
var MembershipOrderByWithRelationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  invitedName: z.lazy(() => SortOrderSchema).optional(),
  invitedEmail: z.lazy(() => SortOrderSchema).optional(),
  organization: z.lazy(() => OrganisationOrderByWithRelationInputSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();
var MembershipWhereUniqueInputSchema = z.object({
  id: z.number().int().optional(),
  organizationId_invitedEmail: z.lazy(() => MembershipOrganizationIdInvitedEmailCompoundUniqueInputSchema).optional()
}).strict();
var MembershipOrderByWithAggregationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  invitedName: z.lazy(() => SortOrderSchema).optional(),
  invitedEmail: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => MembershipCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => MembershipAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => MembershipMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => MembershipMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => MembershipSumOrderByAggregateInputSchema).optional()
}).strict();
var MembershipScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => MembershipScalarWhereWithAggregatesInputSchema), z.lazy(() => MembershipScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => MembershipScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => MembershipScalarWhereWithAggregatesInputSchema), z.lazy(() => MembershipScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  role: z.union([z.lazy(() => EnumMembershipRoleWithAggregatesFilterSchema), z.lazy(() => MembershipRoleSchema)]).optional(),
  organizationId: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  userId: z.union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()]).optional().nullable(),
  invitedName: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  invitedEmail: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable()
}).strict();
var UserWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  publicId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  password: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  role: z.union([z.lazy(() => EnumGlobalRoleFilterSchema), z.lazy(() => GlobalRoleSchema)]).optional(),
  userProfileId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  userProfile: z.union([z.lazy(() => UserProfileRelationFilterSchema), z.lazy(() => UserProfileWhereInputSchema)]).optional().nullable(),
  memberships: z.lazy(() => MembershipListRelationFilterSchema).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationListRelationFilterSchema).optional()
}).strict();
var UserOrderByWithRelationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  publicId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  userProfileId: z.lazy(() => SortOrderSchema).optional(),
  userProfile: z.lazy(() => UserProfileOrderByWithRelationInputSchema).optional(),
  memberships: z.lazy(() => MembershipOrderByRelationAggregateInputSchema).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationOrderByRelationAggregateInputSchema).optional()
}).strict();
var UserWhereUniqueInputSchema = z.object({
  id: z.number().int().optional(),
  publicId: z.string().cuid().optional(),
  email: z.string().optional()
}).strict();
var UserOrderByWithAggregationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  publicId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  userProfileId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => UserAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => UserSumOrderByAggregateInputSchema).optional()
}).strict();
var UserScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => UserScalarWhereWithAggregatesInputSchema), z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserScalarWhereWithAggregatesInputSchema), z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  publicId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  password: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  role: z.union([z.lazy(() => EnumGlobalRoleWithAggregatesFilterSchema), z.lazy(() => GlobalRoleSchema)]).optional(),
  userProfileId: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional()
}).strict();
var UserProfileWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => UserProfileWhereInputSchema), z.lazy(() => UserProfileWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => UserProfileWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserProfileWhereInputSchema), z.lazy(() => UserProfileWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  publicId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  profilePictureUrl: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  profileColor: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  username: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  User: z.lazy(() => UserListRelationFilterSchema).optional()
}).strict();
var UserProfileOrderByWithRelationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  publicId: z.lazy(() => SortOrderSchema).optional(),
  profilePictureUrl: z.lazy(() => SortOrderSchema).optional(),
  profileColor: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  User: z.lazy(() => UserOrderByRelationAggregateInputSchema).optional()
}).strict();
var UserProfileWhereUniqueInputSchema = z.object({
  id: z.number().int().optional(),
  publicId: z.string().cuid().optional()
}).strict();
var UserProfileOrderByWithAggregationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  publicId: z.lazy(() => SortOrderSchema).optional(),
  profilePictureUrl: z.lazy(() => SortOrderSchema).optional(),
  profileColor: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserProfileCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => UserProfileAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserProfileMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserProfileMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => UserProfileSumOrderByAggregateInputSchema).optional()
}).strict();
var UserProfileScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => UserProfileScalarWhereWithAggregatesInputSchema), z.lazy(() => UserProfileScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => UserProfileScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserProfileScalarWhereWithAggregatesInputSchema), z.lazy(() => UserProfileScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  publicId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  profilePictureUrl: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  profileColor: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  username: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
}).strict();
var ChannelWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => ChannelWhereInputSchema), z.lazy(() => ChannelWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => ChannelWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => ChannelWhereInputSchema), z.lazy(() => ChannelWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  kind: z.union([z.lazy(() => EnumChannelKindFilterSchema), z.lazy(() => ChannelKindSchema)]).optional(),
  createdBy: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  description: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  organisationId: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  Organisation: z.union([z.lazy(() => OrganisationRelationFilterSchema), z.lazy(() => OrganisationWhereInputSchema)]).optional().nullable()
}).strict();
var ChannelOrderByWithRelationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  kind: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  organisationId: z.lazy(() => SortOrderSchema).optional(),
  Organisation: z.lazy(() => OrganisationOrderByWithRelationInputSchema).optional()
}).strict();
var ChannelWhereUniqueInputSchema = z.object({
  id: z.string().cuid().optional()
}).strict();
var ChannelOrderByWithAggregationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  kind: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  organisationId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ChannelCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ChannelMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ChannelMinOrderByAggregateInputSchema).optional()
}).strict();
var ChannelScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => ChannelScalarWhereWithAggregatesInputSchema), z.lazy(() => ChannelScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => ChannelScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => ChannelScalarWhereWithAggregatesInputSchema), z.lazy(() => ChannelScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  kind: z.union([z.lazy(() => EnumChannelKindWithAggregatesFilterSchema), z.lazy(() => ChannelKindSchema)]).optional(),
  createdBy: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  organisationId: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable()
}).strict();
var MediaWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => MediaWhereInputSchema), z.lazy(() => MediaWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => MediaWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => MediaWhereInputSchema), z.lazy(() => MediaWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  kind: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  filename: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  size: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  width: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  height: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  path: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  messageId: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  Message: z.union([z.lazy(() => MessageRelationFilterSchema), z.lazy(() => MessageWhereInputSchema)]).optional().nullable()
}).strict();
var MediaOrderByWithRelationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  kind: z.lazy(() => SortOrderSchema).optional(),
  filename: z.lazy(() => SortOrderSchema).optional(),
  size: z.lazy(() => SortOrderSchema).optional(),
  width: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional(),
  path: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  messageId: z.lazy(() => SortOrderSchema).optional(),
  Message: z.lazy(() => MessageOrderByWithRelationInputSchema).optional()
}).strict();
var MediaWhereUniqueInputSchema = z.object({
  id: z.string().cuid().optional()
}).strict();
var MediaOrderByWithAggregationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  kind: z.lazy(() => SortOrderSchema).optional(),
  filename: z.lazy(() => SortOrderSchema).optional(),
  size: z.lazy(() => SortOrderSchema).optional(),
  width: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional(),
  path: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  messageId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => MediaCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => MediaAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => MediaMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => MediaMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => MediaSumOrderByAggregateInputSchema).optional()
}).strict();
var MediaScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => MediaScalarWhereWithAggregatesInputSchema), z.lazy(() => MediaScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => MediaScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => MediaScalarWhereWithAggregatesInputSchema), z.lazy(() => MediaScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  kind: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  filename: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  size: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  width: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  height: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  path: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  messageId: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable()
}).strict();
var MessageWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => MessageWhereInputSchema), z.lazy(() => MessageWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => MessageWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => MessageWhereInputSchema), z.lazy(() => MessageWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  text: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  senderId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  receiverId: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  channelId: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  media: z.lazy(() => MediaListRelationFilterSchema).optional()
}).strict();
var MessageOrderByWithRelationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  senderId: z.lazy(() => SortOrderSchema).optional(),
  receiverId: z.lazy(() => SortOrderSchema).optional(),
  channelId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  media: z.lazy(() => MediaOrderByRelationAggregateInputSchema).optional()
}).strict();
var MessageWhereUniqueInputSchema = z.object({
  id: z.string().cuid().optional()
}).strict();
var MessageOrderByWithAggregationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  senderId: z.lazy(() => SortOrderSchema).optional(),
  receiverId: z.lazy(() => SortOrderSchema).optional(),
  channelId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => MessageCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => MessageMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => MessageMinOrderByAggregateInputSchema).optional()
}).strict();
var MessageScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => MessageScalarWhereWithAggregatesInputSchema), z.lazy(() => MessageScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => MessageScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => MessageScalarWhereWithAggregatesInputSchema), z.lazy(() => MessageScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  text: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  senderId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  receiverId: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  channelId: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
}).strict();
var UserNotificationsWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => UserNotificationsWhereInputSchema), z.lazy(() => UserNotificationsWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => UserNotificationsWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserNotificationsWhereInputSchema), z.lazy(() => UserNotificationsWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  payload: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable()
}).strict();
var UserNotificationsOrderByWithRelationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  payload: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();
var UserNotificationsWhereUniqueInputSchema = z.object({
  id: z.string().cuid().optional()
}).strict();
var UserNotificationsOrderByWithAggregationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  payload: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserNotificationsCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserNotificationsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserNotificationsMinOrderByAggregateInputSchema).optional()
}).strict();
var UserNotificationsScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => UserNotificationsScalarWhereWithAggregatesInputSchema), z.lazy(() => UserNotificationsScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => UserNotificationsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserNotificationsScalarWhereWithAggregatesInputSchema), z.lazy(() => UserNotificationsScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  payload: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable()
}).strict();
var InvitationCodeWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => InvitationCodeWhereInputSchema), z.lazy(() => InvitationCodeWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => InvitationCodeWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => InvitationCodeWhereInputSchema), z.lazy(() => InvitationCodeWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  role: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable()
}).strict();
var InvitationCodeOrderByWithRelationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();
var InvitationCodeWhereUniqueInputSchema = z.object({
  id: z.string().cuid().optional()
}).strict();
var InvitationCodeOrderByWithAggregationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => InvitationCodeCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => InvitationCodeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => InvitationCodeMinOrderByAggregateInputSchema).optional()
}).strict();
var InvitationCodeScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => InvitationCodeScalarWhereWithAggregatesInputSchema), z.lazy(() => InvitationCodeScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => InvitationCodeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => InvitationCodeScalarWhereWithAggregatesInputSchema), z.lazy(() => InvitationCodeScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  role: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable()
}).strict();
var OrganisationCreateInputSchema = z.object({
  publicId: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  membership: z.lazy(() => MembershipCreateNestedManyWithoutOrganizationInputSchema).optional(),
  channels: z.lazy(() => ChannelCreateNestedManyWithoutOrganisationInputSchema).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationCreateNestedManyWithoutOrganisationInputSchema).optional()
}).strict();
var OrganisationUncheckedCreateInputSchema = z.object({
  id: z.number().int().optional(),
  publicId: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  membership: z.lazy(() => MembershipUncheckedCreateNestedManyWithoutOrganizationInputSchema).optional(),
  channels: z.lazy(() => ChannelUncheckedCreateNestedManyWithoutOrganisationInputSchema).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationUncheckedCreateNestedManyWithoutOrganisationInputSchema).optional()
}).strict();
var OrganisationUpdateInputSchema = z.object({
  publicId: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  membership: z.lazy(() => MembershipUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  channels: z.lazy(() => ChannelUpdateManyWithoutOrganisationNestedInputSchema).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationUpdateManyWithoutOrganisationNestedInputSchema).optional()
}).strict();
var OrganisationUncheckedUpdateInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  publicId: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  membership: z.lazy(() => MembershipUncheckedUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  channels: z.lazy(() => ChannelUncheckedUpdateManyWithoutOrganisationNestedInputSchema).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationUncheckedUpdateManyWithoutOrganisationNestedInputSchema).optional()
}).strict();
var OrganisationCreateManyInputSchema = z.object({
  id: z.number().int().optional(),
  publicId: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
var OrganisationUpdateManyMutationInputSchema = z.object({
  publicId: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var OrganisationUncheckedUpdateManyInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  publicId: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var OrganisationInvitationCreateInputSchema = z.object({
  publicId: z.string().cuid().optional(),
  issuedEmail: z.string(),
  createdAt: z.coerce.date().optional(),
  expiresAt: z.coerce.date(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutOrganisationInvitationInputSchema),
  organisation: z.lazy(() => OrganisationCreateNestedOneWithoutOrganisationInvitationInputSchema)
}).strict();
var OrganisationInvitationUncheckedCreateInputSchema = z.object({
  id: z.number().int().optional(),
  publicId: z.string().cuid().optional(),
  issuedEmail: z.string(),
  createdAt: z.coerce.date().optional(),
  expiresAt: z.coerce.date(),
  creatorId: z.number().int(),
  organizationId: z.number().int()
}).strict();
var OrganisationInvitationUpdateInputSchema = z.object({
  publicId: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  issuedEmail: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  expiresAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  createdBy: z.lazy(() => UserUpdateOneRequiredWithoutOrganisationInvitationNestedInputSchema).optional(),
  organisation: z.lazy(() => OrganisationUpdateOneRequiredWithoutOrganisationInvitationNestedInputSchema).optional()
}).strict();
var OrganisationInvitationUncheckedUpdateInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  publicId: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  issuedEmail: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  expiresAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  creatorId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  organizationId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var OrganisationInvitationCreateManyInputSchema = z.object({
  id: z.number().int().optional(),
  publicId: z.string().cuid().optional(),
  issuedEmail: z.string(),
  createdAt: z.coerce.date().optional(),
  expiresAt: z.coerce.date(),
  creatorId: z.number().int(),
  organizationId: z.number().int()
}).strict();
var OrganisationInvitationUpdateManyMutationInputSchema = z.object({
  publicId: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  issuedEmail: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  expiresAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var OrganisationInvitationUncheckedUpdateManyInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  publicId: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  issuedEmail: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  expiresAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  creatorId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  organizationId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var MembershipCreateInputSchema = z.object({
  role: z.lazy(() => MembershipRoleSchema),
  invitedName: z.string().optional().nullable(),
  invitedEmail: z.string().optional().nullable(),
  organization: z.lazy(() => OrganisationCreateNestedOneWithoutMembershipInputSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutMembershipsInputSchema).optional()
}).strict();
var MembershipUncheckedCreateInputSchema = z.object({
  id: z.number().int().optional(),
  role: z.lazy(() => MembershipRoleSchema),
  organizationId: z.number().int(),
  userId: z.number().int().optional().nullable(),
  invitedName: z.string().optional().nullable(),
  invitedEmail: z.string().optional().nullable()
}).strict();
var MembershipUpdateInputSchema = z.object({
  role: z.union([z.lazy(() => MembershipRoleSchema), z.lazy(() => EnumMembershipRoleFieldUpdateOperationsInputSchema)]).optional(),
  invitedName: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  invitedEmail: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  organization: z.lazy(() => OrganisationUpdateOneRequiredWithoutMembershipNestedInputSchema).optional(),
  user: z.lazy(() => UserUpdateOneWithoutMembershipsNestedInputSchema).optional()
}).strict();
var MembershipUncheckedUpdateInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  role: z.union([z.lazy(() => MembershipRoleSchema), z.lazy(() => EnumMembershipRoleFieldUpdateOperationsInputSchema)]).optional(),
  organizationId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  userId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  invitedName: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  invitedEmail: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var MembershipCreateManyInputSchema = z.object({
  id: z.number().int().optional(),
  role: z.lazy(() => MembershipRoleSchema),
  organizationId: z.number().int(),
  userId: z.number().int().optional().nullable(),
  invitedName: z.string().optional().nullable(),
  invitedEmail: z.string().optional().nullable()
}).strict();
var MembershipUpdateManyMutationInputSchema = z.object({
  role: z.union([z.lazy(() => MembershipRoleSchema), z.lazy(() => EnumMembershipRoleFieldUpdateOperationsInputSchema)]).optional(),
  invitedName: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  invitedEmail: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var MembershipUncheckedUpdateManyInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  role: z.union([z.lazy(() => MembershipRoleSchema), z.lazy(() => EnumMembershipRoleFieldUpdateOperationsInputSchema)]).optional(),
  organizationId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  userId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  invitedName: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  invitedEmail: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var UserCreateInputSchema = z.object({
  publicId: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
  role: z.lazy(() => GlobalRoleSchema),
  userProfile: z.lazy(() => UserProfileCreateNestedOneWithoutUserInputSchema).optional(),
  memberships: z.lazy(() => MembershipCreateNestedManyWithoutUserInputSchema).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationCreateNestedManyWithoutCreatedByInputSchema).optional()
}).strict();
var UserUncheckedCreateInputSchema = z.object({
  id: z.number().int().optional(),
  publicId: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
  role: z.lazy(() => GlobalRoleSchema),
  userProfileId: z.number().int(),
  memberships: z.lazy(() => MembershipUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationUncheckedCreateNestedManyWithoutCreatedByInputSchema).optional()
}).strict();
var UserUpdateInputSchema = z.object({
  publicId: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  role: z.union([z.lazy(() => GlobalRoleSchema), z.lazy(() => EnumGlobalRoleFieldUpdateOperationsInputSchema)]).optional(),
  userProfile: z.lazy(() => UserProfileUpdateOneWithoutUserNestedInputSchema).optional(),
  memberships: z.lazy(() => MembershipUpdateManyWithoutUserNestedInputSchema).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationUpdateManyWithoutCreatedByNestedInputSchema).optional()
}).strict();
var UserUncheckedUpdateInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  publicId: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  role: z.union([z.lazy(() => GlobalRoleSchema), z.lazy(() => EnumGlobalRoleFieldUpdateOperationsInputSchema)]).optional(),
  userProfileId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  memberships: z.lazy(() => MembershipUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationUncheckedUpdateManyWithoutCreatedByNestedInputSchema).optional()
}).strict();
var UserCreateManyInputSchema = z.object({
  id: z.number().int().optional(),
  publicId: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
  role: z.lazy(() => GlobalRoleSchema),
  userProfileId: z.number().int()
}).strict();
var UserUpdateManyMutationInputSchema = z.object({
  publicId: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  role: z.union([z.lazy(() => GlobalRoleSchema), z.lazy(() => EnumGlobalRoleFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var UserUncheckedUpdateManyInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  publicId: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  role: z.union([z.lazy(() => GlobalRoleSchema), z.lazy(() => EnumGlobalRoleFieldUpdateOperationsInputSchema)]).optional(),
  userProfileId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var UserProfileCreateInputSchema = z.object({
  publicId: z.string().cuid().optional(),
  profilePictureUrl: z.string().optional().nullable(),
  profileColor: z.string().optional(),
  username: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  User: z.lazy(() => UserCreateNestedManyWithoutUserProfileInputSchema).optional()
}).strict();
var UserProfileUncheckedCreateInputSchema = z.object({
  id: z.number().int().optional(),
  publicId: z.string().cuid().optional(),
  profilePictureUrl: z.string().optional().nullable(),
  profileColor: z.string().optional(),
  username: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  User: z.lazy(() => UserUncheckedCreateNestedManyWithoutUserProfileInputSchema).optional()
}).strict();
var UserProfileUpdateInputSchema = z.object({
  publicId: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  profilePictureUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  profileColor: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  username: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  User: z.lazy(() => UserUpdateManyWithoutUserProfileNestedInputSchema).optional()
}).strict();
var UserProfileUncheckedUpdateInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  publicId: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  profilePictureUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  profileColor: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  username: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  User: z.lazy(() => UserUncheckedUpdateManyWithoutUserProfileNestedInputSchema).optional()
}).strict();
var UserProfileCreateManyInputSchema = z.object({
  id: z.number().int().optional(),
  publicId: z.string().cuid().optional(),
  profilePictureUrl: z.string().optional().nullable(),
  profileColor: z.string().optional(),
  username: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
var UserProfileUpdateManyMutationInputSchema = z.object({
  publicId: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  profilePictureUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  profileColor: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  username: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var UserProfileUncheckedUpdateManyInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  publicId: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  profilePictureUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  profileColor: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  username: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var ChannelCreateInputSchema = z.object({
  id: z.string().cuid().optional(),
  kind: z.lazy(() => ChannelKindSchema).optional(),
  createdBy: z.string(),
  name: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Organisation: z.lazy(() => OrganisationCreateNestedOneWithoutChannelsInputSchema).optional()
}).strict();
var ChannelUncheckedCreateInputSchema = z.object({
  id: z.string().cuid().optional(),
  kind: z.lazy(() => ChannelKindSchema).optional(),
  createdBy: z.string(),
  name: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  organisationId: z.string().optional().nullable()
}).strict();
var ChannelUpdateInputSchema = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  kind: z.union([z.lazy(() => ChannelKindSchema), z.lazy(() => EnumChannelKindFieldUpdateOperationsInputSchema)]).optional(),
  createdBy: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  Organisation: z.lazy(() => OrganisationUpdateOneWithoutChannelsNestedInputSchema).optional()
}).strict();
var ChannelUncheckedUpdateInputSchema = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  kind: z.union([z.lazy(() => ChannelKindSchema), z.lazy(() => EnumChannelKindFieldUpdateOperationsInputSchema)]).optional(),
  createdBy: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  organisationId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var ChannelCreateManyInputSchema = z.object({
  id: z.string().cuid().optional(),
  kind: z.lazy(() => ChannelKindSchema).optional(),
  createdBy: z.string(),
  name: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  organisationId: z.string().optional().nullable()
}).strict();
var ChannelUpdateManyMutationInputSchema = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  kind: z.union([z.lazy(() => ChannelKindSchema), z.lazy(() => EnumChannelKindFieldUpdateOperationsInputSchema)]).optional(),
  createdBy: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var ChannelUncheckedUpdateManyInputSchema = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  kind: z.union([z.lazy(() => ChannelKindSchema), z.lazy(() => EnumChannelKindFieldUpdateOperationsInputSchema)]).optional(),
  createdBy: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  organisationId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var MediaCreateInputSchema = z.object({
  id: z.string().cuid().optional(),
  kind: z.string(),
  filename: z.string(),
  size: z.number().int(),
  width: z.number().int().optional(),
  height: z.number().int().optional(),
  path: z.string(),
  createdAt: z.coerce.date().optional(),
  Message: z.lazy(() => MessageCreateNestedOneWithoutMediaInputSchema).optional()
}).strict();
var MediaUncheckedCreateInputSchema = z.object({
  id: z.string().cuid().optional(),
  kind: z.string(),
  filename: z.string(),
  size: z.number().int(),
  width: z.number().int().optional(),
  height: z.number().int().optional(),
  path: z.string(),
  createdAt: z.coerce.date().optional(),
  messageId: z.string().optional().nullable()
}).strict();
var MediaUpdateInputSchema = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  kind: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  filename: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  size: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  width: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  height: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  path: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  Message: z.lazy(() => MessageUpdateOneWithoutMediaNestedInputSchema).optional()
}).strict();
var MediaUncheckedUpdateInputSchema = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  kind: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  filename: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  size: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  width: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  height: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  path: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  messageId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var MediaCreateManyInputSchema = z.object({
  id: z.string().cuid().optional(),
  kind: z.string(),
  filename: z.string(),
  size: z.number().int(),
  width: z.number().int().optional(),
  height: z.number().int().optional(),
  path: z.string(),
  createdAt: z.coerce.date().optional(),
  messageId: z.string().optional().nullable()
}).strict();
var MediaUpdateManyMutationInputSchema = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  kind: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  filename: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  size: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  width: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  height: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  path: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var MediaUncheckedUpdateManyInputSchema = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  kind: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  filename: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  size: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  width: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  height: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  path: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  messageId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var MessageCreateInputSchema = z.object({
  id: z.string().cuid().optional(),
  text: z.string(),
  senderId: z.string(),
  receiverId: z.string().optional().nullable(),
  channelId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  media: z.lazy(() => MediaCreateNestedManyWithoutMessageInputSchema).optional()
}).strict();
var MessageUncheckedCreateInputSchema = z.object({
  id: z.string().cuid().optional(),
  text: z.string(),
  senderId: z.string(),
  receiverId: z.string().optional().nullable(),
  channelId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  media: z.lazy(() => MediaUncheckedCreateNestedManyWithoutMessageInputSchema).optional()
}).strict();
var MessageUpdateInputSchema = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  text: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  senderId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  receiverId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  channelId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  media: z.lazy(() => MediaUpdateManyWithoutMessageNestedInputSchema).optional()
}).strict();
var MessageUncheckedUpdateInputSchema = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  text: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  senderId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  receiverId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  channelId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  media: z.lazy(() => MediaUncheckedUpdateManyWithoutMessageNestedInputSchema).optional()
}).strict();
var MessageCreateManyInputSchema = z.object({
  id: z.string().cuid().optional(),
  text: z.string(),
  senderId: z.string(),
  receiverId: z.string().optional().nullable(),
  channelId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
var MessageUpdateManyMutationInputSchema = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  text: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  senderId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  receiverId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  channelId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var MessageUncheckedUpdateManyInputSchema = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  text: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  senderId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  receiverId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  channelId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var UserNotificationsCreateInputSchema = z.object({
  id: z.string().cuid().optional(),
  payload: z.string(),
  userId: z.string().optional().nullable()
}).strict();
var UserNotificationsUncheckedCreateInputSchema = z.object({
  id: z.string().cuid().optional(),
  payload: z.string(),
  userId: z.string().optional().nullable()
}).strict();
var UserNotificationsUpdateInputSchema = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  payload: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var UserNotificationsUncheckedUpdateInputSchema = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  payload: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var UserNotificationsCreateManyInputSchema = z.object({
  id: z.string().cuid().optional(),
  payload: z.string(),
  userId: z.string().optional().nullable()
}).strict();
var UserNotificationsUpdateManyMutationInputSchema = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  payload: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var UserNotificationsUncheckedUpdateManyInputSchema = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  payload: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var InvitationCodeCreateInputSchema = z.object({
  id: z.string().cuid().optional(),
  role: z.string(),
  userId: z.string().optional().nullable()
}).strict();
var InvitationCodeUncheckedCreateInputSchema = z.object({
  id: z.string().cuid().optional(),
  role: z.string(),
  userId: z.string().optional().nullable()
}).strict();
var InvitationCodeUpdateInputSchema = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  role: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var InvitationCodeUncheckedUpdateInputSchema = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  role: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var InvitationCodeCreateManyInputSchema = z.object({
  id: z.string().cuid().optional(),
  role: z.string(),
  userId: z.string().optional().nullable()
}).strict();
var InvitationCodeUpdateManyMutationInputSchema = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  role: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var InvitationCodeUncheckedUpdateManyInputSchema = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  role: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var IntFilterSchema = z.object({
  equals: z.number().optional(),
  in: z.union([z.number().array(), z.number()]).optional(),
  notIn: z.union([z.number().array(), z.number()]).optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedIntFilterSchema)]).optional()
}).strict();
var StringFilterSchema = z.object({
  equals: z.string().optional(),
  in: z.union([z.string().array(), z.string()]).optional(),
  notIn: z.union([z.string().array(), z.string()]).optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringFilterSchema)]).optional()
}).strict();
var DateTimeFilterSchema = z.object({
  equals: z.coerce.date().optional(),
  in: z.union([z.coerce.date().array(), z.coerce.date()]).optional(),
  notIn: z.union([z.coerce.date().array(), z.coerce.date()]).optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)]).optional()
}).strict();
var MembershipListRelationFilterSchema = z.object({
  every: z.lazy(() => MembershipWhereInputSchema).optional(),
  some: z.lazy(() => MembershipWhereInputSchema).optional(),
  none: z.lazy(() => MembershipWhereInputSchema).optional()
}).strict();
var ChannelListRelationFilterSchema = z.object({
  every: z.lazy(() => ChannelWhereInputSchema).optional(),
  some: z.lazy(() => ChannelWhereInputSchema).optional(),
  none: z.lazy(() => ChannelWhereInputSchema).optional()
}).strict();
var OrganisationInvitationListRelationFilterSchema = z.object({
  every: z.lazy(() => OrganisationInvitationWhereInputSchema).optional(),
  some: z.lazy(() => OrganisationInvitationWhereInputSchema).optional(),
  none: z.lazy(() => OrganisationInvitationWhereInputSchema).optional()
}).strict();
var MembershipOrderByRelationAggregateInputSchema = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();
var ChannelOrderByRelationAggregateInputSchema = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();
var OrganisationInvitationOrderByRelationAggregateInputSchema = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();
var OrganisationCountOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  publicId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();
var OrganisationAvgOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();
var OrganisationMaxOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  publicId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();
var OrganisationMinOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  publicId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();
var OrganisationSumOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();
var IntWithAggregatesFilterSchema = z.object({
  equals: z.number().optional(),
  in: z.union([z.number().array(), z.number()]).optional(),
  notIn: z.union([z.number().array(), z.number()]).optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedIntWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();
var StringWithAggregatesFilterSchema = z.object({
  equals: z.string().optional(),
  in: z.union([z.string().array(), z.string()]).optional(),
  notIn: z.union([z.string().array(), z.string()]).optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();
var DateTimeWithAggregatesFilterSchema = z.object({
  equals: z.coerce.date().optional(),
  in: z.union([z.coerce.date().array(), z.coerce.date()]).optional(),
  notIn: z.union([z.coerce.date().array(), z.coerce.date()]).optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([z.coerce.date(), z.lazy(() => NestedDateTimeWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();
var UserRelationFilterSchema = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional(),
  isNot: z.lazy(() => UserWhereInputSchema).optional()
}).strict();
var OrganisationRelationFilterSchema = z.object({
  is: z.lazy(() => OrganisationWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => OrganisationWhereInputSchema).optional().nullable()
}).strict();
var OrganisationInvitationCountOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  publicId: z.lazy(() => SortOrderSchema).optional(),
  issuedEmail: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  creatorId: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional()
}).strict();
var OrganisationInvitationAvgOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  creatorId: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional()
}).strict();
var OrganisationInvitationMaxOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  publicId: z.lazy(() => SortOrderSchema).optional(),
  issuedEmail: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  creatorId: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional()
}).strict();
var OrganisationInvitationMinOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  publicId: z.lazy(() => SortOrderSchema).optional(),
  issuedEmail: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  creatorId: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional()
}).strict();
var OrganisationInvitationSumOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  creatorId: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional()
}).strict();
var EnumMembershipRoleFilterSchema = z.object({
  equals: z.lazy(() => MembershipRoleSchema).optional(),
  in: z.union([z.lazy(() => MembershipRoleSchema).array(), z.lazy(() => MembershipRoleSchema)]).optional(),
  notIn: z.union([z.lazy(() => MembershipRoleSchema).array(), z.lazy(() => MembershipRoleSchema)]).optional(),
  not: z.union([z.lazy(() => MembershipRoleSchema), z.lazy(() => NestedEnumMembershipRoleFilterSchema)]).optional()
}).strict();
var IntNullableFilterSchema = z.object({
  equals: z.number().optional().nullable(),
  in: z.union([z.number().array(), z.number()]).optional().nullable(),
  notIn: z.union([z.number().array(), z.number()]).optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedIntNullableFilterSchema)]).optional().nullable()
}).strict();
var StringNullableFilterSchema = z.object({
  equals: z.string().optional().nullable(),
  in: z.union([z.string().array(), z.string()]).optional().nullable(),
  notIn: z.union([z.string().array(), z.string()]).optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringNullableFilterSchema)]).optional().nullable()
}).strict();
var MembershipOrganizationIdInvitedEmailCompoundUniqueInputSchema = z.object({
  organizationId: z.number(),
  invitedEmail: z.string()
}).strict();
var MembershipCountOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  invitedName: z.lazy(() => SortOrderSchema).optional(),
  invitedEmail: z.lazy(() => SortOrderSchema).optional()
}).strict();
var MembershipAvgOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();
var MembershipMaxOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  invitedName: z.lazy(() => SortOrderSchema).optional(),
  invitedEmail: z.lazy(() => SortOrderSchema).optional()
}).strict();
var MembershipMinOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  invitedName: z.lazy(() => SortOrderSchema).optional(),
  invitedEmail: z.lazy(() => SortOrderSchema).optional()
}).strict();
var MembershipSumOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();
var EnumMembershipRoleWithAggregatesFilterSchema = z.object({
  equals: z.lazy(() => MembershipRoleSchema).optional(),
  in: z.union([z.lazy(() => MembershipRoleSchema).array(), z.lazy(() => MembershipRoleSchema)]).optional(),
  notIn: z.union([z.lazy(() => MembershipRoleSchema).array(), z.lazy(() => MembershipRoleSchema)]).optional(),
  not: z.union([z.lazy(() => MembershipRoleSchema), z.lazy(() => NestedEnumMembershipRoleWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumMembershipRoleFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumMembershipRoleFilterSchema).optional()
}).strict();
var IntNullableWithAggregatesFilterSchema = z.object({
  equals: z.number().optional().nullable(),
  in: z.union([z.number().array(), z.number()]).optional().nullable(),
  notIn: z.union([z.number().array(), z.number()]).optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedIntNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();
var StringNullableWithAggregatesFilterSchema = z.object({
  equals: z.string().optional().nullable(),
  in: z.union([z.string().array(), z.string()]).optional().nullable(),
  notIn: z.union([z.string().array(), z.string()]).optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();
var EnumGlobalRoleFilterSchema = z.object({
  equals: z.lazy(() => GlobalRoleSchema).optional(),
  in: z.union([z.lazy(() => GlobalRoleSchema).array(), z.lazy(() => GlobalRoleSchema)]).optional(),
  notIn: z.union([z.lazy(() => GlobalRoleSchema).array(), z.lazy(() => GlobalRoleSchema)]).optional(),
  not: z.union([z.lazy(() => GlobalRoleSchema), z.lazy(() => NestedEnumGlobalRoleFilterSchema)]).optional()
}).strict();
var UserProfileRelationFilterSchema = z.object({
  is: z.lazy(() => UserProfileWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => UserProfileWhereInputSchema).optional().nullable()
}).strict();
var UserCountOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  publicId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  userProfileId: z.lazy(() => SortOrderSchema).optional()
}).strict();
var UserAvgOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userProfileId: z.lazy(() => SortOrderSchema).optional()
}).strict();
var UserMaxOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  publicId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  userProfileId: z.lazy(() => SortOrderSchema).optional()
}).strict();
var UserMinOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  publicId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  userProfileId: z.lazy(() => SortOrderSchema).optional()
}).strict();
var UserSumOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userProfileId: z.lazy(() => SortOrderSchema).optional()
}).strict();
var EnumGlobalRoleWithAggregatesFilterSchema = z.object({
  equals: z.lazy(() => GlobalRoleSchema).optional(),
  in: z.union([z.lazy(() => GlobalRoleSchema).array(), z.lazy(() => GlobalRoleSchema)]).optional(),
  notIn: z.union([z.lazy(() => GlobalRoleSchema).array(), z.lazy(() => GlobalRoleSchema)]).optional(),
  not: z.union([z.lazy(() => GlobalRoleSchema), z.lazy(() => NestedEnumGlobalRoleWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumGlobalRoleFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumGlobalRoleFilterSchema).optional()
}).strict();
var UserListRelationFilterSchema = z.object({
  every: z.lazy(() => UserWhereInputSchema).optional(),
  some: z.lazy(() => UserWhereInputSchema).optional(),
  none: z.lazy(() => UserWhereInputSchema).optional()
}).strict();
var UserOrderByRelationAggregateInputSchema = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();
var UserProfileCountOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  publicId: z.lazy(() => SortOrderSchema).optional(),
  profilePictureUrl: z.lazy(() => SortOrderSchema).optional(),
  profileColor: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();
var UserProfileAvgOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();
var UserProfileMaxOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  publicId: z.lazy(() => SortOrderSchema).optional(),
  profilePictureUrl: z.lazy(() => SortOrderSchema).optional(),
  profileColor: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();
var UserProfileMinOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  publicId: z.lazy(() => SortOrderSchema).optional(),
  profilePictureUrl: z.lazy(() => SortOrderSchema).optional(),
  profileColor: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();
var UserProfileSumOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();
var EnumChannelKindFilterSchema = z.object({
  equals: z.lazy(() => ChannelKindSchema).optional(),
  in: z.union([z.lazy(() => ChannelKindSchema).array(), z.lazy(() => ChannelKindSchema)]).optional(),
  notIn: z.union([z.lazy(() => ChannelKindSchema).array(), z.lazy(() => ChannelKindSchema)]).optional(),
  not: z.union([z.lazy(() => ChannelKindSchema), z.lazy(() => NestedEnumChannelKindFilterSchema)]).optional()
}).strict();
var ChannelCountOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  kind: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  organisationId: z.lazy(() => SortOrderSchema).optional()
}).strict();
var ChannelMaxOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  kind: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  organisationId: z.lazy(() => SortOrderSchema).optional()
}).strict();
var ChannelMinOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  kind: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  organisationId: z.lazy(() => SortOrderSchema).optional()
}).strict();
var EnumChannelKindWithAggregatesFilterSchema = z.object({
  equals: z.lazy(() => ChannelKindSchema).optional(),
  in: z.union([z.lazy(() => ChannelKindSchema).array(), z.lazy(() => ChannelKindSchema)]).optional(),
  notIn: z.union([z.lazy(() => ChannelKindSchema).array(), z.lazy(() => ChannelKindSchema)]).optional(),
  not: z.union([z.lazy(() => ChannelKindSchema), z.lazy(() => NestedEnumChannelKindWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumChannelKindFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumChannelKindFilterSchema).optional()
}).strict();
var MessageRelationFilterSchema = z.object({
  is: z.lazy(() => MessageWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => MessageWhereInputSchema).optional().nullable()
}).strict();
var MediaCountOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  kind: z.lazy(() => SortOrderSchema).optional(),
  filename: z.lazy(() => SortOrderSchema).optional(),
  size: z.lazy(() => SortOrderSchema).optional(),
  width: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional(),
  path: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  messageId: z.lazy(() => SortOrderSchema).optional()
}).strict();
var MediaAvgOrderByAggregateInputSchema = z.object({
  size: z.lazy(() => SortOrderSchema).optional(),
  width: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional()
}).strict();
var MediaMaxOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  kind: z.lazy(() => SortOrderSchema).optional(),
  filename: z.lazy(() => SortOrderSchema).optional(),
  size: z.lazy(() => SortOrderSchema).optional(),
  width: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional(),
  path: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  messageId: z.lazy(() => SortOrderSchema).optional()
}).strict();
var MediaMinOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  kind: z.lazy(() => SortOrderSchema).optional(),
  filename: z.lazy(() => SortOrderSchema).optional(),
  size: z.lazy(() => SortOrderSchema).optional(),
  width: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional(),
  path: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  messageId: z.lazy(() => SortOrderSchema).optional()
}).strict();
var MediaSumOrderByAggregateInputSchema = z.object({
  size: z.lazy(() => SortOrderSchema).optional(),
  width: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional()
}).strict();
var MediaListRelationFilterSchema = z.object({
  every: z.lazy(() => MediaWhereInputSchema).optional(),
  some: z.lazy(() => MediaWhereInputSchema).optional(),
  none: z.lazy(() => MediaWhereInputSchema).optional()
}).strict();
var MediaOrderByRelationAggregateInputSchema = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();
var MessageCountOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  senderId: z.lazy(() => SortOrderSchema).optional(),
  receiverId: z.lazy(() => SortOrderSchema).optional(),
  channelId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();
var MessageMaxOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  senderId: z.lazy(() => SortOrderSchema).optional(),
  receiverId: z.lazy(() => SortOrderSchema).optional(),
  channelId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();
var MessageMinOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  senderId: z.lazy(() => SortOrderSchema).optional(),
  receiverId: z.lazy(() => SortOrderSchema).optional(),
  channelId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();
var UserNotificationsCountOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  payload: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();
var UserNotificationsMaxOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  payload: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();
var UserNotificationsMinOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  payload: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();
var InvitationCodeCountOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();
var InvitationCodeMaxOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();
var InvitationCodeMinOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();
var MembershipCreateNestedManyWithoutOrganizationInputSchema = z.object({
  create: z.union([z.lazy(() => MembershipCreateWithoutOrganizationInputSchema), z.lazy(() => MembershipCreateWithoutOrganizationInputSchema).array(), z.lazy(() => MembershipUncheckedCreateWithoutOrganizationInputSchema), z.lazy(() => MembershipUncheckedCreateWithoutOrganizationInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MembershipCreateOrConnectWithoutOrganizationInputSchema), z.lazy(() => MembershipCreateOrConnectWithoutOrganizationInputSchema).array()]).optional(),
  createMany: z.lazy(() => MembershipCreateManyOrganizationInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => MembershipWhereUniqueInputSchema), z.lazy(() => MembershipWhereUniqueInputSchema).array()]).optional()
}).strict();
var ChannelCreateNestedManyWithoutOrganisationInputSchema = z.object({
  create: z.union([z.lazy(() => ChannelCreateWithoutOrganisationInputSchema), z.lazy(() => ChannelCreateWithoutOrganisationInputSchema).array(), z.lazy(() => ChannelUncheckedCreateWithoutOrganisationInputSchema), z.lazy(() => ChannelUncheckedCreateWithoutOrganisationInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ChannelCreateOrConnectWithoutOrganisationInputSchema), z.lazy(() => ChannelCreateOrConnectWithoutOrganisationInputSchema).array()]).optional(),
  createMany: z.lazy(() => ChannelCreateManyOrganisationInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => ChannelWhereUniqueInputSchema), z.lazy(() => ChannelWhereUniqueInputSchema).array()]).optional()
}).strict();
var OrganisationInvitationCreateNestedManyWithoutOrganisationInputSchema = z.object({
  create: z.union([z.lazy(() => OrganisationInvitationCreateWithoutOrganisationInputSchema), z.lazy(() => OrganisationInvitationCreateWithoutOrganisationInputSchema).array(), z.lazy(() => OrganisationInvitationUncheckedCreateWithoutOrganisationInputSchema), z.lazy(() => OrganisationInvitationUncheckedCreateWithoutOrganisationInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrganisationInvitationCreateOrConnectWithoutOrganisationInputSchema), z.lazy(() => OrganisationInvitationCreateOrConnectWithoutOrganisationInputSchema).array()]).optional(),
  createMany: z.lazy(() => OrganisationInvitationCreateManyOrganisationInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => OrganisationInvitationWhereUniqueInputSchema), z.lazy(() => OrganisationInvitationWhereUniqueInputSchema).array()]).optional()
}).strict();
var MembershipUncheckedCreateNestedManyWithoutOrganizationInputSchema = z.object({
  create: z.union([z.lazy(() => MembershipCreateWithoutOrganizationInputSchema), z.lazy(() => MembershipCreateWithoutOrganizationInputSchema).array(), z.lazy(() => MembershipUncheckedCreateWithoutOrganizationInputSchema), z.lazy(() => MembershipUncheckedCreateWithoutOrganizationInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MembershipCreateOrConnectWithoutOrganizationInputSchema), z.lazy(() => MembershipCreateOrConnectWithoutOrganizationInputSchema).array()]).optional(),
  createMany: z.lazy(() => MembershipCreateManyOrganizationInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => MembershipWhereUniqueInputSchema), z.lazy(() => MembershipWhereUniqueInputSchema).array()]).optional()
}).strict();
var ChannelUncheckedCreateNestedManyWithoutOrganisationInputSchema = z.object({
  create: z.union([z.lazy(() => ChannelCreateWithoutOrganisationInputSchema), z.lazy(() => ChannelCreateWithoutOrganisationInputSchema).array(), z.lazy(() => ChannelUncheckedCreateWithoutOrganisationInputSchema), z.lazy(() => ChannelUncheckedCreateWithoutOrganisationInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ChannelCreateOrConnectWithoutOrganisationInputSchema), z.lazy(() => ChannelCreateOrConnectWithoutOrganisationInputSchema).array()]).optional(),
  createMany: z.lazy(() => ChannelCreateManyOrganisationInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => ChannelWhereUniqueInputSchema), z.lazy(() => ChannelWhereUniqueInputSchema).array()]).optional()
}).strict();
var OrganisationInvitationUncheckedCreateNestedManyWithoutOrganisationInputSchema = z.object({
  create: z.union([z.lazy(() => OrganisationInvitationCreateWithoutOrganisationInputSchema), z.lazy(() => OrganisationInvitationCreateWithoutOrganisationInputSchema).array(), z.lazy(() => OrganisationInvitationUncheckedCreateWithoutOrganisationInputSchema), z.lazy(() => OrganisationInvitationUncheckedCreateWithoutOrganisationInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrganisationInvitationCreateOrConnectWithoutOrganisationInputSchema), z.lazy(() => OrganisationInvitationCreateOrConnectWithoutOrganisationInputSchema).array()]).optional(),
  createMany: z.lazy(() => OrganisationInvitationCreateManyOrganisationInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => OrganisationInvitationWhereUniqueInputSchema), z.lazy(() => OrganisationInvitationWhereUniqueInputSchema).array()]).optional()
}).strict();
var StringFieldUpdateOperationsInputSchema = z.object({
  set: z.string().optional()
}).strict();
var DateTimeFieldUpdateOperationsInputSchema = z.object({
  set: z.coerce.date().optional()
}).strict();
var MembershipUpdateManyWithoutOrganizationNestedInputSchema = z.object({
  create: z.union([z.lazy(() => MembershipCreateWithoutOrganizationInputSchema), z.lazy(() => MembershipCreateWithoutOrganizationInputSchema).array(), z.lazy(() => MembershipUncheckedCreateWithoutOrganizationInputSchema), z.lazy(() => MembershipUncheckedCreateWithoutOrganizationInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MembershipCreateOrConnectWithoutOrganizationInputSchema), z.lazy(() => MembershipCreateOrConnectWithoutOrganizationInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MembershipUpsertWithWhereUniqueWithoutOrganizationInputSchema), z.lazy(() => MembershipUpsertWithWhereUniqueWithoutOrganizationInputSchema).array()]).optional(),
  createMany: z.lazy(() => MembershipCreateManyOrganizationInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => MembershipWhereUniqueInputSchema), z.lazy(() => MembershipWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MembershipWhereUniqueInputSchema), z.lazy(() => MembershipWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MembershipWhereUniqueInputSchema), z.lazy(() => MembershipWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MembershipWhereUniqueInputSchema), z.lazy(() => MembershipWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => MembershipUpdateWithWhereUniqueWithoutOrganizationInputSchema), z.lazy(() => MembershipUpdateWithWhereUniqueWithoutOrganizationInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MembershipUpdateManyWithWhereWithoutOrganizationInputSchema), z.lazy(() => MembershipUpdateManyWithWhereWithoutOrganizationInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MembershipScalarWhereInputSchema), z.lazy(() => MembershipScalarWhereInputSchema).array()]).optional()
}).strict();
var ChannelUpdateManyWithoutOrganisationNestedInputSchema = z.object({
  create: z.union([z.lazy(() => ChannelCreateWithoutOrganisationInputSchema), z.lazy(() => ChannelCreateWithoutOrganisationInputSchema).array(), z.lazy(() => ChannelUncheckedCreateWithoutOrganisationInputSchema), z.lazy(() => ChannelUncheckedCreateWithoutOrganisationInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ChannelCreateOrConnectWithoutOrganisationInputSchema), z.lazy(() => ChannelCreateOrConnectWithoutOrganisationInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ChannelUpsertWithWhereUniqueWithoutOrganisationInputSchema), z.lazy(() => ChannelUpsertWithWhereUniqueWithoutOrganisationInputSchema).array()]).optional(),
  createMany: z.lazy(() => ChannelCreateManyOrganisationInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => ChannelWhereUniqueInputSchema), z.lazy(() => ChannelWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ChannelWhereUniqueInputSchema), z.lazy(() => ChannelWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ChannelWhereUniqueInputSchema), z.lazy(() => ChannelWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ChannelWhereUniqueInputSchema), z.lazy(() => ChannelWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => ChannelUpdateWithWhereUniqueWithoutOrganisationInputSchema), z.lazy(() => ChannelUpdateWithWhereUniqueWithoutOrganisationInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ChannelUpdateManyWithWhereWithoutOrganisationInputSchema), z.lazy(() => ChannelUpdateManyWithWhereWithoutOrganisationInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ChannelScalarWhereInputSchema), z.lazy(() => ChannelScalarWhereInputSchema).array()]).optional()
}).strict();
var OrganisationInvitationUpdateManyWithoutOrganisationNestedInputSchema = z.object({
  create: z.union([z.lazy(() => OrganisationInvitationCreateWithoutOrganisationInputSchema), z.lazy(() => OrganisationInvitationCreateWithoutOrganisationInputSchema).array(), z.lazy(() => OrganisationInvitationUncheckedCreateWithoutOrganisationInputSchema), z.lazy(() => OrganisationInvitationUncheckedCreateWithoutOrganisationInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrganisationInvitationCreateOrConnectWithoutOrganisationInputSchema), z.lazy(() => OrganisationInvitationCreateOrConnectWithoutOrganisationInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => OrganisationInvitationUpsertWithWhereUniqueWithoutOrganisationInputSchema), z.lazy(() => OrganisationInvitationUpsertWithWhereUniqueWithoutOrganisationInputSchema).array()]).optional(),
  createMany: z.lazy(() => OrganisationInvitationCreateManyOrganisationInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => OrganisationInvitationWhereUniqueInputSchema), z.lazy(() => OrganisationInvitationWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => OrganisationInvitationWhereUniqueInputSchema), z.lazy(() => OrganisationInvitationWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => OrganisationInvitationWhereUniqueInputSchema), z.lazy(() => OrganisationInvitationWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => OrganisationInvitationWhereUniqueInputSchema), z.lazy(() => OrganisationInvitationWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => OrganisationInvitationUpdateWithWhereUniqueWithoutOrganisationInputSchema), z.lazy(() => OrganisationInvitationUpdateWithWhereUniqueWithoutOrganisationInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => OrganisationInvitationUpdateManyWithWhereWithoutOrganisationInputSchema), z.lazy(() => OrganisationInvitationUpdateManyWithWhereWithoutOrganisationInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => OrganisationInvitationScalarWhereInputSchema), z.lazy(() => OrganisationInvitationScalarWhereInputSchema).array()]).optional()
}).strict();
var IntFieldUpdateOperationsInputSchema = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();
var MembershipUncheckedUpdateManyWithoutOrganizationNestedInputSchema = z.object({
  create: z.union([z.lazy(() => MembershipCreateWithoutOrganizationInputSchema), z.lazy(() => MembershipCreateWithoutOrganizationInputSchema).array(), z.lazy(() => MembershipUncheckedCreateWithoutOrganizationInputSchema), z.lazy(() => MembershipUncheckedCreateWithoutOrganizationInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MembershipCreateOrConnectWithoutOrganizationInputSchema), z.lazy(() => MembershipCreateOrConnectWithoutOrganizationInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MembershipUpsertWithWhereUniqueWithoutOrganizationInputSchema), z.lazy(() => MembershipUpsertWithWhereUniqueWithoutOrganizationInputSchema).array()]).optional(),
  createMany: z.lazy(() => MembershipCreateManyOrganizationInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => MembershipWhereUniqueInputSchema), z.lazy(() => MembershipWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MembershipWhereUniqueInputSchema), z.lazy(() => MembershipWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MembershipWhereUniqueInputSchema), z.lazy(() => MembershipWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MembershipWhereUniqueInputSchema), z.lazy(() => MembershipWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => MembershipUpdateWithWhereUniqueWithoutOrganizationInputSchema), z.lazy(() => MembershipUpdateWithWhereUniqueWithoutOrganizationInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MembershipUpdateManyWithWhereWithoutOrganizationInputSchema), z.lazy(() => MembershipUpdateManyWithWhereWithoutOrganizationInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MembershipScalarWhereInputSchema), z.lazy(() => MembershipScalarWhereInputSchema).array()]).optional()
}).strict();
var ChannelUncheckedUpdateManyWithoutOrganisationNestedInputSchema = z.object({
  create: z.union([z.lazy(() => ChannelCreateWithoutOrganisationInputSchema), z.lazy(() => ChannelCreateWithoutOrganisationInputSchema).array(), z.lazy(() => ChannelUncheckedCreateWithoutOrganisationInputSchema), z.lazy(() => ChannelUncheckedCreateWithoutOrganisationInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ChannelCreateOrConnectWithoutOrganisationInputSchema), z.lazy(() => ChannelCreateOrConnectWithoutOrganisationInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ChannelUpsertWithWhereUniqueWithoutOrganisationInputSchema), z.lazy(() => ChannelUpsertWithWhereUniqueWithoutOrganisationInputSchema).array()]).optional(),
  createMany: z.lazy(() => ChannelCreateManyOrganisationInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => ChannelWhereUniqueInputSchema), z.lazy(() => ChannelWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ChannelWhereUniqueInputSchema), z.lazy(() => ChannelWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ChannelWhereUniqueInputSchema), z.lazy(() => ChannelWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ChannelWhereUniqueInputSchema), z.lazy(() => ChannelWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => ChannelUpdateWithWhereUniqueWithoutOrganisationInputSchema), z.lazy(() => ChannelUpdateWithWhereUniqueWithoutOrganisationInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ChannelUpdateManyWithWhereWithoutOrganisationInputSchema), z.lazy(() => ChannelUpdateManyWithWhereWithoutOrganisationInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ChannelScalarWhereInputSchema), z.lazy(() => ChannelScalarWhereInputSchema).array()]).optional()
}).strict();
var OrganisationInvitationUncheckedUpdateManyWithoutOrganisationNestedInputSchema = z.object({
  create: z.union([z.lazy(() => OrganisationInvitationCreateWithoutOrganisationInputSchema), z.lazy(() => OrganisationInvitationCreateWithoutOrganisationInputSchema).array(), z.lazy(() => OrganisationInvitationUncheckedCreateWithoutOrganisationInputSchema), z.lazy(() => OrganisationInvitationUncheckedCreateWithoutOrganisationInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrganisationInvitationCreateOrConnectWithoutOrganisationInputSchema), z.lazy(() => OrganisationInvitationCreateOrConnectWithoutOrganisationInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => OrganisationInvitationUpsertWithWhereUniqueWithoutOrganisationInputSchema), z.lazy(() => OrganisationInvitationUpsertWithWhereUniqueWithoutOrganisationInputSchema).array()]).optional(),
  createMany: z.lazy(() => OrganisationInvitationCreateManyOrganisationInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => OrganisationInvitationWhereUniqueInputSchema), z.lazy(() => OrganisationInvitationWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => OrganisationInvitationWhereUniqueInputSchema), z.lazy(() => OrganisationInvitationWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => OrganisationInvitationWhereUniqueInputSchema), z.lazy(() => OrganisationInvitationWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => OrganisationInvitationWhereUniqueInputSchema), z.lazy(() => OrganisationInvitationWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => OrganisationInvitationUpdateWithWhereUniqueWithoutOrganisationInputSchema), z.lazy(() => OrganisationInvitationUpdateWithWhereUniqueWithoutOrganisationInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => OrganisationInvitationUpdateManyWithWhereWithoutOrganisationInputSchema), z.lazy(() => OrganisationInvitationUpdateManyWithWhereWithoutOrganisationInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => OrganisationInvitationScalarWhereInputSchema), z.lazy(() => OrganisationInvitationScalarWhereInputSchema).array()]).optional()
}).strict();
var UserCreateNestedOneWithoutOrganisationInvitationInputSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutOrganisationInvitationInputSchema), z.lazy(() => UserUncheckedCreateWithoutOrganisationInvitationInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutOrganisationInvitationInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();
var OrganisationCreateNestedOneWithoutOrganisationInvitationInputSchema = z.object({
  create: z.union([z.lazy(() => OrganisationCreateWithoutOrganisationInvitationInputSchema), z.lazy(() => OrganisationUncheckedCreateWithoutOrganisationInvitationInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrganisationCreateOrConnectWithoutOrganisationInvitationInputSchema).optional(),
  connect: z.lazy(() => OrganisationWhereUniqueInputSchema).optional()
}).strict();
var UserUpdateOneRequiredWithoutOrganisationInvitationNestedInputSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutOrganisationInvitationInputSchema), z.lazy(() => UserUncheckedCreateWithoutOrganisationInvitationInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutOrganisationInvitationInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutOrganisationInvitationInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateWithoutOrganisationInvitationInputSchema), z.lazy(() => UserUncheckedUpdateWithoutOrganisationInvitationInputSchema)]).optional()
}).strict();
var OrganisationUpdateOneRequiredWithoutOrganisationInvitationNestedInputSchema = z.object({
  create: z.union([z.lazy(() => OrganisationCreateWithoutOrganisationInvitationInputSchema), z.lazy(() => OrganisationUncheckedCreateWithoutOrganisationInvitationInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrganisationCreateOrConnectWithoutOrganisationInvitationInputSchema).optional(),
  upsert: z.lazy(() => OrganisationUpsertWithoutOrganisationInvitationInputSchema).optional(),
  connect: z.lazy(() => OrganisationWhereUniqueInputSchema).optional(),
  update: z.union([z.lazy(() => OrganisationUpdateWithoutOrganisationInvitationInputSchema), z.lazy(() => OrganisationUncheckedUpdateWithoutOrganisationInvitationInputSchema)]).optional()
}).strict();
var OrganisationCreateNestedOneWithoutMembershipInputSchema = z.object({
  create: z.union([z.lazy(() => OrganisationCreateWithoutMembershipInputSchema), z.lazy(() => OrganisationUncheckedCreateWithoutMembershipInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrganisationCreateOrConnectWithoutMembershipInputSchema).optional(),
  connect: z.lazy(() => OrganisationWhereUniqueInputSchema).optional()
}).strict();
var UserCreateNestedOneWithoutMembershipsInputSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutMembershipsInputSchema), z.lazy(() => UserUncheckedCreateWithoutMembershipsInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutMembershipsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();
var EnumMembershipRoleFieldUpdateOperationsInputSchema = z.object({
  set: z.lazy(() => MembershipRoleSchema).optional()
}).strict();
var NullableStringFieldUpdateOperationsInputSchema = z.object({
  set: z.string().optional().nullable()
}).strict();
var OrganisationUpdateOneRequiredWithoutMembershipNestedInputSchema = z.object({
  create: z.union([z.lazy(() => OrganisationCreateWithoutMembershipInputSchema), z.lazy(() => OrganisationUncheckedCreateWithoutMembershipInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrganisationCreateOrConnectWithoutMembershipInputSchema).optional(),
  upsert: z.lazy(() => OrganisationUpsertWithoutMembershipInputSchema).optional(),
  connect: z.lazy(() => OrganisationWhereUniqueInputSchema).optional(),
  update: z.union([z.lazy(() => OrganisationUpdateWithoutMembershipInputSchema), z.lazy(() => OrganisationUncheckedUpdateWithoutMembershipInputSchema)]).optional()
}).strict();
var UserUpdateOneWithoutMembershipsNestedInputSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutMembershipsInputSchema), z.lazy(() => UserUncheckedCreateWithoutMembershipsInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutMembershipsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutMembershipsInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateWithoutMembershipsInputSchema), z.lazy(() => UserUncheckedUpdateWithoutMembershipsInputSchema)]).optional()
}).strict();
var NullableIntFieldUpdateOperationsInputSchema = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();
var UserProfileCreateNestedOneWithoutUserInputSchema = z.object({
  create: z.union([z.lazy(() => UserProfileCreateWithoutUserInputSchema), z.lazy(() => UserProfileUncheckedCreateWithoutUserInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserProfileCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => UserProfileWhereUniqueInputSchema).optional()
}).strict();
var MembershipCreateNestedManyWithoutUserInputSchema = z.object({
  create: z.union([z.lazy(() => MembershipCreateWithoutUserInputSchema), z.lazy(() => MembershipCreateWithoutUserInputSchema).array(), z.lazy(() => MembershipUncheckedCreateWithoutUserInputSchema), z.lazy(() => MembershipUncheckedCreateWithoutUserInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MembershipCreateOrConnectWithoutUserInputSchema), z.lazy(() => MembershipCreateOrConnectWithoutUserInputSchema).array()]).optional(),
  createMany: z.lazy(() => MembershipCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => MembershipWhereUniqueInputSchema), z.lazy(() => MembershipWhereUniqueInputSchema).array()]).optional()
}).strict();
var OrganisationInvitationCreateNestedManyWithoutCreatedByInputSchema = z.object({
  create: z.union([z.lazy(() => OrganisationInvitationCreateWithoutCreatedByInputSchema), z.lazy(() => OrganisationInvitationCreateWithoutCreatedByInputSchema).array(), z.lazy(() => OrganisationInvitationUncheckedCreateWithoutCreatedByInputSchema), z.lazy(() => OrganisationInvitationUncheckedCreateWithoutCreatedByInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrganisationInvitationCreateOrConnectWithoutCreatedByInputSchema), z.lazy(() => OrganisationInvitationCreateOrConnectWithoutCreatedByInputSchema).array()]).optional(),
  createMany: z.lazy(() => OrganisationInvitationCreateManyCreatedByInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => OrganisationInvitationWhereUniqueInputSchema), z.lazy(() => OrganisationInvitationWhereUniqueInputSchema).array()]).optional()
}).strict();
var MembershipUncheckedCreateNestedManyWithoutUserInputSchema = z.object({
  create: z.union([z.lazy(() => MembershipCreateWithoutUserInputSchema), z.lazy(() => MembershipCreateWithoutUserInputSchema).array(), z.lazy(() => MembershipUncheckedCreateWithoutUserInputSchema), z.lazy(() => MembershipUncheckedCreateWithoutUserInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MembershipCreateOrConnectWithoutUserInputSchema), z.lazy(() => MembershipCreateOrConnectWithoutUserInputSchema).array()]).optional(),
  createMany: z.lazy(() => MembershipCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => MembershipWhereUniqueInputSchema), z.lazy(() => MembershipWhereUniqueInputSchema).array()]).optional()
}).strict();
var OrganisationInvitationUncheckedCreateNestedManyWithoutCreatedByInputSchema = z.object({
  create: z.union([z.lazy(() => OrganisationInvitationCreateWithoutCreatedByInputSchema), z.lazy(() => OrganisationInvitationCreateWithoutCreatedByInputSchema).array(), z.lazy(() => OrganisationInvitationUncheckedCreateWithoutCreatedByInputSchema), z.lazy(() => OrganisationInvitationUncheckedCreateWithoutCreatedByInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrganisationInvitationCreateOrConnectWithoutCreatedByInputSchema), z.lazy(() => OrganisationInvitationCreateOrConnectWithoutCreatedByInputSchema).array()]).optional(),
  createMany: z.lazy(() => OrganisationInvitationCreateManyCreatedByInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => OrganisationInvitationWhereUniqueInputSchema), z.lazy(() => OrganisationInvitationWhereUniqueInputSchema).array()]).optional()
}).strict();
var EnumGlobalRoleFieldUpdateOperationsInputSchema = z.object({
  set: z.lazy(() => GlobalRoleSchema).optional()
}).strict();
var UserProfileUpdateOneWithoutUserNestedInputSchema = z.object({
  create: z.union([z.lazy(() => UserProfileCreateWithoutUserInputSchema), z.lazy(() => UserProfileUncheckedCreateWithoutUserInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserProfileCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => UserProfileUpsertWithoutUserInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => UserProfileWhereUniqueInputSchema).optional(),
  update: z.union([z.lazy(() => UserProfileUpdateWithoutUserInputSchema), z.lazy(() => UserProfileUncheckedUpdateWithoutUserInputSchema)]).optional()
}).strict();
var MembershipUpdateManyWithoutUserNestedInputSchema = z.object({
  create: z.union([z.lazy(() => MembershipCreateWithoutUserInputSchema), z.lazy(() => MembershipCreateWithoutUserInputSchema).array(), z.lazy(() => MembershipUncheckedCreateWithoutUserInputSchema), z.lazy(() => MembershipUncheckedCreateWithoutUserInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MembershipCreateOrConnectWithoutUserInputSchema), z.lazy(() => MembershipCreateOrConnectWithoutUserInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MembershipUpsertWithWhereUniqueWithoutUserInputSchema), z.lazy(() => MembershipUpsertWithWhereUniqueWithoutUserInputSchema).array()]).optional(),
  createMany: z.lazy(() => MembershipCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => MembershipWhereUniqueInputSchema), z.lazy(() => MembershipWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MembershipWhereUniqueInputSchema), z.lazy(() => MembershipWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MembershipWhereUniqueInputSchema), z.lazy(() => MembershipWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MembershipWhereUniqueInputSchema), z.lazy(() => MembershipWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => MembershipUpdateWithWhereUniqueWithoutUserInputSchema), z.lazy(() => MembershipUpdateWithWhereUniqueWithoutUserInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MembershipUpdateManyWithWhereWithoutUserInputSchema), z.lazy(() => MembershipUpdateManyWithWhereWithoutUserInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MembershipScalarWhereInputSchema), z.lazy(() => MembershipScalarWhereInputSchema).array()]).optional()
}).strict();
var OrganisationInvitationUpdateManyWithoutCreatedByNestedInputSchema = z.object({
  create: z.union([z.lazy(() => OrganisationInvitationCreateWithoutCreatedByInputSchema), z.lazy(() => OrganisationInvitationCreateWithoutCreatedByInputSchema).array(), z.lazy(() => OrganisationInvitationUncheckedCreateWithoutCreatedByInputSchema), z.lazy(() => OrganisationInvitationUncheckedCreateWithoutCreatedByInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrganisationInvitationCreateOrConnectWithoutCreatedByInputSchema), z.lazy(() => OrganisationInvitationCreateOrConnectWithoutCreatedByInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => OrganisationInvitationUpsertWithWhereUniqueWithoutCreatedByInputSchema), z.lazy(() => OrganisationInvitationUpsertWithWhereUniqueWithoutCreatedByInputSchema).array()]).optional(),
  createMany: z.lazy(() => OrganisationInvitationCreateManyCreatedByInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => OrganisationInvitationWhereUniqueInputSchema), z.lazy(() => OrganisationInvitationWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => OrganisationInvitationWhereUniqueInputSchema), z.lazy(() => OrganisationInvitationWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => OrganisationInvitationWhereUniqueInputSchema), z.lazy(() => OrganisationInvitationWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => OrganisationInvitationWhereUniqueInputSchema), z.lazy(() => OrganisationInvitationWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => OrganisationInvitationUpdateWithWhereUniqueWithoutCreatedByInputSchema), z.lazy(() => OrganisationInvitationUpdateWithWhereUniqueWithoutCreatedByInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => OrganisationInvitationUpdateManyWithWhereWithoutCreatedByInputSchema), z.lazy(() => OrganisationInvitationUpdateManyWithWhereWithoutCreatedByInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => OrganisationInvitationScalarWhereInputSchema), z.lazy(() => OrganisationInvitationScalarWhereInputSchema).array()]).optional()
}).strict();
var MembershipUncheckedUpdateManyWithoutUserNestedInputSchema = z.object({
  create: z.union([z.lazy(() => MembershipCreateWithoutUserInputSchema), z.lazy(() => MembershipCreateWithoutUserInputSchema).array(), z.lazy(() => MembershipUncheckedCreateWithoutUserInputSchema), z.lazy(() => MembershipUncheckedCreateWithoutUserInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MembershipCreateOrConnectWithoutUserInputSchema), z.lazy(() => MembershipCreateOrConnectWithoutUserInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MembershipUpsertWithWhereUniqueWithoutUserInputSchema), z.lazy(() => MembershipUpsertWithWhereUniqueWithoutUserInputSchema).array()]).optional(),
  createMany: z.lazy(() => MembershipCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => MembershipWhereUniqueInputSchema), z.lazy(() => MembershipWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MembershipWhereUniqueInputSchema), z.lazy(() => MembershipWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MembershipWhereUniqueInputSchema), z.lazy(() => MembershipWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MembershipWhereUniqueInputSchema), z.lazy(() => MembershipWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => MembershipUpdateWithWhereUniqueWithoutUserInputSchema), z.lazy(() => MembershipUpdateWithWhereUniqueWithoutUserInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MembershipUpdateManyWithWhereWithoutUserInputSchema), z.lazy(() => MembershipUpdateManyWithWhereWithoutUserInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MembershipScalarWhereInputSchema), z.lazy(() => MembershipScalarWhereInputSchema).array()]).optional()
}).strict();
var OrganisationInvitationUncheckedUpdateManyWithoutCreatedByNestedInputSchema = z.object({
  create: z.union([z.lazy(() => OrganisationInvitationCreateWithoutCreatedByInputSchema), z.lazy(() => OrganisationInvitationCreateWithoutCreatedByInputSchema).array(), z.lazy(() => OrganisationInvitationUncheckedCreateWithoutCreatedByInputSchema), z.lazy(() => OrganisationInvitationUncheckedCreateWithoutCreatedByInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrganisationInvitationCreateOrConnectWithoutCreatedByInputSchema), z.lazy(() => OrganisationInvitationCreateOrConnectWithoutCreatedByInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => OrganisationInvitationUpsertWithWhereUniqueWithoutCreatedByInputSchema), z.lazy(() => OrganisationInvitationUpsertWithWhereUniqueWithoutCreatedByInputSchema).array()]).optional(),
  createMany: z.lazy(() => OrganisationInvitationCreateManyCreatedByInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => OrganisationInvitationWhereUniqueInputSchema), z.lazy(() => OrganisationInvitationWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => OrganisationInvitationWhereUniqueInputSchema), z.lazy(() => OrganisationInvitationWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => OrganisationInvitationWhereUniqueInputSchema), z.lazy(() => OrganisationInvitationWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => OrganisationInvitationWhereUniqueInputSchema), z.lazy(() => OrganisationInvitationWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => OrganisationInvitationUpdateWithWhereUniqueWithoutCreatedByInputSchema), z.lazy(() => OrganisationInvitationUpdateWithWhereUniqueWithoutCreatedByInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => OrganisationInvitationUpdateManyWithWhereWithoutCreatedByInputSchema), z.lazy(() => OrganisationInvitationUpdateManyWithWhereWithoutCreatedByInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => OrganisationInvitationScalarWhereInputSchema), z.lazy(() => OrganisationInvitationScalarWhereInputSchema).array()]).optional()
}).strict();
var UserCreateNestedManyWithoutUserProfileInputSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUserProfileInputSchema), z.lazy(() => UserCreateWithoutUserProfileInputSchema).array(), z.lazy(() => UserUncheckedCreateWithoutUserProfileInputSchema), z.lazy(() => UserUncheckedCreateWithoutUserProfileInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserCreateOrConnectWithoutUserProfileInputSchema), z.lazy(() => UserCreateOrConnectWithoutUserProfileInputSchema).array()]).optional(),
  createMany: z.lazy(() => UserCreateManyUserProfileInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => UserWhereUniqueInputSchema), z.lazy(() => UserWhereUniqueInputSchema).array()]).optional()
}).strict();
var UserUncheckedCreateNestedManyWithoutUserProfileInputSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUserProfileInputSchema), z.lazy(() => UserCreateWithoutUserProfileInputSchema).array(), z.lazy(() => UserUncheckedCreateWithoutUserProfileInputSchema), z.lazy(() => UserUncheckedCreateWithoutUserProfileInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserCreateOrConnectWithoutUserProfileInputSchema), z.lazy(() => UserCreateOrConnectWithoutUserProfileInputSchema).array()]).optional(),
  createMany: z.lazy(() => UserCreateManyUserProfileInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => UserWhereUniqueInputSchema), z.lazy(() => UserWhereUniqueInputSchema).array()]).optional()
}).strict();
var UserUpdateManyWithoutUserProfileNestedInputSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUserProfileInputSchema), z.lazy(() => UserCreateWithoutUserProfileInputSchema).array(), z.lazy(() => UserUncheckedCreateWithoutUserProfileInputSchema), z.lazy(() => UserUncheckedCreateWithoutUserProfileInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserCreateOrConnectWithoutUserProfileInputSchema), z.lazy(() => UserCreateOrConnectWithoutUserProfileInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => UserUpsertWithWhereUniqueWithoutUserProfileInputSchema), z.lazy(() => UserUpsertWithWhereUniqueWithoutUserProfileInputSchema).array()]).optional(),
  createMany: z.lazy(() => UserCreateManyUserProfileInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => UserWhereUniqueInputSchema), z.lazy(() => UserWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => UserWhereUniqueInputSchema), z.lazy(() => UserWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => UserWhereUniqueInputSchema), z.lazy(() => UserWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => UserWhereUniqueInputSchema), z.lazy(() => UserWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => UserUpdateWithWhereUniqueWithoutUserProfileInputSchema), z.lazy(() => UserUpdateWithWhereUniqueWithoutUserProfileInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => UserUpdateManyWithWhereWithoutUserProfileInputSchema), z.lazy(() => UserUpdateManyWithWhereWithoutUserProfileInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => UserScalarWhereInputSchema), z.lazy(() => UserScalarWhereInputSchema).array()]).optional()
}).strict();
var UserUncheckedUpdateManyWithoutUserProfileNestedInputSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUserProfileInputSchema), z.lazy(() => UserCreateWithoutUserProfileInputSchema).array(), z.lazy(() => UserUncheckedCreateWithoutUserProfileInputSchema), z.lazy(() => UserUncheckedCreateWithoutUserProfileInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserCreateOrConnectWithoutUserProfileInputSchema), z.lazy(() => UserCreateOrConnectWithoutUserProfileInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => UserUpsertWithWhereUniqueWithoutUserProfileInputSchema), z.lazy(() => UserUpsertWithWhereUniqueWithoutUserProfileInputSchema).array()]).optional(),
  createMany: z.lazy(() => UserCreateManyUserProfileInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => UserWhereUniqueInputSchema), z.lazy(() => UserWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => UserWhereUniqueInputSchema), z.lazy(() => UserWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => UserWhereUniqueInputSchema), z.lazy(() => UserWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => UserWhereUniqueInputSchema), z.lazy(() => UserWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => UserUpdateWithWhereUniqueWithoutUserProfileInputSchema), z.lazy(() => UserUpdateWithWhereUniqueWithoutUserProfileInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => UserUpdateManyWithWhereWithoutUserProfileInputSchema), z.lazy(() => UserUpdateManyWithWhereWithoutUserProfileInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => UserScalarWhereInputSchema), z.lazy(() => UserScalarWhereInputSchema).array()]).optional()
}).strict();
var OrganisationCreateNestedOneWithoutChannelsInputSchema = z.object({
  create: z.union([z.lazy(() => OrganisationCreateWithoutChannelsInputSchema), z.lazy(() => OrganisationUncheckedCreateWithoutChannelsInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrganisationCreateOrConnectWithoutChannelsInputSchema).optional(),
  connect: z.lazy(() => OrganisationWhereUniqueInputSchema).optional()
}).strict();
var EnumChannelKindFieldUpdateOperationsInputSchema = z.object({
  set: z.lazy(() => ChannelKindSchema).optional()
}).strict();
var OrganisationUpdateOneWithoutChannelsNestedInputSchema = z.object({
  create: z.union([z.lazy(() => OrganisationCreateWithoutChannelsInputSchema), z.lazy(() => OrganisationUncheckedCreateWithoutChannelsInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrganisationCreateOrConnectWithoutChannelsInputSchema).optional(),
  upsert: z.lazy(() => OrganisationUpsertWithoutChannelsInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => OrganisationWhereUniqueInputSchema).optional(),
  update: z.union([z.lazy(() => OrganisationUpdateWithoutChannelsInputSchema), z.lazy(() => OrganisationUncheckedUpdateWithoutChannelsInputSchema)]).optional()
}).strict();
var MessageCreateNestedOneWithoutMediaInputSchema = z.object({
  create: z.union([z.lazy(() => MessageCreateWithoutMediaInputSchema), z.lazy(() => MessageUncheckedCreateWithoutMediaInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => MessageCreateOrConnectWithoutMediaInputSchema).optional(),
  connect: z.lazy(() => MessageWhereUniqueInputSchema).optional()
}).strict();
var MessageUpdateOneWithoutMediaNestedInputSchema = z.object({
  create: z.union([z.lazy(() => MessageCreateWithoutMediaInputSchema), z.lazy(() => MessageUncheckedCreateWithoutMediaInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => MessageCreateOrConnectWithoutMediaInputSchema).optional(),
  upsert: z.lazy(() => MessageUpsertWithoutMediaInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => MessageWhereUniqueInputSchema).optional(),
  update: z.union([z.lazy(() => MessageUpdateWithoutMediaInputSchema), z.lazy(() => MessageUncheckedUpdateWithoutMediaInputSchema)]).optional()
}).strict();
var MediaCreateNestedManyWithoutMessageInputSchema = z.object({
  create: z.union([z.lazy(() => MediaCreateWithoutMessageInputSchema), z.lazy(() => MediaCreateWithoutMessageInputSchema).array(), z.lazy(() => MediaUncheckedCreateWithoutMessageInputSchema), z.lazy(() => MediaUncheckedCreateWithoutMessageInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MediaCreateOrConnectWithoutMessageInputSchema), z.lazy(() => MediaCreateOrConnectWithoutMessageInputSchema).array()]).optional(),
  createMany: z.lazy(() => MediaCreateManyMessageInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => MediaWhereUniqueInputSchema), z.lazy(() => MediaWhereUniqueInputSchema).array()]).optional()
}).strict();
var MediaUncheckedCreateNestedManyWithoutMessageInputSchema = z.object({
  create: z.union([z.lazy(() => MediaCreateWithoutMessageInputSchema), z.lazy(() => MediaCreateWithoutMessageInputSchema).array(), z.lazy(() => MediaUncheckedCreateWithoutMessageInputSchema), z.lazy(() => MediaUncheckedCreateWithoutMessageInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MediaCreateOrConnectWithoutMessageInputSchema), z.lazy(() => MediaCreateOrConnectWithoutMessageInputSchema).array()]).optional(),
  createMany: z.lazy(() => MediaCreateManyMessageInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => MediaWhereUniqueInputSchema), z.lazy(() => MediaWhereUniqueInputSchema).array()]).optional()
}).strict();
var MediaUpdateManyWithoutMessageNestedInputSchema = z.object({
  create: z.union([z.lazy(() => MediaCreateWithoutMessageInputSchema), z.lazy(() => MediaCreateWithoutMessageInputSchema).array(), z.lazy(() => MediaUncheckedCreateWithoutMessageInputSchema), z.lazy(() => MediaUncheckedCreateWithoutMessageInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MediaCreateOrConnectWithoutMessageInputSchema), z.lazy(() => MediaCreateOrConnectWithoutMessageInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MediaUpsertWithWhereUniqueWithoutMessageInputSchema), z.lazy(() => MediaUpsertWithWhereUniqueWithoutMessageInputSchema).array()]).optional(),
  createMany: z.lazy(() => MediaCreateManyMessageInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => MediaWhereUniqueInputSchema), z.lazy(() => MediaWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MediaWhereUniqueInputSchema), z.lazy(() => MediaWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MediaWhereUniqueInputSchema), z.lazy(() => MediaWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MediaWhereUniqueInputSchema), z.lazy(() => MediaWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => MediaUpdateWithWhereUniqueWithoutMessageInputSchema), z.lazy(() => MediaUpdateWithWhereUniqueWithoutMessageInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MediaUpdateManyWithWhereWithoutMessageInputSchema), z.lazy(() => MediaUpdateManyWithWhereWithoutMessageInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MediaScalarWhereInputSchema), z.lazy(() => MediaScalarWhereInputSchema).array()]).optional()
}).strict();
var MediaUncheckedUpdateManyWithoutMessageNestedInputSchema = z.object({
  create: z.union([z.lazy(() => MediaCreateWithoutMessageInputSchema), z.lazy(() => MediaCreateWithoutMessageInputSchema).array(), z.lazy(() => MediaUncheckedCreateWithoutMessageInputSchema), z.lazy(() => MediaUncheckedCreateWithoutMessageInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MediaCreateOrConnectWithoutMessageInputSchema), z.lazy(() => MediaCreateOrConnectWithoutMessageInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MediaUpsertWithWhereUniqueWithoutMessageInputSchema), z.lazy(() => MediaUpsertWithWhereUniqueWithoutMessageInputSchema).array()]).optional(),
  createMany: z.lazy(() => MediaCreateManyMessageInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => MediaWhereUniqueInputSchema), z.lazy(() => MediaWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MediaWhereUniqueInputSchema), z.lazy(() => MediaWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MediaWhereUniqueInputSchema), z.lazy(() => MediaWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MediaWhereUniqueInputSchema), z.lazy(() => MediaWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => MediaUpdateWithWhereUniqueWithoutMessageInputSchema), z.lazy(() => MediaUpdateWithWhereUniqueWithoutMessageInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MediaUpdateManyWithWhereWithoutMessageInputSchema), z.lazy(() => MediaUpdateManyWithWhereWithoutMessageInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MediaScalarWhereInputSchema), z.lazy(() => MediaScalarWhereInputSchema).array()]).optional()
}).strict();
var NestedIntFilterSchema = z.object({
  equals: z.number().optional(),
  in: z.union([z.number().array(), z.number()]).optional(),
  notIn: z.union([z.number().array(), z.number()]).optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedIntFilterSchema)]).optional()
}).strict();
var NestedStringFilterSchema = z.object({
  equals: z.string().optional(),
  in: z.union([z.string().array(), z.string()]).optional(),
  notIn: z.union([z.string().array(), z.string()]).optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringFilterSchema)]).optional()
}).strict();
var NestedDateTimeFilterSchema = z.object({
  equals: z.coerce.date().optional(),
  in: z.union([z.coerce.date().array(), z.coerce.date()]).optional(),
  notIn: z.union([z.coerce.date().array(), z.coerce.date()]).optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)]).optional()
}).strict();
var NestedIntWithAggregatesFilterSchema = z.object({
  equals: z.number().optional(),
  in: z.union([z.number().array(), z.number()]).optional(),
  notIn: z.union([z.number().array(), z.number()]).optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedIntWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();
var NestedFloatFilterSchema = z.object({
  equals: z.number().optional(),
  in: z.union([z.number().array(), z.number()]).optional(),
  notIn: z.union([z.number().array(), z.number()]).optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedFloatFilterSchema)]).optional()
}).strict();
var NestedStringWithAggregatesFilterSchema = z.object({
  equals: z.string().optional(),
  in: z.union([z.string().array(), z.string()]).optional(),
  notIn: z.union([z.string().array(), z.string()]).optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();
var NestedDateTimeWithAggregatesFilterSchema = z.object({
  equals: z.coerce.date().optional(),
  in: z.union([z.coerce.date().array(), z.coerce.date()]).optional(),
  notIn: z.union([z.coerce.date().array(), z.coerce.date()]).optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([z.coerce.date(), z.lazy(() => NestedDateTimeWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();
var NestedEnumMembershipRoleFilterSchema = z.object({
  equals: z.lazy(() => MembershipRoleSchema).optional(),
  in: z.union([z.lazy(() => MembershipRoleSchema).array(), z.lazy(() => MembershipRoleSchema)]).optional(),
  notIn: z.union([z.lazy(() => MembershipRoleSchema).array(), z.lazy(() => MembershipRoleSchema)]).optional(),
  not: z.union([z.lazy(() => MembershipRoleSchema), z.lazy(() => NestedEnumMembershipRoleFilterSchema)]).optional()
}).strict();
var NestedIntNullableFilterSchema = z.object({
  equals: z.number().optional().nullable(),
  in: z.union([z.number().array(), z.number()]).optional().nullable(),
  notIn: z.union([z.number().array(), z.number()]).optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedIntNullableFilterSchema)]).optional().nullable()
}).strict();
var NestedStringNullableFilterSchema = z.object({
  equals: z.string().optional().nullable(),
  in: z.union([z.string().array(), z.string()]).optional().nullable(),
  notIn: z.union([z.string().array(), z.string()]).optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringNullableFilterSchema)]).optional().nullable()
}).strict();
var NestedEnumMembershipRoleWithAggregatesFilterSchema = z.object({
  equals: z.lazy(() => MembershipRoleSchema).optional(),
  in: z.union([z.lazy(() => MembershipRoleSchema).array(), z.lazy(() => MembershipRoleSchema)]).optional(),
  notIn: z.union([z.lazy(() => MembershipRoleSchema).array(), z.lazy(() => MembershipRoleSchema)]).optional(),
  not: z.union([z.lazy(() => MembershipRoleSchema), z.lazy(() => NestedEnumMembershipRoleWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumMembershipRoleFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumMembershipRoleFilterSchema).optional()
}).strict();
var NestedIntNullableWithAggregatesFilterSchema = z.object({
  equals: z.number().optional().nullable(),
  in: z.union([z.number().array(), z.number()]).optional().nullable(),
  notIn: z.union([z.number().array(), z.number()]).optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedIntNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();
var NestedFloatNullableFilterSchema = z.object({
  equals: z.number().optional().nullable(),
  in: z.union([z.number().array(), z.number()]).optional().nullable(),
  notIn: z.union([z.number().array(), z.number()]).optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedFloatNullableFilterSchema)]).optional().nullable()
}).strict();
var NestedStringNullableWithAggregatesFilterSchema = z.object({
  equals: z.string().optional().nullable(),
  in: z.union([z.string().array(), z.string()]).optional().nullable(),
  notIn: z.union([z.string().array(), z.string()]).optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();
var NestedEnumGlobalRoleFilterSchema = z.object({
  equals: z.lazy(() => GlobalRoleSchema).optional(),
  in: z.union([z.lazy(() => GlobalRoleSchema).array(), z.lazy(() => GlobalRoleSchema)]).optional(),
  notIn: z.union([z.lazy(() => GlobalRoleSchema).array(), z.lazy(() => GlobalRoleSchema)]).optional(),
  not: z.union([z.lazy(() => GlobalRoleSchema), z.lazy(() => NestedEnumGlobalRoleFilterSchema)]).optional()
}).strict();
var NestedEnumGlobalRoleWithAggregatesFilterSchema = z.object({
  equals: z.lazy(() => GlobalRoleSchema).optional(),
  in: z.union([z.lazy(() => GlobalRoleSchema).array(), z.lazy(() => GlobalRoleSchema)]).optional(),
  notIn: z.union([z.lazy(() => GlobalRoleSchema).array(), z.lazy(() => GlobalRoleSchema)]).optional(),
  not: z.union([z.lazy(() => GlobalRoleSchema), z.lazy(() => NestedEnumGlobalRoleWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumGlobalRoleFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumGlobalRoleFilterSchema).optional()
}).strict();
var NestedEnumChannelKindFilterSchema = z.object({
  equals: z.lazy(() => ChannelKindSchema).optional(),
  in: z.union([z.lazy(() => ChannelKindSchema).array(), z.lazy(() => ChannelKindSchema)]).optional(),
  notIn: z.union([z.lazy(() => ChannelKindSchema).array(), z.lazy(() => ChannelKindSchema)]).optional(),
  not: z.union([z.lazy(() => ChannelKindSchema), z.lazy(() => NestedEnumChannelKindFilterSchema)]).optional()
}).strict();
var NestedEnumChannelKindWithAggregatesFilterSchema = z.object({
  equals: z.lazy(() => ChannelKindSchema).optional(),
  in: z.union([z.lazy(() => ChannelKindSchema).array(), z.lazy(() => ChannelKindSchema)]).optional(),
  notIn: z.union([z.lazy(() => ChannelKindSchema).array(), z.lazy(() => ChannelKindSchema)]).optional(),
  not: z.union([z.lazy(() => ChannelKindSchema), z.lazy(() => NestedEnumChannelKindWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumChannelKindFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumChannelKindFilterSchema).optional()
}).strict();
var MembershipCreateWithoutOrganizationInputSchema = z.object({
  role: z.lazy(() => MembershipRoleSchema),
  invitedName: z.string().optional().nullable(),
  invitedEmail: z.string().optional().nullable(),
  user: z.lazy(() => UserCreateNestedOneWithoutMembershipsInputSchema).optional()
}).strict();
var MembershipUncheckedCreateWithoutOrganizationInputSchema = z.object({
  id: z.number().int().optional(),
  role: z.lazy(() => MembershipRoleSchema),
  userId: z.number().int().optional().nullable(),
  invitedName: z.string().optional().nullable(),
  invitedEmail: z.string().optional().nullable()
}).strict();
var MembershipCreateOrConnectWithoutOrganizationInputSchema = z.object({
  where: z.lazy(() => MembershipWhereUniqueInputSchema),
  create: z.union([z.lazy(() => MembershipCreateWithoutOrganizationInputSchema), z.lazy(() => MembershipUncheckedCreateWithoutOrganizationInputSchema)])
}).strict();
var MembershipCreateManyOrganizationInputEnvelopeSchema = z.object({
  data: z.union([z.lazy(() => MembershipCreateManyOrganizationInputSchema), z.lazy(() => MembershipCreateManyOrganizationInputSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var ChannelCreateWithoutOrganisationInputSchema = z.object({
  id: z.string().cuid().optional(),
  kind: z.lazy(() => ChannelKindSchema).optional(),
  createdBy: z.string(),
  name: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
var ChannelUncheckedCreateWithoutOrganisationInputSchema = z.object({
  id: z.string().cuid().optional(),
  kind: z.lazy(() => ChannelKindSchema).optional(),
  createdBy: z.string(),
  name: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
var ChannelCreateOrConnectWithoutOrganisationInputSchema = z.object({
  where: z.lazy(() => ChannelWhereUniqueInputSchema),
  create: z.union([z.lazy(() => ChannelCreateWithoutOrganisationInputSchema), z.lazy(() => ChannelUncheckedCreateWithoutOrganisationInputSchema)])
}).strict();
var ChannelCreateManyOrganisationInputEnvelopeSchema = z.object({
  data: z.union([z.lazy(() => ChannelCreateManyOrganisationInputSchema), z.lazy(() => ChannelCreateManyOrganisationInputSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var OrganisationInvitationCreateWithoutOrganisationInputSchema = z.object({
  publicId: z.string().cuid().optional(),
  issuedEmail: z.string(),
  createdAt: z.coerce.date().optional(),
  expiresAt: z.coerce.date(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutOrganisationInvitationInputSchema)
}).strict();
var OrganisationInvitationUncheckedCreateWithoutOrganisationInputSchema = z.object({
  id: z.number().int().optional(),
  publicId: z.string().cuid().optional(),
  issuedEmail: z.string(),
  createdAt: z.coerce.date().optional(),
  expiresAt: z.coerce.date(),
  creatorId: z.number().int()
}).strict();
var OrganisationInvitationCreateOrConnectWithoutOrganisationInputSchema = z.object({
  where: z.lazy(() => OrganisationInvitationWhereUniqueInputSchema),
  create: z.union([z.lazy(() => OrganisationInvitationCreateWithoutOrganisationInputSchema), z.lazy(() => OrganisationInvitationUncheckedCreateWithoutOrganisationInputSchema)])
}).strict();
var OrganisationInvitationCreateManyOrganisationInputEnvelopeSchema = z.object({
  data: z.union([z.lazy(() => OrganisationInvitationCreateManyOrganisationInputSchema), z.lazy(() => OrganisationInvitationCreateManyOrganisationInputSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var MembershipUpsertWithWhereUniqueWithoutOrganizationInputSchema = z.object({
  where: z.lazy(() => MembershipWhereUniqueInputSchema),
  update: z.union([z.lazy(() => MembershipUpdateWithoutOrganizationInputSchema), z.lazy(() => MembershipUncheckedUpdateWithoutOrganizationInputSchema)]),
  create: z.union([z.lazy(() => MembershipCreateWithoutOrganizationInputSchema), z.lazy(() => MembershipUncheckedCreateWithoutOrganizationInputSchema)])
}).strict();
var MembershipUpdateWithWhereUniqueWithoutOrganizationInputSchema = z.object({
  where: z.lazy(() => MembershipWhereUniqueInputSchema),
  data: z.union([z.lazy(() => MembershipUpdateWithoutOrganizationInputSchema), z.lazy(() => MembershipUncheckedUpdateWithoutOrganizationInputSchema)])
}).strict();
var MembershipUpdateManyWithWhereWithoutOrganizationInputSchema = z.object({
  where: z.lazy(() => MembershipScalarWhereInputSchema),
  data: z.union([z.lazy(() => MembershipUpdateManyMutationInputSchema), z.lazy(() => MembershipUncheckedUpdateManyWithoutMembershipInputSchema)])
}).strict();
var MembershipScalarWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => MembershipScalarWhereInputSchema), z.lazy(() => MembershipScalarWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => MembershipScalarWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => MembershipScalarWhereInputSchema), z.lazy(() => MembershipScalarWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  role: z.union([z.lazy(() => EnumMembershipRoleFilterSchema), z.lazy(() => MembershipRoleSchema)]).optional(),
  organizationId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  userId: z.union([z.lazy(() => IntNullableFilterSchema), z.number()]).optional().nullable(),
  invitedName: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  invitedEmail: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable()
}).strict();
var ChannelUpsertWithWhereUniqueWithoutOrganisationInputSchema = z.object({
  where: z.lazy(() => ChannelWhereUniqueInputSchema),
  update: z.union([z.lazy(() => ChannelUpdateWithoutOrganisationInputSchema), z.lazy(() => ChannelUncheckedUpdateWithoutOrganisationInputSchema)]),
  create: z.union([z.lazy(() => ChannelCreateWithoutOrganisationInputSchema), z.lazy(() => ChannelUncheckedCreateWithoutOrganisationInputSchema)])
}).strict();
var ChannelUpdateWithWhereUniqueWithoutOrganisationInputSchema = z.object({
  where: z.lazy(() => ChannelWhereUniqueInputSchema),
  data: z.union([z.lazy(() => ChannelUpdateWithoutOrganisationInputSchema), z.lazy(() => ChannelUncheckedUpdateWithoutOrganisationInputSchema)])
}).strict();
var ChannelUpdateManyWithWhereWithoutOrganisationInputSchema = z.object({
  where: z.lazy(() => ChannelScalarWhereInputSchema),
  data: z.union([z.lazy(() => ChannelUpdateManyMutationInputSchema), z.lazy(() => ChannelUncheckedUpdateManyWithoutChannelsInputSchema)])
}).strict();
var ChannelScalarWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => ChannelScalarWhereInputSchema), z.lazy(() => ChannelScalarWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => ChannelScalarWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => ChannelScalarWhereInputSchema), z.lazy(() => ChannelScalarWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  kind: z.union([z.lazy(() => EnumChannelKindFilterSchema), z.lazy(() => ChannelKindSchema)]).optional(),
  createdBy: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  description: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  organisationId: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable()
}).strict();
var OrganisationInvitationUpsertWithWhereUniqueWithoutOrganisationInputSchema = z.object({
  where: z.lazy(() => OrganisationInvitationWhereUniqueInputSchema),
  update: z.union([z.lazy(() => OrganisationInvitationUpdateWithoutOrganisationInputSchema), z.lazy(() => OrganisationInvitationUncheckedUpdateWithoutOrganisationInputSchema)]),
  create: z.union([z.lazy(() => OrganisationInvitationCreateWithoutOrganisationInputSchema), z.lazy(() => OrganisationInvitationUncheckedCreateWithoutOrganisationInputSchema)])
}).strict();
var OrganisationInvitationUpdateWithWhereUniqueWithoutOrganisationInputSchema = z.object({
  where: z.lazy(() => OrganisationInvitationWhereUniqueInputSchema),
  data: z.union([z.lazy(() => OrganisationInvitationUpdateWithoutOrganisationInputSchema), z.lazy(() => OrganisationInvitationUncheckedUpdateWithoutOrganisationInputSchema)])
}).strict();
var OrganisationInvitationUpdateManyWithWhereWithoutOrganisationInputSchema = z.object({
  where: z.lazy(() => OrganisationInvitationScalarWhereInputSchema),
  data: z.union([z.lazy(() => OrganisationInvitationUpdateManyMutationInputSchema), z.lazy(() => OrganisationInvitationUncheckedUpdateManyWithoutOrganisationInvitationInputSchema)])
}).strict();
var OrganisationInvitationScalarWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => OrganisationInvitationScalarWhereInputSchema), z.lazy(() => OrganisationInvitationScalarWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => OrganisationInvitationScalarWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => OrganisationInvitationScalarWhereInputSchema), z.lazy(() => OrganisationInvitationScalarWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  publicId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  issuedEmail: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  expiresAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  creatorId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  organizationId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional()
}).strict();
var UserCreateWithoutOrganisationInvitationInputSchema = z.object({
  publicId: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
  role: z.lazy(() => GlobalRoleSchema),
  userProfile: z.lazy(() => UserProfileCreateNestedOneWithoutUserInputSchema).optional(),
  memberships: z.lazy(() => MembershipCreateNestedManyWithoutUserInputSchema).optional()
}).strict();
var UserUncheckedCreateWithoutOrganisationInvitationInputSchema = z.object({
  id: z.number().int().optional(),
  publicId: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
  role: z.lazy(() => GlobalRoleSchema),
  userProfileId: z.number().int(),
  memberships: z.lazy(() => MembershipUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();
var UserCreateOrConnectWithoutOrganisationInvitationInputSchema = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([z.lazy(() => UserCreateWithoutOrganisationInvitationInputSchema), z.lazy(() => UserUncheckedCreateWithoutOrganisationInvitationInputSchema)])
}).strict();
var OrganisationCreateWithoutOrganisationInvitationInputSchema = z.object({
  publicId: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  membership: z.lazy(() => MembershipCreateNestedManyWithoutOrganizationInputSchema).optional(),
  channels: z.lazy(() => ChannelCreateNestedManyWithoutOrganisationInputSchema).optional()
}).strict();
var OrganisationUncheckedCreateWithoutOrganisationInvitationInputSchema = z.object({
  id: z.number().int().optional(),
  publicId: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  membership: z.lazy(() => MembershipUncheckedCreateNestedManyWithoutOrganizationInputSchema).optional(),
  channels: z.lazy(() => ChannelUncheckedCreateNestedManyWithoutOrganisationInputSchema).optional()
}).strict();
var OrganisationCreateOrConnectWithoutOrganisationInvitationInputSchema = z.object({
  where: z.lazy(() => OrganisationWhereUniqueInputSchema),
  create: z.union([z.lazy(() => OrganisationCreateWithoutOrganisationInvitationInputSchema), z.lazy(() => OrganisationUncheckedCreateWithoutOrganisationInvitationInputSchema)])
}).strict();
var UserUpsertWithoutOrganisationInvitationInputSchema = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutOrganisationInvitationInputSchema), z.lazy(() => UserUncheckedUpdateWithoutOrganisationInvitationInputSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutOrganisationInvitationInputSchema), z.lazy(() => UserUncheckedCreateWithoutOrganisationInvitationInputSchema)])
}).strict();
var UserUpdateWithoutOrganisationInvitationInputSchema = z.object({
  publicId: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  role: z.union([z.lazy(() => GlobalRoleSchema), z.lazy(() => EnumGlobalRoleFieldUpdateOperationsInputSchema)]).optional(),
  userProfile: z.lazy(() => UserProfileUpdateOneWithoutUserNestedInputSchema).optional(),
  memberships: z.lazy(() => MembershipUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();
var UserUncheckedUpdateWithoutOrganisationInvitationInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  publicId: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  role: z.union([z.lazy(() => GlobalRoleSchema), z.lazy(() => EnumGlobalRoleFieldUpdateOperationsInputSchema)]).optional(),
  userProfileId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  memberships: z.lazy(() => MembershipUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();
var OrganisationUpsertWithoutOrganisationInvitationInputSchema = z.object({
  update: z.union([z.lazy(() => OrganisationUpdateWithoutOrganisationInvitationInputSchema), z.lazy(() => OrganisationUncheckedUpdateWithoutOrganisationInvitationInputSchema)]),
  create: z.union([z.lazy(() => OrganisationCreateWithoutOrganisationInvitationInputSchema), z.lazy(() => OrganisationUncheckedCreateWithoutOrganisationInvitationInputSchema)])
}).strict();
var OrganisationUpdateWithoutOrganisationInvitationInputSchema = z.object({
  publicId: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  membership: z.lazy(() => MembershipUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  channels: z.lazy(() => ChannelUpdateManyWithoutOrganisationNestedInputSchema).optional()
}).strict();
var OrganisationUncheckedUpdateWithoutOrganisationInvitationInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  publicId: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  membership: z.lazy(() => MembershipUncheckedUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  channels: z.lazy(() => ChannelUncheckedUpdateManyWithoutOrganisationNestedInputSchema).optional()
}).strict();
var OrganisationCreateWithoutMembershipInputSchema = z.object({
  publicId: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  channels: z.lazy(() => ChannelCreateNestedManyWithoutOrganisationInputSchema).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationCreateNestedManyWithoutOrganisationInputSchema).optional()
}).strict();
var OrganisationUncheckedCreateWithoutMembershipInputSchema = z.object({
  id: z.number().int().optional(),
  publicId: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  channels: z.lazy(() => ChannelUncheckedCreateNestedManyWithoutOrganisationInputSchema).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationUncheckedCreateNestedManyWithoutOrganisationInputSchema).optional()
}).strict();
var OrganisationCreateOrConnectWithoutMembershipInputSchema = z.object({
  where: z.lazy(() => OrganisationWhereUniqueInputSchema),
  create: z.union([z.lazy(() => OrganisationCreateWithoutMembershipInputSchema), z.lazy(() => OrganisationUncheckedCreateWithoutMembershipInputSchema)])
}).strict();
var UserCreateWithoutMembershipsInputSchema = z.object({
  publicId: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
  role: z.lazy(() => GlobalRoleSchema),
  userProfile: z.lazy(() => UserProfileCreateNestedOneWithoutUserInputSchema).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationCreateNestedManyWithoutCreatedByInputSchema).optional()
}).strict();
var UserUncheckedCreateWithoutMembershipsInputSchema = z.object({
  id: z.number().int().optional(),
  publicId: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
  role: z.lazy(() => GlobalRoleSchema),
  userProfileId: z.number().int(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationUncheckedCreateNestedManyWithoutCreatedByInputSchema).optional()
}).strict();
var UserCreateOrConnectWithoutMembershipsInputSchema = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([z.lazy(() => UserCreateWithoutMembershipsInputSchema), z.lazy(() => UserUncheckedCreateWithoutMembershipsInputSchema)])
}).strict();
var OrganisationUpsertWithoutMembershipInputSchema = z.object({
  update: z.union([z.lazy(() => OrganisationUpdateWithoutMembershipInputSchema), z.lazy(() => OrganisationUncheckedUpdateWithoutMembershipInputSchema)]),
  create: z.union([z.lazy(() => OrganisationCreateWithoutMembershipInputSchema), z.lazy(() => OrganisationUncheckedCreateWithoutMembershipInputSchema)])
}).strict();
var OrganisationUpdateWithoutMembershipInputSchema = z.object({
  publicId: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  channels: z.lazy(() => ChannelUpdateManyWithoutOrganisationNestedInputSchema).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationUpdateManyWithoutOrganisationNestedInputSchema).optional()
}).strict();
var OrganisationUncheckedUpdateWithoutMembershipInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  publicId: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  channels: z.lazy(() => ChannelUncheckedUpdateManyWithoutOrganisationNestedInputSchema).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationUncheckedUpdateManyWithoutOrganisationNestedInputSchema).optional()
}).strict();
var UserUpsertWithoutMembershipsInputSchema = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutMembershipsInputSchema), z.lazy(() => UserUncheckedUpdateWithoutMembershipsInputSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutMembershipsInputSchema), z.lazy(() => UserUncheckedCreateWithoutMembershipsInputSchema)])
}).strict();
var UserUpdateWithoutMembershipsInputSchema = z.object({
  publicId: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  role: z.union([z.lazy(() => GlobalRoleSchema), z.lazy(() => EnumGlobalRoleFieldUpdateOperationsInputSchema)]).optional(),
  userProfile: z.lazy(() => UserProfileUpdateOneWithoutUserNestedInputSchema).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationUpdateManyWithoutCreatedByNestedInputSchema).optional()
}).strict();
var UserUncheckedUpdateWithoutMembershipsInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  publicId: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  role: z.union([z.lazy(() => GlobalRoleSchema), z.lazy(() => EnumGlobalRoleFieldUpdateOperationsInputSchema)]).optional(),
  userProfileId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationUncheckedUpdateManyWithoutCreatedByNestedInputSchema).optional()
}).strict();
var UserProfileCreateWithoutUserInputSchema = z.object({
  publicId: z.string().cuid().optional(),
  profilePictureUrl: z.string().optional().nullable(),
  profileColor: z.string().optional(),
  username: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
var UserProfileUncheckedCreateWithoutUserInputSchema = z.object({
  id: z.number().int().optional(),
  publicId: z.string().cuid().optional(),
  profilePictureUrl: z.string().optional().nullable(),
  profileColor: z.string().optional(),
  username: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
var UserProfileCreateOrConnectWithoutUserInputSchema = z.object({
  where: z.lazy(() => UserProfileWhereUniqueInputSchema),
  create: z.union([z.lazy(() => UserProfileCreateWithoutUserInputSchema), z.lazy(() => UserProfileUncheckedCreateWithoutUserInputSchema)])
}).strict();
var MembershipCreateWithoutUserInputSchema = z.object({
  role: z.lazy(() => MembershipRoleSchema),
  invitedName: z.string().optional().nullable(),
  invitedEmail: z.string().optional().nullable(),
  organization: z.lazy(() => OrganisationCreateNestedOneWithoutMembershipInputSchema)
}).strict();
var MembershipUncheckedCreateWithoutUserInputSchema = z.object({
  id: z.number().int().optional(),
  role: z.lazy(() => MembershipRoleSchema),
  organizationId: z.number().int(),
  invitedName: z.string().optional().nullable(),
  invitedEmail: z.string().optional().nullable()
}).strict();
var MembershipCreateOrConnectWithoutUserInputSchema = z.object({
  where: z.lazy(() => MembershipWhereUniqueInputSchema),
  create: z.union([z.lazy(() => MembershipCreateWithoutUserInputSchema), z.lazy(() => MembershipUncheckedCreateWithoutUserInputSchema)])
}).strict();
var MembershipCreateManyUserInputEnvelopeSchema = z.object({
  data: z.union([z.lazy(() => MembershipCreateManyUserInputSchema), z.lazy(() => MembershipCreateManyUserInputSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var OrganisationInvitationCreateWithoutCreatedByInputSchema = z.object({
  publicId: z.string().cuid().optional(),
  issuedEmail: z.string(),
  createdAt: z.coerce.date().optional(),
  expiresAt: z.coerce.date(),
  organisation: z.lazy(() => OrganisationCreateNestedOneWithoutOrganisationInvitationInputSchema)
}).strict();
var OrganisationInvitationUncheckedCreateWithoutCreatedByInputSchema = z.object({
  id: z.number().int().optional(),
  publicId: z.string().cuid().optional(),
  issuedEmail: z.string(),
  createdAt: z.coerce.date().optional(),
  expiresAt: z.coerce.date(),
  organizationId: z.number().int()
}).strict();
var OrganisationInvitationCreateOrConnectWithoutCreatedByInputSchema = z.object({
  where: z.lazy(() => OrganisationInvitationWhereUniqueInputSchema),
  create: z.union([z.lazy(() => OrganisationInvitationCreateWithoutCreatedByInputSchema), z.lazy(() => OrganisationInvitationUncheckedCreateWithoutCreatedByInputSchema)])
}).strict();
var OrganisationInvitationCreateManyCreatedByInputEnvelopeSchema = z.object({
  data: z.union([z.lazy(() => OrganisationInvitationCreateManyCreatedByInputSchema), z.lazy(() => OrganisationInvitationCreateManyCreatedByInputSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var UserProfileUpsertWithoutUserInputSchema = z.object({
  update: z.union([z.lazy(() => UserProfileUpdateWithoutUserInputSchema), z.lazy(() => UserProfileUncheckedUpdateWithoutUserInputSchema)]),
  create: z.union([z.lazy(() => UserProfileCreateWithoutUserInputSchema), z.lazy(() => UserProfileUncheckedCreateWithoutUserInputSchema)])
}).strict();
var UserProfileUpdateWithoutUserInputSchema = z.object({
  publicId: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  profilePictureUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  profileColor: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  username: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var UserProfileUncheckedUpdateWithoutUserInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  publicId: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  profilePictureUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  profileColor: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  username: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var MembershipUpsertWithWhereUniqueWithoutUserInputSchema = z.object({
  where: z.lazy(() => MembershipWhereUniqueInputSchema),
  update: z.union([z.lazy(() => MembershipUpdateWithoutUserInputSchema), z.lazy(() => MembershipUncheckedUpdateWithoutUserInputSchema)]),
  create: z.union([z.lazy(() => MembershipCreateWithoutUserInputSchema), z.lazy(() => MembershipUncheckedCreateWithoutUserInputSchema)])
}).strict();
var MembershipUpdateWithWhereUniqueWithoutUserInputSchema = z.object({
  where: z.lazy(() => MembershipWhereUniqueInputSchema),
  data: z.union([z.lazy(() => MembershipUpdateWithoutUserInputSchema), z.lazy(() => MembershipUncheckedUpdateWithoutUserInputSchema)])
}).strict();
var MembershipUpdateManyWithWhereWithoutUserInputSchema = z.object({
  where: z.lazy(() => MembershipScalarWhereInputSchema),
  data: z.union([z.lazy(() => MembershipUpdateManyMutationInputSchema), z.lazy(() => MembershipUncheckedUpdateManyWithoutMembershipsInputSchema)])
}).strict();
var OrganisationInvitationUpsertWithWhereUniqueWithoutCreatedByInputSchema = z.object({
  where: z.lazy(() => OrganisationInvitationWhereUniqueInputSchema),
  update: z.union([z.lazy(() => OrganisationInvitationUpdateWithoutCreatedByInputSchema), z.lazy(() => OrganisationInvitationUncheckedUpdateWithoutCreatedByInputSchema)]),
  create: z.union([z.lazy(() => OrganisationInvitationCreateWithoutCreatedByInputSchema), z.lazy(() => OrganisationInvitationUncheckedCreateWithoutCreatedByInputSchema)])
}).strict();
var OrganisationInvitationUpdateWithWhereUniqueWithoutCreatedByInputSchema = z.object({
  where: z.lazy(() => OrganisationInvitationWhereUniqueInputSchema),
  data: z.union([z.lazy(() => OrganisationInvitationUpdateWithoutCreatedByInputSchema), z.lazy(() => OrganisationInvitationUncheckedUpdateWithoutCreatedByInputSchema)])
}).strict();
var OrganisationInvitationUpdateManyWithWhereWithoutCreatedByInputSchema = z.object({
  where: z.lazy(() => OrganisationInvitationScalarWhereInputSchema),
  data: z.union([z.lazy(() => OrganisationInvitationUpdateManyMutationInputSchema), z.lazy(() => OrganisationInvitationUncheckedUpdateManyWithoutOrganisationInvitationInputSchema)])
}).strict();
var UserCreateWithoutUserProfileInputSchema = z.object({
  publicId: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
  role: z.lazy(() => GlobalRoleSchema),
  memberships: z.lazy(() => MembershipCreateNestedManyWithoutUserInputSchema).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationCreateNestedManyWithoutCreatedByInputSchema).optional()
}).strict();
var UserUncheckedCreateWithoutUserProfileInputSchema = z.object({
  id: z.number().int().optional(),
  publicId: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
  role: z.lazy(() => GlobalRoleSchema),
  memberships: z.lazy(() => MembershipUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationUncheckedCreateNestedManyWithoutCreatedByInputSchema).optional()
}).strict();
var UserCreateOrConnectWithoutUserProfileInputSchema = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([z.lazy(() => UserCreateWithoutUserProfileInputSchema), z.lazy(() => UserUncheckedCreateWithoutUserProfileInputSchema)])
}).strict();
var UserCreateManyUserProfileInputEnvelopeSchema = z.object({
  data: z.union([z.lazy(() => UserCreateManyUserProfileInputSchema), z.lazy(() => UserCreateManyUserProfileInputSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var UserUpsertWithWhereUniqueWithoutUserProfileInputSchema = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  update: z.union([z.lazy(() => UserUpdateWithoutUserProfileInputSchema), z.lazy(() => UserUncheckedUpdateWithoutUserProfileInputSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutUserProfileInputSchema), z.lazy(() => UserUncheckedCreateWithoutUserProfileInputSchema)])
}).strict();
var UserUpdateWithWhereUniqueWithoutUserProfileInputSchema = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  data: z.union([z.lazy(() => UserUpdateWithoutUserProfileInputSchema), z.lazy(() => UserUncheckedUpdateWithoutUserProfileInputSchema)])
}).strict();
var UserUpdateManyWithWhereWithoutUserProfileInputSchema = z.object({
  where: z.lazy(() => UserScalarWhereInputSchema),
  data: z.union([z.lazy(() => UserUpdateManyMutationInputSchema), z.lazy(() => UserUncheckedUpdateManyWithoutUserInputSchema)])
}).strict();
var UserScalarWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => UserScalarWhereInputSchema), z.lazy(() => UserScalarWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => UserScalarWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserScalarWhereInputSchema), z.lazy(() => UserScalarWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  publicId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  password: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  role: z.union([z.lazy(() => EnumGlobalRoleFilterSchema), z.lazy(() => GlobalRoleSchema)]).optional(),
  userProfileId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional()
}).strict();
var OrganisationCreateWithoutChannelsInputSchema = z.object({
  publicId: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  membership: z.lazy(() => MembershipCreateNestedManyWithoutOrganizationInputSchema).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationCreateNestedManyWithoutOrganisationInputSchema).optional()
}).strict();
var OrganisationUncheckedCreateWithoutChannelsInputSchema = z.object({
  id: z.number().int().optional(),
  publicId: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  membership: z.lazy(() => MembershipUncheckedCreateNestedManyWithoutOrganizationInputSchema).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationUncheckedCreateNestedManyWithoutOrganisationInputSchema).optional()
}).strict();
var OrganisationCreateOrConnectWithoutChannelsInputSchema = z.object({
  where: z.lazy(() => OrganisationWhereUniqueInputSchema),
  create: z.union([z.lazy(() => OrganisationCreateWithoutChannelsInputSchema), z.lazy(() => OrganisationUncheckedCreateWithoutChannelsInputSchema)])
}).strict();
var OrganisationUpsertWithoutChannelsInputSchema = z.object({
  update: z.union([z.lazy(() => OrganisationUpdateWithoutChannelsInputSchema), z.lazy(() => OrganisationUncheckedUpdateWithoutChannelsInputSchema)]),
  create: z.union([z.lazy(() => OrganisationCreateWithoutChannelsInputSchema), z.lazy(() => OrganisationUncheckedCreateWithoutChannelsInputSchema)])
}).strict();
var OrganisationUpdateWithoutChannelsInputSchema = z.object({
  publicId: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  membership: z.lazy(() => MembershipUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationUpdateManyWithoutOrganisationNestedInputSchema).optional()
}).strict();
var OrganisationUncheckedUpdateWithoutChannelsInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  publicId: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  membership: z.lazy(() => MembershipUncheckedUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationUncheckedUpdateManyWithoutOrganisationNestedInputSchema).optional()
}).strict();
var MessageCreateWithoutMediaInputSchema = z.object({
  id: z.string().cuid().optional(),
  text: z.string(),
  senderId: z.string(),
  receiverId: z.string().optional().nullable(),
  channelId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
var MessageUncheckedCreateWithoutMediaInputSchema = z.object({
  id: z.string().cuid().optional(),
  text: z.string(),
  senderId: z.string(),
  receiverId: z.string().optional().nullable(),
  channelId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
var MessageCreateOrConnectWithoutMediaInputSchema = z.object({
  where: z.lazy(() => MessageWhereUniqueInputSchema),
  create: z.union([z.lazy(() => MessageCreateWithoutMediaInputSchema), z.lazy(() => MessageUncheckedCreateWithoutMediaInputSchema)])
}).strict();
var MessageUpsertWithoutMediaInputSchema = z.object({
  update: z.union([z.lazy(() => MessageUpdateWithoutMediaInputSchema), z.lazy(() => MessageUncheckedUpdateWithoutMediaInputSchema)]),
  create: z.union([z.lazy(() => MessageCreateWithoutMediaInputSchema), z.lazy(() => MessageUncheckedCreateWithoutMediaInputSchema)])
}).strict();
var MessageUpdateWithoutMediaInputSchema = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  text: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  senderId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  receiverId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  channelId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var MessageUncheckedUpdateWithoutMediaInputSchema = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  text: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  senderId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  receiverId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  channelId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var MediaCreateWithoutMessageInputSchema = z.object({
  id: z.string().cuid().optional(),
  kind: z.string(),
  filename: z.string(),
  size: z.number().int(),
  width: z.number().int().optional(),
  height: z.number().int().optional(),
  path: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
var MediaUncheckedCreateWithoutMessageInputSchema = z.object({
  id: z.string().cuid().optional(),
  kind: z.string(),
  filename: z.string(),
  size: z.number().int(),
  width: z.number().int().optional(),
  height: z.number().int().optional(),
  path: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
var MediaCreateOrConnectWithoutMessageInputSchema = z.object({
  where: z.lazy(() => MediaWhereUniqueInputSchema),
  create: z.union([z.lazy(() => MediaCreateWithoutMessageInputSchema), z.lazy(() => MediaUncheckedCreateWithoutMessageInputSchema)])
}).strict();
var MediaCreateManyMessageInputEnvelopeSchema = z.object({
  data: z.union([z.lazy(() => MediaCreateManyMessageInputSchema), z.lazy(() => MediaCreateManyMessageInputSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var MediaUpsertWithWhereUniqueWithoutMessageInputSchema = z.object({
  where: z.lazy(() => MediaWhereUniqueInputSchema),
  update: z.union([z.lazy(() => MediaUpdateWithoutMessageInputSchema), z.lazy(() => MediaUncheckedUpdateWithoutMessageInputSchema)]),
  create: z.union([z.lazy(() => MediaCreateWithoutMessageInputSchema), z.lazy(() => MediaUncheckedCreateWithoutMessageInputSchema)])
}).strict();
var MediaUpdateWithWhereUniqueWithoutMessageInputSchema = z.object({
  where: z.lazy(() => MediaWhereUniqueInputSchema),
  data: z.union([z.lazy(() => MediaUpdateWithoutMessageInputSchema), z.lazy(() => MediaUncheckedUpdateWithoutMessageInputSchema)])
}).strict();
var MediaUpdateManyWithWhereWithoutMessageInputSchema = z.object({
  where: z.lazy(() => MediaScalarWhereInputSchema),
  data: z.union([z.lazy(() => MediaUpdateManyMutationInputSchema), z.lazy(() => MediaUncheckedUpdateManyWithoutMediaInputSchema)])
}).strict();
var MediaScalarWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => MediaScalarWhereInputSchema), z.lazy(() => MediaScalarWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => MediaScalarWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => MediaScalarWhereInputSchema), z.lazy(() => MediaScalarWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  kind: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  filename: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  size: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  width: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  height: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  path: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  messageId: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable()
}).strict();
var MembershipCreateManyOrganizationInputSchema = z.object({
  id: z.number().int().optional(),
  role: z.lazy(() => MembershipRoleSchema),
  userId: z.number().int().optional().nullable(),
  invitedName: z.string().optional().nullable(),
  invitedEmail: z.string().optional().nullable()
}).strict();
var ChannelCreateManyOrganisationInputSchema = z.object({
  id: z.string().cuid().optional(),
  kind: z.lazy(() => ChannelKindSchema).optional(),
  createdBy: z.string(),
  name: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
var OrganisationInvitationCreateManyOrganisationInputSchema = z.object({
  id: z.number().int().optional(),
  publicId: z.string().cuid().optional(),
  issuedEmail: z.string(),
  createdAt: z.coerce.date().optional(),
  expiresAt: z.coerce.date(),
  creatorId: z.number().int()
}).strict();
var MembershipUpdateWithoutOrganizationInputSchema = z.object({
  role: z.union([z.lazy(() => MembershipRoleSchema), z.lazy(() => EnumMembershipRoleFieldUpdateOperationsInputSchema)]).optional(),
  invitedName: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  invitedEmail: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  user: z.lazy(() => UserUpdateOneWithoutMembershipsNestedInputSchema).optional()
}).strict();
var MembershipUncheckedUpdateWithoutOrganizationInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  role: z.union([z.lazy(() => MembershipRoleSchema), z.lazy(() => EnumMembershipRoleFieldUpdateOperationsInputSchema)]).optional(),
  userId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  invitedName: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  invitedEmail: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var MembershipUncheckedUpdateManyWithoutMembershipInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  role: z.union([z.lazy(() => MembershipRoleSchema), z.lazy(() => EnumMembershipRoleFieldUpdateOperationsInputSchema)]).optional(),
  userId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  invitedName: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  invitedEmail: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var ChannelUpdateWithoutOrganisationInputSchema = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  kind: z.union([z.lazy(() => ChannelKindSchema), z.lazy(() => EnumChannelKindFieldUpdateOperationsInputSchema)]).optional(),
  createdBy: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var ChannelUncheckedUpdateWithoutOrganisationInputSchema = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  kind: z.union([z.lazy(() => ChannelKindSchema), z.lazy(() => EnumChannelKindFieldUpdateOperationsInputSchema)]).optional(),
  createdBy: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var ChannelUncheckedUpdateManyWithoutChannelsInputSchema = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  kind: z.union([z.lazy(() => ChannelKindSchema), z.lazy(() => EnumChannelKindFieldUpdateOperationsInputSchema)]).optional(),
  createdBy: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var OrganisationInvitationUpdateWithoutOrganisationInputSchema = z.object({
  publicId: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  issuedEmail: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  expiresAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  createdBy: z.lazy(() => UserUpdateOneRequiredWithoutOrganisationInvitationNestedInputSchema).optional()
}).strict();
var OrganisationInvitationUncheckedUpdateWithoutOrganisationInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  publicId: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  issuedEmail: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  expiresAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  creatorId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var OrganisationInvitationUncheckedUpdateManyWithoutOrganisationInvitationInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  publicId: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  issuedEmail: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  expiresAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  creatorId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var MembershipCreateManyUserInputSchema = z.object({
  id: z.number().int().optional(),
  role: z.lazy(() => MembershipRoleSchema),
  organizationId: z.number().int(),
  invitedName: z.string().optional().nullable(),
  invitedEmail: z.string().optional().nullable()
}).strict();
var OrganisationInvitationCreateManyCreatedByInputSchema = z.object({
  id: z.number().int().optional(),
  publicId: z.string().cuid().optional(),
  issuedEmail: z.string(),
  createdAt: z.coerce.date().optional(),
  expiresAt: z.coerce.date(),
  organizationId: z.number().int()
}).strict();
var MembershipUpdateWithoutUserInputSchema = z.object({
  role: z.union([z.lazy(() => MembershipRoleSchema), z.lazy(() => EnumMembershipRoleFieldUpdateOperationsInputSchema)]).optional(),
  invitedName: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  invitedEmail: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  organization: z.lazy(() => OrganisationUpdateOneRequiredWithoutMembershipNestedInputSchema).optional()
}).strict();
var MembershipUncheckedUpdateWithoutUserInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  role: z.union([z.lazy(() => MembershipRoleSchema), z.lazy(() => EnumMembershipRoleFieldUpdateOperationsInputSchema)]).optional(),
  organizationId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  invitedName: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  invitedEmail: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var MembershipUncheckedUpdateManyWithoutMembershipsInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  role: z.union([z.lazy(() => MembershipRoleSchema), z.lazy(() => EnumMembershipRoleFieldUpdateOperationsInputSchema)]).optional(),
  organizationId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  invitedName: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  invitedEmail: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var OrganisationInvitationUpdateWithoutCreatedByInputSchema = z.object({
  publicId: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  issuedEmail: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  expiresAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  organisation: z.lazy(() => OrganisationUpdateOneRequiredWithoutOrganisationInvitationNestedInputSchema).optional()
}).strict();
var OrganisationInvitationUncheckedUpdateWithoutCreatedByInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  publicId: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  issuedEmail: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  expiresAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  organizationId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var UserCreateManyUserProfileInputSchema = z.object({
  id: z.number().int().optional(),
  publicId: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
  role: z.lazy(() => GlobalRoleSchema)
}).strict();
var UserUpdateWithoutUserProfileInputSchema = z.object({
  publicId: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  role: z.union([z.lazy(() => GlobalRoleSchema), z.lazy(() => EnumGlobalRoleFieldUpdateOperationsInputSchema)]).optional(),
  memberships: z.lazy(() => MembershipUpdateManyWithoutUserNestedInputSchema).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationUpdateManyWithoutCreatedByNestedInputSchema).optional()
}).strict();
var UserUncheckedUpdateWithoutUserProfileInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  publicId: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  role: z.union([z.lazy(() => GlobalRoleSchema), z.lazy(() => EnumGlobalRoleFieldUpdateOperationsInputSchema)]).optional(),
  memberships: z.lazy(() => MembershipUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationUncheckedUpdateManyWithoutCreatedByNestedInputSchema).optional()
}).strict();
var UserUncheckedUpdateManyWithoutUserInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  publicId: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  role: z.union([z.lazy(() => GlobalRoleSchema), z.lazy(() => EnumGlobalRoleFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var MediaCreateManyMessageInputSchema = z.object({
  id: z.string().cuid().optional(),
  kind: z.string(),
  filename: z.string(),
  size: z.number().int(),
  width: z.number().int().optional(),
  height: z.number().int().optional(),
  path: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
var MediaUpdateWithoutMessageInputSchema = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  kind: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  filename: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  size: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  width: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  height: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  path: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var MediaUncheckedUpdateWithoutMessageInputSchema = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  kind: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  filename: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  size: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  width: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  height: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  path: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var MediaUncheckedUpdateManyWithoutMediaInputSchema = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  kind: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  filename: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  size: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  width: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  height: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  path: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var OrganisationFindFirstArgsSchema = z.object({
  select: OrganisationSelectSchema.optional(),
  include: OrganisationIncludeSchema.optional(),
  where: OrganisationWhereInputSchema.optional(),
  orderBy: z.union([OrganisationOrderByWithRelationInputSchema.array(), OrganisationOrderByWithRelationInputSchema]).optional(),
  cursor: OrganisationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: OrganisationScalarFieldEnumSchema.array().optional()
}).strict();
var OrganisationFindFirstOrThrowArgsSchema = z.object({
  select: OrganisationSelectSchema.optional(),
  include: OrganisationIncludeSchema.optional(),
  where: OrganisationWhereInputSchema.optional(),
  orderBy: z.union([OrganisationOrderByWithRelationInputSchema.array(), OrganisationOrderByWithRelationInputSchema]).optional(),
  cursor: OrganisationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: OrganisationScalarFieldEnumSchema.array().optional()
}).strict();
var OrganisationFindManyArgsSchema = z.object({
  select: OrganisationSelectSchema.optional(),
  include: OrganisationIncludeSchema.optional(),
  where: OrganisationWhereInputSchema.optional(),
  orderBy: z.union([OrganisationOrderByWithRelationInputSchema.array(), OrganisationOrderByWithRelationInputSchema]).optional(),
  cursor: OrganisationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: OrganisationScalarFieldEnumSchema.array().optional()
}).strict();
var OrganisationAggregateArgsSchema = z.object({
  where: OrganisationWhereInputSchema.optional(),
  orderBy: z.union([OrganisationOrderByWithRelationInputSchema.array(), OrganisationOrderByWithRelationInputSchema]).optional(),
  cursor: OrganisationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var OrganisationGroupByArgsSchema = z.object({
  where: OrganisationWhereInputSchema.optional(),
  orderBy: z.union([OrganisationOrderByWithAggregationInputSchema.array(), OrganisationOrderByWithAggregationInputSchema]).optional(),
  by: OrganisationScalarFieldEnumSchema.array(),
  having: OrganisationScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var OrganisationFindUniqueArgsSchema = z.object({
  select: OrganisationSelectSchema.optional(),
  include: OrganisationIncludeSchema.optional(),
  where: OrganisationWhereUniqueInputSchema
}).strict();
var OrganisationFindUniqueOrThrowArgsSchema = z.object({
  select: OrganisationSelectSchema.optional(),
  include: OrganisationIncludeSchema.optional(),
  where: OrganisationWhereUniqueInputSchema
}).strict();
var OrganisationInvitationFindFirstArgsSchema = z.object({
  select: OrganisationInvitationSelectSchema.optional(),
  include: OrganisationInvitationIncludeSchema.optional(),
  where: OrganisationInvitationWhereInputSchema.optional(),
  orderBy: z.union([OrganisationInvitationOrderByWithRelationInputSchema.array(), OrganisationInvitationOrderByWithRelationInputSchema]).optional(),
  cursor: OrganisationInvitationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: OrganisationInvitationScalarFieldEnumSchema.array().optional()
}).strict();
var OrganisationInvitationFindFirstOrThrowArgsSchema = z.object({
  select: OrganisationInvitationSelectSchema.optional(),
  include: OrganisationInvitationIncludeSchema.optional(),
  where: OrganisationInvitationWhereInputSchema.optional(),
  orderBy: z.union([OrganisationInvitationOrderByWithRelationInputSchema.array(), OrganisationInvitationOrderByWithRelationInputSchema]).optional(),
  cursor: OrganisationInvitationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: OrganisationInvitationScalarFieldEnumSchema.array().optional()
}).strict();
var OrganisationInvitationFindManyArgsSchema = z.object({
  select: OrganisationInvitationSelectSchema.optional(),
  include: OrganisationInvitationIncludeSchema.optional(),
  where: OrganisationInvitationWhereInputSchema.optional(),
  orderBy: z.union([OrganisationInvitationOrderByWithRelationInputSchema.array(), OrganisationInvitationOrderByWithRelationInputSchema]).optional(),
  cursor: OrganisationInvitationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: OrganisationInvitationScalarFieldEnumSchema.array().optional()
}).strict();
var OrganisationInvitationAggregateArgsSchema = z.object({
  where: OrganisationInvitationWhereInputSchema.optional(),
  orderBy: z.union([OrganisationInvitationOrderByWithRelationInputSchema.array(), OrganisationInvitationOrderByWithRelationInputSchema]).optional(),
  cursor: OrganisationInvitationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var OrganisationInvitationGroupByArgsSchema = z.object({
  where: OrganisationInvitationWhereInputSchema.optional(),
  orderBy: z.union([OrganisationInvitationOrderByWithAggregationInputSchema.array(), OrganisationInvitationOrderByWithAggregationInputSchema]).optional(),
  by: OrganisationInvitationScalarFieldEnumSchema.array(),
  having: OrganisationInvitationScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var OrganisationInvitationFindUniqueArgsSchema = z.object({
  select: OrganisationInvitationSelectSchema.optional(),
  include: OrganisationInvitationIncludeSchema.optional(),
  where: OrganisationInvitationWhereUniqueInputSchema
}).strict();
var OrganisationInvitationFindUniqueOrThrowArgsSchema = z.object({
  select: OrganisationInvitationSelectSchema.optional(),
  include: OrganisationInvitationIncludeSchema.optional(),
  where: OrganisationInvitationWhereUniqueInputSchema
}).strict();
var MembershipFindFirstArgsSchema = z.object({
  select: MembershipSelectSchema.optional(),
  include: MembershipIncludeSchema.optional(),
  where: MembershipWhereInputSchema.optional(),
  orderBy: z.union([MembershipOrderByWithRelationInputSchema.array(), MembershipOrderByWithRelationInputSchema]).optional(),
  cursor: MembershipWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: MembershipScalarFieldEnumSchema.array().optional()
}).strict();
var MembershipFindFirstOrThrowArgsSchema = z.object({
  select: MembershipSelectSchema.optional(),
  include: MembershipIncludeSchema.optional(),
  where: MembershipWhereInputSchema.optional(),
  orderBy: z.union([MembershipOrderByWithRelationInputSchema.array(), MembershipOrderByWithRelationInputSchema]).optional(),
  cursor: MembershipWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: MembershipScalarFieldEnumSchema.array().optional()
}).strict();
var MembershipFindManyArgsSchema = z.object({
  select: MembershipSelectSchema.optional(),
  include: MembershipIncludeSchema.optional(),
  where: MembershipWhereInputSchema.optional(),
  orderBy: z.union([MembershipOrderByWithRelationInputSchema.array(), MembershipOrderByWithRelationInputSchema]).optional(),
  cursor: MembershipWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: MembershipScalarFieldEnumSchema.array().optional()
}).strict();
var MembershipAggregateArgsSchema = z.object({
  where: MembershipWhereInputSchema.optional(),
  orderBy: z.union([MembershipOrderByWithRelationInputSchema.array(), MembershipOrderByWithRelationInputSchema]).optional(),
  cursor: MembershipWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var MembershipGroupByArgsSchema = z.object({
  where: MembershipWhereInputSchema.optional(),
  orderBy: z.union([MembershipOrderByWithAggregationInputSchema.array(), MembershipOrderByWithAggregationInputSchema]).optional(),
  by: MembershipScalarFieldEnumSchema.array(),
  having: MembershipScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var MembershipFindUniqueArgsSchema = z.object({
  select: MembershipSelectSchema.optional(),
  include: MembershipIncludeSchema.optional(),
  where: MembershipWhereUniqueInputSchema
}).strict();
var MembershipFindUniqueOrThrowArgsSchema = z.object({
  select: MembershipSelectSchema.optional(),
  include: MembershipIncludeSchema.optional(),
  where: MembershipWhereUniqueInputSchema
}).strict();
var UserFindFirstArgsSchema = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserScalarFieldEnumSchema.array().optional()
}).strict();
var UserFindFirstOrThrowArgsSchema = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserScalarFieldEnumSchema.array().optional()
}).strict();
var UserFindManyArgsSchema = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserScalarFieldEnumSchema.array().optional()
}).strict();
var UserAggregateArgsSchema = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var UserGroupByArgsSchema = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([UserOrderByWithAggregationInputSchema.array(), UserOrderByWithAggregationInputSchema]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var UserFindUniqueArgsSchema = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema
}).strict();
var UserFindUniqueOrThrowArgsSchema = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema
}).strict();
var UserProfileFindFirstArgsSchema = z.object({
  select: UserProfileSelectSchema.optional(),
  include: UserProfileIncludeSchema.optional(),
  where: UserProfileWhereInputSchema.optional(),
  orderBy: z.union([UserProfileOrderByWithRelationInputSchema.array(), UserProfileOrderByWithRelationInputSchema]).optional(),
  cursor: UserProfileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserProfileScalarFieldEnumSchema.array().optional()
}).strict();
var UserProfileFindFirstOrThrowArgsSchema = z.object({
  select: UserProfileSelectSchema.optional(),
  include: UserProfileIncludeSchema.optional(),
  where: UserProfileWhereInputSchema.optional(),
  orderBy: z.union([UserProfileOrderByWithRelationInputSchema.array(), UserProfileOrderByWithRelationInputSchema]).optional(),
  cursor: UserProfileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserProfileScalarFieldEnumSchema.array().optional()
}).strict();
var UserProfileFindManyArgsSchema = z.object({
  select: UserProfileSelectSchema.optional(),
  include: UserProfileIncludeSchema.optional(),
  where: UserProfileWhereInputSchema.optional(),
  orderBy: z.union([UserProfileOrderByWithRelationInputSchema.array(), UserProfileOrderByWithRelationInputSchema]).optional(),
  cursor: UserProfileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserProfileScalarFieldEnumSchema.array().optional()
}).strict();
var UserProfileAggregateArgsSchema = z.object({
  where: UserProfileWhereInputSchema.optional(),
  orderBy: z.union([UserProfileOrderByWithRelationInputSchema.array(), UserProfileOrderByWithRelationInputSchema]).optional(),
  cursor: UserProfileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var UserProfileGroupByArgsSchema = z.object({
  where: UserProfileWhereInputSchema.optional(),
  orderBy: z.union([UserProfileOrderByWithAggregationInputSchema.array(), UserProfileOrderByWithAggregationInputSchema]).optional(),
  by: UserProfileScalarFieldEnumSchema.array(),
  having: UserProfileScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var UserProfileFindUniqueArgsSchema = z.object({
  select: UserProfileSelectSchema.optional(),
  include: UserProfileIncludeSchema.optional(),
  where: UserProfileWhereUniqueInputSchema
}).strict();
var UserProfileFindUniqueOrThrowArgsSchema = z.object({
  select: UserProfileSelectSchema.optional(),
  include: UserProfileIncludeSchema.optional(),
  where: UserProfileWhereUniqueInputSchema
}).strict();
var ChannelFindFirstArgsSchema = z.object({
  select: ChannelSelectSchema.optional(),
  include: ChannelIncludeSchema.optional(),
  where: ChannelWhereInputSchema.optional(),
  orderBy: z.union([ChannelOrderByWithRelationInputSchema.array(), ChannelOrderByWithRelationInputSchema]).optional(),
  cursor: ChannelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ChannelScalarFieldEnumSchema.array().optional()
}).strict();
var ChannelFindFirstOrThrowArgsSchema = z.object({
  select: ChannelSelectSchema.optional(),
  include: ChannelIncludeSchema.optional(),
  where: ChannelWhereInputSchema.optional(),
  orderBy: z.union([ChannelOrderByWithRelationInputSchema.array(), ChannelOrderByWithRelationInputSchema]).optional(),
  cursor: ChannelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ChannelScalarFieldEnumSchema.array().optional()
}).strict();
var ChannelFindManyArgsSchema = z.object({
  select: ChannelSelectSchema.optional(),
  include: ChannelIncludeSchema.optional(),
  where: ChannelWhereInputSchema.optional(),
  orderBy: z.union([ChannelOrderByWithRelationInputSchema.array(), ChannelOrderByWithRelationInputSchema]).optional(),
  cursor: ChannelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ChannelScalarFieldEnumSchema.array().optional()
}).strict();
var ChannelAggregateArgsSchema = z.object({
  where: ChannelWhereInputSchema.optional(),
  orderBy: z.union([ChannelOrderByWithRelationInputSchema.array(), ChannelOrderByWithRelationInputSchema]).optional(),
  cursor: ChannelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var ChannelGroupByArgsSchema = z.object({
  where: ChannelWhereInputSchema.optional(),
  orderBy: z.union([ChannelOrderByWithAggregationInputSchema.array(), ChannelOrderByWithAggregationInputSchema]).optional(),
  by: ChannelScalarFieldEnumSchema.array(),
  having: ChannelScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var ChannelFindUniqueArgsSchema = z.object({
  select: ChannelSelectSchema.optional(),
  include: ChannelIncludeSchema.optional(),
  where: ChannelWhereUniqueInputSchema
}).strict();
var ChannelFindUniqueOrThrowArgsSchema = z.object({
  select: ChannelSelectSchema.optional(),
  include: ChannelIncludeSchema.optional(),
  where: ChannelWhereUniqueInputSchema
}).strict();
var MediaFindFirstArgsSchema = z.object({
  select: MediaSelectSchema.optional(),
  include: MediaIncludeSchema.optional(),
  where: MediaWhereInputSchema.optional(),
  orderBy: z.union([MediaOrderByWithRelationInputSchema.array(), MediaOrderByWithRelationInputSchema]).optional(),
  cursor: MediaWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: MediaScalarFieldEnumSchema.array().optional()
}).strict();
var MediaFindFirstOrThrowArgsSchema = z.object({
  select: MediaSelectSchema.optional(),
  include: MediaIncludeSchema.optional(),
  where: MediaWhereInputSchema.optional(),
  orderBy: z.union([MediaOrderByWithRelationInputSchema.array(), MediaOrderByWithRelationInputSchema]).optional(),
  cursor: MediaWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: MediaScalarFieldEnumSchema.array().optional()
}).strict();
var MediaFindManyArgsSchema = z.object({
  select: MediaSelectSchema.optional(),
  include: MediaIncludeSchema.optional(),
  where: MediaWhereInputSchema.optional(),
  orderBy: z.union([MediaOrderByWithRelationInputSchema.array(), MediaOrderByWithRelationInputSchema]).optional(),
  cursor: MediaWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: MediaScalarFieldEnumSchema.array().optional()
}).strict();
var MediaAggregateArgsSchema = z.object({
  where: MediaWhereInputSchema.optional(),
  orderBy: z.union([MediaOrderByWithRelationInputSchema.array(), MediaOrderByWithRelationInputSchema]).optional(),
  cursor: MediaWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var MediaGroupByArgsSchema = z.object({
  where: MediaWhereInputSchema.optional(),
  orderBy: z.union([MediaOrderByWithAggregationInputSchema.array(), MediaOrderByWithAggregationInputSchema]).optional(),
  by: MediaScalarFieldEnumSchema.array(),
  having: MediaScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var MediaFindUniqueArgsSchema = z.object({
  select: MediaSelectSchema.optional(),
  include: MediaIncludeSchema.optional(),
  where: MediaWhereUniqueInputSchema
}).strict();
var MediaFindUniqueOrThrowArgsSchema = z.object({
  select: MediaSelectSchema.optional(),
  include: MediaIncludeSchema.optional(),
  where: MediaWhereUniqueInputSchema
}).strict();
var MessageFindFirstArgsSchema = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  where: MessageWhereInputSchema.optional(),
  orderBy: z.union([MessageOrderByWithRelationInputSchema.array(), MessageOrderByWithRelationInputSchema]).optional(),
  cursor: MessageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: MessageScalarFieldEnumSchema.array().optional()
}).strict();
var MessageFindFirstOrThrowArgsSchema = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  where: MessageWhereInputSchema.optional(),
  orderBy: z.union([MessageOrderByWithRelationInputSchema.array(), MessageOrderByWithRelationInputSchema]).optional(),
  cursor: MessageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: MessageScalarFieldEnumSchema.array().optional()
}).strict();
var MessageFindManyArgsSchema = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  where: MessageWhereInputSchema.optional(),
  orderBy: z.union([MessageOrderByWithRelationInputSchema.array(), MessageOrderByWithRelationInputSchema]).optional(),
  cursor: MessageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: MessageScalarFieldEnumSchema.array().optional()
}).strict();
var MessageAggregateArgsSchema = z.object({
  where: MessageWhereInputSchema.optional(),
  orderBy: z.union([MessageOrderByWithRelationInputSchema.array(), MessageOrderByWithRelationInputSchema]).optional(),
  cursor: MessageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var MessageGroupByArgsSchema = z.object({
  where: MessageWhereInputSchema.optional(),
  orderBy: z.union([MessageOrderByWithAggregationInputSchema.array(), MessageOrderByWithAggregationInputSchema]).optional(),
  by: MessageScalarFieldEnumSchema.array(),
  having: MessageScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var MessageFindUniqueArgsSchema = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  where: MessageWhereUniqueInputSchema
}).strict();
var MessageFindUniqueOrThrowArgsSchema = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  where: MessageWhereUniqueInputSchema
}).strict();
var UserNotificationsFindFirstArgsSchema = z.object({
  select: UserNotificationsSelectSchema.optional(),
  where: UserNotificationsWhereInputSchema.optional(),
  orderBy: z.union([UserNotificationsOrderByWithRelationInputSchema.array(), UserNotificationsOrderByWithRelationInputSchema]).optional(),
  cursor: UserNotificationsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserNotificationsScalarFieldEnumSchema.array().optional()
}).strict();
var UserNotificationsFindFirstOrThrowArgsSchema = z.object({
  select: UserNotificationsSelectSchema.optional(),
  where: UserNotificationsWhereInputSchema.optional(),
  orderBy: z.union([UserNotificationsOrderByWithRelationInputSchema.array(), UserNotificationsOrderByWithRelationInputSchema]).optional(),
  cursor: UserNotificationsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserNotificationsScalarFieldEnumSchema.array().optional()
}).strict();
var UserNotificationsFindManyArgsSchema = z.object({
  select: UserNotificationsSelectSchema.optional(),
  where: UserNotificationsWhereInputSchema.optional(),
  orderBy: z.union([UserNotificationsOrderByWithRelationInputSchema.array(), UserNotificationsOrderByWithRelationInputSchema]).optional(),
  cursor: UserNotificationsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserNotificationsScalarFieldEnumSchema.array().optional()
}).strict();
var UserNotificationsAggregateArgsSchema = z.object({
  where: UserNotificationsWhereInputSchema.optional(),
  orderBy: z.union([UserNotificationsOrderByWithRelationInputSchema.array(), UserNotificationsOrderByWithRelationInputSchema]).optional(),
  cursor: UserNotificationsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var UserNotificationsGroupByArgsSchema = z.object({
  where: UserNotificationsWhereInputSchema.optional(),
  orderBy: z.union([UserNotificationsOrderByWithAggregationInputSchema.array(), UserNotificationsOrderByWithAggregationInputSchema]).optional(),
  by: UserNotificationsScalarFieldEnumSchema.array(),
  having: UserNotificationsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var UserNotificationsFindUniqueArgsSchema = z.object({
  select: UserNotificationsSelectSchema.optional(),
  where: UserNotificationsWhereUniqueInputSchema
}).strict();
var UserNotificationsFindUniqueOrThrowArgsSchema = z.object({
  select: UserNotificationsSelectSchema.optional(),
  where: UserNotificationsWhereUniqueInputSchema
}).strict();
var InvitationCodeFindFirstArgsSchema = z.object({
  select: InvitationCodeSelectSchema.optional(),
  where: InvitationCodeWhereInputSchema.optional(),
  orderBy: z.union([InvitationCodeOrderByWithRelationInputSchema.array(), InvitationCodeOrderByWithRelationInputSchema]).optional(),
  cursor: InvitationCodeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: InvitationCodeScalarFieldEnumSchema.array().optional()
}).strict();
var InvitationCodeFindFirstOrThrowArgsSchema = z.object({
  select: InvitationCodeSelectSchema.optional(),
  where: InvitationCodeWhereInputSchema.optional(),
  orderBy: z.union([InvitationCodeOrderByWithRelationInputSchema.array(), InvitationCodeOrderByWithRelationInputSchema]).optional(),
  cursor: InvitationCodeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: InvitationCodeScalarFieldEnumSchema.array().optional()
}).strict();
var InvitationCodeFindManyArgsSchema = z.object({
  select: InvitationCodeSelectSchema.optional(),
  where: InvitationCodeWhereInputSchema.optional(),
  orderBy: z.union([InvitationCodeOrderByWithRelationInputSchema.array(), InvitationCodeOrderByWithRelationInputSchema]).optional(),
  cursor: InvitationCodeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: InvitationCodeScalarFieldEnumSchema.array().optional()
}).strict();
var InvitationCodeAggregateArgsSchema = z.object({
  where: InvitationCodeWhereInputSchema.optional(),
  orderBy: z.union([InvitationCodeOrderByWithRelationInputSchema.array(), InvitationCodeOrderByWithRelationInputSchema]).optional(),
  cursor: InvitationCodeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var InvitationCodeGroupByArgsSchema = z.object({
  where: InvitationCodeWhereInputSchema.optional(),
  orderBy: z.union([InvitationCodeOrderByWithAggregationInputSchema.array(), InvitationCodeOrderByWithAggregationInputSchema]).optional(),
  by: InvitationCodeScalarFieldEnumSchema.array(),
  having: InvitationCodeScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var InvitationCodeFindUniqueArgsSchema = z.object({
  select: InvitationCodeSelectSchema.optional(),
  where: InvitationCodeWhereUniqueInputSchema
}).strict();
var InvitationCodeFindUniqueOrThrowArgsSchema = z.object({
  select: InvitationCodeSelectSchema.optional(),
  where: InvitationCodeWhereUniqueInputSchema
}).strict();
var OrganisationCreateArgsSchema = z.object({
  select: OrganisationSelectSchema.optional(),
  include: OrganisationIncludeSchema.optional(),
  data: z.union([OrganisationCreateInputSchema, OrganisationUncheckedCreateInputSchema])
}).strict();
var OrganisationUpsertArgsSchema = z.object({
  select: OrganisationSelectSchema.optional(),
  include: OrganisationIncludeSchema.optional(),
  where: OrganisationWhereUniqueInputSchema,
  create: z.union([OrganisationCreateInputSchema, OrganisationUncheckedCreateInputSchema]),
  update: z.union([OrganisationUpdateInputSchema, OrganisationUncheckedUpdateInputSchema])
}).strict();
var OrganisationCreateManyArgsSchema = z.object({
  data: z.union([OrganisationCreateManyInputSchema, OrganisationCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var OrganisationDeleteArgsSchema = z.object({
  select: OrganisationSelectSchema.optional(),
  include: OrganisationIncludeSchema.optional(),
  where: OrganisationWhereUniqueInputSchema
}).strict();
var OrganisationUpdateArgsSchema = z.object({
  select: OrganisationSelectSchema.optional(),
  include: OrganisationIncludeSchema.optional(),
  data: z.union([OrganisationUpdateInputSchema, OrganisationUncheckedUpdateInputSchema]),
  where: OrganisationWhereUniqueInputSchema
}).strict();
var OrganisationUpdateManyArgsSchema = z.object({
  data: z.union([OrganisationUpdateManyMutationInputSchema, OrganisationUncheckedUpdateManyInputSchema]),
  where: OrganisationWhereInputSchema.optional()
}).strict();
var OrganisationDeleteManyArgsSchema = z.object({
  where: OrganisationWhereInputSchema.optional()
}).strict();
var OrganisationInvitationCreateArgsSchema = z.object({
  select: OrganisationInvitationSelectSchema.optional(),
  include: OrganisationInvitationIncludeSchema.optional(),
  data: z.union([OrganisationInvitationCreateInputSchema, OrganisationInvitationUncheckedCreateInputSchema])
}).strict();
var OrganisationInvitationUpsertArgsSchema = z.object({
  select: OrganisationInvitationSelectSchema.optional(),
  include: OrganisationInvitationIncludeSchema.optional(),
  where: OrganisationInvitationWhereUniqueInputSchema,
  create: z.union([OrganisationInvitationCreateInputSchema, OrganisationInvitationUncheckedCreateInputSchema]),
  update: z.union([OrganisationInvitationUpdateInputSchema, OrganisationInvitationUncheckedUpdateInputSchema])
}).strict();
var OrganisationInvitationCreateManyArgsSchema = z.object({
  data: z.union([OrganisationInvitationCreateManyInputSchema, OrganisationInvitationCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var OrganisationInvitationDeleteArgsSchema = z.object({
  select: OrganisationInvitationSelectSchema.optional(),
  include: OrganisationInvitationIncludeSchema.optional(),
  where: OrganisationInvitationWhereUniqueInputSchema
}).strict();
var OrganisationInvitationUpdateArgsSchema = z.object({
  select: OrganisationInvitationSelectSchema.optional(),
  include: OrganisationInvitationIncludeSchema.optional(),
  data: z.union([OrganisationInvitationUpdateInputSchema, OrganisationInvitationUncheckedUpdateInputSchema]),
  where: OrganisationInvitationWhereUniqueInputSchema
}).strict();
var OrganisationInvitationUpdateManyArgsSchema = z.object({
  data: z.union([OrganisationInvitationUpdateManyMutationInputSchema, OrganisationInvitationUncheckedUpdateManyInputSchema]),
  where: OrganisationInvitationWhereInputSchema.optional()
}).strict();
var OrganisationInvitationDeleteManyArgsSchema = z.object({
  where: OrganisationInvitationWhereInputSchema.optional()
}).strict();
var MembershipCreateArgsSchema = z.object({
  select: MembershipSelectSchema.optional(),
  include: MembershipIncludeSchema.optional(),
  data: z.union([MembershipCreateInputSchema, MembershipUncheckedCreateInputSchema])
}).strict();
var MembershipUpsertArgsSchema = z.object({
  select: MembershipSelectSchema.optional(),
  include: MembershipIncludeSchema.optional(),
  where: MembershipWhereUniqueInputSchema,
  create: z.union([MembershipCreateInputSchema, MembershipUncheckedCreateInputSchema]),
  update: z.union([MembershipUpdateInputSchema, MembershipUncheckedUpdateInputSchema])
}).strict();
var MembershipCreateManyArgsSchema = z.object({
  data: z.union([MembershipCreateManyInputSchema, MembershipCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var MembershipDeleteArgsSchema = z.object({
  select: MembershipSelectSchema.optional(),
  include: MembershipIncludeSchema.optional(),
  where: MembershipWhereUniqueInputSchema
}).strict();
var MembershipUpdateArgsSchema = z.object({
  select: MembershipSelectSchema.optional(),
  include: MembershipIncludeSchema.optional(),
  data: z.union([MembershipUpdateInputSchema, MembershipUncheckedUpdateInputSchema]),
  where: MembershipWhereUniqueInputSchema
}).strict();
var MembershipUpdateManyArgsSchema = z.object({
  data: z.union([MembershipUpdateManyMutationInputSchema, MembershipUncheckedUpdateManyInputSchema]),
  where: MembershipWhereInputSchema.optional()
}).strict();
var MembershipDeleteManyArgsSchema = z.object({
  where: MembershipWhereInputSchema.optional()
}).strict();
var UserCreateArgsSchema = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([UserCreateInputSchema, UserUncheckedCreateInputSchema])
}).strict();
var UserUpsertArgsSchema = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([UserCreateInputSchema, UserUncheckedCreateInputSchema]),
  update: z.union([UserUpdateInputSchema, UserUncheckedUpdateInputSchema])
}).strict();
var UserCreateManyArgsSchema = z.object({
  data: z.union([UserCreateManyInputSchema, UserCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var UserDeleteArgsSchema = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema
}).strict();
var UserUpdateArgsSchema = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([UserUpdateInputSchema, UserUncheckedUpdateInputSchema]),
  where: UserWhereUniqueInputSchema
}).strict();
var UserUpdateManyArgsSchema = z.object({
  data: z.union([UserUpdateManyMutationInputSchema, UserUncheckedUpdateManyInputSchema]),
  where: UserWhereInputSchema.optional()
}).strict();
var UserDeleteManyArgsSchema = z.object({
  where: UserWhereInputSchema.optional()
}).strict();
var UserProfileCreateArgsSchema = z.object({
  select: UserProfileSelectSchema.optional(),
  include: UserProfileIncludeSchema.optional(),
  data: z.union([UserProfileCreateInputSchema, UserProfileUncheckedCreateInputSchema])
}).strict();
var UserProfileUpsertArgsSchema = z.object({
  select: UserProfileSelectSchema.optional(),
  include: UserProfileIncludeSchema.optional(),
  where: UserProfileWhereUniqueInputSchema,
  create: z.union([UserProfileCreateInputSchema, UserProfileUncheckedCreateInputSchema]),
  update: z.union([UserProfileUpdateInputSchema, UserProfileUncheckedUpdateInputSchema])
}).strict();
var UserProfileCreateManyArgsSchema = z.object({
  data: z.union([UserProfileCreateManyInputSchema, UserProfileCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var UserProfileDeleteArgsSchema = z.object({
  select: UserProfileSelectSchema.optional(),
  include: UserProfileIncludeSchema.optional(),
  where: UserProfileWhereUniqueInputSchema
}).strict();
var UserProfileUpdateArgsSchema = z.object({
  select: UserProfileSelectSchema.optional(),
  include: UserProfileIncludeSchema.optional(),
  data: z.union([UserProfileUpdateInputSchema, UserProfileUncheckedUpdateInputSchema]),
  where: UserProfileWhereUniqueInputSchema
}).strict();
var UserProfileUpdateManyArgsSchema = z.object({
  data: z.union([UserProfileUpdateManyMutationInputSchema, UserProfileUncheckedUpdateManyInputSchema]),
  where: UserProfileWhereInputSchema.optional()
}).strict();
var UserProfileDeleteManyArgsSchema = z.object({
  where: UserProfileWhereInputSchema.optional()
}).strict();
var ChannelCreateArgsSchema = z.object({
  select: ChannelSelectSchema.optional(),
  include: ChannelIncludeSchema.optional(),
  data: z.union([ChannelCreateInputSchema, ChannelUncheckedCreateInputSchema])
}).strict();
var ChannelUpsertArgsSchema = z.object({
  select: ChannelSelectSchema.optional(),
  include: ChannelIncludeSchema.optional(),
  where: ChannelWhereUniqueInputSchema,
  create: z.union([ChannelCreateInputSchema, ChannelUncheckedCreateInputSchema]),
  update: z.union([ChannelUpdateInputSchema, ChannelUncheckedUpdateInputSchema])
}).strict();
var ChannelCreateManyArgsSchema = z.object({
  data: z.union([ChannelCreateManyInputSchema, ChannelCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var ChannelDeleteArgsSchema = z.object({
  select: ChannelSelectSchema.optional(),
  include: ChannelIncludeSchema.optional(),
  where: ChannelWhereUniqueInputSchema
}).strict();
var ChannelUpdateArgsSchema = z.object({
  select: ChannelSelectSchema.optional(),
  include: ChannelIncludeSchema.optional(),
  data: z.union([ChannelUpdateInputSchema, ChannelUncheckedUpdateInputSchema]),
  where: ChannelWhereUniqueInputSchema
}).strict();
var ChannelUpdateManyArgsSchema = z.object({
  data: z.union([ChannelUpdateManyMutationInputSchema, ChannelUncheckedUpdateManyInputSchema]),
  where: ChannelWhereInputSchema.optional()
}).strict();
var ChannelDeleteManyArgsSchema = z.object({
  where: ChannelWhereInputSchema.optional()
}).strict();
var MediaCreateArgsSchema = z.object({
  select: MediaSelectSchema.optional(),
  include: MediaIncludeSchema.optional(),
  data: z.union([MediaCreateInputSchema, MediaUncheckedCreateInputSchema])
}).strict();
var MediaUpsertArgsSchema = z.object({
  select: MediaSelectSchema.optional(),
  include: MediaIncludeSchema.optional(),
  where: MediaWhereUniqueInputSchema,
  create: z.union([MediaCreateInputSchema, MediaUncheckedCreateInputSchema]),
  update: z.union([MediaUpdateInputSchema, MediaUncheckedUpdateInputSchema])
}).strict();
var MediaCreateManyArgsSchema = z.object({
  data: z.union([MediaCreateManyInputSchema, MediaCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var MediaDeleteArgsSchema = z.object({
  select: MediaSelectSchema.optional(),
  include: MediaIncludeSchema.optional(),
  where: MediaWhereUniqueInputSchema
}).strict();
var MediaUpdateArgsSchema = z.object({
  select: MediaSelectSchema.optional(),
  include: MediaIncludeSchema.optional(),
  data: z.union([MediaUpdateInputSchema, MediaUncheckedUpdateInputSchema]),
  where: MediaWhereUniqueInputSchema
}).strict();
var MediaUpdateManyArgsSchema = z.object({
  data: z.union([MediaUpdateManyMutationInputSchema, MediaUncheckedUpdateManyInputSchema]),
  where: MediaWhereInputSchema.optional()
}).strict();
var MediaDeleteManyArgsSchema = z.object({
  where: MediaWhereInputSchema.optional()
}).strict();
var MessageCreateArgsSchema = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  data: z.union([MessageCreateInputSchema, MessageUncheckedCreateInputSchema])
}).strict();
var MessageUpsertArgsSchema = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  where: MessageWhereUniqueInputSchema,
  create: z.union([MessageCreateInputSchema, MessageUncheckedCreateInputSchema]),
  update: z.union([MessageUpdateInputSchema, MessageUncheckedUpdateInputSchema])
}).strict();
var MessageCreateManyArgsSchema = z.object({
  data: z.union([MessageCreateManyInputSchema, MessageCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var MessageDeleteArgsSchema = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  where: MessageWhereUniqueInputSchema
}).strict();
var MessageUpdateArgsSchema = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  data: z.union([MessageUpdateInputSchema, MessageUncheckedUpdateInputSchema]),
  where: MessageWhereUniqueInputSchema
}).strict();
var MessageUpdateManyArgsSchema = z.object({
  data: z.union([MessageUpdateManyMutationInputSchema, MessageUncheckedUpdateManyInputSchema]),
  where: MessageWhereInputSchema.optional()
}).strict();
var MessageDeleteManyArgsSchema = z.object({
  where: MessageWhereInputSchema.optional()
}).strict();
var UserNotificationsCreateArgsSchema = z.object({
  select: UserNotificationsSelectSchema.optional(),
  data: z.union([UserNotificationsCreateInputSchema, UserNotificationsUncheckedCreateInputSchema])
}).strict();
var UserNotificationsUpsertArgsSchema = z.object({
  select: UserNotificationsSelectSchema.optional(),
  where: UserNotificationsWhereUniqueInputSchema,
  create: z.union([UserNotificationsCreateInputSchema, UserNotificationsUncheckedCreateInputSchema]),
  update: z.union([UserNotificationsUpdateInputSchema, UserNotificationsUncheckedUpdateInputSchema])
}).strict();
var UserNotificationsCreateManyArgsSchema = z.object({
  data: z.union([UserNotificationsCreateManyInputSchema, UserNotificationsCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var UserNotificationsDeleteArgsSchema = z.object({
  select: UserNotificationsSelectSchema.optional(),
  where: UserNotificationsWhereUniqueInputSchema
}).strict();
var UserNotificationsUpdateArgsSchema = z.object({
  select: UserNotificationsSelectSchema.optional(),
  data: z.union([UserNotificationsUpdateInputSchema, UserNotificationsUncheckedUpdateInputSchema]),
  where: UserNotificationsWhereUniqueInputSchema
}).strict();
var UserNotificationsUpdateManyArgsSchema = z.object({
  data: z.union([UserNotificationsUpdateManyMutationInputSchema, UserNotificationsUncheckedUpdateManyInputSchema]),
  where: UserNotificationsWhereInputSchema.optional()
}).strict();
var UserNotificationsDeleteManyArgsSchema = z.object({
  where: UserNotificationsWhereInputSchema.optional()
}).strict();
var InvitationCodeCreateArgsSchema = z.object({
  select: InvitationCodeSelectSchema.optional(),
  data: z.union([InvitationCodeCreateInputSchema, InvitationCodeUncheckedCreateInputSchema])
}).strict();
var InvitationCodeUpsertArgsSchema = z.object({
  select: InvitationCodeSelectSchema.optional(),
  where: InvitationCodeWhereUniqueInputSchema,
  create: z.union([InvitationCodeCreateInputSchema, InvitationCodeUncheckedCreateInputSchema]),
  update: z.union([InvitationCodeUpdateInputSchema, InvitationCodeUncheckedUpdateInputSchema])
}).strict();
var InvitationCodeCreateManyArgsSchema = z.object({
  data: z.union([InvitationCodeCreateManyInputSchema, InvitationCodeCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var InvitationCodeDeleteArgsSchema = z.object({
  select: InvitationCodeSelectSchema.optional(),
  where: InvitationCodeWhereUniqueInputSchema
}).strict();
var InvitationCodeUpdateArgsSchema = z.object({
  select: InvitationCodeSelectSchema.optional(),
  data: z.union([InvitationCodeUpdateInputSchema, InvitationCodeUncheckedUpdateInputSchema]),
  where: InvitationCodeWhereUniqueInputSchema
}).strict();
var InvitationCodeUpdateManyArgsSchema = z.object({
  data: z.union([InvitationCodeUpdateManyMutationInputSchema, InvitationCodeUncheckedUpdateManyInputSchema]),
  where: InvitationCodeWhereInputSchema.optional()
}).strict();
var InvitationCodeDeleteManyArgsSchema = z.object({
  where: InvitationCodeWhereInputSchema.optional()
}).strict();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  prisma,
  schema,
  ...require("@prisma/client")
});

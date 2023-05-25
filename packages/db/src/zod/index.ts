import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const ChannelScalarFieldEnumSchema = z.enum(['id','kind','createdBy','name','description','createdAt','updatedAt','organisationId']);

export const InvitationCodeScalarFieldEnumSchema = z.enum(['id','role','userId']);

export const MediaScalarFieldEnumSchema = z.enum(['id','kind','filename','size','width','height','path','createdAt','messageId']);

export const MembershipScalarFieldEnumSchema = z.enum(['id','role','organizationId','userId','invitedName','invitedEmail']);

export const MessageScalarFieldEnumSchema = z.enum(['id','text','senderId','receiverId','channelId','createdAt','updatedAt']);

export const OrganisationInvitationScalarFieldEnumSchema = z.enum(['id','publicId','issuedEmail','createdAt','expiresAt','creatorId','organizationId']);

export const OrganisationScalarFieldEnumSchema = z.enum(['id','publicId','name','createdAt','updatedAt']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const UserNotificationsScalarFieldEnumSchema = z.enum(['id','payload','userId']);

export const UserProfileScalarFieldEnumSchema = z.enum(['id','publicId','profilePictureUrl','profileColor','username','createdAt','updatedAt']);

export const UserScalarFieldEnumSchema = z.enum(['id','publicId','createdAt','updatedAt','name','email','password','role','userProfileId']);

export const MembershipRoleSchema = z.enum(['OWNER','ADMIN','USER']);

export type MembershipRoleType = `${z.infer<typeof MembershipRoleSchema>}`

export const GlobalRoleSchema = z.enum(['SUPERADMIN','CUSTOMER']);

export type GlobalRoleType = `${z.infer<typeof GlobalRoleSchema>}`

export const ChannelKindSchema = z.enum(['PRIVATE','PUBLIC']);

export type ChannelKindType = `${z.infer<typeof ChannelKindSchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// ORGANISATION SCHEMA
/////////////////////////////////////////

export const OrganisationSchema = z.object({
  id: z.number().int(),
  publicId: z.string().cuid(),
  name: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Organisation = z.infer<typeof OrganisationSchema>

/////////////////////////////////////////
// ORGANISATION INVITATION SCHEMA
/////////////////////////////////////////

export const OrganisationInvitationSchema = z.object({
  id: z.number().int(),
  publicId: z.string().cuid(),
  issuedEmail: z.string(),
  createdAt: z.coerce.date(),
  expiresAt: z.coerce.date(),
  creatorId: z.number().int(),
  organizationId: z.number().int(),
})

export type OrganisationInvitation = z.infer<typeof OrganisationInvitationSchema>

/////////////////////////////////////////
// MEMBERSHIP SCHEMA
/////////////////////////////////////////

export const MembershipSchema = z.object({
  role: MembershipRoleSchema,
  id: z.number().int(),
  organizationId: z.number().int(),
  userId: z.number().int().nullable(),
  invitedName: z.string().nullable(),
  invitedEmail: z.string().nullable(),
})

export type Membership = z.infer<typeof MembershipSchema>

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  role: GlobalRoleSchema,
  id: z.number().int(),
  publicId: z.string().cuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
  userProfileId: z.number().int(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// USER PROFILE SCHEMA
/////////////////////////////////////////

export const UserProfileSchema = z.object({
  id: z.number().int(),
  publicId: z.string().cuid(),
  profilePictureUrl: z.string().nullable(),
  profileColor: z.string(),
  username: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type UserProfile = z.infer<typeof UserProfileSchema>

/////////////////////////////////////////
// CHANNEL SCHEMA
/////////////////////////////////////////

export const ChannelSchema = z.object({
  kind: ChannelKindSchema,
  id: z.string().cuid(),
  createdBy: z.string(),
  name: z.string().nullable(),
  description: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  organisationId: z.string().nullable(),
})

export type Channel = z.infer<typeof ChannelSchema>

/////////////////////////////////////////
// MEDIA SCHEMA
/////////////////////////////////////////

export const MediaSchema = z.object({
  id: z.string().cuid(),
  kind: z.string(),
  filename: z.string(),
  size: z.number().int(),
  width: z.number().int(),
  height: z.number().int(),
  path: z.string(),
  createdAt: z.coerce.date(),
  messageId: z.string().nullable(),
})

export type Media = z.infer<typeof MediaSchema>

/////////////////////////////////////////
// MESSAGE SCHEMA
/////////////////////////////////////////

export const MessageSchema = z.object({
  id: z.string().cuid(),
  text: z.string(),
  senderId: z.string(),
  receiverId: z.string().nullable(),
  channelId: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Message = z.infer<typeof MessageSchema>

/////////////////////////////////////////
// USER NOTIFICATIONS SCHEMA
/////////////////////////////////////////

export const UserNotificationsSchema = z.object({
  id: z.string().cuid(),
  payload: z.string(),
  userId: z.string().nullable(),
})

export type UserNotifications = z.infer<typeof UserNotificationsSchema>

/////////////////////////////////////////
// INVITATION CODE SCHEMA
/////////////////////////////////////////

export const InvitationCodeSchema = z.object({
  id: z.string().cuid(),
  role: z.string(),
  userId: z.string().nullable(),
})

export type InvitationCode = z.infer<typeof InvitationCodeSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// ORGANISATION
//------------------------------------------------------

export const OrganisationIncludeSchema: z.ZodType<Prisma.OrganisationInclude> = z.object({
  membership: z.union([z.boolean(),z.lazy(() => MembershipFindManyArgsSchema)]).optional(),
  channels: z.union([z.boolean(),z.lazy(() => ChannelFindManyArgsSchema)]).optional(),
  OrganisationInvitation: z.union([z.boolean(),z.lazy(() => OrganisationInvitationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => OrganisationCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const OrganisationArgsSchema: z.ZodType<Prisma.OrganisationArgs> = z.object({
  select: z.lazy(() => OrganisationSelectSchema).optional(),
  include: z.lazy(() => OrganisationIncludeSchema).optional(),
}).strict();

export const OrganisationCountOutputTypeArgsSchema: z.ZodType<Prisma.OrganisationCountOutputTypeArgs> = z.object({
  select: z.lazy(() => OrganisationCountOutputTypeSelectSchema).nullish(),
}).strict();

export const OrganisationCountOutputTypeSelectSchema: z.ZodType<Prisma.OrganisationCountOutputTypeSelect> = z.object({
  membership: z.boolean().optional(),
  channels: z.boolean().optional(),
  OrganisationInvitation: z.boolean().optional(),
}).strict();

export const OrganisationSelectSchema: z.ZodType<Prisma.OrganisationSelect> = z.object({
  id: z.boolean().optional(),
  publicId: z.boolean().optional(),
  name: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  membership: z.union([z.boolean(),z.lazy(() => MembershipFindManyArgsSchema)]).optional(),
  channels: z.union([z.boolean(),z.lazy(() => ChannelFindManyArgsSchema)]).optional(),
  OrganisationInvitation: z.union([z.boolean(),z.lazy(() => OrganisationInvitationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => OrganisationCountOutputTypeArgsSchema)]).optional(),
}).strict()

// ORGANISATION INVITATION
//------------------------------------------------------

export const OrganisationInvitationIncludeSchema: z.ZodType<Prisma.OrganisationInvitationInclude> = z.object({
  createdBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  organisation: z.union([z.boolean(),z.lazy(() => OrganisationArgsSchema)]).optional(),
}).strict()

export const OrganisationInvitationArgsSchema: z.ZodType<Prisma.OrganisationInvitationArgs> = z.object({
  select: z.lazy(() => OrganisationInvitationSelectSchema).optional(),
  include: z.lazy(() => OrganisationInvitationIncludeSchema).optional(),
}).strict();

export const OrganisationInvitationSelectSchema: z.ZodType<Prisma.OrganisationInvitationSelect> = z.object({
  id: z.boolean().optional(),
  publicId: z.boolean().optional(),
  issuedEmail: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  expiresAt: z.boolean().optional(),
  creatorId: z.boolean().optional(),
  organizationId: z.boolean().optional(),
  createdBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  organisation: z.union([z.boolean(),z.lazy(() => OrganisationArgsSchema)]).optional(),
}).strict()

// MEMBERSHIP
//------------------------------------------------------

export const MembershipIncludeSchema: z.ZodType<Prisma.MembershipInclude> = z.object({
  organization: z.union([z.boolean(),z.lazy(() => OrganisationArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const MembershipArgsSchema: z.ZodType<Prisma.MembershipArgs> = z.object({
  select: z.lazy(() => MembershipSelectSchema).optional(),
  include: z.lazy(() => MembershipIncludeSchema).optional(),
}).strict();

export const MembershipSelectSchema: z.ZodType<Prisma.MembershipSelect> = z.object({
  id: z.boolean().optional(),
  role: z.boolean().optional(),
  organizationId: z.boolean().optional(),
  userId: z.boolean().optional(),
  invitedName: z.boolean().optional(),
  invitedEmail: z.boolean().optional(),
  organization: z.union([z.boolean(),z.lazy(() => OrganisationArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  userProfile: z.union([z.boolean(),z.lazy(() => UserProfileArgsSchema)]).optional(),
  memberships: z.union([z.boolean(),z.lazy(() => MembershipFindManyArgsSchema)]).optional(),
  OrganisationInvitation: z.union([z.boolean(),z.lazy(() => OrganisationInvitationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UserArgsSchema: z.ZodType<Prisma.UserArgs> = z.object({
  select: z.lazy(() => UserSelectSchema).optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
}).strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<Prisma.UserCountOutputTypeArgs> = z.object({
  select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  memberships: z.boolean().optional(),
  OrganisationInvitation: z.boolean().optional(),
}).strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  publicId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  password: z.boolean().optional(),
  role: z.boolean().optional(),
  userProfileId: z.boolean().optional(),
  userProfile: z.union([z.boolean(),z.lazy(() => UserProfileArgsSchema)]).optional(),
  memberships: z.union([z.boolean(),z.lazy(() => MembershipFindManyArgsSchema)]).optional(),
  OrganisationInvitation: z.union([z.boolean(),z.lazy(() => OrganisationInvitationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

// USER PROFILE
//------------------------------------------------------

export const UserProfileIncludeSchema: z.ZodType<Prisma.UserProfileInclude> = z.object({
  User: z.union([z.boolean(),z.lazy(() => UserFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserProfileCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UserProfileArgsSchema: z.ZodType<Prisma.UserProfileArgs> = z.object({
  select: z.lazy(() => UserProfileSelectSchema).optional(),
  include: z.lazy(() => UserProfileIncludeSchema).optional(),
}).strict();

export const UserProfileCountOutputTypeArgsSchema: z.ZodType<Prisma.UserProfileCountOutputTypeArgs> = z.object({
  select: z.lazy(() => UserProfileCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UserProfileCountOutputTypeSelectSchema: z.ZodType<Prisma.UserProfileCountOutputTypeSelect> = z.object({
  User: z.boolean().optional(),
}).strict();

export const UserProfileSelectSchema: z.ZodType<Prisma.UserProfileSelect> = z.object({
  id: z.boolean().optional(),
  publicId: z.boolean().optional(),
  profilePictureUrl: z.boolean().optional(),
  profileColor: z.boolean().optional(),
  username: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  User: z.union([z.boolean(),z.lazy(() => UserFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserProfileCountOutputTypeArgsSchema)]).optional(),
}).strict()

// CHANNEL
//------------------------------------------------------

export const ChannelIncludeSchema: z.ZodType<Prisma.ChannelInclude> = z.object({
  Organisation: z.union([z.boolean(),z.lazy(() => OrganisationArgsSchema)]).optional(),
}).strict()

export const ChannelArgsSchema: z.ZodType<Prisma.ChannelArgs> = z.object({
  select: z.lazy(() => ChannelSelectSchema).optional(),
  include: z.lazy(() => ChannelIncludeSchema).optional(),
}).strict();

export const ChannelSelectSchema: z.ZodType<Prisma.ChannelSelect> = z.object({
  id: z.boolean().optional(),
  kind: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  organisationId: z.boolean().optional(),
  Organisation: z.union([z.boolean(),z.lazy(() => OrganisationArgsSchema)]).optional(),
}).strict()

// MEDIA
//------------------------------------------------------

export const MediaIncludeSchema: z.ZodType<Prisma.MediaInclude> = z.object({
  Message: z.union([z.boolean(),z.lazy(() => MessageArgsSchema)]).optional(),
}).strict()

export const MediaArgsSchema: z.ZodType<Prisma.MediaArgs> = z.object({
  select: z.lazy(() => MediaSelectSchema).optional(),
  include: z.lazy(() => MediaIncludeSchema).optional(),
}).strict();

export const MediaSelectSchema: z.ZodType<Prisma.MediaSelect> = z.object({
  id: z.boolean().optional(),
  kind: z.boolean().optional(),
  filename: z.boolean().optional(),
  size: z.boolean().optional(),
  width: z.boolean().optional(),
  height: z.boolean().optional(),
  path: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  messageId: z.boolean().optional(),
  Message: z.union([z.boolean(),z.lazy(() => MessageArgsSchema)]).optional(),
}).strict()

// MESSAGE
//------------------------------------------------------

export const MessageIncludeSchema: z.ZodType<Prisma.MessageInclude> = z.object({
  media: z.union([z.boolean(),z.lazy(() => MediaFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => MessageCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const MessageArgsSchema: z.ZodType<Prisma.MessageArgs> = z.object({
  select: z.lazy(() => MessageSelectSchema).optional(),
  include: z.lazy(() => MessageIncludeSchema).optional(),
}).strict();

export const MessageCountOutputTypeArgsSchema: z.ZodType<Prisma.MessageCountOutputTypeArgs> = z.object({
  select: z.lazy(() => MessageCountOutputTypeSelectSchema).nullish(),
}).strict();

export const MessageCountOutputTypeSelectSchema: z.ZodType<Prisma.MessageCountOutputTypeSelect> = z.object({
  media: z.boolean().optional(),
}).strict();

export const MessageSelectSchema: z.ZodType<Prisma.MessageSelect> = z.object({
  id: z.boolean().optional(),
  text: z.boolean().optional(),
  senderId: z.boolean().optional(),
  receiverId: z.boolean().optional(),
  channelId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  media: z.union([z.boolean(),z.lazy(() => MediaFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => MessageCountOutputTypeArgsSchema)]).optional(),
}).strict()

// USER NOTIFICATIONS
//------------------------------------------------------

export const UserNotificationsSelectSchema: z.ZodType<Prisma.UserNotificationsSelect> = z.object({
  id: z.boolean().optional(),
  payload: z.boolean().optional(),
  userId: z.boolean().optional(),
}).strict()

// INVITATION CODE
//------------------------------------------------------

export const InvitationCodeSelectSchema: z.ZodType<Prisma.InvitationCodeSelect> = z.object({
  id: z.boolean().optional(),
  role: z.boolean().optional(),
  userId: z.boolean().optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const OrganisationWhereInputSchema: z.ZodType<Prisma.OrganisationWhereInput> = z.object({
  AND: z.union([ z.lazy(() => OrganisationWhereInputSchema),z.lazy(() => OrganisationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrganisationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrganisationWhereInputSchema),z.lazy(() => OrganisationWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  publicId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  membership: z.lazy(() => MembershipListRelationFilterSchema).optional(),
  channels: z.lazy(() => ChannelListRelationFilterSchema).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationListRelationFilterSchema).optional()
}).strict();

export const OrganisationOrderByWithRelationInputSchema: z.ZodType<Prisma.OrganisationOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  publicId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  membership: z.lazy(() => MembershipOrderByRelationAggregateInputSchema).optional(),
  channels: z.lazy(() => ChannelOrderByRelationAggregateInputSchema).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationOrderByRelationAggregateInputSchema).optional()
}).strict();

export const OrganisationWhereUniqueInputSchema: z.ZodType<Prisma.OrganisationWhereUniqueInput> = z.object({
  id: z.number().int().optional(),
  publicId: z.string().cuid().optional()
}).strict();

export const OrganisationOrderByWithAggregationInputSchema: z.ZodType<Prisma.OrganisationOrderByWithAggregationInput> = z.object({
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

export const OrganisationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.OrganisationScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => OrganisationScalarWhereWithAggregatesInputSchema),z.lazy(() => OrganisationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrganisationScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrganisationScalarWhereWithAggregatesInputSchema),z.lazy(() => OrganisationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  publicId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const OrganisationInvitationWhereInputSchema: z.ZodType<Prisma.OrganisationInvitationWhereInput> = z.object({
  AND: z.union([ z.lazy(() => OrganisationInvitationWhereInputSchema),z.lazy(() => OrganisationInvitationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrganisationInvitationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrganisationInvitationWhereInputSchema),z.lazy(() => OrganisationInvitationWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  publicId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  issuedEmail: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  creatorId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  organizationId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdBy: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  organisation: z.union([ z.lazy(() => OrganisationRelationFilterSchema),z.lazy(() => OrganisationWhereInputSchema) ]).optional(),
}).strict();

export const OrganisationInvitationOrderByWithRelationInputSchema: z.ZodType<Prisma.OrganisationInvitationOrderByWithRelationInput> = z.object({
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

export const OrganisationInvitationWhereUniqueInputSchema: z.ZodType<Prisma.OrganisationInvitationWhereUniqueInput> = z.object({
  id: z.number().int().optional(),
  publicId: z.string().cuid().optional()
}).strict();

export const OrganisationInvitationOrderByWithAggregationInputSchema: z.ZodType<Prisma.OrganisationInvitationOrderByWithAggregationInput> = z.object({
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

export const OrganisationInvitationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.OrganisationInvitationScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => OrganisationInvitationScalarWhereWithAggregatesInputSchema),z.lazy(() => OrganisationInvitationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrganisationInvitationScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrganisationInvitationScalarWhereWithAggregatesInputSchema),z.lazy(() => OrganisationInvitationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  publicId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  issuedEmail: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  creatorId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  organizationId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const MembershipWhereInputSchema: z.ZodType<Prisma.MembershipWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MembershipWhereInputSchema),z.lazy(() => MembershipWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MembershipWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MembershipWhereInputSchema),z.lazy(() => MembershipWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  role: z.union([ z.lazy(() => EnumMembershipRoleFilterSchema),z.lazy(() => MembershipRoleSchema) ]).optional(),
  organizationId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  invitedName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  invitedEmail: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  organization: z.union([ z.lazy(() => OrganisationRelationFilterSchema),z.lazy(() => OrganisationWhereInputSchema) ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
}).strict();

export const MembershipOrderByWithRelationInputSchema: z.ZodType<Prisma.MembershipOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  invitedName: z.lazy(() => SortOrderSchema).optional(),
  invitedEmail: z.lazy(() => SortOrderSchema).optional(),
  organization: z.lazy(() => OrganisationOrderByWithRelationInputSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const MembershipWhereUniqueInputSchema: z.ZodType<Prisma.MembershipWhereUniqueInput> = z.object({
  id: z.number().int().optional(),
  organizationId_invitedEmail: z.lazy(() => MembershipOrganizationIdInvitedEmailCompoundUniqueInputSchema).optional()
}).strict();

export const MembershipOrderByWithAggregationInputSchema: z.ZodType<Prisma.MembershipOrderByWithAggregationInput> = z.object({
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

export const MembershipScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.MembershipScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => MembershipScalarWhereWithAggregatesInputSchema),z.lazy(() => MembershipScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => MembershipScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MembershipScalarWhereWithAggregatesInputSchema),z.lazy(() => MembershipScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  role: z.union([ z.lazy(() => EnumMembershipRoleWithAggregatesFilterSchema),z.lazy(() => MembershipRoleSchema) ]).optional(),
  organizationId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  invitedName: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  invitedEmail: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  publicId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => EnumGlobalRoleFilterSchema),z.lazy(() => GlobalRoleSchema) ]).optional(),
  userProfileId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  userProfile: z.union([ z.lazy(() => UserProfileRelationFilterSchema),z.lazy(() => UserProfileWhereInputSchema) ]).optional().nullable(),
  memberships: z.lazy(() => MembershipListRelationFilterSchema).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationListRelationFilterSchema).optional()
}).strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
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

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.object({
  id: z.number().int().optional(),
  publicId: z.string().cuid().optional(),
  email: z.string().optional()
}).strict();

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.object({
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

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  publicId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => EnumGlobalRoleWithAggregatesFilterSchema),z.lazy(() => GlobalRoleSchema) ]).optional(),
  userProfileId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const UserProfileWhereInputSchema: z.ZodType<Prisma.UserProfileWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserProfileWhereInputSchema),z.lazy(() => UserProfileWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserProfileWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserProfileWhereInputSchema),z.lazy(() => UserProfileWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  publicId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  profilePictureUrl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  profileColor: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  username: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  User: z.lazy(() => UserListRelationFilterSchema).optional()
}).strict();

export const UserProfileOrderByWithRelationInputSchema: z.ZodType<Prisma.UserProfileOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  publicId: z.lazy(() => SortOrderSchema).optional(),
  profilePictureUrl: z.lazy(() => SortOrderSchema).optional(),
  profileColor: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  User: z.lazy(() => UserOrderByRelationAggregateInputSchema).optional()
}).strict();

export const UserProfileWhereUniqueInputSchema: z.ZodType<Prisma.UserProfileWhereUniqueInput> = z.object({
  id: z.number().int().optional(),
  publicId: z.string().cuid().optional()
}).strict();

export const UserProfileOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserProfileOrderByWithAggregationInput> = z.object({
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

export const UserProfileScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserProfileScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserProfileScalarWhereWithAggregatesInputSchema),z.lazy(() => UserProfileScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserProfileScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserProfileScalarWhereWithAggregatesInputSchema),z.lazy(() => UserProfileScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  publicId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  profilePictureUrl: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  profileColor: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  username: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ChannelWhereInputSchema: z.ZodType<Prisma.ChannelWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ChannelWhereInputSchema),z.lazy(() => ChannelWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ChannelWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ChannelWhereInputSchema),z.lazy(() => ChannelWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  kind: z.union([ z.lazy(() => EnumChannelKindFilterSchema),z.lazy(() => ChannelKindSchema) ]).optional(),
  createdBy: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  organisationId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Organisation: z.union([ z.lazy(() => OrganisationRelationFilterSchema),z.lazy(() => OrganisationWhereInputSchema) ]).optional().nullable(),
}).strict();

export const ChannelOrderByWithRelationInputSchema: z.ZodType<Prisma.ChannelOrderByWithRelationInput> = z.object({
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

export const ChannelWhereUniqueInputSchema: z.ZodType<Prisma.ChannelWhereUniqueInput> = z.object({
  id: z.string().cuid().optional()
}).strict();

export const ChannelOrderByWithAggregationInputSchema: z.ZodType<Prisma.ChannelOrderByWithAggregationInput> = z.object({
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

export const ChannelScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ChannelScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ChannelScalarWhereWithAggregatesInputSchema),z.lazy(() => ChannelScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ChannelScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ChannelScalarWhereWithAggregatesInputSchema),z.lazy(() => ChannelScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  kind: z.union([ z.lazy(() => EnumChannelKindWithAggregatesFilterSchema),z.lazy(() => ChannelKindSchema) ]).optional(),
  createdBy: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  organisationId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const MediaWhereInputSchema: z.ZodType<Prisma.MediaWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MediaWhereInputSchema),z.lazy(() => MediaWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MediaWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MediaWhereInputSchema),z.lazy(() => MediaWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  kind: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  filename: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  size: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  width: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  height: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  path: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  messageId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Message: z.union([ z.lazy(() => MessageRelationFilterSchema),z.lazy(() => MessageWhereInputSchema) ]).optional().nullable(),
}).strict();

export const MediaOrderByWithRelationInputSchema: z.ZodType<Prisma.MediaOrderByWithRelationInput> = z.object({
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

export const MediaWhereUniqueInputSchema: z.ZodType<Prisma.MediaWhereUniqueInput> = z.object({
  id: z.string().cuid().optional()
}).strict();

export const MediaOrderByWithAggregationInputSchema: z.ZodType<Prisma.MediaOrderByWithAggregationInput> = z.object({
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

export const MediaScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.MediaScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => MediaScalarWhereWithAggregatesInputSchema),z.lazy(() => MediaScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => MediaScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MediaScalarWhereWithAggregatesInputSchema),z.lazy(() => MediaScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  kind: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  filename: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  size: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  width: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  height: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  path: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  messageId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const MessageWhereInputSchema: z.ZodType<Prisma.MessageWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MessageWhereInputSchema),z.lazy(() => MessageWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MessageWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MessageWhereInputSchema),z.lazy(() => MessageWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  text: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  senderId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  receiverId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  channelId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  media: z.lazy(() => MediaListRelationFilterSchema).optional()
}).strict();

export const MessageOrderByWithRelationInputSchema: z.ZodType<Prisma.MessageOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  senderId: z.lazy(() => SortOrderSchema).optional(),
  receiverId: z.lazy(() => SortOrderSchema).optional(),
  channelId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  media: z.lazy(() => MediaOrderByRelationAggregateInputSchema).optional()
}).strict();

export const MessageWhereUniqueInputSchema: z.ZodType<Prisma.MessageWhereUniqueInput> = z.object({
  id: z.string().cuid().optional()
}).strict();

export const MessageOrderByWithAggregationInputSchema: z.ZodType<Prisma.MessageOrderByWithAggregationInput> = z.object({
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

export const MessageScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.MessageScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => MessageScalarWhereWithAggregatesInputSchema),z.lazy(() => MessageScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => MessageScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MessageScalarWhereWithAggregatesInputSchema),z.lazy(() => MessageScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  text: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  senderId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  receiverId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  channelId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const UserNotificationsWhereInputSchema: z.ZodType<Prisma.UserNotificationsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserNotificationsWhereInputSchema),z.lazy(() => UserNotificationsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserNotificationsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserNotificationsWhereInputSchema),z.lazy(() => UserNotificationsWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  payload: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const UserNotificationsOrderByWithRelationInputSchema: z.ZodType<Prisma.UserNotificationsOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  payload: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserNotificationsWhereUniqueInputSchema: z.ZodType<Prisma.UserNotificationsWhereUniqueInput> = z.object({
  id: z.string().cuid().optional()
}).strict();

export const UserNotificationsOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserNotificationsOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  payload: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserNotificationsCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserNotificationsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserNotificationsMinOrderByAggregateInputSchema).optional()
}).strict();

export const UserNotificationsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserNotificationsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserNotificationsScalarWhereWithAggregatesInputSchema),z.lazy(() => UserNotificationsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserNotificationsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserNotificationsScalarWhereWithAggregatesInputSchema),z.lazy(() => UserNotificationsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  payload: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const InvitationCodeWhereInputSchema: z.ZodType<Prisma.InvitationCodeWhereInput> = z.object({
  AND: z.union([ z.lazy(() => InvitationCodeWhereInputSchema),z.lazy(() => InvitationCodeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InvitationCodeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InvitationCodeWhereInputSchema),z.lazy(() => InvitationCodeWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const InvitationCodeOrderByWithRelationInputSchema: z.ZodType<Prisma.InvitationCodeOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InvitationCodeWhereUniqueInputSchema: z.ZodType<Prisma.InvitationCodeWhereUniqueInput> = z.object({
  id: z.string().cuid().optional()
}).strict();

export const InvitationCodeOrderByWithAggregationInputSchema: z.ZodType<Prisma.InvitationCodeOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => InvitationCodeCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => InvitationCodeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => InvitationCodeMinOrderByAggregateInputSchema).optional()
}).strict();

export const InvitationCodeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.InvitationCodeScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => InvitationCodeScalarWhereWithAggregatesInputSchema),z.lazy(() => InvitationCodeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => InvitationCodeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InvitationCodeScalarWhereWithAggregatesInputSchema),z.lazy(() => InvitationCodeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const OrganisationCreateInputSchema: z.ZodType<Prisma.OrganisationCreateInput> = z.object({
  publicId: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  membership: z.lazy(() => MembershipCreateNestedManyWithoutOrganizationInputSchema).optional(),
  channels: z.lazy(() => ChannelCreateNestedManyWithoutOrganisationInputSchema).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationCreateNestedManyWithoutOrganisationInputSchema).optional()
}).strict();

export const OrganisationUncheckedCreateInputSchema: z.ZodType<Prisma.OrganisationUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  publicId: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  membership: z.lazy(() => MembershipUncheckedCreateNestedManyWithoutOrganizationInputSchema).optional(),
  channels: z.lazy(() => ChannelUncheckedCreateNestedManyWithoutOrganisationInputSchema).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationUncheckedCreateNestedManyWithoutOrganisationInputSchema).optional()
}).strict();

export const OrganisationUpdateInputSchema: z.ZodType<Prisma.OrganisationUpdateInput> = z.object({
  publicId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  membership: z.lazy(() => MembershipUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  channels: z.lazy(() => ChannelUpdateManyWithoutOrganisationNestedInputSchema).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationUpdateManyWithoutOrganisationNestedInputSchema).optional()
}).strict();

export const OrganisationUncheckedUpdateInputSchema: z.ZodType<Prisma.OrganisationUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  publicId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  membership: z.lazy(() => MembershipUncheckedUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  channels: z.lazy(() => ChannelUncheckedUpdateManyWithoutOrganisationNestedInputSchema).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationUncheckedUpdateManyWithoutOrganisationNestedInputSchema).optional()
}).strict();

export const OrganisationCreateManyInputSchema: z.ZodType<Prisma.OrganisationCreateManyInput> = z.object({
  id: z.number().int().optional(),
  publicId: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const OrganisationUpdateManyMutationInputSchema: z.ZodType<Prisma.OrganisationUpdateManyMutationInput> = z.object({
  publicId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrganisationUncheckedUpdateManyInputSchema: z.ZodType<Prisma.OrganisationUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  publicId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrganisationInvitationCreateInputSchema: z.ZodType<Prisma.OrganisationInvitationCreateInput> = z.object({
  publicId: z.string().cuid().optional(),
  issuedEmail: z.string(),
  createdAt: z.coerce.date().optional(),
  expiresAt: z.coerce.date(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutOrganisationInvitationInputSchema),
  organisation: z.lazy(() => OrganisationCreateNestedOneWithoutOrganisationInvitationInputSchema)
}).strict();

export const OrganisationInvitationUncheckedCreateInputSchema: z.ZodType<Prisma.OrganisationInvitationUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  publicId: z.string().cuid().optional(),
  issuedEmail: z.string(),
  createdAt: z.coerce.date().optional(),
  expiresAt: z.coerce.date(),
  creatorId: z.number().int(),
  organizationId: z.number().int()
}).strict();

export const OrganisationInvitationUpdateInputSchema: z.ZodType<Prisma.OrganisationInvitationUpdateInput> = z.object({
  publicId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  issuedEmail: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdBy: z.lazy(() => UserUpdateOneRequiredWithoutOrganisationInvitationNestedInputSchema).optional(),
  organisation: z.lazy(() => OrganisationUpdateOneRequiredWithoutOrganisationInvitationNestedInputSchema).optional()
}).strict();

export const OrganisationInvitationUncheckedUpdateInputSchema: z.ZodType<Prisma.OrganisationInvitationUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  publicId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  issuedEmail: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  creatorId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  organizationId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrganisationInvitationCreateManyInputSchema: z.ZodType<Prisma.OrganisationInvitationCreateManyInput> = z.object({
  id: z.number().int().optional(),
  publicId: z.string().cuid().optional(),
  issuedEmail: z.string(),
  createdAt: z.coerce.date().optional(),
  expiresAt: z.coerce.date(),
  creatorId: z.number().int(),
  organizationId: z.number().int()
}).strict();

export const OrganisationInvitationUpdateManyMutationInputSchema: z.ZodType<Prisma.OrganisationInvitationUpdateManyMutationInput> = z.object({
  publicId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  issuedEmail: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrganisationInvitationUncheckedUpdateManyInputSchema: z.ZodType<Prisma.OrganisationInvitationUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  publicId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  issuedEmail: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  creatorId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  organizationId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MembershipCreateInputSchema: z.ZodType<Prisma.MembershipCreateInput> = z.object({
  role: z.lazy(() => MembershipRoleSchema),
  invitedName: z.string().optional().nullable(),
  invitedEmail: z.string().optional().nullable(),
  organization: z.lazy(() => OrganisationCreateNestedOneWithoutMembershipInputSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutMembershipsInputSchema).optional()
}).strict();

export const MembershipUncheckedCreateInputSchema: z.ZodType<Prisma.MembershipUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  role: z.lazy(() => MembershipRoleSchema),
  organizationId: z.number().int(),
  userId: z.number().int().optional().nullable(),
  invitedName: z.string().optional().nullable(),
  invitedEmail: z.string().optional().nullable()
}).strict();

export const MembershipUpdateInputSchema: z.ZodType<Prisma.MembershipUpdateInput> = z.object({
  role: z.union([ z.lazy(() => MembershipRoleSchema),z.lazy(() => EnumMembershipRoleFieldUpdateOperationsInputSchema) ]).optional(),
  invitedName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  invitedEmail: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  organization: z.lazy(() => OrganisationUpdateOneRequiredWithoutMembershipNestedInputSchema).optional(),
  user: z.lazy(() => UserUpdateOneWithoutMembershipsNestedInputSchema).optional()
}).strict();

export const MembershipUncheckedUpdateInputSchema: z.ZodType<Prisma.MembershipUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => MembershipRoleSchema),z.lazy(() => EnumMembershipRoleFieldUpdateOperationsInputSchema) ]).optional(),
  organizationId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  invitedName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  invitedEmail: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const MembershipCreateManyInputSchema: z.ZodType<Prisma.MembershipCreateManyInput> = z.object({
  id: z.number().int().optional(),
  role: z.lazy(() => MembershipRoleSchema),
  organizationId: z.number().int(),
  userId: z.number().int().optional().nullable(),
  invitedName: z.string().optional().nullable(),
  invitedEmail: z.string().optional().nullable()
}).strict();

export const MembershipUpdateManyMutationInputSchema: z.ZodType<Prisma.MembershipUpdateManyMutationInput> = z.object({
  role: z.union([ z.lazy(() => MembershipRoleSchema),z.lazy(() => EnumMembershipRoleFieldUpdateOperationsInputSchema) ]).optional(),
  invitedName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  invitedEmail: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const MembershipUncheckedUpdateManyInputSchema: z.ZodType<Prisma.MembershipUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => MembershipRoleSchema),z.lazy(() => EnumMembershipRoleFieldUpdateOperationsInputSchema) ]).optional(),
  organizationId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  invitedName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  invitedEmail: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
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

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
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

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  publicId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => GlobalRoleSchema),z.lazy(() => EnumGlobalRoleFieldUpdateOperationsInputSchema) ]).optional(),
  userProfile: z.lazy(() => UserProfileUpdateOneWithoutUserNestedInputSchema).optional(),
  memberships: z.lazy(() => MembershipUpdateManyWithoutUserNestedInputSchema).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationUpdateManyWithoutCreatedByNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  publicId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => GlobalRoleSchema),z.lazy(() => EnumGlobalRoleFieldUpdateOperationsInputSchema) ]).optional(),
  userProfileId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  memberships: z.lazy(() => MembershipUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationUncheckedUpdateManyWithoutCreatedByNestedInputSchema).optional()
}).strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
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

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.object({
  publicId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => GlobalRoleSchema),z.lazy(() => EnumGlobalRoleFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  publicId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => GlobalRoleSchema),z.lazy(() => EnumGlobalRoleFieldUpdateOperationsInputSchema) ]).optional(),
  userProfileId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserProfileCreateInputSchema: z.ZodType<Prisma.UserProfileCreateInput> = z.object({
  publicId: z.string().cuid().optional(),
  profilePictureUrl: z.string().optional().nullable(),
  profileColor: z.string().optional(),
  username: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  User: z.lazy(() => UserCreateNestedManyWithoutUserProfileInputSchema).optional()
}).strict();

export const UserProfileUncheckedCreateInputSchema: z.ZodType<Prisma.UserProfileUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  publicId: z.string().cuid().optional(),
  profilePictureUrl: z.string().optional().nullable(),
  profileColor: z.string().optional(),
  username: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  User: z.lazy(() => UserUncheckedCreateNestedManyWithoutUserProfileInputSchema).optional()
}).strict();

export const UserProfileUpdateInputSchema: z.ZodType<Prisma.UserProfileUpdateInput> = z.object({
  publicId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  profilePictureUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  profileColor: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  User: z.lazy(() => UserUpdateManyWithoutUserProfileNestedInputSchema).optional()
}).strict();

export const UserProfileUncheckedUpdateInputSchema: z.ZodType<Prisma.UserProfileUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  publicId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  profilePictureUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  profileColor: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  User: z.lazy(() => UserUncheckedUpdateManyWithoutUserProfileNestedInputSchema).optional()
}).strict();

export const UserProfileCreateManyInputSchema: z.ZodType<Prisma.UserProfileCreateManyInput> = z.object({
  id: z.number().int().optional(),
  publicId: z.string().cuid().optional(),
  profilePictureUrl: z.string().optional().nullable(),
  profileColor: z.string().optional(),
  username: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const UserProfileUpdateManyMutationInputSchema: z.ZodType<Prisma.UserProfileUpdateManyMutationInput> = z.object({
  publicId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  profilePictureUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  profileColor: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserProfileUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserProfileUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  publicId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  profilePictureUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  profileColor: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ChannelCreateInputSchema: z.ZodType<Prisma.ChannelCreateInput> = z.object({
  id: z.string().cuid().optional(),
  kind: z.lazy(() => ChannelKindSchema).optional(),
  createdBy: z.string(),
  name: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Organisation: z.lazy(() => OrganisationCreateNestedOneWithoutChannelsInputSchema).optional()
}).strict();

export const ChannelUncheckedCreateInputSchema: z.ZodType<Prisma.ChannelUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  kind: z.lazy(() => ChannelKindSchema).optional(),
  createdBy: z.string(),
  name: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  organisationId: z.string().optional().nullable()
}).strict();

export const ChannelUpdateInputSchema: z.ZodType<Prisma.ChannelUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  kind: z.union([ z.lazy(() => ChannelKindSchema),z.lazy(() => EnumChannelKindFieldUpdateOperationsInputSchema) ]).optional(),
  createdBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Organisation: z.lazy(() => OrganisationUpdateOneWithoutChannelsNestedInputSchema).optional()
}).strict();

export const ChannelUncheckedUpdateInputSchema: z.ZodType<Prisma.ChannelUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  kind: z.union([ z.lazy(() => ChannelKindSchema),z.lazy(() => EnumChannelKindFieldUpdateOperationsInputSchema) ]).optional(),
  createdBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  organisationId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ChannelCreateManyInputSchema: z.ZodType<Prisma.ChannelCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  kind: z.lazy(() => ChannelKindSchema).optional(),
  createdBy: z.string(),
  name: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  organisationId: z.string().optional().nullable()
}).strict();

export const ChannelUpdateManyMutationInputSchema: z.ZodType<Prisma.ChannelUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  kind: z.union([ z.lazy(() => ChannelKindSchema),z.lazy(() => EnumChannelKindFieldUpdateOperationsInputSchema) ]).optional(),
  createdBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ChannelUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ChannelUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  kind: z.union([ z.lazy(() => ChannelKindSchema),z.lazy(() => EnumChannelKindFieldUpdateOperationsInputSchema) ]).optional(),
  createdBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  organisationId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const MediaCreateInputSchema: z.ZodType<Prisma.MediaCreateInput> = z.object({
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

export const MediaUncheckedCreateInputSchema: z.ZodType<Prisma.MediaUncheckedCreateInput> = z.object({
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

export const MediaUpdateInputSchema: z.ZodType<Prisma.MediaUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  kind: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  filename: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  width: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  height: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  path: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Message: z.lazy(() => MessageUpdateOneWithoutMediaNestedInputSchema).optional()
}).strict();

export const MediaUncheckedUpdateInputSchema: z.ZodType<Prisma.MediaUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  kind: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  filename: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  width: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  height: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  path: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  messageId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const MediaCreateManyInputSchema: z.ZodType<Prisma.MediaCreateManyInput> = z.object({
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

export const MediaUpdateManyMutationInputSchema: z.ZodType<Prisma.MediaUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  kind: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  filename: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  width: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  height: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  path: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MediaUncheckedUpdateManyInputSchema: z.ZodType<Prisma.MediaUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  kind: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  filename: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  width: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  height: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  path: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  messageId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const MessageCreateInputSchema: z.ZodType<Prisma.MessageCreateInput> = z.object({
  id: z.string().cuid().optional(),
  text: z.string(),
  senderId: z.string(),
  receiverId: z.string().optional().nullable(),
  channelId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  media: z.lazy(() => MediaCreateNestedManyWithoutMessageInputSchema).optional()
}).strict();

export const MessageUncheckedCreateInputSchema: z.ZodType<Prisma.MessageUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  text: z.string(),
  senderId: z.string(),
  receiverId: z.string().optional().nullable(),
  channelId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  media: z.lazy(() => MediaUncheckedCreateNestedManyWithoutMessageInputSchema).optional()
}).strict();

export const MessageUpdateInputSchema: z.ZodType<Prisma.MessageUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  senderId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  receiverId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  channelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  media: z.lazy(() => MediaUpdateManyWithoutMessageNestedInputSchema).optional()
}).strict();

export const MessageUncheckedUpdateInputSchema: z.ZodType<Prisma.MessageUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  senderId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  receiverId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  channelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  media: z.lazy(() => MediaUncheckedUpdateManyWithoutMessageNestedInputSchema).optional()
}).strict();

export const MessageCreateManyInputSchema: z.ZodType<Prisma.MessageCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  text: z.string(),
  senderId: z.string(),
  receiverId: z.string().optional().nullable(),
  channelId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const MessageUpdateManyMutationInputSchema: z.ZodType<Prisma.MessageUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  senderId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  receiverId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  channelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MessageUncheckedUpdateManyInputSchema: z.ZodType<Prisma.MessageUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  senderId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  receiverId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  channelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserNotificationsCreateInputSchema: z.ZodType<Prisma.UserNotificationsCreateInput> = z.object({
  id: z.string().cuid().optional(),
  payload: z.string(),
  userId: z.string().optional().nullable()
}).strict();

export const UserNotificationsUncheckedCreateInputSchema: z.ZodType<Prisma.UserNotificationsUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  payload: z.string(),
  userId: z.string().optional().nullable()
}).strict();

export const UserNotificationsUpdateInputSchema: z.ZodType<Prisma.UserNotificationsUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  payload: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UserNotificationsUncheckedUpdateInputSchema: z.ZodType<Prisma.UserNotificationsUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  payload: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UserNotificationsCreateManyInputSchema: z.ZodType<Prisma.UserNotificationsCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  payload: z.string(),
  userId: z.string().optional().nullable()
}).strict();

export const UserNotificationsUpdateManyMutationInputSchema: z.ZodType<Prisma.UserNotificationsUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  payload: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UserNotificationsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserNotificationsUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  payload: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const InvitationCodeCreateInputSchema: z.ZodType<Prisma.InvitationCodeCreateInput> = z.object({
  id: z.string().cuid().optional(),
  role: z.string(),
  userId: z.string().optional().nullable()
}).strict();

export const InvitationCodeUncheckedCreateInputSchema: z.ZodType<Prisma.InvitationCodeUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  role: z.string(),
  userId: z.string().optional().nullable()
}).strict();

export const InvitationCodeUpdateInputSchema: z.ZodType<Prisma.InvitationCodeUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const InvitationCodeUncheckedUpdateInputSchema: z.ZodType<Prisma.InvitationCodeUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const InvitationCodeCreateManyInputSchema: z.ZodType<Prisma.InvitationCodeCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  role: z.string(),
  userId: z.string().optional().nullable()
}).strict();

export const InvitationCodeUpdateManyMutationInputSchema: z.ZodType<Prisma.InvitationCodeUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const InvitationCodeUncheckedUpdateManyInputSchema: z.ZodType<Prisma.InvitationCodeUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.union([ z.number().array(),z.number() ]).optional(),
  notIn: z.union([ z.number().array(),z.number() ]).optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.union([ z.string().array(),z.string() ]).optional(),
  notIn: z.union([ z.string().array(),z.string() ]).optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional(),
  notIn: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const MembershipListRelationFilterSchema: z.ZodType<Prisma.MembershipListRelationFilter> = z.object({
  every: z.lazy(() => MembershipWhereInputSchema).optional(),
  some: z.lazy(() => MembershipWhereInputSchema).optional(),
  none: z.lazy(() => MembershipWhereInputSchema).optional()
}).strict();

export const ChannelListRelationFilterSchema: z.ZodType<Prisma.ChannelListRelationFilter> = z.object({
  every: z.lazy(() => ChannelWhereInputSchema).optional(),
  some: z.lazy(() => ChannelWhereInputSchema).optional(),
  none: z.lazy(() => ChannelWhereInputSchema).optional()
}).strict();

export const OrganisationInvitationListRelationFilterSchema: z.ZodType<Prisma.OrganisationInvitationListRelationFilter> = z.object({
  every: z.lazy(() => OrganisationInvitationWhereInputSchema).optional(),
  some: z.lazy(() => OrganisationInvitationWhereInputSchema).optional(),
  none: z.lazy(() => OrganisationInvitationWhereInputSchema).optional()
}).strict();

export const MembershipOrderByRelationAggregateInputSchema: z.ZodType<Prisma.MembershipOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ChannelOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ChannelOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrganisationInvitationOrderByRelationAggregateInputSchema: z.ZodType<Prisma.OrganisationInvitationOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrganisationCountOrderByAggregateInputSchema: z.ZodType<Prisma.OrganisationCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  publicId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrganisationAvgOrderByAggregateInputSchema: z.ZodType<Prisma.OrganisationAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrganisationMaxOrderByAggregateInputSchema: z.ZodType<Prisma.OrganisationMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  publicId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrganisationMinOrderByAggregateInputSchema: z.ZodType<Prisma.OrganisationMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  publicId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrganisationSumOrderByAggregateInputSchema: z.ZodType<Prisma.OrganisationSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.union([ z.number().array(),z.number() ]).optional(),
  notIn: z.union([ z.number().array(),z.number() ]).optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.union([ z.string().array(),z.string() ]).optional(),
  notIn: z.union([ z.string().array(),z.string() ]).optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional(),
  notIn: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const UserRelationFilterSchema: z.ZodType<Prisma.UserRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional(),
  isNot: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const OrganisationRelationFilterSchema: z.ZodType<Prisma.OrganisationRelationFilter> = z.object({
  is: z.lazy(() => OrganisationWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => OrganisationWhereInputSchema).optional().nullable()
}).strict();

export const OrganisationInvitationCountOrderByAggregateInputSchema: z.ZodType<Prisma.OrganisationInvitationCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  publicId: z.lazy(() => SortOrderSchema).optional(),
  issuedEmail: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  creatorId: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrganisationInvitationAvgOrderByAggregateInputSchema: z.ZodType<Prisma.OrganisationInvitationAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  creatorId: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrganisationInvitationMaxOrderByAggregateInputSchema: z.ZodType<Prisma.OrganisationInvitationMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  publicId: z.lazy(() => SortOrderSchema).optional(),
  issuedEmail: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  creatorId: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrganisationInvitationMinOrderByAggregateInputSchema: z.ZodType<Prisma.OrganisationInvitationMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  publicId: z.lazy(() => SortOrderSchema).optional(),
  issuedEmail: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  creatorId: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrganisationInvitationSumOrderByAggregateInputSchema: z.ZodType<Prisma.OrganisationInvitationSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  creatorId: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumMembershipRoleFilterSchema: z.ZodType<Prisma.EnumMembershipRoleFilter> = z.object({
  equals: z.lazy(() => MembershipRoleSchema).optional(),
  in: z.union([ z.lazy(() => MembershipRoleSchema).array(),z.lazy(() => MembershipRoleSchema) ]).optional(),
  notIn: z.union([ z.lazy(() => MembershipRoleSchema).array(),z.lazy(() => MembershipRoleSchema) ]).optional(),
  not: z.union([ z.lazy(() => MembershipRoleSchema),z.lazy(() => NestedEnumMembershipRoleFilterSchema) ]).optional(),
}).strict();

export const IntNullableFilterSchema: z.ZodType<Prisma.IntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.union([ z.number().array(),z.number() ]).optional().nullable(),
  notIn: z.union([ z.number().array(),z.number() ]).optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.union([ z.string().array(),z.string() ]).optional().nullable(),
  notIn: z.union([ z.string().array(),z.string() ]).optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const MembershipOrganizationIdInvitedEmailCompoundUniqueInputSchema: z.ZodType<Prisma.MembershipOrganizationIdInvitedEmailCompoundUniqueInput> = z.object({
  organizationId: z.number(),
  invitedEmail: z.string()
}).strict();

export const MembershipCountOrderByAggregateInputSchema: z.ZodType<Prisma.MembershipCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  invitedName: z.lazy(() => SortOrderSchema).optional(),
  invitedEmail: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MembershipAvgOrderByAggregateInputSchema: z.ZodType<Prisma.MembershipAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MembershipMaxOrderByAggregateInputSchema: z.ZodType<Prisma.MembershipMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  invitedName: z.lazy(() => SortOrderSchema).optional(),
  invitedEmail: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MembershipMinOrderByAggregateInputSchema: z.ZodType<Prisma.MembershipMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  invitedName: z.lazy(() => SortOrderSchema).optional(),
  invitedEmail: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MembershipSumOrderByAggregateInputSchema: z.ZodType<Prisma.MembershipSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumMembershipRoleWithAggregatesFilterSchema: z.ZodType<Prisma.EnumMembershipRoleWithAggregatesFilter> = z.object({
  equals: z.lazy(() => MembershipRoleSchema).optional(),
  in: z.union([ z.lazy(() => MembershipRoleSchema).array(),z.lazy(() => MembershipRoleSchema) ]).optional(),
  notIn: z.union([ z.lazy(() => MembershipRoleSchema).array(),z.lazy(() => MembershipRoleSchema) ]).optional(),
  not: z.union([ z.lazy(() => MembershipRoleSchema),z.lazy(() => NestedEnumMembershipRoleWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumMembershipRoleFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumMembershipRoleFilterSchema).optional()
}).strict();

export const IntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.IntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.union([ z.number().array(),z.number() ]).optional().nullable(),
  notIn: z.union([ z.number().array(),z.number() ]).optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.union([ z.string().array(),z.string() ]).optional().nullable(),
  notIn: z.union([ z.string().array(),z.string() ]).optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const EnumGlobalRoleFilterSchema: z.ZodType<Prisma.EnumGlobalRoleFilter> = z.object({
  equals: z.lazy(() => GlobalRoleSchema).optional(),
  in: z.union([ z.lazy(() => GlobalRoleSchema).array(),z.lazy(() => GlobalRoleSchema) ]).optional(),
  notIn: z.union([ z.lazy(() => GlobalRoleSchema).array(),z.lazy(() => GlobalRoleSchema) ]).optional(),
  not: z.union([ z.lazy(() => GlobalRoleSchema),z.lazy(() => NestedEnumGlobalRoleFilterSchema) ]).optional(),
}).strict();

export const UserProfileRelationFilterSchema: z.ZodType<Prisma.UserProfileRelationFilter> = z.object({
  is: z.lazy(() => UserProfileWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => UserProfileWhereInputSchema).optional().nullable()
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.object({
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

export const UserAvgOrderByAggregateInputSchema: z.ZodType<Prisma.UserAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userProfileId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.object({
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

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.object({
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

export const UserSumOrderByAggregateInputSchema: z.ZodType<Prisma.UserSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userProfileId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumGlobalRoleWithAggregatesFilterSchema: z.ZodType<Prisma.EnumGlobalRoleWithAggregatesFilter> = z.object({
  equals: z.lazy(() => GlobalRoleSchema).optional(),
  in: z.union([ z.lazy(() => GlobalRoleSchema).array(),z.lazy(() => GlobalRoleSchema) ]).optional(),
  notIn: z.union([ z.lazy(() => GlobalRoleSchema).array(),z.lazy(() => GlobalRoleSchema) ]).optional(),
  not: z.union([ z.lazy(() => GlobalRoleSchema),z.lazy(() => NestedEnumGlobalRoleWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumGlobalRoleFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumGlobalRoleFilterSchema).optional()
}).strict();

export const UserListRelationFilterSchema: z.ZodType<Prisma.UserListRelationFilter> = z.object({
  every: z.lazy(() => UserWhereInputSchema).optional(),
  some: z.lazy(() => UserWhereInputSchema).optional(),
  none: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserOrderByRelationAggregateInputSchema: z.ZodType<Prisma.UserOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserProfileCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserProfileCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  publicId: z.lazy(() => SortOrderSchema).optional(),
  profilePictureUrl: z.lazy(() => SortOrderSchema).optional(),
  profileColor: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserProfileAvgOrderByAggregateInputSchema: z.ZodType<Prisma.UserProfileAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserProfileMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserProfileMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  publicId: z.lazy(() => SortOrderSchema).optional(),
  profilePictureUrl: z.lazy(() => SortOrderSchema).optional(),
  profileColor: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserProfileMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserProfileMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  publicId: z.lazy(() => SortOrderSchema).optional(),
  profilePictureUrl: z.lazy(() => SortOrderSchema).optional(),
  profileColor: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserProfileSumOrderByAggregateInputSchema: z.ZodType<Prisma.UserProfileSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumChannelKindFilterSchema: z.ZodType<Prisma.EnumChannelKindFilter> = z.object({
  equals: z.lazy(() => ChannelKindSchema).optional(),
  in: z.union([ z.lazy(() => ChannelKindSchema).array(),z.lazy(() => ChannelKindSchema) ]).optional(),
  notIn: z.union([ z.lazy(() => ChannelKindSchema).array(),z.lazy(() => ChannelKindSchema) ]).optional(),
  not: z.union([ z.lazy(() => ChannelKindSchema),z.lazy(() => NestedEnumChannelKindFilterSchema) ]).optional(),
}).strict();

export const ChannelCountOrderByAggregateInputSchema: z.ZodType<Prisma.ChannelCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  kind: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  organisationId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ChannelMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ChannelMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  kind: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  organisationId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ChannelMinOrderByAggregateInputSchema: z.ZodType<Prisma.ChannelMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  kind: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  organisationId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumChannelKindWithAggregatesFilterSchema: z.ZodType<Prisma.EnumChannelKindWithAggregatesFilter> = z.object({
  equals: z.lazy(() => ChannelKindSchema).optional(),
  in: z.union([ z.lazy(() => ChannelKindSchema).array(),z.lazy(() => ChannelKindSchema) ]).optional(),
  notIn: z.union([ z.lazy(() => ChannelKindSchema).array(),z.lazy(() => ChannelKindSchema) ]).optional(),
  not: z.union([ z.lazy(() => ChannelKindSchema),z.lazy(() => NestedEnumChannelKindWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumChannelKindFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumChannelKindFilterSchema).optional()
}).strict();

export const MessageRelationFilterSchema: z.ZodType<Prisma.MessageRelationFilter> = z.object({
  is: z.lazy(() => MessageWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => MessageWhereInputSchema).optional().nullable()
}).strict();

export const MediaCountOrderByAggregateInputSchema: z.ZodType<Prisma.MediaCountOrderByAggregateInput> = z.object({
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

export const MediaAvgOrderByAggregateInputSchema: z.ZodType<Prisma.MediaAvgOrderByAggregateInput> = z.object({
  size: z.lazy(() => SortOrderSchema).optional(),
  width: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MediaMaxOrderByAggregateInputSchema: z.ZodType<Prisma.MediaMaxOrderByAggregateInput> = z.object({
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

export const MediaMinOrderByAggregateInputSchema: z.ZodType<Prisma.MediaMinOrderByAggregateInput> = z.object({
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

export const MediaSumOrderByAggregateInputSchema: z.ZodType<Prisma.MediaSumOrderByAggregateInput> = z.object({
  size: z.lazy(() => SortOrderSchema).optional(),
  width: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MediaListRelationFilterSchema: z.ZodType<Prisma.MediaListRelationFilter> = z.object({
  every: z.lazy(() => MediaWhereInputSchema).optional(),
  some: z.lazy(() => MediaWhereInputSchema).optional(),
  none: z.lazy(() => MediaWhereInputSchema).optional()
}).strict();

export const MediaOrderByRelationAggregateInputSchema: z.ZodType<Prisma.MediaOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MessageCountOrderByAggregateInputSchema: z.ZodType<Prisma.MessageCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  senderId: z.lazy(() => SortOrderSchema).optional(),
  receiverId: z.lazy(() => SortOrderSchema).optional(),
  channelId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MessageMaxOrderByAggregateInputSchema: z.ZodType<Prisma.MessageMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  senderId: z.lazy(() => SortOrderSchema).optional(),
  receiverId: z.lazy(() => SortOrderSchema).optional(),
  channelId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MessageMinOrderByAggregateInputSchema: z.ZodType<Prisma.MessageMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  senderId: z.lazy(() => SortOrderSchema).optional(),
  receiverId: z.lazy(() => SortOrderSchema).optional(),
  channelId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserNotificationsCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserNotificationsCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  payload: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserNotificationsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserNotificationsMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  payload: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserNotificationsMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserNotificationsMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  payload: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InvitationCodeCountOrderByAggregateInputSchema: z.ZodType<Prisma.InvitationCodeCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InvitationCodeMaxOrderByAggregateInputSchema: z.ZodType<Prisma.InvitationCodeMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InvitationCodeMinOrderByAggregateInputSchema: z.ZodType<Prisma.InvitationCodeMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MembershipCreateNestedManyWithoutOrganizationInputSchema: z.ZodType<Prisma.MembershipCreateNestedManyWithoutOrganizationInput> = z.object({
  create: z.union([ z.lazy(() => MembershipCreateWithoutOrganizationInputSchema),z.lazy(() => MembershipCreateWithoutOrganizationInputSchema).array(),z.lazy(() => MembershipUncheckedCreateWithoutOrganizationInputSchema),z.lazy(() => MembershipUncheckedCreateWithoutOrganizationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MembershipCreateOrConnectWithoutOrganizationInputSchema),z.lazy(() => MembershipCreateOrConnectWithoutOrganizationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MembershipCreateManyOrganizationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MembershipWhereUniqueInputSchema),z.lazy(() => MembershipWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ChannelCreateNestedManyWithoutOrganisationInputSchema: z.ZodType<Prisma.ChannelCreateNestedManyWithoutOrganisationInput> = z.object({
  create: z.union([ z.lazy(() => ChannelCreateWithoutOrganisationInputSchema),z.lazy(() => ChannelCreateWithoutOrganisationInputSchema).array(),z.lazy(() => ChannelUncheckedCreateWithoutOrganisationInputSchema),z.lazy(() => ChannelUncheckedCreateWithoutOrganisationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChannelCreateOrConnectWithoutOrganisationInputSchema),z.lazy(() => ChannelCreateOrConnectWithoutOrganisationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ChannelCreateManyOrganisationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ChannelWhereUniqueInputSchema),z.lazy(() => ChannelWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const OrganisationInvitationCreateNestedManyWithoutOrganisationInputSchema: z.ZodType<Prisma.OrganisationInvitationCreateNestedManyWithoutOrganisationInput> = z.object({
  create: z.union([ z.lazy(() => OrganisationInvitationCreateWithoutOrganisationInputSchema),z.lazy(() => OrganisationInvitationCreateWithoutOrganisationInputSchema).array(),z.lazy(() => OrganisationInvitationUncheckedCreateWithoutOrganisationInputSchema),z.lazy(() => OrganisationInvitationUncheckedCreateWithoutOrganisationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrganisationInvitationCreateOrConnectWithoutOrganisationInputSchema),z.lazy(() => OrganisationInvitationCreateOrConnectWithoutOrganisationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrganisationInvitationCreateManyOrganisationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrganisationInvitationWhereUniqueInputSchema),z.lazy(() => OrganisationInvitationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const MembershipUncheckedCreateNestedManyWithoutOrganizationInputSchema: z.ZodType<Prisma.MembershipUncheckedCreateNestedManyWithoutOrganizationInput> = z.object({
  create: z.union([ z.lazy(() => MembershipCreateWithoutOrganizationInputSchema),z.lazy(() => MembershipCreateWithoutOrganizationInputSchema).array(),z.lazy(() => MembershipUncheckedCreateWithoutOrganizationInputSchema),z.lazy(() => MembershipUncheckedCreateWithoutOrganizationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MembershipCreateOrConnectWithoutOrganizationInputSchema),z.lazy(() => MembershipCreateOrConnectWithoutOrganizationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MembershipCreateManyOrganizationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MembershipWhereUniqueInputSchema),z.lazy(() => MembershipWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ChannelUncheckedCreateNestedManyWithoutOrganisationInputSchema: z.ZodType<Prisma.ChannelUncheckedCreateNestedManyWithoutOrganisationInput> = z.object({
  create: z.union([ z.lazy(() => ChannelCreateWithoutOrganisationInputSchema),z.lazy(() => ChannelCreateWithoutOrganisationInputSchema).array(),z.lazy(() => ChannelUncheckedCreateWithoutOrganisationInputSchema),z.lazy(() => ChannelUncheckedCreateWithoutOrganisationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChannelCreateOrConnectWithoutOrganisationInputSchema),z.lazy(() => ChannelCreateOrConnectWithoutOrganisationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ChannelCreateManyOrganisationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ChannelWhereUniqueInputSchema),z.lazy(() => ChannelWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const OrganisationInvitationUncheckedCreateNestedManyWithoutOrganisationInputSchema: z.ZodType<Prisma.OrganisationInvitationUncheckedCreateNestedManyWithoutOrganisationInput> = z.object({
  create: z.union([ z.lazy(() => OrganisationInvitationCreateWithoutOrganisationInputSchema),z.lazy(() => OrganisationInvitationCreateWithoutOrganisationInputSchema).array(),z.lazy(() => OrganisationInvitationUncheckedCreateWithoutOrganisationInputSchema),z.lazy(() => OrganisationInvitationUncheckedCreateWithoutOrganisationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrganisationInvitationCreateOrConnectWithoutOrganisationInputSchema),z.lazy(() => OrganisationInvitationCreateOrConnectWithoutOrganisationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrganisationInvitationCreateManyOrganisationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrganisationInvitationWhereUniqueInputSchema),z.lazy(() => OrganisationInvitationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const MembershipUpdateManyWithoutOrganizationNestedInputSchema: z.ZodType<Prisma.MembershipUpdateManyWithoutOrganizationNestedInput> = z.object({
  create: z.union([ z.lazy(() => MembershipCreateWithoutOrganizationInputSchema),z.lazy(() => MembershipCreateWithoutOrganizationInputSchema).array(),z.lazy(() => MembershipUncheckedCreateWithoutOrganizationInputSchema),z.lazy(() => MembershipUncheckedCreateWithoutOrganizationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MembershipCreateOrConnectWithoutOrganizationInputSchema),z.lazy(() => MembershipCreateOrConnectWithoutOrganizationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MembershipUpsertWithWhereUniqueWithoutOrganizationInputSchema),z.lazy(() => MembershipUpsertWithWhereUniqueWithoutOrganizationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MembershipCreateManyOrganizationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MembershipWhereUniqueInputSchema),z.lazy(() => MembershipWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MembershipWhereUniqueInputSchema),z.lazy(() => MembershipWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MembershipWhereUniqueInputSchema),z.lazy(() => MembershipWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MembershipWhereUniqueInputSchema),z.lazy(() => MembershipWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MembershipUpdateWithWhereUniqueWithoutOrganizationInputSchema),z.lazy(() => MembershipUpdateWithWhereUniqueWithoutOrganizationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MembershipUpdateManyWithWhereWithoutOrganizationInputSchema),z.lazy(() => MembershipUpdateManyWithWhereWithoutOrganizationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MembershipScalarWhereInputSchema),z.lazy(() => MembershipScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ChannelUpdateManyWithoutOrganisationNestedInputSchema: z.ZodType<Prisma.ChannelUpdateManyWithoutOrganisationNestedInput> = z.object({
  create: z.union([ z.lazy(() => ChannelCreateWithoutOrganisationInputSchema),z.lazy(() => ChannelCreateWithoutOrganisationInputSchema).array(),z.lazy(() => ChannelUncheckedCreateWithoutOrganisationInputSchema),z.lazy(() => ChannelUncheckedCreateWithoutOrganisationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChannelCreateOrConnectWithoutOrganisationInputSchema),z.lazy(() => ChannelCreateOrConnectWithoutOrganisationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ChannelUpsertWithWhereUniqueWithoutOrganisationInputSchema),z.lazy(() => ChannelUpsertWithWhereUniqueWithoutOrganisationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ChannelCreateManyOrganisationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ChannelWhereUniqueInputSchema),z.lazy(() => ChannelWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ChannelWhereUniqueInputSchema),z.lazy(() => ChannelWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ChannelWhereUniqueInputSchema),z.lazy(() => ChannelWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ChannelWhereUniqueInputSchema),z.lazy(() => ChannelWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ChannelUpdateWithWhereUniqueWithoutOrganisationInputSchema),z.lazy(() => ChannelUpdateWithWhereUniqueWithoutOrganisationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ChannelUpdateManyWithWhereWithoutOrganisationInputSchema),z.lazy(() => ChannelUpdateManyWithWhereWithoutOrganisationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ChannelScalarWhereInputSchema),z.lazy(() => ChannelScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const OrganisationInvitationUpdateManyWithoutOrganisationNestedInputSchema: z.ZodType<Prisma.OrganisationInvitationUpdateManyWithoutOrganisationNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrganisationInvitationCreateWithoutOrganisationInputSchema),z.lazy(() => OrganisationInvitationCreateWithoutOrganisationInputSchema).array(),z.lazy(() => OrganisationInvitationUncheckedCreateWithoutOrganisationInputSchema),z.lazy(() => OrganisationInvitationUncheckedCreateWithoutOrganisationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrganisationInvitationCreateOrConnectWithoutOrganisationInputSchema),z.lazy(() => OrganisationInvitationCreateOrConnectWithoutOrganisationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OrganisationInvitationUpsertWithWhereUniqueWithoutOrganisationInputSchema),z.lazy(() => OrganisationInvitationUpsertWithWhereUniqueWithoutOrganisationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrganisationInvitationCreateManyOrganisationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OrganisationInvitationWhereUniqueInputSchema),z.lazy(() => OrganisationInvitationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OrganisationInvitationWhereUniqueInputSchema),z.lazy(() => OrganisationInvitationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OrganisationInvitationWhereUniqueInputSchema),z.lazy(() => OrganisationInvitationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OrganisationInvitationWhereUniqueInputSchema),z.lazy(() => OrganisationInvitationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OrganisationInvitationUpdateWithWhereUniqueWithoutOrganisationInputSchema),z.lazy(() => OrganisationInvitationUpdateWithWhereUniqueWithoutOrganisationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OrganisationInvitationUpdateManyWithWhereWithoutOrganisationInputSchema),z.lazy(() => OrganisationInvitationUpdateManyWithWhereWithoutOrganisationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OrganisationInvitationScalarWhereInputSchema),z.lazy(() => OrganisationInvitationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const MembershipUncheckedUpdateManyWithoutOrganizationNestedInputSchema: z.ZodType<Prisma.MembershipUncheckedUpdateManyWithoutOrganizationNestedInput> = z.object({
  create: z.union([ z.lazy(() => MembershipCreateWithoutOrganizationInputSchema),z.lazy(() => MembershipCreateWithoutOrganizationInputSchema).array(),z.lazy(() => MembershipUncheckedCreateWithoutOrganizationInputSchema),z.lazy(() => MembershipUncheckedCreateWithoutOrganizationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MembershipCreateOrConnectWithoutOrganizationInputSchema),z.lazy(() => MembershipCreateOrConnectWithoutOrganizationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MembershipUpsertWithWhereUniqueWithoutOrganizationInputSchema),z.lazy(() => MembershipUpsertWithWhereUniqueWithoutOrganizationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MembershipCreateManyOrganizationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MembershipWhereUniqueInputSchema),z.lazy(() => MembershipWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MembershipWhereUniqueInputSchema),z.lazy(() => MembershipWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MembershipWhereUniqueInputSchema),z.lazy(() => MembershipWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MembershipWhereUniqueInputSchema),z.lazy(() => MembershipWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MembershipUpdateWithWhereUniqueWithoutOrganizationInputSchema),z.lazy(() => MembershipUpdateWithWhereUniqueWithoutOrganizationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MembershipUpdateManyWithWhereWithoutOrganizationInputSchema),z.lazy(() => MembershipUpdateManyWithWhereWithoutOrganizationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MembershipScalarWhereInputSchema),z.lazy(() => MembershipScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ChannelUncheckedUpdateManyWithoutOrganisationNestedInputSchema: z.ZodType<Prisma.ChannelUncheckedUpdateManyWithoutOrganisationNestedInput> = z.object({
  create: z.union([ z.lazy(() => ChannelCreateWithoutOrganisationInputSchema),z.lazy(() => ChannelCreateWithoutOrganisationInputSchema).array(),z.lazy(() => ChannelUncheckedCreateWithoutOrganisationInputSchema),z.lazy(() => ChannelUncheckedCreateWithoutOrganisationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChannelCreateOrConnectWithoutOrganisationInputSchema),z.lazy(() => ChannelCreateOrConnectWithoutOrganisationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ChannelUpsertWithWhereUniqueWithoutOrganisationInputSchema),z.lazy(() => ChannelUpsertWithWhereUniqueWithoutOrganisationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ChannelCreateManyOrganisationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ChannelWhereUniqueInputSchema),z.lazy(() => ChannelWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ChannelWhereUniqueInputSchema),z.lazy(() => ChannelWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ChannelWhereUniqueInputSchema),z.lazy(() => ChannelWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ChannelWhereUniqueInputSchema),z.lazy(() => ChannelWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ChannelUpdateWithWhereUniqueWithoutOrganisationInputSchema),z.lazy(() => ChannelUpdateWithWhereUniqueWithoutOrganisationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ChannelUpdateManyWithWhereWithoutOrganisationInputSchema),z.lazy(() => ChannelUpdateManyWithWhereWithoutOrganisationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ChannelScalarWhereInputSchema),z.lazy(() => ChannelScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const OrganisationInvitationUncheckedUpdateManyWithoutOrganisationNestedInputSchema: z.ZodType<Prisma.OrganisationInvitationUncheckedUpdateManyWithoutOrganisationNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrganisationInvitationCreateWithoutOrganisationInputSchema),z.lazy(() => OrganisationInvitationCreateWithoutOrganisationInputSchema).array(),z.lazy(() => OrganisationInvitationUncheckedCreateWithoutOrganisationInputSchema),z.lazy(() => OrganisationInvitationUncheckedCreateWithoutOrganisationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrganisationInvitationCreateOrConnectWithoutOrganisationInputSchema),z.lazy(() => OrganisationInvitationCreateOrConnectWithoutOrganisationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OrganisationInvitationUpsertWithWhereUniqueWithoutOrganisationInputSchema),z.lazy(() => OrganisationInvitationUpsertWithWhereUniqueWithoutOrganisationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrganisationInvitationCreateManyOrganisationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OrganisationInvitationWhereUniqueInputSchema),z.lazy(() => OrganisationInvitationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OrganisationInvitationWhereUniqueInputSchema),z.lazy(() => OrganisationInvitationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OrganisationInvitationWhereUniqueInputSchema),z.lazy(() => OrganisationInvitationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OrganisationInvitationWhereUniqueInputSchema),z.lazy(() => OrganisationInvitationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OrganisationInvitationUpdateWithWhereUniqueWithoutOrganisationInputSchema),z.lazy(() => OrganisationInvitationUpdateWithWhereUniqueWithoutOrganisationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OrganisationInvitationUpdateManyWithWhereWithoutOrganisationInputSchema),z.lazy(() => OrganisationInvitationUpdateManyWithWhereWithoutOrganisationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OrganisationInvitationScalarWhereInputSchema),z.lazy(() => OrganisationInvitationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutOrganisationInvitationInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutOrganisationInvitationInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutOrganisationInvitationInputSchema),z.lazy(() => UserUncheckedCreateWithoutOrganisationInvitationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutOrganisationInvitationInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const OrganisationCreateNestedOneWithoutOrganisationInvitationInputSchema: z.ZodType<Prisma.OrganisationCreateNestedOneWithoutOrganisationInvitationInput> = z.object({
  create: z.union([ z.lazy(() => OrganisationCreateWithoutOrganisationInvitationInputSchema),z.lazy(() => OrganisationUncheckedCreateWithoutOrganisationInvitationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrganisationCreateOrConnectWithoutOrganisationInvitationInputSchema).optional(),
  connect: z.lazy(() => OrganisationWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutOrganisationInvitationNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutOrganisationInvitationNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutOrganisationInvitationInputSchema),z.lazy(() => UserUncheckedCreateWithoutOrganisationInvitationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutOrganisationInvitationInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutOrganisationInvitationInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithoutOrganisationInvitationInputSchema),z.lazy(() => UserUncheckedUpdateWithoutOrganisationInvitationInputSchema) ]).optional(),
}).strict();

export const OrganisationUpdateOneRequiredWithoutOrganisationInvitationNestedInputSchema: z.ZodType<Prisma.OrganisationUpdateOneRequiredWithoutOrganisationInvitationNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrganisationCreateWithoutOrganisationInvitationInputSchema),z.lazy(() => OrganisationUncheckedCreateWithoutOrganisationInvitationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrganisationCreateOrConnectWithoutOrganisationInvitationInputSchema).optional(),
  upsert: z.lazy(() => OrganisationUpsertWithoutOrganisationInvitationInputSchema).optional(),
  connect: z.lazy(() => OrganisationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => OrganisationUpdateWithoutOrganisationInvitationInputSchema),z.lazy(() => OrganisationUncheckedUpdateWithoutOrganisationInvitationInputSchema) ]).optional(),
}).strict();

export const OrganisationCreateNestedOneWithoutMembershipInputSchema: z.ZodType<Prisma.OrganisationCreateNestedOneWithoutMembershipInput> = z.object({
  create: z.union([ z.lazy(() => OrganisationCreateWithoutMembershipInputSchema),z.lazy(() => OrganisationUncheckedCreateWithoutMembershipInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrganisationCreateOrConnectWithoutMembershipInputSchema).optional(),
  connect: z.lazy(() => OrganisationWhereUniqueInputSchema).optional()
}).strict();

export const UserCreateNestedOneWithoutMembershipsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutMembershipsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutMembershipsInputSchema),z.lazy(() => UserUncheckedCreateWithoutMembershipsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutMembershipsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const EnumMembershipRoleFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumMembershipRoleFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => MembershipRoleSchema).optional()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const OrganisationUpdateOneRequiredWithoutMembershipNestedInputSchema: z.ZodType<Prisma.OrganisationUpdateOneRequiredWithoutMembershipNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrganisationCreateWithoutMembershipInputSchema),z.lazy(() => OrganisationUncheckedCreateWithoutMembershipInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrganisationCreateOrConnectWithoutMembershipInputSchema).optional(),
  upsert: z.lazy(() => OrganisationUpsertWithoutMembershipInputSchema).optional(),
  connect: z.lazy(() => OrganisationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => OrganisationUpdateWithoutMembershipInputSchema),z.lazy(() => OrganisationUncheckedUpdateWithoutMembershipInputSchema) ]).optional(),
}).strict();

export const UserUpdateOneWithoutMembershipsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutMembershipsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutMembershipsInputSchema),z.lazy(() => UserUncheckedCreateWithoutMembershipsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutMembershipsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutMembershipsInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithoutMembershipsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutMembershipsInputSchema) ]).optional(),
}).strict();

export const NullableIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const UserProfileCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.UserProfileCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => UserProfileCreateWithoutUserInputSchema),z.lazy(() => UserProfileUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserProfileCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => UserProfileWhereUniqueInputSchema).optional()
}).strict();

export const MembershipCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.MembershipCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => MembershipCreateWithoutUserInputSchema),z.lazy(() => MembershipCreateWithoutUserInputSchema).array(),z.lazy(() => MembershipUncheckedCreateWithoutUserInputSchema),z.lazy(() => MembershipUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MembershipCreateOrConnectWithoutUserInputSchema),z.lazy(() => MembershipCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MembershipCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MembershipWhereUniqueInputSchema),z.lazy(() => MembershipWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const OrganisationInvitationCreateNestedManyWithoutCreatedByInputSchema: z.ZodType<Prisma.OrganisationInvitationCreateNestedManyWithoutCreatedByInput> = z.object({
  create: z.union([ z.lazy(() => OrganisationInvitationCreateWithoutCreatedByInputSchema),z.lazy(() => OrganisationInvitationCreateWithoutCreatedByInputSchema).array(),z.lazy(() => OrganisationInvitationUncheckedCreateWithoutCreatedByInputSchema),z.lazy(() => OrganisationInvitationUncheckedCreateWithoutCreatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrganisationInvitationCreateOrConnectWithoutCreatedByInputSchema),z.lazy(() => OrganisationInvitationCreateOrConnectWithoutCreatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrganisationInvitationCreateManyCreatedByInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrganisationInvitationWhereUniqueInputSchema),z.lazy(() => OrganisationInvitationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const MembershipUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.MembershipUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => MembershipCreateWithoutUserInputSchema),z.lazy(() => MembershipCreateWithoutUserInputSchema).array(),z.lazy(() => MembershipUncheckedCreateWithoutUserInputSchema),z.lazy(() => MembershipUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MembershipCreateOrConnectWithoutUserInputSchema),z.lazy(() => MembershipCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MembershipCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MembershipWhereUniqueInputSchema),z.lazy(() => MembershipWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const OrganisationInvitationUncheckedCreateNestedManyWithoutCreatedByInputSchema: z.ZodType<Prisma.OrganisationInvitationUncheckedCreateNestedManyWithoutCreatedByInput> = z.object({
  create: z.union([ z.lazy(() => OrganisationInvitationCreateWithoutCreatedByInputSchema),z.lazy(() => OrganisationInvitationCreateWithoutCreatedByInputSchema).array(),z.lazy(() => OrganisationInvitationUncheckedCreateWithoutCreatedByInputSchema),z.lazy(() => OrganisationInvitationUncheckedCreateWithoutCreatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrganisationInvitationCreateOrConnectWithoutCreatedByInputSchema),z.lazy(() => OrganisationInvitationCreateOrConnectWithoutCreatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrganisationInvitationCreateManyCreatedByInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrganisationInvitationWhereUniqueInputSchema),z.lazy(() => OrganisationInvitationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const EnumGlobalRoleFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumGlobalRoleFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => GlobalRoleSchema).optional()
}).strict();

export const UserProfileUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.UserProfileUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserProfileCreateWithoutUserInputSchema),z.lazy(() => UserProfileUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserProfileCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => UserProfileUpsertWithoutUserInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => UserProfileWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserProfileUpdateWithoutUserInputSchema),z.lazy(() => UserProfileUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export const MembershipUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.MembershipUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => MembershipCreateWithoutUserInputSchema),z.lazy(() => MembershipCreateWithoutUserInputSchema).array(),z.lazy(() => MembershipUncheckedCreateWithoutUserInputSchema),z.lazy(() => MembershipUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MembershipCreateOrConnectWithoutUserInputSchema),z.lazy(() => MembershipCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MembershipUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => MembershipUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MembershipCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MembershipWhereUniqueInputSchema),z.lazy(() => MembershipWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MembershipWhereUniqueInputSchema),z.lazy(() => MembershipWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MembershipWhereUniqueInputSchema),z.lazy(() => MembershipWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MembershipWhereUniqueInputSchema),z.lazy(() => MembershipWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MembershipUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => MembershipUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MembershipUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => MembershipUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MembershipScalarWhereInputSchema),z.lazy(() => MembershipScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const OrganisationInvitationUpdateManyWithoutCreatedByNestedInputSchema: z.ZodType<Prisma.OrganisationInvitationUpdateManyWithoutCreatedByNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrganisationInvitationCreateWithoutCreatedByInputSchema),z.lazy(() => OrganisationInvitationCreateWithoutCreatedByInputSchema).array(),z.lazy(() => OrganisationInvitationUncheckedCreateWithoutCreatedByInputSchema),z.lazy(() => OrganisationInvitationUncheckedCreateWithoutCreatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrganisationInvitationCreateOrConnectWithoutCreatedByInputSchema),z.lazy(() => OrganisationInvitationCreateOrConnectWithoutCreatedByInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OrganisationInvitationUpsertWithWhereUniqueWithoutCreatedByInputSchema),z.lazy(() => OrganisationInvitationUpsertWithWhereUniqueWithoutCreatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrganisationInvitationCreateManyCreatedByInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OrganisationInvitationWhereUniqueInputSchema),z.lazy(() => OrganisationInvitationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OrganisationInvitationWhereUniqueInputSchema),z.lazy(() => OrganisationInvitationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OrganisationInvitationWhereUniqueInputSchema),z.lazy(() => OrganisationInvitationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OrganisationInvitationWhereUniqueInputSchema),z.lazy(() => OrganisationInvitationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OrganisationInvitationUpdateWithWhereUniqueWithoutCreatedByInputSchema),z.lazy(() => OrganisationInvitationUpdateWithWhereUniqueWithoutCreatedByInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OrganisationInvitationUpdateManyWithWhereWithoutCreatedByInputSchema),z.lazy(() => OrganisationInvitationUpdateManyWithWhereWithoutCreatedByInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OrganisationInvitationScalarWhereInputSchema),z.lazy(() => OrganisationInvitationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const MembershipUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.MembershipUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => MembershipCreateWithoutUserInputSchema),z.lazy(() => MembershipCreateWithoutUserInputSchema).array(),z.lazy(() => MembershipUncheckedCreateWithoutUserInputSchema),z.lazy(() => MembershipUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MembershipCreateOrConnectWithoutUserInputSchema),z.lazy(() => MembershipCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MembershipUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => MembershipUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MembershipCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MembershipWhereUniqueInputSchema),z.lazy(() => MembershipWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MembershipWhereUniqueInputSchema),z.lazy(() => MembershipWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MembershipWhereUniqueInputSchema),z.lazy(() => MembershipWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MembershipWhereUniqueInputSchema),z.lazy(() => MembershipWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MembershipUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => MembershipUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MembershipUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => MembershipUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MembershipScalarWhereInputSchema),z.lazy(() => MembershipScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const OrganisationInvitationUncheckedUpdateManyWithoutCreatedByNestedInputSchema: z.ZodType<Prisma.OrganisationInvitationUncheckedUpdateManyWithoutCreatedByNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrganisationInvitationCreateWithoutCreatedByInputSchema),z.lazy(() => OrganisationInvitationCreateWithoutCreatedByInputSchema).array(),z.lazy(() => OrganisationInvitationUncheckedCreateWithoutCreatedByInputSchema),z.lazy(() => OrganisationInvitationUncheckedCreateWithoutCreatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrganisationInvitationCreateOrConnectWithoutCreatedByInputSchema),z.lazy(() => OrganisationInvitationCreateOrConnectWithoutCreatedByInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OrganisationInvitationUpsertWithWhereUniqueWithoutCreatedByInputSchema),z.lazy(() => OrganisationInvitationUpsertWithWhereUniqueWithoutCreatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrganisationInvitationCreateManyCreatedByInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OrganisationInvitationWhereUniqueInputSchema),z.lazy(() => OrganisationInvitationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OrganisationInvitationWhereUniqueInputSchema),z.lazy(() => OrganisationInvitationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OrganisationInvitationWhereUniqueInputSchema),z.lazy(() => OrganisationInvitationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OrganisationInvitationWhereUniqueInputSchema),z.lazy(() => OrganisationInvitationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OrganisationInvitationUpdateWithWhereUniqueWithoutCreatedByInputSchema),z.lazy(() => OrganisationInvitationUpdateWithWhereUniqueWithoutCreatedByInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OrganisationInvitationUpdateManyWithWhereWithoutCreatedByInputSchema),z.lazy(() => OrganisationInvitationUpdateManyWithWhereWithoutCreatedByInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OrganisationInvitationScalarWhereInputSchema),z.lazy(() => OrganisationInvitationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedManyWithoutUserProfileInputSchema: z.ZodType<Prisma.UserCreateNestedManyWithoutUserProfileInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutUserProfileInputSchema),z.lazy(() => UserCreateWithoutUserProfileInputSchema).array(),z.lazy(() => UserUncheckedCreateWithoutUserProfileInputSchema),z.lazy(() => UserUncheckedCreateWithoutUserProfileInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserCreateOrConnectWithoutUserProfileInputSchema),z.lazy(() => UserCreateOrConnectWithoutUserProfileInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserCreateManyUserProfileInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserUncheckedCreateNestedManyWithoutUserProfileInputSchema: z.ZodType<Prisma.UserUncheckedCreateNestedManyWithoutUserProfileInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutUserProfileInputSchema),z.lazy(() => UserCreateWithoutUserProfileInputSchema).array(),z.lazy(() => UserUncheckedCreateWithoutUserProfileInputSchema),z.lazy(() => UserUncheckedCreateWithoutUserProfileInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserCreateOrConnectWithoutUserProfileInputSchema),z.lazy(() => UserCreateOrConnectWithoutUserProfileInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserCreateManyUserProfileInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserUpdateManyWithoutUserProfileNestedInputSchema: z.ZodType<Prisma.UserUpdateManyWithoutUserProfileNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutUserProfileInputSchema),z.lazy(() => UserCreateWithoutUserProfileInputSchema).array(),z.lazy(() => UserUncheckedCreateWithoutUserProfileInputSchema),z.lazy(() => UserUncheckedCreateWithoutUserProfileInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserCreateOrConnectWithoutUserProfileInputSchema),z.lazy(() => UserCreateOrConnectWithoutUserProfileInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserUpsertWithWhereUniqueWithoutUserProfileInputSchema),z.lazy(() => UserUpsertWithWhereUniqueWithoutUserProfileInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserCreateManyUserProfileInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithWhereUniqueWithoutUserProfileInputSchema),z.lazy(() => UserUpdateWithWhereUniqueWithoutUserProfileInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserUpdateManyWithWhereWithoutUserProfileInputSchema),z.lazy(() => UserUpdateManyWithWhereWithoutUserProfileInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserScalarWhereInputSchema),z.lazy(() => UserScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserUncheckedUpdateManyWithoutUserProfileNestedInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyWithoutUserProfileNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutUserProfileInputSchema),z.lazy(() => UserCreateWithoutUserProfileInputSchema).array(),z.lazy(() => UserUncheckedCreateWithoutUserProfileInputSchema),z.lazy(() => UserUncheckedCreateWithoutUserProfileInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserCreateOrConnectWithoutUserProfileInputSchema),z.lazy(() => UserCreateOrConnectWithoutUserProfileInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserUpsertWithWhereUniqueWithoutUserProfileInputSchema),z.lazy(() => UserUpsertWithWhereUniqueWithoutUserProfileInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserCreateManyUserProfileInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithWhereUniqueWithoutUserProfileInputSchema),z.lazy(() => UserUpdateWithWhereUniqueWithoutUserProfileInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserUpdateManyWithWhereWithoutUserProfileInputSchema),z.lazy(() => UserUpdateManyWithWhereWithoutUserProfileInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserScalarWhereInputSchema),z.lazy(() => UserScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const OrganisationCreateNestedOneWithoutChannelsInputSchema: z.ZodType<Prisma.OrganisationCreateNestedOneWithoutChannelsInput> = z.object({
  create: z.union([ z.lazy(() => OrganisationCreateWithoutChannelsInputSchema),z.lazy(() => OrganisationUncheckedCreateWithoutChannelsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrganisationCreateOrConnectWithoutChannelsInputSchema).optional(),
  connect: z.lazy(() => OrganisationWhereUniqueInputSchema).optional()
}).strict();

export const EnumChannelKindFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumChannelKindFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => ChannelKindSchema).optional()
}).strict();

export const OrganisationUpdateOneWithoutChannelsNestedInputSchema: z.ZodType<Prisma.OrganisationUpdateOneWithoutChannelsNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrganisationCreateWithoutChannelsInputSchema),z.lazy(() => OrganisationUncheckedCreateWithoutChannelsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrganisationCreateOrConnectWithoutChannelsInputSchema).optional(),
  upsert: z.lazy(() => OrganisationUpsertWithoutChannelsInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => OrganisationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => OrganisationUpdateWithoutChannelsInputSchema),z.lazy(() => OrganisationUncheckedUpdateWithoutChannelsInputSchema) ]).optional(),
}).strict();

export const MessageCreateNestedOneWithoutMediaInputSchema: z.ZodType<Prisma.MessageCreateNestedOneWithoutMediaInput> = z.object({
  create: z.union([ z.lazy(() => MessageCreateWithoutMediaInputSchema),z.lazy(() => MessageUncheckedCreateWithoutMediaInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MessageCreateOrConnectWithoutMediaInputSchema).optional(),
  connect: z.lazy(() => MessageWhereUniqueInputSchema).optional()
}).strict();

export const MessageUpdateOneWithoutMediaNestedInputSchema: z.ZodType<Prisma.MessageUpdateOneWithoutMediaNestedInput> = z.object({
  create: z.union([ z.lazy(() => MessageCreateWithoutMediaInputSchema),z.lazy(() => MessageUncheckedCreateWithoutMediaInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MessageCreateOrConnectWithoutMediaInputSchema).optional(),
  upsert: z.lazy(() => MessageUpsertWithoutMediaInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => MessageWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MessageUpdateWithoutMediaInputSchema),z.lazy(() => MessageUncheckedUpdateWithoutMediaInputSchema) ]).optional(),
}).strict();

export const MediaCreateNestedManyWithoutMessageInputSchema: z.ZodType<Prisma.MediaCreateNestedManyWithoutMessageInput> = z.object({
  create: z.union([ z.lazy(() => MediaCreateWithoutMessageInputSchema),z.lazy(() => MediaCreateWithoutMessageInputSchema).array(),z.lazy(() => MediaUncheckedCreateWithoutMessageInputSchema),z.lazy(() => MediaUncheckedCreateWithoutMessageInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MediaCreateOrConnectWithoutMessageInputSchema),z.lazy(() => MediaCreateOrConnectWithoutMessageInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MediaCreateManyMessageInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MediaWhereUniqueInputSchema),z.lazy(() => MediaWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const MediaUncheckedCreateNestedManyWithoutMessageInputSchema: z.ZodType<Prisma.MediaUncheckedCreateNestedManyWithoutMessageInput> = z.object({
  create: z.union([ z.lazy(() => MediaCreateWithoutMessageInputSchema),z.lazy(() => MediaCreateWithoutMessageInputSchema).array(),z.lazy(() => MediaUncheckedCreateWithoutMessageInputSchema),z.lazy(() => MediaUncheckedCreateWithoutMessageInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MediaCreateOrConnectWithoutMessageInputSchema),z.lazy(() => MediaCreateOrConnectWithoutMessageInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MediaCreateManyMessageInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MediaWhereUniqueInputSchema),z.lazy(() => MediaWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const MediaUpdateManyWithoutMessageNestedInputSchema: z.ZodType<Prisma.MediaUpdateManyWithoutMessageNestedInput> = z.object({
  create: z.union([ z.lazy(() => MediaCreateWithoutMessageInputSchema),z.lazy(() => MediaCreateWithoutMessageInputSchema).array(),z.lazy(() => MediaUncheckedCreateWithoutMessageInputSchema),z.lazy(() => MediaUncheckedCreateWithoutMessageInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MediaCreateOrConnectWithoutMessageInputSchema),z.lazy(() => MediaCreateOrConnectWithoutMessageInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MediaUpsertWithWhereUniqueWithoutMessageInputSchema),z.lazy(() => MediaUpsertWithWhereUniqueWithoutMessageInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MediaCreateManyMessageInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MediaWhereUniqueInputSchema),z.lazy(() => MediaWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MediaWhereUniqueInputSchema),z.lazy(() => MediaWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MediaWhereUniqueInputSchema),z.lazy(() => MediaWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MediaWhereUniqueInputSchema),z.lazy(() => MediaWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MediaUpdateWithWhereUniqueWithoutMessageInputSchema),z.lazy(() => MediaUpdateWithWhereUniqueWithoutMessageInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MediaUpdateManyWithWhereWithoutMessageInputSchema),z.lazy(() => MediaUpdateManyWithWhereWithoutMessageInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MediaScalarWhereInputSchema),z.lazy(() => MediaScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const MediaUncheckedUpdateManyWithoutMessageNestedInputSchema: z.ZodType<Prisma.MediaUncheckedUpdateManyWithoutMessageNestedInput> = z.object({
  create: z.union([ z.lazy(() => MediaCreateWithoutMessageInputSchema),z.lazy(() => MediaCreateWithoutMessageInputSchema).array(),z.lazy(() => MediaUncheckedCreateWithoutMessageInputSchema),z.lazy(() => MediaUncheckedCreateWithoutMessageInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MediaCreateOrConnectWithoutMessageInputSchema),z.lazy(() => MediaCreateOrConnectWithoutMessageInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MediaUpsertWithWhereUniqueWithoutMessageInputSchema),z.lazy(() => MediaUpsertWithWhereUniqueWithoutMessageInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MediaCreateManyMessageInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MediaWhereUniqueInputSchema),z.lazy(() => MediaWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MediaWhereUniqueInputSchema),z.lazy(() => MediaWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MediaWhereUniqueInputSchema),z.lazy(() => MediaWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MediaWhereUniqueInputSchema),z.lazy(() => MediaWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MediaUpdateWithWhereUniqueWithoutMessageInputSchema),z.lazy(() => MediaUpdateWithWhereUniqueWithoutMessageInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MediaUpdateManyWithWhereWithoutMessageInputSchema),z.lazy(() => MediaUpdateManyWithWhereWithoutMessageInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MediaScalarWhereInputSchema),z.lazy(() => MediaScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.union([ z.number().array(),z.number() ]).optional(),
  notIn: z.union([ z.number().array(),z.number() ]).optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.union([ z.string().array(),z.string() ]).optional(),
  notIn: z.union([ z.string().array(),z.string() ]).optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional(),
  notIn: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.union([ z.number().array(),z.number() ]).optional(),
  notIn: z.union([ z.number().array(),z.number() ]).optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.union([ z.number().array(),z.number() ]).optional(),
  notIn: z.union([ z.number().array(),z.number() ]).optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.union([ z.string().array(),z.string() ]).optional(),
  notIn: z.union([ z.string().array(),z.string() ]).optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional(),
  notIn: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedEnumMembershipRoleFilterSchema: z.ZodType<Prisma.NestedEnumMembershipRoleFilter> = z.object({
  equals: z.lazy(() => MembershipRoleSchema).optional(),
  in: z.union([ z.lazy(() => MembershipRoleSchema).array(),z.lazy(() => MembershipRoleSchema) ]).optional(),
  notIn: z.union([ z.lazy(() => MembershipRoleSchema).array(),z.lazy(() => MembershipRoleSchema) ]).optional(),
  not: z.union([ z.lazy(() => MembershipRoleSchema),z.lazy(() => NestedEnumMembershipRoleFilterSchema) ]).optional(),
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.union([ z.number().array(),z.number() ]).optional().nullable(),
  notIn: z.union([ z.number().array(),z.number() ]).optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.union([ z.string().array(),z.string() ]).optional().nullable(),
  notIn: z.union([ z.string().array(),z.string() ]).optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedEnumMembershipRoleWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumMembershipRoleWithAggregatesFilter> = z.object({
  equals: z.lazy(() => MembershipRoleSchema).optional(),
  in: z.union([ z.lazy(() => MembershipRoleSchema).array(),z.lazy(() => MembershipRoleSchema) ]).optional(),
  notIn: z.union([ z.lazy(() => MembershipRoleSchema).array(),z.lazy(() => MembershipRoleSchema) ]).optional(),
  not: z.union([ z.lazy(() => MembershipRoleSchema),z.lazy(() => NestedEnumMembershipRoleWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumMembershipRoleFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumMembershipRoleFilterSchema).optional()
}).strict();

export const NestedIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.union([ z.number().array(),z.number() ]).optional().nullable(),
  notIn: z.union([ z.number().array(),z.number() ]).optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const NestedFloatNullableFilterSchema: z.ZodType<Prisma.NestedFloatNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.union([ z.number().array(),z.number() ]).optional().nullable(),
  notIn: z.union([ z.number().array(),z.number() ]).optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.union([ z.string().array(),z.string() ]).optional().nullable(),
  notIn: z.union([ z.string().array(),z.string() ]).optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedEnumGlobalRoleFilterSchema: z.ZodType<Prisma.NestedEnumGlobalRoleFilter> = z.object({
  equals: z.lazy(() => GlobalRoleSchema).optional(),
  in: z.union([ z.lazy(() => GlobalRoleSchema).array(),z.lazy(() => GlobalRoleSchema) ]).optional(),
  notIn: z.union([ z.lazy(() => GlobalRoleSchema).array(),z.lazy(() => GlobalRoleSchema) ]).optional(),
  not: z.union([ z.lazy(() => GlobalRoleSchema),z.lazy(() => NestedEnumGlobalRoleFilterSchema) ]).optional(),
}).strict();

export const NestedEnumGlobalRoleWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumGlobalRoleWithAggregatesFilter> = z.object({
  equals: z.lazy(() => GlobalRoleSchema).optional(),
  in: z.union([ z.lazy(() => GlobalRoleSchema).array(),z.lazy(() => GlobalRoleSchema) ]).optional(),
  notIn: z.union([ z.lazy(() => GlobalRoleSchema).array(),z.lazy(() => GlobalRoleSchema) ]).optional(),
  not: z.union([ z.lazy(() => GlobalRoleSchema),z.lazy(() => NestedEnumGlobalRoleWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumGlobalRoleFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumGlobalRoleFilterSchema).optional()
}).strict();

export const NestedEnumChannelKindFilterSchema: z.ZodType<Prisma.NestedEnumChannelKindFilter> = z.object({
  equals: z.lazy(() => ChannelKindSchema).optional(),
  in: z.union([ z.lazy(() => ChannelKindSchema).array(),z.lazy(() => ChannelKindSchema) ]).optional(),
  notIn: z.union([ z.lazy(() => ChannelKindSchema).array(),z.lazy(() => ChannelKindSchema) ]).optional(),
  not: z.union([ z.lazy(() => ChannelKindSchema),z.lazy(() => NestedEnumChannelKindFilterSchema) ]).optional(),
}).strict();

export const NestedEnumChannelKindWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumChannelKindWithAggregatesFilter> = z.object({
  equals: z.lazy(() => ChannelKindSchema).optional(),
  in: z.union([ z.lazy(() => ChannelKindSchema).array(),z.lazy(() => ChannelKindSchema) ]).optional(),
  notIn: z.union([ z.lazy(() => ChannelKindSchema).array(),z.lazy(() => ChannelKindSchema) ]).optional(),
  not: z.union([ z.lazy(() => ChannelKindSchema),z.lazy(() => NestedEnumChannelKindWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumChannelKindFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumChannelKindFilterSchema).optional()
}).strict();

export const MembershipCreateWithoutOrganizationInputSchema: z.ZodType<Prisma.MembershipCreateWithoutOrganizationInput> = z.object({
  role: z.lazy(() => MembershipRoleSchema),
  invitedName: z.string().optional().nullable(),
  invitedEmail: z.string().optional().nullable(),
  user: z.lazy(() => UserCreateNestedOneWithoutMembershipsInputSchema).optional()
}).strict();

export const MembershipUncheckedCreateWithoutOrganizationInputSchema: z.ZodType<Prisma.MembershipUncheckedCreateWithoutOrganizationInput> = z.object({
  id: z.number().int().optional(),
  role: z.lazy(() => MembershipRoleSchema),
  userId: z.number().int().optional().nullable(),
  invitedName: z.string().optional().nullable(),
  invitedEmail: z.string().optional().nullable()
}).strict();

export const MembershipCreateOrConnectWithoutOrganizationInputSchema: z.ZodType<Prisma.MembershipCreateOrConnectWithoutOrganizationInput> = z.object({
  where: z.lazy(() => MembershipWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MembershipCreateWithoutOrganizationInputSchema),z.lazy(() => MembershipUncheckedCreateWithoutOrganizationInputSchema) ]),
}).strict();

export const MembershipCreateManyOrganizationInputEnvelopeSchema: z.ZodType<Prisma.MembershipCreateManyOrganizationInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => MembershipCreateManyOrganizationInputSchema),z.lazy(() => MembershipCreateManyOrganizationInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ChannelCreateWithoutOrganisationInputSchema: z.ZodType<Prisma.ChannelCreateWithoutOrganisationInput> = z.object({
  id: z.string().cuid().optional(),
  kind: z.lazy(() => ChannelKindSchema).optional(),
  createdBy: z.string(),
  name: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ChannelUncheckedCreateWithoutOrganisationInputSchema: z.ZodType<Prisma.ChannelUncheckedCreateWithoutOrganisationInput> = z.object({
  id: z.string().cuid().optional(),
  kind: z.lazy(() => ChannelKindSchema).optional(),
  createdBy: z.string(),
  name: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ChannelCreateOrConnectWithoutOrganisationInputSchema: z.ZodType<Prisma.ChannelCreateOrConnectWithoutOrganisationInput> = z.object({
  where: z.lazy(() => ChannelWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ChannelCreateWithoutOrganisationInputSchema),z.lazy(() => ChannelUncheckedCreateWithoutOrganisationInputSchema) ]),
}).strict();

export const ChannelCreateManyOrganisationInputEnvelopeSchema: z.ZodType<Prisma.ChannelCreateManyOrganisationInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ChannelCreateManyOrganisationInputSchema),z.lazy(() => ChannelCreateManyOrganisationInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const OrganisationInvitationCreateWithoutOrganisationInputSchema: z.ZodType<Prisma.OrganisationInvitationCreateWithoutOrganisationInput> = z.object({
  publicId: z.string().cuid().optional(),
  issuedEmail: z.string(),
  createdAt: z.coerce.date().optional(),
  expiresAt: z.coerce.date(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutOrganisationInvitationInputSchema)
}).strict();

export const OrganisationInvitationUncheckedCreateWithoutOrganisationInputSchema: z.ZodType<Prisma.OrganisationInvitationUncheckedCreateWithoutOrganisationInput> = z.object({
  id: z.number().int().optional(),
  publicId: z.string().cuid().optional(),
  issuedEmail: z.string(),
  createdAt: z.coerce.date().optional(),
  expiresAt: z.coerce.date(),
  creatorId: z.number().int()
}).strict();

export const OrganisationInvitationCreateOrConnectWithoutOrganisationInputSchema: z.ZodType<Prisma.OrganisationInvitationCreateOrConnectWithoutOrganisationInput> = z.object({
  where: z.lazy(() => OrganisationInvitationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrganisationInvitationCreateWithoutOrganisationInputSchema),z.lazy(() => OrganisationInvitationUncheckedCreateWithoutOrganisationInputSchema) ]),
}).strict();

export const OrganisationInvitationCreateManyOrganisationInputEnvelopeSchema: z.ZodType<Prisma.OrganisationInvitationCreateManyOrganisationInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => OrganisationInvitationCreateManyOrganisationInputSchema),z.lazy(() => OrganisationInvitationCreateManyOrganisationInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const MembershipUpsertWithWhereUniqueWithoutOrganizationInputSchema: z.ZodType<Prisma.MembershipUpsertWithWhereUniqueWithoutOrganizationInput> = z.object({
  where: z.lazy(() => MembershipWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MembershipUpdateWithoutOrganizationInputSchema),z.lazy(() => MembershipUncheckedUpdateWithoutOrganizationInputSchema) ]),
  create: z.union([ z.lazy(() => MembershipCreateWithoutOrganizationInputSchema),z.lazy(() => MembershipUncheckedCreateWithoutOrganizationInputSchema) ]),
}).strict();

export const MembershipUpdateWithWhereUniqueWithoutOrganizationInputSchema: z.ZodType<Prisma.MembershipUpdateWithWhereUniqueWithoutOrganizationInput> = z.object({
  where: z.lazy(() => MembershipWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MembershipUpdateWithoutOrganizationInputSchema),z.lazy(() => MembershipUncheckedUpdateWithoutOrganizationInputSchema) ]),
}).strict();

export const MembershipUpdateManyWithWhereWithoutOrganizationInputSchema: z.ZodType<Prisma.MembershipUpdateManyWithWhereWithoutOrganizationInput> = z.object({
  where: z.lazy(() => MembershipScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MembershipUpdateManyMutationInputSchema),z.lazy(() => MembershipUncheckedUpdateManyWithoutMembershipInputSchema) ]),
}).strict();

export const MembershipScalarWhereInputSchema: z.ZodType<Prisma.MembershipScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MembershipScalarWhereInputSchema),z.lazy(() => MembershipScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MembershipScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MembershipScalarWhereInputSchema),z.lazy(() => MembershipScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  role: z.union([ z.lazy(() => EnumMembershipRoleFilterSchema),z.lazy(() => MembershipRoleSchema) ]).optional(),
  organizationId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  invitedName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  invitedEmail: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const ChannelUpsertWithWhereUniqueWithoutOrganisationInputSchema: z.ZodType<Prisma.ChannelUpsertWithWhereUniqueWithoutOrganisationInput> = z.object({
  where: z.lazy(() => ChannelWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ChannelUpdateWithoutOrganisationInputSchema),z.lazy(() => ChannelUncheckedUpdateWithoutOrganisationInputSchema) ]),
  create: z.union([ z.lazy(() => ChannelCreateWithoutOrganisationInputSchema),z.lazy(() => ChannelUncheckedCreateWithoutOrganisationInputSchema) ]),
}).strict();

export const ChannelUpdateWithWhereUniqueWithoutOrganisationInputSchema: z.ZodType<Prisma.ChannelUpdateWithWhereUniqueWithoutOrganisationInput> = z.object({
  where: z.lazy(() => ChannelWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ChannelUpdateWithoutOrganisationInputSchema),z.lazy(() => ChannelUncheckedUpdateWithoutOrganisationInputSchema) ]),
}).strict();

export const ChannelUpdateManyWithWhereWithoutOrganisationInputSchema: z.ZodType<Prisma.ChannelUpdateManyWithWhereWithoutOrganisationInput> = z.object({
  where: z.lazy(() => ChannelScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ChannelUpdateManyMutationInputSchema),z.lazy(() => ChannelUncheckedUpdateManyWithoutChannelsInputSchema) ]),
}).strict();

export const ChannelScalarWhereInputSchema: z.ZodType<Prisma.ChannelScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ChannelScalarWhereInputSchema),z.lazy(() => ChannelScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ChannelScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ChannelScalarWhereInputSchema),z.lazy(() => ChannelScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  kind: z.union([ z.lazy(() => EnumChannelKindFilterSchema),z.lazy(() => ChannelKindSchema) ]).optional(),
  createdBy: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  organisationId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const OrganisationInvitationUpsertWithWhereUniqueWithoutOrganisationInputSchema: z.ZodType<Prisma.OrganisationInvitationUpsertWithWhereUniqueWithoutOrganisationInput> = z.object({
  where: z.lazy(() => OrganisationInvitationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => OrganisationInvitationUpdateWithoutOrganisationInputSchema),z.lazy(() => OrganisationInvitationUncheckedUpdateWithoutOrganisationInputSchema) ]),
  create: z.union([ z.lazy(() => OrganisationInvitationCreateWithoutOrganisationInputSchema),z.lazy(() => OrganisationInvitationUncheckedCreateWithoutOrganisationInputSchema) ]),
}).strict();

export const OrganisationInvitationUpdateWithWhereUniqueWithoutOrganisationInputSchema: z.ZodType<Prisma.OrganisationInvitationUpdateWithWhereUniqueWithoutOrganisationInput> = z.object({
  where: z.lazy(() => OrganisationInvitationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => OrganisationInvitationUpdateWithoutOrganisationInputSchema),z.lazy(() => OrganisationInvitationUncheckedUpdateWithoutOrganisationInputSchema) ]),
}).strict();

export const OrganisationInvitationUpdateManyWithWhereWithoutOrganisationInputSchema: z.ZodType<Prisma.OrganisationInvitationUpdateManyWithWhereWithoutOrganisationInput> = z.object({
  where: z.lazy(() => OrganisationInvitationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => OrganisationInvitationUpdateManyMutationInputSchema),z.lazy(() => OrganisationInvitationUncheckedUpdateManyWithoutOrganisationInvitationInputSchema) ]),
}).strict();

export const OrganisationInvitationScalarWhereInputSchema: z.ZodType<Prisma.OrganisationInvitationScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => OrganisationInvitationScalarWhereInputSchema),z.lazy(() => OrganisationInvitationScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrganisationInvitationScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrganisationInvitationScalarWhereInputSchema),z.lazy(() => OrganisationInvitationScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  publicId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  issuedEmail: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  creatorId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  organizationId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const UserCreateWithoutOrganisationInvitationInputSchema: z.ZodType<Prisma.UserCreateWithoutOrganisationInvitationInput> = z.object({
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

export const UserUncheckedCreateWithoutOrganisationInvitationInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutOrganisationInvitationInput> = z.object({
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

export const UserCreateOrConnectWithoutOrganisationInvitationInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutOrganisationInvitationInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutOrganisationInvitationInputSchema),z.lazy(() => UserUncheckedCreateWithoutOrganisationInvitationInputSchema) ]),
}).strict();

export const OrganisationCreateWithoutOrganisationInvitationInputSchema: z.ZodType<Prisma.OrganisationCreateWithoutOrganisationInvitationInput> = z.object({
  publicId: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  membership: z.lazy(() => MembershipCreateNestedManyWithoutOrganizationInputSchema).optional(),
  channels: z.lazy(() => ChannelCreateNestedManyWithoutOrganisationInputSchema).optional()
}).strict();

export const OrganisationUncheckedCreateWithoutOrganisationInvitationInputSchema: z.ZodType<Prisma.OrganisationUncheckedCreateWithoutOrganisationInvitationInput> = z.object({
  id: z.number().int().optional(),
  publicId: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  membership: z.lazy(() => MembershipUncheckedCreateNestedManyWithoutOrganizationInputSchema).optional(),
  channels: z.lazy(() => ChannelUncheckedCreateNestedManyWithoutOrganisationInputSchema).optional()
}).strict();

export const OrganisationCreateOrConnectWithoutOrganisationInvitationInputSchema: z.ZodType<Prisma.OrganisationCreateOrConnectWithoutOrganisationInvitationInput> = z.object({
  where: z.lazy(() => OrganisationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrganisationCreateWithoutOrganisationInvitationInputSchema),z.lazy(() => OrganisationUncheckedCreateWithoutOrganisationInvitationInputSchema) ]),
}).strict();

export const UserUpsertWithoutOrganisationInvitationInputSchema: z.ZodType<Prisma.UserUpsertWithoutOrganisationInvitationInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutOrganisationInvitationInputSchema),z.lazy(() => UserUncheckedUpdateWithoutOrganisationInvitationInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutOrganisationInvitationInputSchema),z.lazy(() => UserUncheckedCreateWithoutOrganisationInvitationInputSchema) ]),
}).strict();

export const UserUpdateWithoutOrganisationInvitationInputSchema: z.ZodType<Prisma.UserUpdateWithoutOrganisationInvitationInput> = z.object({
  publicId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => GlobalRoleSchema),z.lazy(() => EnumGlobalRoleFieldUpdateOperationsInputSchema) ]).optional(),
  userProfile: z.lazy(() => UserProfileUpdateOneWithoutUserNestedInputSchema).optional(),
  memberships: z.lazy(() => MembershipUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutOrganisationInvitationInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutOrganisationInvitationInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  publicId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => GlobalRoleSchema),z.lazy(() => EnumGlobalRoleFieldUpdateOperationsInputSchema) ]).optional(),
  userProfileId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  memberships: z.lazy(() => MembershipUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const OrganisationUpsertWithoutOrganisationInvitationInputSchema: z.ZodType<Prisma.OrganisationUpsertWithoutOrganisationInvitationInput> = z.object({
  update: z.union([ z.lazy(() => OrganisationUpdateWithoutOrganisationInvitationInputSchema),z.lazy(() => OrganisationUncheckedUpdateWithoutOrganisationInvitationInputSchema) ]),
  create: z.union([ z.lazy(() => OrganisationCreateWithoutOrganisationInvitationInputSchema),z.lazy(() => OrganisationUncheckedCreateWithoutOrganisationInvitationInputSchema) ]),
}).strict();

export const OrganisationUpdateWithoutOrganisationInvitationInputSchema: z.ZodType<Prisma.OrganisationUpdateWithoutOrganisationInvitationInput> = z.object({
  publicId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  membership: z.lazy(() => MembershipUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  channels: z.lazy(() => ChannelUpdateManyWithoutOrganisationNestedInputSchema).optional()
}).strict();

export const OrganisationUncheckedUpdateWithoutOrganisationInvitationInputSchema: z.ZodType<Prisma.OrganisationUncheckedUpdateWithoutOrganisationInvitationInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  publicId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  membership: z.lazy(() => MembershipUncheckedUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  channels: z.lazy(() => ChannelUncheckedUpdateManyWithoutOrganisationNestedInputSchema).optional()
}).strict();

export const OrganisationCreateWithoutMembershipInputSchema: z.ZodType<Prisma.OrganisationCreateWithoutMembershipInput> = z.object({
  publicId: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  channels: z.lazy(() => ChannelCreateNestedManyWithoutOrganisationInputSchema).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationCreateNestedManyWithoutOrganisationInputSchema).optional()
}).strict();

export const OrganisationUncheckedCreateWithoutMembershipInputSchema: z.ZodType<Prisma.OrganisationUncheckedCreateWithoutMembershipInput> = z.object({
  id: z.number().int().optional(),
  publicId: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  channels: z.lazy(() => ChannelUncheckedCreateNestedManyWithoutOrganisationInputSchema).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationUncheckedCreateNestedManyWithoutOrganisationInputSchema).optional()
}).strict();

export const OrganisationCreateOrConnectWithoutMembershipInputSchema: z.ZodType<Prisma.OrganisationCreateOrConnectWithoutMembershipInput> = z.object({
  where: z.lazy(() => OrganisationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrganisationCreateWithoutMembershipInputSchema),z.lazy(() => OrganisationUncheckedCreateWithoutMembershipInputSchema) ]),
}).strict();

export const UserCreateWithoutMembershipsInputSchema: z.ZodType<Prisma.UserCreateWithoutMembershipsInput> = z.object({
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

export const UserUncheckedCreateWithoutMembershipsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutMembershipsInput> = z.object({
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

export const UserCreateOrConnectWithoutMembershipsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutMembershipsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutMembershipsInputSchema),z.lazy(() => UserUncheckedCreateWithoutMembershipsInputSchema) ]),
}).strict();

export const OrganisationUpsertWithoutMembershipInputSchema: z.ZodType<Prisma.OrganisationUpsertWithoutMembershipInput> = z.object({
  update: z.union([ z.lazy(() => OrganisationUpdateWithoutMembershipInputSchema),z.lazy(() => OrganisationUncheckedUpdateWithoutMembershipInputSchema) ]),
  create: z.union([ z.lazy(() => OrganisationCreateWithoutMembershipInputSchema),z.lazy(() => OrganisationUncheckedCreateWithoutMembershipInputSchema) ]),
}).strict();

export const OrganisationUpdateWithoutMembershipInputSchema: z.ZodType<Prisma.OrganisationUpdateWithoutMembershipInput> = z.object({
  publicId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  channels: z.lazy(() => ChannelUpdateManyWithoutOrganisationNestedInputSchema).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationUpdateManyWithoutOrganisationNestedInputSchema).optional()
}).strict();

export const OrganisationUncheckedUpdateWithoutMembershipInputSchema: z.ZodType<Prisma.OrganisationUncheckedUpdateWithoutMembershipInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  publicId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  channels: z.lazy(() => ChannelUncheckedUpdateManyWithoutOrganisationNestedInputSchema).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationUncheckedUpdateManyWithoutOrganisationNestedInputSchema).optional()
}).strict();

export const UserUpsertWithoutMembershipsInputSchema: z.ZodType<Prisma.UserUpsertWithoutMembershipsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutMembershipsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutMembershipsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutMembershipsInputSchema),z.lazy(() => UserUncheckedCreateWithoutMembershipsInputSchema) ]),
}).strict();

export const UserUpdateWithoutMembershipsInputSchema: z.ZodType<Prisma.UserUpdateWithoutMembershipsInput> = z.object({
  publicId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => GlobalRoleSchema),z.lazy(() => EnumGlobalRoleFieldUpdateOperationsInputSchema) ]).optional(),
  userProfile: z.lazy(() => UserProfileUpdateOneWithoutUserNestedInputSchema).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationUpdateManyWithoutCreatedByNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutMembershipsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutMembershipsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  publicId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => GlobalRoleSchema),z.lazy(() => EnumGlobalRoleFieldUpdateOperationsInputSchema) ]).optional(),
  userProfileId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationUncheckedUpdateManyWithoutCreatedByNestedInputSchema).optional()
}).strict();

export const UserProfileCreateWithoutUserInputSchema: z.ZodType<Prisma.UserProfileCreateWithoutUserInput> = z.object({
  publicId: z.string().cuid().optional(),
  profilePictureUrl: z.string().optional().nullable(),
  profileColor: z.string().optional(),
  username: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const UserProfileUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.UserProfileUncheckedCreateWithoutUserInput> = z.object({
  id: z.number().int().optional(),
  publicId: z.string().cuid().optional(),
  profilePictureUrl: z.string().optional().nullable(),
  profileColor: z.string().optional(),
  username: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const UserProfileCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.UserProfileCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => UserProfileWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserProfileCreateWithoutUserInputSchema),z.lazy(() => UserProfileUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const MembershipCreateWithoutUserInputSchema: z.ZodType<Prisma.MembershipCreateWithoutUserInput> = z.object({
  role: z.lazy(() => MembershipRoleSchema),
  invitedName: z.string().optional().nullable(),
  invitedEmail: z.string().optional().nullable(),
  organization: z.lazy(() => OrganisationCreateNestedOneWithoutMembershipInputSchema)
}).strict();

export const MembershipUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.MembershipUncheckedCreateWithoutUserInput> = z.object({
  id: z.number().int().optional(),
  role: z.lazy(() => MembershipRoleSchema),
  organizationId: z.number().int(),
  invitedName: z.string().optional().nullable(),
  invitedEmail: z.string().optional().nullable()
}).strict();

export const MembershipCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.MembershipCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => MembershipWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MembershipCreateWithoutUserInputSchema),z.lazy(() => MembershipUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const MembershipCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.MembershipCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => MembershipCreateManyUserInputSchema),z.lazy(() => MembershipCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const OrganisationInvitationCreateWithoutCreatedByInputSchema: z.ZodType<Prisma.OrganisationInvitationCreateWithoutCreatedByInput> = z.object({
  publicId: z.string().cuid().optional(),
  issuedEmail: z.string(),
  createdAt: z.coerce.date().optional(),
  expiresAt: z.coerce.date(),
  organisation: z.lazy(() => OrganisationCreateNestedOneWithoutOrganisationInvitationInputSchema)
}).strict();

export const OrganisationInvitationUncheckedCreateWithoutCreatedByInputSchema: z.ZodType<Prisma.OrganisationInvitationUncheckedCreateWithoutCreatedByInput> = z.object({
  id: z.number().int().optional(),
  publicId: z.string().cuid().optional(),
  issuedEmail: z.string(),
  createdAt: z.coerce.date().optional(),
  expiresAt: z.coerce.date(),
  organizationId: z.number().int()
}).strict();

export const OrganisationInvitationCreateOrConnectWithoutCreatedByInputSchema: z.ZodType<Prisma.OrganisationInvitationCreateOrConnectWithoutCreatedByInput> = z.object({
  where: z.lazy(() => OrganisationInvitationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrganisationInvitationCreateWithoutCreatedByInputSchema),z.lazy(() => OrganisationInvitationUncheckedCreateWithoutCreatedByInputSchema) ]),
}).strict();

export const OrganisationInvitationCreateManyCreatedByInputEnvelopeSchema: z.ZodType<Prisma.OrganisationInvitationCreateManyCreatedByInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => OrganisationInvitationCreateManyCreatedByInputSchema),z.lazy(() => OrganisationInvitationCreateManyCreatedByInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const UserProfileUpsertWithoutUserInputSchema: z.ZodType<Prisma.UserProfileUpsertWithoutUserInput> = z.object({
  update: z.union([ z.lazy(() => UserProfileUpdateWithoutUserInputSchema),z.lazy(() => UserProfileUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => UserProfileCreateWithoutUserInputSchema),z.lazy(() => UserProfileUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const UserProfileUpdateWithoutUserInputSchema: z.ZodType<Prisma.UserProfileUpdateWithoutUserInput> = z.object({
  publicId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  profilePictureUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  profileColor: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserProfileUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.UserProfileUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  publicId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  profilePictureUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  profileColor: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MembershipUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.MembershipUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => MembershipWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MembershipUpdateWithoutUserInputSchema),z.lazy(() => MembershipUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => MembershipCreateWithoutUserInputSchema),z.lazy(() => MembershipUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const MembershipUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.MembershipUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => MembershipWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MembershipUpdateWithoutUserInputSchema),z.lazy(() => MembershipUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const MembershipUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.MembershipUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => MembershipScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MembershipUpdateManyMutationInputSchema),z.lazy(() => MembershipUncheckedUpdateManyWithoutMembershipsInputSchema) ]),
}).strict();

export const OrganisationInvitationUpsertWithWhereUniqueWithoutCreatedByInputSchema: z.ZodType<Prisma.OrganisationInvitationUpsertWithWhereUniqueWithoutCreatedByInput> = z.object({
  where: z.lazy(() => OrganisationInvitationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => OrganisationInvitationUpdateWithoutCreatedByInputSchema),z.lazy(() => OrganisationInvitationUncheckedUpdateWithoutCreatedByInputSchema) ]),
  create: z.union([ z.lazy(() => OrganisationInvitationCreateWithoutCreatedByInputSchema),z.lazy(() => OrganisationInvitationUncheckedCreateWithoutCreatedByInputSchema) ]),
}).strict();

export const OrganisationInvitationUpdateWithWhereUniqueWithoutCreatedByInputSchema: z.ZodType<Prisma.OrganisationInvitationUpdateWithWhereUniqueWithoutCreatedByInput> = z.object({
  where: z.lazy(() => OrganisationInvitationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => OrganisationInvitationUpdateWithoutCreatedByInputSchema),z.lazy(() => OrganisationInvitationUncheckedUpdateWithoutCreatedByInputSchema) ]),
}).strict();

export const OrganisationInvitationUpdateManyWithWhereWithoutCreatedByInputSchema: z.ZodType<Prisma.OrganisationInvitationUpdateManyWithWhereWithoutCreatedByInput> = z.object({
  where: z.lazy(() => OrganisationInvitationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => OrganisationInvitationUpdateManyMutationInputSchema),z.lazy(() => OrganisationInvitationUncheckedUpdateManyWithoutOrganisationInvitationInputSchema) ]),
}).strict();

export const UserCreateWithoutUserProfileInputSchema: z.ZodType<Prisma.UserCreateWithoutUserProfileInput> = z.object({
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

export const UserUncheckedCreateWithoutUserProfileInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutUserProfileInput> = z.object({
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

export const UserCreateOrConnectWithoutUserProfileInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutUserProfileInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutUserProfileInputSchema),z.lazy(() => UserUncheckedCreateWithoutUserProfileInputSchema) ]),
}).strict();

export const UserCreateManyUserProfileInputEnvelopeSchema: z.ZodType<Prisma.UserCreateManyUserProfileInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => UserCreateManyUserProfileInputSchema),z.lazy(() => UserCreateManyUserProfileInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const UserUpsertWithWhereUniqueWithoutUserProfileInputSchema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutUserProfileInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => UserUpdateWithoutUserProfileInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUserProfileInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutUserProfileInputSchema),z.lazy(() => UserUncheckedCreateWithoutUserProfileInputSchema) ]),
}).strict();

export const UserUpdateWithWhereUniqueWithoutUserProfileInputSchema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutUserProfileInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => UserUpdateWithoutUserProfileInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUserProfileInputSchema) ]),
}).strict();

export const UserUpdateManyWithWhereWithoutUserProfileInputSchema: z.ZodType<Prisma.UserUpdateManyWithWhereWithoutUserProfileInput> = z.object({
  where: z.lazy(() => UserScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UserUpdateManyMutationInputSchema),z.lazy(() => UserUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const UserScalarWhereInputSchema: z.ZodType<Prisma.UserScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereInputSchema),z.lazy(() => UserScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereInputSchema),z.lazy(() => UserScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  publicId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => EnumGlobalRoleFilterSchema),z.lazy(() => GlobalRoleSchema) ]).optional(),
  userProfileId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const OrganisationCreateWithoutChannelsInputSchema: z.ZodType<Prisma.OrganisationCreateWithoutChannelsInput> = z.object({
  publicId: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  membership: z.lazy(() => MembershipCreateNestedManyWithoutOrganizationInputSchema).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationCreateNestedManyWithoutOrganisationInputSchema).optional()
}).strict();

export const OrganisationUncheckedCreateWithoutChannelsInputSchema: z.ZodType<Prisma.OrganisationUncheckedCreateWithoutChannelsInput> = z.object({
  id: z.number().int().optional(),
  publicId: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  membership: z.lazy(() => MembershipUncheckedCreateNestedManyWithoutOrganizationInputSchema).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationUncheckedCreateNestedManyWithoutOrganisationInputSchema).optional()
}).strict();

export const OrganisationCreateOrConnectWithoutChannelsInputSchema: z.ZodType<Prisma.OrganisationCreateOrConnectWithoutChannelsInput> = z.object({
  where: z.lazy(() => OrganisationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrganisationCreateWithoutChannelsInputSchema),z.lazy(() => OrganisationUncheckedCreateWithoutChannelsInputSchema) ]),
}).strict();

export const OrganisationUpsertWithoutChannelsInputSchema: z.ZodType<Prisma.OrganisationUpsertWithoutChannelsInput> = z.object({
  update: z.union([ z.lazy(() => OrganisationUpdateWithoutChannelsInputSchema),z.lazy(() => OrganisationUncheckedUpdateWithoutChannelsInputSchema) ]),
  create: z.union([ z.lazy(() => OrganisationCreateWithoutChannelsInputSchema),z.lazy(() => OrganisationUncheckedCreateWithoutChannelsInputSchema) ]),
}).strict();

export const OrganisationUpdateWithoutChannelsInputSchema: z.ZodType<Prisma.OrganisationUpdateWithoutChannelsInput> = z.object({
  publicId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  membership: z.lazy(() => MembershipUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationUpdateManyWithoutOrganisationNestedInputSchema).optional()
}).strict();

export const OrganisationUncheckedUpdateWithoutChannelsInputSchema: z.ZodType<Prisma.OrganisationUncheckedUpdateWithoutChannelsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  publicId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  membership: z.lazy(() => MembershipUncheckedUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationUncheckedUpdateManyWithoutOrganisationNestedInputSchema).optional()
}).strict();

export const MessageCreateWithoutMediaInputSchema: z.ZodType<Prisma.MessageCreateWithoutMediaInput> = z.object({
  id: z.string().cuid().optional(),
  text: z.string(),
  senderId: z.string(),
  receiverId: z.string().optional().nullable(),
  channelId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const MessageUncheckedCreateWithoutMediaInputSchema: z.ZodType<Prisma.MessageUncheckedCreateWithoutMediaInput> = z.object({
  id: z.string().cuid().optional(),
  text: z.string(),
  senderId: z.string(),
  receiverId: z.string().optional().nullable(),
  channelId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const MessageCreateOrConnectWithoutMediaInputSchema: z.ZodType<Prisma.MessageCreateOrConnectWithoutMediaInput> = z.object({
  where: z.lazy(() => MessageWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MessageCreateWithoutMediaInputSchema),z.lazy(() => MessageUncheckedCreateWithoutMediaInputSchema) ]),
}).strict();

export const MessageUpsertWithoutMediaInputSchema: z.ZodType<Prisma.MessageUpsertWithoutMediaInput> = z.object({
  update: z.union([ z.lazy(() => MessageUpdateWithoutMediaInputSchema),z.lazy(() => MessageUncheckedUpdateWithoutMediaInputSchema) ]),
  create: z.union([ z.lazy(() => MessageCreateWithoutMediaInputSchema),z.lazy(() => MessageUncheckedCreateWithoutMediaInputSchema) ]),
}).strict();

export const MessageUpdateWithoutMediaInputSchema: z.ZodType<Prisma.MessageUpdateWithoutMediaInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  senderId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  receiverId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  channelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MessageUncheckedUpdateWithoutMediaInputSchema: z.ZodType<Prisma.MessageUncheckedUpdateWithoutMediaInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  senderId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  receiverId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  channelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MediaCreateWithoutMessageInputSchema: z.ZodType<Prisma.MediaCreateWithoutMessageInput> = z.object({
  id: z.string().cuid().optional(),
  kind: z.string(),
  filename: z.string(),
  size: z.number().int(),
  width: z.number().int().optional(),
  height: z.number().int().optional(),
  path: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();

export const MediaUncheckedCreateWithoutMessageInputSchema: z.ZodType<Prisma.MediaUncheckedCreateWithoutMessageInput> = z.object({
  id: z.string().cuid().optional(),
  kind: z.string(),
  filename: z.string(),
  size: z.number().int(),
  width: z.number().int().optional(),
  height: z.number().int().optional(),
  path: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();

export const MediaCreateOrConnectWithoutMessageInputSchema: z.ZodType<Prisma.MediaCreateOrConnectWithoutMessageInput> = z.object({
  where: z.lazy(() => MediaWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MediaCreateWithoutMessageInputSchema),z.lazy(() => MediaUncheckedCreateWithoutMessageInputSchema) ]),
}).strict();

export const MediaCreateManyMessageInputEnvelopeSchema: z.ZodType<Prisma.MediaCreateManyMessageInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => MediaCreateManyMessageInputSchema),z.lazy(() => MediaCreateManyMessageInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const MediaUpsertWithWhereUniqueWithoutMessageInputSchema: z.ZodType<Prisma.MediaUpsertWithWhereUniqueWithoutMessageInput> = z.object({
  where: z.lazy(() => MediaWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MediaUpdateWithoutMessageInputSchema),z.lazy(() => MediaUncheckedUpdateWithoutMessageInputSchema) ]),
  create: z.union([ z.lazy(() => MediaCreateWithoutMessageInputSchema),z.lazy(() => MediaUncheckedCreateWithoutMessageInputSchema) ]),
}).strict();

export const MediaUpdateWithWhereUniqueWithoutMessageInputSchema: z.ZodType<Prisma.MediaUpdateWithWhereUniqueWithoutMessageInput> = z.object({
  where: z.lazy(() => MediaWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MediaUpdateWithoutMessageInputSchema),z.lazy(() => MediaUncheckedUpdateWithoutMessageInputSchema) ]),
}).strict();

export const MediaUpdateManyWithWhereWithoutMessageInputSchema: z.ZodType<Prisma.MediaUpdateManyWithWhereWithoutMessageInput> = z.object({
  where: z.lazy(() => MediaScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MediaUpdateManyMutationInputSchema),z.lazy(() => MediaUncheckedUpdateManyWithoutMediaInputSchema) ]),
}).strict();

export const MediaScalarWhereInputSchema: z.ZodType<Prisma.MediaScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MediaScalarWhereInputSchema),z.lazy(() => MediaScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MediaScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MediaScalarWhereInputSchema),z.lazy(() => MediaScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  kind: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  filename: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  size: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  width: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  height: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  path: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  messageId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const MembershipCreateManyOrganizationInputSchema: z.ZodType<Prisma.MembershipCreateManyOrganizationInput> = z.object({
  id: z.number().int().optional(),
  role: z.lazy(() => MembershipRoleSchema),
  userId: z.number().int().optional().nullable(),
  invitedName: z.string().optional().nullable(),
  invitedEmail: z.string().optional().nullable()
}).strict();

export const ChannelCreateManyOrganisationInputSchema: z.ZodType<Prisma.ChannelCreateManyOrganisationInput> = z.object({
  id: z.string().cuid().optional(),
  kind: z.lazy(() => ChannelKindSchema).optional(),
  createdBy: z.string(),
  name: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const OrganisationInvitationCreateManyOrganisationInputSchema: z.ZodType<Prisma.OrganisationInvitationCreateManyOrganisationInput> = z.object({
  id: z.number().int().optional(),
  publicId: z.string().cuid().optional(),
  issuedEmail: z.string(),
  createdAt: z.coerce.date().optional(),
  expiresAt: z.coerce.date(),
  creatorId: z.number().int()
}).strict();

export const MembershipUpdateWithoutOrganizationInputSchema: z.ZodType<Prisma.MembershipUpdateWithoutOrganizationInput> = z.object({
  role: z.union([ z.lazy(() => MembershipRoleSchema),z.lazy(() => EnumMembershipRoleFieldUpdateOperationsInputSchema) ]).optional(),
  invitedName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  invitedEmail: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user: z.lazy(() => UserUpdateOneWithoutMembershipsNestedInputSchema).optional()
}).strict();

export const MembershipUncheckedUpdateWithoutOrganizationInputSchema: z.ZodType<Prisma.MembershipUncheckedUpdateWithoutOrganizationInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => MembershipRoleSchema),z.lazy(() => EnumMembershipRoleFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  invitedName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  invitedEmail: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const MembershipUncheckedUpdateManyWithoutMembershipInputSchema: z.ZodType<Prisma.MembershipUncheckedUpdateManyWithoutMembershipInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => MembershipRoleSchema),z.lazy(() => EnumMembershipRoleFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  invitedName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  invitedEmail: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ChannelUpdateWithoutOrganisationInputSchema: z.ZodType<Prisma.ChannelUpdateWithoutOrganisationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  kind: z.union([ z.lazy(() => ChannelKindSchema),z.lazy(() => EnumChannelKindFieldUpdateOperationsInputSchema) ]).optional(),
  createdBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ChannelUncheckedUpdateWithoutOrganisationInputSchema: z.ZodType<Prisma.ChannelUncheckedUpdateWithoutOrganisationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  kind: z.union([ z.lazy(() => ChannelKindSchema),z.lazy(() => EnumChannelKindFieldUpdateOperationsInputSchema) ]).optional(),
  createdBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ChannelUncheckedUpdateManyWithoutChannelsInputSchema: z.ZodType<Prisma.ChannelUncheckedUpdateManyWithoutChannelsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  kind: z.union([ z.lazy(() => ChannelKindSchema),z.lazy(() => EnumChannelKindFieldUpdateOperationsInputSchema) ]).optional(),
  createdBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrganisationInvitationUpdateWithoutOrganisationInputSchema: z.ZodType<Prisma.OrganisationInvitationUpdateWithoutOrganisationInput> = z.object({
  publicId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  issuedEmail: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdBy: z.lazy(() => UserUpdateOneRequiredWithoutOrganisationInvitationNestedInputSchema).optional()
}).strict();

export const OrganisationInvitationUncheckedUpdateWithoutOrganisationInputSchema: z.ZodType<Prisma.OrganisationInvitationUncheckedUpdateWithoutOrganisationInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  publicId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  issuedEmail: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  creatorId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrganisationInvitationUncheckedUpdateManyWithoutOrganisationInvitationInputSchema: z.ZodType<Prisma.OrganisationInvitationUncheckedUpdateManyWithoutOrganisationInvitationInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  publicId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  issuedEmail: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  creatorId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MembershipCreateManyUserInputSchema: z.ZodType<Prisma.MembershipCreateManyUserInput> = z.object({
  id: z.number().int().optional(),
  role: z.lazy(() => MembershipRoleSchema),
  organizationId: z.number().int(),
  invitedName: z.string().optional().nullable(),
  invitedEmail: z.string().optional().nullable()
}).strict();

export const OrganisationInvitationCreateManyCreatedByInputSchema: z.ZodType<Prisma.OrganisationInvitationCreateManyCreatedByInput> = z.object({
  id: z.number().int().optional(),
  publicId: z.string().cuid().optional(),
  issuedEmail: z.string(),
  createdAt: z.coerce.date().optional(),
  expiresAt: z.coerce.date(),
  organizationId: z.number().int()
}).strict();

export const MembershipUpdateWithoutUserInputSchema: z.ZodType<Prisma.MembershipUpdateWithoutUserInput> = z.object({
  role: z.union([ z.lazy(() => MembershipRoleSchema),z.lazy(() => EnumMembershipRoleFieldUpdateOperationsInputSchema) ]).optional(),
  invitedName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  invitedEmail: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  organization: z.lazy(() => OrganisationUpdateOneRequiredWithoutMembershipNestedInputSchema).optional()
}).strict();

export const MembershipUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.MembershipUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => MembershipRoleSchema),z.lazy(() => EnumMembershipRoleFieldUpdateOperationsInputSchema) ]).optional(),
  organizationId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  invitedName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  invitedEmail: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const MembershipUncheckedUpdateManyWithoutMembershipsInputSchema: z.ZodType<Prisma.MembershipUncheckedUpdateManyWithoutMembershipsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => MembershipRoleSchema),z.lazy(() => EnumMembershipRoleFieldUpdateOperationsInputSchema) ]).optional(),
  organizationId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  invitedName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  invitedEmail: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const OrganisationInvitationUpdateWithoutCreatedByInputSchema: z.ZodType<Prisma.OrganisationInvitationUpdateWithoutCreatedByInput> = z.object({
  publicId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  issuedEmail: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  organisation: z.lazy(() => OrganisationUpdateOneRequiredWithoutOrganisationInvitationNestedInputSchema).optional()
}).strict();

export const OrganisationInvitationUncheckedUpdateWithoutCreatedByInputSchema: z.ZodType<Prisma.OrganisationInvitationUncheckedUpdateWithoutCreatedByInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  publicId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  issuedEmail: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  organizationId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserCreateManyUserProfileInputSchema: z.ZodType<Prisma.UserCreateManyUserProfileInput> = z.object({
  id: z.number().int().optional(),
  publicId: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
  role: z.lazy(() => GlobalRoleSchema)
}).strict();

export const UserUpdateWithoutUserProfileInputSchema: z.ZodType<Prisma.UserUpdateWithoutUserProfileInput> = z.object({
  publicId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => GlobalRoleSchema),z.lazy(() => EnumGlobalRoleFieldUpdateOperationsInputSchema) ]).optional(),
  memberships: z.lazy(() => MembershipUpdateManyWithoutUserNestedInputSchema).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationUpdateManyWithoutCreatedByNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutUserProfileInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutUserProfileInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  publicId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => GlobalRoleSchema),z.lazy(() => EnumGlobalRoleFieldUpdateOperationsInputSchema) ]).optional(),
  memberships: z.lazy(() => MembershipUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  OrganisationInvitation: z.lazy(() => OrganisationInvitationUncheckedUpdateManyWithoutCreatedByNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  publicId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => GlobalRoleSchema),z.lazy(() => EnumGlobalRoleFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MediaCreateManyMessageInputSchema: z.ZodType<Prisma.MediaCreateManyMessageInput> = z.object({
  id: z.string().cuid().optional(),
  kind: z.string(),
  filename: z.string(),
  size: z.number().int(),
  width: z.number().int().optional(),
  height: z.number().int().optional(),
  path: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();

export const MediaUpdateWithoutMessageInputSchema: z.ZodType<Prisma.MediaUpdateWithoutMessageInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  kind: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  filename: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  width: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  height: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  path: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MediaUncheckedUpdateWithoutMessageInputSchema: z.ZodType<Prisma.MediaUncheckedUpdateWithoutMessageInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  kind: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  filename: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  width: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  height: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  path: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MediaUncheckedUpdateManyWithoutMediaInputSchema: z.ZodType<Prisma.MediaUncheckedUpdateManyWithoutMediaInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  kind: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  filename: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  width: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  height: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  path: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const OrganisationFindFirstArgsSchema: z.ZodType<Prisma.OrganisationFindFirstArgs> = z.object({
  select: OrganisationSelectSchema.optional(),
  include: OrganisationIncludeSchema.optional(),
  where: OrganisationWhereInputSchema.optional(),
  orderBy: z.union([ OrganisationOrderByWithRelationInputSchema.array(),OrganisationOrderByWithRelationInputSchema ]).optional(),
  cursor: OrganisationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: OrganisationScalarFieldEnumSchema.array().optional(),
}).strict()

export const OrganisationFindFirstOrThrowArgsSchema: z.ZodType<Prisma.OrganisationFindFirstOrThrowArgs> = z.object({
  select: OrganisationSelectSchema.optional(),
  include: OrganisationIncludeSchema.optional(),
  where: OrganisationWhereInputSchema.optional(),
  orderBy: z.union([ OrganisationOrderByWithRelationInputSchema.array(),OrganisationOrderByWithRelationInputSchema ]).optional(),
  cursor: OrganisationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: OrganisationScalarFieldEnumSchema.array().optional(),
}).strict()

export const OrganisationFindManyArgsSchema: z.ZodType<Prisma.OrganisationFindManyArgs> = z.object({
  select: OrganisationSelectSchema.optional(),
  include: OrganisationIncludeSchema.optional(),
  where: OrganisationWhereInputSchema.optional(),
  orderBy: z.union([ OrganisationOrderByWithRelationInputSchema.array(),OrganisationOrderByWithRelationInputSchema ]).optional(),
  cursor: OrganisationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: OrganisationScalarFieldEnumSchema.array().optional(),
}).strict()

export const OrganisationAggregateArgsSchema: z.ZodType<Prisma.OrganisationAggregateArgs> = z.object({
  where: OrganisationWhereInputSchema.optional(),
  orderBy: z.union([ OrganisationOrderByWithRelationInputSchema.array(),OrganisationOrderByWithRelationInputSchema ]).optional(),
  cursor: OrganisationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const OrganisationGroupByArgsSchema: z.ZodType<Prisma.OrganisationGroupByArgs> = z.object({
  where: OrganisationWhereInputSchema.optional(),
  orderBy: z.union([ OrganisationOrderByWithAggregationInputSchema.array(),OrganisationOrderByWithAggregationInputSchema ]).optional(),
  by: OrganisationScalarFieldEnumSchema.array(),
  having: OrganisationScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const OrganisationFindUniqueArgsSchema: z.ZodType<Prisma.OrganisationFindUniqueArgs> = z.object({
  select: OrganisationSelectSchema.optional(),
  include: OrganisationIncludeSchema.optional(),
  where: OrganisationWhereUniqueInputSchema,
}).strict()

export const OrganisationFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.OrganisationFindUniqueOrThrowArgs> = z.object({
  select: OrganisationSelectSchema.optional(),
  include: OrganisationIncludeSchema.optional(),
  where: OrganisationWhereUniqueInputSchema,
}).strict()

export const OrganisationInvitationFindFirstArgsSchema: z.ZodType<Prisma.OrganisationInvitationFindFirstArgs> = z.object({
  select: OrganisationInvitationSelectSchema.optional(),
  include: OrganisationInvitationIncludeSchema.optional(),
  where: OrganisationInvitationWhereInputSchema.optional(),
  orderBy: z.union([ OrganisationInvitationOrderByWithRelationInputSchema.array(),OrganisationInvitationOrderByWithRelationInputSchema ]).optional(),
  cursor: OrganisationInvitationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: OrganisationInvitationScalarFieldEnumSchema.array().optional(),
}).strict()

export const OrganisationInvitationFindFirstOrThrowArgsSchema: z.ZodType<Prisma.OrganisationInvitationFindFirstOrThrowArgs> = z.object({
  select: OrganisationInvitationSelectSchema.optional(),
  include: OrganisationInvitationIncludeSchema.optional(),
  where: OrganisationInvitationWhereInputSchema.optional(),
  orderBy: z.union([ OrganisationInvitationOrderByWithRelationInputSchema.array(),OrganisationInvitationOrderByWithRelationInputSchema ]).optional(),
  cursor: OrganisationInvitationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: OrganisationInvitationScalarFieldEnumSchema.array().optional(),
}).strict()

export const OrganisationInvitationFindManyArgsSchema: z.ZodType<Prisma.OrganisationInvitationFindManyArgs> = z.object({
  select: OrganisationInvitationSelectSchema.optional(),
  include: OrganisationInvitationIncludeSchema.optional(),
  where: OrganisationInvitationWhereInputSchema.optional(),
  orderBy: z.union([ OrganisationInvitationOrderByWithRelationInputSchema.array(),OrganisationInvitationOrderByWithRelationInputSchema ]).optional(),
  cursor: OrganisationInvitationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: OrganisationInvitationScalarFieldEnumSchema.array().optional(),
}).strict()

export const OrganisationInvitationAggregateArgsSchema: z.ZodType<Prisma.OrganisationInvitationAggregateArgs> = z.object({
  where: OrganisationInvitationWhereInputSchema.optional(),
  orderBy: z.union([ OrganisationInvitationOrderByWithRelationInputSchema.array(),OrganisationInvitationOrderByWithRelationInputSchema ]).optional(),
  cursor: OrganisationInvitationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const OrganisationInvitationGroupByArgsSchema: z.ZodType<Prisma.OrganisationInvitationGroupByArgs> = z.object({
  where: OrganisationInvitationWhereInputSchema.optional(),
  orderBy: z.union([ OrganisationInvitationOrderByWithAggregationInputSchema.array(),OrganisationInvitationOrderByWithAggregationInputSchema ]).optional(),
  by: OrganisationInvitationScalarFieldEnumSchema.array(),
  having: OrganisationInvitationScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const OrganisationInvitationFindUniqueArgsSchema: z.ZodType<Prisma.OrganisationInvitationFindUniqueArgs> = z.object({
  select: OrganisationInvitationSelectSchema.optional(),
  include: OrganisationInvitationIncludeSchema.optional(),
  where: OrganisationInvitationWhereUniqueInputSchema,
}).strict()

export const OrganisationInvitationFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.OrganisationInvitationFindUniqueOrThrowArgs> = z.object({
  select: OrganisationInvitationSelectSchema.optional(),
  include: OrganisationInvitationIncludeSchema.optional(),
  where: OrganisationInvitationWhereUniqueInputSchema,
}).strict()

export const MembershipFindFirstArgsSchema: z.ZodType<Prisma.MembershipFindFirstArgs> = z.object({
  select: MembershipSelectSchema.optional(),
  include: MembershipIncludeSchema.optional(),
  where: MembershipWhereInputSchema.optional(),
  orderBy: z.union([ MembershipOrderByWithRelationInputSchema.array(),MembershipOrderByWithRelationInputSchema ]).optional(),
  cursor: MembershipWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: MembershipScalarFieldEnumSchema.array().optional(),
}).strict()

export const MembershipFindFirstOrThrowArgsSchema: z.ZodType<Prisma.MembershipFindFirstOrThrowArgs> = z.object({
  select: MembershipSelectSchema.optional(),
  include: MembershipIncludeSchema.optional(),
  where: MembershipWhereInputSchema.optional(),
  orderBy: z.union([ MembershipOrderByWithRelationInputSchema.array(),MembershipOrderByWithRelationInputSchema ]).optional(),
  cursor: MembershipWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: MembershipScalarFieldEnumSchema.array().optional(),
}).strict()

export const MembershipFindManyArgsSchema: z.ZodType<Prisma.MembershipFindManyArgs> = z.object({
  select: MembershipSelectSchema.optional(),
  include: MembershipIncludeSchema.optional(),
  where: MembershipWhereInputSchema.optional(),
  orderBy: z.union([ MembershipOrderByWithRelationInputSchema.array(),MembershipOrderByWithRelationInputSchema ]).optional(),
  cursor: MembershipWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: MembershipScalarFieldEnumSchema.array().optional(),
}).strict()

export const MembershipAggregateArgsSchema: z.ZodType<Prisma.MembershipAggregateArgs> = z.object({
  where: MembershipWhereInputSchema.optional(),
  orderBy: z.union([ MembershipOrderByWithRelationInputSchema.array(),MembershipOrderByWithRelationInputSchema ]).optional(),
  cursor: MembershipWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const MembershipGroupByArgsSchema: z.ZodType<Prisma.MembershipGroupByArgs> = z.object({
  where: MembershipWhereInputSchema.optional(),
  orderBy: z.union([ MembershipOrderByWithAggregationInputSchema.array(),MembershipOrderByWithAggregationInputSchema ]).optional(),
  by: MembershipScalarFieldEnumSchema.array(),
  having: MembershipScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const MembershipFindUniqueArgsSchema: z.ZodType<Prisma.MembershipFindUniqueArgs> = z.object({
  select: MembershipSelectSchema.optional(),
  include: MembershipIncludeSchema.optional(),
  where: MembershipWhereUniqueInputSchema,
}).strict()

export const MembershipFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.MembershipFindUniqueOrThrowArgs> = z.object({
  select: MembershipSelectSchema.optional(),
  include: MembershipIncludeSchema.optional(),
  where: MembershipWhereUniqueInputSchema,
}).strict()

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserScalarFieldEnumSchema.array().optional(),
}).strict()

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserScalarFieldEnumSchema.array().optional(),
}).strict()

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserScalarFieldEnumSchema.array().optional(),
}).strict()

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithAggregationInputSchema.array(),UserOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict()

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict()

export const UserProfileFindFirstArgsSchema: z.ZodType<Prisma.UserProfileFindFirstArgs> = z.object({
  select: UserProfileSelectSchema.optional(),
  include: UserProfileIncludeSchema.optional(),
  where: UserProfileWhereInputSchema.optional(),
  orderBy: z.union([ UserProfileOrderByWithRelationInputSchema.array(),UserProfileOrderByWithRelationInputSchema ]).optional(),
  cursor: UserProfileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserProfileScalarFieldEnumSchema.array().optional(),
}).strict()

export const UserProfileFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserProfileFindFirstOrThrowArgs> = z.object({
  select: UserProfileSelectSchema.optional(),
  include: UserProfileIncludeSchema.optional(),
  where: UserProfileWhereInputSchema.optional(),
  orderBy: z.union([ UserProfileOrderByWithRelationInputSchema.array(),UserProfileOrderByWithRelationInputSchema ]).optional(),
  cursor: UserProfileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserProfileScalarFieldEnumSchema.array().optional(),
}).strict()

export const UserProfileFindManyArgsSchema: z.ZodType<Prisma.UserProfileFindManyArgs> = z.object({
  select: UserProfileSelectSchema.optional(),
  include: UserProfileIncludeSchema.optional(),
  where: UserProfileWhereInputSchema.optional(),
  orderBy: z.union([ UserProfileOrderByWithRelationInputSchema.array(),UserProfileOrderByWithRelationInputSchema ]).optional(),
  cursor: UserProfileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserProfileScalarFieldEnumSchema.array().optional(),
}).strict()

export const UserProfileAggregateArgsSchema: z.ZodType<Prisma.UserProfileAggregateArgs> = z.object({
  where: UserProfileWhereInputSchema.optional(),
  orderBy: z.union([ UserProfileOrderByWithRelationInputSchema.array(),UserProfileOrderByWithRelationInputSchema ]).optional(),
  cursor: UserProfileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const UserProfileGroupByArgsSchema: z.ZodType<Prisma.UserProfileGroupByArgs> = z.object({
  where: UserProfileWhereInputSchema.optional(),
  orderBy: z.union([ UserProfileOrderByWithAggregationInputSchema.array(),UserProfileOrderByWithAggregationInputSchema ]).optional(),
  by: UserProfileScalarFieldEnumSchema.array(),
  having: UserProfileScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const UserProfileFindUniqueArgsSchema: z.ZodType<Prisma.UserProfileFindUniqueArgs> = z.object({
  select: UserProfileSelectSchema.optional(),
  include: UserProfileIncludeSchema.optional(),
  where: UserProfileWhereUniqueInputSchema,
}).strict()

export const UserProfileFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserProfileFindUniqueOrThrowArgs> = z.object({
  select: UserProfileSelectSchema.optional(),
  include: UserProfileIncludeSchema.optional(),
  where: UserProfileWhereUniqueInputSchema,
}).strict()

export const ChannelFindFirstArgsSchema: z.ZodType<Prisma.ChannelFindFirstArgs> = z.object({
  select: ChannelSelectSchema.optional(),
  include: ChannelIncludeSchema.optional(),
  where: ChannelWhereInputSchema.optional(),
  orderBy: z.union([ ChannelOrderByWithRelationInputSchema.array(),ChannelOrderByWithRelationInputSchema ]).optional(),
  cursor: ChannelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ChannelScalarFieldEnumSchema.array().optional(),
}).strict()

export const ChannelFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ChannelFindFirstOrThrowArgs> = z.object({
  select: ChannelSelectSchema.optional(),
  include: ChannelIncludeSchema.optional(),
  where: ChannelWhereInputSchema.optional(),
  orderBy: z.union([ ChannelOrderByWithRelationInputSchema.array(),ChannelOrderByWithRelationInputSchema ]).optional(),
  cursor: ChannelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ChannelScalarFieldEnumSchema.array().optional(),
}).strict()

export const ChannelFindManyArgsSchema: z.ZodType<Prisma.ChannelFindManyArgs> = z.object({
  select: ChannelSelectSchema.optional(),
  include: ChannelIncludeSchema.optional(),
  where: ChannelWhereInputSchema.optional(),
  orderBy: z.union([ ChannelOrderByWithRelationInputSchema.array(),ChannelOrderByWithRelationInputSchema ]).optional(),
  cursor: ChannelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ChannelScalarFieldEnumSchema.array().optional(),
}).strict()

export const ChannelAggregateArgsSchema: z.ZodType<Prisma.ChannelAggregateArgs> = z.object({
  where: ChannelWhereInputSchema.optional(),
  orderBy: z.union([ ChannelOrderByWithRelationInputSchema.array(),ChannelOrderByWithRelationInputSchema ]).optional(),
  cursor: ChannelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const ChannelGroupByArgsSchema: z.ZodType<Prisma.ChannelGroupByArgs> = z.object({
  where: ChannelWhereInputSchema.optional(),
  orderBy: z.union([ ChannelOrderByWithAggregationInputSchema.array(),ChannelOrderByWithAggregationInputSchema ]).optional(),
  by: ChannelScalarFieldEnumSchema.array(),
  having: ChannelScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const ChannelFindUniqueArgsSchema: z.ZodType<Prisma.ChannelFindUniqueArgs> = z.object({
  select: ChannelSelectSchema.optional(),
  include: ChannelIncludeSchema.optional(),
  where: ChannelWhereUniqueInputSchema,
}).strict()

export const ChannelFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ChannelFindUniqueOrThrowArgs> = z.object({
  select: ChannelSelectSchema.optional(),
  include: ChannelIncludeSchema.optional(),
  where: ChannelWhereUniqueInputSchema,
}).strict()

export const MediaFindFirstArgsSchema: z.ZodType<Prisma.MediaFindFirstArgs> = z.object({
  select: MediaSelectSchema.optional(),
  include: MediaIncludeSchema.optional(),
  where: MediaWhereInputSchema.optional(),
  orderBy: z.union([ MediaOrderByWithRelationInputSchema.array(),MediaOrderByWithRelationInputSchema ]).optional(),
  cursor: MediaWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: MediaScalarFieldEnumSchema.array().optional(),
}).strict()

export const MediaFindFirstOrThrowArgsSchema: z.ZodType<Prisma.MediaFindFirstOrThrowArgs> = z.object({
  select: MediaSelectSchema.optional(),
  include: MediaIncludeSchema.optional(),
  where: MediaWhereInputSchema.optional(),
  orderBy: z.union([ MediaOrderByWithRelationInputSchema.array(),MediaOrderByWithRelationInputSchema ]).optional(),
  cursor: MediaWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: MediaScalarFieldEnumSchema.array().optional(),
}).strict()

export const MediaFindManyArgsSchema: z.ZodType<Prisma.MediaFindManyArgs> = z.object({
  select: MediaSelectSchema.optional(),
  include: MediaIncludeSchema.optional(),
  where: MediaWhereInputSchema.optional(),
  orderBy: z.union([ MediaOrderByWithRelationInputSchema.array(),MediaOrderByWithRelationInputSchema ]).optional(),
  cursor: MediaWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: MediaScalarFieldEnumSchema.array().optional(),
}).strict()

export const MediaAggregateArgsSchema: z.ZodType<Prisma.MediaAggregateArgs> = z.object({
  where: MediaWhereInputSchema.optional(),
  orderBy: z.union([ MediaOrderByWithRelationInputSchema.array(),MediaOrderByWithRelationInputSchema ]).optional(),
  cursor: MediaWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const MediaGroupByArgsSchema: z.ZodType<Prisma.MediaGroupByArgs> = z.object({
  where: MediaWhereInputSchema.optional(),
  orderBy: z.union([ MediaOrderByWithAggregationInputSchema.array(),MediaOrderByWithAggregationInputSchema ]).optional(),
  by: MediaScalarFieldEnumSchema.array(),
  having: MediaScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const MediaFindUniqueArgsSchema: z.ZodType<Prisma.MediaFindUniqueArgs> = z.object({
  select: MediaSelectSchema.optional(),
  include: MediaIncludeSchema.optional(),
  where: MediaWhereUniqueInputSchema,
}).strict()

export const MediaFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.MediaFindUniqueOrThrowArgs> = z.object({
  select: MediaSelectSchema.optional(),
  include: MediaIncludeSchema.optional(),
  where: MediaWhereUniqueInputSchema,
}).strict()

export const MessageFindFirstArgsSchema: z.ZodType<Prisma.MessageFindFirstArgs> = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  where: MessageWhereInputSchema.optional(),
  orderBy: z.union([ MessageOrderByWithRelationInputSchema.array(),MessageOrderByWithRelationInputSchema ]).optional(),
  cursor: MessageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: MessageScalarFieldEnumSchema.array().optional(),
}).strict()

export const MessageFindFirstOrThrowArgsSchema: z.ZodType<Prisma.MessageFindFirstOrThrowArgs> = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  where: MessageWhereInputSchema.optional(),
  orderBy: z.union([ MessageOrderByWithRelationInputSchema.array(),MessageOrderByWithRelationInputSchema ]).optional(),
  cursor: MessageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: MessageScalarFieldEnumSchema.array().optional(),
}).strict()

export const MessageFindManyArgsSchema: z.ZodType<Prisma.MessageFindManyArgs> = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  where: MessageWhereInputSchema.optional(),
  orderBy: z.union([ MessageOrderByWithRelationInputSchema.array(),MessageOrderByWithRelationInputSchema ]).optional(),
  cursor: MessageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: MessageScalarFieldEnumSchema.array().optional(),
}).strict()

export const MessageAggregateArgsSchema: z.ZodType<Prisma.MessageAggregateArgs> = z.object({
  where: MessageWhereInputSchema.optional(),
  orderBy: z.union([ MessageOrderByWithRelationInputSchema.array(),MessageOrderByWithRelationInputSchema ]).optional(),
  cursor: MessageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const MessageGroupByArgsSchema: z.ZodType<Prisma.MessageGroupByArgs> = z.object({
  where: MessageWhereInputSchema.optional(),
  orderBy: z.union([ MessageOrderByWithAggregationInputSchema.array(),MessageOrderByWithAggregationInputSchema ]).optional(),
  by: MessageScalarFieldEnumSchema.array(),
  having: MessageScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const MessageFindUniqueArgsSchema: z.ZodType<Prisma.MessageFindUniqueArgs> = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  where: MessageWhereUniqueInputSchema,
}).strict()

export const MessageFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.MessageFindUniqueOrThrowArgs> = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  where: MessageWhereUniqueInputSchema,
}).strict()

export const UserNotificationsFindFirstArgsSchema: z.ZodType<Prisma.UserNotificationsFindFirstArgs> = z.object({
  select: UserNotificationsSelectSchema.optional(),
  where: UserNotificationsWhereInputSchema.optional(),
  orderBy: z.union([ UserNotificationsOrderByWithRelationInputSchema.array(),UserNotificationsOrderByWithRelationInputSchema ]).optional(),
  cursor: UserNotificationsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserNotificationsScalarFieldEnumSchema.array().optional(),
}).strict()

export const UserNotificationsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserNotificationsFindFirstOrThrowArgs> = z.object({
  select: UserNotificationsSelectSchema.optional(),
  where: UserNotificationsWhereInputSchema.optional(),
  orderBy: z.union([ UserNotificationsOrderByWithRelationInputSchema.array(),UserNotificationsOrderByWithRelationInputSchema ]).optional(),
  cursor: UserNotificationsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserNotificationsScalarFieldEnumSchema.array().optional(),
}).strict()

export const UserNotificationsFindManyArgsSchema: z.ZodType<Prisma.UserNotificationsFindManyArgs> = z.object({
  select: UserNotificationsSelectSchema.optional(),
  where: UserNotificationsWhereInputSchema.optional(),
  orderBy: z.union([ UserNotificationsOrderByWithRelationInputSchema.array(),UserNotificationsOrderByWithRelationInputSchema ]).optional(),
  cursor: UserNotificationsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserNotificationsScalarFieldEnumSchema.array().optional(),
}).strict()

export const UserNotificationsAggregateArgsSchema: z.ZodType<Prisma.UserNotificationsAggregateArgs> = z.object({
  where: UserNotificationsWhereInputSchema.optional(),
  orderBy: z.union([ UserNotificationsOrderByWithRelationInputSchema.array(),UserNotificationsOrderByWithRelationInputSchema ]).optional(),
  cursor: UserNotificationsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const UserNotificationsGroupByArgsSchema: z.ZodType<Prisma.UserNotificationsGroupByArgs> = z.object({
  where: UserNotificationsWhereInputSchema.optional(),
  orderBy: z.union([ UserNotificationsOrderByWithAggregationInputSchema.array(),UserNotificationsOrderByWithAggregationInputSchema ]).optional(),
  by: UserNotificationsScalarFieldEnumSchema.array(),
  having: UserNotificationsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const UserNotificationsFindUniqueArgsSchema: z.ZodType<Prisma.UserNotificationsFindUniqueArgs> = z.object({
  select: UserNotificationsSelectSchema.optional(),
  where: UserNotificationsWhereUniqueInputSchema,
}).strict()

export const UserNotificationsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserNotificationsFindUniqueOrThrowArgs> = z.object({
  select: UserNotificationsSelectSchema.optional(),
  where: UserNotificationsWhereUniqueInputSchema,
}).strict()

export const InvitationCodeFindFirstArgsSchema: z.ZodType<Prisma.InvitationCodeFindFirstArgs> = z.object({
  select: InvitationCodeSelectSchema.optional(),
  where: InvitationCodeWhereInputSchema.optional(),
  orderBy: z.union([ InvitationCodeOrderByWithRelationInputSchema.array(),InvitationCodeOrderByWithRelationInputSchema ]).optional(),
  cursor: InvitationCodeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: InvitationCodeScalarFieldEnumSchema.array().optional(),
}).strict()

export const InvitationCodeFindFirstOrThrowArgsSchema: z.ZodType<Prisma.InvitationCodeFindFirstOrThrowArgs> = z.object({
  select: InvitationCodeSelectSchema.optional(),
  where: InvitationCodeWhereInputSchema.optional(),
  orderBy: z.union([ InvitationCodeOrderByWithRelationInputSchema.array(),InvitationCodeOrderByWithRelationInputSchema ]).optional(),
  cursor: InvitationCodeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: InvitationCodeScalarFieldEnumSchema.array().optional(),
}).strict()

export const InvitationCodeFindManyArgsSchema: z.ZodType<Prisma.InvitationCodeFindManyArgs> = z.object({
  select: InvitationCodeSelectSchema.optional(),
  where: InvitationCodeWhereInputSchema.optional(),
  orderBy: z.union([ InvitationCodeOrderByWithRelationInputSchema.array(),InvitationCodeOrderByWithRelationInputSchema ]).optional(),
  cursor: InvitationCodeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: InvitationCodeScalarFieldEnumSchema.array().optional(),
}).strict()

export const InvitationCodeAggregateArgsSchema: z.ZodType<Prisma.InvitationCodeAggregateArgs> = z.object({
  where: InvitationCodeWhereInputSchema.optional(),
  orderBy: z.union([ InvitationCodeOrderByWithRelationInputSchema.array(),InvitationCodeOrderByWithRelationInputSchema ]).optional(),
  cursor: InvitationCodeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const InvitationCodeGroupByArgsSchema: z.ZodType<Prisma.InvitationCodeGroupByArgs> = z.object({
  where: InvitationCodeWhereInputSchema.optional(),
  orderBy: z.union([ InvitationCodeOrderByWithAggregationInputSchema.array(),InvitationCodeOrderByWithAggregationInputSchema ]).optional(),
  by: InvitationCodeScalarFieldEnumSchema.array(),
  having: InvitationCodeScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const InvitationCodeFindUniqueArgsSchema: z.ZodType<Prisma.InvitationCodeFindUniqueArgs> = z.object({
  select: InvitationCodeSelectSchema.optional(),
  where: InvitationCodeWhereUniqueInputSchema,
}).strict()

export const InvitationCodeFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.InvitationCodeFindUniqueOrThrowArgs> = z.object({
  select: InvitationCodeSelectSchema.optional(),
  where: InvitationCodeWhereUniqueInputSchema,
}).strict()

export const OrganisationCreateArgsSchema: z.ZodType<Prisma.OrganisationCreateArgs> = z.object({
  select: OrganisationSelectSchema.optional(),
  include: OrganisationIncludeSchema.optional(),
  data: z.union([ OrganisationCreateInputSchema,OrganisationUncheckedCreateInputSchema ]),
}).strict()

export const OrganisationUpsertArgsSchema: z.ZodType<Prisma.OrganisationUpsertArgs> = z.object({
  select: OrganisationSelectSchema.optional(),
  include: OrganisationIncludeSchema.optional(),
  where: OrganisationWhereUniqueInputSchema,
  create: z.union([ OrganisationCreateInputSchema,OrganisationUncheckedCreateInputSchema ]),
  update: z.union([ OrganisationUpdateInputSchema,OrganisationUncheckedUpdateInputSchema ]),
}).strict()

export const OrganisationCreateManyArgsSchema: z.ZodType<Prisma.OrganisationCreateManyArgs> = z.object({
  data: z.union([ OrganisationCreateManyInputSchema,OrganisationCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const OrganisationDeleteArgsSchema: z.ZodType<Prisma.OrganisationDeleteArgs> = z.object({
  select: OrganisationSelectSchema.optional(),
  include: OrganisationIncludeSchema.optional(),
  where: OrganisationWhereUniqueInputSchema,
}).strict()

export const OrganisationUpdateArgsSchema: z.ZodType<Prisma.OrganisationUpdateArgs> = z.object({
  select: OrganisationSelectSchema.optional(),
  include: OrganisationIncludeSchema.optional(),
  data: z.union([ OrganisationUpdateInputSchema,OrganisationUncheckedUpdateInputSchema ]),
  where: OrganisationWhereUniqueInputSchema,
}).strict()

export const OrganisationUpdateManyArgsSchema: z.ZodType<Prisma.OrganisationUpdateManyArgs> = z.object({
  data: z.union([ OrganisationUpdateManyMutationInputSchema,OrganisationUncheckedUpdateManyInputSchema ]),
  where: OrganisationWhereInputSchema.optional(),
}).strict()

export const OrganisationDeleteManyArgsSchema: z.ZodType<Prisma.OrganisationDeleteManyArgs> = z.object({
  where: OrganisationWhereInputSchema.optional(),
}).strict()

export const OrganisationInvitationCreateArgsSchema: z.ZodType<Prisma.OrganisationInvitationCreateArgs> = z.object({
  select: OrganisationInvitationSelectSchema.optional(),
  include: OrganisationInvitationIncludeSchema.optional(),
  data: z.union([ OrganisationInvitationCreateInputSchema,OrganisationInvitationUncheckedCreateInputSchema ]),
}).strict()

export const OrganisationInvitationUpsertArgsSchema: z.ZodType<Prisma.OrganisationInvitationUpsertArgs> = z.object({
  select: OrganisationInvitationSelectSchema.optional(),
  include: OrganisationInvitationIncludeSchema.optional(),
  where: OrganisationInvitationWhereUniqueInputSchema,
  create: z.union([ OrganisationInvitationCreateInputSchema,OrganisationInvitationUncheckedCreateInputSchema ]),
  update: z.union([ OrganisationInvitationUpdateInputSchema,OrganisationInvitationUncheckedUpdateInputSchema ]),
}).strict()

export const OrganisationInvitationCreateManyArgsSchema: z.ZodType<Prisma.OrganisationInvitationCreateManyArgs> = z.object({
  data: z.union([ OrganisationInvitationCreateManyInputSchema,OrganisationInvitationCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const OrganisationInvitationDeleteArgsSchema: z.ZodType<Prisma.OrganisationInvitationDeleteArgs> = z.object({
  select: OrganisationInvitationSelectSchema.optional(),
  include: OrganisationInvitationIncludeSchema.optional(),
  where: OrganisationInvitationWhereUniqueInputSchema,
}).strict()

export const OrganisationInvitationUpdateArgsSchema: z.ZodType<Prisma.OrganisationInvitationUpdateArgs> = z.object({
  select: OrganisationInvitationSelectSchema.optional(),
  include: OrganisationInvitationIncludeSchema.optional(),
  data: z.union([ OrganisationInvitationUpdateInputSchema,OrganisationInvitationUncheckedUpdateInputSchema ]),
  where: OrganisationInvitationWhereUniqueInputSchema,
}).strict()

export const OrganisationInvitationUpdateManyArgsSchema: z.ZodType<Prisma.OrganisationInvitationUpdateManyArgs> = z.object({
  data: z.union([ OrganisationInvitationUpdateManyMutationInputSchema,OrganisationInvitationUncheckedUpdateManyInputSchema ]),
  where: OrganisationInvitationWhereInputSchema.optional(),
}).strict()

export const OrganisationInvitationDeleteManyArgsSchema: z.ZodType<Prisma.OrganisationInvitationDeleteManyArgs> = z.object({
  where: OrganisationInvitationWhereInputSchema.optional(),
}).strict()

export const MembershipCreateArgsSchema: z.ZodType<Prisma.MembershipCreateArgs> = z.object({
  select: MembershipSelectSchema.optional(),
  include: MembershipIncludeSchema.optional(),
  data: z.union([ MembershipCreateInputSchema,MembershipUncheckedCreateInputSchema ]),
}).strict()

export const MembershipUpsertArgsSchema: z.ZodType<Prisma.MembershipUpsertArgs> = z.object({
  select: MembershipSelectSchema.optional(),
  include: MembershipIncludeSchema.optional(),
  where: MembershipWhereUniqueInputSchema,
  create: z.union([ MembershipCreateInputSchema,MembershipUncheckedCreateInputSchema ]),
  update: z.union([ MembershipUpdateInputSchema,MembershipUncheckedUpdateInputSchema ]),
}).strict()

export const MembershipCreateManyArgsSchema: z.ZodType<Prisma.MembershipCreateManyArgs> = z.object({
  data: z.union([ MembershipCreateManyInputSchema,MembershipCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const MembershipDeleteArgsSchema: z.ZodType<Prisma.MembershipDeleteArgs> = z.object({
  select: MembershipSelectSchema.optional(),
  include: MembershipIncludeSchema.optional(),
  where: MembershipWhereUniqueInputSchema,
}).strict()

export const MembershipUpdateArgsSchema: z.ZodType<Prisma.MembershipUpdateArgs> = z.object({
  select: MembershipSelectSchema.optional(),
  include: MembershipIncludeSchema.optional(),
  data: z.union([ MembershipUpdateInputSchema,MembershipUncheckedUpdateInputSchema ]),
  where: MembershipWhereUniqueInputSchema,
}).strict()

export const MembershipUpdateManyArgsSchema: z.ZodType<Prisma.MembershipUpdateManyArgs> = z.object({
  data: z.union([ MembershipUpdateManyMutationInputSchema,MembershipUncheckedUpdateManyInputSchema ]),
  where: MembershipWhereInputSchema.optional(),
}).strict()

export const MembershipDeleteManyArgsSchema: z.ZodType<Prisma.MembershipDeleteManyArgs> = z.object({
  where: MembershipWhereInputSchema.optional(),
}).strict()

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
}).strict()

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
  update: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
}).strict()

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict()

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
  where: UserWhereUniqueInputSchema,
}).strict()

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
}).strict()

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(),
}).strict()

export const UserProfileCreateArgsSchema: z.ZodType<Prisma.UserProfileCreateArgs> = z.object({
  select: UserProfileSelectSchema.optional(),
  include: UserProfileIncludeSchema.optional(),
  data: z.union([ UserProfileCreateInputSchema,UserProfileUncheckedCreateInputSchema ]),
}).strict()

export const UserProfileUpsertArgsSchema: z.ZodType<Prisma.UserProfileUpsertArgs> = z.object({
  select: UserProfileSelectSchema.optional(),
  include: UserProfileIncludeSchema.optional(),
  where: UserProfileWhereUniqueInputSchema,
  create: z.union([ UserProfileCreateInputSchema,UserProfileUncheckedCreateInputSchema ]),
  update: z.union([ UserProfileUpdateInputSchema,UserProfileUncheckedUpdateInputSchema ]),
}).strict()

export const UserProfileCreateManyArgsSchema: z.ZodType<Prisma.UserProfileCreateManyArgs> = z.object({
  data: z.union([ UserProfileCreateManyInputSchema,UserProfileCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const UserProfileDeleteArgsSchema: z.ZodType<Prisma.UserProfileDeleteArgs> = z.object({
  select: UserProfileSelectSchema.optional(),
  include: UserProfileIncludeSchema.optional(),
  where: UserProfileWhereUniqueInputSchema,
}).strict()

export const UserProfileUpdateArgsSchema: z.ZodType<Prisma.UserProfileUpdateArgs> = z.object({
  select: UserProfileSelectSchema.optional(),
  include: UserProfileIncludeSchema.optional(),
  data: z.union([ UserProfileUpdateInputSchema,UserProfileUncheckedUpdateInputSchema ]),
  where: UserProfileWhereUniqueInputSchema,
}).strict()

export const UserProfileUpdateManyArgsSchema: z.ZodType<Prisma.UserProfileUpdateManyArgs> = z.object({
  data: z.union([ UserProfileUpdateManyMutationInputSchema,UserProfileUncheckedUpdateManyInputSchema ]),
  where: UserProfileWhereInputSchema.optional(),
}).strict()

export const UserProfileDeleteManyArgsSchema: z.ZodType<Prisma.UserProfileDeleteManyArgs> = z.object({
  where: UserProfileWhereInputSchema.optional(),
}).strict()

export const ChannelCreateArgsSchema: z.ZodType<Prisma.ChannelCreateArgs> = z.object({
  select: ChannelSelectSchema.optional(),
  include: ChannelIncludeSchema.optional(),
  data: z.union([ ChannelCreateInputSchema,ChannelUncheckedCreateInputSchema ]),
}).strict()

export const ChannelUpsertArgsSchema: z.ZodType<Prisma.ChannelUpsertArgs> = z.object({
  select: ChannelSelectSchema.optional(),
  include: ChannelIncludeSchema.optional(),
  where: ChannelWhereUniqueInputSchema,
  create: z.union([ ChannelCreateInputSchema,ChannelUncheckedCreateInputSchema ]),
  update: z.union([ ChannelUpdateInputSchema,ChannelUncheckedUpdateInputSchema ]),
}).strict()

export const ChannelCreateManyArgsSchema: z.ZodType<Prisma.ChannelCreateManyArgs> = z.object({
  data: z.union([ ChannelCreateManyInputSchema,ChannelCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const ChannelDeleteArgsSchema: z.ZodType<Prisma.ChannelDeleteArgs> = z.object({
  select: ChannelSelectSchema.optional(),
  include: ChannelIncludeSchema.optional(),
  where: ChannelWhereUniqueInputSchema,
}).strict()

export const ChannelUpdateArgsSchema: z.ZodType<Prisma.ChannelUpdateArgs> = z.object({
  select: ChannelSelectSchema.optional(),
  include: ChannelIncludeSchema.optional(),
  data: z.union([ ChannelUpdateInputSchema,ChannelUncheckedUpdateInputSchema ]),
  where: ChannelWhereUniqueInputSchema,
}).strict()

export const ChannelUpdateManyArgsSchema: z.ZodType<Prisma.ChannelUpdateManyArgs> = z.object({
  data: z.union([ ChannelUpdateManyMutationInputSchema,ChannelUncheckedUpdateManyInputSchema ]),
  where: ChannelWhereInputSchema.optional(),
}).strict()

export const ChannelDeleteManyArgsSchema: z.ZodType<Prisma.ChannelDeleteManyArgs> = z.object({
  where: ChannelWhereInputSchema.optional(),
}).strict()

export const MediaCreateArgsSchema: z.ZodType<Prisma.MediaCreateArgs> = z.object({
  select: MediaSelectSchema.optional(),
  include: MediaIncludeSchema.optional(),
  data: z.union([ MediaCreateInputSchema,MediaUncheckedCreateInputSchema ]),
}).strict()

export const MediaUpsertArgsSchema: z.ZodType<Prisma.MediaUpsertArgs> = z.object({
  select: MediaSelectSchema.optional(),
  include: MediaIncludeSchema.optional(),
  where: MediaWhereUniqueInputSchema,
  create: z.union([ MediaCreateInputSchema,MediaUncheckedCreateInputSchema ]),
  update: z.union([ MediaUpdateInputSchema,MediaUncheckedUpdateInputSchema ]),
}).strict()

export const MediaCreateManyArgsSchema: z.ZodType<Prisma.MediaCreateManyArgs> = z.object({
  data: z.union([ MediaCreateManyInputSchema,MediaCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const MediaDeleteArgsSchema: z.ZodType<Prisma.MediaDeleteArgs> = z.object({
  select: MediaSelectSchema.optional(),
  include: MediaIncludeSchema.optional(),
  where: MediaWhereUniqueInputSchema,
}).strict()

export const MediaUpdateArgsSchema: z.ZodType<Prisma.MediaUpdateArgs> = z.object({
  select: MediaSelectSchema.optional(),
  include: MediaIncludeSchema.optional(),
  data: z.union([ MediaUpdateInputSchema,MediaUncheckedUpdateInputSchema ]),
  where: MediaWhereUniqueInputSchema,
}).strict()

export const MediaUpdateManyArgsSchema: z.ZodType<Prisma.MediaUpdateManyArgs> = z.object({
  data: z.union([ MediaUpdateManyMutationInputSchema,MediaUncheckedUpdateManyInputSchema ]),
  where: MediaWhereInputSchema.optional(),
}).strict()

export const MediaDeleteManyArgsSchema: z.ZodType<Prisma.MediaDeleteManyArgs> = z.object({
  where: MediaWhereInputSchema.optional(),
}).strict()

export const MessageCreateArgsSchema: z.ZodType<Prisma.MessageCreateArgs> = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  data: z.union([ MessageCreateInputSchema,MessageUncheckedCreateInputSchema ]),
}).strict()

export const MessageUpsertArgsSchema: z.ZodType<Prisma.MessageUpsertArgs> = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  where: MessageWhereUniqueInputSchema,
  create: z.union([ MessageCreateInputSchema,MessageUncheckedCreateInputSchema ]),
  update: z.union([ MessageUpdateInputSchema,MessageUncheckedUpdateInputSchema ]),
}).strict()

export const MessageCreateManyArgsSchema: z.ZodType<Prisma.MessageCreateManyArgs> = z.object({
  data: z.union([ MessageCreateManyInputSchema,MessageCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const MessageDeleteArgsSchema: z.ZodType<Prisma.MessageDeleteArgs> = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  where: MessageWhereUniqueInputSchema,
}).strict()

export const MessageUpdateArgsSchema: z.ZodType<Prisma.MessageUpdateArgs> = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  data: z.union([ MessageUpdateInputSchema,MessageUncheckedUpdateInputSchema ]),
  where: MessageWhereUniqueInputSchema,
}).strict()

export const MessageUpdateManyArgsSchema: z.ZodType<Prisma.MessageUpdateManyArgs> = z.object({
  data: z.union([ MessageUpdateManyMutationInputSchema,MessageUncheckedUpdateManyInputSchema ]),
  where: MessageWhereInputSchema.optional(),
}).strict()

export const MessageDeleteManyArgsSchema: z.ZodType<Prisma.MessageDeleteManyArgs> = z.object({
  where: MessageWhereInputSchema.optional(),
}).strict()

export const UserNotificationsCreateArgsSchema: z.ZodType<Prisma.UserNotificationsCreateArgs> = z.object({
  select: UserNotificationsSelectSchema.optional(),
  data: z.union([ UserNotificationsCreateInputSchema,UserNotificationsUncheckedCreateInputSchema ]),
}).strict()

export const UserNotificationsUpsertArgsSchema: z.ZodType<Prisma.UserNotificationsUpsertArgs> = z.object({
  select: UserNotificationsSelectSchema.optional(),
  where: UserNotificationsWhereUniqueInputSchema,
  create: z.union([ UserNotificationsCreateInputSchema,UserNotificationsUncheckedCreateInputSchema ]),
  update: z.union([ UserNotificationsUpdateInputSchema,UserNotificationsUncheckedUpdateInputSchema ]),
}).strict()

export const UserNotificationsCreateManyArgsSchema: z.ZodType<Prisma.UserNotificationsCreateManyArgs> = z.object({
  data: z.union([ UserNotificationsCreateManyInputSchema,UserNotificationsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const UserNotificationsDeleteArgsSchema: z.ZodType<Prisma.UserNotificationsDeleteArgs> = z.object({
  select: UserNotificationsSelectSchema.optional(),
  where: UserNotificationsWhereUniqueInputSchema,
}).strict()

export const UserNotificationsUpdateArgsSchema: z.ZodType<Prisma.UserNotificationsUpdateArgs> = z.object({
  select: UserNotificationsSelectSchema.optional(),
  data: z.union([ UserNotificationsUpdateInputSchema,UserNotificationsUncheckedUpdateInputSchema ]),
  where: UserNotificationsWhereUniqueInputSchema,
}).strict()

export const UserNotificationsUpdateManyArgsSchema: z.ZodType<Prisma.UserNotificationsUpdateManyArgs> = z.object({
  data: z.union([ UserNotificationsUpdateManyMutationInputSchema,UserNotificationsUncheckedUpdateManyInputSchema ]),
  where: UserNotificationsWhereInputSchema.optional(),
}).strict()

export const UserNotificationsDeleteManyArgsSchema: z.ZodType<Prisma.UserNotificationsDeleteManyArgs> = z.object({
  where: UserNotificationsWhereInputSchema.optional(),
}).strict()

export const InvitationCodeCreateArgsSchema: z.ZodType<Prisma.InvitationCodeCreateArgs> = z.object({
  select: InvitationCodeSelectSchema.optional(),
  data: z.union([ InvitationCodeCreateInputSchema,InvitationCodeUncheckedCreateInputSchema ]),
}).strict()

export const InvitationCodeUpsertArgsSchema: z.ZodType<Prisma.InvitationCodeUpsertArgs> = z.object({
  select: InvitationCodeSelectSchema.optional(),
  where: InvitationCodeWhereUniqueInputSchema,
  create: z.union([ InvitationCodeCreateInputSchema,InvitationCodeUncheckedCreateInputSchema ]),
  update: z.union([ InvitationCodeUpdateInputSchema,InvitationCodeUncheckedUpdateInputSchema ]),
}).strict()

export const InvitationCodeCreateManyArgsSchema: z.ZodType<Prisma.InvitationCodeCreateManyArgs> = z.object({
  data: z.union([ InvitationCodeCreateManyInputSchema,InvitationCodeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const InvitationCodeDeleteArgsSchema: z.ZodType<Prisma.InvitationCodeDeleteArgs> = z.object({
  select: InvitationCodeSelectSchema.optional(),
  where: InvitationCodeWhereUniqueInputSchema,
}).strict()

export const InvitationCodeUpdateArgsSchema: z.ZodType<Prisma.InvitationCodeUpdateArgs> = z.object({
  select: InvitationCodeSelectSchema.optional(),
  data: z.union([ InvitationCodeUpdateInputSchema,InvitationCodeUncheckedUpdateInputSchema ]),
  where: InvitationCodeWhereUniqueInputSchema,
}).strict()

export const InvitationCodeUpdateManyArgsSchema: z.ZodType<Prisma.InvitationCodeUpdateManyArgs> = z.object({
  data: z.union([ InvitationCodeUpdateManyMutationInputSchema,InvitationCodeUncheckedUpdateManyInputSchema ]),
  where: InvitationCodeWhereInputSchema.optional(),
}).strict()

export const InvitationCodeDeleteManyArgsSchema: z.ZodType<Prisma.InvitationCodeDeleteManyArgs> = z.object({
  where: InvitationCodeWhereInputSchema.optional(),
}).strict()
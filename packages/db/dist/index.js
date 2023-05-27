var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../node_modules/.prisma/client/index.js
var require_client = __commonJS({
  "../../node_modules/.prisma/client/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var {
      PrismaClientKnownRequestError,
      PrismaClientUnknownRequestError,
      PrismaClientRustPanicError,
      PrismaClientInitializationError,
      PrismaClientValidationError,
      NotFoundError,
      decompressFromBase64,
      getPrismaClient,
      sqltag,
      empty,
      join,
      raw,
      Decimal,
      Debug,
      objectEnumValues,
      makeStrictEnum,
      Extensions,
      warnOnce,
      defineDmmfProperty
    } = require("@prisma/client/runtime/library");
    var Prisma = {};
    exports.Prisma = Prisma;
    Prisma.prismaVersion = {
      client: "4.14.1",
      engine: "d9a4c5988f480fa576d43970d5a23641aa77bc9c"
    };
    Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
    Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError;
    Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError;
    Prisma.PrismaClientInitializationError = PrismaClientInitializationError;
    Prisma.PrismaClientValidationError = PrismaClientValidationError;
    Prisma.NotFoundError = NotFoundError;
    Prisma.Decimal = Decimal;
    Prisma.sql = sqltag;
    Prisma.empty = empty;
    Prisma.join = join;
    Prisma.raw = raw;
    Prisma.validator = () => (val) => val;
    Prisma.DbNull = objectEnumValues.instances.DbNull;
    Prisma.JsonNull = objectEnumValues.instances.JsonNull;
    Prisma.AnyNull = objectEnumValues.instances.AnyNull;
    Prisma.NullTypes = {
      DbNull: objectEnumValues.classes.DbNull,
      JsonNull: objectEnumValues.classes.JsonNull,
      AnyNull: objectEnumValues.classes.AnyNull
    };
    var path = require("path");
    exports.Prisma.ChannelScalarFieldEnum = {
      id: "id",
      kind: "kind",
      createdBy: "createdBy",
      name: "name",
      description: "description",
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      organisationId: "organisationId"
    };
    exports.Prisma.InvitationCodeScalarFieldEnum = {
      id: "id",
      role: "role",
      userId: "userId"
    };
    exports.Prisma.MediaScalarFieldEnum = {
      id: "id",
      kind: "kind",
      filename: "filename",
      size: "size",
      width: "width",
      height: "height",
      path: "path",
      createdAt: "createdAt",
      messageId: "messageId"
    };
    exports.Prisma.MembershipScalarFieldEnum = {
      id: "id",
      role: "role",
      organizationId: "organizationId",
      userId: "userId",
      invitedName: "invitedName",
      invitedEmail: "invitedEmail"
    };
    exports.Prisma.MessageScalarFieldEnum = {
      id: "id",
      text: "text",
      senderId: "senderId",
      receiverId: "receiverId",
      channelId: "channelId",
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    };
    exports.Prisma.OrganisationInvitationScalarFieldEnum = {
      id: "id",
      publicId: "publicId",
      issuedEmail: "issuedEmail",
      createdAt: "createdAt",
      expiresAt: "expiresAt",
      creatorId: "creatorId",
      organizationId: "organizationId"
    };
    exports.Prisma.OrganisationScalarFieldEnum = {
      id: "id",
      publicId: "publicId",
      name: "name",
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    };
    exports.Prisma.SortOrder = {
      asc: "asc",
      desc: "desc"
    };
    exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
      ReadUncommitted: "ReadUncommitted",
      ReadCommitted: "ReadCommitted",
      RepeatableRead: "RepeatableRead",
      Serializable: "Serializable"
    });
    exports.Prisma.UserNotificationsScalarFieldEnum = {
      id: "id",
      payload: "payload",
      userId: "userId"
    };
    exports.Prisma.UserProfileScalarFieldEnum = {
      id: "id",
      publicId: "publicId",
      profilePictureUrl: "profilePictureUrl",
      profileColor: "profileColor",
      username: "username",
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    };
    exports.Prisma.UserScalarFieldEnum = {
      id: "id",
      publicId: "publicId",
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      name: "name",
      email: "email",
      password: "password",
      role: "role",
      userProfileId: "userProfileId"
    };
    exports.ChannelKind = {
      PRIVATE: "PRIVATE",
      PUBLIC: "PUBLIC"
    };
    exports.GlobalRole = {
      SUPERADMIN: "SUPERADMIN",
      CUSTOMER: "CUSTOMER"
    };
    exports.MembershipRole = {
      OWNER: "OWNER",
      ADMIN: "ADMIN",
      USER: "USER"
    };
    exports.Prisma.ModelName = {
      Organisation: "Organisation",
      OrganisationInvitation: "OrganisationInvitation",
      Membership: "Membership",
      User: "User",
      UserProfile: "UserProfile",
      Channel: "Channel",
      Media: "Media",
      Message: "Message",
      UserNotifications: "UserNotifications",
      InvitationCode: "InvitationCode"
    };
    var config = {
      "generator": {
        "name": "client",
        "provider": {
          "fromEnvVar": null,
          "value": "prisma-client-js"
        },
        "output": {
          "value": "/Users/enes.tuefekci/personal/projects/reflect-chat/node_modules/@prisma/client",
          "fromEnvVar": null
        },
        "config": {
          "engineType": "library"
        },
        "binaryTargets": [],
        "previewFeatures": []
      },
      "relativeEnvPaths": {
        "rootEnvPath": "../../../.env"
      },
      "relativePath": "../../../packages/db/prisma",
      "clientVersion": "4.14.1",
      "engineVersion": "d9a4c5988f480fa576d43970d5a23641aa77bc9c",
      "datasourceNames": [
        "db"
      ],
      "activeProvider": "mysql",
      "dataProxy": false,
      "postinstall": false
    };
    var fs = require("fs");
    config.dirname = __dirname;
    if (!fs.existsSync(path.join(__dirname, "schema.prisma"))) {
      warnOnce("bundled-warning-1", "Your generated Prisma Client could not immediately find its `schema.prisma`, falling back to finding it via the current working directory.");
      warnOnce("bundled-warning-2", "We are interested in learning about your project setup. We'd appreciate if you could take the time to share some information with us.");
      warnOnce("bundled-warning-3", "Please help us by answering a few questions: https://pris.ly/bundler-investigation");
      config.dirname = path.join(process.cwd(), "../../node_modules/.prisma/client");
      config.isBundled = true;
    }
    config.runtimeDataModel = JSON.parse('{"models":{"Organisation":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"publicId","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"cuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"membership","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Membership","relationName":"MembershipToOrganisation","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"channels","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Channel","relationName":"ChannelToOrganisation","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"OrganisationInvitation","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"OrganisationInvitation","relationName":"OrganisationToOrganisationInvitation","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"OrganisationInvitation":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"publicId","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"cuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"createdBy","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","relationName":"OrganisationInvitationToUser","relationFromFields":["creatorId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"organisation","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Organisation","relationName":"OrganisationToOrganisationInvitation","relationFromFields":["organizationId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"issuedEmail","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"expiresAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"creatorId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"organizationId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Membership":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"role","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"MembershipRole","isGenerated":false,"isUpdatedAt":false},{"name":"organization","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Organisation","relationName":"MembershipToOrganisation","relationFromFields":["organizationId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"organizationId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","relationName":"MembershipToUser","relationFromFields":["userId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"userId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"invitedName","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"invitedEmail","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[["organizationId","invitedEmail"]],"uniqueIndexes":[{"name":null,"fields":["organizationId","invitedEmail"]}],"isGenerated":false},"User":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"publicId","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"cuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"password","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"role","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"GlobalRole","isGenerated":false,"isUpdatedAt":false},{"name":"userProfile","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"UserProfile","relationName":"UserToUserProfile","relationFromFields":["userProfileId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"memberships","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Membership","relationName":"MembershipToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"OrganisationInvitation","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"OrganisationInvitation","relationName":"OrganisationInvitationToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"userProfileId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"UserProfile":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"publicId","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"cuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"profilePictureUrl","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"profileColor","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":"#000000","isGenerated":false,"isUpdatedAt":false},{"name":"username","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"User","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","relationName":"UserToUserProfile","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Channel":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"cuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"kind","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"ChannelKind","default":"PUBLIC","isGenerated":false,"isUpdatedAt":false},{"name":"createdBy","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"description","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"Organisation","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Organisation","relationName":"ChannelToOrganisation","relationFromFields":["organisationId"],"relationToFields":["publicId"],"isGenerated":false,"isUpdatedAt":false},{"name":"organisationId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Media":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"cuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"kind","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"filename","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"size","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"width","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":0,"isGenerated":false,"isUpdatedAt":false},{"name":"height","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":0,"isGenerated":false,"isUpdatedAt":false},{"name":"path","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"Message","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Message","relationName":"MediaToMessage","relationFromFields":["messageId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"messageId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Message":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"cuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"text","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"media","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Media","relationName":"MediaToMessage","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"senderId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"receiverId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"channelId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"UserNotifications":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"cuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"payload","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"userId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"InvitationCode":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"cuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"role","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"userId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{"MembershipRole":{"values":[{"name":"OWNER","dbName":null},{"name":"ADMIN","dbName":null},{"name":"USER","dbName":null}],"dbName":null},"GlobalRole":{"values":[{"name":"SUPERADMIN","dbName":null},{"name":"CUSTOMER","dbName":null}],"dbName":null},"ChannelKind":{"values":[{"name":"PRIVATE","dbName":null},{"name":"PUBLIC","dbName":null}],"dbName":null}},"types":{}}');
    defineDmmfProperty(exports.Prisma, config.runtimeDataModel);
    var { warnEnvConflicts } = require("@prisma/client/runtime/library");
    warnEnvConflicts({
      rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
      schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
    });
    var PrismaClient2 = getPrismaClient(config);
    exports.PrismaClient = PrismaClient2;
    Object.assign(exports, Prisma);
    path.join(__dirname, "libquery_engine-darwin-arm64.dylib.node");
    path.join(process.cwd(), "../../node_modules/.prisma/client/libquery_engine-darwin-arm64.dylib.node");
    path.join(__dirname, "schema.prisma");
    path.join(process.cwd(), "../../node_modules/.prisma/client/schema.prisma");
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  mutations: () => mutations,
  prisma: () => prisma,
  queries: () => queries
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

// src/data/mutations.ts
var import_zod = __toESM(require("zod"));

// src/data/error.ts
var ERROR_CODES = {
  INSUFFICIENT_PERMISSIONS: 1e3,
  VALIDATION_ERROR: 1001,
  PRISMA_ERROR: 2e3
};
function createError(errorKind) {
  return (params) => {
    const { message, payload, statusCode = 200 } = params;
    if (process.env.NODE_ENV === "production") {
      return { success: false, error: { code: ERROR_CODES[errorKind] } };
    }
    return {
      success: false,
      error: {
        statusCode,
        code: ERROR_CODES[errorKind],
        title: errorKind,
        message: typeof message === "string" ? message : JSON.stringify(message),
        payload
      }
    };
  };
}
var prismaError = createError("PRISMA_ERROR");
var insufficientPermissionsError = createError(
  "INSUFFICIENT_PERMISSIONS"
);
var validationError = createError("VALIDATION_ERROR");

// src/data/handlers.ts
function createHandler(args) {
  const {
    handler,
    schema,
    globalRoles,
    membershipRoles,
    isPublic = false
  } = args;
  return {
    isPublic,
    handler: (args2, ctx) => {
      if (membershipRoles && args2.organisationId) {
        if (!membershipRoles.includes(ctx.membershipRoles[args2.organisationId])) {
          return insufficientPermissionsError({ statusCode: 403 });
        }
      }
      if (globalRoles && !globalRoles.includes(ctx.globalRole)) {
        return insufficientPermissionsError({ statusCode: 403 });
      }
      if (schema) {
        const { success, ...rest } = schema.safeParse(args2);
        if (!success) {
          return validationError({
            payload: rest == null ? void 0 : rest.error,
            statusCode: 403
          });
        }
      }
      return handler(args2, ctx);
    }
  };
}

// src/data/mutations.ts
var import_client2 = __toESM(require_client());
var handleChannelCreate = createHandler({
  membershipRoles: [import_client2.MembershipRole.ADMIN, import_client2.MembershipRole.OWNER],
  schema: import_zod.default.object({
    name: import_zod.default.string({ required_error: "Name is required" }).min(3, "Channel name is too short"),
    kind: import_zod.default.enum([import_client2.ChannelKind.PRIVATE, import_client2.ChannelKind.PUBLIC], {
      required_error: "Channel kind is required"
    }),
    organisationId: import_zod.default.string({ required_error: "Organisation id is required" })
  }),
  handler: async (args, ctx) => {
    const { kind, name, organisationId } = args;
    const { userId } = ctx;
    try {
      const data = await prisma.channel.create({
        data: { name, kind, createdBy: userId, organisationId }
      });
      return {
        success: true,
        data
      };
    } catch (error) {
      return prismaError({ payload: error, statusCode: 400 });
    }
  }
});

// src/data/queries.ts
var me = createHandler({
  handler: async (_, ctx) => {
    const user = await prisma.user.findFirst({
      where: { publicId: ctx.userId },
      include: {
        userProfile: true,
        memberships: {
          include: {
            organization: true
          }
        }
      }
    });
    return {
      success: true,
      data: user
    };
  }
});

// src/data/endpoints.ts
var mutations = {
  "/channel/create": handleChannelCreate
};
var queries = {
  "/auth/me": me
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  mutations,
  prisma,
  queries,
  ...require("@prisma/client")
});

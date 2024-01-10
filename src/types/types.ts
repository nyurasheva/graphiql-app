import { ObjMap } from 'graphql/jsutils/ObjMap';
import {
  GraphQLField,
  GraphQLFieldMap,
  GraphQLInputFieldMap,
  GraphQLNamedType,
  GraphQLObjectType,
  GraphQLOutputType,
  GraphQLInputObjectType,
  GraphQLInterfaceType,
  GraphQLType,
} from 'graphql';
import { Role } from './enum';

export type FieldName = 'email' | 'password';

export type FieldsType = Record<string, GraphQLOutputType>;
export type Maybe<T> = undefined | T;

export type DevelopersData = {
  name: string;
  image: string;
  role: Role;
  github: string;
  about?: string;
  contribution: string[];
};

export type RootFieldType =
  | ObjMap<GraphQLNamedType>
  | GraphQLInputFieldMap
  | GraphQLFieldMap<unknown, unknown>;

export const getTemplateString = <T extends string>(
  key: T
): `GraphQL ${T} type` => `GraphQL ${key} type`;

type GetFieldsType =
  | GraphQLInterfaceType
  | GraphQLObjectType
  | GraphQLInputObjectType;

export const isGetFieldsType = (
  value: GraphQLType | GraphQLField<object, object>
): value is GetFieldsType => {
  return (
    value instanceof GraphQLInterfaceType ||
    value instanceof GraphQLObjectType ||
    value instanceof GraphQLInputObjectType
  );
};

export const isNonNull = <T>(value: T): boolean => {
  return value !== null && value !== undefined;
};

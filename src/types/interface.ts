import {
  GraphQLField,
  GraphQLFieldMap,
  GraphQLObjectType,
  GraphQLOutputType,
  GraphQLType,
  IntrospectionQuery,
} from 'graphql';
import { Maybe, RootFieldType } from './types';

export interface DataForm extends DataLogin {
  confirmPassword: string;
}

export interface DataLogin {
  email: string;
  password: string;
}

export interface IRootSchema {
  queries?: IQueries;
  fields: RootFieldType;
  types?: GraphQLOutputType;
}

export interface IQueries {
  name: GraphQLObjectType['name'];
  description: GraphQLObjectType['description'];
  fields: GraphQLFieldMap<object, object>;
}

export interface IQuery {
  data: IntrospectionQuery | null;
}

export interface EditorSectionProps {
  title: string;
}

export interface DataForm extends DataLogin {
  confirmPassword: string;
}

export interface DataLogin {
  email: string;
  password: string;
}

export interface DataType {
  api: string;
  query: string;
  variables: string;
  response: string;
  headers: object;
  info: string;
}

export interface User {
  isAuth: boolean;
}

export interface CustomSectionProps {
  title: string;
  attentionTranslation: string;
  initialActionValue: string;
}

export interface IFieldSchema {
  schema: Maybe<IRootSchema> | null;
  setRootSchema: (value: IRootSchema) => void;
}

export interface INextField {
  handleClick: (value: GraphQLType) => void;
  fieldName: string;
  fieldType: GraphQLOutputType | GraphQLField<unknown, unknown>;
}

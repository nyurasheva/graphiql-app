import { GraphQLField, GraphQLInputFieldMap, GraphQLNamedType } from 'graphql';
import { ObjMap } from 'graphql/jsutils/ObjMap';
import { getTemplateString, isGetFieldsType } from '../types/types';

const fillDescriptionFieldSchema = <
  T extends
    | ObjMap<GraphQLNamedType>
    | ObjMap<GraphQLField<object, object>>
    | GraphQLInputFieldMap,
>(
  fields: T
): T => {
  const data: Array<[string, GraphQLNamedType | GraphQLField<object, object>]> =
    Object.entries(fields);

  const updatedFields = data.map(([key, value]) => {
    if (!value.description) {
      const typedValue = value;
      typedValue.description = getTemplateString(key);
    }

    if (isGetFieldsType(value)) {
      const fields = value.getFields();
      fillDescriptionFieldSchema(fields);
    }

    return [key, value];
  });

  return Object.fromEntries(updatedFields);
};

export default fillDescriptionFieldSchema;

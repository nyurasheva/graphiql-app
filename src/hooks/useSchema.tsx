import { GraphQLNamedType, GraphQLObjectType, GraphQLSchema } from 'graphql';
import { Maybe } from 'graphql/jsutils/Maybe';
import { ObjMap } from 'graphql/jsutils/ObjMap';
import { useEffect, useState } from 'react';
import { IRootSchema } from '../types/interface';
import fillDescriptionFieldSchema from '../utils/fillDescriptionFieldSchema';

const useSchema = () => {
  const [schema, setSchema] = useState<Maybe<GraphQLSchema>>();
  const [rootSchema, setRootSchema] = useState<Maybe<IRootSchema>>();

  useEffect(() => {
    if (schema) {
      const queryType: Maybe<GraphQLObjectType> = schema.getQueryType()!;
      const namedTypes: ObjMap<GraphQLNamedType> = schema.getTypeMap();

      const filteredByNameTypes: ObjMap<GraphQLNamedType> = Object.fromEntries(
        Object.entries(namedTypes).filter(([key]) => !key.includes('_'))
      );

      const modifyRootSchema: IRootSchema = {
        queries: {
          name: queryType.name,
          description: queryType.description,
          fields: queryType.getFields(),
        },
        fields: fillDescriptionFieldSchema(filteredByNameTypes),
      };

      setRootSchema(modifyRootSchema);
    }
  }, [schema]);

  return {
    rootSchema,
    setSchema,
    setRootSchema,
  };
};

export default useSchema;

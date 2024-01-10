import {
  GraphQLArgument,
  GraphQLField,
  GraphQLList,
  GraphQLNamedType,
  GraphQLObjectType,
  GraphQLOutputType,
} from 'graphql';
import { Maybe } from 'graphql/jsutils/Maybe';
import { ReactNode, memo, useCallback } from 'react';
import { INextField } from '../../../types/interface';
import getArgsTypes from '../../../utils/getArgsTypes';

const isGraphQLField = (
  value: GraphQLField<unknown, unknown>
): value is GraphQLField<unknown, unknown> => {
  return 'args' in value && value.args instanceof Array;
};

const NextField = memo(({ fieldName, fieldType, handleClick }: INextField) => {
  const renderField = useCallback(
    (nameValue: string, typeValue: GraphQLOutputType) => (
      <div
        className="fieldSchema__title-content"
        onClick={() => {
          handleClick(typeValue);
        }}
      >
        {nameValue}
      </div>
    ),
    [fieldName, fieldType]
  );

  const getNameFromTypeList = (
    obj: GraphQLNamedType | GraphQLList<GraphQLOutputType>
  ): ReactNode => {
    if ('name' in obj) {
      return (
        <>
          <div
            className="fieldSchema__subtitle"
            onClick={() => {
              handleClick(obj);
            }}
          >
            {obj.name}
          </div>
        </>
      );
    } else if ('ofType' in obj) {
      return getNameFromTypeList(obj.ofType);
    } else {
      return null;
    }
  };

  const renderType = useCallback(
    (typeValue: GraphQLOutputType) => {
      if ('type' in typeValue && typeValue.type) {
        return <>{getNameFromTypeList(typeValue.type as GraphQLNamedType)}</>;
      }
      return null;
    },
    [fieldType]
  );

  const renderArgs = useCallback(
    (typeValue: GraphQLField<unknown, unknown>) => {
      if (isGraphQLField(typeValue)) {
        const lastArg = typeValue.args.length - 1;
        const isManyArgs = typeValue.args.length > 1;

        return (
          <>
            {typeValue.args.map((arg: GraphQLArgument, index: number) => (
              <span key={arg.name}>
                {index === 0 && '('}
                {arg.name}
                {getArgsTypes(arg.type, handleClick)}
                {isManyArgs && index !== lastArg && ','}
                {index === lastArg && ')'}
              </span>
            ))}
          </>
        );
      }

      return null;
    },
    [fieldType]
  );

  return (
    <>
      <div className="fieldSchema__title">
        {renderField(fieldName, fieldType as GraphQLOutputType)}
        {renderArgs(fieldType as GraphQLField<unknown, unknown>)}
        {renderType(fieldType as GraphQLOutputType)}
      </div>
      <p className="fieldSchema__description">
        {(fieldType as GraphQLObjectType)?.description as Maybe<string>}
      </p>
    </>
  );
});

export default NextField;

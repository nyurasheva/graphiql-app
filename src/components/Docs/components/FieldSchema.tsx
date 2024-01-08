import { ObjMap } from 'graphql/jsutils/ObjMap';
import {
  GraphQLField,
  GraphQLFieldMap,
  GraphQLInputField,
  GraphQLInputFieldMap,
  GraphQLLeafType,
  GraphQLNamedType,
  GraphQLOutputType,
  GraphQLType,
} from 'graphql/type';
import { memo, useCallback, useEffect, useState } from 'react';
import { IFieldSchema, IRootSchema } from '../../../types/interface';
import { isGetFieldsType } from '../../../types/types';
import DetailedField from './DetailedField';
import NextField from './NextField';
import { useAppSelector } from '../../../store/types';

interface IHistoryState {
  state: ObjMap<GraphQLNamedType>[];
}

const hasElements = <T extends object>(el: T): boolean =>
  Array.isArray(el) && el.length > 1;

const FieldSchema = memo(({ schema, setRootSchema }: IFieldSchema) => {
  const { api } = useAppSelector((state) => state.request);

  const [isDescription, setIsDescription] = useState(false);
  const [history, setHistory] = useState<IHistoryState>({ state: [] });

  const getLastHistorySchema = useCallback(() => {
    if (hasElements(history.state)) {
      const modifyHistory = history.state.slice(0, history.state.length - 1);
      const lastElement = modifyHistory[modifyHistory.length - 1];
      setRootSchema({ fields: lastElement });
      setHistory({ state: modifyHistory });
      setIsDescription(false);
    }
  }, [history.state]);

  const handleClick = useCallback((value: GraphQLType) => {
    if (isGetFieldsType(value)) {
      const data = value.getFields();

      const modiFyData: IRootSchema = {
        fields: { ...data } as
          | GraphQLInputFieldMap
          | GraphQLFieldMap<unknown, unknown>,
      };

      setRootSchema(modiFyData);
      setIsDescription(false);
    } else if ('name' in value) {
      const modiFyData: IRootSchema = {
        fields: {
          [value.name]: { ...value } as unknown as GraphQLInputField,
        },
      };
      setRootSchema(modiFyData);
      setIsDescription(true);
    }
  }, []);

  useEffect(() => {
    if (!schema) {
      setIsDescription(false);
    } else {
      const isExist = Object.is(
        history.state[history.state.length - 1],
        schema.fields
      );

      if (!isExist) {
        setHistory((prevState) => {
          return {
            ...prevState,
            state: [
              ...prevState.state,
              schema.fields,
            ] as ObjMap<GraphQLNamedType>[],
          };
        });
      }
    }
  }, [schema]);

  useEffect(() => {
    setHistory({ state: [] });
  }, [api]);

  return (
    <>
      <button
        type="button"
        className="button button-transparent"
        onClick={getLastHistorySchema}
      >
        Go up
      </button>
      <ul className="fieldSchema-container">
        {schema &&
          Object.entries(schema.fields).map(
            ([fieldName, fieldType]: [
              string,
              GraphQLOutputType | GraphQLField<unknown, unknown>,
            ]) => (
              <li key={fieldName} className="fieldSchema__element">
                {isDescription ? (
                  <DetailedField value={fieldType as GraphQLLeafType} />
                ) : (
                  <NextField
                    handleClick={handleClick}
                    fieldName={fieldName}
                    fieldType={fieldType}
                  />
                )}
              </li>
            )
          )}
      </ul>
    </>
  );
});

export default FieldSchema;

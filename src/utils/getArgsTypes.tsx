import { GraphQLInputType } from 'graphql';
import { ReactNode } from 'react';

const getArgsTypes = (
  type: GraphQLInputType,
  handleClick: (type: GraphQLInputType) => void
): ReactNode => {
  if ('name' in type) {
    return (
      <>
        :
        <span className="fieldSchema__type" onClick={() => handleClick(type)}>
          {type.name}
        </span>
      </>
    );
  } else if ('ofType' in type) {
    return getArgsTypes(type.ofType, handleClick);
  } else {
    return null;
  }
};

export default getArgsTypes;

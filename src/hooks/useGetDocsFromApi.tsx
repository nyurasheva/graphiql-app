import { useCallback, useEffect, useState } from 'react';
import { IQuery } from '../types/interface';
import { getIntrospectionQuery } from 'graphql';
import { useAppSelector } from '../store/types';

const useGetDocsFromApi = () => {
  const [query, setQuery] = useState<IQuery>({ data: null });
  const { api, headers } = useAppSelector((state) => state.request);

  const getDocsData = useCallback(
    async <T extends string>(query: T): Promise<IQuery> => {
      const response: Response = await fetch(api, {
        method: 'POST',
        headers: { ...headers },
        body: JSON.stringify({ query }),
      });

      return response.json();
    },
    [api, headers]
  );

  useEffect(() => {
    setQuery({ data: null });

    const fetchDocs = async () => {
      try {
        const res: IQuery = await getDocsData(getIntrospectionQuery());

        setQuery(res);
      } catch (error) {
        console.info('error get docs');
      }
    };

    fetchDocs();
  }, [api, headers]);

  return { query };
};

export default useGetDocsFromApi;

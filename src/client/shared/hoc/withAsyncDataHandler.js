import { compose, withState, withHandlers } from 'recompose';

export default (actionName, fetchData) => compose(
  withState('isLoading', 'setIsLoading', false),
  withState('data', 'setData', null),
  withHandlers({
    [actionName]: ({ setIsLoading, setData }) => async () => {
      try {
        setIsLoading(true);
        const data = await fetchData();
        setData(data);
      } catch (error) {
        setData({ error: error.message });
      } finally {
        setIsLoading(false);
      }
    },
  }),
);

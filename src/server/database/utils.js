/* eslint-disable */
export const getInsertManyResult = ({ length }, { writeErrors}) => {
  
  // What the fuck am I doing and why cant I stop
  const getData = (key, data, errmsg, isDuplicate, predicate) => ({
    [key]: [
        ...data,
        ...predicate && isDuplicate ? [errmsg] : []
      ],
  })
  
  const { errors, duplicates } = writeErrors.reduce(({ errors, duplicates }, { code, errmsg }) => {
    const isDuplicate = code === 11000;
    return {
      ...getData('errors', errors, errmsg, isDuplicate, false),
      ...getData('duplicates', duplicates, errmsg, isDuplicate, true)
    }
  }, { errors: [], duplicates: []});

  return {
    added: length - writeErrors.length,
    duplicates: duplicates.length,
    errors: errors.length,
  };
};
/* eslint-disable */

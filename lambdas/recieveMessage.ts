export const handler = async (event, context) => {
  console.log('Flow triggered');

  console.debug('Messages', event.Records);

  console.log('Flow completed');
  return { statusCode: 200, Body: '' };
};

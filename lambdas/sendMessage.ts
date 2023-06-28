import { SQSClient, SendMessageCommand } from '@aws-sdk/client-sqs';

const client = new SQSClient({});

export const handler = async (event, context) => {
  console.log('Flow triggered');

  const input = {
    QueueUrl: process.env.QUEUE_URL,
    MessageBody: event.body,
  };
  const command = new SendMessageCommand(input);
  const response = await client.send(command);

  console.debug('SQS response', response);
  console.log('Message sent to SQS');

  console.log('Flow completed');
  return { statusCode: 200, Body: '' };
};

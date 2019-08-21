import { SessionsClient } from 'dialogflow';
import uuid from 'uuid';

export const getResponse = async message => {
  const sessionId = uuid.v4();

  const sessionClient = new SessionsClient({
    keyFilename: 'google.json',
  });

  const sessionPath = sessionClient.sessionPath(
    process.env.DIALOGFLOW_PROJECT_ID,
    sessionId
  );

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: message,
        languageCode: 'pt-BR',
      },
    },
  };

  const responses = await sessionClient.detectIntent(request);
  const { queryResult } = responses[0];

  return queryResult.fulfillmentText;
};

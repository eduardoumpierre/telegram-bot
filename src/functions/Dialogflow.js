import { SessionsClient } from 'dialogflow';
import uuid from 'uuid';

export const getResponse = async message => {
  const sessionId = uuid.v4();
  const projectId = process.env.DIALOGFLOW_PROJECT_ID;

  const credentials = {
    client_email: process.env.DIALOGFLOW_CLIENT_EMAIL,
    private_key: process.env.DIALOGFLOW_PRIVATE_KEY,
  };

  const sessionClient = new SessionsClient({
    projectId,
    credentials,
  });

  const sessionPath = sessionClient.sessionPath(projectId, sessionId);

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

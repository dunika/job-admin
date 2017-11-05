import { Router } from 'express';
import request from 'request-promise';
import { Facebook } from 'fb';

const facebookGraphUrl = 'https://graph.facebook.com/v2.10';

const getPermanentAccessToken = async (appId, appSecret, accessToken) => {
  const fb = new Facebook({ appId, appSecret, accessToken });
  const { access_token: longLivedToken } = await fb.api('oauth/access_token', {
    client_id: appId,
    client_secret: appSecret,
    fb_exchange_token: accessToken,
    grant_type: 'fb_exchange_token',
  });

  // const userId = await request(`${facebookGraphUrl}/me?access_token=${longLivedToken}`);

  const { id: userId } = await fb.api('/me', { access_token: longLivedToken });

  const { data } = await fb.api(`/${userId}/accounts`, { access_token: longLivedToken });

  return data.map(({ name, id, access_token }) => ({
    name,
    id,
    accessToken: access_token,
  }));
};


export const api = () => {
  const apiRoutes = Router();
  apiRoutes.use('/facebook', async (req, res, next) => {
    try {
      const token = await getPermanentAccessToken('441618609507054', 'e48497bb9e50a407d615baeffefa4818', 'EAAGRplhYiu4BAOZBWbRCaHZBjRLnviL9aYydrMCyhDqqZCIvcfABZA8ItoPx45T75wKQ3ZALfabyqGGggg0bpjkIZBwhoKcfRwEmODYhvZBzrYlQeZBgWjKshmUdx3Wk7TLUIRaehEKb3ppueqeI6ZBB7GZB2UuIHqMcWZCB3x4rNBZCS3ZAmZBcumd8bO432QTNUZCPunTlZB7l276r1gZDZD');
      res.json({ token });
    } catch (error) {
      next(error);
    }
  });

  return apiRoutes;
};

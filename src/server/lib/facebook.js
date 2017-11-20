import { Facebook as Fb } from 'fb';

import { Config } from 'server/database';
import cache from 'server/lib/cache';

const Facebook = () => {
  try {
    const config = cache.getAndSetAsync('facebookConfig', async () => {
      const { facebook } = await Config.findOne({}).lean();
      return facebook;
    });
    return new Fb(config);
  } catch (error) {
    throw error;
  }
};

export const getPermanentAccessToken = async (appId, appSecret, accessToken) => {
  const fb = new Facebook();
  const { access_token: longLivedToken } = await fb.api('oauth/access_token', {
    client_id: appId,
    client_secret: appSecret,
    fb_exchange_token: accessToken,
    grant_type: 'fb_exchange_token',
  });

  const { id: userId } = await fb.api('/me', { access_token: longLivedToken });

  const { data } = await fb.api(`/${userId}/accounts`, { access_token: longLivedToken });

  return data.map(({ name, id, access_token }) => ({
    name,
    id,
    accessToken: access_token,
  }));
};

export default Facebook;


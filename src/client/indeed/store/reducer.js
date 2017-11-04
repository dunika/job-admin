import { handleActions } from 'redux-actions';
import { createAsyncLeaf } from 'client/shared/utils';

import actions from './actions';

const initialState = {
  data: {
    '56b50c17e0dfea8c': {
      _id: '56b50c17e0dfea8c',
      source: 'Brightwater',
      sourceId: '56b50c17e0dfea8c',
      title: 'Field Sales Representative',
      description: 'Sales job- My client, a market leading global company in <b>hair</b> products, are currently looking for an energetic Field Sales Representative/Account Manager in the...',
      fullAddress: 'North Dublin, County Dublin',
      location: 'Dublin',
      urls: {
        nonSponsoredSource: 'https://ie.indeed.com/rc/clk?jk=56b50c17e0dfea8c',
        source: 'http://ie.indeed.com/pagead/clk?mo=r&ad=-6NYlbfkN0Aw1efAMzldDzpoIJt3dh-Ws43S30drXQ6jFQqkIis_u6RvgKGEFr6GER8jEVzYbGATvLOsZ2uaYXo-E0q2khXVmWgILgEHz9dQFsZmuo20yuHQr6KXXK9KT1o_664sLjdX6xq22qvFMJZ5k3bluu4c561HDvjMtBtTeeC0Mx-ZHllRfnQdZQOyMIV1FjsyGm-ki7eiIZMQ5zqbqj5UUTkuNH8amNLwRlQKfEjmNjgOUueGJ1TLgjHhDiGnLtrzyVnIjdUI_SH8X-m0Uf386ELvQDkEW7E9Vhuf7XgdbizsWoV2R18wrkZKO8bz50kLEX-VgQC9auhMQVmZ1gZiNqJaKq8BOgAgAvawtB5XL4c2EhwP-FOw5URNW2eTXbza61lhdb_JDrQRvJT4D_u244AMgR5k3oRdqIg7e0ubI691HvzfxtcDtavAIDYKr1wsTw4em5k5VsmPd5cUS5NueLJJZBvp7NMxEFWXxnhvbG2nWa90M9kQQIaULifctwRikwQraj5a-Gc13pEs0_0hWT0lwvnGpP6HVSrD_le9HGBOO2bt72kMKvigSvdDGA2VsWZaULP-_uS6CaPHesVYNaeTr9ax06o1bwsU7MBei0CUMKGbrfV0wV_w_yBeRnbZlKa7pdMqasjBewnw5lzm65N6M43-MCRL2qX6Hf1hseeaVpPVwxcYKTg18hU4qHA6rfOgw9HhB8AzIVB35gDBlu9mhNJKxVUi_KZedHywzNTdbwvpSC7xisZbQgtAH2WjmM2xtkQShOATshyJOhfUl6hZG9zaBMELAyGIifIrSvxU0B7SVeM_CRiGv_7Iv9URpfaFnMAtsbaJUfrxxvmuyNGcq83xHzEPJd9von45iec08Q==&p=0&rjs=1&atk=1btq37im80nkn7u7',
      },
      company: 'Brightwater',
      city: 'North Dublin',
      state: 'D',
      country: 'IE',
      language: 'en',
      location: 'Dublin',
      formattedLocation: 'North Dublin, County Dublin',
      date: 'Tue, 01 Aug 2017 13:16:14 GMT',
      url: 'http://ie.indeed.com/pagead/clk?mo=r&ad=-6NYlbfkN0Aw1efAMzldDzpoIJt3dh-Ws43S30drXQ6jFQqkIis_u6RvgKGEFr6GER8jEVzYbGATvLOsZ2uaYXo-E0q2khXVmWgILgEHz9dQFsZmuo20yuHQr6KXXK9KT1o_664sLjdX6xq22qvFMJZ5k3bluu4c561HDvjMtBtTeeC0Mx-ZHllRfnQdZQOyMIV1FjsyGm-ki7eiIZMQ5zqbqj5UUTkuNH8amNLwRlQKfEjmNjgOUueGJ1TLgjHhDiGnLtrzyVnIjdUI_SH8X-m0Uf386ELvQDkEW7E9Vhuf7XgdbizsWoV2R18wrkZKO8bz50kLEX-VgQC9auhMQVmZ1gZiNqJaKq8BOgAgAvawtB5XL4c2EhwP-FOw5URNW2eTXbza61lhdb_JDrQRvJT4D_u244AMgR5k3oRdqIg7e0ubI691HvzfxtcDtavAIDYKr1wsTw4em5k5VsmPd5cUS5NueLJJZBvp7NMxEFWXxnhvbG2nWa90M9kQQIaULifctwRikwQraj5a-Gc13pEs0_0hWT0lwvnGpP6HVSrD_le9HGBOO2bt72kMKvigSvdDGA2VsWZaULP-_uS6CaPHesVYNaeTr9ax06o1bwsU7MBei0CUMKGbrfV0wV_w_yBeRnbZlKa7pdMqasjBewnw5lzm65N6M43-MCRL2qX6Hf1hseeaVpPVwxcYKTg18hU4qHA6rfOgw9HhB8AzIVB35gDBlu9mhNJKxVUi_KZedHywzNTdbwvpSC7xisZbQgtAH2WjmM2xtkQShOATshyJOhfUl6hZG9zaBMELAyGIifIrSvxU0B7SVeM_CRiGv_7Iv9URpfaFnMAtsbaJUfrxxvmuyNGcq83xHzEPJd9von45iec08Q==&p=0&rjs=1&atk=1btq37im80nkn7u7',
      onmousedown: 'indeed_clk(this,\'2198\');',
      jobkey: '56b50c17e0dfea8c',
      sponsored: true,
      expired: false,
      indeedApply: false,
      formattedRelativeTime: '30+ days ago',
      stations: '',
    },
    cb8e46157f9db017: {
      _id: 'cb8e46157f9db017',
      source: 'Derrycourt Cleaning Specialists',
      sourceId: 'cb8e46157f9db017',
      title: 'Part Time Cleaning Operative - North Dublin Region',
      description: 'Shower trays washed and dried and gullies cleaned and checked for <b>hair</b> etc. Part Time Cleaning Operative - North Dublin Region Posted on:....',
      fullAddress: 'Ireland',
      urls: {
        nonSponsoredSource: 'https://ie.indeed.com/rc/clk?jk=cb8e46157f9db017',
        source: 'http://ie.indeed.com/pagead/clk?mo=r&ad=-6NYlbfkN0Aw1efAMzldDzpoIJt3dh-Ws43S30drXQ6jFQqkIis_u6RvgKGEFr6GER8jEVzYbGCg6UexhbO2X7MgVtbq_cIWzgpwoksZE_D5FjzYoqnPX5iauLAR6It2-rPhIyMEW2mo6ROfHtI4hgscq6rhWzh6UivnV_PdRfDCRgCmbh5sp5Mn1hBU39OdDmQC2JbU5ANXOKqHTrJYCbQSi5ZolBL0boFC_a0hsmS_qTt0gcJIzX6Fn_QXaEJ_8CN6zRcOFRIJ4i2H09O1YfUpq-VpONWSTV8oXVjdVv5lgzgdfjh9mhTdtjC39J8q9FBRBkGHRK-e9mdtVZI9ABk0ilWa3jaIHkC4lVkz6TlNrO939Sufku69VrGQXKJkxgUPIOlEyeIojA5b-wDVqa3v4HhYbBVpUxQtzakvKJgCtjhK1fa5fI-47eoOvEaYvpujP9YVRW8c0pW02P_YGFPKiRuDwXxsUT3OGnqfK_NAf6YbYyP74PnXGkoe10YAc9rEKC_csMdz7fyB9fqsJiTbquJV3lBMoiOfEAwSuby4jwj79fuyHkBt29IilTPRIM8dzgeC96b8mzOEdAyjE0Okja6TWeib1Zdj-EDeq2qWHnwHftuOFV2YCjQs4ioyM-5IcF3Gm7dHzMYbfPsZ5G4evw_WZ7RTFJWVI_MlYA5rMqC00moLJaf0MmPgcmjZUc88AVq5Tc5Agk2jo_uZ-CKhUk1rlCPwjw3SL6v3JyDtHIJL0wxpUyPJFxua-FiI6qToH_c3p7pZthqYqI8VTA6ddSnOowzTjBr4g_lIg-CymnCh4GVPbr6P3JuByjvgTA78qLL-Kvg5Xzk15lSYjergj1VT1PuRJJFEK5z6S4LeACD3cJM6OoERK6lO2Udr&p=1&rjs=1&atk=1btq37im80nkn7u7',
      },
      company: 'Derrycourt Cleaning Specialists',
      city: '',
      state: '',
      country: 'IE',
      language: 'en',
      formattedLocation: 'Ireland',
      date: 'Thu, 21 Sep 2017 16:44:41 GMT',
      url: 'http://ie.indeed.com/pagead/clk?mo=r&ad=-6NYlbfkN0Aw1efAMzldDzpoIJt3dh-Ws43S30drXQ6jFQqkIis_u6RvgKGEFr6GER8jEVzYbGCg6UexhbO2X7MgVtbq_cIWzgpwoksZE_D5FjzYoqnPX5iauLAR6It2-rPhIyMEW2mo6ROfHtI4hgscq6rhWzh6UivnV_PdRfDCRgCmbh5sp5Mn1hBU39OdDmQC2JbU5ANXOKqHTrJYCbQSi5ZolBL0boFC_a0hsmS_qTt0gcJIzX6Fn_QXaEJ_8CN6zRcOFRIJ4i2H09O1YfUpq-VpONWSTV8oXVjdVv5lgzgdfjh9mhTdtjC39J8q9FBRBkGHRK-e9mdtVZI9ABk0ilWa3jaIHkC4lVkz6TlNrO939Sufku69VrGQXKJkxgUPIOlEyeIojA5b-wDVqa3v4HhYbBVpUxQtzakvKJgCtjhK1fa5fI-47eoOvEaYvpujP9YVRW8c0pW02P_YGFPKiRuDwXxsUT3OGnqfK_NAf6YbYyP74PnXGkoe10YAc9rEKC_csMdz7fyB9fqsJiTbquJV3lBMoiOfEAwSuby4jwj79fuyHkBt29IilTPRIM8dzgeC96b8mzOEdAyjE0Okja6TWeib1Zdj-EDeq2qWHnwHftuOFV2YCjQs4ioyM-5IcF3Gm7dHzMYbfPsZ5G4evw_WZ7RTFJWVI_MlYA5rMqC00moLJaf0MmPgcmjZUc88AVq5Tc5Agk2jo_uZ-CKhUk1rlCPwjw3SL6v3JyDtHIJL0wxpUyPJFxua-FiI6qToH_c3p7pZthqYqI8VTA6ddSnOowzTjBr4g_lIg-CymnCh4GVPbr6P3JuByjvgTA78qLL-Kvg5Xzk15lSYjergj1VT1PuRJJFEK5z6S4LeACD3cJM6OoERK6lO2Udr&p=1&rjs=1&atk=1btq37im80nkn7u7',
      onmousedown: 'indeed_clk(this,\'2198\');',
      jobkey: 'cb8e46157f9db017',
      sponsored: true,
      expired: false,
      indeedApply: true,
      formattedRelativeTime: '30+ days ago',
      stations: '',
    },
  },
  error: null,
  isLoading: false,
};


export default handleActions({ // TODO: research lodash methods for making this easier
  [actions.search]: createAsyncLeaf((state, { payload }) => ({
    data: payload,
  })),
  [actions.postJobToWordpress]: createAsyncLeaf(({ data }, { payload }) => ({
    data: {
      ...data,
      [payload.sourceId]: payload,
    },
  })),
}, initialState);


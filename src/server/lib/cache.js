const store = {};

const get = key => store[key];

const set = (key, data) => {
  store[key] = data;
};

const remove = (key) => {
  delete store[key];
};

const getAndSet = (key, getter) => {
  if (!store[key]) {
    store[key] = getter();
  }
  return store[key];
};

const getAndSetAsync = async (key, getter) => {
  if (!store[key]) {
    try {
      store[key] = await getter();
    } catch (error) {
      throw error;
    }
  }
  return store[key];
};

export default {
  get,
  set,
  remove,
  getAndSet,
  getAndSetAsync,
};

if (process.env.NODE_ENV !== 'production') {
  module.exports = {
    baseUrl: 'http://localhost:3000',
    cvLibraryApi: 'http://www.cv-library.co.uk/cgi-bin/feed.xml?affid=102765&roi=1',
    createPost: {
      url: 'http://localhost/wp-admin/admin-ajax.php',
      action: 'post_job',
    },
    database: 'mongodb://localhost/your-future-self-test',
  };
} else {
  module.exports = {
    baseUrl: process.env.BASE_URL,
    cvLibraryApi: 'http://www.cv-library.co.uk/cgi-bin/feed.xml?affid=102765&roi=1',
    createPost: {
      url: process.env.CREATE_POST_URL,
      action: process.env.CREATE_POST_ACTION,
    },
    database: process.env.MONGODB_URI,
  };
}

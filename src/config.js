module.exports = {
  baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  cvLibraryApi: 'http://www.cv-library.co.uk/cgi-bin/feed.xml?affid=102765&roi=1',
  createPost: {
    url: process.env.CREATE_POST_URL || 'http://localhost/wp-admin/admin-ajax.php',
    action: process.env.CREATE_POST_ACTION || 'post_job',
  },
  database: process.env.MONGODB_URI || 'mongodb://localhost/your-future-self-test',
};


'use strict';

module.exports = {
  baseUrl: 'http://localhost:3000',
  cvLibraryApi: 'http://www.cv-library.co.uk/cgi-bin/feed.xml?affid=102765&roi=1',
  createPost: {
    url: 'http://localhost/wp-admin/admin-ajax.php',
    // url: 'https://www.jobalert.ie/wp-admin/admin-ajax.php',
    action: 'post_job'
  },
  database: 'mongodb://localhost/your-future-self-test'
};
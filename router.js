const url = require('url');

function Router() {}

Router.prototype.route = function(request, response) {
  const parsedUrl = url.parse(request.url);

  if (parsedUrl.pathname === '/health-check') {
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify({ "server-healthy": true }));
  } else {
    response.writeHead(404, {
      'Content-Type': 'text/html'
    });
    response.end('<h1>404, Page not found</h1>')
  }
};

module.exports = Router;

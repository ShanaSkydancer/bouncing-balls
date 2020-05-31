import url from 'url';

export class Router {

  constructor () {}

  route (req, res) {
    const parsedUrl = url.parse(req.url);

    if (parsedUrl.pathname === '/health-check') {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ "server-healthy": true }))
    } else {
      res.writeHead(404, {
        'Content-Type': 'text/html'
      });
      res.end('<h1>404, Page not found</h1>')
    }
  }
}

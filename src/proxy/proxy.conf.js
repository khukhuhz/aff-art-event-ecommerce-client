// {
//   "proxy": "ncproxy",
//   "port": "8080",
//   "target": "https://m-service-qual-we3-ap3.bnpparibas.net",
//   "context": ["/content/dam/app/**", "/demat-wspl/rest/**", "/econsentement-wspl/rpc/**"]
// }

var defaultTarget = 'http://e-commerce-api.eu-west-3.elasticbeanstalk.com/';
module.exports = [
{
   context: ['/api/**'],
   target: defaultTarget,
   changeOrigin: true,
}
];

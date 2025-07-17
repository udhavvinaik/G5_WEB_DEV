const dns = require('node:dns');

// dns.lookup('google.com', (err, address, family) => {
//   console.log('address: %j family: IPv%s', address, family);
// });
// address: "2606:2800:21f:cb07:6820:80da:af6b:8b2c" family: IPv6

dns.resolve4('chitkara.edu.in', (err, addresses) => {
  if (err) throw err;

  console.log(`addresses: ${JSON.stringify(addresses)}`);

  addresses.forEach((a) => {
    dns.reverse(a, (err, hostnames) => {
      if (err) {
        throw err;
      }
      console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`);
    });
  });
});

let data = JSON.stringify({
  query: `query Rockets {
    rockets {
      active
      description
      name
      success_rate_pct
      wikipedia
      id
    }
  }`
});

export let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://spacex-production.up.railway.app/',
  headers: {
    'Content-Type': 'application/json'
  },
  data: data
};


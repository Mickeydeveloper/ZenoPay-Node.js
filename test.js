// Use ES module import
import axios from 'axios';

// API endpoint
const url = 'https://zenoapi.com/api/payments/mobile_money_tanzania';

// Data to be sent
const data = {
  order_id: '3rer407fe-3ee8-4525-456f-ccb95de38250', // must be unique (UUID recommended)
  buyer_name: 'Mickey',
  buyer_phone: '0612130873', // Tanzanian format 07XXXXXXXX
  buyer_email: 'mickidadyhamza@gmail.com',
  amount: 2000,
  webhook_url: 'https://example.com/webhook' // optional, for status updates
};

// Send POST request to the Zeno API
axios.post(url, data, {
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': '_-9POfDu-1GiUe0nRi2BfSBnU6NYgh_NSTKtAu_Oz8kvvOne6EE3TFXsx0eubdpZTVqQDca4HFZ16nohLUJHog'  // Replace with your actual API key
  }
})
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.response ? error.response.data : error.message);
  });

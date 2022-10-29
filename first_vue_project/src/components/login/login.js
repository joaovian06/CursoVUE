import axios from 'axios';

export default {
  name: 'loginComponent',
  mounted() {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response))
  }
};
const axios = require('axios');

const functions = {
    fetchUser: () => 
        axios
            .get('backend/http.js')
            .then(res => res.data)
            .catch(err => 'error')
}

module.exports = functions;
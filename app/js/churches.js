/**
 * Created by salvadorguzman on 1/30/17.
 */
let rp = require('request-promise');
rp.debug = true;

let ucc = {
    getChurches(lat, long){
        const options = {
            method: 'POST',
            uri: 'http://uccwebservices.ucc.org/Mapping/FindAChurch.asmx/GetChurches',
            body: JSON.stringify({latitude: lat, longitude: long, numchurches: 1000, miles: 10000, ONA_only: false}),
            headers: {
                'Host': 'uccwebservices.ucc.org',
                'Connection': 'keep-alive',
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'Origin': 'https://uccwebservices.ucc.org',
                'X-Requested-With': 'XMLHttpRequest',
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 Safari/537.36',
                'Content-Type': 'application/json; charset=UTF-8',
                'DNT': '1',
                'Referer': 'https://uccwebservices.ucc.org/FindAChurch.aspx',
                'Accept-Encoding': 'gzip, deflate, br',
                'Accept-Language': 'en-US,en;q=0.8',
                'Cookie': 'ASP.NET_SessionId=t1mseotxvuvofkw3j1j3a3o0',
            },
            transform: JSON.parse,
            simple: true
        };

        return rp(options);
    },


};
// eslint-disable-next-line
import axios from 'axios';

class BlockchainService {
  constructor () {
    this._userId = 101;
    this._mediaId = 101;
  }

  initialize () {
    console.log('BlockchainService.initialize');
  }

  addView (numberViews) {
    const data = new URLSearchParams();
    data.append('user', 101);
    data.append('media', 101);
    data.append('date', '0318');
    data.append('country', 1);
    // const data = {
    //   user: 101,
    //   media: 101,
    //   date: '0318',
    //   country: 1
    // };
    const request = {
      url: 'http://localhost:3000/contract/watch',
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/x-www-form-urlencoded'
      // },
      data: data
    };
    for (let i = 0; i < numberViews; i++) {
      axios(request)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  countViews () {
    const request = {
      url: 'http://localhost:3000/contract/viewsMedia',
      method: 'GET',
      params: {
        media: 101,
        date: '0318'
      }
    };
    const promise = axios(request)
      .then(response => response.data)
      .catch((error) => {
        console.log(error);
        throw error;
      });

    return promise;
  }
}

export default new BlockchainService();

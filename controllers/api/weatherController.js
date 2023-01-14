import {
  weatherBaseUrl,
  weatherKey,
  weatherEndPoints,
} from '../../config/weather.js';
import axios from 'axios';
import mapResponse from '../../helpers/mapResponse.js';
import keyResource from '../../config/keyResource.js';

export default {
  current(req, res) {
    const { place } = req.query;
    const endPoint = weatherEndPoints.current;

    axios
      .get(`${weatherBaseUrl}/${endPoint}`, {
        params: {
          key: weatherKey,
          q: place,
          api: 'no',
        },
      })
      .then((response) => {
        const data = JSON.parse(JSON.stringify(response.data));
        const mappedKeys = mapResponse(keyResource, data);
        res.status(200).json({
          status: true,
          message: 'success',
          data: { newRecord: mappedKeys, oldRecord: response.data },
          error: [],
        });
      })
      .catch((error) => {
        res
          .status(200)
          .json({ status: false, message: 'failed', data: [], error: error });
      });
  },
  forecast(req, res) {
    const { place } = req.query;
    const endPoint = weatherEndPoints.forecast;

    axios
      .get(`${weatherBaseUrl}/${endPoint}`, {
        params: {
          key: weatherKey,
          q: place,
          api: 'no',
        },
      })
      .then((response) => {
        const data = JSON.parse(JSON.stringify(response.data));
        const mappedKeys = mapResponse(keyResource, data);
        res.status(200).json({
          status: true,
          message: 'success',
          data: { newRecord: mappedKeys, oldRecord: response.data },
          error: [],
        });
      })
      .catch((error) => {
        res
          .status(200)
          .json({ status: false, message: 'failed', data: [], error: error });
      });
  },
};

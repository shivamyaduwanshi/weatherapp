export default function mapResponse(keyResource, data, mappedKeys = {}) {
  for (let key in data) {
    if (typeof data[key] === 'object') {
      mapResponse(keyResource, data[key], mappedKeys);
    } else {
      if (keyResource[key]) {
        const newKey = keyResource[key];
        data[newKey] = data[key];
        delete data[key];
      }
    }
  }
  return data;
}

// export default function mapResponse(data, response) {
//   for (let key in data) {
//     if (typeof data[key] === 'object') {
//       mapResponse(data[key], response);
//     } else {
//       if (response[key]) {
//         const newKey = response[key];
//         data[newKey] = data[key];
//         delete data[key];
//       }
//     }
//   }
//   return data;
// }

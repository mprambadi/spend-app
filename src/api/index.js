import parseSpreadsheet from '../utils'

const baseUrl = (page) =>
  `https://spreadsheets.google.com/feeds/list/1EMBm-tlC8E_8sdohzKE4DELIgsYpC_zF91Fajcdg5lU/${page}/public/full?alt=json`;

const LIST_DATA = baseUrl(1);
const USER_ME = baseUrl(2);

export { LIST_DATA, USER_ME };

export default (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return parseSpreadsheet(data);
    })
    .catch((error) => {
      return error;
    });

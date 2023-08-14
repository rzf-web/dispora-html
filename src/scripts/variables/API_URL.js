/* ------------------------------------------------------------------------------
@name: API_URL
@description: API_URL
--------------------------------------------------------------------------------- */

const URL_BASE = $("body").attr("data-api");

export const API_URL = {
  news: `${URL_BASE}v1/news`,
  newsPage: function (page) {
    return `${URL_BASE}v1/news/${page}`;
  },
}

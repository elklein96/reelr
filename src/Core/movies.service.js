import qs from 'qs';

export function getMovies(query) {
  let route = '/api/movies';

  if (query) {
    route += `?${qs.stringify(query)}`;
  }

  return fetch(route)
    .then(res => res.json())
    .then(json => json.data)
    .catch((err) => {
      console.error('Failed to get movies with error:', err);
    });
}

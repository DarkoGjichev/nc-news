function fetchTopics() {
  return fetch(`https://seeding-nc-news-3h3w.onrender.com/api/topics`)
    .then((response) => {
      return response.json();
    })
    .catch((error) => error);
}

export default fetchTopics;

var api = {
  getBio(keyword){
    keyword = keyword.toLowerCase().trim();
    var url = `https://api.github.com/users/${keyword}`;
    var newUrl = fetch(url).then((res) => res.json())
    console.log(newUrl);
    return newUrl;
  },
  getDsms(keyword){
    keyword = keyword.toLowerCase().trim();
    var url = `https://api.github.com/users/${keyword}/repos`;
    return fetch(url).then((res) => res.json());
  }
};

module.exports = api;

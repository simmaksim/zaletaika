const articles = require("./statii.json");

export const getArticles = (page) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const offset = page * 4;
      resolve(Object.values(articles).slice(offset, offset + 4));
    }, 1500);
  });
};

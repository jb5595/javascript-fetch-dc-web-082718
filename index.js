const app = "I don't do much.";
const token = "ab8f2e1d170f0b65b77607d667969ff4d294de58"
fetch('https://api.github.com/user/repos',{
  headers: {
    Authorization: `token ${token}`
  }
}).
  then(res => res.json()).
  then(json => console.log(json))

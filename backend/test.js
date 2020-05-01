var chai = require("chai");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const expect = chai.expect;
const myLib = require("./app");


//test senRequest function
describe("senRequest Test with Chai", () => {
  it("should return news", async() => {
    //banckend method
    let url = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=coronavirus&sort=newest&api-key=R9BhjbbsANIBeNl4D3APslBtDBbfKDYt';
    let p = await myLib.sendRequest(url);
    back_res = JSON.parse(p);
    back_res = JSON.stringify(back_res);
    back_res = back_res.substring(0,20)


    //frontend method
    let req = new XMLHttpRequest();
    req.open("GET",'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=coronavirus&sort=newest&api-key=R9BhjbbsANIBeNl4D3APslBtDBbfKDYt',false);
    req.send();
    front_res = JSON.parse(req.responseText);
    front_res = JSON.stringify(front_res);
    front_res = front_res.substring(0,20)
    expect(back_res).to.equals(front_res);
  });
});


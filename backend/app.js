"use strict";

const express = require("express");
const app = express();
const http=require("http");
var request = require("request")
var rp = require("request-promise")




// We need cors middleware to bypass CORS security in browsers.
const cors = require("cors");

app.use(express.static("static"));
app.use(cors());

let port = 5000;


/**
 * A promise that resolves after t ms.
 * @param {Number} t
 */
const delay = function (t) {
  return new Promise((resolve) => setTimeout(resolve, t));
};

function sendRequest(url){
  console.log(url)
  let res = null
  return new Promise((resolve, reject)=>{
      http.get(url,(data)=>{
          var str="";
          data.on("data",(chunk)=>{
              str+=chunk;
          })
          data.on("end",()=>{
              //await ctx.send(1,str.toString())
              return resolve(str.toString())
          })
      })
  })
}


/**
 * The default path
 */
app.get("/", async function (req, res) {
  if (req.query && Object.keys(req.query).length > 0) {
    console.log("I got a query!");
    handleGet(res, res, req.query);
  }
});


app.listen(port, (err) => {
  console.log(`Listening on port: ${port}`);
});
//-----------------------------------------------------------------------------



/**
 * Handles a Get request
 * @param {Object} req
 * @param {Object} res
 * @param {Object} query
 */
async function handleGet(req, res, query) {
  let error = "NO_ERROR";
  let url;
  let keyword;
  let newsdata
  let from_date
  let to_date
  let sort

  console.log("query: ", JSON.stringify(query));

  // If there was a query (a query string was sent)
  if (
    query !== undefined &&
    query.keyword !== undefined &&
    query.from_date !== undefined &&
    query.to_date !== undefined &&
    query.sort !== undefined
  ) {
    keyword = query.keyword;
    from_date = query.from_date;
    to_date = query.to_date;
    sort = query.sort;
    url = `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&sort=${sort}&begin_date=${from_date}&end_date=${to_date}&api-key=R9BhjbbsANIBeNl4D3APslBtDBbfKDYt`;
    

    let newsdata = await sendRequest(url)
    newsdata = JSON.parse(newsdata)


    //  newsdata = sendRequest(url)
    console.log("newsdata: " , newsdata);

    //console.log("newsdata  string: " , outputnews);
    res.send(newsdata);
  } else {
    error = "ERROR: Keyword not provided";
  }



}


module.exports = {sendRequest : sendRequest};
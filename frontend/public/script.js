function initialize() {
  
  // Hide the search result in the beginning
  let search_result = document.getElementById("search_result");
  search_result.style.display = "none";

  // Hide the loader in the beginning
  let loader = document.getElementById("loader");
  loader.style.display = "none";

  showpopular();


}



function initializeWorld(){
    try{
    let req = new XMLHttpRequest();
    req.open("GET",'https://api.nytimes.com/svc/topstories/v2/world.json?api-key=R9BhjbbsANIBeNl4D3APslBtDBbfKDYt',false);
    req.send();
    data = JSON.parse(req.responseText);
    let world_news_title_array = ["World-news-1","World-news-2","World-news-3"];
    let world_news_content_array = ["World-news-1-content","World-news-2-content","World-news-3-content"];
    let world_news_date_array = ["World-news-1-date","World-news-2-date","World-news-3-date"];
    let world_news_image_array = ["World-news-1-image","World-news-2-image","World-news-3-image"];
    let world_news_link_array = ["World-news-1-link","World-news-2-link","World-news-3-link"];
    for(let i =0; i<world_news_title_array.length;i++){
        let world_news_title = document.getElementById(world_news_title_array[i]);
        world_news_title.innerHTML = data.results[i].title;
        let world_news_content = document.getElementById(world_news_content_array[i]);
        world_news_content.innerHTML = data.results[i].abstract;
        let world_news_date = document.getElementById(world_news_date_array[i]);
        world_news_date.innerHTML = data.results[i].updated_date.substring(0,10);
        let world_news_image = world_news_image_array[i];
        document.images.namedItem(world_news_image).src = data.results[i].multimedia[0].url;
        let world_news_link = world_news_link_array[i];
        document.getElementById(world_news_link).href = data.results[i].url;
    }
    }catch(error){
        console.log("error: ",error);
    }
}

function initializeSports(){
    try{
    let req = new XMLHttpRequest();
    req.open("GET",'https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=R9BhjbbsANIBeNl4D3APslBtDBbfKDYt',false);
    req.send();
    data = JSON.parse(req.responseText);
    let world_news_title_array = ["Sports-news-1","Sports-news-2","Sports-news-3"];
    let world_news_content_array = ["Sports-news-1-content","Sports-news-2-content","Sports-news-3-content"];
    let world_news_date_array = ["Sports-news-1-date","Sports-news-2-date","Sports-news-3-date"];
    let world_news_image_array = ["Sports-news-1-image","Sports-news-2-image","Sports-news-3-image"];
    let world_news_link_array = ["Sports-news-1-link","Sports-news-2-link","Sports-news-3-link"];
    for(let i =0; i<world_news_title_array.length;i++){
        let world_news_title = document.getElementById(world_news_title_array[i]);
        world_news_title.innerHTML = data.results[i].title;
        let world_news_content = document.getElementById(world_news_content_array[i]);
        world_news_content.innerHTML = data.results[i].abstract;
        let world_news_date = document.getElementById(world_news_date_array[i]);
        world_news_date.innerHTML = data.results[i].updated_date.substring(0,10);
        let world_news_image = world_news_image_array[i];
        document.images.namedItem(world_news_image).src = data.results[i].multimedia[0].url;
        let world_news_link = world_news_link_array[i];
        document.getElementById(world_news_link).href = data.results[i].url;
    }
    }catch(error){
        console.log("error: ",error);
    }
}

function initializeArts(){
    try{
    let req = new XMLHttpRequest();
    req.open("GET",'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=R9BhjbbsANIBeNl4D3APslBtDBbfKDYt',false);
    req.send();
    data = JSON.parse(req.responseText);
    let world_news_title_array = ["Arts-news-1","Arts-news-2","Arts-news-3"];
    let world_news_content_array = ["Arts-news-1-content","Arts-news-2-content","Arts-news-3-content"];
    let world_news_date_array = ["Arts-news-1-date","Arts-news-2-date","Arts-news-3-date"];
    let world_news_image_array = ["Arts-news-1-image","Arts-news-2-image","Arts-news-3-image"];
    let world_news_link_array = ["Arts-news-1-link","Arts-news-2-link","Arts-news-3-link"];
    for(let i =0; i<world_news_title_array.length;i++){
        let world_news_title = document.getElementById(world_news_title_array[i]);
        world_news_title.innerHTML = data.results[i].title;
        let world_news_content = document.getElementById(world_news_content_array[i]);
        world_news_content.innerHTML = data.results[i].abstract;
        let world_news_date = document.getElementById(world_news_date_array[i]);
        world_news_date.innerHTML = data.results[i].updated_date.substring(0,10);
        let world_news_image = world_news_image_array[i];
        document.images.namedItem(world_news_image).src = data.results[i].multimedia[0].url;
        let world_news_link = world_news_link_array[i];
        document.getElementById(world_news_link).href = data.results[i].url;
    }
    }catch(error){
        console.log("error: ",error);
    }
}

function initializeCoronavirus(){
    try{
    let req = new XMLHttpRequest();
    req.open("GET",'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=coronavirus&sort=newest&api-key=R9BhjbbsANIBeNl4D3APslBtDBbfKDYt',false);
    req.send();
    data = JSON.parse(req.responseText);
    let world_news_title_array = ["COVID-19-news-1","COVID-19-news-2","COVID-19-news-3"];
    let world_news_content_array = ["COVID-19-news-1-content","COVID-19-news-2-content","COVID-19-news-3-content"];
    let world_news_date_array = ["COVID-19-news-1-date","COVID-19-news-2-date","COVID-19-news-3-date"];
    let world_news_image_array = ["COVID-19-news-1-image","COVID-19-news-2-image","COVID-19-news-3-image"];
    let world_news_link_array = ["COVID-19-news-1-link","COVID-19-news-2-link","COVID-19-news-3-link"];
    let defualt_image =["https://cdnph.upi.com/svc/sv/upi/2661584894502/2020/1/d38f940315cbbe0c7483eb41611a429e/NY-reports-117-coronavirus-deaths-as-governors-call-for-federal-help.jpg",
    "https://media2.s-nbcnews.com/j/newscms/2020_11/3270616/200315-dulles-airport-coronavirus-cs-300p_4c66e49baf5d7621ad1e1a2f9db290ce.fit-2000w.jpg",
    "https://media1.s-nbcnews.com/j/newscms/2020_12/3275716/200318-times-square-coronavirus-ac-1123p_3c9f7f1cd678da2b3614ce488d2cc14a.fit-2000w.jpg"];
    let head = 'https://static01.nyt.com/';
    for(let i =0; i<world_news_title_array.length;i++){
        let world_news_title = document.getElementById(world_news_title_array[i]);
        world_news_title.innerHTML = data.response.docs[i].headline.main;
        let world_news_content = document.getElementById(world_news_content_array[i]);
        world_news_content.innerHTML = data.response.docs[i].abstract;
        let world_news_date = document.getElementById(world_news_date_array[i]);
        world_news_date.innerHTML = data.response.docs[i].pub_date.substring(0,10);
        let world_news_image = world_news_image_array[i];
        if(data.response.docs[i].multimedia[0] == undefined || data.response.docs[i].multimedia == undefined){
            document.images.namedItem(world_news_image).src = defualt_image[i];
        }
        else{
            let url_back = data.response.docs[i].multimedia[0].url;
            let url_full = head.concat(url_back);
            document.images.namedItem(world_news_image).src = url_full;
        }
        let world_news_link = world_news_link_array[i];
        document.getElementById(world_news_link).href = data.response.docs[i].web_url;
    }
    }catch(error){
        console.log("error: ",error);
    }
}

function initializeFavorite(){
  console.log("Initialize Favorite!")
  if(window.localStorage.getItem('favorite') == undefined || (JSON.parse(window.localStorage.getItem('favorite'))).length==0){
    console.log("no favorite")

    let display_array = ["favorite1","favorite2","favorite3"]
    for(let i = 0; i < 3; i++){       
      let favorite_off = document.getElementById(display_array[i]);
      favorite_off.style.display = 'none';}

    let nofavorite = document.getElementById("no_favorite");
    nofavorite.style.display = 'block';
    nofavorite.innerHTML = "No favorite. Go and collect more great news！";
  }
  else{
    console.log("display favorites")
    displayFavorites();
  }
    
}



initializeWorld();
initializeSports();
initializeArts();
initializeCoronavirus();
initializeFavorite();
initialize();


/***** add favorite *****/

document.getElementById("Favorite00").onclick = function () {
    addFavorite("Favorite00");
  };
  document.getElementById("Favorite01").onclick = function () {
    addFavorite("Favorite01");
  };
  document.getElementById("Favorite02").onclick = function () {
    addFavorite("Favorite02");
  };
  document.getElementById("Favorite10").onclick = function () {
    addFavorite("Favorite10");
  };
  document.getElementById("Favorite11").onclick = function () {
    addFavorite("Favorite11");
  };
  document.getElementById("Favorite12").onclick = function () {
    addFavorite("Favorite12");
  };
  document.getElementById("Favorite20").onclick = function () {
    addFavorite("Favorite20");
  };
  document.getElementById("Favorite21").onclick = function () {
    addFavorite("Favorite21");
  };
  document.getElementById("Favorite22").onclick = function () {
    addFavorite("Favorite22");
  };
  document.getElementById("Favorite30").onclick = function () {
    addFavorite("Favorite30");
  };
  document.getElementById("Favorite31").onclick = function () {
    addFavorite("Favorite31");
  };
  document.getElementById("Favorite32").onclick = function () {
    addFavorite("Favorite32");
  };

  //*** add favorite for search results */
  document.getElementById("Favorite40").onclick = function () {
    addFavorite("Favorite40");
  };

  document.getElementById("Favorite41").onclick = function () {
    addFavorite("Favorite41");
  };

  document.getElementById("Favorite42").onclick = function () {
    addFavorite("Favorite42");
  };

  //*** remove from favorite news */
  document.getElementById("Remove1").onclick = function () {
    removeFavorite("Remove1");
  };
  document.getElementById("Remove2").onclick = function () {
    removeFavorite("Remove2");
  };
  document.getElementById("Remove3").onclick = function () {
    removeFavorite("Remove3");
  };

  console.log(JSON.parse(window.localStorage.getItem('favorite')));




function displayFavorites(){
    try{
      console.log("display!")
      let nofavorite = document.getElementById("no_favorite");
      nofavorite.style.display = 'none';



      let all_news_favorite = ["MyFavorite-news-1","MyFavorite-news-2","MyFavorite-news-3"];
      let content_array = ["MyFavorite-news-1-content","MyFavorite-news-2-content","MyFavorite-news-3-content"];
      let date_array = ["MyFavorite-news-1-date","MyFavorite-news-2-date","MyFavorite-news-3-date"];
      let image_array = ["MyFavorite-news-1-image","MyFavorite-news-2-image","MyFavorite-news-3-image"];
      let link_array = ["MyFavorite-news-1-link","MyFavorite-news-2-link","MyFavorite-news-3-link"];
      let display_array = ["favorite1","favorite2","favorite3"]
      let favoriteArray = JSON.parse(window.localStorage.getItem('favorite'));
    
      console.log(favoriteArray);
      for(let i = 0; i < 3; i++){
        if(favoriteArray[i] != undefined){        
          let favorite_on = document.getElementById(display_array[i]);
          favorite_on.style.display = 'block';
          document.getElementById(all_news_favorite[i]).innerHTML = favoriteArray[i].title;
          document.getElementById(content_array[i]).innerHTML = favoriteArray[i].content;
          document.getElementById(date_array[i]).innerHTML = favoriteArray[i].date;
          document.images.namedItem(image_array[i]).src = favoriteArray[i].image;
          document.getElementById(link_array[i]).href = favoriteArray[i].link;
          console.log("display:",i)
        }else{
          let favorite_off = document.getElementById(display_array[i]);
          favorite_off.style.display = 'none';
          console.log("undisplay:",i)
      }

    }

    // if(favoriteArray.length < all_news_favorite.length){
    //     for(let i = favoriteArray.length; i < all_news_favorite.length; i++){
    //         document.getElementById(all_news_favorite[i]).innerHTML = "No Favorite News";
    //         document.getElementById(content_array[i]).innerHTML = "No Favorite News"
    //         document.getElementById(date_array[i]).innerHTML = "No Favorite News";
    //         document.images.namedItem(image_array[i]).src = "https://www.publicdomainpictures.net/pictures/30000/velka/plain-white-background.jpg";
    //         document.getElementById(link_array[i]).href = "#";
    //     }
    // }
}
catch (error) {
    console.log("error: ", error);
}
}


  function addFavorite(currFavorite){
      try{
    let all_news_favorite = ["Favorite00","Favorite01","Favorite02","Favorite10","Favorite11",
    "Favorite12","Favorite20","Favorite21","Favorite22","Favorite30","Favorite31","Favorite32","Favorite40","Favorite41","Favorite42"];
    let title_array = ["World-news-1","World-news-2","World-news-3","Sports-news-1","Sports-news-2","Sports-news-3",
    "Arts-news-1","Arts-news-2","Arts-news-3","COVID-19-news-1","COVID-19-news-2","COVID-19-news-3","search-news-1","search-news-2","search-news-3"];
    let content_array = ["World-news-1-content","World-news-2-content","World-news-3-content","Sports-news-1-content","Sports-news-2-content","Sports-news-3-content",
    "Arts-news-1-content","Arts-news-2-content","Arts-news-3-content","COVID-19-news-1-content","COVID-19-news-2-content","COVID-19-news-3-content","search-news-1-content","search-news-2-content","search-news-3-content"];
    let date_array = ["World-news-1-date","World-news-2-date","World-news-3-date","Sports-news-1-date","Sports-news-2-date","Sports-news-3-date",
    "Arts-news-1-date","Arts-news-2-date","Arts-news-3-date","COVID-19-news-1-date","COVID-19-news-2-date","COVID-19-news-3-date","search-news-1-date","search-news-2-date","search-news-3-date"];
    let image_array = ["World-news-1-image","World-news-2-image","World-news-3-image","Sports-news-1-image","Sports-news-2-image","Sports-news-3-image",
    "Arts-news-1-image","Arts-news-2-image","Arts-news-3-image","COVID-19-news-1-image","COVID-19-news-2-image","COVID-19-news-3-image","search-news-1-image","search-news-2-image","search-news-3-image"];
    let image_link = ["World-news-1-link","World-news-2-link","World-news-3-link","Sports-news-1-link","Sports-news-2-link","Sports-news-3-link",
    "Arts-news-1-link","Arts-news-2-link","Arts-news-3-link","COVID-19-news-1-link","COVID-19-news-2-link","COVID-19-news-3-link","search-news-1-link","search-news-2-link","search-news-3-link"];

    let index = 0;
    for(let i = 0; i < all_news_favorite.length; i++){
        if(currFavorite === all_news_favorite[i]){
            index = i;
        }
    }
        console.log("Adding to favorite!");
        let favoriteNews = [];
        if(window.localStorage.getItem('favorite') != undefined){
            favoriteNews = JSON.parse(window.localStorage.getItem('favorite'));
        }
        //console.log(favoriteNews);

        let obj = {
            title : document.getElementById(title_array[index]).innerHTML,
            content : document.getElementById(content_array[index]).innerHTML,
            date : document.getElementById(date_array[index]).innerHTML,
            image : document.getElementById(image_array[index]).src,
            link : document.getElementById(image_link[index]).href
        };
        while(favoriteNews.length > 2){
            favoriteNews.shift();
        }
        favoriteNews.push(obj);
        window.localStorage.setItem('favorite', JSON.stringify(favoriteNews));
        displayFavorites();
    }
    catch (error) {
        console.log("error: ", error);
    }
    
  }

  function removeFavorite(currRemove){
      try{
      let removeNews = ["Remove1","Remove2","Remove3"];
      let index = 0;
      for(let i = 0; i < removeNews.length; i++){
        if(currRemove === removeNews[i]){
          index = i;
            }
        }
    console.log(index);
    let favoriteNews = JSON.parse(window.localStorage.getItem('favorite'));
    favoriteNews.splice(index,1);
    console.log(favoriteNews);
    window.localStorage.setItem('favorite',JSON.stringify(favoriteNews));

    displayFavorites();

      }
      catch (error) {
        console.log("error: ", error);
    }
  }

  //window.localStorage.clear();


  function inputValidation(k,f,t){
    var d = new Date();
    var temp_t = new Date(t);
    var temp_f = new Date(f);
    console.log(temp_f.getTime());
    console.log(temp_t.getTime());
    if(temp_f.getTime() > temp_t.getTime() || temp_f.getTime() > d.getTime() || temp_t.getTime() > d.getTime()) {
        alert("Incorrect time");
        return false;
    }
    if(k.length == 0) return false;
    // console.log(d);
    d = new Date(d.getTime());
    // console.log(d);

    // var message = "You are trying to request results too far in the past. Your plan permits you to request articles as far back as "+  d.value+", but you have requested ";
    // var mes_tail = ". To extend this please upgrade to a paid plan.";
    // if(temp_t.getTime() < d.getTime()-30*24*60*60*1000){
    //     alert(message+t+mes_tail);
    //     return false;
    // }else if(temp_f.getTime() < d.getTime()-30*24*60*60*1000){
    //     alert(message+f+mes_tail);
    //     return false;
    // }
    

    return true;
}




  // *** search  **
document.getElementById("search").onclick = function () {
  search();
};

async function search() {
  console.log("In search!");

  // Set the mouse cursor to hourglass
  document.body.style.cursor = "wait";

  // Accessing the div that has random value
  let noti = document.getElementById("notification");
  noti.style.display = 'block';
  noti.innerHTML = "Please wait...";

  // Show the loader element (spinning wheels)
  let loader = document.getElementById("loader");
  loader.style.display = "inline-block";

  try{
      let keyword = document.getElementById("keyword").value;
      let from_date = document.getElementById("from_date").value;
      let to_date = document.getElementById("to_date").value;
      let sort = document.getElementById("sort")

      if(!inputValidation(keyword, from_date, to_date)) {
          document.body.style.cursor = "default";
          loader.style.display = "none";
          noti.innerHTML = "No result";   
          return;
      }
      let request = `http://127.0.0.1:5000/?keyword=${keyword}&from_date=${from_date}&to_date=${to_date}&sort=${sort.options[sort.selectedIndex].value}`;
      console.log("request: ", request);
      
      // Send an HTTP GET request to the backend
      const newsdata = await axios.get(request);

      console.log("search newsdata", newsdata)

      if (newsdata.data.response.docs.length == 0){
          noti.innerHTML = "No result";
          return;
      }

      //console.log("data.data: ", JSON.stringify(data.data, null, 2));
      document.body.style.cursor = "default";
      loader.style.display = "none";
      noti.style.display = 'none';
      search_result.style.display = "block";

      let defualt_image = "https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg";
      let head = 'https://static01.nyt.com/';
      let search_news_title_array = ["search-news-1","search-news-2","search-news-3"];
      let search_news_content_array = ["search-news-1-content","search-news-2-content","search-news-3-content"];
      let search_news_date_array = ["search-news-1-date","search-news-2-date","search-news-3-date"];
      let search_news_image_array = ["search-news-1-image","search-news-2-image","search-news-3-image"];
      let search_news_link_array = ["search-news-1-link","search-news-2-link","search-news-3-link"];
      for(let i =0; i<search_news_title_array.length;i++){
          let search_news_title = document.getElementById(search_news_title_array[i]);
          search_news_title.innerHTML = newsdata.data.response.docs[i].headline.main;
          let search_news_content = document.getElementById(search_news_content_array[i]);
          search_news_content.innerHTML = newsdata.data.response.docs[i].abstract;
          let search_news_date = document.getElementById(search_news_date_array[i]);
          search_news_date.innerHTML = newsdata.data.response.docs[i].pub_date.substring(0,10);
          let search_news_image = search_news_image_array[i];
          if(newsdata.data.response.docs[i].multimedia[0] == undefined || newsdata.data.response.docs[i].multimedia == undefined){
              document.images.namedItem(search_news_image).src = defualt_image;
          }
          else{
              let url_back = newsdata.data.response.docs[i].multimedia[0].url;
              let url_full = head.concat(url_back);
              document.images.namedItem(search_news_image).src = url_full;
          }
          let search_news_link = search_news_link_array[i];
          document.getElementById(search_news_link).href = newsdata.data.response.docs[i].web_url;

      }

      savesearchnum(keyword);
      showpopular();




  } catch (error) {
      console.log("error: ", error);
  }


}


  // *** clear  **
document.getElementById("clear").onclick = function () {
  clear();
};

function clear(){
  console.log("in clear!!")
  document.getElementById('keyword').value = '';
  setDate();
  search_result.style.display = "none";

}

function setDate(){
  var d = new Date();
  document.getElementById("to_date").valueAsDate = d;
  d = new Date(d.getTime()-7*24*60*60*1000);
  document.getElementById("from_date").valueAsDate = d;
}

  function savesearchnum(keyword){
    let flag = 0;
    for (var i=0; i<localStorage.length;i++){
        if(localStorage.key(i)==keyword){
            let prenum = parseInt(localStorage.getItem(keyword));
            prenum++;
            localStorage.setItem(keyword, prenum)
            flag = 1;
        }
    }
    if(flag == 0){localStorage.setItem(keyword, 1);}
    console.log("keyword: " ,keyword);
    console.log("searchtime: " ,JSON.parse(localStorage.getItem(keyword)));


}

  function showpopular(){
    let popid = ["popular-1","popular-2","popular-3"];
    for (var i=0; i<3;i++){
        if(localStorage.key(i)=="favorite"){
          continue;
        }
        if(localStorage.key(i)){
            document.getElementById(popid[i]).innerHTML = localStorage.key(i) + " " + JSON.parse(localStorage.getItem(localStorage.key(i)));  
        }
  
    }
    let pop = document.getElementById("popular-news");
    pop.style.display = "block";
}
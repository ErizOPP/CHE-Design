function fetchAuth () {
    // (A) URL & CREDENTIALS
    var url = "http://c1721991.ferozo.com/api/wp-json/wp/v2/posts",
        credentials = btoa("c1721991:dipiVAzi19");
   
    // (B) FETCH WITH HTTP AUTH
    fetch (url, {
      headers: { "Authorization": `Basic ${credentials}` }
    })
   
    // (C) SERVER RESPONSE
    .then(res => {
      if (res.status != 200) { throw new Error("Bad Server Response"); }
      return res.text();
    })
    .then(res => document.getElementById("demo").innerHTML = res)
   
    // (D) HANDLE ERRORS (OPTIONAL)
    .catch(err => console.error(err));
  }
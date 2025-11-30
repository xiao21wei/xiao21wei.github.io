var posts=["2025/11/29/build-guide/","2025/11/28/hello-world/","2025/04/09/update-list/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
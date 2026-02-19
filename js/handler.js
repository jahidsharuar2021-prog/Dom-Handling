console.log("handler file added");
  document.getElementById('btn-update-title')
    .addEventListener('click',function(){
       const pageTitleElement=document.getElementById('page-title');
       pageTitleElement.innerText='update page title text' 
    })
     document.getElementById('btn-login')
    .addEventListener('click',function(){
        const userInfo=document.getElementById('No-user');
        userInfo.innerText='user logged in successfully'
    })
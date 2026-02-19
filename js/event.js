console.log("external file");
//option 2 even handling
  function makeyellow(){
            document.body.style.backgroundColor ='yellow';
        }
        function makered(){
            document.body.style.backgroundColor ='red';
        }
// option 3 get element by id and then set onclick
   const btnMakeBlue=document.getElementById('btn-make-blue');
    //  console.log(btnMakeBlue);
     btnMakeBlue.onclick=function makeblue(){
        document.body.style.backgroundColor ='blue';
     }

     // option 3 different version
      const btnmakePurple =document.getElementById('btn-make-purple')
     btnmakePurple .onclick = makepurple;
     function makepurple (){
     document.body.style.backgroundColor ='purple';
     }
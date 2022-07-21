var x=$(".outer");
function myfunction()
{
  // alert("clicked");

    var pos=document.querySelector(".inner");

    var l=parseInt(pos.style.left);
      // alert(l);
    // var xx=parseInt(l);
    // alert(xx);
    if(l<=25)
    {
      pos.style.left=75+"px";
      $("body").css({"background-color":"black", "color":"white"});
    }

  else
  {
      pos.style.left=4+"px";
    $("body").css({"background-color":"white", "color":"black"});

  }


  }

x.on("click",myfunction);
// alert(x);

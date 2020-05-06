 var numcolors = 6;
 var colors = randomcolors(numcolors);

  var pick = pickcolor();
  var rgbdisplay = document.querySelector("#display");
  var sq= document.querySelectorAll(".square");
  rgbdisplay.textContent = pick;
  var div1 = document.querySelector("#d1");
  var h1 = document.querySelector("h1");
  var b1 = document.querySelector("#b1");
  var b2 = document.querySelector("#b2");
  var b3 = document.querySelector("#b3");
   for(var i=0 ; i<sq.length ; i++)
   {
   	  sq[i].style.background = colors[i];

   	  sq[i].addEventListener("click" , function()
   	  	{ var clicked = this.style.backgroundColor;
             if(clicked === pick)
             	{
             		matched(clicked);
                    div1.textContent = "correct";
                    b1.textContent = "play again?";
                    h1.style.backgroundColor= clicked;
                }
             else
             	{
                    this.style.backgroundColor = "#232323" ;
                    b1.textContent = "new colors";
                     div1.textContent = "try again";
                     }

   	  	});
   }
   b1.addEventListener("click" , function()
   {
      colors = randomcolors(numcolors);
       pick = pickcolor();
       rgbdisplay.textContent = pick;
       div1.textContent = "";
       h1.style.backgroundColor = "steelblue";
       for(var i=0 ; i<sq.length ; i++)
   {
   	  sq[i].style.background = colors[i]; }
   });

   b2.addEventListener("click" , function()
   	{
   		b2.classList.add("selected");
   		b3.classList.remove("selected");
   		 numcolors =3;
   		colors = randomcolors(numcolors);
       pick = pickcolor();
       rgbdisplay.textContent = pick;
       for(var i=0 ; i<sq.length ; i++)
       {
       	if(colors[i])
       	{sq[i].style.background = colors[i]; }
        else 
        {sq[i].style.display = "none"; }    
       }
   	});

   b3.addEventListener("click" , function()
   	{
   		b3.classList.add("selected");
   		b2.classList.remove("selected");
   		numcolors = 6;
   		colors = randomcolors(numcolors);
       pick = pickcolor();
       rgbdisplay.textContent = pick;
       for(var i=0 ; i<sq.length ; i++)
       {
       	sq[i].style.background = colors[i]; 
       	sq[i].style.display = "block"; 
       }
   	});
   function matched(color)
   {
        for (var i=0 ; i<colors.length ; i++)
        {
        	sq[i].style.backgroundColor = color;
        }
   }
   function pickcolor()
   {
   	 var random = Math.floor(Math.random() * colors.length);
   	 return colors[random];
   }
   function randomcolors(num)
   {
   	   var arr=[];
   	   for(var i=0 ; i<num ; i++)
   	   {
            arr.push(newcolors());
   	   }
   	   return arr;
   }
   function newcolors()
   {
   	  var r = Math.floor(Math.random()*256);
   	  var g = Math.floor(Math.random()*256);
   	  var b = Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
   }

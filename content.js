chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
          if (request.greeting == "hello"){
              
          var btn1 = document.createElement('input')
              btn1.value = "first";
              btn1.className = "firstB";
              btn1.type = 'submit';
              btn1.style.background = '#d4999b';
              btn1.style.position = 'fixed';
              btn1.style.width = '80px';
              btn1.style.height = '40px';
              btn1.style.border = 'none';
              btn1.style.borderRadius = '20px';
          var amaz = document.querySelector('.nav-fill');
              console.log(amaz); 
              amaz.appendChild(btn1); 
          }
         
         //var show = msglist.getAttribute("data-list-size");
         
 
         function sortUsingNestedText(parent, childSelector, keySelector) {
            var items = parent.children(childSelector).sort(function(a, b) {
                var vA = parseInt($(keySelector, a).text());
                var vB = parseInt($(keySelector, b).text());
                return (vA < vB) ? -1 : (vA > vB) ? 1 : 0;
            });
            parent.html(items);
            }               
  

            $(".firstB").click(function() {
                alert('works');
                sortUsingNestedText($('.s-search-results'), "div", "span.a-price-whole");
            });
            

  });

       

  
 

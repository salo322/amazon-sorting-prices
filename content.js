chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
          if (request.greeting == "hello"){
              
          let btn1 = document.createElement('input')
              btn1.value = "first";
              btn1.className = "firstB";
              btn1.type = 'submit';
              btn1.style.background = '#d4999b';
              btn1.style.position = 'fixed';
              btn1.style.width = '80px';
              btn1.style.height = '40px';
              btn1.style.border = 'none';
              btn1.style.borderRadius = '20px';
          let amaz = document.querySelector('.nav-fill');
              console.log(amaz); 
              amaz.appendChild(btn1); 
          }
         
         //var show = msglist.getAttribute("data-list-size");
         
 
         function sortUsingNestedText(parent, childSelector, keySelector) {
            let items = parent.children(childSelector).sort(function(a, b) {
                let vA = parseInt($(keySelector, a).text());
                let vB = parseInt($(keySelector, b).text());
                return (vA < vB) ? -1 : (vA > vB) ? 1 : 0;
            });
            parent.html(items);


            chrome.storage.local.set({key: items}, function() {
                console.log(items);
              });
            }  

  

            $(".firstB").click(function() {
                alert('works');
                sortUsingNestedText($('.s-search-results'), "div", "span.a-price-whole");
            });
            

  });

       

  
 

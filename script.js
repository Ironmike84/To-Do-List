
$(function addEvent(){

  //-------------------------------------------------Add Event listener to button
      let button = $('#button')
      $(button).click(function(){
          let li = $('<li></li>')
          
          let inputValue = $('input').val();
          let text = $('input').val();
          $('#list').append(li);
          $(li).append(text)
        $(li).attr('id', 'listItem')
        
          let crossOutButton = $('<button>X</button>');
          $(crossOutButton).attr("id", "button2")     
          $(li).append(crossOutButton);
         

                   if (inputValue === '') {
            $alert("You must write something!");
          } else {
            $('#list').append(li);
            $('#input').val('');
          }
          
          $('#list').click(function(e){
            let target = e.target
            $(target).addClass('strike')
             
             })
  

          $('button').on('click', function(e){
              target = e.target
              $(target).addClass('delete') + $(li).addClass('delete')
              
          })
          
      })
  
    //   function crossOut(){
    //     let li = $('#list li')
    //     li.toggleClass('strike');
    //   }
    //   li.on('dblclick', crossOut);      
  //--------------------------------------------------------  //2. Crossing out an item from the list of items:
   
 
    //     $('#list'||'.button2').dblclick(function(e){
    //           let target = e.target
    //           let li = $('#lid')
              
    //           $(".strike").addClass('delete');
    //           $(li).addClass('delete')
    //           console.log(li)
    //            })
       })
//   let li = $('li')
//        function crossOut(){
//         li.toggleClass('strike');
//       }
      
//       li.on('dblclick', crossOut);
  
  

  
  // If you get stuck, you can look below for the jQuery code. However, try yourself to convert the vanilla JS code provided to jQuery first.
  
  
  
  
  
  
  
  
    /*
  // jQuery Code
  //1. Adding a new item to the list:
  
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);
  
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      $('#list').append(li);
    }
  //2. Crossing an item out:
    function crossOut() {
      li.toggleClass("strike");
    }
  
    li.on("dblclick", function crossOut() {
      li.toggleClass("strike");
    });
  //3. Adding a delete button
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);
  
  //   crossOutButton.on("click", deleteListItem);
  //   function deleteListItem(){
  // 		li.addClass("delete")
  // 	}
     $('#list').sortable();
  */
  
  
  
  
  
  
  
  
  
  
  
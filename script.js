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
      
//----------------------------------------------------------------------------------------------------Input Check              
      if (inputValue === '') {
          $alert("You must write something!");
        } else {
            $('#list').append(li);
            $('#input').val('');
        }
//----------------------------------------------------------------------------------------------------STRIKE BUTTON        
        $('#list').click(function(e){
            let target = e.target
            $(target).addClass('strike')
            
        })
        
//---------------------------------------------------------------------------------------------------DELETE BUTTON
        $('button').on('click', function(e){
            target = e.target
            $(target).addClass('delete') + $(li).addClass('delete')  
        })  
    })    
})




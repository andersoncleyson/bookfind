$(document).ready(function(){	

    $("#myform").submit(function(){
 
          var search = $("#books").val();
          if(search == "")
          {
              alert("Please enter something in the field");
          }
          else{		
            var url = "";
            var img = "";
            var title = "";
            var author = "";
            var publisher = "";
            var description = "";
            var category = "";
            var buy = "";
 
          $.get("https://www.googleapis.com/books/v1/volumes?q=" + search,function(response){
 
           for(i=0;i<response.items.length;i++)
           {
            title=$('<h2 style="color:white">' + response.items[i].volumeInfo.title + '</h2>');  
            author=$('<p style="color:white">' + 'Autor: ' + response.items[i].volumeInfo.authors + '</p>');
            
            publisher=$('<p style="color:white">' + 'Editora: ' + response.items[i].volumeInfo.publisher + '</p>');
            description=$('<p style="color:white"><br>' + 'Resumo: <br>'+ response.items[i].volumeInfo.description + '</p>');
            category=$('<p style="color:white">' + 'Categoria: ' + response.items[i].volumeInfo.categories + '</p>');
            

            img = $('<img><br><a href=' + response.items[i].volumeInfo.infoLink + '><button>Leia +</button></a>'); 	
            
            url= response.items[i].volumeInfo.imageLinks.thumbnail;

            img.attr('src', url);
            
            
            title.appendTo('#result');
            author.appendTo('#result');
            publisher.appendTo('#result');
            category.appendTo('#result');
            description.appendTo('#result');
            img.appendTo('#result');
            
            
           }
          });
       
       }
       return false;
    });
 
 });
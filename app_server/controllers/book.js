
var booksArray=[
    {
    name:"HOUNDS OF THE BASKERVILLE",genre:"Detective"
  },
  {
    name:"THE DA VINCI CODE",genre:"Drama"
  },
  {
  name:"THE COLOUR OF MAGIC",genre:"Comedy"
  }];
  

  
  
  
  const book = function(req, res){
      res.render('list-display', { books: booksArray });
    };
    
  
  
  
    
  
  
    module.exports = {
        book    
    };
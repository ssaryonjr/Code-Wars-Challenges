let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  


  function multiply(obj){
      for (let key in obj){
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
          }
      }
  }

  multiply(menu)
  console.log(menu)
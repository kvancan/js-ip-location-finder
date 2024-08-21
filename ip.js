function ip(){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      id = document.getElementById('input_id').value;
      console.log(id)


        $.ajax({url:"https://get.geojs.io/v1/ip/country/"+id+".json", success: function(result){
          $("#output").html(result.name);
          
        }});

}
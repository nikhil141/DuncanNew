$(document).ready(function (e){
    

$("#contactUs").on('submit',(function(e){


e.preventDefault();


$.ajax({

url: "include/contact.php",

type: "POST",

data:  new FormData(this),

contentType: false,

cache: false,

processData:false,

success: function(data){

if(data == 'true'){
alert("Thank you for contacting us one of our colleague will get back to you soon.");
document.getElementById('error').value='';
document.getElementById('contactUs').value='';
location.reload();
 
}else{
    document.getElementById('error').innerHTML = data;
    
}
},

error: function(){} 	        

});

}));


$("#proEnquiry").on('submit',(function(e){


e.preventDefault();


$.ajax({

url: "include/pro-enquiry.php",

type: "POST",

data:  new FormData(this),

contentType: false,

cache: false,

processData:false,

success: function(data){

if(data == 'true'){
alert("Thank you for contacting us one of our colleague will get back to you soon.");
document.getElementById('error').value='';
document.getElementById('proEnquiry').value='';
location.reload();
 
}else{
    document.getElementById('error').innerHTML = data;
    
}
},

error: function(){} 	        

});

}));



$("#galleryEnquiry").on('submit',(function(e){


e.preventDefault();


$.ajax({

url: "include/pro-enquiry.php",

type: "POST",

data:  new FormData(this),

contentType: false,

cache: false,

processData:false,

success: function(data){

if(data == 'true'){
alert("Thank you for contacting us one of our colleague will get back to you soon.");
document.getElementById('g-error').value='';
document.getElementById('galleryEnquiry').value='';
location.reload();
 
}else{
    document.getElementById('g-error').innerHTML = data;
    
}
},

error: function(){} 	        

});

}));

$("#distEnquiry").on('submit',(function(e){


e.preventDefault();


$.ajax({

url: "include/dist-enquiry.php",

type: "POST",

data:  new FormData(this),

contentType: false,

cache: false,

processData:false,

success: function(data){

if(data == 'true'){
alert("Thank you for contacting us one of our colleague will get back to you soon.");
document.getElementById('error').value='';
document.getElementById('distEnquiry').value='';
location.reload();
 
}else{
    document.getElementById('error').innerHTML = data;
    
}
},

error: function(){} 	        

});

}));

});
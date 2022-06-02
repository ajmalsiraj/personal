$(document).ready(function(){
    $("#g-form").validate({
rules:{
    name:{
        required:true,
        minlength:4,
        maxlength:15
    },
    email:{
        required:true,
        email:true
    },
    mobile:{
        required:true,
        minlength:10,
        maxlength:10,
        number:true
    },
    message:{
        maxlength:60,
minlength:10
    }
},
messages:{
    name:{
    required:    "enter your name",
    minlength:"enter min 4 characters"
    }
  
}
    })
})
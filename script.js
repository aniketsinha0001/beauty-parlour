document.getElementById("bookingForm").addEventListener("submit",function(e){

e.preventDefault()

var name=document.getElementById("name").value
var phone=document.getElementById("phone").value
var service=document.getElementById("service").value
var date=document.getElementById("date").value

var msg="Appointment Booking%0AName: "+name+"%0APhone: "+phone+"%0AService: "+service+"%0ADate: "+date

window.open("https://wa.me/919999999998?text="+msg)

})

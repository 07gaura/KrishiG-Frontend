$(function(){
    $('#sidebarCollapse').on('click', function(){
        $('#sidebar, #content').toggleClass('active')
    })
    $('#pop-up').on('click', function(){
        $('#col-popup, #content').toggleClass('pop-visible')
    })
})

function clicking(event){
    $('#col-popup').toggleClass('pop-visible')
} 

function edit(id){
    var col1 = $('#'+id).find("td:eq(0)").text()
    var col2 =  $('#'+id).find("td:eq(1)").text()
    var col3 =  $('#'+id).find("td:eq(2)").text()
    var col4 =  $('#'+id).find("td:eq(3)").text()
    $('#col-popup').toggleClass('pop-visible')
    $("#id").val(id)
    $('#firstname').val(col1);
    $('#lastname').val(col2);
    $('#email').val(col3);
    $('#address').val(col4)
}


function pop_up_alert(id){
    if (id!=null){
        $('#yes').attr('href',"./delete/"+id)
    }
    
    $('#alert-popup').toggleClass('open-alert')
}
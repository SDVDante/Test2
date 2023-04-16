function windowSize(){
    if ($(window).width() < 461){
        document.getElementsByClassName("add_top")[0].textContent = "30 ВИДЖЕТОВ"
    } else {
        document.getElementsByClassName("add_top")[0].textContent = "ВИДЖЕТЫ"
    }

    if ($(window).width() < 461){
        document.getElementsByClassName("add_top")[3].textContent = "МЕСЯЦ AMOCRM"
    } else {
        document.getElementsByClassName("add_top")[3].textContent = "35 ДНЕЙ"
    }

    if ($(window).width() < 461){
        document.getElementsByClassName("ft_link")[8].textContent = "Благодарность клиентов"
    } else {
        document.getElementsByClassName("ft_link")[8].textContent = "Благодарственные письма"
    }
}

$(document).ready(function(){
	windowSize()
})

$(window).resize(function(){
	windowSize()
});
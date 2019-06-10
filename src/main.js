$(document).ready(function() {
	$('#pagepiling').pagepiling({
        direction: 'vertical',
        sectionsColor: ['#f2f2f2', '#4BBFC3', '#FAFAFF', '#FAFAFF','#4BBFC3'],
        anchors: ['home', 'about', 'skills','projects','contact'],
        menu: '#myMenu',
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': ['Inicio', 'Sobre mi', 'Habilidades', 'Proyectos','Contacto']
        },
    });
});
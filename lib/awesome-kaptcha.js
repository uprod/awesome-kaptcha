/**
*   awesome-kaptcha   
*
*   Author Laurent Guyard <lguyard@gmail.com>
*   (c) 2015 Laurent Guyard, ventiloman (ventiloman.fr)     
*           
*/
;(function($){
       
    var $kaptcha = $(this);
    var $html = $('.kaptcha');
    var $form = $('.kaptcha').parentsUntil('form').parent();
    var lang = $html.attr('data-lang') ? $html.attr('data-lang') : "EN";
    var elms = ['diamond', 'automobile', 'plane', 'heart', 'bus', 'star', 'bicycle'];
    var colors = ['green', 'blue', 'purple', 'red', 'black'];

    var elmsFR = ['diamant', 'automobile', 'avion', 'coeur', 'autobus', 'étoile', 'vélo'];
    var colorsFR = ['verte', 'bleue', 'violette', 'rouge', 'noire'];
    var selectFR = 'Veuillez sélectionner l\'objet <b>{P1}</b> de couleur <b>{P2}</b>';
    var errorFR = 'Sélection captcha incorrecte !';

    var elmsES = ['diamante', 'automobil', 'avion', 'corazon', 'bus', 'estrella', 'bicicleta'];
    var colorsES = ['verde', 'azul', 'púrpura', 'rojo', 'negro'];
    var selectES = 'Selecciona el dibujo <b>{P1}</b> de color <b>{P2}</b>';
    var errorES = 'Seleccion incorecta del captcha !';

    var elmsEN = ['diamond', 'automobile', 'plane', 'heart', 'bus', 'star', 'bicycle'];
    var colorsEN = ['green', 'blue', 'puple', 'red', 'black'];
    var selectEN = 'Please select <b>{P1}</b> in <b>{P2} color</b>';
    var errorEN = 'Incorrect captcha selection !';

    var choice = [];

    $html.append('<span></span>');
    $html.append('<div class="clearfix"></div>');

    for (var i = 0; i < 5; i++) {
        var n = Math.floor(Math.random()*elms.length);
        var c = Math.floor(Math.random()*colors.length);
        if (jQuery.inArray(''+n+'-'+c+'', choice) == -1){
            $html.append('<i class="fa fa-'+elms[n]+' '+colors[c]+' fa-2x" id="'+n+','+c+'"></i>');
            choice.push(''+n+'-'+c+'');
        }else{ --i;}
    };
    $html.append('<div class="clearfix"></div>');

    // selection du mod
    var x = Math.floor(Math.random()*choice.length);
    var q = choice[x].split('-');
    var elmsLG = eval('elms'+lang);
    var colorsLG = eval('colors'+lang);
    var selectLG = eval('select'+lang);
    var errorLG = eval('error'+lang);    
    var $selected;
    selectLG = selectLG.replace('{P1}', elmsLG[q[0]]);
    selectLG = selectLG.replace('{P2}', colorsLG[q[1]]);
    $('.kaptcha span').append(selectLG);

    $('.kaptcha i').on('click', function(){ 
        $('.kaptcha i').removeClass('selected');
        $(this).addClass('selected');
        $selected = $(this).attr('id');
    });

    // interception du submit
    $form.on('submit', function(){
        
        if(q == $selected)
            $form.submit();
        else
            alert(errorLG);
        event.preventDefault();
        return false;
    });

    /**************************************************/            
    
    var css = '.kaptcha i {float:left;margin:0 10px;background-color: #FFF;padding: 10px 5px;';
        css+= 'border: 2px solid #DDD;border-radius: 30px;';
        css+= 'width: 50px;height: 50px;text-align: center;}';
        css+= '.kaptcha i.green {color:#066D01;}';
        css+= '.kaptcha i.purple {color:#663399;}';
        css+= '.kaptcha i.red {color:#D43C00;}';        
        css+= '.kaptcha i.black {color:#000;}';
        css+= '.kaptcha i.blue {color:#0C338E;}';
        css+= '.kaptcha i.selected {border-color:#D43C00;}';
        css+= '.kaptcha i:hover {cursor:pointer;}';
        css+= '.kaptcha span {display:block;margin-bottom:10px;}';    
    
    var head = document.head;
    var style = document.createElement('style');
    style.type = 'text/css';
    if (style.styleSheet){
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }            
    head.appendChild(style);
    
    //$('body').append($html);
    

})(jQuery);

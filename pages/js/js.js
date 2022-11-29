$(document).ready(function(){
  $("#calculaRazones").click(function(e){
    llenaCampos();
  });
  
  $("#btnRanking").click(function(e){
    $("#modal-bodyRank").html('<canvas id="graficaRanking"></canvas>');

    const labels = [
      'Rápida',
      'Prueba del ácido',
      'Deuda total',
      'Rotación del interés ganado',
      'Rotacion del inventario',
      'Periodo de Cobranzas' ,
      'Rotacion del activo total' ,
      'Margen de Utilidad',
      'Rotación de los activos',
      'Rendimiento sobre el capital'];

    const dataset1 = {
      label: "Empresa 1",
      data: [
        $("#RRE1In").val(),
        $("#PA1In").val(),
        $("#RDT1In").val(),
        $("#RIG1In").val(),
        $("#RI1In").val(),
        $("#PPC1In").val(),
        $("#RAT1In").val(),
        $("#MU1In").val(),
        $("#RSA1In").val(),
        $("#RSC1In").val() ],
      borderColor: 'rgba(248, 37, 37, 0.8)',
      fill: false,
      tension: 0.1
    };

    const dataset2 = {
      label: "Empresa 2",
      data: [
        $("#RRE2In").val(),
        $("#PA2In").val(),
        $("#RDT2In").val(),
        $("#RIG2In").val(),
        $("#RI2In").val(),
        $("#PPC2In").val(),
        $("#RAT2In").val(),
        $("#MU2In").val(),
        $("#RSA2In").val(),
        $("#RSC2In").val() ],
      borderColor: 'rgba(69, 248, 84, 0.8)',
      fill: false,
      tension: 0.1
    };

    const dataset3 = {
      label: "Empresa 3",
      data: [
        $("#RRE3In").val(),
        $("#PA3In").val(),
        $("#RDT3In").val(),
        $("#RIG3In").val(),
        $("#RI3In").val(),
        $("#PPC3In").val(),
        $("#RAT3In").val(),
        $("#MU3In").val(),
        $("#RSA3In").val(),
        $("#RSC3In").val() ],
      borderColor: 'rgba(69, 140, 248, 0.8)',
      fill: false,
      tension: 0.1
    };

    const dataset4 = {
      label: "Empresa 4",
      data: [
        $("#RRE4In").val(),
        $("#PA4In").val(),
        $("#RDT4In").val(),
        $("#RIG4In").val(),
        $("#RI4In").val(),
        $("#PPC4In").val(),
        $("#RAT4In").val(),
        $("#MU4In").val(),
        $("#RSA4In").val(),
        $("#RSC4In").val() ],
      borderColor: 'rgba(245, 40, 145, 0.8)',
      fill: false,
      tension: 0.1
    };

    const dataset5 = {
      label: "Empresa 5",
      data: [
        $("#RRE5In").val(),
        $("#PA5In").val(),
        $("#RDT5In").val(),
        $("#RIG5In").val(),
        $("#RI5In").val(),
        $("#PPC5In").val(),
        $("#RAT5In").val(),
        $("#MU5In").val(),
        $("#RSA5In").val(),
        $("#RSC5In").val() ],
      borderColor: 'rgba(245, 245, 12, 0.8)',
      fill: false,
      tension: 0.1
    };

    //mayor es mejor
    var razonesRapidas       = [ $("#RRE1In").val() , $("#RRE2In").val() , $("#RRE3In").val() , $("#RRE4In").val() , $("#RRE5In").val() ];
    // mayor es mejor
    var pruebasAcidos        = [ $("#PA1In").val()  , $("#PA2In").val()  , $("#PA3In").val()  , $("#PA4In").val()  , $("#PA5In").val()  ];
    // mayor es mejor 
    var rDeudaTotal          = [ $("#RDT1In").val() , $("#RDT2In").val() , $("#RDT3In").val() , $("#RDT4In").val() , $("#RDT5In").val() ];
    // mayor es mejor
    var rotInteresGanado     = [ $("#RIG1In").val() , $("#RIG2In").val() , $("#RIG3In").val() , $("#RIG4In").val() , $("#RIG5In").val() ];
    // mayor es mejor
    var rotInventario        = [ $("#RI1In").val()  , $("#RI2In").val()  , $("#RI3In").val()  , $("#RI4In").val()  , $("#RI5In").val()  ];
    // menor es mejor
    var periodoPromCobranzas = [ $("#PPC1In").val() , $("#PPC2In").val() , $("#PPC3In").val() , $("#PPC4In").val() , $("#PPC5In").val() ];
    //mayor es mejor
    var rotActivoTotal       = [ $("#RAT1In").val() , $("#RAT2In").val() , $("#RAT3In").val() , $("#RAT4In").val() , $("#RAT5In").val() ];
    //mayor es mejor
    var margenUtilidad       = [ $("#MU1In").val()  , $("#MU2In").val()  , $("#MU3In").val()  , $("#MU4In").val()  , $("#MU5In").val()  ];
    //mayor es mejor
    var rendSobreActivos     = [ $("#RSA1In").val() , $("#RSA2In").val() , $("#RSA3In").val() , $("#RSA4In").val() , $("#RSA5In").val() ];
    //mayor es mejor
    var rendSobreCapital     = [ $("#RSC1In").val() , $("#RSC2In").val() , $("#RSC3In").val() , $("#RSC4In").val() , $("#RSC5In").val() ];



//  
    const graph = document.querySelector("#graficaRanking");
    const data = {
      labels: labels,
      datasets: [dataset1,dataset2,dataset3,dataset4, dataset5]
    };
    const config = {
      type: 'line',
      data: data,
    };
    new Chart(graph, config);
  });
  
});
function creaGrafica(valores){
  $("#modal-bodyGra").html('<canvas id="grafica"></canvas>');
  var labels = [
    $("#nEmp1").val().substring(0,10).toUpperCase(),
    $("#nEmp2").val().substring(0,10).toUpperCase(),
    $("#nEmp3").val().substring(0,10).toUpperCase(),
    $("#nEmp4").val().substring(0,10).toUpperCase(),
    $("#nEmp5").val().substring(0,10).toUpperCase()
  ];
  var graph = document.querySelector("#grafica");
  var datos = []
  switch (valores){
    case 1:
      var titulo="RAZON RAPIDA";
      datos.push($("#RRE1In").val(), $("#RRE2In").val(), $("#RRE3In").val(), $("#RRE4In").val(), $("#RRE5In").val());
      break;
    case 2:
      var titulo="PRUEBA DEL ACIDO";
      datos.push($("#PA1In").val(), $("#PA2In").val(), $("#PA3In").val(), $("#PA4In").val(), $("#PA5In").val());
      break;
    case 3:
      var titulo="RAZON DE LA DEUDA TOTAL";
      datos.push($("#RDT1In").val(), $("#RDT2In").val(), $("#RDT3In").val(), $("#RDT4In").val(), $("#RDT5In").val());
      break;
    case 4:
      var titulo="ROTACIN DEL INTERES GANADO";
      datos.push($("#RIG1In").val(), $("#RIG2In").val(), $("#RIG3In").val(), $("#RIG4In").val(), $("#RIG5In").val());
      break;
    case 5:
      var titulo="ROTACION DEL INVENTARIO";
      datos.push($("#RI1In").val(), $("#RI2In").val(), $("#RI3In").val(), $("#RI4In").val(), $("#RI5In").val());
      break;
    case 6:
      var titulo="PERIODO PROMEDIO DE COBRANZAS";
      datos.push($("#PPC1In").val(), $("#PPC2In").val(), $("#PPC3In").val(), $("#PPC4In").val(), $("#PPC5In").val());
      break;
    case 7:
      var titulo="ROTACION DEL ACTIVO TOTAL";
      datos.push($("#RAT1In").val(), $("#RAT2In").val(), $("#RAT3In").val(), $("#RAT4In").val(), $("#RAT5In").val());
      break; 
    case 8:
      var titulo="Margen de utilidad";
      datos.push($("#MU1In").val(), $("#MU2In").val(), $("#MU3In").val(), $("#MU4In").val(), $("#MU5In").val());
      break;
    case 9:
      var titulo="Rendimiento sobre los activos";
      datos.push($("#RSA1In").val(), $("#RSA2In").val(), $("#RSA3In").val(), $("#RSA4In").val(), $("#RSA5In").val());
      break; 
    case 10:
      var titulo="Rendimiento sobre el cpital";
      datos.push($("#RSC1In").val(), $("#RSC2In").val(), $("#RSC3In").val(), $("#RSC4In").val(), $("#RSC5In").val());
      break;          
  }
  $("#exampleModalLabelGrafica").html(titulo);

  const data = {
      labels: labels,
      datasets: [{
          label: ""+ titulo,
          data: [datos[0], datos[1], datos[2], datos[3], datos[4]],
          backgroundColor: 'rgba(205, 92, 92, 0.8)'
      }]
  };
  

  const config = {
      type: 'bar',
      data: data,
  };
  var myChart = new Chart(graph, config);
  
}

function cambiaEmpresa(emp){
  //this.value=this.value.toUpperCase();replaceChars(this.value,this);
  var valorAct = $("#nEmp"+emp).val();
  $("#exampleModalLabel"+emp).html(valorAct.toUpperCase());
  $("#thEM"+emp).html(valorAct.toUpperCase());
  $("#btnEM"+emp).html(valorAct.toUpperCase());
}
function llenaCampos(){
  for (var i = 1; i < 6; i++){
    //activo Circulante
    var actCirc = $("#actCirc"+i).val();
    
    //pasivo circulante
    var pasCirc = $("#pasCirc"+i).val();
    // pasivo total
    var pasTot = $("#pasTot"+i).val();
    // activo total
    var actTot = $("#actTot"+i).val();
    // inventario
    var inv = $("#inv"+i).val();
    // utilidad antes de impuestos e intereses
    var utilAII = $("#utilAII"+i).val();
    //gastos financieros
    var gastFin = $("#gastFin"+i).val();
    // ventas
    var ventas = $("#ventas"+i).val();
    // cuentas por cobrar
    var cuentPCobr = $("#cuentPCobr"+i).val();
    //ingreso neto
    var ingNeto = $("#ingNeto"+i).val();
    //utilidad neta
    var utlNeta = $("#utlNeta"+i).val();
    //capital contable
    var capCont = $("#capCont"+i).val();
  
    // ---------------------- fin de obtencion de datos -------------------------------------------------
  
    // ----------------------- calculo de razones -------------------------------------------------------

    //razon rapida
    if (actCirc && pasCirc){
      var RRE = actCirc / pasCirc;
      $("#RRE"+i).html(""+RRE.toFixed(3));
      $("#RRE"+i+"In").val(""+RRE.toFixed(3));
    }
    //prueba del acido
    if(actCirc && inv && pasCirc){
      var PA =  (actCirc-inv)/pasCirc;
      $("#PA"+i).html(""+PA.toFixed(3));
      $("#PA"+i+"In").val(""+PA.toFixed(3));
    }
    //razon de la deuda total
    if(pasTot && actTot){
      var RDT = pasTot / actTot;
      $("#RDT"+i).html(""+RDT.toFixed(3));
      $("#RDT"+i+"In").val(""+RDT.toFixed(3));
    }
    //Rotacion del interes ganado
    if(utilAII && gastFin){
      var RIG = utilAII / gastFin;
      $("#RIG"+i).html(""+RIG.toFixed(3));
      $("#RIG"+i+"In").val(""+RIG.toFixed(3));
    }
    //rotacion dle inventario 
    if(ventas && inv){
      var RI = ventas / inv;
      $("#RI"+i).html(""+RI.toFixed(3));
      $("#RI"+i+"In").val(""+RI.toFixed(3));
    }
    //periodo promedio de cobranzas
    if(ventas && cuentPCobr){
      var PPC = cuentPCobr / (ventas/360);
      $("#PPC"+i).html(""+PPC.toFixed(3));
      $("#PPC"+i+"In").val(""+PPC.toFixed(3));
    }
    //rotacion del activo total
    if(actTot && ventas){ 
      var RAT = ventas / actTot;
      $("#RAT"+i).html(""+RAT.toFixed(3));
      $("#RAT"+i+"In").val(""+RAT.toFixed(3));
    }
    //margen de utilidad
    if(ingNeto && ventas){
      var  MU = ingNeto / ventas;
      $("#MU"+i).html(""+MU.toFixed(3));
      $("#MU"+i+"In").val(""+MU.toFixed(3));
    }
    //Rendimiento sobre los activos 
    if(actTot && utlNeta){
      var RSA = utlNeta / actTot;
      $("#RSA"+i).html(""+RSA.toFixed(3));
      $("#RSA"+i+"In").val(""+RSA.toFixed(3));
    }
    // rendimiento sobre el capital
    if(capCont && ingNeto){
      var RSC = ingNeto/capCont;
      $("#RSC"+i).html(""+RSC.toFixed(3));
      $("#RSC"+i+"In").val(""+RSC.toFixed(3));
    }
  }
}


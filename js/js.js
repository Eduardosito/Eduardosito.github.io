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
    var razonesRapidas       = [{empresa: "Empresa 1", valor: $("#RRE1In").val()}, 
                                {empresa: "Empresa 2", valor: $("#RRE2In").val()} , 
                                {empresa: "Empresa 3", valor: $("#RRE3In").val()} , 
                                {empresa: "Empresa 4", valor: $("#RRE4In").val()} ,
                                {empresa: "Empresa 5", valor: $("#RRE5In").val()} ];
    // mayor es mejor
    var pruebasAcidos        = [{empresa: "Empresa 1", valor: $("#PA1In").val() }, 
                                {empresa: "Empresa 2", valor: $("#PA2In").val() } , 
                                {empresa: "Empresa 3", valor: $("#PA3In").val() } , 
                                {empresa: "Empresa 4", valor: $("#PA4In").val() } ,
                                {empresa: "Empresa 5", valor: $("#PA5In").val() } ];
    // mayor es mejor 
    var rDeudaTotal          = [{empresa: "Empresa 1", valor: $("#RDT1In").val()}, 
                                {empresa: "Empresa 2", valor: $("#RDT2In").val()} , 
                                {empresa: "Empresa 3", valor: $("#RDT3In").val()} , 
                                {empresa: "Empresa 4", valor: $("#RDT4In").val()} ,
                                {empresa: "Empresa 5", valor: $("#RDT5In").val()} ];
    // mayor es mejor
    var rotInteresGanado     = [{empresa: "Empresa 1", valor: $("#RIG1In").val()}, 
                                {empresa: "Empresa 2", valor: $("#RIG2In").val()} , 
                                {empresa: "Empresa 3", valor: $("#RIG3In").val()} , 
                                {empresa: "Empresa 4", valor: $("#RIG4In").val()} ,
                                {empresa: "Empresa 5", valor: $("#RIG5In").val()} ];
    // mayor es mejor
    var rotInventario        = [{empresa: "Empresa 1", valor: $("#RI1In").val() }, 
                                {empresa: "Empresa 2", valor: $("#RI2In").val() } , 
                                {empresa: "Empresa 3", valor: $("#RI3In").val() } , 
                                {empresa: "Empresa 4", valor: $("#RI4In").val() } ,
                                {empresa: "Empresa 5", valor: $("#RI5In").val() } ];
    // menor es mejor
    var periodoPromCobranzas = [{empresa: "Empresa 1", valor: $("#PPC1In").val()}, 
                                {empresa: "Empresa 2", valor: $("#PPC2In").val()} , 
                                {empresa: "Empresa 3", valor: $("#PPC3In").val()} , 
                                {empresa: "Empresa 4", valor: $("#PPC4In").val()} ,
                                {empresa: "Empresa 5", valor: $("#PPC5In").val()} ];
    //mayor es mejor
    var rotActivoTotal       = [{empresa: "Empresa 1", valor: $("#RAT1In").val()}, 
                                {empresa: "Empresa 2", valor: $("#RAT2In").val()} , 
                                {empresa: "Empresa 3", valor: $("#RAT3In").val()} , 
                                {empresa: "Empresa 4", valor: $("#RAT4In").val()} ,
                                {empresa: "Empresa 5", valor: $("#RAT5In").val()} ];
    //mayor es mejor
    var margenUtilidad       = [{empresa: "Empresa 1", valor: $("#MU1In").val() }, 
                                {empresa: "Empresa 2", valor: $("#MU2In").val() } , 
                                {empresa: "Empresa 3", valor: $("#MU3In").val() } , 
                                {empresa: "Empresa 4", valor: $("#MU4In").val() } ,
                                {empresa: "Empresa 5", valor: $("#MU5In").val() } ];
    //mayor es mejor
    var rendSobreActivos     = [{empresa: "Empresa 1", valor: $("#RSA1In").val()}, 
                                {empresa: "Empresa 2", valor: $("#RSA2In").val()} , 
                                {empresa: "Empresa 3", valor: $("#RSA3In").val()} , 
                                {empresa: "Empresa 4", valor: $("#RSA4In").val()} ,
                                {empresa: "Empresa 5", valor: $("#RSA5In").val()} ];
    //mayor es mejor
    var rendSobreCapital     = [{empresa: "Empresa 1", valor: $("#RSC1In").val()}, 
                                {empresa: "Empresa 2", valor: $("#RSC2In").val()} , 
                                {empresa: "Empresa 3", valor: $("#RSC3In").val()} , 
                                {empresa: "Empresa 4", valor: $("#RSC4In").val()} ,
                                {empresa: "Empresa 5", valor: $("#RSC5In").val()} ];

    
    var razonesRapidasTop = razonesRapidas.sort(function (a, b) {  return a.valor - b.valor;   });
    $("#RRETop1").html(razonesRapidasTop[4]["empresa"]);
    $("#RRETop2").html(razonesRapidasTop[3]["empresa"]);
    $("#RRETop3").html(razonesRapidasTop[2]["empresa"]);
    $("#RRETop4").html(razonesRapidasTop[1]["empresa"]);
    $("#RRETop5").html(razonesRapidasTop[0]["empresa"]);

    var pruebasAcidosTop = pruebasAcidos.sort(function (a, b) {  return a.valor - b.valor;   });
    $("#PATop1").html(pruebasAcidosTop[4]["empresa"]);
    $("#PATop2").html(pruebasAcidosTop[3]["empresa"]);
    $("#PATop3").html(pruebasAcidosTop[2]["empresa"]);
    $("#PATop4").html(pruebasAcidosTop[1]["empresa"]);
    $("#PATop5").html(pruebasAcidosTop[0]["empresa"]);

    var rDeudaTotalTop = rDeudaTotal.sort(function (a, b) {  return a.valor - b.valor;   });
    $("#RDTTop1").html(rDeudaTotalTop[4]["empresa"]);
    $("#RDTTop2").html(rDeudaTotalTop[3]["empresa"]);
    $("#RDTTop3").html(rDeudaTotalTop[2]["empresa"]);
    $("#RDTTop4").html(rDeudaTotalTop[1]["empresa"]);
    $("#RDTTop5").html(rDeudaTotalTop[0]["empresa"]);

    var rotInteresGanadoTop = rotInteresGanado.sort(function (a, b) {  return a.valor - b.valor;   });
    $("#RIGTop1").html(rotInteresGanadoTop[4]["empresa"]);
    $("#RIGTop2").html(rotInteresGanadoTop[3]["empresa"]);
    $("#RIGTop3").html(rotInteresGanadoTop[2]["empresa"]);
    $("#RIGTop4").html(rotInteresGanadoTop[1]["empresa"]);
    $("#RIGTop5").html(rotInteresGanadoTop[0]["empresa"]);

    var rotInventarioTop = rotInventario.sort(function (a, b) {  return a.valor - b.valor;   });
    $("#RITop1").html(rotInventarioTop[4]["empresa"]);
    $("#RITop2").html(rotInventarioTop[3]["empresa"]);
    $("#RITop3").html(rotInventarioTop[2]["empresa"]);
    $("#RITop4").html(rotInventarioTop[1]["empresa"]);
    $("#RITop5").html(rotInventarioTop[0]["empresa"]);

    var periodoPromCobranzasTop = periodoPromCobranzas.sort(function (a, b) {  return a.valor - b.valor;   });
    $("#PPCTop1").html(periodoPromCobranzasTop[0]["empresa"]);
    $("#PPCTop2").html(periodoPromCobranzasTop[1]["empresa"]);
    $("#PPCTop3").html(periodoPromCobranzasTop[2]["empresa"]);
    $("#PPCTop4").html(periodoPromCobranzasTop[3]["empresa"]);
    $("#PPCTop5").html(periodoPromCobranzasTop[4]["empresa"]);

    var rotActivoTotalTop = rotActivoTotal.sort(function (a, b) {  return a.valor - b.valor;   });
    $("#RATTop1").html(rotActivoTotalTop[4]["empresa"]);
    $("#RATTop2").html(rotActivoTotalTop[3]["empresa"]);
    $("#RATTop3").html(rotActivoTotalTop[2]["empresa"]);
    $("#RATTop4").html(rotActivoTotalTop[1]["empresa"]);
    $("#RATTop5").html(rotActivoTotalTop[0]["empresa"]);

    var margenUtilidadTop = margenUtilidad.sort(function (a, b) {  return a.valor - b.valor;   });
    $("#MUTop1").html(margenUtilidadTop[4]["empresa"]);
    $("#MUTop2").html(margenUtilidadTop[3]["empresa"]);
    $("#MUTop3").html(margenUtilidadTop[2]["empresa"]);
    $("#MUTop4").html(margenUtilidadTop[1]["empresa"]);
    $("#MUTop5").html(margenUtilidadTop[0]["empresa"]);

    var rendSobreActivosTop = rendSobreActivos.sort(function (a, b) {  return a.valor - b.valor;   });
    $("#RSATop1").html(rendSobreActivosTop[4]["empresa"]);
    $("#RSATop2").html(rendSobreActivosTop[3]["empresa"]);
    $("#RSATop3").html(rendSobreActivosTop[2]["empresa"]);
    $("#RSATop4").html(rendSobreActivosTop[1]["empresa"]);
    $("#RSATop5").html(rendSobreActivosTop[0]["empresa"]);

    var rendSobreCapitalTop = rendSobreCapital.sort(function (a, b) {  return a.valor - b.valor;   });
    $("#RSCTop1").html(rendSobreCapitalTop[4]["empresa"]);
    $("#RSCTop2").html(rendSobreCapitalTop[3]["empresa"]);
    $("#RSCTop3").html(rendSobreCapitalTop[2]["empresa"]);
    $("#RSCTop4").html(rendSobreCapitalTop[1]["empresa"]);
    $("#RSCTop5").html(rendSobreCapitalTop[0]["empresa"]);

    

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
function sortJSON(data, key, orden) {
  return data.sort(function (a, b) {
      var x = a[key],
      y = b[key];

      if (orden === 'asc') {
          return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      }

      if (orden === 'desc') {
          return ((x > y) ? -1 : ((x < y) ? 1 : 0));
      }
  });
}
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


$(document).ready(function(){
  $("form#stress-test").submit(function(event){
    event.preventDefault();
    var userResponsesQ1 = [];
    $("input:checkbox[name=negative-affect]:checked").each(function(){
      var egativeAffects = $(this).val();
      userResponsesQ1.push(egativeAffects);
    });
    var userResponsesQ2 = [];
    $("input:checkbox[name=health-symptoms]:checked").each(function(){
      var healthSymptoms = $(this).val();
      userResponsesQ2.push(healthSymptoms);
    });
    var userResponsesQ3 = [];
    $("input:checkbox[name=coping-methods]:checked").each(function(){
      var copingMethods = $(this).val();
      userResponsesQ3.push(copingMethods);
    });

    if(userResponsesQ1.length >= 3 && userResponsesQ2.length >= 3){
      $("#result-one").show();
    }

    if(userResponsesQ2.length <= 3 && userResponsesQ3.length >= 3){
      $("#result-three").show();
    }

    if(userResponsesQ2.length >= 2 && userResponsesQ1.length >= 2){
      $("#result-two").show();
    }
  });
});

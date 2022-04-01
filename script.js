function showCompany(company){
  var initial = document.getElementById("initialExp");
  initial.style.display = "none";

  var currentCompany = company.id;
  var currentCompanyNormalTab = company.id+"TabNormal";
  var currentCompanyMobileTab = company.id+"TabMobile";
  
  // Showing/hiding companies
  var children = document.getElementById("companyContainer").children;
  for (i=0; i < children.length; i++){
    console.log(children[i].id);
    console.log(currentCompany);
    if (children[i].id != currentCompany){
      children[i].style.display = "none";
    } else{
      children[i].style.display = "block";
    }
  }

  // Changing highlights for Normal Tabs
  var highlightChildrenNormal = document.getElementById("normalTabsChecker").children;
  console.log(highlightChildrenNormal);
  for (i=0; i < highlightChildrenNormal.length; i++){
    var id = highlightChildrenNormal[i].id;
    console.log(id);
    console.log(currentCompanyNormalTab);
    if (id != currentCompanyNormalTab){
      highlightChildrenNormal[i].transition = "all 0.4s";
      highlightChildrenNormal[i].style.borderLeft = "4px solid white";
      highlightChildrenNormal[i].style.color = "white";
      highlightChildrenNormal[i].style.cursor = "pointer";
    } else{
      highlightChildrenNormal[i].style.transition = "all 0.4s";
      highlightChildrenNormal[i].style.borderLeft = "4px solid #04f06a";
      highlightChildrenNormal[i].style.color = "#04f06a";
      highlightChildrenNormal[i].style.cursor = "default";
    }
  }

  // Changing highlights for Mobile Tabs
  var highlightChildrenMobile = document.getElementById("mobileTabsChecker").children;
  console.log(highlightChildrenMobile);
  for (i=0; i < highlightChildrenMobile.length; i++){
    var id = highlightChildrenMobile[i].id;
    console.log(id);
    console.log(currentCompanyMobileTab);
    if (id != currentCompanyMobileTab){
      highlightChildrenMobile[i].transition = "all 0.4s";
      highlightChildrenMobile[i].style.borderBottom = "4px solid white";
      highlightChildrenMobile[i].style.color = "white";
      highlightChildrenMobile[i].style.cursor = "pointer";
      
    } else{
      highlightChildrenMobile[i].style.transition = "all 0.4s";
      highlightChildrenMobile[i].style.borderBottom = "4px solid #04f06a";
      highlightChildrenMobile[i].style.color = "#04f06a";
      highlightChildrenMobile[i].style.cursor = "default";
    }
  }
}


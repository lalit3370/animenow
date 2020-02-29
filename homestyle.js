var mode = "dark";
function changetheme() {
    if (mode == "light") {
        mode = "dark";
        dark();
    }
    else if (mode == "dark") {
        mode = "light";
        light();
    }
}
function dark() {
    document.documentElement.style.setProperty('--bodybgcolor','#272727');
    document.documentElement.style.setProperty('--navbarboxshadow','2px 2px 2px 0px rgba(0,0,0,1)');
    document.documentElement.style.setProperty('--navbardivbgcolor','#333');
    document.documentElement.style.setProperty('--midDivbgcolor','#464646');
    document.documentElement.style.setProperty('--midDivboxshadow','2px 2px 2px 0px rgba(0,0,0,1)');
    document.documentElement.style.setProperty('--footboxshadow','2px 2px 2px 0px rgba(0,0,0,1)');
    document.documentElement.style.setProperty('--footcolor','white');
    document.documentElement.style.setProperty('--footbgcolor','#333');
    document.documentElement.style.setProperty('--homeiconacolor','white');
    document.documentElement.style.setProperty('--searchbordercolor','rgb(218, 218, 218)');
    document.documentElement.style.setProperty('--searchbgcolor','rgb(29, 29, 29)');
    document.documentElement.style.setProperty('--searchcolor','rgb(189, 189, 189)');
    document.documentElement.style.setProperty('--topnavbgcolor','#333');
    document.documentElement.style.setProperty('--topnavacolor','#f2f2f2');
    document.documentElement.style.setProperty('--topnavaActivebgcolor','#f39c12');
    document.documentElement.style.setProperty('--topnavAactivecolor','white');
    document.documentElement.style.setProperty('--searchIcolor','rgb(218, 218, 218)');
    document.documentElement.style.setProperty('--searchareaFocuscolor',' #f39c12');
    document.documentElement.style.setProperty('--searchFocus','#f39c12');
    document.documentElement.style.setProperty('--dropbtncolor','white');
    document.documentElement.style.setProperty('--dropbtnHovercolor','#f39c12');
    document.documentElement.style.setProperty('--dropdowncontentboxshadow','0px 8px 16px 0px rgba(0,0,0,0.2)');
    document.documentElement.style.setProperty('--dropdowncontentAcolor','#E2E2E2');
    document.documentElement.style.setProperty('--topnavAhoverbgcolor','#5C5A5A');
    document.documentElement.style.setProperty('--dropdownHoverDropbtnbgcolor','#5C5A5A');
    document.documentElement.style.setProperty('--dropdowncontentAhoverColor','#f39c12');
    document.documentElement.style.setProperty('--dropdownHoverDropdownContentbgcolor','#272727');
    document.documentElement.style.setProperty('--rowheadingareabgcolor','#333');
    document.documentElement.style.setProperty('--rowheadingareacolor','white');
    document.documentElement.style.setProperty('--rowheadingareaborderrightcolor','#f39c12');
    document.documentElement.style.setProperty('--rowheadingareaboxshadow','2px 2px 3px 1px rgba(0,0,0,1)');
    document.documentElement.style.setProperty('--rowheadingareaHover','#f39c12');
    document.documentElement.style.setProperty('--animethumbsboxshadow','2px 2px 5px 0px rgba(26,26,26,1)');
    document.documentElement.style.setProperty('--animethumbsbgcolor','rgb(255, 255, 255)');
    document.documentElement.style.setProperty('--imagetextbgcolor','rgb(255, 255, 255)');
    document.documentElement.style.setProperty('--leftbuttonboxshadow','3px 3px 3px 0px rgba(0,0,0,1)');
    document.documentElement.style.setProperty('--leftbuttonbgcolor','#333');
    document.documentElement.style.setProperty('--faangleleftcolor','#f39c12');
    document.documentElement.style.setProperty('--acctdropbtncolor','rgb(146, 145, 145)'); 
    document.documentElement.style.setProperty('--acctareaAcolor','#f2f2f2');
    document.documentElement.style.setProperty('--acctareaAhoverbgcolor','#5C5A5A');
    document.documentElement.style.setProperty('--acctareaAhovercolor','#f39c12');
    document.documentElement.style.setProperty('--acctdropcontentboxshadow','0px 8px 16px 0px rgba(0,0,0,0.2)');
    document.documentElement.style.setProperty('--acctdropdownHoverAcctdropcontentbgcolor','rgb(29, 29, 29)');
    document.documentElement.style.setProperty('--acctdropcontentPcolor','white');
    document.documentElement.style.setProperty('--themesliderbgcolor','#7c7c7c');
    document.documentElement.style.setProperty('--themesliderboxshadow','0px 0px 5px 1px rgba(0,0,0,0.75)');
    document.documentElement.style.setProperty('--themesliderdivbgcolor','#333');
    document.documentElement.style.setProperty('--themesliderleft','0px');
}
function light(){
    document.documentElement.style.setProperty('--bodybgcolor',' rgb(255, 255, 255)');
    document.documentElement.style.setProperty('--navbarboxshadow','none');
    document.documentElement.style.setProperty('--navbardivbgcolor',' #3498db');
    document.documentElement.style.setProperty('--midDivbgcolor',' rgb(246, 246, 246)');
    document.documentElement.style.setProperty('--midDivboxshadow',' 0px 0px 7px 4px rgba(229,229,229,1)');
    document.documentElement.style.setProperty('--footboxshadow',' 0px 0px 7px 4px rgba(229,229,229,1)');
    document.documentElement.style.setProperty('--footcolor','white');
    document.documentElement.style.setProperty('--footbgcolor','#3498db');
    document.documentElement.style.setProperty('--homeiconacolor',' white');
    document.documentElement.style.setProperty('--searchbordercolor',' rgb(218, 218, 218)');
    document.documentElement.style.setProperty('--searchbgcolor',' #ecf0f1');
    document.documentElement.style.setProperty('--searchcolor',' rgb(189, 189, 189)');
    document.documentElement.style.setProperty('--topnavbgcolor',' #3498db');
    document.documentElement.style.setProperty('--topnavacolor',' #f2f2f2');
    document.documentElement.style.setProperty('--topnavaActivebgcolor',' #2980b9');
    document.documentElement.style.setProperty('--topnavAactivecolor',' #ecf0f1');
    document.documentElement.style.setProperty('--searchIcolor',' #2980b9');
    document.documentElement.style.setProperty('--searchareaFocuscolor',' #f39c12');
    document.documentElement.style.setProperty('--searchFocus',' #f39c12');
    document.documentElement.style.setProperty('--dropbtncolor',' white');
    document.documentElement.style.setProperty('--dropbtnHovercolor','#f39c12');
    document.documentElement.style.setProperty('--dropdowncontentboxshadow',' 0px 8px 16px 0px rgba(0,0,0,0.2)');
    document.documentElement.style.setProperty('--dropdowncontentAcolor',' rgb(104, 104, 104)');
    document.documentElement.style.setProperty('--topnavAhoverbgcolor',' #ecf0f1');
    document.documentElement.style.setProperty('--dropdownHoverDropbtnbgcolor',' #E9EDF0');
    document.documentElement.style.setProperty('--dropdowncontentAhoverColor',' black');
    document.documentElement.style.setProperty('--dropdownHoverDropdownContentbgcolor',' rgb(255, 255, 255)');
    document.documentElement.style.setProperty('--rowheadingareabgcolor',' #3498db');
    document.documentElement.style.setProperty('--rowheadingareacolor',' white');
    document.documentElement.style.setProperty('--rowheadingareaborderrightcolor',' #f39c12');
    document.documentElement.style.setProperty('--rowheadingareaboxshadow',' 2px 2px 2px 1px rgba(196,196,196,1)');
    document.documentElement.style.setProperty('--rowheadingareaHover',' #f39c12');
    document.documentElement.style.setProperty('--animethumbsboxshadow',' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)');
    document.documentElement.style.setProperty('--animethumbsbgcolor',' rgb(255, 255, 255)');
    document.documentElement.style.setProperty('--imagetextbgcolor',' rgb(255, 255, 255)');
    document.documentElement.style.setProperty('--leftbuttonboxshadow',' 0px 0px 9px 2px rgba(209,209,209,1)');
    document.documentElement.style.setProperty('--leftbuttonbgcolor',' #3498db');
    document.documentElement.style.setProperty('--faangleleftcolor',' #f39c12');
    document.documentElement.style.setProperty('--acctdropbtncolor',' #ecf0f1'); 
    document.documentElement.style.setProperty('--acctareaAcolor',' #f2f2f2');
    document.documentElement.style.setProperty('--acctareaAhoverbgcolor',' #ecf0f1');
    document.documentElement.style.setProperty('--acctareaAhovercolor',' #f39c12');
    document.documentElement.style.setProperty('--acctdropcontentboxshadow',' 0px 8px 16px 0px rgba(0,0,0,0.2)');
    document.documentElement.style.setProperty('--acctdropdownHoverAcctdropcontentbgcolor',' rgb(255, 255, 255)');
    document.documentElement.style.setProperty('--acctdropcontentPcolor',' rgb(104, 104, 104)');
    document.documentElement.style.setProperty('--themesliderbgcolor',' white');
    document.documentElement.style.setProperty('--themesliderboxshadow',' 0px 0px 5px 1px rgba(173,159,173,1)');
    document.documentElement.style.setProperty('--themesliderdivbgcolor',' #48BDF8');
    document.documentElement.style.setProperty('--themesliderleft',' 20px');
}
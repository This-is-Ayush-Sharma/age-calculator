function run()
{
    var dayscnt=0;
    var ar=[0,31,28,31,30,31,30,31,31,30,31,30,31];
    var date=document.getElementById("dates").value;
    var res = date.split("-");
    var days=parseInt(res[2]);
    var month=parseInt(res[1]);
    var year=parseInt(res[0]);
    var today = new Date();
    var daynow =parseInt(today.getDate());
    var monthnow=parseInt(today.getMonth()+1);
    var yearnow= parseInt(today.getFullYear());
    for(var i=year+1;i<yearnow;i++)
    {
        if(i%4==0)
        dayscnt+=366;
        else
        dayscnt+=365;
    }

    if(year%4==0)
    ar[2]=29;
    if(month!=12)
    {
        for(var i=month+1;i<=12;i++)
        {
            dayscnt+=ar[i];
        }
        dayscnt+=ar[month]-days;
    }
    else
    {
        dayscnt+=ar[month]-days;
    }

    if(yearnow%4==0)
    ar[2]=29;
    else
    ar[2]=28;
    for(var i=1;i<monthnow;i++)
    {
        dayscnt+=ar[i];
    }
    dayscnt+=ar[monthnow]-daynow;
    var number_of_days=dayscnt;
    var finalyr=parseInt(number_of_days / 365);
    var finalmo=parseInt((number_of_days % 365) / 31);
    var finalwe= parseInt(((number_of_days % 365)%31) / 7);
    var finalda = ((number_of_days % 365)%31)  % 7;
    //  document.write(finalyr+" "+finalmo+" "+finalwe+" "+finalda)

    document.getElementById("yr").innerHTML =finalyr;
    document.getElementById("mo").innerHTML= finalmo;
    document.getElementById("we").innerHTML = finalwe;
    document.getElementById("da").innerHTML = finalda;
    
}
var names=[
    "1. My Father (Sachin Khatkale)",
    "2. My Mother (Vaishali Khatkale)",
    "3. My Sister (Gayatri Khatkale)",
    "4. Me (Gaurav Khatkale)"
    ];
    var images=[
        "papa.jpg",
        "muma.jpg",
        "sis.jpg",
        "me.jpg"
    ];
    var i=0;
    function family(){
    document.getElementById("one").innerHTML=names[i];
    document.getElementById("family_img").src=images[i];
    i++
    if(i==4){
        i=0;
    }
}
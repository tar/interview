//var dropdownBodyTempl = new EJS({url: 'templates/dropdown_body.html.ejs'}).render({ items: items });
//$(".materials").append(dropdownBodyTempl);
//var dropdownForFirst = new EJS({url: 'templates/dropdown_for_first.html.ejs'}).render({ collections: collections });

$(document).ready(function() {
    $('.dropdown > a').on("click", function (event) {
        $.each(collections, function (key, value){
            if($(event.target).data("type") == key && $("." + key).children("li").length == 0)
                    appendDropdownFirst(key);
        });
    });

    $('.dropdown-menu > li').on("click", function (event) {
        console.log("something");
    })
});
function appendDropdownFirst(typeItem){
    $.each(collections[typeItem], function (i,value){
        $("." + typeItem).append("<li><a data-type = '" + typeItem + "' data-id='" + collections[typeItem][i].id + "'>" + collections[typeItem][i].name + "</a></li>");
    })
}

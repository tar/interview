//var dropdownBodyTempl = new EJS({url: 'templates/dropdown_body.html.ejs'}).render({ items: items });
//$(".materials").append(dropdownBodyTempl);
//var dropdownForFirst = new EJS({url: 'templates/dropdown_for_first.html.ejs'}).render({ collections: collections });

$(document).ready(function() {
    $('.dropdown').on("click", '.js-toggle-dropdown-item', function (event) {
        $.each(collections, function (key, value){
            if($(event.target).data("type") == key && $("." + key).children("li").length == 0)
                    appendDropdownFirst(key);
        });
    });

    $('.dropdown-menu').on("click", 'li', function (event) {
        var arrChildItem = findChild(event);
        appendDropdownChild(getTypeOfItem(arrChildItem),arrChildItem);
    })
});
function appendDropdownFirst(typeItem){
    $.each(collections[typeItem], function (i,value){
        $("." + typeItem).append("<li><a data-type = '" + typeItem + "' data-id='"
            + collections[typeItem][i].id + "'>"
            + collections[typeItem][i].name + "</a></li>");
    })
}

function findChild(parent){
    return _.where(items, {pid: $(parent.target).data("id")})
}

function getTypeOfItem(arrItem){
    return arrItem[0].type;
}

function appendDropdownChild(typeItem,arrChildItem){
    $.each(arrChildItem, function (i,value){
        if ($("." + typeItem).children("li").length == 0) {
            $("." + typeItem).append("<li><a data-type = '" + typeItem + "' data-id='" + arrChildItem[i].id + "'>"
                + arrChildItem[i].label + "</a></li>");
        }
    })
}

var items = [
    {
        type:"category",
        label:"Крыша",
        value: "roof",
        pid: 0,
        id: '1'
    },
    {
        type:"brand",
        label:"Руфлекс",
        value: "ruflex",
        pid: 1,
        id: '2'
    },
    {
        type:"material",
        label:"Андулин",
        pid: 2,
        id: '3'
    },
    {
        type: "material",
        label: "Шифер",
        pid: 2,
        id: '4'
    },
    {
        type: "material",
        label: "Черепица",
        pid: 2,
        id: '5'
    },
    {
        type: "brand",
        label: "ИКО",
        value: "ico",
        pid: 1,
        id: '6'
    },
    {
        type: "material",
        label: "Андулин",
        pid: 6,
        id: 7
    },
    {
        type: "material",
        label: "Черепица",
        pid: 6,
        id: 8
    },
    {
        type: "category",
        label: "Стена",
        value: "wall",
        pid: 0,
        id: 9
    },
    {
        type: "brand",
        label: "ИКО",
        pid: 9,
        id: 10
    },
    {
        type: "material",
        label: "Кирпич",
        pid: 10,
        id: 11
    },
    {
        type: "material",
        label: "Дерево",
        pid: 10,
        id: 12
    },
    {
        type: "category",
        label: "Фундамент",
        pid: 0,
        id: 13
    },
    {
        type: "brand",
        label: "Руфлекс",
        pid: 13,
        id: 14
    },
    {
        type:"material",
        label:"Бетон",
        pid: 14,
        id: 15
    },
    {
        type: "brand",
        label: "ИКО",
        pid: 13,
        id: 16
    },
    {
        type: "material",
        label: "Бетон",
        pid: 16,
        id: 17
    },
    {
        type: "material",
        label: "Камень",
        pid: 16,
        id: 18
    },
    {
        type: "brand",
        label: "КБЕ",
        pid: 13,
        id: 19
    },
    {
        type: "material",
        label: "Лента",
        pid: 19,
        id: 20
    },
    {
        type: "material",
        label: "Бетон",
        pid: 19,
        id: 21
    },
    {
        type: "brand",
        label: "Веко",
        pid: 13,
        id: 22
    },
    {
        type: "material",
        label: "Бетон",
        pid: 22,
        id: 23
    },
    {
        type: "material",
        label: "Лента",
        pid: 22,
        id: 24
    },
    {
        type: "material",
        label: "Камень",
        pid: 22,
        id: 25
    }
];



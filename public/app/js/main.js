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
        var keyForTemp = $(event.target).data("type");
        tempItem[keyForTemp] = $(this).text();
        if($('.summary').children("tr").length == 0){
            putTr();
            //
            //$('.summary tr:last').append("<td><input type='text' class=" + keyForTemp + "" +
            //    " value=" + tempItem[keyForTemp] + "></td><td><input type='text' class='brand'></td>" +
            //    "<td><input type='text' class='material'></td>");
        }
        if(!$('tr:last > td > input').hasClass(keyForTemp)){
            $('tr:last').append("<td><input type='text' class=" + keyForTemp + "" +
                " value=" + tempItem[keyForTemp] + "></td>");
        }
        else{
            $('input.' + keyForTemp).val(tempItem[keyForTemp]);
        }
        appendDropdownChild(getTypeOfItem(arrChildItem),arrChildItem);
    });
    $('.btnRemove').on("click", function(){
        //var checked = $('input:checkbox:checked').map(function () {
        //    return this.value;
        //}).get();
        $('input:checkbox:checked').parents("tr").remove();
    });
    $('.btnAdd').on("click", function(){
        putTr();
        $('.summary tr:last').append("<td><input type='text' class=" + keyForTemp + "" +
            " value=" + tempItem[keyForTemp] + "></td><td><input type='text' class='brand'></td>" +
            "<td><input type='text' class='material'></td>");
    });
});

function appendDropdownFirst(typeItem){
    $.each(collections[typeItem], function (i,value){
        $("." + typeItem).append("<li><a data-type = '" + typeItem + "' data-id='"
            + collections[typeItem][i].id + "'>"
            + collections[typeItem][i].name + "</a></li>");
    })
}

function putTr(){
    $('.summary').append("<tr></tr>");
    $('.summary tr:last').append("<td><input type='checkbox'></td>");
}

function findChild(parent){
    return _.where(items, {pid: $(parent.target).data("id")})
}

function getTypeOfItem(arrItem){
    return arrItem[0].type;
}

function appendDropdownChild(typeItem,arrChildItem){
    $($("." + typeItem).children("li")).remove();
    $.each(arrChildItem, function (i,value){
        $("." + typeItem).append("<li><a data-type = '" + typeItem + "' data-id='" + arrChildItem[i].id + "'>"
            + arrChildItem[i].label + "</a></li>");
    })
}

var arrItem=[];

var tempItem ={};

var items = [
    {
        type:"category",
        label:"Крыша",
        value: "roof",
        pid: 0,
        id: 1
    },
    {
        type:"brand",
        label:"Руфлекс",
        value: "ruflex",
        pid: 1,
        id: 2
    },
    {
        type:"material",
        label:"Андулин",
        value: "ondulin",
        cost: 100,
        pid: 2,
        id: 3
    },
    {
        type: "material",
        label: "Шифер",
        value: "slate",
        cost: 110,
        pid: 2,
        id: 4
    },
    {
        type: "material",
        label: "Черепица",
        value: "tile",
        cost: 120,
        pid: 2,
        id: 5
    },
    {
        type: "brand",
        label: "ИКО",
        value: "iko",
        pid: 1,
        id: 6
    },
    {
        type: "material",
        label: "Андулин",
        value: "ondulin",
        cost: 140,
        pid: 6,
        id: 7
    },
    {
        type: "material",
        label: "Черепица",
        value: "tile",
        cost: 150,
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
        value: "iko",
        pid: 9,
        id: 10
    },
    {
        type: "material",
        label: "Кирпич",
        value: "brick",
        cost: 160,
        pid: 10,
        id: 11
    },
    {
        type: "material",
        label: "Дерево",
        value: "timber",
        cost: 170,
        pid: 10,
        id: 12
    },
    {
        type: "category",
        label: "Фундамент",
        value: "basement",
        pid: 0,
        id: 13
    },
    {
        type: "brand",
        label: "Руфлекс",
        value: "ruflex",
        pid: 13,
        id: 14
    },
    {
        type:"material",
        label:"Бетон",
        value:"concrete",
        cost: 180,
        pid: 14,
        id: 15
    },
    {
        type: "brand",
        label: "ИКО",
        value:"iko",
        pid: 13,
        id: 16
    },
    {
        type: "material",
        label: "Бетон",
        value:"concrete",
        cost: 190,
        pid: 16,
        id: 17
    },
    {
        type: "material",
        label: "Камень",
        value:"stone",
        cost: 200,
        pid: 16,
        id: 18
    },
    {
        type: "brand",
        label: "КБЕ",
        value:"kbe",
        pid: 13,
        id: 19
    },
    {
        type: "material",
        label: "Лента",
        value: "tape",
        cost: 210,
        pid: 19,
        id: 20
    },
    {
        type: "material",
        label: "Бетон",
        value: "concrete",
        cost: 220,
        pid: 19,
        id: 21
    },
    {
        type: "brand",
        label: "Веко",
        value: "veko",
        pid: 13,
        id: 22
    },
    {
        type: "material",
        label: "Бетон",
        value: "concrete",
        cost: 230,
        pid: 22,
        id: 23
    },
    {
        type: "material",
        label: "Лента",
        value: "tape",
        cost: 240,
        pid: 22,
        id: 24
    },
    {
        type: "material",
        label: "Камень",
        value: "stone",
        cost: 250,
        pid: 22,
        id: 25
    }
];





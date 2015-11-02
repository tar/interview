//var dropdownBodyTempl = new EJS({url: 'templates/dropdown_body.html.ejs'}).render({ items: items });
//$(".materials").append(dropdownBodyTempl);
//var dropdownForFirst = new EJS({url: 'templates/dropdown_for_first.html.ejs'}).render({ collections: collections });

$(document).ready(function() {
    dropdownToggleItem();
    dropdownMenuLiClick();
    addByButton();
    removeChosenRows();
});

function dropdownToggleItem(){
    $('.dropdown').on("click", '.js-toggle-dropdown-item', function (event) {
    $.each(collections, function (key, value){
        if($(event.target).data("type") == key && $("." + key).children("li").length == 0)
            appendDropdownFirst(key);
    });
});
}

function dropdownMenuLiClick(){
    $('.dropdown-menu').on("click", 'li', function (event) {
        var arrChildItem = findChild(event);
        var keyForTemp = $(event.target).data("type");
        var idForTemp = $(event.target).data("id");
        tempItem[keyForTemp] = $(this).text();
        if($('.summary').children("tr").length == 0){
            putTr();
        }
        $('tr:last > td > input.' + keyForTemp).val(tempItem[keyForTemp]);
        $('tr:last > td > input.' + keyForTemp).data('id',idForTemp);
        $('tr:last > td > input.cost').val(findCost(keyForTemp,tempItem[keyForTemp]));
        appendDropdownChild(getTypeOfItem(arrChildItem),arrChildItem);
    });
}

function putTr(){
    $('.summary').append("<tr></tr>");
    $('.summary tr:last').append("<td><input type = 'checkbox'></td>");
    $.each(collections, function (key, value){
        $('.summary tr:last').append("<td><input type = 'text' class = " + key + " ></td>")
    })
}

function addByButton(){
    $('.btnAdd').on("click", function(){
        if(checkData() == true){
            gatherData(tempItems);
            putTr();
            dropdownMenuLiClick();
        }
    });
}

function appendDropdownFirst(typeItem){
    $.each(collections[typeItem], function (index,value){
        $("." + typeItem).append("<li><a data-type = " + typeItem + " data-id = "
            + value.id + ">" + value.name + "</a></li>");
    })
}

function appendDropdownChild(typeItem,arrChildItem){
    if(typeItem !== undefined){
        $($("." + typeItem).children("li")).remove();
        $.each(arrChildItem, function (index,value){
            $("." + typeItem).append("<li><a data-type = " + typeItem + " data-id = " + value.id + ">"
                + value.label + "</a></li>");
        })
    }
}

function findChild(parent){
    return _.where(items, {pid: $(parent.target).data("id")});
}

function findCost(typeItem,nameItem){
    var itemForCost = _.findWhere(items, {type: typeItem, label: nameItem});
    return itemForCost.cost;
}

function getTypeOfItem(arrItem){
    if(arrItem[0] !== undefined){
        return arrItem[0].type;
    }
}

function removeChosenRows(){
    $('.btnRemove').on("click", function(){
        $('input:checkbox:checked').parents("tr").remove();
    });
}

function gatherData(tempItems){
    var tempInputsOfRow = $('tr:last > td').children('input');
    var dataInRow = {};
    $(tempInputsOfRow).each(function(index,element){
        var classDataInRow = $(element).attr('class');
        dataInRow[classDataInRow] = $(element).val();
    });
    tempItems.push(dataInRow);
}

function checkData(){
    var dataInRow = {};
    var tempInputsInRow = $('tr:last > td').children('input');
    $(tempInputsInRow).each(function(index,element){
        dataInRow[$(element).attr('class')] = _.findWhere(items, {type: $(element).attr('class'), label:  $(element).val(),
            id: $(element).data('id')});
    });
    if(dataInRow['material'].pid != dataInRow['brand'].id){
        alert("Неверный ввод производителя или материала.");
        return false;
    }
    else{
        if(dataInRow['brand'].pid != dataInRow['category'].id){
            alert("Неверный ввод производителя или категории.");
            return false;
        }
    }
    return true;
}

function getTotal(){
    var tempInputsOfRow = $('tr > td').children('input.cost');
    var total = 0
    $(tempInputsOfRow).each(function(index,element){
        total += $(element.id)
    })
}

//var arrItemSummary=[];
//
//
var tempItems = [];

var tempItem = {};

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





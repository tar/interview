$(document).ready(function() {
    dropdownToggleItem();
    dropdownMenuLiClick();
    addByButton();
    removeChosenRows();
});

function dropdownToggleItem() {
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
            $('thead > tr').prepend("<th></th>");
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
    else {
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






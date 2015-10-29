var searchTYpeInCat = function(items, cat, type) {
    $.each(items[cat], function(catK, catV) {
        $.each(catV, function(brandK, brandV) {
            $.each(brandV, function(typeK, typeV) {
                if (typeV.type == type) {
                    console.log("result: ", { type: typeV, brand: brandK, category: cat });
                }
            });
        });
    });
};

var searchUniqueTypes = function(items, cat) {
    $.each(items[cat], function(catK, catV) {

    });
};


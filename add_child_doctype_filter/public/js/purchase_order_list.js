frappe.listview_settings['Purchase Order'] = {
    onload: function (listview) {
        var df_list = [
            {
                fieldname: "item_code",
                fieldtype: "Link",
                options: "Item",
                label: __("Item Code"),
                doctype: "Purchase Order Item",
                onchange: function () {
                    listview.refresh();
                },
            },
            {
                fieldname: "item_name",
                fieldtype: "Data",
                label: __("Item Name"),
                doctype: "Purchase Order Item",
                onchange: function () {
                    listview.refresh();
                },
            },
            {
                fieldname: "description",
                fieldtype: "Data",
                label: __("Description"),
                doctype: "Purchase Order Item",
                onchange: function () {
                    listview.refresh();
                },
            },
        ]
        df_list.forEach(function (df) {
            listview.page.add_field(df, '.standard-filter-section');
        }); 
    }
}
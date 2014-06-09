function Controller() {
    function addAmount() {
        if ($.amountField.value) {
            total += parseInt($.amountField.value);
            $.totalLabel.text = total;
            $.amountField.blur();
        }
    }
    function saveGoal() {
        $.goalField.value && Ti.App.Properties.setInt("goal", $.goalField.value);
    }
    function updateGoal() {
        var goal = Ti.App.Properties.getInt("goal");
        null == goal && (goal = 0);
        $.goalLabel.text = goal;
        $.goalField.value = goal;
    }
    function doneGoal() {
        $.goalField.blur();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    var __alloyId0 = [];
    $.__views.__alloyId2 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Home",
        id: "__alloyId2"
    });
    $.__views.mainView = Ti.UI.createView({
        layout: "vertical",
        id: "mainView"
    });
    $.__views.__alloyId2.add($.__views.mainView);
    $.__views.__alloyId3 = Ti.UI.createView({
        layout: "horizontal",
        height: 80,
        top: 10,
        id: "__alloyId3"
    });
    $.__views.mainView.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        left: 10,
        text: "Amount:",
        top: "10",
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    $.__views.amountField = Ti.UI.createTextField({
        left: 10,
        width: 100,
        keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_BEZEL,
        returnKeyType: Ti.UI.RETURNKEY_DONE,
        id: "amountField"
    });
    $.__views.__alloyId3.add($.__views.amountField);
    $.__views.addButton = Ti.UI.createButton({
        title: "Add",
        id: "addButton"
    });
    $.__views.__alloyId3.add($.__views.addButton);
    addAmount ? $.__views.addButton.addEventListener("click", addAmount) : __defers["$.__views.addButton!click!addAmount"] = true;
    $.__views.__alloyId5 = Ti.UI.createView({
        layout: "horizontal",
        height: 80,
        top: 10,
        id: "__alloyId5"
    });
    $.__views.mainView.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        left: 10,
        text: "Total:",
        id: "__alloyId6"
    });
    $.__views.__alloyId5.add($.__views.__alloyId6);
    $.__views.totalLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        left: 10,
        text: "0",
        id: "totalLabel"
    });
    $.__views.__alloyId5.add($.__views.totalLabel);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        left: 10,
        text: "Goal:",
        id: "__alloyId7"
    });
    $.__views.__alloyId5.add($.__views.__alloyId7);
    $.__views.goalLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        left: 10,
        text: "0",
        id: "goalLabel"
    });
    $.__views.__alloyId5.add($.__views.goalLabel);
    $.__views.__alloyId1 = Ti.UI.createTab({
        window: $.__views.__alloyId2,
        title: "Home",
        icon: "KS_nav_ui.png",
        id: "__alloyId1"
    });
    __alloyId0.push($.__views.__alloyId1);
    updateGoal ? $.__views.__alloyId1.addEventListener("focus", updateGoal) : __defers["$.__views.__alloyId1!focus!updateGoal"] = true;
    $.__views.__alloyId9 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Settings",
        layout: "horizontal",
        id: "__alloyId9"
    });
    $.__views.__alloyId10 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        left: 10,
        text: "Goal:",
        id: "__alloyId10"
    });
    $.__views.__alloyId9.add($.__views.__alloyId10);
    $.__views.goalField = Ti.UI.createTextField({
        left: 10,
        width: 100,
        keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_BEZEL,
        returnKeyType: Ti.UI.RETURNKEY_DONE,
        id: "goalField"
    });
    $.__views.__alloyId9.add($.__views.goalField);
    saveGoal ? $.__views.goalField.addEventListener("change", saveGoal) : __defers["$.__views.goalField!change!saveGoal"] = true;
    $.__views.goalDoneButton = Ti.UI.createButton({
        title: "Done",
        id: "goalDoneButton"
    });
    $.__views.__alloyId9.add($.__views.goalDoneButton);
    doneGoal ? $.__views.goalDoneButton.addEventListener("click", doneGoal) : __defers["$.__views.goalDoneButton!click!doneGoal"] = true;
    $.__views.__alloyId8 = Ti.UI.createTab({
        window: $.__views.__alloyId9,
        title: "Settings",
        icon: "KS_nav_views.png",
        id: "__alloyId8"
    });
    __alloyId0.push($.__views.__alloyId8);
    $.__views.index = Ti.UI.createTabGroup({
        tabs: __alloyId0,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var total = 0;
    $.index.open();
    updateGoal();
    __defers["$.__views.addButton!click!addAmount"] && $.__views.addButton.addEventListener("click", addAmount);
    __defers["$.__views.__alloyId1!focus!updateGoal"] && $.__views.__alloyId1.addEventListener("focus", updateGoal);
    __defers["$.__views.goalField!change!saveGoal"] && $.__views.goalField.addEventListener("change", saveGoal);
    __defers["$.__views.goalDoneButton!click!doneGoal"] && $.__views.goalDoneButton.addEventListener("click", doneGoal);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
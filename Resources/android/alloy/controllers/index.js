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
    function doFBPost() {
        var data = {};
        var facebook = Alloy.Globals.Facebook;
        facebook.dialog("feed", data, function() {});
    }
    function saveFile() {
        var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, "test.txt");
        file.exists && file.deleteFile();
        file.write(total.toString());
        file = null;
    }
    function loadFile() {
        var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, "test.txt");
        alert("Total read: " + file.read().text);
        file = null;
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
    $.__views.__alloyId8 = Ti.UI.createButton({
        title: "Save File",
        id: "__alloyId8"
    });
    $.__views.mainView.add($.__views.__alloyId8);
    saveFile ? $.__views.__alloyId8.addEventListener("click", saveFile) : __defers["$.__views.__alloyId8!click!saveFile"] = true;
    $.__views.__alloyId9 = Ti.UI.createButton({
        title: "Load File",
        id: "__alloyId9"
    });
    $.__views.mainView.add($.__views.__alloyId9);
    loadFile ? $.__views.__alloyId9.addEventListener("click", loadFile) : __defers["$.__views.__alloyId9!click!loadFile"] = true;
    $.__views.__alloyId1 = Ti.UI.createTab({
        window: $.__views.__alloyId2,
        title: "Home",
        icon: "KS_nav_ui.png",
        id: "__alloyId1"
    });
    __alloyId0.push($.__views.__alloyId1);
    updateGoal ? $.__views.__alloyId1.addEventListener("focus", updateGoal) : __defers["$.__views.__alloyId1!focus!updateGoal"] = true;
    $.__views.__alloyId11 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Settings",
        layout: "horizontal",
        id: "__alloyId11"
    });
    $.__views.__alloyId12 = Ti.UI.createLabel({
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
        id: "__alloyId12"
    });
    $.__views.__alloyId11.add($.__views.__alloyId12);
    $.__views.goalField = Ti.UI.createTextField({
        left: 10,
        width: 100,
        keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_BEZEL,
        returnKeyType: Ti.UI.RETURNKEY_DONE,
        id: "goalField"
    });
    $.__views.__alloyId11.add($.__views.goalField);
    saveGoal ? $.__views.goalField.addEventListener("change", saveGoal) : __defers["$.__views.goalField!change!saveGoal"] = true;
    $.__views.fbLoginButton = Alloy.Globals.Facebook.createLoginButton({
        id: "fbLoginButton",
        ns: "Alloy.Globals.Facebook"
    });
    $.__views.__alloyId11.add($.__views.fbLoginButton);
    $.__views.postButton = Ti.UI.createButton({
        title: "Post",
        id: "postButton",
        visible: "false"
    });
    $.__views.__alloyId11.add($.__views.postButton);
    doFBPost ? $.__views.postButton.addEventListener("click", doFBPost) : __defers["$.__views.postButton!click!doFBPost"] = true;
    $.__views.__alloyId10 = Ti.UI.createTab({
        window: $.__views.__alloyId11,
        title: "Settings",
        icon: "KS_nav_views.png",
        id: "__alloyId10"
    });
    __alloyId0.push($.__views.__alloyId10);
    $.__views.index = Ti.UI.createTabGroup({
        tabs: __alloyId0,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var total = 0;
    var facebook = Alloy.Globals.Facebook;
    facebook.appid = 0x510f407b65ab2;
    facebook.permissions = [ "publish_stream" ];
    facebook.addEventListener("login", function(e) {
        e.success && ($.postButton.visible = true);
    });
    facebook.addEventListener("logout", function() {
        $.postButton.visible = false;
    });
    $.index.open();
    updateGoal();
    __defers["$.__views.addButton!click!addAmount"] && $.__views.addButton.addEventListener("click", addAmount);
    __defers["$.__views.__alloyId8!click!saveFile"] && $.__views.__alloyId8.addEventListener("click", saveFile);
    __defers["$.__views.__alloyId9!click!loadFile"] && $.__views.__alloyId9.addEventListener("click", loadFile);
    __defers["$.__views.__alloyId1!focus!updateGoal"] && $.__views.__alloyId1.addEventListener("focus", updateGoal);
    __defers["$.__views.goalField!change!saveGoal"] && $.__views.goalField.addEventListener("change", saveGoal);
    __defers["$.__views.goalDoneButton!click!doneGoal"] && $.__views.goalDoneButton.addEventListener("click", doneGoal);
    __defers["$.__views.postButton!click!doFBPost"] && $.__views.postButton.addEventListener("click", doFBPost);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
var total = 0;

$.index.open();
updateGoal();

function addAmount() {
	total += parseInt($.amountField.value);
	$.totalLabel.text = total;
	$.amountField.blur();
}

function saveGoal() {
	//Ti.API.info("goalField Text: " + $.goalField.value + "----");
    
    // only parse something if it makes sense!!
	if($.goalField.value) {
		Ti.App.Properties.setInt('goal', $.goalField.value);
	}
}

function updateGoal() {
	var goal = Ti.App.Properties.getInt('goal');
	if( goal == null) {
		goal = 0;
	}
	
	$.goalLabel.text = goal;
	$.goalField.value = goal;
}

function doneGoal() {
	//Get rid of the keyboard by blurring the field.
	$.goalField.blur();
}

var savedData;
chrome.runtime.onMessage.addListener(function(m) {
	console.log("Recieved message: "+m);
	chrome.storage.local.get("time", function(items) {
		if (items) {
			savedData = items;
		}
		if (chrome.runtime.lastError) {
			console.error(chrome.runtime.lastError);
		}
	});
	console.log("Got data: "+savedData);
	if (savedData != null || savedData != undefined) {
		console.log(savedData);
	} else {
		savedData = "original data";
	}
	console.log("savedData: "+savedData);
	chrome.storage.local.set({"time": m});
	console.log("Set new data: "+m);
});

function clearData() {
	chrome.storage.local.set({time: null});
	console.log("Cleared local storage data.");
}
$(document).ready(
	function() {
		$("#confirm").on('click',function(){
			chrome.tabs.create({'url: https://trollface.dk'})
		})
	}
)
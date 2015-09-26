/**
 * Created by stasostapenko on 9/27/15.
 */

publish.onsubmit = function(){
	var xhr = new XMLHttpRequest();

	xhr.open('POST', '/publish', true);

	xhr.send(JSON.stringify({
		message: this.elements.message.value
	}));

	this.elements.message.value = '';

	return false;
};

//Long polling implementation
subscribe();

function subscribe() {
	var xhr = new XMLHttpRequest();

	xhr.open('GET', '/subscribe', true);

	xhr.onload = function() {
		var tr = document.createElement('tr'),
				td = document.createElement('td');

		td.textContent = this.response;
		tr.appendChild(td);

		messages.appendChild(tr);

		subscribe();
	};

	xhr.send('');


}



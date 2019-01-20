	var message = document.querySelector(".modal-message");
	var popup = document.querySelector(".modal-mail");
	var close = document.querySelector(".modal-close");
	message.addEventListener("click", function(evt) {evt.preventDefault();
	popup.classList.add("modal-show");
	});
	close.addEventListener("click", function(evt) {evt.preventDefault();
	popup.classList.remove("modal-show");
	});

	var map = document.querySelector(".contacts-map");
	var map_big = document.querySelector(".modal-map");
	var close_map = document.querySelector(".close-button");
	map.addEventListener("click", function(evt) {evt.preventDefault();
	map.classList.add("hidden");
	map_big.classList.remove("hidden");
	});
	close_map.addEventListener("click", function(evt) {evt.preventDefault();
	map_big.classList.add("hidden");
	map.classList.remove("hidden");
	});
	//test
	
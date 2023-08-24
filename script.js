let center = [57.09991019074067, 65.57224964817603];
/* передаем id (map-test) в конструктор ymaps.Map */
function init() {
	let map = new ymaps.Map("map-test", {
		center: center,
		zoom: 16,
	});

	/* Создаем гео-метку ДОП*/
	let placemark = new ymaps.Placemark(
		center,
		{
			/* Создаем балун по умолчанию */
			balloonContent: `
			<div class="balloon">
				<div class="balloon__address">Лучшие часы -только у НАС</div>
				<div class="balloon__contacts">
				<img src="./img/whatsapp.png" alt="icon">
					<a href="tel:+7999999999">+7999999999</a>
				</div>
			</div>
		`,
		},
		{
			/* создание custom метки */
			iconLayout: "default#image" /* объявляем что своя метка */,
			iconImageHref: "favicon.ico" /* путь до изображения */,
			iconImageSize: [30, 30],
			iconImageOffset: [-10, -40] /* выровнять по центру */,
		}
	);

	map.geoObjects.add(placemark); /* вызываем метод для гео-метки ДОП*/

	map.controls.remove("searchControl"); // удаляем поиск
	map.controls.remove("trafficControl"); // удаляем контроль трафика
	map.controls.remove("typeSelector"); // удаляем тип
	map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
	map.controls.remove("zoomControl"); // удаляем контроль зуммирования
	map.controls.remove("rulerControl"); // удаляем контроль правил
}

ymaps.ready(init);

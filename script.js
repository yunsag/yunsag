document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = '6a59b968e222478cb7580237243010'; // 여기에 WeatherAPI 키를 입력하세요
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=ko`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('날씨 정보를 가져오는 데 실패했습니다.');
            }
            return response.json();
        })
        .then(data => {
            const weatherInfo = `
                <h2>${data.location.name}, ${data.location.country}</h2>
                <img src="${data.current.condition.icon}" alt="${data.current.condition.text}">
                <p>온도: ${data.current.temp_c} °C</p>
                <p>상태: ${data.current.condition.text}</p>
                <p>습도: ${data.current.humidity}%</p>
                <p>바람 속도: ${data.current.wind_kph} km/h</p>
                <p>체감 온도: ${data.current.feelslike_c} °C</p>
            `;
            document.getElementById('weatherInfo').innerHTML = weatherInfo;
        })
        .catch(error => {
            document.getElementById('weatherInfo').innerHTML = `<p class="text-danger">${error.message}</p>`;
        });
});

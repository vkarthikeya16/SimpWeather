package com.example.weatherApplication.Controller;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/api/weather")
public class WeatherController {

    @GetMapping("/current")
    public ResponseEntity<String> getCurrentWeather(@RequestParam String city) {
        // Make an HTTP request to the weather API
        String apiKey = "c804c53d06ad71c788b14196d74f4336";
        String apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(apiUrl, String.class);
        return ResponseEntity.ok(result);
    }
}

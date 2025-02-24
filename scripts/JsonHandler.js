// class JsonHandler {
//     jsonLink = "event_databse.json";

//     constructor() {
//         // Initialize if needed
//     }

//     getCountOfCurrentLights() {
//         let lightCount = 0; 
        
//         return new Promise((resolve, reject) => {
//             fetch(this.jsonLink)
//                 .then(response => {
//                     if (!response.ok) {
//                         throw new Error('Network response was not ok');
//                     }
//                     return response.json();
//                 })
//                 .then(data => {
//                     // Assuming the JSON structure has a "current_lights" property
//                     lightCount = data.current_lights;
//                     resolve(lightCount);
//                 })
//                 .catch(error => {
//                     console.error('Error fetching the light count:', error);
//                     reject(error);
//                 });
//         });
//     }
// }
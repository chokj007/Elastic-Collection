let holderCounter = 0
// Declared the counters, and given it a value of 0.

// declared a noun button that refers to a button with a distinct id in our HTML
let holder = document.getElementById ('holder')
let truckImage = document.getElementById('truckImage')


let firstJSON = [

  {
  "image": "img/1.JPG",
  "location": "Haryana",
    "colors": "Red, Blue and Yellow",
    "type_of_vehicle": "Carrier Truck",
    "written_content": "Jay Badrinath,Jay Bajrang Bali, Jay Kedarthnath",
    "translation": "Victory/praise to God Badirinath repeat",
    "language": "Hindi",
    "license_plate": "HR 55 F0158" 
  },
  {
    "image": "img/2.jpg",
    "location": "Rajasthan",
    "colors": "Green and Red",
    "type_of_vehicle": "Truck",
    "written_content": "Shri Krishna, Ek aur tamana",
    "translation": "One more wish/desire",
    "language": "Hindi/Marvari",
    "license_plate": "RJ 21 GC 3757"
  },
  {
    "image": "img/3.JPG",
    "location": "Haryana",
    "colors": "Red and Yellow",
    "type_of_vehicle": "Truck",
    "written_content": "Daak, parcel and Illegible",
    "translation": "Transport or post by relays of men and horses and Parcel",
    "language": "Hindi/Gujarati",
    "license_plate": "HR 55 V3390"
  },
  {
    "image": "img/4.jpg",
    "location": "Haryana",
    "colors": "Red, orange, Yellow and Green",
    "type_of_vehicle": "Truck",
    "written_content": "Buri Nazar Waale Tera Muh Kaala, Ma kar Ashirvadh",
    "translation": "I really like weapons",
    "language": "Hindi",
    "license_plate": "HR 37 B5509"
  },
  {
    "image": "img/5.jpg",
    "location": "Bhutan",
    "colors": "Blue and Red",
    "type_of_vehicle": "Tanker Truck",
    "written_content": "Unknown",
    "translation": "-",
    "language": "Dzonghka/Tibetan or Nepalese.",
    "license_plate": "BP 2 A8161"
  },
  {
    "image": "img/6.JPG",
    "location": "Haryana",
    "colors": "Blue and white",
    "type_of_vehicle": "Truck",
    "written_content": "Koi tayar koi paagal, koi bimaar ban jaye; tumhari tasveer  jo dekhey, vo kudh tasveer ban jaye",
    "translation": "Some become tailors, some are crazy, and some are sick; if someone sees your picture; they'd become pictures themselves",
    "language": "Hindi",
    "license_plate": "HR 55 X 1746"
  },
  {
    "image": "img/7.JPG",
    "location": "Jharkand",
    "colors": "Pastel Blue, Red, Purple and Yellow",
    "type_of_vehicle": "Container Truck",
    "written_content": "Log manzil ko mushkil samajhte hai, hum mushkil ko manzil samajhte hai",
    "translation": "People think the destination is difficult or the problem to reach, I believe the problem is the destination",
    "language": "Hindi",
    "license_plate": "JK 09 B 2674"
  },
  {
    "image": "img/8.JPG",
    "location": "Delhi",
    "colors": "Yellow, Red and Green",
    "type_of_vehicle": "Carrier Truck",
    "written_content": "Beti Bachao, Beti padhao",
    "translation": "Save the girl child and educate her",
    "language": "Hindi",
    "license_plate": "DL 1LR 7930"
  },
  {
    "image": "img/9.JPG",
    "location": "Haryana",
    "colors": "Light blue and white",
    "type_of_vehicle": "Carrier Truck",
    "written_content": "I love India , Bhagya laxmi, Hindustani Chamya",
    "translation": "Lucky-godess laxmi, Indian Item girl",
    "language": "Hindi",
    "license_plate": "HR46 5 5061"
  },
  {
    "image": "img/10.png",
    "location": "Uttar Pradesh",
    "colors": "Rust brown and Blue",
    "type_of_vehicle": "Truck",
    "written_content": "Yeh neem ka pedh chandan se kam nahi, hamari lucknow, london se kum nahi",
    "translation": "This neem tree is non less than sandalwood, our lucknow, is no less than london",
    "language": "Hindi",
    "license_plate": "Unknown"
  },
  {
    "image": "img/11.jpg",
    "location": "Unknown",
    "colors": "Yellow, Black and White",
    "type_of_vehicle": "Rickshaw/ tuk tuk",
    "written_content": "Unknown",
    "translation": "I will become a Corolla when I grow up",
    "language": "Urudu",
    "license_plate": "D09891"
  },
  {
    "image": "img/12.jpg",
    "location": "Nepal",
    "colors": "Green and Purple",
    "type_of_vehicle": "Carrier Truck",
    "written_content": "Nike with a swoosh, Shri pushpathi nath ki jai, Swagatham, shubh yatra",
    "translation": "Nike, Victory/praise to shri psuhpati goddes, many greetings",
    "language": "Hindi and englsih",
    "license_plate": "NA 3 KH 8106"
  },
  {
    "image": "img/13.jpg",
    "location": "Pakistan",
    "colors": "Orange and Red",
    "type_of_vehicle": "Jingle Truck",
    "written_content": "Unknown",
    "translation": "-",
    "language": "Urdu",
    "license_plate": "TKA 454"
  },
  {
    "image": "img/14.jpg",
    "location": "Maharastra",
    "colors": "Red",
    "type_of_vehicle": "Carrier Truck",
    "written_content": "Goods carrier Shoobh laabh",
    "translation": "Goods carrier, wish you good profits",
    "language": "Hindi and english",
    "license_plate": "MH. 04\nCG•1161"
  },
  {
    "image": "img/15.jpg",
    "location": "Karnataka",
    "colors": "Blue and Yellow",
    "type_of_vehicle": "Carrier Truck",
    "written_content": "Varuvanvadivelan , soorya Kalha",
    "translation": "A tamil language film name, sun art",
    "language": "English (Phonetically in hindi)",
    "license_plate": "КА-05 nAF-666"
  },
  {
    "image": "img/16.jpg",
    "location": "Jharkand",
    "colors": "Rust brown",
    "type_of_vehicle": "Tanker Truck",
    "written_content": "Use dipper at ngiht, Liver box",
    "translation": "Use of dipper lights at night so as to prevent blinding the drivers approaching from the opposite direction",
    "language": "English (Phonetically in hindi)  and Hindi",
    "license_plate": "JK 02 AH 9135"
  },
  {
    "image": "img/17.jpg",
    "location": "Unknown",
    "colors": "Dark Brown, Light Blue, Green and White",
    "type_of_vehicle": "Unknown",
    "written_content": "Unknown",
    "translation": "Knowledge is power!",
    "language": "Urdu",
    "license_plate": "Unknown"
  },
  {
    "image": "img/18.jpg",
    "location": "Gujarat",
    "colors": "Blue, Red and Yellow",
    "type_of_vehicle": "Carrier Truck",
    "written_content": "Buri Nazar Waale Tera Muh Kaala , maa ka mumta Trust in god",
    "translation": "The one who has an evil eye on me ,may your face be smeared black and hence shamed, mom's love, trust in god",
    "language": "Hindi and english",
    "license_plate": "Unknown"
  },
  {
    "image": "img/19.jpg",
    "location": "Unknown",
    "colors": "Blue and orange",
    "type_of_vehicle": "Unknown",
    "written_content": "Unknown",
    "translation": "Heart for sale, price? Only one smile",
    "language": "Urdu",
    "license_plate": "Unknown"
  },
  {
    "image": "img/20.jpg",
    "location": "Unknown",
    "colors": "Pastel Pink, Green and Orange",
    "type_of_vehicle": "Container Truck",
    "written_content": "Unknown",
    "translation": "As long as you squander gold, the world is under your control; Just pull your hand a little and see, How selfish the world is..",
    "language": "Urdu",
    "license_plate": "FKS-867"
  },
  {
    "image": "img/21.jpg",
    "location": "Unknown",
    "colors": "Dark Pink, Yellow and Black",
    "type_of_vehicle": "Unknown",
    "written_content": "Unknown",
    "translation": "Whenever there was a difficult situation in life; no brakes accompanied, no gear came in handy",
    "language": "Urdu",
    "license_plate": "Unknown"
  },
  {
    "image": "img/22.jpg",
    "location": "Rajasthan",
    "colors": "warm colors",
    "type_of_vehicle": "Carrier Truck",
    "written_content": "Samay se pehle bhagya se zyada kabhi nahi milta",
    "translation": "Nothing will ever come to us earlier than when it was supposed to, and nothing will ever be more than our share of luck",
    "language": "Hindi",
    "license_plate": "RJ 19 GD2177"
  },
  {
    "image": "img/23.jpg",
    "location": "Rajasthan",
    "colors": "primary cool colors",
    "type_of_vehicle": "Carrier Truck",
    "written_content": "Has mat pagli pyaar ho jaaega",
    "translation": "Don't smile silly, I'll fall in love",
    "language": "Hindi",
    "license_plate": "RJ  30 GB 6005"
  },
  {
    "image": "img/24.jpg",
    "location": "Himachal Pradesh",
    "colors": "Blue, Red, Yellow and Grey",
    "type_of_vehicle": "Container Truck",
    "written_content": "Mitra nu shonk hathyaran da",
    "translation": "I really like weapons",
    "language": "Punjabi",
    "license_plate": "HP 62 2260"
  },
  {
    "image": "img/25.jpg",
    "location": "Unknown",
    "colors": "Orange and Blue",
    "type_of_vehicle": "Carrier Truck",
    "written_content": "Shauk nahi madam majburi hai, 1081 chalana zaruri hai",
    "translation": "It is not my hobby madam; driving 1081 is my necessity (the truck number)",
    "language": "Hindi",
    "license_plate": "Unknown"
  },
  {
    "image": "img/26.jpg",
    "location": "Unknown",
    "colors": "Unknown (only back colors visible",
    "type_of_vehicle": "Unknown",
    "written_content": "Vishwaas vaham hai, sachchaai jooth hai",
    "translation": "Trust is a hallucination, truth is false",
    "language": "Hindi",
    "license_plate": "Unknown"
  },
  {
    "image": "img/27.jpg",
    "location": "Rajasthan",
    "colors": "Red, Yellow and Green",
    "type_of_vehicle": "Carrier Truck",
    "written_content": "Aaye din bahaar ke",
    "translation": "Spring has arrived",
    "language": "Hindi",
    "license_plate": "RJ 38 SR 1830"
  },
  {
    "image": "img/28.jpg",
    "location": "Rajasthan",
    "colors": "White",
    "type_of_vehicle": "Container Truck",
    "written_content": "Humari chalti hain Logon ki jalti hain…Buri nazar wale nasbandi karaaley",
    "translation": "People are jealous of our growth… Those with evil eyes should get vasectomy done",
    "language": "Hindi",
    "license_plate": "RJ 14 (illegible)"
  },
  {
    "image": "img/29.jpg",
    "location": "Unknown",
    "colors": "Yellow and White",
    "type_of_vehicle": "Unknown",
    "written_content": "Dum hai to cross kar, varna bardash kar",
    "translation": "Overtake me if you have the balls, or else tolerate being stuck behind",
    "language": "Hindi",
    "license_plate": "Illegible"
  },
  {
    "image": "img/30.jpg",
    "location": "Unknown",
    "colors": "White",
    "type_of_vehicle": "Carrier Truck",
    "written_content": "Jara kum pi meri raani, bahut manghai hai, iraq ka pani",
    "translation": "Drink less (dear) vehicle, fuel is really expesnive",
    "language": "Hindi",
    "license_plate": "Illegible"
  },
  {
    "image": "img/31.jpg",
    "location": "Maharastra",
    "colors": "Rust brown",
    "type_of_vehicle": "Carrier Truck",
    "written_content": "Buri nazar wale, tu sau saal jiye, tere bacche daaru pi pi ke mare",
    "translation": "You, the one with ill thoughts, may you live a hundred years, and your kids die while drinking cheap liquor",
    "language": "Hindi",
    "license_plate": "MH 14 CP 8406"
  },
  {
    "image": "img/32.jpg",
    "location": "Maharastra",
    "colors": "Brown and Dull pink",
    "type_of_vehicle": "Small commerical vehicle",
    "written_content": "Use diaper at nite",
    "translation": "- (meant: use dipper lights at night)",
    "language": "Englsih",
    "license_plate": "MH 04 CG 2402"
  },
  {
    "image": "img/33.jpg",
    "location": "Unknown",
    "colors": "Rust brown and Pink",
    "type_of_vehicle": "Carrier Truck",
    "written_content": "Sonia gandhi tera mooh kala",
    "translation": "Politcal rant",
    "language": "Hindi",
    "license_plate": "illegible"
  },
  {
    "image": "img/34.jpg",
    "location": "Delhi",
    "colors": "White/Off-white",
    "type_of_vehicle": "Small commerical vehicle",
    "written_content": "Main bada hokar bada truck banoonga",
    "translation": "When I grow up, I will be a truck",
    "language": "Hindi",
    "license_plate": "DL IL K 1258"
  },
  {
    "image": "img/35.jpg",
    "location": "Unknown",
    "colors": "Rust brown and blue",
    "type_of_vehicle": "Carrier Truck",
    "written_content": "Awaz Dedo",
    "translation": "Throw me a shout!",
    "language": "Hindi",
    "license_plate": "Unknown"
  },
  {
    "image": "img/36.jpg",
    "location": "(asumed) Tamil Nadu",
    "colors": "White/Unknown",
    "type_of_vehicle": "Unknown",
    "written_content": "Ati kya khandala saath ma chodo sahiba",
    "translation": "Want to come to a secret place? Don't leave my side, love",
    "language": "Hindi",
    "license_plate": "Unknown"
  },
  {
    "image": "img/37.jpg",
    "location": "Unknown",
    "colors": "Dark and Olive green",
    "type_of_vehicle": "Carrier Truck",
    "written_content": "Jahaj ka baacha",
    "translation": "The offspring of a ship",
    "language": "Hindi/Punjabi",
    "license_plate": "Illegible"
  },
  {
    "image": "img/38.jpg",
    "location": "Rajasthan",
    "colors": "Blue and Pastel Yellow",
    "type_of_vehicle": "Carrier Truck",
    "written_content": "Dushmano ki dilki dhadkan, Raja",
    "translation": "sweetheart of the enemy, King",
    "language": "Hindi",
    "license_plate": "RJ 27 1G 0616"
  },
  {
    "image": "img/39.jpg",
    "location": "Madhya Pradesh",
    "colors": "Dark Grey",
    "type_of_vehicle": "Small commerical vehicle",
    "written_content": "Dheere chalogey toh baar baar milenge, tez chaloge toh haridvar milenge",
    "translation": "Go slow, we meet again, go fast, you'll meet Haridwar. (Which means you'll be off to Heaven)",
    "language": "Hindi",
    "license_plate": "MP 09 LN 6489"
  },
  {
    "image": "img/40.jpg",
    "location": "Unknown",
    "colors": "White",
    "type_of_vehicle": "Small commerical vehicle",
    "written_content": "chodo ufvhaye, lagao vaccine, maagega corona, zindigi hogi haseen",
    "translation": "Leave the rumors, get the vaccine- kill corona, life will be happy",
    "language": "Hindi",
    "license_plate": "Unknown"
  },
  {
    "image": "img/41.jpg",
    "location": "Unknown",
    "colors": "Maroon",
    "type_of_vehicle": "Carrier Truck",
    "written_content": "Maalik ki gaadi, driver ka passina, jalti hai road par, bankar haseen",
    "translation": "Owner (god) car, driver's sweat, burns on the road, while smilling",
    "language": "Hindi",
    "license_plate": "Unknown"
  },
  {
    "image": "img/42.jpg",
    "location": "Gujarat",
    "colors": "Green and Red-Orange",
    "type_of_vehicle": "Carrier Truck",
    "written_content": "Horn ok please",
    "translation": "Horn ok please",
    "language": "Englisih",
    "license_plate": "GJ 1 AT 321"
  },
  {
    "image": "img/43.jpg",
    "location": "Rajasthan",
    "colors": "Red, Blue, Yellow, Green and Dark Pink",
    "type_of_vehicle": "Carrier Truck",
    "written_content": "Chalti hai gaadi, udti hain dhool, jalte hain dushman, khilte hain phool",
    "translation": "The car moves, the dust rises, the enemy burns, and flowers bloom",
    "language": "Hindi",
    "license_plate": "RJ 29 GA 0352"
  },
  {
    "image": "img/44.jpg",
    "location": "Unknown",
    "colors": "Unknown/ Pink, yellow and blue",
    "type_of_vehicle": "Truck",
    "written_content": "No Girlfriend, no tension",
    "translation": "No Girlfriend, no tension",
    "language": "English",
    "license_plate": "Unknown"
  }
]

// CREATE DIFFERENT ARRAY OF BKG COLOR PALLATTES to circle through with the images 

for(let i=0; i<firstJSON.length; i++){ 

  // For every entry in this JSON file, we are goign to: 
holder.style.image = "100px"



  holder.addEventListener ('click', ()=> {
  // This variable is within a function- it is going to change cosntantly within the for loop
  // Essentially, on a click, the element will cycle through the arrays
  
    holderCounter++ 

    Placeholder.innerHTML = "<p>"+ "Written content: "+ firstJSON[holderCounter].written_content + "<br>" + "<br>"+ "Translation: " + firstJSON[holderCounter].translation + "<br>" + "<br>" + "Location: " + firstJSON[holderCounter].location + "<br>"+ "<br>" + "Language: " + firstJSON[holderCounter].language + "<p>"
    truckImage.src = firstJSON[holderCounter].image;

    
    if(holderCounter >= firstJSON.length -1) {
      holderCounter = 0
      }
  
    })

  }

    function search() {
      // This function will be called when the user submits a search query.

      const input = document.getElementById('searchInput').value.toLowerCase();
// This code gets the value of the input  with the ID "searchInput" and converts it to lowercase to mkae sure theres no error because of the case 


      const results = firstJSON.filter(obj => {
        return obj.colors.toLowerCase().includes(input) ||
               obj.location.toLowerCase().includes(input) ||
               obj.language.toLowerCase().includes(input);
      });
// The filter method is used to search through the firstJSON array- it creates a new array (results) containing only the elements of the firstJSON array that meet the searched criteria. 
// This function takes each element of firstJSON (represented by object) and returns true if any of data points are part of the search 

      displayResults(results);
      // This function will display the search results on the page.

    }

    
    function displayResults(results) {
      
      // This function will be called when search results need to be displayed.

      const container = document.getElementById('searchResults');
      container.innerHTML = ''; 
      // This code gets the element with the id "searchResults" and sets its innerHTML property to an empty string tp clear previous results

      if (results.length === 0) {
        const message = document.createElement('p');
      // Created a new p element 
        message.textContent = 'No results found.';
        // Used textContent property to say "No results found"

        message.classList.add('no-results'); // added a CSS class for styling
        container.append(message);
        container.classList.add('no-results'); // add class to remove grid layout
      }
      // If no data points are found, it shows "No results found". Checks if the results array is empty
    

      results.forEach(obj => {
        const item = document.createElement('div');
        item.classList.add('result');
         // Uses the forEach method to iterate over each object in the results array. For each object, a new div element is created and given the class "result"
    
        const image = document.createElement('img');
        image.src = obj.image;
        item.append(image);
        // An image element is created, src set to the value of 'image' and is then appended to item element
    
        const details = document.createElement('div');
        details.innerHTML = `<p>Written Content: ${obj.written_content}</p>
                             <p>Translation: ${obj.translation}</p>
                             <p>Location: ${obj.location}</p>
                             <p>Language: ${obj.language}</p>
                             <p>License Plate: ${obj.license_plate}</p>
                             <p>Color: ${obj.colors}</p>`;

        //  a new div element is created to hold the details of the search result. The details element is then appended to the item element, and the item element is appended to the container element. (maybe easier way to do)
        // Bascially, the function should create a new HTML element for each object in the (new) results array and add it to the "searchResults" container
       
        item.append(details);
    
        container.append(item);

        container.classList.remove('no-results'); // remove class to display grid layout
      });
}
    
    
  
const hornSounds = document.getElementById("hornSounds");
const mySound = document.getElementById("mySound");

let isPlaying = false;

hornSounds.addEventListener("click", function() {
 
  if (isPlaying) {
    mySound.pause();
    isPlaying = false;
  } else {
    mySound.play();
    isPlaying = true;
    hornSounds.classList.add("animate");
    setTimeout(function() {
      hornSounds.classList.remove("animate");
    }, 3000);
  }
});


let counterVar = 0;
let background = document.getElementById('bkgColors');

let imageArray = ['url(colors/1.png)','url(colors/2.png)','url(colors/3.png)','url(colors/4.png)',  
'url(colors/5.png)','url(colors/6.png)','url(colors/7.png)','url(colors/8.png)',  
'url(colors/9.png)','url(colors/10.png)','url(colors/11.png)','url(colors/12.png)',  
'url(colors/13.png)','url(colors/14.png)','url(colors/15.png)','url(colors/16.png)',  
'url(colors/17.png)','url(colors/18.png)','url(colors/19.png)','url(colors/20.png)',  
'url(colors/21.png)','url(colors/22.png)','url(colors/23.png)','url(colors/24.png)',  
'url(colors/25.png)','url(colors/26.png)','url(colors/27.png)','url(colors/28.png)',  
'url(colors/29.png)','url(colors/30.png)','url(colors/31.png)','url(colors/32.png)',  
'url(colors/33.png)','url(colors/34.png)','url(colors/35.png)','url(colors/36.png)',  
'url(colors/37.png)','url(colors/38.png)','url(colors/39.png)','url(colors/40.png)',  
'url(colors/41.png)','url(colors/42.png)','url(colors/43.png)','url(colors/44.png)',  ];



document.getElementById('truckImage').addEventListener('click', () => {
  counterVar++;
  if (counterVar > imageArray.length - 1) {
    counterVar = 0;
  }
  background.style.backgroundImage = imageArray[counterVar];
  background.style.backgroundRepeat= "no-repeat"
  background.style.backgroundPosition= "center"
  background.style.backgroundSize= "cover"
});

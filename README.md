#Reflektioner

##Komponenter
Vid en första anblick kan vi konstatera att Figma Make har gjort avesevärt många fler komponenter än vad vi har gjort. Vi kan också konstatera att Figma Make använt Typescript. En held del syntax vi inte känner igen. Sammanfattningsvis: Vi fattar ingenting! De flesta komponenter är helt obegripliga, och innehåller oproportionerligt mycket kod är känslan. 

Frågan är om alla komponenter verkligen används? Efter en koll så verkar det inte som det. Eller rättare sagt: inget i ui-mappen verkar användas..? Är de lite default-komponenter som alltid genereras typ..?

Navigation.tsx i Figma Make känns som en lite för stor komponent, mycket kod. Borde kunna brytas ner i mindre komponenter, till exempel sökformuläret och mobilmenyn. Men det finns såklart en bra förklaring varför Figma Make inte gjort så, men som övergår vårt förstånd.

##Pages 
Figma Make har en Not Found-page, det har inte vi. 

##Sökning 
Figma Make använde typ samma sätt för att söka med useParams. Dock hade Figma Make inte gjort egen komponent av sökfältet, medans favorit-ikon är en komponent. Sökningen finns väl bara på ett ställe och det kanske inte behöver vara en komponent i så fall. Finns ingen separat Search-page utan search ligger i Home.tsx (vår motsvarighet: LandingPage). 

Dock är Home.tsx intressant uppbyggd, om man inte söker efter nåt renderas Recommended movies, men om man söker så renderas sökressultat med samma tillståndsvaribel. Snyggt. Faktiskt väldigt intressant, och praktiskt att använda en grej till flera grejer, så att säga.

##Props
Figma Make verkar inte ha använt props i samma utsträckning som vi har. Figma verkar inte ha behövt { addFavorites, removeFavorites och Favorites } globalt och skicka som props som vi gjort. Utan ligger som exporterade funktioner, mer som vi gjorde i vanilla javascript. Vi föredrar väl det senare om vi ska vara ärliga.

##Interface
Figma Makes MovieCards använder "interface" för att bestämma props i komponenten, vilket var en nyhet för oss. Men verkar vara en intressant ... eeh vad det nu kallas (Typdefinition i Typescript förklarar AI..). Å andra sidan använder Figma det bara för att skapa sin egen databas, medans vi använder API.

##Styling
Figma Make använder Tailwind-styling... gillar vi inte. Känns onödigt krångligt. Hur utbrett är det att använda Tailwind? Alla css-filer ligger samlade i en Styles-mapp, inte tillsammans med konponentfilen. CSS-filerna innehåller dock revalivt lite styling, utan mestadels variabler.

##Burgarmeny
Figma Make hade en burgarmeny i mobilvy, som togglas mellan true eller false med en tillståndsvariabel. Känns som ett smidigt sätt att göra det på.








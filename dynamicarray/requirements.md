- Du skal bruge klassen [StaticArray](https://github.com/petlatkea/dsa-datastructures-2025/tree/main/staticarray) til det underliggende array, du må ikke bruge JavaScript’s indbyggede array.
- Du skal lave en klasse der hedder `DynamicArray`
- Du skal lave klassen i en mappe og fil kaldet `dynamicarray/dynamicarray.js`
- Du bestemmer selv hvad de “skjulte” properties/attributter skal hedde, og om de skal være direkte tilgængelige udefra eller ej - så længe din klasse har de krævede metoder med de angivne navne.
- `constructor` skal *kunne* modtage en `capacity`, og det “skjulte array” skal initialiseres med den størrelse.
    - Du bestemmer selv default capacity, hvis constructor bliver kaldt uden argument.
- Du skal have disse grundlæggende array-metoder:
    - `add( item )` - tilføjer et element til listen
    - `get( index )` - returnerer elementet på det pågældende index
    - `set( index, item )` - overskriver elementet på det pågældende index med et nyt
    - `size()` - returnerer antallet af elementer i listen
- Derudover skal du give adgang til disse ‘interne funktionaliteter’
    - `capacity()` - returnerer den aktuelle kapacitet, hvor meget array’et kan indeholde før det skal vokse igen
    - `grow()` - udvider arrayets kapacitet, skal normalt ***aldrig*** kaldes udefra!
- Og der skal være disse dynamiske liste-metoder:
    - `insert( index, item )` - indsætter et nyt element på det pågældende index, skubber det eksisterende element, og alle efterfølgende, en tak frem.
    - `remove( index )` - fjerner elementet på det pågældende index, trækker alle efterfølgende en tak tilbage.
    - `clear()` - fjerner alle elementer, så listen er tom.

*Du bestemmer selv om du vil have flere optionelle parametre i metoderne - dette er blot minimum.*

- Din kode må ikke være skyld i exceptions fra StaticArray, men må gerne selv throw’e nye exceptions (også `RangeException`)
- Der skal throwes en *exception*, helt specifikt en [RangeError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError), hvis programmet der anvender DynamicArray prøver at tilgå et ikke-eksisterende index. Det vil sige at alle metoder der modtager et `index`, skal sikre sig at det ikke går over størrelsen på listen, og hvis det går, så
    
    ```java
    throw new RangeError("Index must be ...");
    ```
    
    Du bestemmer selv den præcise tekst - men typen / klassen må ikke ændres.
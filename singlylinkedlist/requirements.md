- Du skal lave én klasse, `SinglyLinkedList`, der kan importeres af andre moduler
    
    Den klasse indeholder nodes, og hver node har to pointere: `next`, der peger mod en anden node, og `data`, der peger på det data objekt eller den data-værdi som denne node indeholder. 
    
    Du betemmer selv om du vil lave en `Node` klasse, eller blot lave nodes som anynome objekter.
    
- Din SinglyLinkedList klasse skal have en enkelt property der er tilgængelig udefra:
    - `head` - som henviser til den første node - eller `null` hvis listen er tom
- `constructor` behøver ikke kunne modtage noget, men skal bare initialisere en tom liste
- Du skal have en enkelt “afprøvnings”-metode:
    - `printList()` - der udskriver hele den linkede liste til konsollen, inklusive data og pointere
- Du skal have disse grundlæggende liste-metoder - de modtager og returnerer alle `data`-objekter og skjuler altså nodes for brugeren. Nogle af dem modtager også et index, som vil være det antal nodes frem i listen.
    - `add( data )` - opretter en ny node, med link til data-objektet, og tilføjer den til listen
    - `get( index )` - returnerer data på det pågældende index
    - `getFirst()` - returnerer data for den første node i listen
    - `getLast()` - returnerer data for den sidste node i listen (længst væk fra head)
    - `set( index, data )` - finder noden på det pågældende index, og erstatter dens data-pointer.
    - `insert( index, data )` - opretter en ny node og indsætter på det pågældende index - før den der allerede var der.
    - `remove( index )` - finder noden på det pågældende index, fjerner den, og returnerer dens data
    - `removeFirst()` - fjerner den første node i listen, og returnerer dens data
    - `removeLast()` - fjerner den sidste node i listen og returnerer dens data
    - `size()` - returnerer antallet af nodes i listen
    - `clear()` - fjerner alle nodes, så listen er tom
- Og du skal have metoder der alle modtager og returnerer `node`-objekter, og altså eksponerer listens indre for brugeren. Bemærk at man kun kan bruge en node som argument til en metode, hvis man tidligere har modtaget den som returværdi fra en anden metode.
    - `getNode( index )` - finder og returnerer noden på det pågældende index
    - `getFirstNode()` - returnerer den første node i listen
    - `getLastNode()` - returnerer den sidste node i listen
    - `getNextNode( node )` - returnerer noden umiddelbart efter den modtagne (eller `null`, hvis det var den sidste)
    - `getPreviousNode( node )` - returnerer noden før den modtagne (eller `null`, hvis det var den første)
    - `insertBefore( node, data )` - opretter en ny node med link til data-objektet, og indsætter den i listen *før* den eksisterende node.
    - `insertAfter( node, data )` - opretter en ny node med link til data-objektet, og indsætter den i listen *efter* den eksisterende node.
    - `removeNode( node )` - fjerner den pågældende node fra listen
# B.S.-Card-Game-using-JavaScript
This is the pre-development of the B.S. Card Game using JavaScript. Much help and input would be appreciated as I'm a beginner to
intermediate level at JavaScript and Object Oriented Programming.

Below is a rough draft of the design structure.
To find out more about the rules and game, you can go here: https://www.pagat.com/beating/cheat.html


-Defined Structure of Game using Objects and their : Methods/Attributes
Dealer
     Methods
          Shuffle Cards
          Distribute Cards to Players
          Determines the winner
     Attributes
          Decks -> 2
          Rules of the game


Discard Pile
     Methods
          Recieves cards from player to discard pile
          Allows all cards to be taken from discard pile
     Attributes
          Cards


Player
     Methods
          Call B.S.
          Pickup all cards from discard pile
          Discard certain # of cards to discard pile
          AI -> Decides if player is B.S.'ing
          Follows Rules of the game
          Reorder Cards in Seqeuntial order
     Attributes
          Type -> Human or AI
          Cards
          Knowledge about rules of the game

Screen / Sound Renderer
     Methods
          Display Mode -> Text, 2d, 3D
          Play Sound(s)
     Attributes
          Mode -> Text, 2D, 3D  

DOM -> Document Object Model
     Methods
          Get Events as input
     Attributes
          Button Presses        

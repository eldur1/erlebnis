
## Web project of generative website
Web experimental art :
An attempt to create a generative website.

## Install and commands
- `npm i` : install npm.
- `npm start` : run server locally.
- `npm start` : build on files changes, launch a dev server with browsersync.
- `npm run build` : clean, lint and build the project.
- `npm run clean` : clean the `dist` folder.


## Syntax & naming convention
- Functions written in camelCase.
- `n` in a function/ variable mean number 
- `r` as beginning of function/ variable mean random.
- `a` in a function/ variable mean array.
- `o` in a function/ variable mean object.
- No use of ; at end of line.

## MVP 

From chaos to order, the first version is really basic. It produce non predictable result and often ugly result.
The most important for the MVP is not to get the best algorithm but have an algorithm that work. 
We cannot jump this part. We need to see results that doesn't work to improve the algorithm. 
Here's a list of functionnality that the algorithm have in the MVP

### Generation tools :
- ✅ randomNumber()
- ✅ trueOrFalse()

### Color generation : 
- ✅ Five types of pallet 
- ✅ Background

### Font generation :
- ✅ Fon family (array of font)
- ✅ Lineheight
- ✅ Font size
- ✅ Random ratio 
- Color font (no readability check)

### Content generation : 
- Generation of words (no sentences)

### Layout generation : 
- Margin (body)
- Margin (elements)
- Alignment (Left, right, center)

## Beta 

Beta include a improved version of the algorithm. 

- Font generation use google font library to produce more unique generation. 
- A seed system to save the generation and reuse it. 
- Randomness cursor that add the possibility to choose the level of random, It allow the user to choose the balance between chaos and order. 
- For a more coherent page, the content generator create real sentences (not with real sense).
- The layout generation is also improved with a grid system.


### Generation : 
- Seed 
- Randomness cursor

### Font generation :
- Google Fonts
- Number of fonts
- Color font (readability check)


### Content generation : 
- Sentences maker 

### Layout generation : 
- Grid generation


## To improve

- modular javascript


## Credit(s)

Done by myself 
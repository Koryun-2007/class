class Shiritori {
    constructor(words, gameOver) {
        this.words = []
        this.gameOver = false
    }

    play(word) {
        if (this.gameOver) return 'Game over'
        if (this.words.includes(word)) {
            this.gameOver = true;
            return "game over";
        }
        if (this.words.length > 0) {
            const lastWord = this.words[this.words.length - 1];
            if (lastWord[lastWord.length - 1] !== word[0]) {
                this.gameOver = true;
                return "game over";
            }
        }
    this.words.push(word)
    return this.words
    }

    restart(){
        this.words = []
        this.gameOver = false
        return 'game over'
    }
}

let myShiritori = new Shiritori();

console.log(myShiritori.play("apple"));
console.log(myShiritori.play("ear")); 
console.log(myShiritori.play("rhino"));
console.log(myShiritori.play("corn"));

console.log(myShiritori.words);

console.log(myShiritori.restart());
console.log(myShiritori.words);

console.log(myShiritori.play("hostess"));
console.log(myShiritori.play("stash")); 
console.log(myShiritori.play("hostess")); 
class Token {
    constructor(index, owner){
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
        this.columnLocation = 0;
    }
    
    // id linked with token
    get htmlToken() {
        return document.getElementById(this.id);
    }
	
	
    // Gets left offset of elem
    get offsetLeft() {
        return this.htmlToken.offsetLeft;
    }
	
    
    // creates token and adds attributes to the token
    drawHTMLToken(){
        const token = document.createElement('div');
        document.getElementById('game-board-underlay').appendChild(token);
        token.setAttribute('id', this.id);
        token.setAttribute('class', 'token');
        token.style.backgroundColor = this.owner.color;
    }
	
	
    // move token to the left one position
    moveLeft() {
        if (this.columnLocation > 0) {
            this.htmlToken.style.left = this.offsetLeft - 76;
            this.columnLocation -= 1;
        } 
    }
    
    
    // move token to the right one position
    moveRight(columns) {
        if (this.columnLocation < columns - 1) {
            this.htmlToken.style.left = this.offsetLeft + 76;
            this.columnLocation += 1;
        }
    }
    
    
    // drops token and resets 
    
	drop(target, reset) {
        this.dropped = true;
        
        $(this.htmlToken).animate({
            top: (target.y * target.diameter)
        }, 750, 'easeOutBounce', reset);
	}
}
class Player {
    constructor(name, id, color, active = false) {
        this.name = name;
        this.id = id;
        this.color = color;
        this.active = active;
        this.tokens = this.createTokens(21);
    }
    
    
   // Create tokens for the player
    createTokens(num) {
        const tokens = [];
        
        for (let i = 0; i < num; i++) {
            let token = new Token(i, this);
            tokens.push(token);
        }
        
        return tokens;
    }
    
    
    // a filter of unused tokens
    get unusedTokens(){
        return this.tokens.filter(token => !token.dropped);
    }
    
    
    // assigns active token by taking the first unused token.
	get activeToken() {
        return this.unusedTokens[0];
    }
    

    // check for remaining tokens
    checkTokens(){
        return this.unusedTokens.length == 0 ? false : true;
    }
}
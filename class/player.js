const {Food} = require('./food');

class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
    }

    move(direction) {

        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;

            nextRoom.printRoom(this);
        } else {
            console.log("You cannot move in that direction");
        }
    }

    printInventory() {
        if (this.items.length === 0) {
            console.log(`${this.name} is not carrying anything.`);
        } else {
            console.log(`${this.name} is carrying:`);
            for (let i = 0 ; i < this.items.length ; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }

    takeItem(itemName) {
        // Fill this in
        this.items.push(this.currentRoom.getItemByName(itemName));
        let roomItems = this.currentRoom.items;
        for(let i = 0; i < roomItems.length; i++){
            if(roomItems[i].name === itemName) {
                roomItems.splice(i, 1);
                return;
            }
        }

    }

    dropItem(itemName) {
        // Fill this in
        this.currentRoom.items.push(this.getItemByName(itemName));
        let playerItems = this.items;
        for(let i = 0; i < playerItems.length; i++){
            if(playerItems[i].name === itemName) {
                playerItems.splice(i, 1);
                return;
            }
        }
    }

    eatItem(itemName) {
        // Fill this in
        let playerItems = this.items;
        for(let i = 0; i < playerItems.length; i++){
            let item = playerItems[i];
            if(item.name === itemName && item instanceof Food){
                playerItems.splice(i, 1);
                return;
            }
        }
    }

    getItemByName(name) {
        // Fill this in
        let auxItems = this.items;
        for(let i = 0; i < auxItems.length; i++){
            if(auxItems[i].name === name){
                return auxItems[i];
            }
        }
    }
}

module.exports = {
  Player,
};

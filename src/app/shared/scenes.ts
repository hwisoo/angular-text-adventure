import { Story } from '../story';

export const SCENES: any[] = [
    new Story("You are in the living room", "You encounter a zombie. What do you want to do?", "Run", "Attack", "Call for Help", 1, 2, 3),
    new Story("You run from the zombie and manage to escape to the attic.", "The zombie is following you.", "Hide in the closet.", "Stand and fight.", "Jump out the window.", 4, 2, 5),
    new Story("You attacked the zombie and defeated it", "Where do you wanna go next?", "Kitchen", "Bedroom", "Outside", 4, 5, 6),
    new Story("You call for help and more zombies come running.", "They grab you and eat you.", "Start Over", "Start Over", "Start Over", 0, 0, 0),


]
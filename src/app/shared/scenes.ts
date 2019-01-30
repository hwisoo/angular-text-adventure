import { Story } from '../story';

export const SCENES: any[] = [
    // living room / encounter zombie
    new Story("You are in the living room", "You encounter a zombie. What do you want to do?", ["Run", "Attack", "Call for Help"], [1, 2, 3], 0),
    
    // living room /outcome
    new Story("You run from the zombie and manage to escape to the attic.", "The zombie is following you.", ["Stand and fight.", "Jump out the window."], [2, 4], 0),
    new Story("You attacked the zombie and defeated it, but it did some damage.", "Where do you wanna go next?", ["Kitchen", "Bedroom", "Outside"], [5, 6, 7], 25),
    new Story("You call for help and more zombies come running.", "They grab you and eat you.", ["Start Over"], [0], 100),
    new Story("You jump from the window.", "As you fall you reflect on the stupidity of your decision.", ["Start Over"], [0], 100),

    //kitchen #5
    new Story("You wander into the kitchen and find some chicken in the fridge.", "This could restore your health.", ["Eat it", "Move on to the bedroom."], [8, 6], 0),

    //bedroom #6
    new Story("You move to the bedroom. There is nothing interesting here.", "Go outside?", ["yes", "no"], [7, 6], 0),

    //outside
    new Story("You go outside and hear a helicopter flying overhead.", "You wonder if they are friendly.", ["Run for cover", "Wave the helicopter down"], [9, 10], 0),

    new Story("You eat the chicken and immediately feel worse.", "Where to next?", ["Bedroom", "Outside"], [6, 7], 30),
    new Story("You eat the chicken and immediately feel worse.", "Where to next?", ["Bedroom", "Outside"], [6, 7], 30),
    new Story("You flag down the helicopter and get flown to safety.", "You win!", ["Start Over"], [0], 0),

]
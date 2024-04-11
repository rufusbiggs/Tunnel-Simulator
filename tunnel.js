// Imitates travelling down a tunnel

const CAVE_WIDTH = 100;
const SPEED = 0.2;
const TUNNEL_WIDTH = 10;

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const startGame = () => {
  rl.question("Welcome to tunnel simulator! Press 'crtl' + 'c' to stop simulation. Enter 'run' to play!", (input) => {
    if (input === 'run' || input === 'r') {
      console.log('Game started!');
      simulateTunnel();
    } else {
      console.log('Invalid input. Please enter "run" to start the game.');
      startGame();
    }
  });
};

const pause = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const simulateTunnel = async () => {
    // define start left width
    let left = Math.floor(CAVE_WIDTH / 2) - Math.floor(TUNNEL_WIDTH / 2);
    let right;

    while (true) {
        // if user presses ctrl + c break
        right = CAVE_WIDTH - left - TUNNEL_WIDTH;

        let leftString = '#'.repeat(left);
        let rightString = '#'.repeat(right);
        let space = ' '.repeat(TUNNEL_WIDTH);
        console.log(leftString + space + rightString);
        await pause(SPEED * 1000);

        // randomly increase / decrease left + right
        let randomNum = Math.random();
        if (randomNum < 0.4 && left > 1) {
            left--;
        }
        else if (randomNum < 0.8 && right < 99) {
            left++;
        }
        // else nothing
    }
}

startGame();
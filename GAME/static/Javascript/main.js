
const game_canvas = document.querySelector('canvas');
const canvas = game_canvas.getContext('2d');

let ground = new Box(0, game_canvas.height-20, game_canvas.width, 20, 'green');
ground.print();
ground.show();


window.addEventListener("keydown", (event) => {
  console.log(event.key);
  if (player.preventInput) return;
  switch (event.key) {
    case "ArrowUp":
      for (let i = 0; i < doors.length; i++) {
        const door = doors[i];
        if (
          player.hitbox.position.x + player.hitbox.width <=
            door.position.x + door.width &&
          player.hitbox.position.x >= door.position.x &&
          player.hitbox.position.y + player.hitbox.height >= door.position.y &&
          player.hitbox.position.y <= door.position.y + door.height
        ) {
          player.velocity.x = 0;
          player.velocity.y = 0;
          player.preventInput = true;
          player.switchSprite("enterDoor");
          door.play();
          return;
        }
      }

      if (player.velocity.y == 0) {
        player.velocity.y = -20;
      }
      break;

    case "ArrowRight":
      keys.ArrowRight.presses = true;
      break;

    case "ArrowLeft":
      keys.ArrowLeft.presses = true;
      break;

    case "e":
      keys.e.presses = true;
      console.log(keys.e.presses);
      break;
  }
});

window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "ArrowRight":
      keys.ArrowRight.presses = false;
      break;

    case "ArrowLeft":
      keys.ArrowLeft.presses = false;
      break;

    case "e":
      keys.e.presses = false;
      break;
  }
});

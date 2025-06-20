const Sequence = ["a", "b", "c", "d", "e"];
let currentPosition = 0;
let remainingLocks = 2;
let finished = false;

let lock1Finished = false;
let lock2Finished = false;
let currentLock = 1;

const terminal = document.getElementById("terminal");
const locksDisplay = document.getElementById("locks");

document.addEventListener("keydown", function (event) {
  if(finished||currentLock!== 1)
     return;

  const key = event.key.toLowerCase();
  console.log("KeyPress", key);


  if(key === Sequence[currentPosition]) {
    currentPosition++;
    updateTerminal(`Correct key: ${key}`);
    if (currentPosition === Sequence.length) {
      lock1Finished = true;
      updateTerminal("First vault unlocked. Moving to Lock 2...");
      currentLock = 2;
      startTimingLock();
    }
  } else { 
    remainingLocks--;
    updateLocksDisplay();
    if (remainingLocks <= 0) {
      failFirstLock();
    } else {
      updateTerminal(
        `Wrong key! Sequence reset. You have ${remainingLocks} attempts remaining.`,
        "fail"
      );
    }
  }
});

function updateTerminal(message, className = "") {
  terminal.innerHTML += `<div>${message}</div>`;
  
}

function updateLocksDisplay() {
  locksDisplay.textContent = `Locks Remaining: ${remainingLocks}`;
}

function failFirstLock() {
  terminal.classList.add("fail");
  updateTerminal("First lock failed. Switching to Lock Type 2 - Timing Lock", "fail");
  lock1Finished = false;
  currentLock = 2;
  startTimingLock();
}

function lockout() {
  finished = true;
  terminal.classList.add("fail");
  updateTerminal("MAXIMUM ATTEMPTS EXCEEDED", "fail");
  updateTerminal("SYSTEM LOCKED", "fail");
  updateTerminal("SECURITY ALERTED", "fail");
}


// 2nd Game
function startTimingLock() {
  let round = 0;
  let lastTime = null;
  const roundsRequired = 5;
  const diff = 300;

  updateTerminal("Lock Type 2 - Timing Lock");
  updateTerminal("Press the spacebar every 1 second for 5 rounds.");

  document.addEventListener("keydown", spaceHandler);


  function spaceHandler(e) {
    if (e.code !== "Space")
         return;

    const now = performance.now();

    if (lastTime === null) {
      lastTime = now;
      round++;
      updateTerminal(`Round ${round} started`);
      return;
    }

    const delta = now - lastTime;
    lastTime = now;

    if (Math.abs(delta - 1000) > diff) {
      updateTerminal(`Too fast or slow!${Math.round(delta)}ms`, "fail");
      document.removeEventListener("keydown", spaceHandler);
      lockout();
      return;
    }

    round++;
    updateTerminal(`Round ${round} OK (${Math.round(delta)}ms)`);

    if (round === roundsRequired) {
      document.removeEventListener("keydown", spaceHandler);
      lock2Finished = true;
      updateTerminal("Timing lock passed!");
      updateTerminal("Vault unlocked ")
      unlockVault();
    }
  }

}

function initGame() {
  updateTerminal("VAULT SECURITY SYSTEM v1.0");
  updateTerminal("(a,b,c,d,e) Enter the 5-key sequence to unlock.");
}

function unlockVault() {
  if (!lock1Finished || !lock2Finished)
     return;

  finished = true;
  updateTerminal("SEQUENCE ACCEPTED", "success");
  updateTerminal("VAULT UNLOCKED", "success");
  updateTerminal("ACCESS GRANTED", "success");

  terminal.innerHTML = terminal.innerHTML.replace(
    "Press any key to begin...",
    ""
  );
}

// Start the game
initGame();

function bingo(ticket, win) {
    let miniWins = 0;
    
    for (const [str, code] of ticket) {
      const char = String.fromCharCode(code);
      if (str.includes(char)) miniWins++;
    }
    
    return miniWins >= win ? 'Winner!' : 'Loser!';
  }
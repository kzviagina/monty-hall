const selectDoor = () => Math.floor(Math.random() * 3); //doors amount

const generateGames = total => Array(total).fill().map(() => selectDoor());

const simulateGames = (amount, switchDoor) => {
    const total = parseInt(amount, 10);
    const games = generateGames(total);
    let success = 0;

    games.forEach(g => {
        let choice = selectDoor();
        if ((choice === g && !switchDoor) || (choice !== g && switchDoor)) {
            success++;
        }

    });

    return { total, success };
};

module.exports.create = simulateGames;
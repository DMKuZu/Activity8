const countdownDate = new Date('May 18, 2024 00:00:00').getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    let distance = countdownDate - now;

    //if mulapas na may 18
    if (distance < 0) {
        const expiredDate = new Date(countdownDate);
        expiredDate.setFullYear(expiredDate.getFullYear() + 1);
        distance = expiredDate.getTime() - now;
    }

    //for the computation
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //para naay countdown
    document.getElementById('countdown').innerHTML = `
        <div>${days}d ${hours}h ${minutes}m ${seconds}s</div>
    `;
}, 1000);
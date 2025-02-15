document.getElementById('yesButton').addEventListener('click', function() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
    alert('Yay! You made me the happiest person alive! 🎉❤️');
});

document.getElementById('noButton').addEventListener('click', function() {
    alert('Are you sure? Think again! 😊');
});
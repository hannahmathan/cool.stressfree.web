function showQuote() {
    const quotes = [
        "🌸 You are enough.",
        "☀️ One step at a time.",
        "💙 Take a deep breath.",
        "🌿 Every day is a fresh start.",
        "✨ Believe in yourself!"
    ];

    const random = Math.floor(Math.random() * quotes.length);
    alert(quotes[random]);
}

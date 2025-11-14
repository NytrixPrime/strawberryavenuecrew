async function sendFeedback(event) {
    event.preventDefault();

    // Prende i dati dal form
    const name = document.getElementById("name").value;
    const rating = document.getElementById("rating").value;
    const message = document.getElementById("message").value;

    // Prepara il messaggio da mandare al webhook
    const payload = {
        embeds: [
            {
                title: "📨 Nuovo Feedback ricevuto",
                color: 0xFF0000,
                fields: [
                    { name: "👤 Nome", value: name || "Non specificato" },
                    { name: "⭐ Voto", value: rating },
                    { name: "💬 Commento", value: message || "Nessun commento inserito" }
                ],
                footer: {
                    text: "Feedback inviato dal sito ufficiale S.A.C"
                },
                timestamp: new Date()
            }
        ]
    };

    // Invia al webhook
    await fetch("https://discord.com/api/webhooks/1438976519228624956/6W3HAsNNVkpqavP2mGr5ofnARHZA5CqGncEFTW6_to2eL7BDrQrtVxW54Lq6Q0x-as4P", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });

    // Messaggio di conferma nel sito
    alert("Feedback inviato con successo! Grazie.");
}

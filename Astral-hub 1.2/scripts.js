document.addEventListener('DOMContentLoaded', () => {
    const copyButton = document.getElementById('copyIP');
    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText('MC.ASTRALHUB.XYZ').then(() => {
            alert('Copiado');
        }).catch(err => {
            console.error('Error copying text: ', err);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Simulación de contador de jugadores
    function updatePlayerCount() {
    const playerCountElements = document.querySelectorAll('.player-count-number');
    playerCountElements.forEach(element => {
        const randomPlayers = Math.floor(Math.random() * 50) + 1;
        element.textContent = randomPlayers;
        element.classList.add('highlight');
        setTimeout(() => element.classList.remove('highlight'), 2000);
    });
    }

    // Actualizar contador cada 30 segundos
    updatePlayerCount();
    setInterval(updatePlayerCount, 30000);

    // Efecto hover en features
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach(item => {
    item.addEventListener('mouseover', function() {
        const tooltip = this.getAttribute('data-tooltip');
        if (tooltip) {
        const tooltipElement = document.createElement('div');
        tooltipElement.className = 'tooltip';
        tooltipElement.textContent = tooltip;
        tooltipElement.style.position = 'absolute';
        tooltipElement.style.background = 'rgba(0, 0, 0, 0.8)';
        tooltipElement.style.padding = '5px 10px';
        tooltipElement.style.borderRadius = '4px';
        tooltipElement.style.fontSize = '0.9rem';
        tooltipElement.style.zIndex = '1000';
        tooltipElement.style.top = `${this.offsetTop - 30}px`;
        tooltipElement.style.left = `${this.offsetLeft}px`;
        this.parentNode.appendChild(tooltipElement);

        this.addEventListener('mouseout', function() {
            tooltipElement.remove();
        });
        }
    });
    });

    // Efecto de click en botones
    const joinButtons = document.querySelectorAll('.join-button');
    joinButtons.forEach(button => {
    button.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => this.style.transform = '', 150);
        
        // Aquí puedes agregar la lógica para unirse al servidor
        console.log('¡Uniendo al servidor!');
    });
    });
});

document.querySelectorAll('.pack-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.animation = 'glow 2s infinite';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.animation = 'none';
    });
});

document.querySelectorAll('.pack-button').forEach(button => {
    button.addEventListener('click', () => {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 100);
    });
});

async function updateDiscordStats() {
    try {
        const response = await fetch("https://discord.com/api/v9/invites/FkmbfMYv?with_counts=true");
        const data = await response.json();

        if (data.approximate_member_count) {
            document.getElementById("discord-members").innerText = `${data.approximate_member_count} miembros online`;
        }
    } catch (error) {
        console.error("Error obteniendo datos de Discord:", error);
    }
}

// Actualiza cada 30 segundos
setInterval(updateDiscordStats, 30000);
updateDiscordStats();


// JavaScript para la funcionalidad de las FAQs
document.addEventListener('DOMContentLoaded', function() {
    // Manejar clicks en los botones FAQ
    const faqButtons = document.querySelectorAll('.faq-button');
    
    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const faqItem = button.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Cerrar todos los FAQs
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Si el FAQ clickeado no estaba activo, abrirlo
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
});

// Función para copiar la IP
function copyIP() {
    navigator.clipboard.writeText('mc.astralhub.xyz');
    const button = document.querySelector('.ip-button');
    const originalText = button.textContent;
    button.textContent = '¡IP COPIADA!';
    
    setTimeout(() => {
        button.textContent = originalText;
    }, 2000);
}
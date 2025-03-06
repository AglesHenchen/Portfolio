const canvas = document.getElementById('matrix'); //Canvas HTML
const ctx = canvas.getContext('2d'); //Contexto

canvas.width = window.innerWidth; //Define o canvas para pegar toda a tela
canvas.height = window.innerHeight;

const digitos = '0123456789'.split('');
const fontSize = 16;
const colunas = canvas.width / fontSize;

const drops = [];

for (let x = 0; x < colunas; x++) //Inica o drop de cada coluna
{
    drops[x] = 1;
}

function Matrix()
{
    ctx.fillStyle = 'rgba(0,0,0,0.1)'; //Opacidade do fim do drop
    ctx.fillRect(0,0, canvas.width, canvas.height);
    ctx.fillStyle = 'green'; //Cor do drp
    ctx.font = fontSize + 'px arial';
    
    for(let x = 0; x < drops.length; x++)
    {
        let text = digitos[Math.floor(Math.random()*digitos.length)];
        ctx.fillText(text, x*fontSize, drops[x]*fontSize);

        if(drops[x] * fontSize > canvas.height || Math.random() > 0.98) //Reinicia o drop de forma aleatoria
        {
            drops[x] = 0;
        }

        drops[x]++;
    }

}

setInterval(Matrix, 50); //Velocidade do drop
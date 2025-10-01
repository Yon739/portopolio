// Inisialisasi partikel background
particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
        }
    },
    retina_detect: true
});

function clock() {
    var jam = document.getElementById('jam');
    var menit = document.getElementById('menit');
    var detik = document.getElementById('detik');
    var ampm = document.getElementById('ampm');
    var dateDisplay = document.getElementById('date');

    var now = new Date();
    var j = now.getHours();
    var m = now.getMinutes();
    var d = now.getSeconds();
    var pagiMalam = "AM";

    if (j >= 12) {
        if (j > 12) j -= 12;
        pagiMalam = "PM";
    }

    // Jika jam 0 (tengah malam), ubah menjadi 12
    if (j === 0) j = 12;

    j = (j < 10) ? "0" + j : j;
    m = (m < 10) ? "0" + m : m;
    d = (d < 10) ? "0" + d : d;

    // Tambahkan efek transisi saat angka berubah
    if (jam.innerHTML !== j) {
        jam.style.transform = "scale(1.1)";
        setTimeout(() => { jam.style.transform = "scale(1)"; }, 200);
    }
    
    if (menit.innerHTML !== m) {
        menit.style.transform = "scale(1.1)";
        setTimeout(() => { menit.style.transform = "scale(1)"; }, 200);
    }
    
    if (detik.innerHTML !== d) {
        detik.style.transform = "scale(1.1)";
        setTimeout(() => { detik.style.transform = "scale(1)"; }, 200);
    }

    jam.innerHTML = j;
    menit.innerHTML = m;
    detik.innerHTML = d;
    ampm.innerHTML = pagiMalam;

    // Format tanggal dalam Bahasa Indonesia
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    dateDisplay.innerHTML = now.toLocaleDateString('id-ID', options);
}

// Jalankan jam segera setelah halaman dimuat
clock();

// Update jam setiap detik
setInterval(clock, 1000);
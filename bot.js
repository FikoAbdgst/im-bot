const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loading = document.getElementById("loading")
const container = document.getElementsByClassName("container")

let init = 0


const botSay = (data) => {
    return [
        `Perkenalkan saya Pikobot. Siapa nama kamu?`,
        `Halo ${data?.nama}, usia kamu brapa?`,
        `Oohh ${data?.usia}, Kalo kamu hobi apa ya?`,
        `Waaww sama dong aku juga hobi ${data?.hobi},btw kamu punya pacar ga?`,
        `Ohhh ${data?.pacar} ya, okedeh kalo gitu, udahan yah?`
    ]
}
pertanyaan.innerHTML = botSay()[0]
let usersData = []

function botStart() {
    if (jawaban.value.length < 1) return alert("Silahkan Isi Jawaban terlebih dahulu")
    init++
    if (init === 1) {
        botDelay({ nama: jawaban.value })
    } else if (init === 2) {
        botDelay({ usia: jawaban.value })
    } else if (init === 3) {
        botDelay({ hobi: jawaban.value })
    } else if (init === 4) {
        botDelay({ pacar: jawaban.value })

    } else if (init === 5) {
        finishing()
    } else {
        botEnd()
    }

}


function botDelay(jawabanUser) {
    loading.style.display = "block"
    container[0].style.filter = "blur(8px)"
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
        loading.style.display = "none"
        container[0].style.filter = "none"
    }, [1500])
    usersData.push(jawaban.value)
    jawaban.value = ""
}

function finishing() {
    pertanyaan.innerHTML = `Thanks ya ${usersData[0]} dah main ke Pikobot, 
    kali-kali kita ${usersData[2]} bareng ya!`
    jawaban.value = "Siap, Thanks juga"
}

function botEnd() {
    alert(`Terima kasih ${usersData[0]} telah berkunjung, anda akan di arahkan ke halaman awal`)
    window.location.reload()
}
/* script.js */
const GITHUB_RAW = "https://raw.githubusercontent.com/allpeacein23-dotcom/Vinaya/main/";

const niCategoryMap = {
    'parajika.json': 'ပါရာဇိက (၈) ပါး',
    'sanghadisesa.json': 'သံဃာဒိသိသ် (၁၇) ပါး',
    'nissaggiya.json': 'နိဿဂ္ဂိယပါစိတ် (၃၀) ပါး',
    'pacittiya.json': 'သုဒ္ဓပါစိတ် (၁၆၆) ပါး',
    'patidesaniya.json': 'ပါဋိဒေသနီ (၈) ပါး',
    'sekhiya.json': 'သေခိယ (၇၅) ပါး',
    'samatha.json': 'အဓိကရဏသမထ (၇) ပါး'
};

const bhikkhuCategoryMap = {
    'parajika.json': 'ပါရာဇိက (၄) ပါး',
    'sanghadisesa.json': 'သံဃာဒိသိသ် (၁၃) ပါး',
    'aniyata.json': 'အနိယတ (၂) ပါး',
    'nissaggiya.json': 'နိဿဂ္ဂိယပါစိတ် (၃၀) ပါး',
    'pacittiya.json': 'သုဒ္ဓပါစိတ် (၉၂) ပါး',
    'patidesaniya.json': 'ပါဋိဒေသနီ (၄) ပါး',
    'sekhiya.json': 'သေခိယ (၇၅) ပါး',
    'samatha.json': 'အဓိကရဏသမထ (၇) ပါး'
};

async function loadCategory(type) {
    const main = document.getElementById('content-area');
    const header = document.getElementById('main-header');
    main.innerHTML = '<div style="text-align:center; padding:50px;">ဒေတာများ ဆွဲယူနေသည်...</div>';
    
    let folder = (type === 'bhikkhuni') ? 'bhukkhuni' : 'bhikkhu';
    let map = (type === 'bhikkhuni') ? niCategoryMap : bhikkhuCategoryMap;
    header.innerText = (type === 'bhikkhuni') ? 'ဘိက္ခုနီဝိနည်းများ' : 'ရဟန်းဝိနည်းများ';

    const files = Object.keys(map);
    let fullHtml = '';

    try {
        for (const file of files) {
            const res = await fetch(`${GITHUB_RAW}${folder}/${file}`);
            if (res.ok) {
                const data = await res.json();
                fullHtml += `<div class="category-header">${map[file]}</div>`;
                
                data.forEach((item, index) => {
                    const uniqueId = `${file.replace('.json','')}-${index}`;
                    fullHtml += `
                        <div class="card" onclick="toggleDetails('${uniqueId}')">
                            <div class="card-header">
                                <h3>${item.title_mm}</h3>
                                <i class="fas fa-chevron-down arrow-icon" id="arrow-${uniqueId}"></i>
                            </div>
                            <div class="card-details" id="${uniqueId}">
                                <hr style="border:0; border-top:1px solid #eee; margin:10px 0;">
                                <p>${item.description}</p>
                            </div>
                        </div>`;
                });
            }
        }
        main.innerHTML = fullHtml || '<p>ဒေတာမရှိပါ။</p>';
    } catch (e) {
        main.innerHTML = '<p style="color:red; text-align:center;">Network Error!</p>';
    }
}

function toggleDetails(id) {
    const el = document.getElementById(id);
    const arrow = document.getElementById(`arrow-${id}`);
    if (el.style.display === "block") {
        el.style.display = "none";
        arrow.style.transform = "rotate(0deg)";
    } else {
        el.style.display = "block";
        arrow.style.transform = "rotate(180deg)";
    }
}

window.onload = () => loadCategory('bhikkhu');


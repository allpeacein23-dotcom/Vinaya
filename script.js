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
    main.innerHTML = '<div style="text-align:center; padding:50px;">ခေတ္တစောင့်ပါ...</div>';
    
    let folder = (type === 'bhikkhuni') ? 'bhukkhuni' : 'bhikkhu';
    let map = (type === 'bhikkhuni') ? niCategoryMap : bhikkhuCategoryMap;
    header.innerText = (type === 'bhikkhuni') ? 'ဘိက္ခုနီဝိနည်းများ' : 'ရဟန်းဝိနည်းများ';

    try {
        let fullHtml = '';
        for (const file of Object.keys(map)) {
            const res = await fetch(`${GITHUB_RAW}${folder}/${file}`);
            if (res.ok) {
                const data = await res.json();
                fullHtml += `<div class="category-header">${map[file]}</div>`;
                
                data.forEach((item, index) => {
                    const uniqueId = `${file.replace('.json','')}-${index}`;
                    
                    // Exceptions list ကို စာသားအဖြစ်ပြောင်းရန်
                    const exceptionHtml = item.exceptions.map(ex => `• ${ex}`).join('<br>');

                    fullHtml += `
                        <div class="card" onclick="toggleDetails('${uniqueId}')">
                            <div class="card-header">
                                <h3>${item.title_mm}</h3>
                                <i class="fas fa-chevron-down arrow-icon" id="arrow-${uniqueId}"></i>
                            </div>
                            <div class="card-details" id="${uniqueId}">
                                <hr style="border:0; border-top:1px solid #eee; margin:10px 0;">
                                <div class="data-row"><span class="label">အမျိုးအစား:</span> ${item.category} (${item.target})</div>
                                <div class="data-row"><span class="label">အဓိပ္ပာယ်ဖွင့်ဆိုချက်:</span> ${item.description}</div>
                                <div class="data-row">
                                    <span class="label">ချွင်းချက်များ:</span>
                                    <div class="exception-box">${exceptionHtml}</div>
                                </div>
                            </div>
                        </div>`;
                });
            }
        }
        main.innerHTML = fullHtml;
    } catch (e) {
        main.innerHTML = '<p style="text-align:center; color:red;">ဒေတာဆွဲယူ၍ မရပါ။</p>';
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

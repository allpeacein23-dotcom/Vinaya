const GITHUB_RAW = "https://raw.githubusercontent.com/allpeacein23-dotcom/Vinaya/main/";

// ဘိက္ခုနီအတွက် Category Header များ
const niCategoryMap = {
    'parajika.json': 'ပါရာဇိက (၈) ပါး',
    'sanghadisesa.json': 'သံဃာဒိသိသ် (၁၇) ပါး',
    'nissaggiya.json': 'နိဿဂ္ဂိယပါစိတ် (၃၀) ပါး',
    'pacittiya.json': 'သုဒ္ဓပါစိတ် (၁၆၆) ပါး',
    'patidesaniya.json': 'ပါဋိဒေသနီ (၈) ပါး',
    'sekhiya.json': 'သေခိယ (၇၅) ပါး',
    'samatha.json': 'အဓိကရဏသမထ (၇) ပါး'
};

// ဘိက္ခုအတွက် Category Header များ
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
    
    let folder = "";
    let map = {};

    // Folder Path သတ်မှတ်ခြင်း
    if (type === 'bhikkhuni') {
        header.innerText = 'ဘိက္ခုနီဝိနည်းများ';
        folder = 'bhukkhuni'; // သင့် Repo အတိုင်း u ပါသည်
        map = niCategoryMap;
    } else {
        header.innerText = 'ရဟန်းဝိနည်းများ';
        folder = 'bhikkhu';
        map = bhikkhuCategoryMap;
    }

    const files = Object.keys(map);
    let fullHtml = '';

    try {
        for (const file of files) {
            const response = await fetch(`${GITHUB_RAW}${folder}/${file}`);
            if (response.ok) {
                const data = await response.json();
                
                // Header အသေး (Category Name)
                fullHtml += `<div class="category-header">${map[file]}</div>`;
                
                data.forEach(item => {
                    fullHtml += `
                        <div class="card">
                            <h3>${item.id}. ${item.title_mm}</h3>
                            <p>${item.description}</p>
                        </div>`;
                });
            }
        }
        main.innerHTML = fullHtml || '<p style="text-align:center;">ဒေတာမရှိပါ။</p>';
    } catch (e) {
        main.innerHTML = '<p style="text-align:center; color:red;">Network Error! GitHub Link ကို စစ်ဆေးပါ။</p>';
    }
}

// ပထမဆုံးဝင်ချင်း ဘိက္ခုကို အလိုအလျောက်ပြရန်
window.onload = () => loadCategory('bhikkhu');

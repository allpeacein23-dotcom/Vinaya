// ၁။ အာပတ်ဆိုင်ရာ Data များ
const arpatData = [
    {
        title: "ပါရာဇိကအာပတ်",
        subtitle: "သာသနာတော်မှ ဆုံးရှုံးစေသော အကြီးလေးဆုံးအပြစ်",
        penalty: "ရဟန်းအဖြစ်မှ စုတေ/ပြတ်စဲခြင်း (အလိုအလျောက် လူဝတ်လဲရမည်)",
        remedy: "ဤအာပတ်သည် ဖြေကြား၍မရပါ။ လူထွက်၍သာ ကုစားရမည်။",
        color: "#d32f2f",
        isHeavy: true
    },
    {
        title: "သံဃာဒိသိသ်အာပတ်",
        subtitle: "သံဃာအဖွဲ့အစည်းဖြင့် ကုစားရသော အပြစ်",
        penalty: "ပရိဝါသ် (Parivasa) ကျင့်ရခြင်း၊ မာနတ် (Manatta) ကျင့်ရခြင်း",
        remedy: "သံဃာအပါး ၂၀ ထံတွင် အဗ္ဘာန်သွင်း၍ ကုစားရမည်။",
        color: "#f57c00",
        isHeavy: true
    },
    {
        title: "ကျန်အာပတ်များ",
        subtitle: "ပါစိတ်၊ ဒုက္ကဋ် စသည့် ဒေသနာကြား၍ရသော အာပတ်များ",
        penalty: "သီလညှိုးနွမ်းခြင်းနှင့် စိတ်မကြည်လင်ခြင်း",
        remedy: "အာပတ်ဖြေဖော် ရဟန်းတစ်ပါးထံတွင် 'ဒေသနာကြားခြင်း' ဖြင့် စင်ကြယ်နိုင်ပါသည်။",
        color: "#388e3c",
        procedure: [
            { q: "အာပတ်ဖြေသူ", text: "သဗ္ဗာ အာပတ္တိယော အာရောစေမိ (၃ ကြိမ်)" },
            { q: "အာပတ်ဖြေဖော်", text: "ပဿသိ အာဝုသော တာ အာပတ္တိယော?" },
            { q: "အာပတ်ဖြေသူ", text: "အာမ ဘန္တေ ပဿာမိ" },
            { q: "အာပတ်ဖြေဖော်", text: "အာယတိံ အာဝုသော သံဝရေယျာသိ" },
            { q: "အာပတ်ဖြေသူ", text: "သာဓု ဘန္တေ သုဌု သံဝရိဿာမိ" }
        ]
    }
];

// ၂။ CSS Style များကို JavaScript မှတစ်ဆင့် ထည့်သွင်းခြင်း
const style = document.createElement('style');
style.innerHTML = `
    body { font-family: 'Pyidaungsu', sans-serif; background-color: #f0f2f5; margin: 0; padding: 20px; display: flex; flex-direction: column; align-items: center; }
    .container { max-width: 600px; width: 100%; }
    .card { background: white; border-radius: 12px; padding: 20px; margin-bottom: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); border-left: 8px solid; transition: transform 0.2s; }
    .card:hover { transform: translateY(-5px); }
    .title { font-size: 1.4rem; font-weight: bold; margin-bottom: 5px; color: #333; }
    .subtitle { font-size: 0.9rem; color: #666; margin-bottom: 15px; font-style: italic; }
    .section-title { font-weight: bold; color: #555; margin-top: 10px; display: block; }
    .content-text { font-size: 1rem; color: #444; margin-bottom: 8px; display: block; }
    .procedure-box { background: #f9f9f9; border: 1px dashed #ccc; padding: 15px; border-radius: 8px; margin-top: 15px; }
    .step { margin-bottom: 10px; font-size: 0.95rem; }
    .role { font-weight: bold; color: #1a73e8; }
    header { text-align: center; margin-bottom: 30px; }
    header h1 { color: #8e24aa; }
`;
document.head.appendChild(style);

// ၃။ UI ကို Render လုပ်မည့် Function
function renderApp() {
    const body = document.body;
    
    // Header ပိုင်း
    const header = document.createElement('header');
    header.innerHTML = `<h1>ဝိနည်းတော်ဆိုင်ရာ အာပတ်များ</h1><p>အာပတ်အမျိုးအစားနှင့် ကုစားပုံလမ်းညွှန်</p>`;
    body.appendChild(header);

    const container = document.createElement('div');
    container.className = 'container';

    arpatData.forEach(data => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.borderLeftColor = data.color;

        let content = `
            <div class="title">${data.title}</div>
            <div class="subtitle">${data.subtitle}</div>
            <span class="section-title">⚠️ ပြစ်ဒဏ်:</span>
            <span class="content-text">${data.penalty}</span>
            <span class="section-title">✅ ကုစားပုံ:</span>
            <span class="content-text">${data.remedy}</span>
        `;

        if (data.procedure) {
            content += `<div class="procedure-box"><strong>ဒေသနာကြားပုံ အဆင့်ဆင့်:</strong><br><br>`;
            data.procedure.forEach(step => {
                content += `
                    <div class="step">
                        <span class="role">${step.q}:</span> 
                        <span>${step.text}</span>
                    </div>
                `;
            });
            content += `</div>`;
        }

        card.innerHTML = content;
        container.appendChild(card);
    });

    body.appendChild(container);
}

// Page Load ဖြစ်တာနဲ့ Render လုပ်မည်
window.onload = renderApp;


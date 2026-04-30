/* arpat.js */
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

function renderArpat() {
    const main = document.getElementById('content-area');
    const header = document.getElementById('main-header');
    header.innerText = 'အာပတ်ဖြေနည်းများ';
    
    let html = '';
    arpatData.forEach((data, index) => {
        const uniqueId = `arpat-new-${index}`;
        
        let procedureHtml = '';
        if (data.procedure) {
            procedureHtml = `<div style="background:#f9f9f9; border:1px dashed #ccc; padding:15px; border-radius:8px; margin-top:15px;">
                <strong style="display:block; margin-bottom:10px;">ဒေသနာကြားပုံ အဆင့်ဆင့်:</strong>`;
            data.procedure.forEach(step => {
                procedureHtml += `
                    <div style="margin-bottom:8px; font-size:0.95rem;">
                        <span style="font-weight:bold; color:#1a73e8;">${step.q}:</span> 
                        <span>${step.text}</span>
                    </div>`;
            });
            procedureHtml += `</div>`;
        }

        html += `
            <div class="card" onclick="toggleDetails('${uniqueId}')" style="border-left: 8px solid ${data.color};">
                <div class="card-header">
                    <div>
                        <h3 style="margin:0;">${data.title}</h3>
                        <small style="color:#666; font-style:italic;">${data.subtitle}</small>
                    </div>
                    <i class="fas fa-chevron-down arrow-icon" id="arrow-${uniqueId}"></i>
                </div>
                <div class="card-details" id="${uniqueId}">
                    <hr style="border:0; border-top:1px solid #eee; margin:15px 0;">
                    <div style="margin-bottom:10px;">
                        <span style="font-weight:bold; color:#555; display:block;">⚠️ ပြစ်ဒဏ်:</span>
                        <span style="color:#444;">${data.penalty}</span>
                    </div>
                    <div style="margin-bottom:10px;">
                        <span style="font-weight:bold; color:#555; display:block;">✅ ကုစားပုံ:</span>
                        <span style="color:#444;">${data.remedy}</span>
                    </div>
                    ${procedureHtml}
                </div>
            </div>`;
    });
    main.innerHTML = html;
}

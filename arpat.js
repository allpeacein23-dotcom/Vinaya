/* arpat.js */
const arpatData = [
    {
        title: "ပါရာဇိကအာပတ်",
        subtitle: "သာသနာတော်မှ ဆုံးရှုံးစေသော အကြီးလေးဆုံးအပြစ်",
        penalty: "ရဟန်းအဖြစ်မှ စုတေ/ပြတ်စဲခြင်း (အလိုအလျောက် လူဝတ်လဲရမည်)",
        remedy: "ဤအာပတ်သည် ဖြေကြား၍မရပါ။ လူထွက်၍သာ ကုစားရမည်။ (ပြန်ရဟန်းခံ၍ မရတော့ပါ)",
        color: "#d32f2f",
        details: "မေထုန်မှီဝဲခြင်း၊ သူ့ဥစ္စာခိုးခြင်း၊ လူသတ်ခြင်း၊ ဈာန်မဂ်ဖိုလ်ရသည်ဟု ကြွားခြင်း စသည်တို့ ပါဝင်သည်။"
    },
    {
        title: "သံဃာဒိသိသ်အာပတ်",
        subtitle: "သံဃာအဖွဲ့အစည်းဖြင့် ကုစားရသော အပြစ်",
        penalty: "ပရိဝါသ် (Parivasa) နှင့် မာနတ် (Manatta) ကျင့်ဝတ်များ ဆောက်တည်ရခြင်း",
        remedy: "အနည်းဆုံး သံဃာအပါး ၂၀ ထံတွင် အဗ္ဘာန် (Abbhana) သွင်း၍ ကုစားရမည်။",
        color: "#f57c00",
        details: `
            <div style="background:#fff3e0; padding:12px; border-radius:8px; margin-top:10px; font-size:0.9rem; color:#444;">
                <strong style="color:#e65100; display:block; margin-bottom:5px;">💡 လိုတိုရှင်း နားလည်ရန်:</strong>
                <p style="margin:5px 0;"><b>၁။ ပရိဝါသ်:</b> အပြစ်ကို ဖုံးကွယ်ထားသမျှ ရက်အတိုင်း ပြန်လည်ကျင့်ကြံရခြင်း (မာန်နှိမ်ခြင်း)။</p>
                <p style="margin:5px 0;"><b>၂။ မာနတ်:</b> အပြစ်ကို ဝန်ခံပြီးနောက် ၆ ည တိတိ သံဃာကို လုပ်ကျွေးရင်း ကျင့်ရခြင်း။</p>
                <p style="margin:5px 0;"><b>၃။ အဗ္ဘာန်:</b> ကျင့်ဝတ်စေ့စပ်ပြီးနောက် သံဃာအပါး ၂၀ က အာပတ်မှ စင်ကြယ်ကြောင်း သတ်မှတ်ပေးခြင်း။</p>
            </div>
        `
    },
    {
        title: "ဒေသနာကြား၍ရသော အာပတ်များ",
        subtitle: "ပါစိတ်၊ ဒုက္ကဋ်၊ ထုလ္လစ္စည်း၊ ပါဋိဒေသနီ စသည့် အာပတ်များ",
        penalty: "သီလညှိုးနွမ်းခြင်းနှင့် နောင်ဘဝ အပါယ်ဘေးရှိခြင်း",
        remedy: "အာပတ်ဖြေဖော် ရဟန်းတစ်ပါးထံတွင် 'ဒေသနာကြားခြင်း' ဖြင့် စင်ကြယ်နိုင်ပါသည်။",
        color: "#388e3c",
        procedure: [
            { q: "အာပတ်ဖြေသူ", text: "သဗ္ဗာ အာပတ္တိယော အာရောစေမိ (၃ ကြိမ်)", mean: "(တပည့်တော် ကျူးလွန်မိသမျှ အာပတ်အားလုံးကို ဝန်ခံပါ၏)" },
            { q: "အာပတ်ဖြေဖော်", text: "ပဿသိ အာဝုသော တာ အာပတ္တိယော?", mean: "(ငါ့ရှင်... ထိုအာပတ်များကို အပြစ်ဟု မြင်ပါသလား?)" },
            { q: "အာပတ်ဖြေသူ", text: "အာမ ဘန္တေ ပဿာမိ", mean: "(မှန်ပါဘုရား၊ အပြစ်ဟု မြင်ပါသည်)" },
            { q: "အာပတ်ဖြေဖော်", text: "အာယတိံ အာဝုသော သံဝရေယျာသိ", mean: "(နောင်အခါတွင် အထူးစောင့်စည်းပါလော့)" },
            { q: "အာပတ်ဖြေသူ", text: "သာဓု ဘန္တေ သုဌု သံဝရိဿာမိ", mean: "(ကောင်းပါပြီဘုရား၊ ကောင်းစွာ စောင့်စည်းပါမည်)" }
        ]
    }
];

function renderArpat() {
    const main = document.getElementById('content-area');
    const header = document.getElementById('main-header');
    header.innerText = 'အာပတ်ဖြေနည်းများ';
    let html = '';
    arpatData.forEach((data, index) => {
        const uniqueId = `arpat-full-${index}`;
        let procHtml = '';
        if (data.procedure) {
            procHtml = `<div style="background:#f1f8e9; padding:15px; border-radius:10px; margin-top:15px; border:1px solid #c8e6c9;">
                <strong style="display:block; margin-bottom:10px; color:#2e7d32;">ဒေသနာကြားပုံ:</strong>`;
            data.procedure.forEach(s => {
                procHtml += `<div style="margin-bottom:10px;"><span style="font-weight:bold; color:#1565c0;">${s.q}:</span> <span style="font-weight:bold;">${s.text}</span><div style="font-size:0.85rem; color:#666; font-style:italic;">${s.mean}</div></div>`;
            });
            procHtml += `</div>`;
        }
        html += `<div class="card" onclick="toggleDetails('${uniqueId}')" style="border-left: 8px solid ${data.color};">
            <div class="card-header"><div><h3 style="margin:0;">${data.title}</h3><small style="color:#757575;">${data.subtitle}</small></div><i class="fas fa-chevron-down arrow-icon" id="arrow-${uniqueId}"></i></div>
            <div class="card-details" id="${uniqueId}"><hr style="border:0; border-top:1px solid #eee; margin:15px 0;">
            <div style="margin-bottom:10px;"><span style="font-weight:bold; color:#d32f2f; display:block;">⚠️ ပြစ်ဒဏ်:</span><span>${data.penalty}</span></div>
            <div style="margin-bottom:10px;"><span style="font-weight:bold; color:#2e7d32; display:block;">✅ ကုစားပုံ:</span><span>${data.remedy}</span></div>
            ${data.details || ''} ${procHtml}</div></div>`;
    });
    main.innerHTML = html;
}

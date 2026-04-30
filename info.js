/* info.js */
const developerInfo = {
    details: {
        appName: "ဝိနည်းတော်များနှင့် အာပတ်ဖြေနည်း လမ်းညွှန်",
        purpose: "ရဟန်းသံဃာတော်များ ဝိနည်းကံပြုရာတွင်လည်းကောင်း၊ အာပတ်များအကြောင်းကို လေ့လာရာတွင်လည်းကောင်း၊ နည်းပညာအကူအညီဖြင့် လက်တစ်ကမ်းတွင် အလွယ်တကူ ကြည့်ရှုနိုင်စေရန် ရည်ရွယ်ပါသည်။",
        benefits: [
            "ဝိနည်းဒေသနာတော်များကို Digital Reference အဖြစ် အချိန်မရွေး ဖတ်ရှုနိုင်ခြင်း။",
            "အာပတ်အမျိုးအစားအလိုက် ပြစ်ဒဏ်နှင့် ကုစားပုံများကို ရှင်းလင်းစွာ ခွဲခြားသိရှိနိုင်ခြင်း။",
            "ဒေသနာကြားပုံ အဆင့်ဆင့်ကို ပါဠိ/မြန်မာ အနက်ဖြင့် လွယ်ကူစွာ လေ့လာနိုင်ခြင်း။"
        ]
    },
    contact: {
        header: "ဆက်သွယ်ရန်နှင့် အကြံပြုရန်",
        footerNote: "ဤ App နှင့် ပတ်သက်၍ ဝိနည်းတော်ဆိုင်ရာ အမှားအယွင်းများ သို့မဟုတ် နည်းပညာပိုင်းဆိုင်ရာ အကြံပြုချက်များရှိပါက အောက်ပါ link များမှတစ်ဆင့် အချိန်မရွေး ဆက်သွယ်နိုင်ပါသည်။",
        channels: [
            {
                platform: "Email",
                address: "allpeacein23@email.com",
                icon: "✉️"
            }
        ]
    }
};

function renderInfo() {
    const main = document.getElementById('content-area');
    const header = document.getElementById('main-header');
    header.innerText = 'App အချက်အလက်';

    const info = developerInfo.details;
    const contact = developerInfo.contact;

    // Benefits list ကို HTML format ပြောင်းခြင်း
    const benefitHtml = info.benefits.map(b => `<li>${b}</li>`).join('');

    main.innerHTML = `
        <div class="card" onclick="toggleDetails('app-details')">
            <div class="card-header">
                <h3>အက်ပ်အကြောင်း</h3>
                <i class="fas fa-chevron-down arrow-icon" id="arrow-app-details"></i>
            </div>
            <div class="card-details" id="app-details" style="display:block;">
                <hr style="border:0; border-top:1px solid #eee; margin:10px 0;">
                <div class="data-row">
                    <span style="font-weight:bold; color:#455a64;">အမည်:</span> ${info.appName}
                </div>
                <div class="data-row">
                    <span style="font-weight:bold; color:#455a64;">ရည်ရွယ်ချက်:</span> 
                    <p style="margin:5px 0;">${info.purpose}</p>
                </div>
                <div class="data-row">
                    <span style="font-weight:bold; color:#455a64;">အကျိုးကျေးဇူးများ:</span>
                    <ul style="margin:5px 0; padding-left:20px; font-size:0.9rem;">
                        ${benefitHtml}
                    </ul>
            </div>
        </div>

        <div class="card" onclick="toggleDetails('app-contact')" style="background: linear-gradient(135deg, #607d8b, #455a64); color: white;">
            <div class="card-header">
                <h3 style="color:white;">${contact.header}</h3>
                <i class="fas fa-chevron-down arrow-icon" id="arrow-app-contact" style="color:white;"></i>
            </div>
            <div class="card-details" id="app-contact">
                <hr style="border:0; border-top:1px solid rgba(255,255,255,0.2); margin:10px 0;">
                <p style="font-size:0.9rem; line-height:1.6;">${contact.footerNote}</p>
                ${contact.channels.map(c => `
                    <a href="mailto:${c.address}" style="display:flex; align-items:center; background:rgba(255,255,255,0.15); padding:12px; border-radius:10px; text-decoration:none; color:white; margin-top:10px;">
                        <span style="margin-right:12px; font-size:1.2rem;">${c.icon}</span>
                        <span>${c.platform}: ${c.address}</span>
                    </a>
                `).join('')}
            </div>
        </div>
    `;
}

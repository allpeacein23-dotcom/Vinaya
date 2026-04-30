const developerInfo = {
    // ၁။ Project နှင့် Developer အချက်အလက်များ
    details: {
        appName: "ဝိနည်းတော်ဆိုင်ရာ အာပတ်ဖြေနည်း လမ်းညွှန်",
        developer: "Partner Developer @ APKPure",
        version: "1.0.0",
        purpose: "ရဟန်းသံဃာတော်များ ဝိနည်းကံပြုရာတွင်လည်းကောင်း၊ အာပတ်များအကြောင်းကို လေ့လာရာတွင်လည်းကောင်း၊ နည်းပညာအကူအညီဖြင့် လက်တစ်ကမ်းတွင် အလွယ်တကူ ကြည့်ရှုနိုင်စေရန် ရည်ရွယ်ပါသည်။",
        benefits: [
            "ဝိနည်းဒေသနာတော်များကို Digital Reference အဖြစ် အချိန်မရွေး ဖတ်ရှုနိုင်ခြင်း။",
            "အာပတ်အမျိုးအစားအလိုက် ပြစ်ဒဏ်နှင့် ကုစားပုံများကို ရှင်းလင်းစွာ ခွဲခြားသိရှိနိုင်ခြင်း။",
            "ဒေသနာကြားပုံ အဆင့်ဆင့်ကို ပါဠိ/မြန်မာ အနက်ဖြင့် လွယ်ကူစွာ လေ့လာနိုင်ခြင်း။"
        ]
    },

    // ၂။ ဆက်သွယ်ရန် (Contact Section)
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
    },

    // ၃။ UI အတွက် CSS Styles (Design ပိုင်း)
    styles: `
        :root {
            --primary-color: #8e24aa;
            --secondary-color: #673ab7;
            --bg-color: #f4f7f6;
            --card-bg: #ffffff;
            --text-main: #212121;
            --text-sub: #757575;
        }

        body { 
            font-family: 'Pyidaungsu', 'Segoe UI', Tahoma, sans-serif; 
            background-color: var(--bg-color); 
            margin: 0; 
            padding: 15px; 
            display: flex; 
            flex-direction: column; 
            align-items: center; 
        }

        .container { max-width: 500px; width: 100%; }

        .card { 
            background: var(--card-bg); 
            border-radius: 15px; 
            padding: 22px; 
            margin-bottom: 20px; 
            box-shadow: 0 4px 15px rgba(0,0,0,0.06); 
            border-left: 10px solid; 
            animation: fadeIn 0.6s ease-out;
        }

        .title { font-size: 1.35rem; font-weight: bold; color: var(--text-main); margin-bottom: 8px; }
        .subtitle { font-size: 0.85rem; color: var(--text-sub); margin-bottom: 15px; display: block; font-style: italic; }

        /* Contact Card Style */
        .contact-card {
            background: linear-gradient(135deg, var(--secondary-color), var(--primary-color));
            color: white;
            border-left: none !important;
        }
        .contact-card .title { color: white; }
        
        .contact-item {
            display: flex;
            align-items: center;
            background: rgba(255, 255, 255, 0.15);
            padding: 12px;
            margin-top: 10px;
            border-radius: 10px;
            text-decoration: none;
            color: white;
            font-size: 0.9rem;
            transition: 0.3s;
        }
        .contact-item:hover { background: rgba(255, 255, 255, 0.25); transform: scale(1.02); }
        .icon { margin-right: 12px; font-size: 1.2rem; }

        .benefit-list { padding-left: 18px; margin-top: 10px; font-size: 0.9rem; color: #444; }
        .benefit-list li { margin-bottom: 8px; }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
        }

        header { text-align: center; margin-bottom: 25px; }
        header h1 { color: var(--primary-color); font-size: 1.6rem; margin-bottom: 5px; }
        header p { color: var(--text-sub); font-size: 0.9rem; }
    `
};

// CSS ကို HTML document ထဲသို့ အလိုအလျောက် ထည့်သွင်းခြင်း
const styleTag = document.createElement('style');
styleTag.innerHTML = developerInfo.styles;
document.head.appendChild(styleTag);


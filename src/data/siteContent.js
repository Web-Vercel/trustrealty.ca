export const contact = {
  name: "Kenny Lu",
  brokerage: "RE/MAX City Realty",
  phoneDisplay: "604.355.9763",
  phoneHref: "tel:+16043559763",
  email: "kennylu.realtor@gmail.com",
  office: "2806 Kingsway #101, Vancouver, BC V5R 5T5",
};

export const languages = [
  { code: "en", label: "EN" }, { code: "zh-CN", label: "简中" },
  { code: "zh-TW", label: "繁中" }, { code: "pa", label: "ਪੰਜਾਬੀ" },
];

export const copy = {
  en: { subtitle: "Licensed Realtor & Evaluator · Greater Vancouver", intro: "Clear, analytical guidance for real estate and business decisions.", consult: "Request a consultation", listings: "Explore properties", services: ["Residential real estate", "Commercial real estate", "Business purchase & sale", "Court-ordered sales"], nav: ["Home","Services","Properties","About","FAQ","Contact"] },
  "zh-CN": { subtitle: "大温哥华房地产和生意买卖评估师持牌经纪", intro: "为房地产和生意买卖决策提供清晰、专业的分析与建议。", consult: "预约咨询", listings: "查看物业", services: ["住宅物业","商业地产","生意买卖","法拍房"], nav: ["首页","服务","物业","关于","常见问题","联系"] },
  "zh-TW": { subtitle: "大溫哥華房地產和生意買賣評估師持牌經紀", intro: "為房地產和生意買賣決策提供清晰、專業的分析與建議。", consult: "預約諮詢", listings: "查看物業", services: ["住宅物業","商業地產","生意買賣","法拍房"], nav: ["首頁","服務","物業","關於","常見問題","聯繫"] },
  pa: { subtitle: "ਗ੍ਰੇਟਰ ਵੈਨਕੂਵਰ ਲਾਇਸੰਸਸ਼ੁਦਾ ਰੀਅਲਟਰ ਅਤੇ ਮੁਲਾਂਕਣਕਰਤਾ", intro: "ਰੀਅਲ ਅਸਟੇਟ ਅਤੇ ਕਾਰੋਬਾਰੀ ਫੈਸਲਿਆਂ ਲਈ ਸਪਸ਼ਟ, ਵਿਸ਼ਲੇਸ਼ਣਾਤਮਕ ਮਾਰਗਦਰਸ਼ਨ।", consult: "ਸਲਾਹ ਲਈ ਬੇਨਤੀ", listings: "ਜਾਇਦਾਦਾਂ ਵੇਖੋ", services: ["ਰਿਹਾਇਸ਼ੀ ਰੀਅਲ ਅਸਟੇਟ","ਵਪਾਰਕ ਰੀਅਲ ਅਸਟੇਟ","ਕਾਰੋਬਾਰ ਖਰੀਦ ਅਤੇ ਵੇਚ","ਕੋਰਟ-ਆਰਡਰ ਵਿਕਰੀ"], nav: ["ਮੁੱਖ","ਸੇਵਾਵਾਂ","ਜਾਇਦਾਦਾਂ","ਬਾਰੇ","FAQ","ਸੰਪਰਕ"] },
};

// TODO: Confirm current availability, pricing and marketing permissions before changing these project summaries.
export const featured = [
  { slug: "charlotte-court", title: "Charlotte Court", location: "Burnaby, BC", summary: "Five-home presale project. Contact Kenny for the current disclosure, availability and pricing.", tag: "Presale" },
  { slug: "900-spence-avenue", title: "900 Spence Avenue", location: "Coquitlam, BC", summary: "Custom-built 7-bedroom, 6-bath home with approximately 4,495 sq ft of interior space.", tag: "Residential", image: "/assets/900-spence-1.png" },
];

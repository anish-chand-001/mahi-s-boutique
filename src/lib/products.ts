import bridal from "@/assets/cat-bridal.jpg";
import cotton from "@/assets/cat-cotton.jpg";
import party from "@/assets/cat-party.jpg";
import daily from "@/assets/cat-daily.jpg";
import silk from "@/assets/cat-silk.jpg";
import suits from "@/assets/cat-suits.jpg";
import kids from "@/assets/cat-kids.jpg";
import tailoring from "@/assets/cat-tailoring.jpg";

export type Category = {
  slug: string;
  title: string;
  hindi: string;
  emoji: string;
  image: string;
};

export const categories: Category[] = [
  { slug: "bridal", title: "Bridal", hindi: "ब्राइडल", emoji: "👰", image: bridal },
  { slug: "silk", title: "Silk", hindi: "सिल्क", emoji: "✨", image: silk },
  { slug: "party", title: "Party Wear", hindi: "पार्टी वियर", emoji: "💃", image: party },
  { slug: "daily", title: "Daily Wear", hindi: "डेली वियर", emoji: "🌸", image: daily },
  { slug: "cotton", title: "Cotton", hindi: "कॉटन", emoji: "🌿", image: cotton },
  { slug: "suits", title: "Suits", hindi: "सूट", emoji: "👗", image: suits },
  { slug: "kids", title: "Kids Wear", hindi: "बच्चों के", emoji: "🧒", image: kids },
  { slug: "tailoring", title: "Tailoring", hindi: "सिलाई", emoji: "✂️", image: tailoring },
];

export type Product = {
  id: string;
  name: string;
  hindi: string;
  price: number;
  tag?: "New" | "Best Seller" | "Handpicked";
  category: string;
  image: string;
};

export const products: Product[] = [
  { id: "p1", name: "Wine Banarasi", hindi: "वाइन बनारसी", price: 2899, tag: "Best Seller", category: "silk", image: silk },
  { id: "p2", name: "Pink Party Saree", hindi: "पिंक पार्टी साड़ी", price: 1499, tag: "New", category: "party", image: party },
  { id: "p3", name: "Red Bridal Set", hindi: "रेड ब्राइडल सेट", price: 8999, tag: "Handpicked", category: "bridal", image: bridal },
  { id: "p4", name: "Peach Anarkali Suit", hindi: "पीच अनारकली सूट", price: 2299, tag: "New", category: "suits", image: suits },
  { id: "p5", name: "Cream Cotton", hindi: "क्रीम कॉटन", price: 799, category: "cotton", image: cotton },
  { id: "p6", name: "Floral Daily Saree", hindi: "फ्लोरल डेली", price: 999, tag: "Best Seller", category: "daily", image: daily },
  { id: "p7", name: "Kids Pink Lehenga", hindi: "किड्स पिंक लहंगा", price: 1299, category: "kids", image: kids },
  { id: "p8", name: "Maroon Silk", hindi: "मरून सिल्क", price: 3499, tag: "Handpicked", category: "silk", image: silk },
];

export const tailoringServices = [
  { hindi: "ब्लाउज़ सिलाई", title: "Blouse Stitching", from: 350, emoji: "🧵" },
  { hindi: "डिज़ाइनर ब्लाउज़", title: "Designer Blouse", from: 850, emoji: "✨" },
  { hindi: "सूट सिलाई", title: "Suit Stitching", from: 700, emoji: "👗" },
  { hindi: "को-ऑर्ड सेट", title: "Co-ord Sets", from: 1200, emoji: "🪡" },
  { hindi: "अल्टरेशन", title: "Alteration & Fitting", from: 150, emoji: "✂️" },
  { hindi: "कस्टम फिटिंग", title: "Custom Fittings", from: 500, emoji: "📏" },
];

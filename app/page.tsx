"use client";
import { useState } from "react";
import { CheckCircle, Shield, Sparkles, Pill, Droplet, Package, FlaskConical, Leaf, Info, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// --- Helper components ---
const SectionTitle = ({eyebrow, title, subtitle}:{eyebrow?:string;title:string;subtitle?:string}) => (
  <div className="mx-auto max-w-3xl text-center mb-10">
    {eyebrow && <p className="text-sm tracking-widest uppercase text-teal-600 font-medium">{eyebrow}</p>}
    <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mt-1">{title}</h2>
    {subtitle && <p className="text-muted-foreground mt-3 text-base md:text-lg">{subtitle}</p>}
  </div>
);

const Stat = ({value,label}:{value:string;label:string}) => (
  <div className="flex flex-col items-center p-4">
    <div className="text-3xl md:text-4xl font-extrabold">{value}</div>
    <div className="text-sm text-muted-foreground mt-1">{label}</div>
  </div>
);

export default function LandingPage(){
  const [quantity,setQuantity] = useState(1)
  const price = 450
  const total = price * quantity

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-emerald-50 text-slate-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-amber-400 to-emerald-500 grid place-items-center text-white font-black">M+</div> */}
            <div><img src="/image/logo.png" width={40} height={50}/></div>
            <div className="font-bold">MEGA CARE <span className="text-blue-900">Multi Vitamin PLUS</span></div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#ingredients" className="hover:text-emerald-700">ส่วนประกอบ</a>
            <a href="#howto" className="hover:text-emerald-700">วิธีรับประทาน</a>
            <a href="#faq" className="hover:text-emerald-700">FAQ</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-amber-300/30 blur-3xl"/>
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl"/>
        <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-2 items-center">
          <div className="relative w-100 justify-center" style={{marginTop: "-8%"}}>
            <div className="aspect-[3/4] rounded-3xl bg-gradient-to-b from-amber-100 to-emerald-100 shadow-xl grid place-items-center h-100 w-100">
              <img alt="Mega Care Multi Vitamin PLUS" src="/image/product.png" className="h-100 w-70 rounded-3xl"/>
            </div>
          </div>
          <div style={{marginTop: "-5%"}}>
            <div className="mt-6 flex flex-wrap justify-center" >
              <a href="https://www.lazada.co.th/products/i5740995305.html?spm=a1zawg.24863640.table_online_product.1.47691e136FPmON">
                <img alt="Lazada" src="/image/lazada.png" className="w-50 sm:w-40 md:w-44 h-24 object-contain"/>
              </a>
              <a href="https://th.shp.ee/MypeHXM">
                <img alt="Shopee" src="/image/shopee.png" className="w-50 sm:w-40 md:w-44 h-24 object-contain"/>
              </a>
              <a href="https://vt.tiktok.com/ZSHvwJxX9okEQ-0iP0K/">
                <img alt="Tiktok" src="/image/tiktok.png" className="w-50 sm:w-40 md:w-44 h-24 object-contain"/>
              </a>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight" style={{fontSize: "1.95rem"}}>
              Mega Care วิตามินพร้อมดื่ม5555
              <span className="block text-emerald-700">ฉีก-ดื่ม-จบ ครบในซองเดียว</span>
            </h1>
            <p className="text-muted-foreground mt-4 text-lg">
              Mega Care Multi Vitamin PLUS รวมวิตามินและแร่ธาตุสำคัญ <strong>15 ชนิด</strong> ในรูปแบบดริ้งช็อต รสส้ม ดื่มง่าย พกสะดวก ผลิตตามมาตรฐาน GMP / GHPs / HACCP และขึ้นทะเบียน อย. <span className="font-semibold">74-1-07455-5-1204</span>
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <div className="inline-flex items-center gap-2 rounded-2xl bg-white shadow px-4 py-2">
                <Shield className="h-5 w-5 text-emerald-600" /> GMP/HACCP
              </div>
              <div className="inline-flex items-center gap-2 rounded-2xl bg-white shadow px-4 py-2">
                <Sparkles className="h-5 w-5 text-amber-600" /> รสส้ม ดื่มง่าย
              </div>
              <div className="inline-flex items-center gap-2 rounded-2xl bg-white shadow px-4 py-2">
                <Package className="h-5 w-5 text-sky-600" /> 15 กรัม × 10 ซอง
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 text-center">
          <Stat value="15" label="สารอาหารสำคัญ"/>
          <Stat value="15 g" label="ต่อซอง (Drink Shot)"/>
          <Stat value="10 ซอง" label="ต่อกล่อง"/>
        </div>
      </section>

      {/* BENEFITS (FDA-compliant) */}
      <section id="benefits" className="py-16" style={{marginTop: "-1%"}}>
        <SectionTitle eyebrow="" title="" subtitle="สรุปประโยชน์ของสารอาหารในผลิตภัณฑ์ โดยไม่กล่าวอ้างการป้องกันหรือรักษาโรค"/>
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          {[{
            icon: <Shield className="h-5 w-5"/>,
            title: "สนับสนุนการทำงานของภูมิคุ้มกัน",
            desc: "วิตามินซี และสังกะสี มีส่วนช่วยให้ระบบภูมิคุ้มกันทำงานตามปกติ",
          },{
            icon: <Sparkles className="h-5 w-5"/>,
            title: "ช่วยในกระบวนการต้านอนุมูลอิสระ",
            desc: "วิตามินอี พร้อมไลโคพีนจากมะเขือเทศ เป็นสารต้านอนุมูลอิสระ",
          },{
            icon: <Leaf className="h-5 w-5"/>,
            title: "คงสภาพผิวและการมองเห็นตามปกติ",
            desc: "วิตามินเอ มีส่วนช่วยคงสภาพของเยื่อบุผิวให้เป็นปกติ และช่วยในการมองเห็นตามปกติ",
          },{
            icon: <Pill className="h-5 w-5"/>,
            title: "เม็ดเลือดแดงและระบบประสาท",
            desc: "วิตามินบี6 บี12 และโฟลิก มีส่วนช่วยในการสร้างเม็ดเลือดแดงและการทำงานของระบบประสาท",
          },{
            icon: <FlaskConical className="h-5 w-5"/>,
            title: "ดูดซึมแคลเซียมและฟอสฟอรัส",
            desc: "วิตามินดี3 มีส่วนช่วยในการดูดซึมแคลเซียมและฟอสฟอรัส และคงระดับแคลเซียมในเลือดตามปกติ",
          },{
            icon: <Droplet className="h-5 w-5"/>,
            title: "กล้ามเนื้อและประสาททำงานปกติ",
            desc: "แมกนีเซียมมีส่วนช่วยในการทำงานตามปกติของกล้ามเนื้อและระบบประสาท",
          }].map((b,i)=> (
            <Card key={i} className="rounded-2xl shadow-sm">
              <CardHeader>
                <div className="h-10 w-10 rounded-xl bg-emerald-100 grid place-items-center mb-2">{b.icon}</div>
                <CardTitle className="text-lg">{b.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{b.desc}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* INGREDIENTS */}
      <section id="ingredients" className="py-16 bg-white/70 border-t">
        <SectionTitle eyebrow="Ingredients" title="ส่วนประกอบใน 1 ซอง (15 กรัม)" subtitle="ข้อมูลจากฉลากผลิตภัณฑ์ Mega Care Multi Vitamin PLUS"/>
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>วิตามินและแร่ธาตุหลัก</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <ul className="space-y-2">
                {[
                  {n:"Ascorbic Acid (วิตามิน C)", a:"500 มก."},
                  {n:"Magnesium Amino Acid Chelate 20% (แมกนีเซียม)", a:"250 มก."},
                  {n:"Yeast Beta-Glucan 75% (เบต้า-กลูแคนจากยีสต์))", a:"250 มก."},
                  {n:"Tomato Extract (สารสกัดจากมะเขือเทศ - ไลโคพีน)", a:"150 มก."},
                  {n:"Lime Powder (ผงมะนาว)", a:"100 มก."},
                  {n:"Zinc Gluconate (สังกะสี)", a:"76.65 มก."},
                  {n:"Vitamin B12 0.1% (วิตามิน B12)", a:"50 มก."},
                  {n:"Manganese Amino Acid Chelate 10% (แมงกานีส)", a:"35 มก."},
                  {n:"Molybdenum Amino Acid Chelated 0.1% (โมลิบดีนัม)", a:"25 มก."},
                  {n:"D-Alpha-Tocopheryl Acetate 50% (วิตามิน E)", a:"20 มก."},
                  {n:"Copper Amino Acid Chelate 10% (ทองแดง)", a:"20 มก."},
                  {n:"Vitamin A Acetate (325000 IU/g) (วิตามิน A)", a:"8.19 มก."},
                  {n:"Vitamin D3 (100000 IU/g) (วิตามิน D3)", a:"6 มก."},
                  {n:"Pyridoxine HCl (วิตามิน B6)", a:"2 มก."},
                  {n:"Folic Acid (วิตามิน B9 - กรดโฟลิก)", a:"0.20 มก."},
                  {n:"D-Biotin (วิตามิน B7 - ไบดอติน)", a:"0.15 มก."},
                ].map((x,i)=> (
                  <li key={i} className="flex items-left justify-between gap-4 border-b last:border-none pb-2">
                    <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-600"/>{x.n}</span>
                    <span className="text-slate-600 tabular-nums">{x.a}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>ข้อมูลผลิตภัณฑ์</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p><strong>รูปแบบ:</strong> ดริ้งช็อต (พร้อมดื่ม) รสส้ม</p>
              <p><strong>สุทธิ:</strong> 15 กรัม/ซอง • 10 ซอง/กล่อง (รวม 150 กรัม)</p>
              <p><strong>มาตรฐานการผลิต:</strong> GMP, GHPs, HACCP</p>
              <p><strong>เลข อย.:</strong> 74-1-07455-5-1204</p>
              <p className="text-xs text-muted-foreground">ส่วนประกอบอื่น: สีสังเคราะห์ (INS 110), สารกันเสีย (INS 211), กลูโคสไซรัป, เดกซ์โทรสแอนไฮดรัส, สารให้ความหวาน (ซูคราโลส), กลิ่นเลียนธรรมชาติ</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* HOW TO USE + DISCLAIMER */}
      <section id="howto" className="py-16">
        <SectionTitle eyebrow="How to" title="วิธีรับประทาน & คำเตือน"/>
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl">
            <CardHeader><CardTitle>วิธีรับประทาน</CardTitle></CardHeader>
            <CardContent className="text-sm space-y-2">
              <p>รับประทานวันละ 1 ซอง (15 กรัม) หลังอาหาร หรือเมื่อสะดวก</p>
              <p>ฉีกซองแล้วดื่มได้ทันที • แนะนำดื่มน้ำตาม</p>
              <p className="text-muted-foreground">เหมาะสำหรับผู้ที่ต้องการเสริมวิตามินและแร่ธาตุจากอาหาร, ผู้ที่ทำงานหนักหรือพักผ่อนน้อย</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader><CardTitle>คำเตือน/ข้อควรระวัง</CardTitle></CardHeader>
            <CardContent className="text-sm space-y-2">
              <ul className="list-disc pl-5 space-y-2">
                <li>เด็กและสตรีมีครรภ์ไม่ควรรับประทาน</li>
                <li>ควรกินอาหารให้หลากหลายครบ 5 หมู่ ในสัดส่วนที่เหมาะสมเป็นประจำ</li>
                <li>เก็บให้พ้นแสงแดดและความร้อน ปิดซองให้สนิทหลังเปิดใช้</li>
              </ul>
              <p className="text-xs text-rose-600 font-medium mt-3">ผลิตภัณฑ์นี้ <u>ไม่มีผลในการป้องกัน หรือรักษาโรค</u></p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16">
        <SectionTitle eyebrow="FAQ" title="คำถามที่พบบ่อย"/>
        <div className="max-w-3xl mx-auto px-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>ต่างจากวิตามินเม็ดอย่างไร?</AccordionTrigger>
              <AccordionContent>
                รูปแบบดริ้งช็อตดื่มง่าย ไม่ติดคอ เหมาะกับผู้ที่ไม่สะดวกกลืนเม็ด และพกพาง่ายต่อการบริโภคในชีวิตประจำวัน
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>ดื่มเวลาไหนได้ผลดีที่สุด?</AccordionTrigger>
              <AccordionContent>
                สามารถดื่มได้หลังอาหารหรือเมื่อสะดวกในแต่ละวัน ทั้งนี้ควรกินอาหารให้ครบ 5 หมู่เป็นประจำ
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>ผู้ที่แพ้วิตามิน/มีโรคประจำตัวดื่มได้หรือไม่?</AccordionTrigger>
              <AccordionContent>
                หากมีภาวะแพ้อาหารหรือโรคประจำตัว ควรปรึกษาแพทย์หรือเภสัชกรก่อนรับประทาน เพื่อความเหมาะสมและปลอดภัยเฉพาะบุคคล
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
          <div>
            <div className="font-bold text-white mb-2">MEGA CARE Multi Vitamin PLUS</div>
            <p className="text-sm text-slate-400">ผลิตและจัดจำหน่ายโดย บริษัท เมกา แคร์ พลัส จำกัด • โรงงานตามมาตรฐาน GMP/GHPs/HACCP</p>
            <p className="text-xs text-amber-300 mt-3">ผลิตภัณฑ์นี้ไม่มีผลในการป้องกันหรือรักษาโรค</p>
          </div>
          <div className="text-sm">
            <div className="font-semibold mb-2">ติดต่อเรา</div>
            <p className="flex items-center gap-2"><Phone className="h-4 w-4"/> 080-693-9635</p>
            <p className="flex items-center gap-2"><Mail className="h-4 w-4"/> megacareplus.th@gmail.com</p>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4"/> Bangkok, Thailand</p>
            <p className="flex items-center gap-2"><Info className="h-4 w-4"/> อย. 74-1-07455-5-1204</p>
          </div>
          <div className="text-sm">
            <div className="font-semibold mb-2">เวลาทำการ</div>
            <p className="flex items-center gap-2"><Clock className="h-4 w-4"/> จันทร์–เสาร์ 9:00–18:00 น.</p>
            <p className="text-xs text-slate-400 mt-4">© {new Date().getFullYear()} Mega Care Plus Co., Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

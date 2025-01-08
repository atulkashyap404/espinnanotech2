"use client";

import { GalleryCard } from "./GalleryCard";

const GALLERY_ITEMS = [
  {
    title: "New Research Breakthrough",
    description: "Our team achieved a significant breakthrough in nanofiber production efficiency, reducing energy consumption by 40%.",
    image: "https://images.unsplash.com/photo-1581093458791-9d58e59c3e3d?auto=format&fit=crop&q=80&w=800",
    date: "March 15, 2024",
    category: "Research",
    externalLink: "https://www.example.com/research-breakthrough"
  },
  {
    title: "International Conference",
    description: "E-SPIN NANOTECH presented latest innovations at the International Nanotech Summit 2024.",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80&w=800",
    date: "February 28, 2024",
    category: "Event",
    externalLink: "https://www.example.com/conference-2024"
  },
  {
    title: "New Laboratory Opening",
    description: "State-of-the-art research facility inaugurated to accelerate nanofiber technology development.",
    image: "https://images.unsplash.com/photo-1581093804475-577d72e31202?auto=format&fit=crop&q=80&w=800",
    date: "January 10, 2024",
    category: "Facility",
    externalLink: "https://www.example.com/new-lab-opening"
  },
  {
    title: "Industry Partnership",
    description: "Strategic collaboration announced with leading pharmaceutical company for medical applications.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112c4e5190?auto=format&fit=crop&q=80&w=800",
    date: "December 5, 2023",
    category: "Partnership",
    externalLink: "https://www.example.com/pharma-partnership"
  },
  {
    title: "Product Launch",
    description: "Introducing our latest electrospinning system with advanced control features.",
    image: "https://images.unsplash.com/photo-1581093458478-6ca8065b6bfc?auto=format&fit=crop&q=80&w=800",
    date: "November 20, 2023",
    category: "Product",
    externalLink: "https://www.example.com/new-product-launch"
  },
  {
    title: "Award Recognition",
    description: "E-SPIN NANOTECH received innovation excellence award for contributions to nanotech industry.",
    image: "https://images.unsplash.com/photo-1581093577421-f561c1a46d01?auto=format&fit=crop&q=80&w=800",
    date: "October 15, 2023",
    category: "Award",
    externalLink: "https://www.example.com/award-2023"
  },
  {
    title: "Product Launch",
    description: "Introducing our latest electrospinning system with advanced control features.",
    image: "https://images.unsplash.com/photo-1581093458478-6ca8065b6bfc?auto=format&fit=crop&q=80&w=800",
    date: "November 20, 2023",
    category: "Product",
    externalLink: "https://www.example.com/new-product-launch"
  },
  {
    title: "Product Launch",
    description: "Introducing our latest electrospinning system with advanced control features.",
    image: "https://images.unsplash.com/photo-1581093458478-6ca8065b6bfc?auto=format&fit=crop&q=80&w=800",
    date: "November 20, 2023",
    category: "Product",
    externalLink: "https://www.example.com/new-product-launch"
  },
  {
    title: "Product Launch",
    description: "Introducing our latest electrospinning system with advanced control features.",
    image: "https://images.unsplash.com/photo-1581093458478-6ca8065b6bfc?auto=format&fit=crop&q=80&w=800",
    date: "November 20, 2023",
    category: "Product",
    externalLink: "https://www.example.com/new-product-launch"
  },
  {
    title: "Product Launch",
    description: "Introducing our latest electrospinning system with advanced control features.",
    image: "https://images.unsplash.com/photo-1581093458478-6ca8065b6bfc?auto=format&fit=crop&q=80&w=800",
    date: "November 20, 2023",
    category: "Product",
    externalLink: "https://www.example.com/new-product-launch"
  },
  {
    title: "Product Launch",
    description: "Introducing our latest electrospinning system with advanced control features.",
    image: "https://images.unsplash.com/photo-1581093458478-6ca8065b6bfc?auto=format&fit=crop&q=80&w=800",
    date: "November 20, 2023",
    category: "Product",
    externalLink: "https://www.example.com/new-product-launch"
  },
  {
    title: "Product Launch",
    description: "Introducing our latest electrospinning system with advanced control features.",
    image: "https://images.unsplash.com/photo-1581093458478-6ca8065b6bfc?auto=format&fit=crop&q=80&w=800",
    date: "November 20, 2023",
    category: "Product",
    externalLink: "https://www.example.com/new-product-launch"
  },
  {
    title: "Product Launch",
    description: "Introducing our latest electrospinning system with advanced control features.",
    image: "https://images.unsplash.com/photo-1581093458478-6ca8065b6bfc?auto=format&fit=crop&q=80&w=800",
    date: "November 20, 2023",
    category: "Product",
    externalLink: "https://www.example.com/new-product-launch"
  },
  {
    title: "Product Launch",
    description: "Introducing our latest electrospinning system with advanced control features.",
    image: "https://images.unsplash.com/photo-1581093458478-6ca8065b6bfc?auto=format&fit=crop&q=80&w=800",
    date: "November 20, 2023",
    category: "Product",
    externalLink: "https://www.example.com/new-product-launch"
  },
  {
    title: "Product Launch",
    description: "Introducing our latest electrospinning system with advanced control features.",
    image: "https://images.unsplash.com/photo-1581093458478-6ca8065b6bfc?auto=format&fit=crop&q=80&w=800",
    date: "November 20, 2023",
    category: "Product",
    externalLink: "https://www.example.com/new-product-launch"
  },
  {
    title: "Product Launch",
    description: "Introducing our latest electrospinning system with advanced control features.",
    image: "https://images.unsplash.com/photo-1581093458478-6ca8065b6bfc?auto=format&fit=crop&q=80&w=800",
    date: "November 20, 2023",
    category: "Product",
    externalLink: "https://www.example.com/new-product-launch"
  },
  {
    title: "Product Launch",
    description: "Introducing our latest electrospinning system with advanced control features.",
    image: "https://images.unsplash.com/photo-1581093458478-6ca8065b6bfc?auto=format&fit=crop&q=80&w=800",
    date: "November 20, 2023",
    category: "Product",
    externalLink: "https://www.example.com/new-product-launch"
  },
  {
    title: "IIT Kanpur Alumnus Sandeep Patil Invents A Way To Bottle Oxygen Which Can Be Sprayed Into Patient's Mouth",
    description: "Recently, because of the shortage of oxygen in the country, an alumnus of IIT Kanpur has invented the Oxyrise bottle that carries oxygen in the pocket.",
    image: "/media/SWASA-OXYSIZE-Gallery.png",
    date: "Jul 14, 2021",
    category: "News",
    externalLink: "https://news.abplive.com/technology/iit-kanpur-alumnus-sandeep-patil-invents-a-way-to-bottle-oxygen-which-can-be-sprayed-into-patient-s-mouth-1469432"
  },
  {
    title: "Dr. Sandip Patil: From The Man With The Invisible Thread To The Mask Man Of India",
    description: "",
    image: "/media/9ysap,image9_enhanced.png",
    date: "May 12, 2021",
    category: "News",
    externalLink: "https://www.ceoinsightsindia.com/leader/dr-sandip-patil-from-the-man-with-the-invisible-thread-to-the-mask-man-of-india-cid-1972.html"
  },
  {
    title: "कानपुर IIT की डिवाइस दूर करेगी स्ट्रेस:इंस्टेंट रिलीफ, एनर्जी बूस्टर का भी काम करेगी; कोरोना की दूसरी लहर के दौरान हुआ था ट्रायल",
    description: "",
    image: "/media/1626178663.png",
    date: "November 20, 2021",
    category: "News",
    externalLink: "https://www.bhaskar.com/local/uttar-pradesh/kanpur/news/ready-made-device-that-will-provide-instant-relief-this-device-will-also-work-as-an-energy-booster-kanpur-iit-128696274.html"
  },
  {
    title: "Swasa: A homespun mask with a 'nano' touch",
    description: "Sandip Patil and his team developed a unique nanofibre mask",
    image: "/media/sandip-patil.jpg",
    date: "March 28, 2021",
    category: "News",
    externalLink: "https://www.theweek.in/theweek/cover/2021/03/18/swasa-a-homespun-mask-with-a-nano-touch.html"
  },
  {
    title: "IIT-Kanpur Based Startup Espin Nanotech to Produce 70,000 N95 'Swasa' Face Masks Per Day Amid Rise in COVID-19 Cases in India",
    description: "Amid the rise in COVID-19 Pandemic in the country, IIT-Kanpur based Espin Nanotech Private Limited announced to produce 70,000 pieces of N95 'Swasa' face masks per day. Currently, the startup produces nearly 30,000 face masks day from its manufacturing unit in IIT-Kanpur campus.",
    image: "/media/SWASA Plus n95.png",
    date: "Aug 14, 2020",
    category: "News",
    externalLink: "https://www.latestly.com/lifestyle/health-wellness/iit-kanpur-based-startup-espin-nanotech-to-produce-70000-n95-swasa-face-masks-per-day-amid-rise-in-covid-19-cases-in-india-1963457.html"
  },
  {
    title: "बाजार में आने वाला है नये लुक वाला एन-95 मास्क, कई खूबियों संग फैशन की पूरी करेगा मांग",
    description: "आइआइटी के पीएचडी के पूर्व छात्र ने सुरक्षा के साथ फैशन का ध्यान रखते हुए मास्क में कई डिजाइन तैयार किए हैं जो लोगों को बेहद पसंद आने वाले। ई-स्पि नैनोटेक स्टार्टअप कंपनी आॅनलाइन बाजार में उतारने की तैयारी कर रही है।",
    image: "/media/SWASA Plus n95.png",
    date: "Oct 27, 2020",
    category: "News",
    externalLink: "https://www.jagran.com/news/state-coronavirus-kanpur-news-iit-phd-student-made-new-look-n-95-mask-according-to-fashion-20961593.html"
  },
  {
    title: "IIT-Kanpur introduces indegenous fashionable masks to fight Covid-19",
    description: "Masks have become a precautionary measure for saving lives during the ongoing corona pandemic.",
    image: "/media/iitkanpurs.png",
    date: "Sep 21, 2020",
    category: "News",
    externalLink: "https://www.indiatvnews.com/news/india/iit-kanpur-introduces-indegenous-fashionable-masks-to-fight-coronavirus-651164"
  },
  {
    title: "1st IITian of His Village, Farmers Son Designs Cutting-Edge Nano Machine!",
    description: "Earning an annual turnover of Rs 4 Crore, Sandip sells his Made-In-India invention in Europe, USA as well as several top research labs in India.",
    image: "/media/iitian sandip sir.png",
    date: "Feb 04, 2020",
    category: "News",
    externalLink: "https://thebetterindia.com/213206/iit-innovation-nanotechnology-maharashtra-farmer-son-startup-india-say143/"
  },
  {
    title: "IIT-Kanpur to produce Swadeshi masks to help doctors fight Covid-19",
    description: "The researchers have set up filter testing equipped with aerosol laser spectrometer and non-woven polypropylene based on 3-4 layer material to make a better mask. It offers much lower resistance to the air passage",
    image: "/media/dosctors.png",
    date: "Apr 04, 2020",
    category: "News",
    externalLink: "https://www.hindustantimes.com/education/iit-kanpur-to-produce-swadeshi-masks-to-help-doctors-fight-covid-19/story-ncT41B1GDysM2FuMadI4qM.html"
  },
  {
    title: "PM Narendra Modi wears IIT-Kanpur's Swasa N-95 mask",
    description: "Prime Minister Narendra Modi, during the Bhoomi Pujan on Wednesday, wore an N-95 mask named 'Swasa' developed by IIT Kanpur",
    image: "/media/swasamask.png",
    date: "Aug 06, 2020",
    category: "News",
    externalLink: "https://timesofindia.indiatimes.com/city/kanpur/pm-narendra-modi-wears-iit-kabpurs-swasa-n-95-mask/articleshow/77384962.cms"
  },
  {
    title: "IITK team designed Namo's Ayodhya mask",
    description: "On Wednesday, as the bhoomi puja for the Ram temple got underway in Ayodhya, IIT-Kanpur's incubator team highlighted the mask the prime minster wore.",
    image: "/media/modi.png",
    date: "Aug 05, 2020",
    category: "News",
    externalLink: "https://m.rediff.com/getahead/report/iitk-team-designed-namos-ayodhya-mask/20200805.htm"
  },
  {
    title: "Top stories this week: 3 entrepreneurs who beat the odds and made it big",
    description: "These are the stories of a famous veg hot dog seller, a nanofibres company owner, and a namkeen brand head who overcame difficult personal situations to emerge successful.",
    image: "/media/three story.jpg",
    date: "Sept 22, 2019",
    category: "News",
    externalLink: "https://yourstory.com/smbstory/successful-small-business-johnny-hot-dog-indore-namkeen-nanofibres"
  },
  {
    title: "From living in a mud hut to launching a nano-tech firm, read how Sandip Patil found success",
    description: "It was passion, surviving instinct and sheer determination that has brought success to Sandip Patil. Hailing from a small village, today his nanotech firm has a turnover of Rs 2.2 crore.",
    image: "/media/sandip sir.webp",
    date: "Jan 01, 2019",
    category: "News",
    externalLink: "https://yourstory.com/smbstory/from-living-in-a-small-mud-hut-to-launching-a-nano-tech-firm-espin-sandip-patil"
  },
  {
    title: "Sandip Patil | The man with the invisible thread",
    description: "Sandip Patil rose above the circumstances of a deprived childhood and has been a key contributor to India's nanotechnology projects",
    image: "/media/news.jpg",
    date: "Aug 09, 2014",
    category: "News",
    externalLink: "https://www.livemint.com/Leisure/FDL7utZBy4oXwoZMNXCaeP/Sandip-Patil--The-man-with-the-invisible-thread.html"
  }
 
] as const;

export function GalleryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {GALLERY_ITEMS.map((item, index) => (
        <GalleryCard
          key={item.title}
          {...item}
          index={index}
        />
      ))}
    </div>
  );
}
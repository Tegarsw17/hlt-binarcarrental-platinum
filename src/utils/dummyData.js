import ThumbIcon from '../assets/thumbs-up.png';
import TagIcon from '../assets/tag.png';
import ClockIcon from '../assets/clock.png';
import AwardIcon from '../assets/award.png';
import ProfileFirst from '../assets/profile2.png';
import ProfileSecond from '../assets/profile3.png';
import FBIcon from '../assets/facebook.png';
import IGIcon from '../assets/instagram.png';
import TwitterIcon from '../assets/twitter.png';
import MailIcon from '../assets/mail.png';
import TwitchIcon from '../assets/twitch.png';
import CarImage from '../assets/car-show.png';

export const navbarLink = [
  { title: 'Our Services', id_name: 'ourservice' },
  { title: 'Why Us', id_name: 'whyus' },
  { title: 'Testimonial', id_name: 'testimonial' },
  { title: 'FAQ', id_name: 'faq' },
];

export const ourServiceData = [
  'Sewa Mobil Dengan Supir di Bali 12 Jam',
  'Sewa Mobil Lepas Kunci di Bali 24 Jam',
  'Sewa Mobil Jangka Panjang Bulanan',
  'Gratis Antar - Jemput Mobil di Bandara',
  'Layanan Airport Transfer / Drop In Out',
];

export const whyUsData = [
  {
    id: 1,
    icon: ThumbIcon,
    title: 'Mobil Lengkap',
    color: '#F9CC00',
    desc: 'Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat',
  },
  {
    id: 2,
    icon: TagIcon,
    title: 'Mobil Murah',
    color: '#FA2C5A',
    desc: 'Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain',
  },
  {
    id: 3,
    icon: ClockIcon,
    title: 'Layanan 24 Jam',
    color: '#0D28A6',
    desc: 'Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu',
  },
  {
    id: 4,
    icon: AwardIcon,
    title: 'Sopir Profesional',
    color: '#5CB85F',
    desc: 'Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu',
  },
];

export const testimonials = [
  {
    id: 1,
    rating: 5,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    name: 'John Dee',
    age: 32,
    address: 'Bromo',
    image: ProfileFirst,
  },
  {
    id: 2,
    rating: 4,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    name: 'Yunita',
    age: 25,
    address: 'Solo',
    image: ProfileSecond,
  },
  {
    id: 3,
    rating: 5,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    name: 'John Dee',
    age: 35,
    address: 'Jakarta',
    image: ProfileFirst,
  },
];

export const faqData = [
  {
    id: 1,
    title: 'Apa saja syarat yang dibutuhkan?',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 2,
    title: 'Berapa hari minimal sewa mobil lepas kunci?',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 3,
    title: 'Berapa hari sebelumnya sabaiknya booking sewa mobil?',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 4,
    title: 'Apakah Ada biaya antar-jemput?',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 5,
    title: 'Bagaimana jika terjadi kecelakaan',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

export const socialIcon = [FBIcon, IGIcon, TwitterIcon, MailIcon, TwitchIcon];

export const itemList = [
  {
    id: 1,
    image: CarImage,
    brand: 'Inova',
    price: 500000,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
  {
    id: 2,
    image: CarImage,
    brand: 'Inova',
    price: 500000,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
  {
    id: 3,
    image: CarImage,
    brand: 'Inova',
    price: 500000,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
  {
    id: 4,
    image: CarImage,
    brand: 'Inova',
    price: 500000,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
];

export const detailCar = {
  title: 'Tentang Paket',
  include: {
    title: 'Include',
    data: [
      'Apa saja yang termasuk dalam paket misal durasi max 12 jam',
      'Sudah termasuk bensin selama 12 jam',
      'Sudah termasuk Tiket Wisata',
      'Sudah termasuk pajak',
    ],
  },
  exclude: {
    title: 'Exclude',
    data: [
      'Tidak termasuk biaya makan sopir Rp 75.000/hari',
      'Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam',
      'Tidak termasuk akomodasi penginapan',
    ],
  },
  refund: {
    title: 'Refund, Reschedule, Overtime',
    data: [
      'Tidak termasuk biaya makan sopir Rp 75.000/hari',
      'Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam',
      'Tidak termasuk akomodasi penginapan',
      'Tidak termasuk biaya makan sopir Rp 75.000/hari',
      'Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam',
      'Tidak termasuk akomodasi penginapan',
      'Tidak termasuk biaya makan sopir Rp 75.000/hari',
      'Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam',
      'Tidak termasuk akomodasi penginapan',
    ],
  },
};

export const itemListadmin = [
  {
    id: 1,
    name: 'Toyota Avanza',
    category: 'medium',
    price: 100000,
    status: false,
    start_rent_at: '2022-01-01',
    finish_rent_at: '2022-01-02',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/0/0d/2019_Toyota_Avanza_1.3_G_F653RM_%2820200228%29.jpg',
    createdAt: '2024-07-04T12:50:48.786Z',
    updateAt: '2024-07-04T12:50:48.786Z',
  },
];

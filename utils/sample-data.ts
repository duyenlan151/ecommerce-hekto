import { ProductItem } from 'models';
import { User } from '../interfaces';

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 101, name: 'Alice' },
  { id: 102, name: 'Bob' },
  { id: 103, name: 'Caroline' },
  { id: 104, name: 'Dave' },
];

export const dataProduct: ProductItem[] = [
  {
    id: 1,
    name: 'Cantilever chair',
    price: '42',
    salePrice: '56',
    code: 'Code - Y523201',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.',
    description: `<p class="ql-align-center"><span class="ql-size-huge">Mô Tả Sản Phẩm</span></p><p class="ql-align-center">Bàn Xếp Gấp Gọn Du Lịch Và Dã Ngoại Dễ Mang Theo Khi Đi Cắm Trại Picnic Ăn Uống Cùng Gia Đình - Hàng Chính Hãng</p><p class="ql-align-justify"><span class="ql-size-small">Bàn gấp du lịch tiện lợi với bề mặt vuông vức rất chắc chắn. Bàn rất dễ tháo lắp và cũng rất chắc chắn khi để đồ. Bàn gấp rất thích hợp cho các buổi cắm trại, dã ngoại cùng gia đình.</span></p><ul><li class="ql-align-justify"><span class="ql-size-small">Kích thước khi mở: 60 x 60 x 60 cm</span></li><li class="ql-align-justify"><span class="ql-size-small">Kích thước gấp gọn: 60 x 20 x 10 cm</span></li><li class="ql-align-justify"><span class="ql-size-small">Trọng lượng: ~4kg</span></li><li class="ql-align-justify"><span class="ql-size-small">Chất liệu: nhôm</span></li><li class="ql-align-justify"><span class="ql-size-small">Màu: đen</span></li><li class="ql-align-justify"><span class="ql-size-small">Có ngăn bàn để đồ tiện dụng</span></li><li class="ql-align-justify"><span class="ql-size-small">Bàn có thể gập gọn xách đi</span></li><li class="ql-align-justify"><span class="ql-size-small">Phù hợp với nhiều không gian khác nhau</span></li><li class="ql-align-justify"><span class="ql-size-small">Chân bàn được bọc cao su chống trượt</span></li><li class="ql-align-justify"><span class="ql-size-small">Được thiết kế công phu tỉ mỉ,bàn không hề bị trơn trượt,lung lay</span></li><li class="ql-align-justify"><span class="ql-size-small">Chịu lực chịu nhiệt tốt</span></li></ul><p class="ql-align-justify"><span class="ql-size-small">Cam kết :</span></p><ul><li class="ql-align-justify"><span class="ql-size-small">Được kiểm tra hàng khi nhận</span></li><li class="ql-align-justify"><span class="ql-size-small">Đổi trả hàng nếu gặp lỗi từ nhà sản xuất trong 1 tuần</span></li><li class="ql-align-justify"><span class="ql-size-small">Tư vấn tận tình</span></li><li class="ql-align-justify"><span class="ql-size-small">Sản phẩm chất lượng</span></li></ul><p><br></p>`,
    currency: 'EUR',
    thumbnail: ['/images/featured/image05.png'],
    colors: ['#05E6B7', '#F701A8', '#00009D'],
  },
  {
    id: 2,
    name: 'Cantilever chair 2',
    price: '42',
    code: 'Code - Y523201',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.',
    currency: 'EUR',
    thumbnail: ['/images/featured/image02.png'],
    colors: ['#05E6B7', '#F701A8', '#FFEAC1'],
  },
  {
    id: 3,
    name: 'Cantilever chair 3',
    price: '42',
    code: 'Code - Y523201',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.',
    currency: 'EUR',
    thumbnail: ['/images/featured/image03.png'],
    colors: ['#FFEAC1', '#F701A8', '#00009D'],
  },
  {
    id: 4,
    name: 'Cantilever chair 4',
    price: '30',
    code: 'Code - Y523201',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.',
    currency: 'GBP',
    thumbnail: ['/images/featured/image04.png'],
    colors: ['#05E6B7', '#F701A8', '#00009D'],
  },
  {
    id: 5,
    name: 'Cantilever chair',
    price: '42',
    code: 'Code - Y523201',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.',
    currency: 'EUR',
    thumbnail: ['/images/featured/image01.png'],
    colors: ['#05E6B7', '#F701A8', '#00009D'],
  },
  {
    id: 6,
    name: 'Cantilever chair 2',
    price: '42',
    code: 'Code - Y523201',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.',
    currency: 'EUR',
    thumbnail: ['/images/featured/image02.png'],
    colors: ['#05E6B7', '#F701A8', '#FFEAC1'],
  },
  {
    id: 7,
    name: 'Cantilever chair 3',
    price: '42',
    code: 'Code - Y523201',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.',
    currency: 'EUR',
    thumbnail: ['/images/featured/image03.png'],
    colors: ['#FFEAC1', '#F701A8', '#00009D'],
  },
  {
    id: 8,
    name: 'Cantilever chair 4',
    price: '30',
    code: 'Code - Y523201',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.',
    currency: 'GBP',
    thumbnail: ['/images/featured/image04.png'],
    colors: ['#05E6B7', '#F701A8', '#00009D'],
  },

  {
    id: 10,
    name: 'Cantilever chair 25',
    price: '42',
    code: 'Code - Y523201',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.',
    currency: 'EUR',
    thumbnail: ['/images/featured/image02.png'],
    colors: ['#05E6B7', '#F701A8', '#FFEAC1'],
  },
  {
    id: 9,
    name: 'Cantilever chair 9',
    price: '42',
    code: 'Code - Y523201',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.',
    currency: 'EUR',
    thumbnail: ['/images/featured/image03.png'],
    colors: ['#FFEAC1', '#F701A8', '#00009D'],
  },
];

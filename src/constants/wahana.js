const SUMATERAUTARA = [
    {
      key: '1',
      propinsi: 'SUMATERA UTARA',
      kabupaten: "ASAHAN",
      namaWahana: 'RSU SETIO HUSODO',
    },
    {
      key: '2',
      propinsi: 'SUMATERA UTARA',
      kabupaten: "ASAHAN",
      namaWahana: 'RSUD HAJI ABDUL MANAN SIMATUPANG',
    },
    {
      key: '3',
      propinsi: 'SUMATERA UTARA',
      kabupaten: "BINJAI",
      namaWahana: 'RUMKIT TK. IV 01.07.04',
    },
    {
      key: '4',
      propinsi: 'SUMATERA UTARA',
      kabupaten: "DELI SERDANG",
      namaWahana: 'RSUD DELI SERDANG',
    },
    {
      key: '5',
      propinsi: 'SUMATERA UTARA',
      kabupaten: "KOTA TEBING TINGGI",
      namaWahana: 'UPTD RSUD KUMPULAN PANE',
    },
    {
      key: '6',
      propinsi: 'SUMATERA UTARA',
      kabupaten: "KOTA TEBING TINGGI",
      namaWahana: 'RS PTPN III SRI PAMELA',
    },
    {
      key: '7',
      propinsi: 'SUMATERA UTARA',
      kabupaten: "MEDAN",
      namaWahana: 'RS MURNI TEGUH',
    },
    {
      key: '8',
      propinsi: 'SUMATERA UTARA',
      kabupaten: "MEDAN",
      namaWahana: 'RS ROYAL PRIMA',
    },
    {
      key: '9',
      propinsi: 'SUMATERA UTARA',
      kabupaten: "MEDAN",
      namaWahana: 'RS MITRA MEDIKA AMPLAS',
    },
    {
      key: '10',
      propinsi: 'SUMATERA UTARA',
      kabupaten: "PEMATANG SIANTAR",
      namaWahana: 'RS TENTARA TK. IV 01.07.01',
    },
    {
      key: '11',
      propinsi: 'SUMATERA UTARA',
      kabupaten: "SIMALUNGUN",
      namaWahana: 'RSUD TUAN RONDAHAIM',
    },
    {
      key: '12',
      propinsi: 'SUMATERA UTARA',
      kabupaten: "TANJUNG BALAI",
      namaWahana: 'RSUD DR. TENGKU MANSYUR',
    },
]

const ACEH = [
  {
    key: '13',
    propinsi: 'ACEH',
    kabupaten: "ACEH TIMUR",
    namaWahana: 'RSUD dr. Zubir Mahmud',
  },
  {
    key: '14',
    propinsi: 'ACEH',
    kabupaten: "ACEH TENGAH",
    namaWahana: 'RSUD Datu Beru Takengon',
  },
  {
    key: '15',
    propinsi: 'ACEH',
    kabupaten: "GAYO LUES",
    namaWahana: 'RSUD Muhammad Ali Kasim Gayo Lues',
  },
  {
    key: '16',
    propinsi: 'ACEH',
    kabupaten: "ACEH UTARA",
    namaWahana: 'RSUD Cut Meutia',
  },
  {
    key: '17',
    propinsi: 'ACEH',
    kabupaten: "BIREUEN",
    namaWahana: 'RSUD dr. Fauziah Bireuen',
  },
  {
    key: '18',
    propinsi: 'ACEH',
    kabupaten: "KOTA BANDA ACEH",
    namaWahana: 'RSUD Meuraxa',
  },
  {
    key: '19',
    propinsi: 'ACEH',
    kabupaten: "KOTA SUBULUSSALAM",
    namaWahana: 'RSUD Subulussalam',
  }
];

const SUMATERABARAT = [
  {
    key: '20',
    propinsi: 'SUMATERA BARAT',
    kabupaten: "PADANG",
    namaWahana: 'RS Unand',
  },
  {
    key: '21',
    propinsi: 'SUMATERA BARAT',
    kabupaten: "PADANG",
    namaWahana: 'RST Reksodiwiryo',
  },
  {
    key: '22',
    propinsi: 'SUMATERA BARAT',
    kabupaten: "PADANG",
    namaWahana: 'Semen Padang Hospital (SPH)',
  },
  {
    key: '23',
    propinsi: 'SUMATERA BARAT',
    kabupaten: "PADANG PANJANG",
    namaWahana: 'RSUD Padang Panjang',
  },
  {
    key: '24',
    propinsi: 'SUMATERA BARAT',
    kabupaten: "PADANG PARIAMAN",
    namaWahana: 'RSUD Padang Pariaman',
  },
  {
    key: '25',
    propinsi: 'SUMATERA BARAT',
    kabupaten: "TANAH DATAR",
    namaWahana: 'RSUD Prof.dr.M.A Hanafiah',
  },
];


const RIAU = [
  {
    key: '26',
    propinsi: 'RIAU',
    kabupaten: "BENGKALIS",
    namaWahana: 'RSUD BENGKALIS',
  },
  {
    key: '27',
    propinsi: 'RIAU',
    kabupaten: "KEPULAUAN MERANTI",
    namaWahana: 'RSUD KAB. KEPULAUAN MERANTI',
  },
  {
    key: '28',
    propinsi: 'RIAU',
    kabupaten: "PEKANBARU",
    namaWahana: 'RS EKA HOSPITAL',
  },
  {
    key: '29',
    propinsi: 'RIAU',
    kabupaten: "PEKANBARU",
    namaWahana: 'RS TK IV PEKANBARU',
  },
  {
    key: '30',
    propinsi: 'RIAU',
    kabupaten: "PEKANBARU",
    namaWahana: 'RS BHAYANGKARA',
  },
  {
    key: '31',
    propinsi: 'RIAU',
    kabupaten: "SIAK",
    namaWahana: `RSUD TENGKU RAFI'AN`,
  },
];

const ALL = [...ACEH, ...SUMATERAUTARA, ...SUMATERABARAT, ...RIAU]
const wahana = {
    ACEH,
    SUMATERAUTARA,
    SUMATERABARAT,
    RIAU,
    ALL,
}

export default wahana;
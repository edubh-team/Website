export type Office = {
  slug: string;
  officeName: string;
  city: string;
  fullAddress: string;
  phone?: string;
  email?: string;
  googleMapsUrl: string;
};

type OfficeSeed = Pick<Office, "slug" | "officeName" | "city" | "fullAddress">;

const DEFAULT_PHONE = "+91 8240501323";
const DEFAULT_EMAIL = "support@edubh.com";

const createOffice = (office: OfficeSeed): Office => ({
  ...office,
  phone: DEFAULT_PHONE,
  email: DEFAULT_EMAIL,
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(office.fullAddress),
});

export const offices: Office[] = [
  createOffice({
    slug: "kolkata-yamuna-apartment",
    officeName: "Yamuna Apartment",
    city: "Kolkata",
    fullAddress:
      "7th Floor, Yamuna Apartment, 86, Golaghata Road, Bidhan Nagar, Kolkata-700048",
  }),
  createOffice({
    slug: "gwalior-mm-plaza",
    officeName: "MM Plaza",
    city: "Gwalior",
    fullAddress:
      "MM Plaza, Chungi Naka Bahodapur, Near Nagar Nigam office, AB Road, Gwalior, MP-474012",
  }),
  createOffice({
    slug: "nandigram-giri-housing",
    officeName: "Giri Housing",
    city: "Nandigram",
    fullAddress:
      "Giri housing 8/B Rampur, P.S. Nandigram, Dist - Purba Medinipur, West Bengal-721631",
  }),
  createOffice({
    slug: "maheshpur-dy-center",
    officeName: "DY Center",
    city: "Maheshpur",
    fullAddress:
      "DY Center, 8/2 Maheshpur, Dist - Paschim Medinipur-721232",
  }),
  createOffice({
    slug: "deoghar-bajarangi-chowk",
    officeName: "Bajarangi Chowk",
    city: "Deoghar",
    fullAddress:
      "1st floor, Bajarangi chowk, near SBI Bank, Dist- Deoghar, Jharkhand-814112",
  }),
  createOffice({
    slug: "nagpur-jagannath-budhawari",
    officeName: "Jagannath Budhawari",
    city: "Nagpur",
    fullAddress: "Jagannath Budhawari, Nagpur city, Maharashtra-440002",
  }),
  createOffice({
    slug: "kolkata-joka",
    officeName: "Joka Office",
    city: "Kolkata",
    fullAddress:
      "46, DTC Building, Diamond Harbour Road, Joka, Kolkata-700104",
  }),
  createOffice({
    slug: "arrah-vashisthapuri",
    officeName: "Vashisthapuri",
    city: "Arrah",
    fullAddress:
      "19, Vashisthapuri, New Police Line, Chandwa, Arrah, Bhojpur, Bihar-802312",
  }),
  createOffice({
    slug: "bardhaman-nababhat",
    officeName: "Nababhat",
    city: "Bardhaman",
    fullAddress:
      "29/2, Nababhat, Beauty Market, Ground floor, Bardhaman, West Bengal-713104",
  }),
  createOffice({
    slug: "bengaluru-rajajinagar",
    officeName: "Rajajinagar",
    city: "Bengaluru",
    fullAddress:
      "No.2596, 11th Main Rd, E block, Gayatrinagar, Rajajinagar, Bengaluru, Karnataka-560010",
  }),
  createOffice({
    slug: "uttarpara-new-gt-road",
    officeName: "New GT Road",
    city: "Uttarpara",
    fullAddress: "53, New GT Road, Uttarpara, Dist- Hooghly, Pin-712258",
  }),
  createOffice({
    slug: "kolkata-dum-dum",
    officeName: "Dum Dum Office",
    city: "Kolkata",
    fullAddress:
      "Building India Post office, 2nd floor, Jessore Rd, K.B.Sarani, Dum Dum, North Dum Dum, West Bengal-700080",
  }),
];

export const getOfficeBySlug = (slug: string) =>
  offices.find((office) => office.slug === slug);

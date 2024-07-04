export const days = [
  { value: "01", name: "01" },
  { value: "02", name: "02" },
  { value: "03", name: "03" },
  { value: "04", name: "04" },
  { value: "05", name: "05" },
  { value: "06", name: "06" },
  { value: "07", name: "07" },
  { value: "08", name: "08" },
  { value: "09", name: "09" },
  { value: "10", name: "10" },
  { value: "11", name: "11" },
  { value: "12", name: "12" },
  { value: "13", name: "13" },
  { value: "14", name: "14" },
  { value: "15", name: "15" },
  { value: "16", name: "16" },
  { value: "17", name: "17" },
  { value: "18", name: "18" },
  { value: "19", name: "19" },
  { value: "20", name: "20" },
  { value: "21", name: "21" },
  { value: "22", name: "22" },
  { value: "23", name: "23" },
  { value: "24", name: "24" },
  { value: "25", name: "25" },
  { value: "26", name: "26" },
  { value: "27", name: "27" },
  { value: "28", name: "28" },
  { value: "29", name: "29" },
  { value: "30", name: "30" },
  { value: "31", name: "31" },
];

export const months = [
  { value: "01", name: "January" },
  { value: "02", name: "February" },
  { value: "03", name: "March" },
  { value: "04", name: "April" },
  { value: "05", name: "May" },
  { value: "06", name: "June" },
  { value: "07", name: "July" },
  { value: "08", name: "August" },
  { value: "09", name: "September" },
  { value: "10", name: "October" },
  { value: "11", name: "November" },
  { value: "12", name: "December" },
];

export const years = [
  1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932,
  1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945,
  1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958,
  1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971,
  1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984,
  1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997,
  1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
  2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
];

export const incomeRanges = [
  "900-2000",
  "2000-5000",
  "5000-10,000",
  "More then 10,000",
];

export const primaryDocumentTypes = [
  { id: 1, name: "Foreign Passport", point: 70 },
  { id: 2, name: "Australian Passport", point: 70 },
  { id: 3, name: "Australian Citizenship Certificate", point: 70 },
  { id: 4, name: "Full Birth Certificate", point: 70 },
  {
    id: 5,
    name: "Certificate of Identity Issued by the Australian Government to Refugees and Non Australian Citizens Forentry to Australia",
    point: 70,
  },
  { id: 6, name: "Australian Driver Licence/Learner’s Permit", point: 40 },
  {
    id: 7,
    name: "Current (Australian) Tertiary Student Identification Card",
    point: 40,
  },
  {
    id: 8,
    name: "Photo Identification Card Issued for Australian Regulatory Purposes",
    point: 40,
  },
  { id: 9, name: "Government Employee ID", point: 40 },
  { id: 10, name: "Defence Force Identity Card", point: 40 },
];

export const secondaryDocumentTypes = [
  { id: 1, name: "Department of Veterans Affairs (DVA) Card", point: 40 },
  { id: 2, name: "Centrelink card (With Reference Number)", point: 40 },
  { id: 3, name: "Birth Certificate Extract", point: 25 },
  {
    id: 4,
    name: "Birth Card (NSW Births, Deaths, Marriages Issue Only)",
    point: 25,
  },
  {
    id: 5,
    name: "Certificate of Identity Issued by the Australian Government to Refugees and Non Australian Citizens Forentry to Australia",
    point: 70,
  },
  { id: 6, name: "Medicare Card", point: 25 },
  { id: 7, name: "Credit Card or Account Card", point: 25 },
  {
    id: 8,
    name: "Australian Marriage Certificate (Australian Registry Issue Only)",
    point: 25,
  },
  {
    id: 9,
    name: "Decree Nisi / Decree Absolute (Australian Registry Issue Only)",
    point: 25,
  },
  {
    id: 10,
    name: "Change of Name Certificate (Australian Registry Issue Only)",
    point: 25,
  },
  { id: 11, name: "Bank Statement (Showing Transactions)", point: 25 },
  { id: 12, name: "Property Lease Agreement - Current Address", point: 25 },
  { id: 13, name: "Taxation Assessment Notice", point: 25 },
  {
    id: 14,
    name: "Australian Mortgage Documents - Current address",
    point: 25,
  },
  {
    id: 15,
    name: "Rating Authority - Current address eg Land Rates",
    point: 25,
  },
  {
    id: 16,
    name: "Utility Bill - Electricity, Gas, Telephone - Current Address (less than 12 months old)",
    point: 20,
  },
  { id: 17, name: "Reference From Indigenous Organisation", point: 20 },
  {
    id: 18,
    name: "Documents Issued Outside Australia (Equivalent to Australian documents).Must have official translation attached",
    point: 20,
  },
];

export const customerDocumentTypes = [
  "Australian Driver License",
  "Overseas Driver License",
  "Passport",
  "Photo Card",
  "Medicare",
  "Utility Bill",
  "Other",
];

export const relationships = [
  // "Self",
  "Father",
  "Mother",
  "Son",
  "Daughter",
  "Husband",
  "Wife",
  "Brother",
  "Sister",
  "Uncle",
  "Aunt",
  "Nephew",
  "Niece",
  "Friend",
  "Colleague",
  "Grandparent",
  "Grandchild",
  "Cousin Brother",
  "Cousin Sister",
  "Other",
];

export const faqData = [
  {
    question: "Does Drivus offer any short-term rentals?",
    answer: "No, minimum contract duration is 6 months",
    delay: 0,
  },
  {
    question: "Is insurance included?",
    answer: "Yes, a comprehensive insurance is included.",
    delay: 100,
  },
  {
    question: "Is insurance excess included?",
    answer: "No, excess in not included. The amount of excess will be $3500.",
    delay: 200,
  },
  {
    question: "Is servicing included?",
    answer: "Servicing is included at our service center.",
    delay: 300,
  },
  {
    question: "Is registration of the vehicle included?",
    answer: "Yes the registration, green slip and pink slip are all included.",
    delay: 400,
  },
  {
    question: "Is fuel included?",
    answer:
      "Since you might always wish to travel to the moon and back with our reliable and high performing cars, fuel is not included.",
    delay: 400,
  },
  {
    question: "Are tolls and fines included?",
    answer: "No, tolls and fines are not included in the weekly rentals.",
    delay: 400,
  },
  {
    question: "How much do you finance for the Rent to Own Scheme?",
    answer:
      "We finance no more than $35000 once you rent a second hand car for a year and qualify for the scheme.",
    delay: 400,
  },
];

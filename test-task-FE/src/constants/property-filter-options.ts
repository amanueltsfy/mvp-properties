export const buyRentOptions = [
  {
    label: "Buy",
    value: "buy"
  },
  {
    label: "Rent",
    value: "rent"
  }
];

export const typeOptions = [
  "Apartment",
  "House",
  "Semi-detached house",
  "Commercial real estate",
  "Miscellaneous"
].map((option) => ({ label: option, value: option }));

export const priceOptions = Array.from({
  length: 15
}).map((_: any, index: number) => {
  const room = index ? index * 100 : 50;
  return { label: room.toString(), value: room };
});

export const roomOptions = Array.from({
  length: 15
}).map((_: any, index: number) => {
  const room = index + 1;
  return { label: room.toString(), value: room };
});
